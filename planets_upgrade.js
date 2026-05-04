// ==========================================
// PLANETS VIEW UPGRADE
// ==========================================
// Override showPlanetsPosition, renderTransitTimeline, showForecast
// Giao diện đẹp hơn + nội dung câu văn có trích dẫn hành tinh cụ thể

(function upgradePlanetsView() {

    // ── Helpers ──────────────────────────────────────────────────────
    const SIGNS_EN = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
    const SIGNS_VN = ['Bạch Dương','Kim Ngưu','Song Tử','Cự Giải','Sư Tử','Xử Nữ','Thiên Bình','Bọ Cạp','Nhân Mã','Ma Kết','Bảo Bình','Song Ngư'];
    const SIGN_KEYS = ['zodiac-aries','zodiac-taurus','zodiac-gemini','zodiac-cancer','zodiac-leo','zodiac-virgo','zodiac-libra','zodiac-scorpio','zodiac-sagittarius','zodiac-capricorn','zodiac-aquarius','zodiac-pisces'];

    const PLANET_COLORS = {
        Sun: '#f59e0b', Moon: '#94a3b8', Mercury: '#60a5fa',
        Venus: '#f472b6', Mars: '#f87171', Jupiter: '#a78bfa',
        Saturn: '#fbbf24', Uranus: '#34d399', Neptune: '#818cf8', Pluto: '#fb923c'
    };

    const PLANET_MEANINGS_EN = {
        Sun: 'life force, identity & vitality',
        Moon: 'emotions, intuition & inner world',
        Mercury: 'communication, mind & travel',
        Venus: 'love, beauty & relationships',
        Mars: 'drive, passion & action',
        Jupiter: 'expansion, luck & wisdom',
        Saturn: 'discipline, karma & structure',
        Uranus: 'change, rebellion & innovation',
        Neptune: 'dreams, spirituality & illusion',
        Pluto: 'transformation, power & rebirth'
    };
    const PLANET_MEANINGS_VN = {
        Sun: 'sinh lực, bản thân & sức sống',
        Moon: 'cảm xúc, trực giác & nội tâm',
        Mercury: 'giao tiếp, tư duy & di chuyển',
        Venus: 'tình yêu, vẻ đẹp & các mối quan hệ',
        Mars: 'động lực, đam mê & hành động',
        Jupiter: 'mở rộng, may mắn & trí tuệ',
        Saturn: 'kỷ luật, nghiệp & cấu trúc',
        Uranus: 'thay đổi, nổi loạn & đổi mới',
        Neptune: 'giấc mơ, tâm linh & ảo tưởng',
        Pluto: 'chuyển hóa, quyền lực & tái sinh'
    };

    // Sign influence sentences (used in narrative)
    const SIGN_INFLUENCE_EN = {
        'Aries': 'brings boldness and initiating energy',
        'Taurus': 'grounds energy in patience and material focus',
        'Gemini': 'sharpens communication and curiosity',
        'Cancer': 'deepens emotional sensitivity and intuition',
        'Leo': 'amplifies self-expression and creative confidence',
        'Virgo': 'channels energy into precision and service',
        'Libra': 'seeks balance, harmony and diplomatic solutions',
        'Scorpio': 'intensifies depth, transformation and insight',
        'Sagittarius': 'expands vision toward freedom and higher meaning',
        'Capricorn': 'focuses ambition on long-term structure and mastery',
        'Aquarius': 'sparks innovation, independence and collective thinking',
        'Pisces': 'dissolves boundaries and deepens spiritual sensitivity'
    };
    const SIGN_INFLUENCE_VN = {
        'Bạch Dương': 'mang đến sự táo bạo và năng lượng khởi xướng',
        'Kim Ngưu': 'ổn định năng lượng bằng sự kiên nhẫn và tập trung vật chất',
        'Song Tử': 'mài sắc khả năng giao tiếp và sự tò mò',
        'Cự Giải': 'đào sâu sự nhạy cảm cảm xúc và trực giác',
        'Sư Tử': 'khuếch đại sự tự thể hiện và tự tin sáng tạo',
        'Xử Nữ': 'kênh hóa năng lượng vào sự chính xác và phụng sự',
        'Thiên Bình': 'tìm kiếm sự cân bằng, hòa hợp và giải pháp ngoại giao',
        'Bọ Cạp': 'tăng cường chiều sâu, chuyển hóa và thấu thị',
        'Nhân Mã': 'mở rộng tầm nhìn hướng đến tự do và ý nghĩa cao hơn',
        'Ma Kết': 'tập trung tham vọng vào cấu trúc dài hạn và sự thành thạo',
        'Bảo Bình': 'khơi dậy đổi mới, độc lập và tư duy tập thể',
        'Song Ngư': 'hòa tan ranh giới và đào sâu sự nhạy cảm tâm linh'
    };

    function getSignIdx(lon) { return Math.floor(((lon % 360) + 360) % 360 / 30) % 12; }
    function getSignName(lon, lang) { return lang === 'vn' ? SIGNS_VN[getSignIdx(lon)] : SIGNS_EN[getSignIdx(lon)]; }
    function getDeg(lon) { return Math.floor(((lon % 360) + 360) % 360 % 30); }
    function getSignInfluence(signName, lang) {
        return lang === 'vn' ? (SIGN_INFLUENCE_VN[signName] || '') : (SIGN_INFLUENCE_EN[signName] || '');
    }

    // ── MAIN: Override showPlanetsPosition ──────────────────────────
    window.showPlanetsPosition = () => {
        const modal = document.getElementById('planets-view');
        const list = document.getElementById('planets-list');
        const wheelContainer = document.getElementById('zodiac-wheel-container');
        if (!modal || !list) return;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        switchPlanetTab('current');

        if (typeof Astronomy === 'undefined') {
            list.innerHTML = `<div class="col-span-full p-8 text-center text-rose-400">Astronomy engine not ready.</div>`;
            return;
        }

        list.innerHTML = `<div class="col-span-full flex items-center justify-center gap-3 py-16 text-amber-500/60">
            <div style="width:20px;height:20px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
            <span class="text-sm font-medium">${typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Đang tính toán vị trí thiên thể...' : 'Calculating celestial positions...'}</span>
        </div>
        <style>@keyframes spin{to{transform:rotate(360deg)}}</style>`;

        setTimeout(() => {
            try {
                const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
                const time = Astronomy.MakeTime(new Date());
                const bodies = [
                    { id: 'Sun' }, { id: 'Moon' }, { id: 'Mercury' }, { id: 'Venus' },
                    { id: 'Mars' }, { id: 'Jupiter' }, { id: 'Saturn' },
                    { id: 'Uranus' }, { id: 'Neptune' }, { id: 'Pluto' }
                ];

                const planetData = [];
                bodies.forEach(body => {
                    try {
                        const lon = Astronomy.EclipticLongitude(body.id, time);
                        const signIdx = getSignIdx(lon);
                        const signName = getSignName(lon, lang);
                        const deg = getDeg(lon);
                        const sym = (typeof celestialSymbols !== 'undefined' && celestialSymbols[`body-${body.id.toLowerCase()}`]) || '✦';
                        const zodSym = (typeof celestialSymbols !== 'undefined' && celestialSymbols[SIGN_KEYS[signIdx]]) || '✦';
                        planetData.push({ id: body.id, lon, signIdx, signName, deg, sym, zodSym, color: PLANET_COLORS[body.id] || '#94a3b8' });
                    } catch(e) { console.warn(body.id, e); }
                });

                // ── Planet Grid ──────────────────────────────────────
                // 5 inner planets full detail, 5 outer compact
                const inner = planetData.filter(p => ['Sun','Moon','Mercury','Venus','Mars'].includes(p.id));
                const outer = planetData.filter(p => ['Jupiter','Saturn','Uranus','Neptune','Pluto'].includes(p.id));

                let html = `
                <div class="col-span-full">
                    <!-- Inner planets: large cards -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                        ${inner.map(p => renderPlanetCardLarge(p, lang)).join('')}
                    </div>
                    <!-- Outer planets: compact row -->
                    <div class="mb-4">
                        <p class="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 px-1">${lang === 'vn' ? 'Hành Tinh Ngoài' : 'Outer Planets'}</p>
                        <div class="grid grid-cols-5 gap-2">
                            ${outer.map(p => renderPlanetCardCompact(p, lang)).join('')}
                        </div>
                    </div>
                    <!-- Planetary Narrative -->
                    ${renderPlanetaryNarrative(planetData, lang)}
                </div>`;

                list.innerHTML = html;
                list.style.gridTemplateColumns = '1fr';

                // Zodiac wheel
                const wheelData = planetData.map(p => ({
                    id: p.id, lon: p.lon, symbol: p.sym,
                    color: p.color, isSun: p.id === 'Sun'
                }));
                if (typeof renderZodiacWheel === 'function') renderZodiacWheel(wheelContainer, wheelData);

                // Forecast
                if (typeof showForecast === 'function') showForecast(time);

                if (typeof lucide !== 'undefined') lucide.createIcons();
            } catch(e) {
                console.error(e);
                list.innerHTML = `<p class="text-rose-400 text-center col-span-full">Error calculating positions.</p>`;
            }
        }, 400);
    };

    function renderPlanetCardLarge(p, lang) {
        const isSun = p.id === 'Sun';
        const isMoon = p.id === 'Moon';
        const meaning = lang === 'vn' ? PLANET_MEANINGS_VN[p.id] : PLANET_MEANINGS_EN[p.id];
        const influence = getSignInfluence(p.signName, lang);
        const borderColor = isSun ? 'rgba(245,158,11,0.4)' : isMoon ? 'rgba(148,163,184,0.3)' : `${p.color}30`;
        const bgColor = isSun ? 'rgba(245,158,11,0.06)' : `rgba(15,23,42,0.6)`;

        return `
        <div style="background:${bgColor};border:1px solid ${borderColor};border-radius:16px;padding:14px 16px;transition:transform 0.2s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:22px;filter:drop-shadow(0 0 6px ${p.color}80);">${p.sym}</span>
                    <div>
                        <p style="font-size:13px;font-weight:700;color:white;margin:0;line-height:1.2;">${(typeof i18n !== 'undefined' && i18n[lang] && i18n[lang]['body-'+p.id.toLowerCase()]) || p.id}</p>
                        <p style="font-size:10px;color:rgba(148,163,184,0.7);margin:0;">${meaning}</p>
                    </div>
                </div>
                ${isSun ? `<span style="font-size:9px;background:rgba(245,158,11,0.2);color:#f59e0b;padding:2px 8px;border-radius:20px;font-weight:800;letter-spacing:0.08em;">VITAL</span>` : ''}
            </div>
            <div style="display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.2);border-radius:10px;padding:8px 10px;margin-bottom:8px;">
                <span style="font-size:16px;">${p.zodSym}</span>
                <div>
                    <p style="font-size:12px;font-weight:600;color:${p.color};margin:0;">${p.deg}° ${p.signName}</p>
                </div>
            </div>
            <p style="font-size:11px;color:rgba(203,213,225,0.75);line-height:1.55;margin:0;font-style:italic;">
                ${lang === 'vn' ? `${(typeof i18n !== 'undefined' && i18n.vn && i18n.vn['body-'+p.id.toLowerCase()]) || p.id} trong ${p.signName} ${influence}.` : `${p.id} in ${p.signName} ${influence}.`}
            </p>
        </div>`;
    }

    function renderPlanetCardCompact(p, lang) {
        return `
        <div style="background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:10px 8px;text-align:center;">
            <div style="font-size:18px;margin-bottom:4px;filter:drop-shadow(0 0 4px ${p.color}60);">${p.sym}</div>
            <p style="font-size:9px;font-weight:700;color:rgba(148,163,184,0.8);margin:0 0 4px;text-transform:uppercase;letter-spacing:0.06em;">${(typeof i18n !== 'undefined' && i18n[lang] && i18n[lang]['body-'+p.id.toLowerCase()]) || p.id}</p>
            <div style="display:flex;align-items:center;justify-content:center;gap:3px;">
                <span style="font-size:11px;">${p.zodSym}</span>
                <span style="font-size:9px;color:${p.color};font-weight:600;">${p.deg}°</span>
            </div>
            <p style="font-size:9px;color:rgba(148,163,184,0.6);margin:2px 0 0;">${p.signName}</p>
        </div>`;
    }

    function renderPlanetaryNarrative(planetData, lang) {
        const sun = planetData.find(p => p.id === 'Sun');
        const moon = planetData.find(p => p.id === 'Moon');
        const mercury = planetData.find(p => p.id === 'Mercury');
        const venus = planetData.find(p => p.id === 'Venus');
        const mars = planetData.find(p => p.id === 'Mars');
        const jupiter = planetData.find(p => p.id === 'Jupiter');
        const saturn = planetData.find(p => p.id === 'Saturn');
        if (!sun || !moon) return '';

        let paragraphs = [];

        if (lang === 'vn') {
            // Core energy
            paragraphs.push(`Dựa trên vị trí của <strong style="color:#f59e0b">Mặt Trời</strong> đang ở ${sun.deg}° ${sun.signName}, nguồn sinh lực cốt lõi của bạn lúc này ${getSignInfluence(sun.signName, 'vn')}. Đây là nền tảng năng lượng định hình toàn bộ trải nghiệm của bạn trong giai đoạn này.`);
            // Moon
            if (moon) {
                const moonPhase = typeof Astronomy !== 'undefined' ? Astronomy.MoonPhase(Astronomy.MakeTime(new Date())) : null;
                const phaseDesc = moonPhase !== null ? (moonPhase < 90 ? 'đang tăng dần (trăng non)' : moonPhase < 180 ? 'đang đạt đỉnh (trăng tròn sắp đến)' : moonPhase < 270 ? 'đang khuyết dần' : 'đang bước vào chu kỳ mới') : '';
                paragraphs.push(`<strong style="color:#94a3b8">Mặt Trăng</strong> ở ${moon.deg}° ${moon.signName} ${phaseDesc ? `— đang ở pha ${phaseDesc} —` : ''} chạm vào cảm xúc và thế giới nội tâm của bạn theo hướng ${getSignInfluence(moon.signName, 'vn')}.`);
            }
            // Mercury + Venus
            if (mercury && venus) {
                paragraphs.push(`Trong lĩnh vực giao tiếp và tình cảm: <strong style="color:#60a5fa">Sao Thủy</strong> ở ${mercury.signName} ${getSignInfluence(mercury.signName, 'vn')}, tác động trực tiếp đến cách bạn suy nghĩ và diễn đạt. Trong khi đó, <strong style="color:#f472b6">Sao Kim</strong> đang đứng ở ${venus.deg}° ${venus.signName} — ${getSignInfluence(venus.signName, 'vn')} — định hướng cách bạn kết nối và trao nhận tình cảm.`);
            }
            // Mars
            if (mars) {
                paragraphs.push(`Về hành động và năng lượng thúc đẩy, <strong style="color:#f87171">Sao Hỏa</strong> đang chiếu rọi ở ${mars.deg}° ${mars.signName}. Điều này có nghĩa là nguồn động lực của bạn ${getSignInfluence(mars.signName, 'vn')}.`);
            }
            // Jupiter + Saturn
            if (jupiter && saturn) {
                paragraphs.push(`Nhìn xa hơn, <strong style="color:#a78bfa">Sao Mộc</strong> ở ${jupiter.signName} đang mở rộng và ban phước cho những lĩnh vực liên quan đến ${getSignInfluence(jupiter.signName, 'vn').replace('mở rộng','mở rộng thêm')}. Song song, <strong style="color:#fbbf24">Sao Thổ</strong> đứng ở ${saturn.deg}° ${saturn.signName} — ${getSignInfluence(saturn.signName, 'vn')} — nhắc nhở bạn về tầm quan trọng của kỷ luật và trách nhiệm trong hành trình này.`);
            }
        } else {
            // English version
            paragraphs.push(`Based on the position of the <strong style="color:#f59e0b">Sun</strong> at ${sun.deg}° ${sun.signName}, your core life force right now ${getSignInfluence(sun.signName, 'en')}. This foundational energy shapes your entire experience during this period.`);
            if (moon) {
                const moonPhase = typeof Astronomy !== 'undefined' ? Astronomy.MoonPhase(Astronomy.MakeTime(new Date())) : null;
                const phaseDesc = moonPhase !== null ? (moonPhase < 90 ? 'waxing (growing)' : moonPhase < 180 ? 'approaching full' : moonPhase < 270 ? 'waning' : 'entering a new cycle') : '';
                paragraphs.push(`The <strong style="color:#94a3b8">Moon</strong> at ${moon.deg}° ${moon.signName} ${phaseDesc ? `— currently ${phaseDesc} —` : ''} touches your emotions and inner world, ${getSignInfluence(moon.signName, 'en')}.`);
            }
            if (mercury && venus) {
                paragraphs.push(`In the realm of mind and heart: <strong style="color:#60a5fa">Mercury</strong> in ${mercury.signName} ${getSignInfluence(mercury.signName, 'en')}, directly shaping how you think and communicate. Meanwhile, <strong style="color:#f472b6">Venus</strong> stands at ${venus.deg}° ${venus.signName} — ${getSignInfluence(venus.signName, 'en')} — guiding how you give and receive love.`);
            }
            if (mars) {
                paragraphs.push(`Regarding drive and momentum, <strong style="color:#f87171">Mars</strong> illuminates ${mars.deg}° ${mars.signName}. This means your motivating force ${getSignInfluence(mars.signName, 'en')}.`);
            }
            if (jupiter && saturn) {
                paragraphs.push(`Looking further out, <strong style="color:#a78bfa">Jupiter</strong> in ${jupiter.signName} expands and blesses areas where energy ${getSignInfluence(jupiter.signName, 'en')}. Alongside this, <strong style="color:#fbbf24">Saturn</strong> at ${saturn.deg}° ${saturn.signName} — ${getSignInfluence(saturn.signName, 'en')} — reminds you of the importance of discipline and responsibility on this journey.`);
            }
        }

        const title = lang === 'vn' ? 'Thông Điệp Từ Bầu Trời Hôm Nay' : "Today's Celestial Message";

        return `
        <div style="background:linear-gradient(135deg,rgba(67,56,202,0.08),rgba(15,23,42,0.6));border:1px solid rgba(99,102,241,0.2);border-radius:16px;padding:20px 20px 16px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
                <span style="font-size:16px;">✨</span>
                <h4 style="font-size:13px;font-weight:700;color:rgba(165,180,252,1);margin:0;text-transform:uppercase;letter-spacing:0.1em;">${title}</h4>
            </div>
            ${paragraphs.map(p => `<p style="font-size:12.5px;color:rgba(203,213,225,0.9);line-height:1.75;margin:0 0 10px;">${p}</p>`).join('')}
        </div>`;
    }

    // ── Override renderTransitTimeline ───────────────────────────────
    const _origTransit = window.renderTransitTimeline || (async function(){});
    window.renderTransitTimeline = async function() {
        const timeline = document.getElementById('transit-timeline');
        if (!timeline) return;
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

        timeline.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;gap:10px;padding:40px 0;color:rgba(245,158,11,0.5);">
            <div style="width:16px;height:16px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
            <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;">${lang === 'vn' ? 'Đang quét bầu trời 7 ngày tới...' : 'Scanning the next 7 days...'}</span>
        </div>`;

        const bodies = [
            { key: 'body-sun', id: 'Sun' },
            { key: 'body-mercury', id: 'Mercury' },
            { key: 'body-venus', id: 'Venus' },
            { key: 'body-mars', id: 'Mars' },
            { key: 'body-moon', id: 'Moon' }
        ];

        try {
            const events = [];
            const now = new Date();

            for (let d = 0; d <= 7; d++) {
                const checkTime = new Date(now.getTime() + d * 86400000);
                const prevTime  = new Date(checkTime.getTime() - 86400000);
                const aTime  = Astronomy.MakeTime(checkTime);
                const aPrev  = Astronomy.MakeTime(prevTime);

                // Sign changes
                bodies.filter(b => b.id !== 'Moon').forEach(body => {
                    const lon  = Astronomy.EclipticLongitude(body.id, aTime);
                    const prev = Astronomy.EclipticLongitude(body.id, aPrev);
                    const si   = getSignIdx(lon), pi = getSignIdx(prev);
                    if (si !== pi) events.push({ type: 'transit', date: checkTime, body, signIdx: si });
                });

                // Moon phases
                const mp = Astronomy.MoonPhase(aTime);
                const pp = Astronomy.MoonPhase(aPrev);
                [{ phase: 0, name: 'moon-0' }, { phase: 90, name: 'moon-2' },
                 { phase: 180, name: 'moon-4' }, { phase: 270, name: 'moon-6' }].forEach(({ phase, name }) => {
                    if ((pp < phase && mp >= phase) || (phase === 0 && pp > 350 && mp < 10))
                        events.push({ type: 'moon-phase', date: checkTime, phase, name });
                });
            }

            // Build daily view: next 7 days with planet snapshot + any events
            const daySlots = [];
            for (let d = 0; d <= 6; d++) {
                const day = new Date(now.getTime() + d * 86400000);
                const dayEvents = events.filter(e => {
                    const ed = new Date(e.date);
                    return ed.toDateString() === day.toDateString();
                });
                daySlots.push({ day, dayEvents, dayIdx: d });
            }

            let html = `<div style="space-y:0;">`;

            // Summary header with next 7 days
            const todayStr = lang === 'vn' ? 'Dự Báo 7 Ngày Tới' : '7-Day Celestial Forecast';
            html += `<div style="margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid rgba(245,158,11,0.15);">
                <p style="font-size:11px;font-weight:800;color:rgba(245,158,11,0.7);text-transform:uppercase;letter-spacing:0.15em;margin:0 0 2px;">${todayStr}</p>
                <p style="font-size:12px;color:rgba(148,163,184,0.8);margin:0;">${lang === 'vn' ? 'Theo dõi vị trí thiên thể và những chuyển dịch quan trọng ảnh hưởng đến bạn' : 'Track key celestial movements and their influence on your journey'}</p>
            </div>`;

            // Daily rows
            daySlots.forEach(({ day, dayEvents, dayIdx }) => {
                const aTime = Astronomy.MakeTime(day);
                // Get 3 key planets for this day
                const snapshots = ['Sun','Mercury','Venus','Mars','Moon'].map(id => {
                    try {
                        const lon = Astronomy.EclipticLongitude(id, aTime);
                        return { id, signIdx: getSignIdx(lon), signName: getSignName(lon, lang), deg: getDeg(lon), sym: (typeof celestialSymbols !== 'undefined' && celestialSymbols[`body-${id.toLowerCase()}`]) || '✦', color: PLANET_COLORS[id] };
                    } catch(e) { return null; }
                }).filter(Boolean);

                const isToday = dayIdx === 0;
                const isTomorrow = dayIdx === 1;

                const dayName = day.toLocaleDateString(lang === 'vn' ? 'vi-VN' : 'en-US', { weekday: 'long' });
                const dateStr = day.toLocaleDateString(lang === 'vn' ? 'vi-VN' : 'en-US', { month: 'short', day: 'numeric' });
                const dayLabel = isToday ? (lang === 'vn' ? 'Hôm Nay' : 'Today') : isTomorrow ? (lang === 'vn' ? 'Ngày Mai' : 'Tomorrow') : '';

                // Narrative for today and tomorrow
                let narrative = '';
                if (dayIdx <= 1 && snapshots.length >= 3) {
                    const sun = snapshots.find(s => s.id === 'Sun');
                    const moon = snapshots.find(s => s.id === 'Moon');
                    const merc = snapshots.find(s => s.id === 'Mercury');
                    if (sun && moon && merc) {
                        if (lang === 'vn') {
                            narrative = `Dựa trên vị trí của <strong style="color:#f59e0b">Mặt Trời</strong> ở ${sun.signName}, năng lượng ngày này ${getSignInfluence(sun.signName, 'vn')}. <strong style="color:#94a3b8">Mặt Trăng</strong> ở ${moon.signName} ${getSignInfluence(moon.signName, 'vn')}, định hướng cảm xúc của bạn. <strong style="color:#60a5fa">Sao Thủy</strong> ở ${merc.signName} ${getSignInfluence(merc.signName, 'vn')}.`;
                        } else {
                            narrative = `With the <strong style="color:#f59e0b">Sun</strong> in ${sun.signName}, this day's energy ${getSignInfluence(sun.signName, 'en')}. The <strong style="color:#94a3b8">Moon</strong> in ${moon.signName} ${getSignInfluence(moon.signName, 'en')}, shaping your emotional tone. <strong style="color:#60a5fa">Mercury</strong> in ${merc.signName} ${getSignInfluence(merc.signName, 'en')}.`;
                        }
                    }
                }

                // Events for this day
                let eventsHtml = '';
                dayEvents.forEach(ev => {
                    if (ev.type === 'transit') {
                        const si = ev.signIdx;
                        const signName = lang === 'vn' ? SIGNS_VN[si] : SIGNS_EN[si];
                        const sym = (typeof celestialSymbols !== 'undefined' && celestialSymbols[SIGN_KEYS[si]]) || '';
                        const bodySym = (typeof celestialSymbols !== 'undefined' && celestialSymbols[ev.body.key]) || '';
                        const bodyName = (typeof i18n !== 'undefined' && i18n[lang] && i18n[lang][ev.body.key]) || ev.body.id;
                        eventsHtml += `
                        <div style="display:flex;align-items:center;gap:8px;background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.2);border-radius:10px;padding:8px 12px;margin-top:8px;">
                            <span style="font-size:14px;">${bodySym}</span>
                            <div style="flex:1;">
                                <p style="font-size:11px;color:rgba(245,158,11,0.9);font-weight:700;margin:0;">${bodyName} → ${sym} ${signName}</p>
                                <p style="font-size:10.5px;color:rgba(203,213,225,0.7);margin:2px 0 0;">${lang === 'vn' ? `${bodyName} chuyển cung vào ${signName}, ${getSignInfluence(signName, 'vn')}.` : `${ev.body.id} enters ${signName}, ${getSignInfluence(signName, 'en')}.`}</p>
                            </div>
                        </div>`;
                    } else if (ev.type === 'moon-phase') {
                        const moonSym = (typeof celestialSymbols !== 'undefined' && celestialSymbols[ev.name]) || '🌙';
                        const phaseName = (typeof i18n !== 'undefined' && i18n[lang] && i18n[lang][ev.name]) || ev.name;
                        const phaseDesc = lang === 'vn'
                            ? { 'moon-0': 'Trăng Mới: thời điểm lý tưởng để đặt ý định mới và bắt đầu dự án.', 'moon-2': 'Trăng Thượng Huyền: hành động và xây dựng đà tiến.', 'moon-4': 'Trăng Tròn: cảm xúc lên cao, thu hoạch và hoàn thành.', 'moon-6': 'Trăng Hạ Huyền: buông bỏ, nghỉ ngơi và thanh lọc.' }[ev.name] || ''
                            : { 'moon-0': 'New Moon: ideal for setting intentions and fresh beginnings.', 'moon-2': 'First Quarter: take action and build momentum.', 'moon-4': 'Full Moon: emotions peak, harvest and celebrate.', 'moon-6': 'Last Quarter: release, rest and cleanse.' }[ev.name] || '';
                        eventsHtml += `
                        <div style="display:flex;align-items:center;gap:8px;background:rgba(148,163,184,0.06);border:1px solid rgba(148,163,184,0.2);border-radius:10px;padding:8px 12px;margin-top:8px;">
                            <span style="font-size:14px;">${moonSym}</span>
                            <div style="flex:1;">
                                <p style="font-size:11px;color:rgba(148,163,184,0.9);font-weight:700;margin:0;">${phaseName}</p>
                                <p style="font-size:10.5px;color:rgba(203,213,225,0.7);margin:2px 0 0;">${phaseDesc}</p>
                            </div>
                        </div>`;
                    }
                });

                html += `
                <div style="border-left:2px solid ${isToday ? 'rgba(245,158,11,0.6)' : 'rgba(255,255,255,0.08)'};padding-left:14px;margin-bottom:16px;">
                    <!-- Day header -->
                    <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:8px;">
                        <span style="font-size:12px;font-weight:800;color:${isToday ? '#f59e0b' : 'rgba(148,163,184,0.7)'};text-transform:uppercase;letter-spacing:0.08em;">${dateStr}</span>
                        <span style="font-size:10.5px;color:rgba(148,163,184,0.5);">${dayName}</span>
                        ${dayLabel ? `<span style="font-size:9px;background:${isToday ? 'rgba(245,158,11,0.2)' : 'rgba(148,163,184,0.1)'};color:${isToday ? '#f59e0b' : 'rgba(148,163,184,0.7)'};padding:1px 8px;border-radius:20px;font-weight:700;">${dayLabel}</span>` : ''}
                    </div>
                    <!-- Planet snapshot pills -->
                    <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:${narrative || eventsHtml ? '8px' : '0'};">
                        ${snapshots.slice(0, 5).map(s => `
                        <div style="display:flex;align-items:center;gap:4px;background:rgba(15,23,42,0.7);border:1px solid rgba(255,255,255,0.07);border-radius:20px;padding:3px 8px;">
                            <span style="font-size:10px;">${s.sym}</span>
                            <span style="font-size:9px;color:${s.color};font-weight:600;">${s.signName}</span>
                        </div>`).join('')}
                    </div>
                    ${narrative ? `<p style="font-size:11px;color:rgba(203,213,225,0.75);line-height:1.65;margin:0 0 6px;">${narrative}</p>` : ''}
                    ${eventsHtml}
                </div>`;
            });

            html += `</div>`;
            timeline.innerHTML = html;
            if (typeof lucide !== 'undefined') lucide.createIcons();

        } catch(err) {
            console.error('Transit timeline error:', err);
            timeline.innerHTML = `<p style="color:rgba(248,113,113,1);text-align:center;padding:20px;">Error scanning timeline.</p>`;
        }
    };

    console.log('[Planets Upgrade] ✅ showPlanetsPosition + renderTransitTimeline upgraded.');
})();
