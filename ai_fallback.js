// ==========================================
// AI FALLBACK SYSTEM - TAROT & LENORMAND
// ==========================================
// Gộp từ: tarot_ai_fallback.js + lenormand_ai_fallback.js
// Load sau: app.js, data/tarot_combinations.js, data/lenormand_interpretations.js

// ==========================================
// PHẦN 1: TAROT AI FALLBACK
// ==========================================
// ==========================================
// Load sau tarot_combinations.js và app.js:
// <script src="tarot_combinations.js"></script>
// <script src="tarot_ai_fallback.js"></script>
//
// Chức năng:
// 1. Khi generateDeepSynthesis chạy, inject thêm một panel
//    "Card Pairs" dùng AI để phân tích từng cặp lá trong spread
// 2. Cache kết quả theo session để không gọi API lặp lại
// 3. Fallback graceful nếu API lỗi

// ==========================================
// CACHE SESSION
// ==========================================
const _tarotAICache = {};

function _getTarotPairKey(name1, name2) {
    return [name1, name2].sort().join('||');
}

// ==========================================
// HÀM GỌI AI CHO MỘT CẶP LÁ
// ==========================================
async function getTarotPairInsight(card1, card2, lang = 'en') {
    const name1 = card1.en?.name || card1.name;
    const name2 = card2.en?.name || card2.name;
    const cacheKey = _getTarotPairKey(name1, name2) + '_' + lang;

    // 1. Kiểm tra cache
    if (_tarotAICache[cacheKey]) return _tarotAICache[cacheKey];

    // 2. Kiểm tra data cứng trong tarotCombinations
    if (typeof getTarotCombination === 'function') {
        const existing = getTarotCombination(card1, card2, lang);
        const isGeneric = existing?.meaning?.includes('complex energetic dynamic') ||
                          existing?.meaning?.includes('động lực năng lượng phức tạp');
        if (existing && !isGeneric) {
            _tarotAICache[cacheKey] = existing;
            return existing;
        }
    }

    // 3. Gọi AI
    const kw1 = (card1[lang]?.keywords || card1.en?.keywords || []).slice(0, 3).join(', ');
    const kw2 = (card2[lang]?.keywords || card2.en?.keywords || []).slice(0, 3).join(', ');
    const element1 = card1.element || '';
    const element2 = card2.element || '';

    const isVN = lang === 'vn';
    const prompt = isVN
        ? `Bạn là chuyên gia Tarot với 20 năm kinh nghiệm. Phân tích sự kết hợp của 2 lá Tarot sau.

Lá 1: ${name1} (từ khóa: ${kw1}${element1 ? ', nguyên tố: ' + element1 : ''})
Lá 2: ${name2} (từ khóa: ${kw2}${element2 ? ', nguyên tố: ' + element2 : ''})

Trả lời ĐÚNG format JSON sau (không markdown, không giải thích thêm):
{
  "meaning": "Ý nghĩa kết hợp sâu sắc, 35-50 từ, có ngữ cảnh tâm linh và thực tế",
  "advice": "Lời khuyên hành động cụ thể, 20-25 từ, áp dụng được ngay"
}`
        : `You are an expert Tarot reader with 20 years of experience. Analyze the combination of these two Tarot cards.

Card 1: ${name1} (keywords: ${kw1}${element1 ? ', element: ' + element1 : ''})
Card 2: ${name2} (keywords: ${kw2}${element2 ? ', element: ' + element2 : ''})

Respond ONLY with this JSON (no markdown, no extra text):
{
  "meaning": "Deep combined meaning, 35-50 words, with both spiritual and practical context",
  "advice": "Specific actionable advice, 20-25 words, immediately applicable"
}`;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 300,
                system: isVN
                    ? 'Chuyên gia Tarot. Chỉ trả về JSON thuần túy.'
                    : 'Expert Tarot reader. Return only pure JSON.',
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!response.ok) throw new Error('API ' + response.status);

        const data = await response.json();
        const raw = (data.content?.[0]?.text || '').replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(raw);
        _tarotAICache[cacheKey] = parsed;
        return parsed;

    } catch (err) {
        console.warn('[Tarot AI]', name1, '+', name2, ':', err.message);
        // Fallback có dùng keywords thật
        const fallback = {
            meaning: isVN
                ? `${name1} và ${name2} tạo ra sự giao thoa giữa ${kw1.split(',')[0].trim()} và ${kw2.split(',')[0].trim()}. Hai lá này cùng nhau chỉ ra một thời điểm cần cân bằng hai chiều năng lượng đối nghịch trong cuộc sống của bạn.`
                : `${name1} and ${name2} create an interplay between ${kw1.split(',')[0].trim()} and ${kw2.split(',')[0].trim()}. Together they point to a moment requiring balance between two contrasting energies in your life.`,
            advice: isVN
                ? `Tìm điểm giao giữa ${kw1.split(',')[0].trim().toLowerCase()} và ${kw2.split(',')[0].trim().toLowerCase()} trong tình huống hiện tại.`
                : `Find the meeting point between ${kw1.split(',')[0].trim().toLowerCase()} and ${kw2.split(',')[0].trim().toLowerCase()} in your current situation.`
        };
        _tarotAICache[cacheKey] = fallback;
        return fallback;
    }
}

