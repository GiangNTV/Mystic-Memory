// ==========================================
// PLANETS AI FORECAST
// ==========================================
// Patch 2 phần trong planets view:
// 1. "Vận Hành của các Thiên Thể 7 Ngày Tới" (#planetary-forecast)
//    → AI phân tích vị trí hành tinh hiện tại: sự kiện, cảnh báo, thực hành
// 2. "Dự Báo 7 Ngày" tab (#transit-timeline)
//    → AI phân tích transit cụ thể: hành tinh đổi cung, góc độ → dự báo theo ngày
// Load sau: app.js

(function initPlanetsAI() {

    // ─── SESSION CACHE ─────────────────────────────────────────────
    const _cache = {};

    // ─── HELPER: GỌI CLAUDE API ────────────────────────────────────
    // ─── RATE LIMIT QUEUE (tránh lỗi 429) ──────────────────────────
    let _lastCallTime = 0;
    const _MIN_INTERVAL_MS = 4500; // tối thiểu 4.5 giây giữa 2 lần gọi

    async function _waitForRateLimit() {
        const now = Date.now();
        const elapsed = now - _lastCallTime;
        if (elapsed < _MIN_INTERVAL_MS) {
            await new Promise(r => setTimeout(r, _MIN_INTERVAL_MS - elapsed));
        }
        _lastCallTime = Date.now();
    }

    async function callClaude(prompt, systemPrompt, maxTokens = 900, retries = 3) {
        const cacheKey = prompt.slice(0, 120);
        if (_cache[cacheKey]) return _cache[cacheKey];

        const apiKey = (window.MYSTIC_CONFIG && window.MYSTIC_CONFIG.MYSTIC_API_KEY) || '';
        if (!apiKey || apiKey === 'YOUR_GEMINI_KEY_HERE') throw new Error('API key chưa được cài đặt trong config.js');

        const fullPrompt = systemPrompt + '\n\n' + prompt;

        for (let attempt = 1; attempt <= retries; attempt++) {
            await _waitForRateLimit();
            try {
                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: fullPrompt }] }],
                            generationConfig: { maxOutputTokens: maxTokens, temperature: 0.7 }
                        })
                    }
                );

                if (response.status === 429) {
                    const waitMs = attempt * 8000; // tăng dần: 8s, 16s, 24s
                    console.warn(`[Planets AI] Rate limit 429, thử lại sau ${waitMs/1000}s (lần ${attempt}/${retries})`);
                    _lastCallTime = Date.now() + waitMs;
                    if (attempt === retries) throw new Error('API 429');
                    continue;
                }

                if (!response.ok) throw new Error('API ' + response.status);

                const data = await response.json();
                const text = (data.candidates?.[0]?.content?.parts?.[0]?.text || '').replace(/```json|```/g, '').trim();
                const result = JSON.parse(text);
                _cache[cacheKey] = result;
                return result;

            } catch(e) {
                if (attempt === retries || !e.message.includes('429')) throw e;
            }
        }
    }

    // ─── HELPER: LẤY VỊ TRÍ HÀNH TINH HIỆN TẠI ───────────────────
    function getPlanetPositions(dateObj) {
        if (typeof Astronomy === 'undefined') return null;
        const SIGN_KEYS = ['aries','taurus','gemini','cancer','leo','virgo',
                           'libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
        const SIGNS_EN  = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo',
                           'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
        const SIGNS_VN  = ['Bạch Dương','Kim Ngưu','Song Tử','Cự Giải','Sư Tử','Xử Nữ',
                           'Thiên Bình','Bọ Cạp','Nhân Mã','Ma Kết','Bảo Bình','Song Ngư'];
        const ELEMENT   = ['Fire','Earth','Air','Water','Fire','Earth',
                           'Air','Water','Fire','Earth','Air','Water'];
        const QUALITY   = ['Cardinal','Fixed','Mutable','Cardinal','Fixed','Mutable',
                           'Cardinal','Fixed','Mutable','Cardinal','Fixed','Mutable'];

        const bodies = [
            { id: 'Sun',     key: 'Sun',     symbol: '☀️' },
            { id: 'Moon',    key: 'Moon',    symbol: '🌙' },
            { id: 'Mercury', key: 'Mercury', symbol: '☿' },
            { id: 'Venus',   key: 'Venus',   symbol: '♀' },
            { id: 'Mars',    key: 'Mars',    symbol: '♂' },
            { id: 'Jupiter', key: 'Jupiter', symbol: '♃' },
            { id: 'Saturn',  key: 'Saturn',  symbol: '♄' },
        ];

        const t = Astronomy.MakeTime(dateObj);
        const result = {};

        bodies.forEach(b => {
            try {
                const lon = Astronomy.EclipticLongitude(b.id, t);
                const norm = ((lon % 360) + 360) % 360;
                const si = Math.floor(norm / 30) % 12;
                const deg = Math.floor(norm % 30);
                result[b.key] = {
                    symbol: b.symbol,
                    deg,
                    signIdx: si,
                    signKey: SIGN_KEYS[si],
                    signEN: SIGNS_EN[si],
                    signVN: SIGNS_VN[si],
                    element: ELEMENT[si],
                    quality: QUALITY[si]
                };
            } catch(e) {}
        });

        try {
            const moonPhase = Astronomy.MoonPhase(t);
            result._moonPhase = moonPhase;
            result._isWaxing = moonPhase < 180;
            const phaseName = moonPhase < 45 ? 'New Moon' : moonPhase < 135 ? 'Waxing Crescent/Quarter'
                : moonPhase < 180 ? 'Waxing Gibbous' : moonPhase < 225 ? 'Full Moon'
                : moonPhase < 315 ? 'Waning Gibbous/Quarter' : 'Waning Crescent';
            result._phaseNameEN = phaseName;
        } catch(e) {}

        return result;
    }

    // ─── HELPER: SCAN TRANSITS 7 NGÀY ──────────────────────────────
    function getTransitsNext7Days() {
        if (typeof Astronomy === 'undefined') return [];
        const now = new Date();
        const SIGN_KEYS = ['aries','taurus','gemini','cancer','leo','virgo',
                           'libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
        const SIGNS_EN  = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo',
                           'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
        const SIGNS_VN  = ['Bạch Dương','Kim Ngưu','Song Tử','Cự Giải','Sư Tử','Xử Nữ',
                           'Thiên Bình','Bọ Cạp','Nhân Mã','Ma Kết','Bảo Bình','Song Ngư'];
        const BODY_NAMES_EN = { Sun:'Sun', Moon:'Moon', Mercury:'Mercury', Venus:'Venus', Mars:'Mars' };
        const BODY_NAMES_VN = { Sun:'Mặt Trời', Moon:'Mặt Trăng', Mercury:'Sao Thủy', Venus:'Sao Kim', Mars:'Sao Hỏa' };

        const bodies = ['Sun','Moon','Mercury','Venus','Mars'];
        const events = [];

        for (let d = 0; d <= 7; d++) {
            const checkTime = new Date(now.getTime() + d * 86400000);
            const prevTime  = new Date(checkTime.getTime() - 86400000);
            const aT  = Astronomy.MakeTime(checkTime);
            const aPT = Astronomy.MakeTime(prevTime);

            bodies.forEach(id => {
                try {
                    const si     = Math.floor(((Astronomy.EclipticLongitude(id, aT)  % 360 + 360) % 360) / 30) % 12;
                    const prevSi = Math.floor(((Astronomy.EclipticLongitude(id, aPT) % 360 + 360) % 360) / 30) % 12;
                    if (si !== prevSi) {
                        events.push({
                            dayOffset: d,
                            date: checkTime,
                            body: id,
                            bodyEN: BODY_NAMES_EN[id],
                            bodyVN: BODY_NAMES_VN[id],
                            fromSignEN: SIGNS_EN[prevSi],
                            fromSignVN: SIGNS_VN[prevSi],
                            toSignEN: SIGNS_EN[si],
                            toSignVN: SIGNS_VN[si],
                            toSignKey: SIGN_KEYS[si],
                            type: 'sign_change'
                        });
                    }
                } catch(e) {}
            });

            // Moon phases
            try {
                const mp  = Astronomy.MoonPhase(aT);
                const pmp = Astronomy.MoonPhase(aPT);
                [[0,'New Moon','Trăng Mới'],[90,'First Quarter','Trăng Thượng Huyền'],
                 [180,'Full Moon','Trăng Tròn'],[270,'Last Quarter','Trăng Hạ Huyền']].forEach(([ph, nameEN, nameVN]) => {
                    if ((pmp < ph && mp >= ph) || (ph === 0 && pmp > 350 && mp < 10)) {
                        events.push({ dayOffset: d, date: checkTime, body: 'Moon',
                            type: 'moon_phase', phaseEN: nameEN, phaseVN: nameVN, phaseDeg: ph });
                    }
                });
            } catch(e) {}
        }

        return events;
    }

    // ══════════════════════════════════════════════════════════════
    // PHẦN 1 — PATCH planetary-forecast
    // "Vận Hành của các Thiên Thể 7 Ngày Tới"
    // Nội dung: năng lượng hiện tại + gợi ý thực hành + cảnh báo
    // ══════════════════════════════════════════════════════════════
    const _origShowForecast = window.showForecast;
    window.showForecast = async function(time) {
        // Gọi hàm gốc trước để render base content
        if (_origShowForecast) _origShowForecast(time);

        const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
        const isVN = lang === 'vn';

        const forecastEl   = document.getElementById('planetary-forecast');
        const forecastText = document.getElementById('forecast-text');
        if (!forecastEl || !forecastText) return;

        // Kiểm tra Astronomy
        if (typeof Astronomy === 'undefined') return;

        // Inject loading indicator sau base content
        const aiPanel = document.createElement('div');
        aiPanel.id = 'ai-planetary-panel';
        aiPanel.innerHTML = `
            <div style="margin-top:20px;padding:16px 18px;background:rgba(139,92,246,0.06);
                border:1px solid rgba(139,92,246,0.2);border-radius:16px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
                    <span style="font-size:14px;">✦</span>
                    <span style="font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;
                        color:rgba(167,139,250,0.9);">${isVN ? 'Phân Tích Chiêm Tinh 7 Ngày' : '7-Day Astro Analysis'}</span>
                </div>
                <p style="font-size:12px;color:rgba(148,163,184,0.6);font-style:italic;
                    animation:pulse 1.5s infinite;">${isVN ? 'Đang phân tích năng lượng thiên thể...' : 'Reading celestial energies...'}</p>
            </div>`;
        forecastText.appendChild(aiPanel);

        try {
            const pos  = getPlanetPositions(new Date());
            if (!pos) return;

            const moonPhaseDesc = isVN
                ? `Pha trăng hiện tại: ${pos._phaseNameEN} (${Math.round(pos._moonPhase)}°), ${pos._isWaxing ? 'đang tăng' : 'đang giảm'}`
                : `Current moon phase: ${pos._phaseNameEN} (${Math.round(pos._moonPhase)}°), ${pos._isWaxing ? 'waxing' : 'waning'}`;

            const planetSummary = Object.entries(pos)
                .filter(([k]) => !k.startsWith('_'))
                .map(([name, p]) => `${name} at ${p.deg}° ${isVN ? p.signVN : p.signEN} (${p.element}/${p.quality})`)
                .join('; ');

            const prompt = isVN
                ? `Bạn là nhà chiêm tinh người Việt, dùng tiếng Việt tự nhiên như người bản ngữ — không dịch máy, không cứng nhắc, không dùng từ hoa mỹ sáo rỗng.
Dữ liệu hành tinh hôm nay:
${planetSummary}
${moonPhaseDesc}

Viết bằng giọng gần gũi, chân thật, như người bạn am hiểu chiêm tinh đang chia sẻ với mình. Tránh các cụm sáo như "năng lượng vũ trụ", "rung động tích cực", "hãy lắng nghe nội tâm".

Trả về JSON đúng format (không markdown):
{
  "energy_title": "Tiêu đề tự nhiên về tuần này, tối đa 10 từ",
  "overall": "Tóm tắt tuần tới bằng tiếng Việt tự nhiên, 50-70 từ, đọc như đang nói chuyện",
  "highlight": "Điểm đáng chú ý nhất trong tuần, 30-40 từ, cụ thể và thực tế",
  "practices": [
    {"icon": "🧘", "title": "Gợi ý ngắn gọn", "detail": "Hướng dẫn thực tế 20-25 từ, không sáo rỗng"},
    {"icon": "💼", "title": "Gợi ý ngắn gọn", "detail": "Hướng dẫn thực tế 20-25 từ, không sáo rỗng"},
    {"icon": "❤️", "title": "Gợi ý ngắn gọn", "detail": "Hướng dẫn thực tế 20-25 từ, không sáo rỗng"}
  ],
  "caution": "Điều nên tránh tuần này, 25-35 từ, nói thẳng và thực tế",
  "best_days": "Khoảng thời gian thuận lợi trong 7 ngày tới, 25-30 từ"
}`
                : `You are an expert astrologer with 30 years of experience.
REAL planetary data today:
${planetSummary}
${moonPhaseDesc}

Analyze and return JSON in EXACT format (no markdown):
{
  "energy_title": "Short title for this week's energy (8-12 words)",
  "overall": "Overview of next 7 days energy based on planet positions (50-70 words)",
  "highlight": "The most notable planetary configuration or event to watch (30-40 words)",
  "practices": [
    {"icon": "🧘", "title": "Practice 1 (4-6 words)", "detail": "Specific guidance (20-25 words)"},
    {"icon": "💼", "title": "Practice 2 (4-6 words)", "detail": "Specific guidance (20-25 words)"},
    {"icon": "❤️", "title": "Practice 3 (4-6 words)", "detail": "Specific guidance (20-25 words)"}
  ],
  "caution": "Important warning or negative energy to avoid (25-35 words)",
  "best_days": "Best days/windows in next 7 days for taking action (25-30 words)"
}`;

            const sysPrompt = isVN
                ? 'Chuyên gia chiêm tinh học. Chỉ trả về JSON thuần túy, không giải thích thêm.'
                : 'Expert astrologer. Return only pure JSON, no extra text.';

            const ai = await callClaude(prompt, sysPrompt, 900);

            aiPanel.innerHTML = `
                <div style="margin-top:20px;padding:18px 20px;background:rgba(139,92,246,0.06);
                    border:1px solid rgba(139,92,246,0.2);border-radius:16px;">

                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
                        <span style="font-size:14px;">✦</span>
                        <span style="font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;
                            color:rgba(167,139,250,0.9);">${isVN ? 'Phân Tích Chiêm Tinh 7 Ngày' : '7-Day Astro Analysis'}</span>
                    </div>

                    <p style="font-size:13px;font-weight:600;color:rgba(245,243,255,0.95);
                        margin-bottom:10px;line-height:1.5;">${ai.energy_title || ''}</p>

                    <p style="font-size:12px;color:rgba(203,213,225,0.85);line-height:1.8;
                        margin-bottom:14px;">${ai.overall || ''}</p>

                    ${ai.highlight ? `
                    <div style="padding:10px 14px;background:rgba(245,158,11,0.07);
                        border-left:3px solid rgba(245,158,11,0.5);border-radius:0 8px 8px 0;margin-bottom:14px;">
                        <span style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
                            color:rgba(245,158,11,0.8);display:block;margin-bottom:4px;">
                            ${isVN ? '✦ Điểm Nổi Bật' : '✦ Highlight'}
                        </span>
                        <p style="font-size:12px;color:rgba(253,230,138,0.85);line-height:1.7;margin:0;">
                            ${ai.highlight}</p>
                    </div>` : ''}

                    ${ai.practices && ai.practices.length ? `
                    <div style="margin-bottom:14px;">
                        <span style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
                            color:rgba(52,211,153,0.8);display:block;margin-bottom:10px;">
                            ${isVN ? '✦ Gợi Ý Thực Hành' : '✦ Recommended Practices'}
                        </span>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${ai.practices.map(p => `
                            <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 12px;
                                background:rgba(52,211,153,0.05);border-radius:10px;
                                border:1px solid rgba(52,211,153,0.12);">
                                <span style="font-size:16px;flex-shrink:0;margin-top:1px;">${p.icon}</span>
                                <div>
                                    <span style="font-size:11px;font-weight:700;color:rgba(167,243,208,0.9);
                                        display:block;margin-bottom:2px;">${p.title}</span>
                                    <span style="font-size:11px;color:rgba(148,163,184,0.85);
                                        line-height:1.6;">${p.detail}</span>
                                </div>
                            </div>`).join('')}
                        </div>
                    </div>` : ''}

                    ${ai.caution ? `
                    <div style="padding:10px 14px;background:rgba(239,68,68,0.06);
                        border-left:3px solid rgba(239,68,68,0.4);border-radius:0 8px 8px 0;margin-bottom:12px;">
                        <span style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
                            color:rgba(252,165,165,0.8);display:block;margin-bottom:4px;">
                            ⚠ ${isVN ? 'Lưu Ý' : 'Caution'}
                        </span>
                        <p style="font-size:11px;color:rgba(252,165,165,0.75);line-height:1.7;margin:0;">
                            ${ai.caution}</p>
                    </div>` : ''}

                    ${ai.best_days ? `
                    <div style="padding:10px 14px;background:rgba(99,102,241,0.07);
                        border-left:3px solid rgba(99,102,241,0.4);border-radius:0 8px 8px 0;">
                        <span style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
                            color:rgba(165,180,252,0.8);display:block;margin-bottom:4px;">
                            ✦ ${isVN ? 'Ngày Tốt Để Hành Động' : 'Best Days to Act'}
                        </span>
                        <p style="font-size:11px;color:rgba(199,210,254,0.8);line-height:1.7;margin:0;">
                            ${ai.best_days}</p>
                    </div>` : ''}
                </div>`;

        } catch(err) {
            console.error('[Planets AI] Forecast error:', err);

            // Xác định thông báo lỗi cụ thể
            let errTitle = isVN ? '⚠️ Không thể tải phân tích AI' : '⚠️ Could not load AI analysis';
            let errDetail = err.message || (isVN ? 'Lỗi không xác định' : 'Unknown error');

            if (err.message && err.message.includes('config.js')) {
                errDetail = isVN
                    ? 'API key chưa được điền vào file config.js. Hãy mở file config.js và điền key Gemini của bạn vào.'
                    : 'API key not set in config.js. Please open config.js and fill in your Gemini key.';
            } else if (err.message && (err.message.includes('400') || err.message.includes('403'))) {
                errDetail = isVN
                    ? 'API key không hợp lệ hoặc bị từ chối. Hãy kiểm tra lại key Gemini trong file config.js.'
                    : 'API key is invalid or rejected. Please check your Gemini key in config.js.';
            } else if (err.message && err.message.includes('429')) {
                errDetail = isVN
                    ? 'Đã gọi AI quá nhiều lần. Vui lòng đợi vài giây rồi thử lại.'
                    : 'Too many AI requests. Please wait a moment and try again.';
            } else if (err.message && (err.message.includes('Failed to fetch') || err.message.includes('NetworkError'))) {
                errDetail = isVN
                    ? 'Không có kết nối internet hoặc bị chặn bởi trình duyệt (CORS). Thử tắt extension chặn quảng cáo.'
                    : 'No internet connection or blocked by browser (CORS). Try disabling ad-blocker extensions.';
            } else if (err.message && err.message.includes('JSON')) {
                errDetail = isVN
                    ? 'AI trả về dữ liệu không đúng định dạng. Đang thử lại...'
                    : 'AI returned malformed data. Retrying...';
            }

            aiPanel.innerHTML = `
                <div style="margin-top:16px;padding:14px 16px;background:rgba(239,68,68,0.07);
                    border:1px solid rgba(239,68,68,0.25);border-radius:12px;">
                    <p style="font-size:12px;font-weight:700;color:rgba(252,165,165,0.9);margin:0 0 6px 0;">
                        ${errTitle}
                    </p>
                    <p style="font-size:11px;color:rgba(252,165,165,0.7);margin:0;line-height:1.6;">
                        ${errDetail}
                    </p>
                    <p style="font-size:10px;color:rgba(148,163,184,0.5);margin:8px 0 0 0;font-family:monospace;">
                        Chi tiết: ${err.message || 'unknown'}
                    </p>
                </div>`;
        }
    };

    // ══════════════════════════════════════════════════════════════
    // PHẦN 2 — PATCH renderTransitTimeline
    // "Dự Báo 7 Ngày" — AI phân tích từng transit/phase cụ thể
    // Nội dung: dự báo sự kiện cụ thể mỗi ngày, khác với phần 1
    // ══════════════════════════════════════════════════════════════
    const _origRenderTransit = window.renderTransitTimeline;
    window.renderTransitTimeline = async function() {
        // Gọi hàm gốc trước để render timeline cơ bản
        if (_origRenderTransit) await _origRenderTransit();

        const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
        const isVN = lang === 'vn';
        const timeline = document.getElementById('transit-timeline');
        if (!timeline || typeof Astronomy === 'undefined') return;

        // Inject AI summary panel ở đầu timeline
        const existingAI = document.getElementById('ai-transit-summary');
        if (existingAI) existingAI.remove();

        const summaryPanel = document.createElement('div');
        summaryPanel.id = 'ai-transit-summary';
        summaryPanel.style.cssText = 'margin-bottom:24px;';
        summaryPanel.innerHTML = `
            <div style="padding:16px 18px;background:rgba(56,189,248,0.05);
                border:1px solid rgba(56,189,248,0.18);border-radius:16px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                    <span style="font-size:13px;">🔭</span>
                    <span style="font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;
                        color:rgba(125,211,252,0.9);">${isVN ? 'Dự Báo Chi Tiết 7 Ngày' : '7-Day Detailed Forecast'}</span>
                </div>
                <p style="font-size:12px;color:rgba(148,163,184,0.6);font-style:italic;
                    animation:pulse 1.5s infinite;">${isVN ? 'Đang tính toán các sự kiện thiên văn...' : 'Computing celestial events...'}</p>
            </div>`;

        timeline.insertBefore(summaryPanel, timeline.firstChild);

        try {
            const events = getTransitsNext7Days();
            const currentPos = getPlanetPositions(new Date());
            if (!currentPos) return;

            const now = new Date();
            const dateStr = now.toLocaleDateString(isVN ? 'vi-VN' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            let eventsDesc = '';
            if (events.length === 0) {
                eventsDesc = isVN
                    ? 'Không có hành tinh nào đổi cung trong 7 ngày tới. Các hành tinh ở vị trí ổn định.'
                    : 'No planet sign changes in the next 7 days. Planets are in stable positions.';
            } else {
                eventsDesc = events.map(ev => {
                    const d = ev.date.toLocaleDateString(isVN ? 'vi-VN' : 'en-US', { weekday: 'short', day: 'numeric', month: 'short' });
                    if (ev.type === 'sign_change') {
                        return isVN
                            ? `${d}: ${ev.bodyVN} rời ${ev.fromSignVN} → vào ${ev.toSignVN}`
                            : `${d}: ${ev.bodyEN} leaves ${ev.fromSignEN} → enters ${ev.toSignEN}`;
                    } else {
                        return isVN
                            ? `${d}: ${ev.phaseVN}`
                            : `${d}: ${ev.phaseEN}`;
                    }
                }).join('\n');
            }

            const planetSummary = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn']
                .filter(k => currentPos[k])
                .map(k => {
                    const p = currentPos[k];
                    return `${k} in ${isVN ? p.signVN : p.signEN} at ${p.deg}°`;
                }).join(', ');

            const prompt = isVN
                ? `Bạn là nhà chiêm tinh người Việt, viết tiếng Việt tự nhiên như người bản ngữ — không dịch máy, không sáo rỗng.
Hôm nay: ${dateStr}
Vị trí hành tinh: ${planetSummary}
Sự kiện thiên văn 7 ngày tới:
${eventsDesc}

Dựa vào dữ liệu trên, viết dự báo 7 ngày bằng giọng văn gần gũi, thực tế — như người bạn am hiểu chiêm tinh đang kể chuyện, không dùng từ ngữ hoa mỹ hay cứng nhắc.

Trả về JSON đúng format (không markdown):
{
  "summary": "Tóm tắt tuần bằng tiếng Việt tự nhiên, 40-50 từ, đọc như đang nói chuyện",
  "daily": [
    {
      "period": "Khoảng thời gian (ví dụ: Đầu tuần, Thứ Tư-Năm, Cuối tuần)",
      "event": "Sự kiện thiên văn nếu có, hoặc để trống",
      "prediction": "Điều có thể xảy ra, 25-35 từ, cụ thể và thực tế",
      "domain": "Lĩnh vực chính (Tình cảm/Công việc/Tài chính/Sức khỏe/Tâm linh)",
      "tip": "Gợi ý hành động ngắn gọn, 15-20 từ, nói thẳng"
    }
  ],
  "peak_moment": "Thời điểm đáng chú ý nhất trong tuần, 20-25 từ",
  "week_theme": "Chủ đề tuần bằng tiếng Việt tự nhiên, 6-10 từ"
}`
                : `You are an astrologer specializing in concrete event forecasting.
Today: ${dateStr}
Planet positions: ${planetSummary}
Celestial events next 7 days:
${eventsDesc}

Based on this REAL data, create a 7-day forecast focused on SPECIFIC EVENTS that may occur. This must DIFFER from general energy analysis — focus on concrete predictions.
Return JSON in EXACT format (no markdown):
{
  "summary": "Overall 7-day summary based on specific celestial events (40-50 words)",
  "daily": [
    {
      "period": "Time period name (e.g., Early week, Wed-Thu, Weekend)",
      "event": "Celestial event occurring (if any) or notable configuration",
      "prediction": "Specific event/situation likely to occur (25-35 words)",
      "domain": "Most affected domain (Love/Work/Finance/Health/Spiritual)",
      "tip": "Concrete immediate action advice (15-20 words)"
    }
  ],
  "peak_moment": "Peak energy moment or most important event of the week (20-25 words)",
  "week_theme": "Main theme of the week from an astrological perspective (6-10 words)"
}`;

            const sysPrompt = isVN
                ? 'Nhà chiêm tinh dự báo sự kiện. Trả về JSON thuần túy, không giải thích thêm.'
                : 'Event-forecasting astrologer. Return only pure JSON, no extra text.';

            const ai = await callClaude(prompt, sysPrompt, 1000);

            const domainColor = {
                'Tình cảm': 'rgba(244,114,182,0.8)', 'Love': 'rgba(244,114,182,0.8)',
                'Công việc': 'rgba(251,191,36,0.8)',  'Work': 'rgba(251,191,36,0.8)',
                'Tài chính': 'rgba(52,211,153,0.8)',  'Finance': 'rgba(52,211,153,0.8)',
                'Sức khỏe':  'rgba(125,211,252,0.8)', 'Health': 'rgba(125,211,252,0.8)',
                'Tâm linh':  'rgba(167,139,250,0.8)', 'Spiritual': 'rgba(167,139,250,0.8)',
            };
            const domainIcon = {
                'Tình cảm': '❤️', 'Love': '❤️',
                'Công việc': '💼', 'Work': '💼',
                'Tài chính': '💰', 'Finance': '💰',
                'Sức khỏe':  '🌿', 'Health': '🌿',
                'Tâm linh':  '✨', 'Spiritual': '✨',
            };

            summaryPanel.innerHTML = `
                <div style="padding:18px 20px;background:rgba(56,189,248,0.05);
                    border:1px solid rgba(56,189,248,0.18);border-radius:16px;margin-bottom:6px;">

                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <span style="font-size:13px;">🔭</span>
                            <span style="font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;
                                color:rgba(125,211,252,0.9);">${isVN ? 'Dự Báo Chi Tiết 7 Ngày' : '7-Day Detailed Forecast'}</span>
                        </div>
                        ${ai.week_theme ? `<span style="font-size:10px;padding:3px 10px;background:rgba(56,189,248,0.1);
                            border:1px solid rgba(56,189,248,0.2);border-radius:20px;
                            color:rgba(125,211,252,0.8);">${ai.week_theme}</span>` : ''}
                    </div>

                    ${ai.summary ? `<p style="font-size:12px;color:rgba(203,213,225,0.85);line-height:1.8;
                        margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,0.06);">
                        ${ai.summary}</p>` : ''}

                    ${ai.daily && ai.daily.length ? `
                    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px;">
                        ${ai.daily.map(d => {
                            const dColor = domainColor[d.domain] || 'rgba(148,163,184,0.7)';
                            const dIcon  = domainIcon[d.domain]  || '🌟';
                            return `
                            <div style="padding:12px 14px;background:rgba(15,23,42,0.4);border-radius:12px;
                                border:1px solid rgba(255,255,255,0.06);">
                                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                                    <span style="font-size:11px;font-weight:700;color:rgba(226,232,240,0.9);">
                                        ${d.period}</span>
                                    <span style="font-size:10px;padding:2px 8px;border-radius:20px;
                                        background:rgba(0,0,0,0.2);color:${dColor};">
                                        ${dIcon} ${d.domain}</span>
                                </div>
                                ${d.event ? `<p style="font-size:10px;color:rgba(125,211,252,0.7);
                                    font-style:italic;margin-bottom:6px;letter-spacing:.02em;">
                                    🔭 ${d.event}</p>` : ''}
                                <p style="font-size:12px;color:rgba(203,213,225,0.85);line-height:1.7;
                                    margin-bottom:8px;">${d.prediction}</p>
                                <div style="display:flex;align-items:flex-start;gap:6px;padding:6px 10px;
                                    background:rgba(255,255,255,0.03);border-radius:8px;">
                                    <span style="font-size:11px;color:rgba(52,211,153,0.8);flex-shrink:0;
                                        font-weight:700;">→</span>
                                    <span style="font-size:11px;color:rgba(167,243,208,0.8);line-height:1.6;">
                                        ${d.tip}</span>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>` : ''}

                    ${ai.peak_moment ? `
                    <div style="padding:10px 14px;background:rgba(245,158,11,0.07);
                        border-left:3px solid rgba(245,158,11,0.5);border-radius:0 8px 8px 0;">
                        <span style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
                            color:rgba(245,158,11,0.8);display:block;margin-bottom:4px;">
                            ⚡ ${isVN ? 'Đỉnh Điểm Tuần' : 'Peak Moment'}
                        </span>
                        <p style="font-size:11px;color:rgba(253,230,138,0.85);line-height:1.7;margin:0;">
                            ${ai.peak_moment}</p>
                    </div>` : ''}
                </div>`;

        } catch(err) {
            console.error('[Planets AI] Transit forecast error:', err);

            let errTitle = isVN ? '⚠️ Không thể tải dự báo AI' : '⚠️ Could not load AI forecast';
            let errDetail = err.message || (isVN ? 'Lỗi không xác định' : 'Unknown error');

            if (err.message && err.message.includes('config.js')) {
                errDetail = isVN
                    ? 'API key chưa được điền vào file config.js. Hãy mở file config.js và điền key Gemini của bạn vào.'
                    : 'API key not set in config.js. Please open config.js and fill in your Gemini key.';
            } else if (err.message && (err.message.includes('400') || err.message.includes('403'))) {
                errDetail = isVN
                    ? 'API key không hợp lệ hoặc bị từ chối. Hãy kiểm tra lại key Gemini trong file config.js.'
                    : 'API key is invalid or rejected. Please check your Gemini key in config.js.';
            } else if (err.message && err.message.includes('429')) {
                errDetail = isVN
                    ? 'Đã gọi AI quá nhiều lần. Vui lòng đợi vài giây rồi thử lại.'
                    : 'Too many AI requests. Please wait a moment and try again.';
            } else if (err.message && (err.message.includes('Failed to fetch') || err.message.includes('NetworkError'))) {
                errDetail = isVN
                    ? 'Không có kết nối internet hoặc bị chặn bởi trình duyệt (CORS). Thử tắt extension chặn quảng cáo.'
                    : 'No internet or blocked by browser (CORS). Try disabling ad-blocker extensions.';
            } else if (err.message && err.message.includes('JSON')) {
                errDetail = isVN
                    ? 'AI trả về dữ liệu không đúng định dạng.'
                    : 'AI returned malformed data.';
            }

            summaryPanel.innerHTML = `
                <div style="padding:14px 16px;background:rgba(239,68,68,0.06);
                    border:1px solid rgba(239,68,68,0.25);border-radius:12px;margin-bottom:16px;">
                    <p style="font-size:12px;font-weight:700;color:rgba(252,165,165,0.9);margin:0 0 6px 0;">
                        ${errTitle}
                    </p>
                    <p style="font-size:11px;color:rgba(252,165,165,0.7);margin:0;line-height:1.6;">
                        ${errDetail}
                    </p>
                    <p style="font-size:10px;color:rgba(148,163,184,0.5);margin:8px 0 0 0;font-family:monospace;">
                        Chi tiết: ${err.message || 'unknown'}
                    </p>
                </div>`;
        }
    };

    // ─── GẮN VÀO showForecast ĐÃ ĐƯỢC GỌI KHI TAB CURRENT SKY HIỆN ─
    // Khi tab 'current' được render, planetary-forecast cũng được gọi
    // nên patch ở trên sẽ hoạt động tự động.

    console.log('[Planets AI] ✅ Forecast & Transit patches active.');

    // ─── TỰ KIỂM TRA KẾT NỐI API KHI TRANG TẢI ────────────────────
    (async function selfTest() {
        await new Promise(r => setTimeout(r, 1000)); // chờ config.js load xong

        const apiKey = (window.MYSTIC_CONFIG && window.MYSTIC_CONFIG.MYSTIC_API_KEY) || '';

        if (!apiKey || apiKey === 'YOUR_GEMINI_KEY_HERE') {
            console.error('[Planets AI] ❌ CONFIG CHƯA CÀI: Chưa có API key trong config.js');
            return;
        }

        console.log('[Planets AI] 🔍 Đang kiểm tra kết nối Gemini API...');

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: 'Reply with the single word: OK' }] }],
                        generationConfig: { maxOutputTokens: 10 }
                    })
                }
            );

            if (res.ok) {
                const d = await res.json();
                const reply = d.candidates?.[0]?.content?.parts?.[0]?.text || '';
                console.log(`[Planets AI] ✅ Gemini API hoạt động tốt. Phản hồi: "${reply.trim()}"`);
            } else {
                const errText = await res.text();
                console.error(`[Planets AI] ❌ Gemini API lỗi ${res.status}:`, errText);
                if (res.status === 400) console.error('   → API key sai định dạng hoặc request không hợp lệ');
                if (res.status === 403) console.error('   → API key bị từ chối. Kiểm tra lại key trong config.js');
                if (res.status === 429) console.error('   → Đã vượt giới hạn miễn phí. Chờ vài giây rồi thử lại');
            }
        } catch(e) {
            console.error('[Planets AI] ❌ Không thể kết nối Gemini:', e.message);
            console.error('   → Có thể do: mất mạng, extension chặn, hoặc CORS policy');
        }
    })();

})();
