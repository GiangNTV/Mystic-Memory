// ============================================================
//  STATIC FALLBACK — Thay thế toàn bộ chức năng AI
//  Load sau: app.js, patches.js, enhanced_vietnamese.js
//
//  File này thay thế 3 file AI cũ:
//    ✗ ai_fallback.js        → dùng tarot_combinations.js + lenormand_interpretations.js
//    ✗ ai_deep_guidance.js   → app.js đã có sẵn toggleDeepGuidance() tĩnh
//    ✗ planets_ai_forecast.js→ app.js đã có sẵn showForecast() và renderTransitTimeline()
// ============================================================

(function initStaticFallback() {

    // ──────────────────────────────────────────────────────────────
    // PHẦN 1: TAROT COMBINATIONS
    // Dùng getTarotCombination() từ tarot_combinations.js (data tĩnh)
    // ──────────────────────────────────────────────────────────────

    /**
     * Async wrapper cho getTarotCombination tĩnh.
     * ai_fallback.js cũ cung cấp hàm này qua Gemini — nay dùng data tĩnh.
     */
    window.getTarotCombinationAsync = async function(card1, card2, lang) {
        lang = lang || 'en';
        if (typeof getTarotCombination === 'function') {
            return getTarotCombination(card1, card2, lang);
        }
        // Fallback cuối nếu file tarot_combinations.js chưa load
        const n1 = card1.en?.name || '';
        const n2 = card2.en?.name || '';
        return lang === 'vn'
            ? { meaning: `Sự tương tác giữa ${n1} và ${n2} tạo ra một động lực phức tạp.`, advice: 'Hãy quan sát cách hai lá bài này phản chiếu tình huống của bạn.' }
            : { meaning: `The interaction between ${n1} and ${n2} creates a complex dynamic.`, advice: 'Observe how these two cards reflect your current situation.' };
    };

    // ──────────────────────────────────────────────────────────────
    // PHẦN 2: LENORMAND COMBINATIONS
    // Dùng interpretLenormandCombination() tĩnh từ lenormand_interpretations.js
    // ──────────────────────────────────────────────────────────────

    /**
     * Async wrapper — ai_fallback.js cũ gọi Gemini khi không có data cứng.
     * Nay chỉ dùng hàm tĩnh đã có (có sẵn fallback text tự động).
     */
    window.interpretLenormandCombinationAsync = async function(card1, card2, lang) {
        lang = lang || 'en';
        if (typeof interpretLenormandCombination === 'function') {
            return interpretLenormandCombination(card1, card2, lang);
        }
        const n1 = card1.en?.name || '';
        const n2 = card2.en?.name || '';
        return lang === 'vn'
            ? { meaning: `${n1} và ${n2} kết hợp chỉ ra một tình huống thực tế trong cuộc sống hàng ngày của bạn.`, practical: 'Quan sát các sự kiện cụ thể xung quanh bạn để tìm ý nghĩa.' }
            : { meaning: `${n1} combined with ${n2} points to a practical situation in your daily life.`, practical: 'Look for concrete events around you to find the meaning.' };
    };

    /**
     * Sync version — dùng data tĩnh ngay lập tức, không cần loading placeholder.
     */
    if (typeof interpretLenormandCombination !== 'function') {
        window.interpretLenormandCombination = function(card1, card2, lang) {
            lang = lang || 'en';
            const n1 = card1.en?.name || '';
            const n2 = card2.en?.name || '';
            return lang === 'vn'
                ? { meaning: `${n1} và ${n2} kết hợp chỉ ra một tình huống thực tế.`, practical: 'Quan sát các sự kiện cụ thể xung quanh bạn.' }
                : { meaning: `${n1} combined with ${n2} points to a practical situation.`, practical: 'Observe concrete events around you.' };
        };
    }

    /**
     * Pre-warm stub — ai_fallback.js cũ dùng để cache sẵn qua API.
     * Nay không cần làm gì vì data tĩnh đã sẵn sàng ngay lập tức.
     */
    window.prewarmLenormandCache = async function() {
        // No-op: data tĩnh không cần pre-warm
    };

    // ──────────────────────────────────────────────────────────────
    // PHẦN 3: GENERATEDEEPSYNTHESIS — KHÔNG INJECT PANEL AI
    // ai_fallback.js cũ override hàm này để thêm "Card Pair Dynamics"
    // panel gọi Gemini. Nay bỏ override → hàm gốc trong app.js hoạt động.
    // ──────────────────────────────────────────────────────────────
    // (Không cần code ở đây — chỉ cần KHÔNG override là đủ.)

    // ──────────────────────────────────────────────────────────────
    // PHẦN 4: DEEP GUIDANCE PER CARD — KHÔNG OVERRIDE
    // ai_deep_guidance.js cũ override toggleDeepGuidance() để gọi Gemini.
    // app.js đã có sẵn toggleDeepGuidance() đọc tarotDeepInterpretations.
    // (Không cần code ở đây — chỉ cần KHÔNG load ai_deep_guidance.js.)
    // ──────────────────────────────────────────────────────────────

    // ──────────────────────────────────────────────────────────────
    // PHẦN 5: PLANETS FORECAST — KHÔNG OVERRIDE
    // planets_ai_forecast.js cũ override showForecast() và
    // renderTransitTimeline() để thêm panel AI phân tích Gemini.
    // app.js đã có sẵn 2 hàm này hoạt động hoàn toàn với data tĩnh.
    // (Không cần code ở đây — chỉ cần KHÔNG load planets_ai_forecast.js.)
    // ──────────────────────────────────────────────────────────────

    console.log('[Static Fallback] ✅ Tất cả chức năng AI đã được thay thế bằng data tĩnh.');
    console.log('[Static Fallback] ✅ Tarot combinations → tarot_combinations.js');
    console.log('[Static Fallback] ✅ Lenormand combinations → lenormand_interpretations.js');
    console.log('[Static Fallback] ✅ Deep Guidance → app.js (tarotDeepInterpretations)');
    console.log('[Static Fallback] ✅ Planets Forecast → app.js (forecastAdvice + Astronomy)');

})();