// ==========================================
// INJECT PANEL VÀO SYNTHESIS
// ==========================================
// Override generateDeepSynthesis để thêm AI Card Pairs panel
(function patchSynthesisWithAI() {
    if (typeof generateDeepSynthesis === 'undefined') {
        setTimeout(patchSynthesisWithAI, 500);
        return;
    }

    const _original = generateDeepSynthesis;

    window.generateDeepSynthesis = function(cards, spread, lang) {
        // Chạy original trước
        let html = _original(cards, spread, lang);

        // Chỉ inject cho Tarot, không inject cho Lenormand
        if (typeof currentDeck !== 'undefined' && currentDeck !== tarotData) {
            return html;
        }

        // Chỉ inject nếu có ít nhất 2 lá
        if (!cards || cards.length < 2) return html;

        // Tạo placeholder panel ngay lập tức (loading state)
        const pairCount = cards.length <= 3
            ? cards.length - 1
            : Math.min(cards.length - 1, 4);

        const loadingLabel = lang === 'vn' ? 'Đang phân tích kết hợp lá bài...' : 'Analyzing card pairs...';
        const panelTitle = lang === 'vn' ? 'Tương Tác Giữa Các Lá' : 'Card Pair Dynamics';

        let pairsHTML = `
        <div id="ai-pairs-panel" class="glass p-8 rounded-[2rem] border border-violet-500/20 bg-violet-950/5 mt-6">
            <h4 class="text-xl font-bold text-violet-400 mb-6 flex items-center gap-3">
                <i data-lucide="git-merge" class="w-6 h-6"></i>
                <span>${panelTitle}</span>
                <span id="ai-pairs-badge" class="ml-auto text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-300">AI</span>
            </h4>
            <div id="ai-pairs-content" class="space-y-4">
                <p class="text-slate-400 text-sm italic animate-pulse">${loadingLabel}</p>
            </div>
        </div>`;

        // Inject trước thẻ đóng div cuối cùng
        html = html.replace('</div>', pairsHTML + '</div>');

        // Trigger AI populate async sau khi DOM render
        setTimeout(() => _populateAIPairs(cards, spread, lang, pairCount), 200);

        return html;
    };

    console.log('[Tarot AI] ✅ generateDeepSynthesis patched with AI card pairs.');
})();

// ==========================================
// POPULATE AI PAIRS VÀO DOM
// ==========================================
async function _populateAIPairs(cards, spread, lang, pairCount) {
    const container = document.getElementById('ai-pairs-content');
    if (!container) return;

    // Tạo danh sách cặp lá cần phân tích
    const pairs = [];
    if (spread === 3) {
        // 3 lá: phân tích Past-Present và Present-Future
        pairs.push([cards[0], cards[1], lang === 'vn' ? 'Quá khứ × Hiện tại' : 'Past × Present']);
        pairs.push([cards[1], cards[2], lang === 'vn' ? 'Hiện tại × Tương lai' : 'Present × Future']);
    } else if (spread === 5) {
        // 5 lá: 4 cặp quan trọng nhất
        pairs.push([cards[0], cards[4], lang === 'vn' ? 'Nền tảng × Kết quả' : 'Foundation × Outcome']);
        pairs.push([cards[1], cards[3], lang === 'vn' ? 'Quá khứ × Tương lai' : 'Past × Future']);
        pairs.push([cards[2], cards[4], lang === 'vn' ? 'Trọng tâm × Kết quả' : 'Core × Outcome']);
    } else {
        // Spread khác: phân tích các cặp kề nhau
        for (let i = 0; i < Math.min(cards.length - 1, pairCount); i++) {
            pairs.push([cards[i], cards[i + 1], `Card ${i + 1} × Card ${i + 2}`]);
        }
    }

    // Clear loading state
    container.innerHTML = '';

    // Generate mỗi cặp và inject vào DOM từng cái
    for (const [c1, c2, label] of pairs) {
        const name1 = c1.en?.name || c1.name;
        const name2 = c2.en?.name || c2.name;
        const pairKey = _getTarotPairKey(name1, name2);

        // Tạo placeholder trước
        const pairEl = document.createElement('div');
        pairEl.id = 'pair-' + pairKey.replace(/[^a-zA-Z0-9]/g, '_');
        pairEl.className = 'p-5 rounded-2xl bg-violet-500/5 border border-violet-500/15';
        pairEl.innerHTML = `
            <p class="text-violet-300 text-xs font-bold mb-2 uppercase tracking-wider">${label}: <span class="text-violet-200">${name1}</span> + <span class="text-violet-200">${name2}</span></p>
            <p class="text-slate-400 text-xs italic animate-pulse">${lang === 'vn' ? 'Đang phân tích...' : 'Analyzing...'}</p>
        `;
        container.appendChild(pairEl);

        // Fetch AI insight (async, không block UI)
        getTarotPairInsight(c1, c2, lang).then(insight => {
            pairEl.innerHTML = `
                <p class="text-violet-300 text-xs font-bold mb-2 uppercase tracking-wider">${label}: <span class="text-violet-200">${name1}</span> + <span class="text-violet-200">${name2}</span></p>
                <p class="text-slate-300 text-sm leading-relaxed mb-2">${insight.meaning}</p>
                <p class="text-violet-400 text-xs font-semibold">→ ${insight.advice}</p>
            `;
            pairEl.style.opacity = '0';
            pairEl.style.transition = 'opacity 0.4s ease';
            requestAnimationFrame(() => { pairEl.style.opacity = '1'; });
        });

        // Nhỏ delay giữa các call để tránh rate limit
        await new Promise(r => setTimeout(r, 150));
    }
}

// ==========================================
// CŨNG PATCH getTarotCombination ĐỂ DÙNG AI
// ==========================================
// Dùng cho các nơi khác trong app có gọi getTarotCombination trực tiếp
if (typeof getTarotCombination === 'function') {
    const _origGetCombo = getTarotCombination;
    window.getTarotCombinationAsync = async function(card1, card2, lang = 'en') {
        return await getTarotPairInsight(card1, card2, lang);
    };
    console.log('[Tarot AI] ✅ getTarotCombinationAsync available for direct use.');
}

console.log('[Tarot AI] ✅ Tarot AI Fallback system ready.');
console.log('[Tarot AI] 💡 Card pairs panel sẽ xuất hiện tự động trong mỗi reading.');

// ===========================================
// PHẦN 2: LENORMAND AI FALLBACK
// ===========================================

// ==========================================
// Khi 2 lá Lenormand không có combination trong data cứng,
// hệ thống sẽ gọi Claude API để tạo giải nghĩa dynamic.
// 
// Cách dùng:
// <script src="patch_step1_pentacles.js"></script>
// <script src="patch_step2_lenormand_ai_fallback.js"></script>
// (Load sau lenormand_interpretations.js)

// ==========================================
// CACHE: Lưu kết quả để không gọi API lại
// ==========================================
const _lenormandAICache = {};

function _getLenormandCacheKey(name1, name2) {
    // Sắp xếp theo alphabet để "Rider-Clover" = "Clover-Rider"
    return [name1, name2].sort().join('|');
}

// ==========================================
// HÀM CHÍNH: Gọi AI khi không có data cứng
// ==========================================
async function getLenormandInterpretationWithAI(card1, card2, lang = 'en') {
    const name1 = card1.en?.name || card1.name;
    const name2 = card2.en?.name || card2.name;
    const cacheKey = _getLenormandCacheKey(name1, name2);

    // 1. Check cache trước
    if (_lenormandAICache[cacheKey]) {
        console.log(`[AI Fallback] Cache hit: ${name1} + ${name2}`);
        return _lenormandAICache[cacheKey][lang] || _lenormandAICache[cacheKey]['en'];
    }

    // 2. Check data cứng (lenormandCombinations)
    if (typeof lenormandCombinations !== 'undefined') {
        const key1 = `${name1}-${name2}`;
        const key2 = `${name2}-${name1}`;
        if (lenormandCombinations[key1]) return lenormandCombinations[key1][lang];
        if (lenormandCombinations[key2]) return lenormandCombinations[key2][lang];
    }

    // 3. Fallback: Gọi Claude API
    console.log(`[AI Fallback] Generating AI interpretation: ${name1} + ${name2}`);

    const keywords1 = (card1[lang]?.keywords || card1.en?.keywords || []).join(', ');
    const keywords2 = (card2[lang]?.keywords || card2.en?.keywords || []).join(', ');
    const meaning1  = card1[lang]?.meaning || card1.en?.meaning || '';
    const meaning2  = card2[lang]?.meaning || card2.en?.meaning || '';

    const isVN = lang === 'vn';

    const prompt = isVN
        ? `Bạn là chuyên gia bói bài Lenormand với 20 năm kinh nghiệm. Hãy giải nghĩa sự kết hợp của 2 lá bài sau theo phong cách Lenormand thực tế, cụ thể, không có lá ngược.

Lá 1: ${name1}
- Từ khóa: ${keywords1}
- Nghĩa cơ bản: ${meaning1}

Lá 2: ${name2}  
- Từ khóa: ${keywords2}
- Nghĩa cơ bản: ${meaning2}

Hãy trả lời ĐÚNG theo format JSON sau (không thêm gì khác):
{
  "meaning": "Giải nghĩa kết hợp 2 lá, 30-40 từ, cụ thể và thực tế, có ngữ cảnh rõ ràng",
  "practical": "Lời khuyên hành động cụ thể, 15-20 từ, ví dụ thực tế trong cuộc sống"
}`
        : `You are an expert Lenormand card reader with 20 years of experience. Interpret the combination of these two cards in the Lenormand tradition: practical, literal, no reversed meanings.

Card 1: ${name1}
- Keywords: ${keywords1}
- Basic meaning: ${meaning1}

Card 2: ${name2}
- Keywords: ${keywords2}
- Basic meaning: ${meaning2}

Respond ONLY with this JSON format (no extra text):
{
  "meaning": "Combined interpretation, 30-40 words, concrete and practical with clear real-life context",
  "practical": "Specific actionable advice, 15-20 words, with a real-world example"
}`;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 300,
                system: isVN
                    ? 'Bạn là chuyên gia bói bài Lenormand. Chỉ trả lời bằng JSON thuần túy, không có markdown hay giải thích thêm.'
                    : 'You are a Lenormand card reader. Respond only with pure JSON, no markdown or extra explanation.',
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = await response.json();
        const rawText = data.content?.[0]?.text || '';

        // Parse JSON từ response
        const cleanText = rawText.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(cleanText);

        // Lưu cache cả EN lẫn VN nếu chỉ gọi 1 lần
        // Vì mỗi ngôn ngữ cần prompt khác nhau, lưu theo lang
        if (!_lenormandAICache[cacheKey]) _lenormandAICache[cacheKey] = {};
        _lenormandAICache[cacheKey][lang] = parsed;

        console.log(`[AI Fallback] ✅ Generated: ${name1} + ${name2} (${lang})`);
        return parsed;

    } catch (err) {
        console.error('[AI Fallback] Lỗi:', err);
        // Fallback cuối cùng: text generic nhưng dùng keywords thật
        return {
            meaning: isVN
                ? `${name1} kết hợp ${name2} cho thấy ${keywords1.split(',')[0].toLowerCase()} đang ảnh hưởng đến lĩnh vực ${keywords2.split(',')[0].toLowerCase()}. Đây là tín hiệu cần chú ý trong thực tế hiện tại.`
                : `${name1} combined with ${name2} indicates that ${keywords1.split(',')[0].toLowerCase()} is influencing matters of ${keywords2.split(',')[0].toLowerCase()}. Pay attention to how these themes intersect in your current situation.`,
            practical: isVN
                ? `Quan sát cách ${keywords1.split(',')[0].toLowerCase()} và ${keywords2.split(',')[0].toLowerCase()} biểu hiện cụ thể trong cuộc sống của bạn.`
                : `Notice how ${keywords1.split(',')[0].toLowerCase()} and ${keywords2.split(',')[0].toLowerCase()} manifest together in your daily life.`
        };
    }
}

// ==========================================
// HOOK VÀO LENORMAND SYNTHESIS
// ==========================================
// Override hàm interpretLenormandCombination hiện tại
// để tự động dùng AI khi không có data cứng
if (typeof interpretLenormandCombination !== 'undefined') {
    const _originalInterpret = interpretLenormandCombination;

    // Phiên bản async — dùng cho UI rendering có await
    window.interpretLenormandCombinationAsync = async function(card1, card2, lang = 'en') {
        return await getLenormandInterpretationWithAI(card1, card2, lang);
    };

    // Override bản sync để fallback gracefully (hiển thị loading rồi update)
    window.interpretLenormandCombination = function(card1, card2, lang = 'en') {
        const name1 = card1.en?.name || card1.name;
        const name2 = card2.en?.name || card2.name;
        const cacheKey = _getLenormandCacheKey(name1, name2);

        // Nếu có cache → trả về ngay
        if (_lenormandAICache[cacheKey]?.[lang]) {
            return _lenormandAICache[cacheKey][lang];
        }

        // Nếu có trong data cứng → dùng data cứng
        if (typeof lenormandCombinations !== 'undefined') {
            const key1 = `${name1}-${name2}`;
            const key2 = `${name2}-${name1}`;
            if (lenormandCombinations[key1]) return lenormandCombinations[key1][lang];
            if (lenormandCombinations[key2]) return lenormandCombinations[key2][lang];
        }

        // Không có → trigger AI generate async + trả về loading text
        getLenormandInterpretationWithAI(card1, card2, lang).then(result => {
            // Khi AI xong, tìm element chứa combination này và update
            const elemId = `combo-${cacheKey.replace('|', '-').replace(/\s+/g, '_')}`;
            const el = document.getElementById(elemId);
            if (el) {
                el.innerHTML = `
                    <p style="font-style:italic;opacity:0.8">${result.meaning}</p>
                    <p style="margin-top:8px;font-size:0.9em;opacity:0.7">💡 ${result.practical}</p>
                `;
                el.style.opacity = '0';
                setTimeout(() => { el.style.transition = 'opacity 0.5s'; el.style.opacity = '1'; }, 50);
            }
        });

        // Trả về loading placeholder trong lúc chờ
        return {
            meaning: lang === 'vn'
                ? '✨ Đang phân tích kết hợp lá bài...'
                : '✨ Generating combination reading...',
            practical: lang === 'vn'
                ? 'Vui lòng chờ một giây...'
                : 'Please wait a moment...'
        };
    };

    console.log('[Patch 2] ✅ interpretLenormandCombination đã được override với AI fallback.');
} else {
    // Nếu function chưa tồn tại, định nghĩa mới
    window.interpretLenormandCombination = async function(card1, card2, lang = 'en') {
        return await getLenormandInterpretationWithAI(card1, card2, lang);
    };
    console.log('[Patch 2] ✅ interpretLenormandCombination được định nghĩa mới với AI fallback.');
}

// ==========================================
// UTILITY: Pre-warm cache cho các cặp phổ biến
// ==========================================
// Gọi hàm này khi người dùng vào màn hình Lenormand để cache sẵn
window.prewarmLenormandCache = async function(lang = 'en') {
    if (typeof lenormandData === 'undefined') return;

    // 20 cặp phổ biến nhất trong Lenormand
    const popularPairs = [
        ['Rider', 'Heart'], ['Ship', 'Fish'], ['House', 'Tree'],
        ['Clouds', 'Sun'], ['Snake', 'Lily'], ['Coffin', 'Key'],
        ['Stars', 'Clover'], ['Bouquet', 'Ring'], ['Dog', 'Heart'],
        ['Fox', 'Bear'], ['Moon', 'Stars'], ['Key', 'House'],
        ['Letter', 'Rider'], ['Child', 'Tree'], ['Woman', 'Man'],
        ['Book', 'Key'], ['Fish', 'Bear'], ['Garden', 'Bouquet'],
        ['Mountain', 'Ship'], ['Cross', 'Coffin']
    ];

    console.log('[Prewarm] Đang cache 20 cặp Lenormand phổ biến...');

    for (const [n1, n2] of popularPairs) {
        const c1 = lenormandData.find(c => c.en?.name === n1);
        const c2 = lenormandData.find(c => c.en?.name === n2);
        if (c1 && c2) {
            await getLenormandInterpretationWithAI(c1, c2, lang);
            await new Promise(r => setTimeout(r, 200)); // nhỏ delay tránh rate limit
        }
    }

    console.log('[Prewarm] ✅ Pre-warming hoàn tất.');
};

console.log('[Patch 2] ✅ AI Fallback system cho Lenormand đã sẵn sàng.');
console.log('[Patch 2] 💡 Gọi prewarmLenormandCache("vn") để cache sẵn 20 cặp phổ biến.');
