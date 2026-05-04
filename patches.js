// ==========================================
// PATCHES — ALL IN ONE
// ==========================================
// Gộp từ: app_patches.js + ux_patches.js + reversed_display_patch.js
// Load sau: app.js, data/reversed_data.js

// ==========================================
// APP PATCHES & UI HELPERS
// ==========================================
// Gộp từ: lenormand_integration_patch.js + ui_helpers.js
// Load sau: app.js

// ==========================================
// PHẦN 1: LENORMAND INTEGRATION PATCH
// ==========================================
// ==========================================
// This file EXTENDS the existing app.js without breaking it

// Store reference to original generateSynthesis
const _originalGenerateSynthesis = generateSynthesis;

// Override generateSynthesis to route based on deck type
generateSynthesis = function () {
    if (drawnCards.length === 0) return "";

    const spread = currentSpread;
    const lang = currentLang;
    const cards = drawnCards;

    // LENORMAND: Use combination-based reading (NO reversed cards)
    if (currentDeck === lenormandData) {
        // Check if generateLenormandSynthesis is available
        if (typeof generateLenormandSynthesis === 'function') {
            return generateLenormandSynthesis(cards, spread, lang);
        } else {
            console.warn('generateLenormandSynthesis not found, falling back to original');
            return _originalGenerateSynthesis();
        }
    }

    // TAROT: Use original enhanced interpretation
    return _originalGenerateSynthesis();
};

// Hide reverse buttons for Lenormand
document.addEventListener('DOMContentLoaded', function () {
    // Monitor when cards are displayed
    const observer = new MutationObserver(function (mutations) {
        if (currentDeck === 'lenormand') {
            // Hide ALL reverse toggle buttons for Lenormand
            const reverseToggles = document.querySelectorAll('.reverse-toggle');
            reverseToggles.forEach(toggle => {
                toggle.style.display = 'none';
            });
        }
    });

    // Observe the reading view for changes
    const readingView = document.getElementById('reading-view');
    if (readingView) {
        observer.observe(readingView, {
            childList: true,
            subtree: true
        });
    }
});

// Also hide reverse buttons when cards are flipped
const _originalFlipCard = window.flipCard;
if (_originalFlipCard) {
    window.flipCard = function (index) {
        _originalFlipCard(index);

        // Hide reverse button if Lenormand
        if (currentDeck === 'lenormand') {
            setTimeout(() => {
                const reverseToggles = document.querySelectorAll('.reverse-toggle');
                reverseToggles.forEach(toggle => {
                    toggle.style.display = 'none';
                });
            }, 100);
        }
    };
}

// Enhanced Lenormand data with all 36 cards (keeping English names)
const lenormandEnhancedData = [
    {
        en: {
            name: "Rider",
            keywords: ["News", "Messages", "Movement", "Speed"],
            meaning: "Information arrives swiftly. A visitor, message, or news is on its way. Represents physical movement and active energy.",
            literal: "Mail carrier, delivery, young man, sport, vehicle, arrival",
            timing: "Very soon - hours to days"
        },
        vn: {
            name: "Rider",  // Keep English name
            keywords: ["Tin tức", "Thông điệp", "Chuyển động", "Tốc độ"],
            meaning: "Thông tin đến nhanh chóng. Một vị khách, tin nhắn, hoặc tin tức đang trên đường. Đại diện cho chuyển động vật lý và năng lượng tích cực.",
            literal: "Người đưa thư, giao hàng, thanh niên, thể thao, phương tiện, sự đến",
            timing: "Rất sớm - vài giờ đến vài ngày"
        }
    },
    {
        en: {
            name: "Clover",
            keywords: ["Luck", "Opportunity", "Lightness", "Brief"],
            meaning: "A stroke of good fortune, but temporary. Small blessings and pleasant surprises. Don't expect long-lasting effects.",
            literal: "Small luck, gamble, chance encounter, risk that pays off",
            timing: "Short-term - days to 2 weeks"
        },
        vn: {
            name: "Clover",  // Keep English name
            keywords: ["May mắn", "Cơ hội", "Nhẹ nhàng", "Ngắn ngủi"],
            meaning: "Một cơn may, nhưng tạm thời. Phúc lành nhỏ và bất ngờ dễ chịu. Đừng mong đợi hiệu quả lâu dài.",
            literal: "Vận may nhỏ, đánh bạc, cuộc gặp tình cờ, rủi ro có lãi",
            timing: "Ngắn hạn - vài ngày đến 2 tuần"
        }
    },
    {
        en: {
            name: "Ship",
            keywords: ["Journey", "Distance", "Trade", "Foreign"],
            meaning: "Travel, whether physical or metaphorical. Commerce, international matters, and things from afar. Progress through distance.",
            literal: "Vacation, business trip, import/export, relocation, longing for elsewhere",
            timing: "Medium to long - weeks to months"
        },
        vn: {
            name: "Ship",  // Keep English name
            keywords: ["Hành trình", "Xa xôi", "Buôn bán", "Ngoại quốc"],
            meaning: "Du lịch, dù vật lý hay ẩn dụ. Thương mại, vấn đề quốc tế, và những điều từ xa. Tiến bộ qua khoảng cách.",
            literal: "Kỳ nghỉ, chuyến công tác, xuất nhập khẩu, di dời, khát khao nơi xa",
            timing: "Trung bình đến dài - vài tuần đến tháng"
        }
    },
    {
        en: {
            name: "House",
            keywords: ["Home", "Family", "Stability", "Property"],
            meaning: "Domestic life, family matters, real estate. A place of security and belonging.",
            literal: "Residence, household, roots, family business, landlord",
            timing: "Long-term - months to years"
        },
        vn: {
            name: "House",  // Keep English name
            keywords: ["Nhà", "Gia đình", "Ổn định", "Tài sản"],
            meaning: "Cuộc sống gia đình, vấn đề gia đình, bất động sản. Nơi an ninh và thuộc về.",
            literal: "Nơi cư trú, hộ gia đình, rễ, doanh nghiệp gia đình, chủ nhà",
            timing: "Dài hạn - vài tháng đến năm"
        }
    },
    {
        en: {
            name: "Tree",
            keywords: ["Health", "Growth", "Longevity", "Roots"],
            meaning: "Physical and spiritual health. Deep-rooted matters, family tree, slow steady growth.",
            literal: "Doctor, hospital, ancestry, life force, patience required",
            timing: "Very long - years, generational"
        },
        vn: {
            name: "Tree",  // Keep English name
            keywords: ["Sức khỏe", "Tăng trưởng", "Sống lâu", "Rễ nguồn"],
            meaning: "Sức khỏe thể chất và tinh thần. Vấn đề ăn sâu, cây gia phả, tăng trưởng chậm và vững.",
            literal: "Bác sĩ, bệnh viện, tổ tiên, sinh lực, cần kiên nhẫn",
            timing: "Rất dài - nhiều năm, qua thế hệ"
        }
    },
    {
        en: {
            name: "Clouds",
            keywords: ["Confusion", "Uncertainty", "Doubts", "Temporary"],
            meaning: "Unclear situation, confusion, things hidden or obscured. Will clear up in time.",
            literal: "Fog, misunderstanding, lack of clarity, depression",
            timing: "Temporary - days to weeks to clear"
        },
        vn: {
            name: "Clouds",  // Keep English name
            keywords: ["Bối rối", "Không chắc chắn", "Nghi ngờ", "Tạm thời"],
            meaning: "Tình huống không rõ ràng, bối rối, điều bị che giấu hoặc mờ ám. Sẽ sáng tỏ theo thời gian.",
            literal: "Sương mù, hiểu lầm, thiếu rõ ràng, trầm cảm",
            timing: "Tạm thời - vài ngày đến tuần để sáng tỏ"
        }
    },
    {
        en: {
            name: "Snake",
            keywords: ["Deception", "Complexity", "Wisdom", "Seduction"],
            meaning: "Complications, cunning, betrayal, or deep wisdom. Something winding and indirect.",
            literal: "Other woman, rival, jealousy, alternative path, detours",
            timing: "Twisted timeline - indirect route"
        },
        vn: {
            name: "Snake",  // Keep English name
            keywords: ["Lừa dối", "Phức tạp", "Trí tuệ", "Quyến rũ"],
            meaning: "Rắc rối, xảo quyệt, phản bội, hoặc trí tuệ sâu sắc. Điều gì đó uốn lượn và gián tiếp.",
            literal: "Người thứ ba, đối thủ, ghen tị, con đường khác, vòng vo",
            timing: "Timeline quanh co - đường vòng"
        }
    },
    {
        en: {
            name: "Coffin",
            keywords: ["Ending", "Transformation", "Illness", "Closure"],
            meaning: "Something comes to an end. Death of a situation, illness, or necessary transformation.",
            literal: "Terminal illness, grief, letting go, final decision",
            timing: "Definitive end - no timeline"
        },
        vn: {
            name: "Coffin",  // Keep English name
            keywords: ["Kết thúc", "Chuyển hóa", "Bệnh tật", "Khép lại"],
            meaning: "Điều gì đó đến hồi kết. Cái chết của tình huống, bệnh tật, hoặc chuyển hóa cần thiết.",
            literal: "Bệnh nặng, đau buồn, buông bỏ, quyết định cuối cùng",
            timing: "Kết thúc chắc chắn - không có timeline"
        }
    },
    {
        en: {
            name: "Bouquet",
            keywords: ["Gift", "Happiness", "Beauty", "Invitation"],
            meaning: "Pleasant surprise, gift, social happiness, beauty and grace.",
            literal: "Present, compliment, admiration, party invitation, aesthetics",
            timing: "Soon - within days"
        },
        vn: {
            name: "Bouquet",  // Keep English name
            keywords: ["Quà tặng", "Hạnh phúc", "Vẻ đẹp", "Lời mời"],
            meaning: "Bất ngờ dễ chịu, quà tặng, niềm vui xã hội, vẻ đẹp và duyên dáng.",
            literal: "Món quà, lời khen, sự ngưỡng mộ, lời mời dự tiệc, thẩm mỹ",
            timing: "Sớm - trong vài ngày"
        }
    },
    {
        en: {
            name: "Scythe",
            keywords: ["Decision", "Sudden", "Danger", "Harvest"],
            meaning: "Sudden cut or decision. Danger, accident, or quick harvest of results.",
            literal: "Surgery, accident, sharp words, abrupt ending, reaping",
            timing: "Sudden - immediate to days"
        },
        vn: {
            name: "Scythe",  // Keep English name
            keywords: ["Quyết định", "Đột ngột", "Nguy hiểm", "Thu hoạch"],
            meaning: "Cắt đứt hoặc quyết định đột ngột. Nguy hiểm, tai nạn, hoặc thu hoạch kết quả nhanh.",
            literal: "Phẫu thuật, tai nạn, lời nói sắc bén, kết thúc đột ngột, gặt hái",
            timing: "Đột ngột - ngay lập tức đến vài ngày"
        }
    }
    // NOTE: Chỉ 10 lá đầu tiên. Bạn cần thêm 26 lá còn lại theo cùng format
    // Nhưng QUAN TRỌNG: Giữ .en.name và .vn.name GIỐNG NHAU (tiếng Anh)
];

console.log('✨ Lenormand integration patch (FIXED) loaded successfully!');
console.log('📋 English card names preserved for both languages');

// ===========================================
// PHẦN 2: UI HELPERS
// ===========================================

// ==========================================

// Deck information messages
const deckInfoMessages = {
    en: {
        tarot: "🔮 <strong>Tarot</strong> explores spiritual themes and archetypal patterns. Best for life's bigger questions, personal growth, and understanding deeper meanings. Readings may include reversed cards for nuanced interpretations.",
        lenormand: "🎴 <strong>Lenormand</strong> provides practical, literal predictions with specific timing. Best for concrete questions about work, money, and daily events. Cards are read in combinations with NO reversed meanings.",
        comparison: "💡 <strong>Tip:</strong> Use Tarot for 'Why is this happening?' and Lenormand for 'What will happen and when?'"
    },
    vn: {
        tarot: "🔮 <strong>Tarot</strong> khám phá chủ đề tâm linh và khuôn mẫu nguyên mẫu. Tốt nhất cho những câu hỏi lớn trong cuộc đời, phát triển cá nhân, và hiểu ý nghĩa sâu xa. Trải bài có thể bao gồm lá ngược cho giải nghĩa tinh tế.",
        lenormand: "🎴 <strong>Lenormand</strong> cung cấp dự đoán thực tế, cụ thể với thời gian rõ ràng. Tốt nhất cho câu hỏi cụ thể về công việc, tiền bạc, và sự kiện hàng ngày. Các lá bài được đọc kết hợp và KHÔNG có nghĩa ngược.",
        comparison: "💡 <strong>Mẹo:</strong> Dùng Tarot cho 'Tại sao điều này xảy ra?' và Lenormand cho 'Chuyện gì sẽ xảy ra và khi nào?'"
    }
};

// Show deck info banner
function showDeckInfo(deckType) {
    const banner = document.getElementById('deck-info-banner');
    const textEl = document.getElementById('deck-info-text');
    const lang = currentLang;
    
    if (banner && textEl) {
        let message = '';
        
        if (deckType === 'tarot') {
            message = deckInfoMessages[lang].tarot;
        } else if (deckType === 'lenormand') {
            message = deckInfoMessages[lang].lenormand;
        }
        
        // Add comparison tip
        message += '<br><br>' + deckInfoMessages[lang].comparison;
        
        textEl.innerHTML = message;
        banner.classList.remove('hidden');
        
        // Recreate icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Close deck info banner
function closeDeckInfo() {
    const banner = document.getElementById('deck-info-banner');
    if (banner) {
        banner.classList.add('hidden');
    }
}

// Override selectDeck to show info
const _originalSelectDeck = window.selectDeck;
if (_originalSelectDeck) {
    window.selectDeck = function(deck) {
        _originalSelectDeck(deck);
        showDeckInfo(deck);
    };
}

// Add info tooltips to deck buttons
document.addEventListener('DOMContentLoaded', function() {
    const tarotBtn = document.querySelector('button[onclick*="tarot"]');
    const lenormandBtn = document.querySelector('button[onclick*="lenormand"]');
    
    if (tarotBtn) {
        tarotBtn.setAttribute('title', 'Spiritual depth & archetypal wisdom');
    }
    
    if (lenormandBtn) {
        lenormandBtn.setAttribute('title', 'Practical predictions & specific timing');
    }
});

// Enhanced i18n translations
const enhancedI18n = {
    en: {
        "tarot-desc-new": "Deep spiritual insights and archetypal wisdom for life's bigger questions.",
        "len-desc-new": "Clear, practical predictions with specific timing. Literal meanings for everyday situations.",
        "deck-info-title": "Understanding Your Deck"
    },
    vn: {
        "tarot-desc-new": "Thấu hiểu tâm linh sâu sắc và trí tuệ nguyên mẫu cho những câu hỏi lớn trong cuộc đời.",
        "len-desc-new": "Dự đoán thực tế, rõ ràng với thời gian cụ thể. Ý nghĩa cụ thể cho tình huống hàng ngày.",
        "deck-info-title": "Hiểu Về Bộ Bài Của Bạn"
    }
};

// Merge with existing i18n if it exists
if (typeof i18n !== 'undefined') {
    Object.keys(enhancedI18n).forEach(lang => {
        i18n[lang] = { ...i18n[lang], ...enhancedI18n[lang] };
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDeckInfo();
    }
});

// Auto-hide banner after 15 seconds
let bannerTimeout;
const _originalShowDeckInfo = showDeckInfo;
showDeckInfo = function(deckType) {
    _originalShowDeckInfo(deckType);
    
    if (bannerTimeout) {
        clearTimeout(bannerTimeout);
    }
    
    bannerTimeout = setTimeout(() => {
        closeDeckInfo();
    }, 15000);
};

// Add visual badge showing active deck
function addDeckBadge() {
    const readingView = document.getElementById('reading-view');
    
    if (readingView && currentDeck && !readingView.classList.contains('hidden')) {
        // Remove existing badge if any
        const existingBadge = document.getElementById('active-deck-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        // Create new badge
        const badge = document.createElement('div');
        badge.id = 'active-deck-badge';
        badge.className = 'fixed top-20 right-4 z-40 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md';
        
        if (currentDeck === tarotData) {
            badge.className += ' bg-amber-500/20 border border-amber-500/40 text-amber-300';
            badge.innerHTML = '<i data-lucide="layers" class="w-3 h-3 inline mr-1"></i>Tarot';
        } else if (currentDeck === lenormandData) {
            badge.className += ' bg-indigo-500/20 border border-indigo-500/40 text-indigo-300';
            badge.innerHTML = '<i data-lucide="component" class="w-3 h-3 inline mr-1"></i>Lenormand';
        }
        
        readingView.appendChild(badge);
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Hook into prepareInterpretation to add badge
const _originalPrepareInterpretation = window.prepareInterpretation;
if (_originalPrepareInterpretation) {
    window.prepareInterpretation = function() {
        _originalPrepareInterpretation();
        setTimeout(addDeckBadge, 200);
    };
} else {
    // If prepareInterpretation doesn't exist yet, monitor when reading view appears
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const readingView = document.getElementById('reading-view');
                if (readingView && !readingView.classList.contains('hidden')) {
                    setTimeout(addDeckBadge, 200);
                }
            }
        });
    });
    
    const readingView = document.getElementById('reading-view');
    if (readingView) {
        observer.observe(readingView, { attributes: true });
    }
}

// Add analytics/tracking for deck usage
function trackDeckUsage(deckType, spread) {
    const stats = JSON.parse(localStorage.getItem('deck_usage_stats') || '{}');
    
    if (!stats[deckType]) {
        stats[deckType] = { total: 0, spreads: {} };
    }
    
    stats[deckType].total++;
    
    if (!stats[deckType].spreads[spread]) {
        stats[deckType].spreads[spread] = 0;
    }
    
    stats[deckType].spreads[spread]++;
    
    localStorage.setItem('deck_usage_stats', JSON.stringify(stats));
}

// Hook tracking into dealCards
const _originalDealCards = window.dealCards;
if (_originalDealCards) {
    window.dealCards = function(isManual = false) {
        _originalDealCards(isManual);
        
        // Track usage
        const deckType = currentDeck === tarotData ? 'tarot' : 'lenormand';
        trackDeckUsage(deckType, currentSpread);
    };
}

// Display user statistics
function showUserStats() {
    const stats = JSON.parse(localStorage.getItem('deck_usage_stats') || '{}');
    
    if (Object.keys(stats).length === 0) {
        return currentLang === 'en' 
            ? 'No readings yet. Start your journey!'
            : 'Chưa có trải bài. Hãy bắt đầu hành trình!';
    }
    
    let html = '<div class="space-y-2 text-sm">';
    
    Object.keys(stats).forEach(deck => {
        const deckStats = stats[deck];
        html += `<div class="flex items-center justify-between">`;
        html += `<span class="capitalize font-bold">${deck}:</span>`;
        html += `<span class="text-amber-400">${deckStats.total} ${currentLang === 'en' ? 'readings' : 'lần'}</span>`;
        html += `</div>`;
    });
    
    html += '</div>';
    
    return html;
}

console.log('✨ UI Helper functions (FIXED) loaded successfully!');
console.log('📊 Deck info banners and UX improvements active!');
-e 


// ==========================================
// UX/UI PATCHES
// ==========================================
// Load sau app.js. Xử lý tất cả UX improvements:
// 1. Floating save button — scroll-aware, không bounce
// 2. Deep Guidance — auto-expand section đầu tiên
// 3. Reversed card — visual rõ hơn
// 4. Back button trong reading flow
// 5. Jump to Summary button
// 6. Share as Image (html2canvas)
// 7. Journal empty state + search
// 8. Loading shimmer cho AI fallback
// 9. Onboarding tooltip lần đầu
// ==========================================

(function initUXPatches() {

    // =============================================
    // 1. FLOATING SAVE BUTTON — scroll-aware
    // =============================================
    function patchFloatingSaveBtn() {
        const btn = document.getElementById('floating-save-btn');
        if (!btn) return;

        // Bỏ animate-bounce, thêm smooth transition
        btn.classList.remove('animate-bounce');
        btn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        // Scroll-aware: hiện khi scroll lên, ẩn khi scroll xuống
        let lastY = window.scrollY;
        let hideTimer;

        window.addEventListener('scroll', () => {
            if (btn.classList.contains('hidden')) return;
            const currentY = window.scrollY;
            if (currentY < lastY) {
                // Scroll lên → hiện
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0) scale(1)';
            } else {
                // Scroll xuống → ẩn tạm
                btn.style.opacity = '0';
                btn.style.transform = 'translateY(12px) scale(0.95)';
            }
            lastY = currentY;
        }, { passive: true });
    }

    // =============================================
    // 2. DEEP GUIDANCE — tự mở section đầu tiên
    // =============================================
    // Override toggleDeepGuidance để auto-expand khi card flip
    const _origToggle = window.toggleDeepGuidance;
    window.toggleDeepGuidance = function(index) {
        if (_origToggle) _origToggle(index);
    };

    // Hook vào showCardInterpretation để auto-expand deep guidance
    const _origShow = window.showCardInterpretation;
    // Patch: sau khi card được append, auto-open deep guidance
    // Dùng MutationObserver để bắt khi card detail được thêm vào DOM
    const cardDetailObserver = new MutationObserver((mutations) => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                const idx = node.getAttribute && node.getAttribute('data-card-index');
                if (idx !== null) {
                    // Auto-open deep guidance sau 300ms
                    setTimeout(() => {
                        const guidBox = document.getElementById(`deep-guidance-${idx}`);
                        const chevron = document.getElementById(`deep-chevron-${idx}`);
                        if (guidBox && guidBox.classList.contains('hidden')) {
                            // Trigger click để populate + open
                            const btn = guidBox.previousElementSibling;
                            if (btn && btn.onclick) btn.click();
                            else if (window.toggleDeepGuidance) window.toggleDeepGuidance(parseInt(idx));
                        }
                    }, 350);
                }
            });
        });
    });

    function startCardObserver() {
        const list = document.getElementById('card-details-list');
        if (list) {
            cardDetailObserver.observe(list, { childList: true });
        } else {
            setTimeout(startCardObserver, 400);
        }
    }
    startCardObserver();

    // =============================================
    // 3. REVERSED CARD — visual indicator rõ hơn
    // =============================================
    // Thêm CSS cho reversed cards
    const reversedCSS = `
        .mystic-card.reversed-card .card-front {
            box-shadow: 0 0 20px rgba(99,102,241,0.4), inset 0 0 20px rgba(99,102,241,0.05);
            border-color: rgba(99,102,241,0.4) !important;
        }
        .reversed-badge-overlay {
            position: absolute;
            top: 6px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #4f46e5, #6366f1);
            color: white;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.12em;
            padding: 2px 8px;
            border-radius: 20px;
            z-index: 50;
            pointer-events: none;
            white-space: nowrap;
        }
        [data-card-index].reversed-card-detail {
            border-color: rgba(99,102,241,0.3) !important;
            background: rgba(99,102,241,0.03) !important;
        }
        [data-card-index].reversed-card-detail .reversed-header-badge {
            display: inline-flex !important;
        }
    `;
    const styleEl = document.createElement('style');
    styleEl.textContent = reversedCSS;
    document.head.appendChild(styleEl);

    // Patch flipCard để add reversed class
    const _origFlip = window.flipCard;
    window.flipCard = function(el, index) {
        if (_origFlip) _origFlip(el, index);
        // Sau khi flip, check nếu reversed
        setTimeout(() => {
            if (typeof reversedList !== 'undefined' && reversedList[index]) {
                const cardContainer = el?.parentElement || document.querySelectorAll('.mystic-card')[index];
                if (cardContainer) {
                    cardContainer.classList.add('reversed-card');
                    // Thêm badge overlay
                    if (!cardContainer.querySelector('.reversed-badge-overlay')) {
                        const badge = document.createElement('div');
                        badge.className = 'reversed-badge-overlay';
                        badge.textContent = typeof currentLang !== 'undefined' && currentLang === 'vn' ? '↓ NGƯỢC' : '↓ REV';
                        cardContainer.appendChild(badge);
                    }
                }
                // Cũng style card detail
                const detail = document.querySelector(`[data-card-index="${index}"]`);
                if (detail) detail.classList.add('reversed-card-detail');
            }
        }, 600);
    };

    // =============================================
    // 4. BACK BUTTON trong reading flow
    // =============================================
    function addBackButton() {
        const readingView = document.getElementById('reading-view');
        if (!readingView || document.getElementById('ux-back-btn')) return;

        const backBtn = document.createElement('button');
        backBtn.id = 'ux-back-btn';
        backBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            <span id="ux-back-text">Chọn lại</span>
        `;
        backBtn.style.cssText = `
            position: fixed; top: 80px; left: 16px; z-index: 60;
            display: flex; align-items: center; gap: 6px;
            padding: 6px 14px; border-radius: 20px;
            background: rgba(15,23,42,0.85); border: 1px solid rgba(255,255,255,0.12);
            color: rgba(148,163,184,1); font-size: 12px; font-weight: 600;
            cursor: pointer; transition: all 0.2s ease;
            backdrop-filter: blur(8px);
        `;
        backBtn.onmouseover = () => { backBtn.style.color = 'white'; backBtn.style.borderColor = 'rgba(245,158,11,0.4)'; };
        backBtn.onmouseout = () => { backBtn.style.color = 'rgba(148,163,184,1)'; backBtn.style.borderColor = 'rgba(255,255,255,0.12)'; };
        backBtn.onclick = () => {
            if (confirm(currentLang === 'vn' ? 'Quay lại trang chủ? Reading hiện tại sẽ bị mất.' : 'Return to home? Current reading will be lost.')) {
                location.reload();
            }
        };
        document.body.appendChild(backBtn);

        // Update text theo ngôn ngữ
        function updateBackText() {
            const t = document.getElementById('ux-back-text');
            if (t) t.textContent = typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Chọn lại' : 'Back';
        }
        setInterval(updateBackText, 500);
    }

    // Show back button khi reading view hiện
    const readingViewObserver = new MutationObserver(() => {
        const rv = document.getElementById('reading-view');
        if (rv && !rv.classList.contains('hidden')) {
            addBackButton();
            const btn = document.getElementById('ux-back-btn');
            if (btn) btn.style.display = 'flex';
        } else {
            const btn = document.getElementById('ux-back-btn');
            if (btn) btn.style.display = 'none';
        }
    });

    function startReadingObserver() {
        const rv = document.getElementById('reading-view');
        if (rv) readingViewObserver.observe(rv, { attributes: true, attributeFilter: ['class'] });
        else setTimeout(startReadingObserver, 400);
    }
    startReadingObserver();

    // =============================================
    // 5. JUMP TO SUMMARY button
    // =============================================
    function addJumpToSummaryBtn() {
        if (document.getElementById('ux-jump-summary')) return;
        const btn = document.createElement('button');
        btn.id = 'ux-jump-summary';
        btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
            <span id="ux-jump-text">Xem tổng hợp</span>
        `;
        btn.style.cssText = `
            display: none; position: fixed; bottom: 90px; right: 20px; z-index: 60;
            align-items: center; gap: 6px;
            padding: 8px 16px; border-radius: 20px;
            background: rgba(67,56,202,0.9); border: 1px solid rgba(99,102,241,0.5);
            color: white; font-size: 12px; font-weight: 700;
            cursor: pointer; transition: all 0.3s ease;
            backdrop-filter: blur(8px);
            box-shadow: 0 4px 15px rgba(99,102,241,0.3);
        `;
        btn.onmouseover = () => { btn.style.transform = 'scale(1.05)'; btn.style.boxShadow = '0 6px 20px rgba(99,102,241,0.5)'; };
        btn.onmouseout = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 4px 15px rgba(99,102,241,0.3)'; };
        btn.onclick = () => {
            const synthBox = document.getElementById('synthesis-box');
            if (synthBox) synthBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
        document.body.appendChild(btn);
    }

    // Show jump button khi tất cả cards đã flip
    const _origCheckAllFlipped = window.checkAllFlipped;
    // Patch checkAllFlipped
    function patchCheckAllFlipped() {
        if (typeof checkAllFlipped === 'undefined') {
            setTimeout(patchCheckAllFlipped, 300);
            return;
        }
        // Thêm jump button logic sau khi synthesis hiện
        const origCheck = checkAllFlipped;
        window.checkAllFlippedOrig = origCheck;
        // Override bằng cách observe synthesis-box
        const synthObserver = new MutationObserver(() => {
            const synth = document.getElementById('synthesis-box');
            if (synth && !synth.classList.contains('hidden')) {
                addJumpToSummaryBtn();
                const btn = document.getElementById('ux-jump-summary');
                const t = document.getElementById('ux-jump-text');
                if (btn) btn.style.display = 'flex';
                if (t) t.textContent = typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Xem tổng hợp' : 'Jump to Summary';
                // Ẩn sau 8 giây nếu user không dùng
                setTimeout(() => { if (btn) btn.style.display = 'none'; }, 8000);
            }
        });
        const synth = document.getElementById('synthesis-box');
        if (synth) synthObserver.observe(synth, { attributes: true, attributeFilter: ['class'] });
    }
    setTimeout(patchCheckAllFlipped, 500);

    // =============================================
    // 6. SHARE AS IMAGE (html2canvas đã có sẵn)
    // =============================================
    window.shareAsImage = async function() {
        const readingEl = document.getElementById('reading-interpretation');
        if (!readingEl || typeof html2canvas === 'undefined') return;

        const btn = document.getElementById('ux-share-img-btn');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = `<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
                <span>${currentLang === 'vn' ? 'Đang tạo...' : 'Creating...'}</span>`;
        }

        try {
            const canvas = await html2canvas(readingEl, {
                backgroundColor: '#020617',
                scale: 1.5,
                useCORS: true,
                allowTaint: true,
                logging: false
            });

            // Tạo link download
            const link = document.createElement('a');
            const date = new Date().toISOString().slice(0, 10);
            link.download = `mystic-reading-${date}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            if (btn) {
                btn.disabled = false;
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span>${currentLang === 'vn' ? 'Lưu ảnh' : 'Save Image'}</span>`;
            }
        } catch(e) {
            console.error('Share image error:', e);
            if (btn) { btn.disabled = false; btn.innerHTML = `<span>Error</span>`; }
        }
    };

    // Thêm Share Image button vào reading actions
    function addShareImageBtn() {
        if (document.getElementById('ux-share-img-btn')) return;
        const btnCopy = document.getElementById('btn-copy');
        if (!btnCopy || !btnCopy.parentElement) return;

        const shareBtn = document.createElement('button');
        shareBtn.id = 'ux-share-img-btn';
        shareBtn.onclick = shareAsImage;
        shareBtn.className = btnCopy.className; // copy styling
        shareBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span id="ux-share-img-text">${typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Lưu ảnh' : 'Save Image'}</span>
        `;
        btnCopy.parentElement.insertBefore(shareBtn, btnCopy.nextSibling);
    }

    // Observe khi reading-interpretation hiện
    const interpObserver = new MutationObserver(() => {
        const interp = document.getElementById('reading-interpretation');
        if (interp && !interp.classList.contains('hidden')) {
            setTimeout(addShareImageBtn, 200);
        }
    });
    function startInterpObserver() {
        const interp = document.getElementById('reading-interpretation');
        if (interp) interpObserver.observe(interp, { attributes: true, attributeFilter: ['class'] });
        else setTimeout(startInterpObserver, 400);
    }
    startInterpObserver();

    // =============================================
    // 7. JOURNAL — search + better empty state
    // =============================================
    const _origOpenJournal = window.openJournal;
    window.openJournal = function() {
        if (_origOpenJournal) _origOpenJournal();

        // Sau khi journal mở, inject search bar nếu chưa có
        setTimeout(() => {
            const journalView = document.getElementById('journal-view');
            if (!journalView || document.getElementById('ux-journal-search')) return;

            const headerEl = journalView.querySelector('.p-6.border-b');
            if (!headerEl) return;

            // Thêm search bar sau header
            const searchBar = document.createElement('div');
            searchBar.className = 'px-6 py-3 border-b border-white/5 bg-white/3';
            searchBar.innerHTML = `
                <div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:6px 12px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,0.6)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input id="ux-journal-search" type="text" placeholder="${typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Tìm trong journal...' : 'Search journal...'}"
                        style="background:none;border:none;outline:none;color:rgba(203,213,225,1);font-size:13px;width:100%;"
                        oninput="filterJournal(this.value)">
                </div>
            `;
            headerEl.insertAdjacentElement('afterend', searchBar);

            // Better empty state
            const list = document.getElementById('journal-list');
            if (list && list.children.length === 1 && list.querySelector('p')) {
                list.innerHTML = `
                    <div style="text-align:center;padding:40px 20px;color:rgba(100,116,139,1);">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(100,116,139,0.5)" stroke-width="1.5" style="margin:0 auto 16px;display:block;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        <p style="font-size:14px;font-weight:500;margin-bottom:8px;color:rgba(148,163,184,0.8);">${typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Chưa có reading nào' : 'No readings yet'}</p>
                        <p style="font-size:12px;">${typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Hoàn thành một trải bài và nhấn "Lưu" để bắt đầu journal của bạn.' : 'Complete a reading and tap "Save" to start your journal.'}</p>
                    </div>
                `;
            }
        }, 100);
    };

    window.filterJournal = function(query) {
        const data = JSON.parse(localStorage.getItem('mystic_journal') || '[]');
        const list = document.getElementById('journal-list');
        if (!list) return;

        const filtered = data.filter(entry =>
            !query || JSON.stringify(entry).toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
            list.innerHTML = `<p style="text-align:center;color:rgba(100,116,139,1);padding:20px;font-size:13px;">${typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Không tìm thấy kết quả' : 'No results found'}</p>`;
            return;
        }

        list.innerHTML = '';
        filtered.reverse().forEach(entry => {
            list.innerHTML += `<div class="p-4 border border-white/5 rounded-xl bg-white/5" style="cursor:pointer;" onclick="this.querySelector('.journal-full-text').classList.toggle('hidden')">
                <div style="display:flex;justify-content:space-between;font-size:10px;color:rgba(245,158,11,1);font-weight:700;margin-bottom:8px;">
                    <span>${entry.date}</span><span>${entry.cards ? entry.cards.length : '?'} cards</span>
                </div>
                <p style="color:rgba(203,213,225,1);font-size:13px;margin-bottom:4px;">${(entry.cards || []).join(', ')}</p>
                <p style="color:rgba(148,163,184,0.8);font-size:12px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${entry.synthesis || ''}</p>
            </div>`;
        });
    };

    // =============================================
    // 8. AI LOADING SHIMMER
    // =============================================
    const shimmerCSS = `
        @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        .ai-loading-shimmer {
            background: linear-gradient(90deg,
                rgba(245,158,11,0.05) 25%,
                rgba(245,158,11,0.15) 50%,
                rgba(245,158,11,0.05) 75%
            );
            background-size: 200% auto;
            animation: shimmer 1.5s linear infinite;
            border-radius: 6px;
            color: rgba(245,158,11,0.7) !important;
        }
    `;
    const shimmerStyle = document.createElement('style');
    shimmerStyle.textContent = shimmerCSS;
    document.head.appendChild(shimmerStyle);

    // Patch AI placeholder text để thêm shimmer
    const aiPlaceholderObserver = new MutationObserver((mutations) => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                // Tìm loading text trong AI panels
                node.querySelectorAll && node.querySelectorAll('p').forEach(p => {
                    const text = p.textContent || '';
                    if (text.includes('Đang phân tích') || text.includes('Analyzing') ||
                        text.includes('Generating') || text.includes('Đang tạo')) {
                        p.classList.add('ai-loading-shimmer');
                        p.style.padding = '8px 12px';
                        p.style.borderRadius = '8px';
                    }
                });
            });
        });
    });

    function startAIObserver() {
        const readingInterp = document.getElementById('reading-interpretation');
        if (readingInterp) {
            aiPlaceholderObserver.observe(readingInterp, { childList: true, subtree: true });
        } else {
            setTimeout(startAIObserver, 400);
        }
    }
    startAIObserver();

    // =============================================
    // 9. ONBOARDING TOOLTIP (lần đầu dùng)
    // =============================================
    function showOnboardingIfNeeded() {
        if (localStorage.getItem('ux_onboarded')) return;

        setTimeout(() => {
            const selView = document.getElementById('selection-view');
            if (!selView || selView.classList.contains('hidden')) return;

            const tooltip = document.createElement('div');
            tooltip.id = 'ux-onboarding';
            tooltip.style.cssText = `
                position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
                z-index: 200; max-width: 380px; width: calc(100% - 32px);
                background: rgba(15,23,42,0.97); border: 1px solid rgba(245,158,11,0.3);
                border-radius: 20px; padding: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.6);
                backdrop-filter: blur(16px);
            `;

            const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
            tooltip.innerHTML = `
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(245,158,11,1)" stroke-width="2" stroke-linecap="round"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
                        <span style="font-size:13px;font-weight:700;color:rgba(245,158,11,1);">${lang === 'vn' ? 'Chào mừng bạn!' : 'Welcome!'}</span>
                    </div>
                    <button onclick="document.getElementById('ux-onboarding').remove();localStorage.setItem('ux_onboarded','1');"
                        style="background:none;border:none;color:rgba(148,163,184,0.6);cursor:pointer;font-size:18px;line-height:1;padding:0;">×</button>
                </div>
                <div style="font-size:12px;color:rgba(148,163,184,1);line-height:1.7;margin-bottom:16px;">
                    ${lang === 'vn' ?
                        `<p style="margin-bottom:8px;">🔮 <strong style="color:rgba(203,213,225,1)">Tarot</strong> — 78 lá, khám phá chiều sâu tâm linh</p>
                         <p style="margin-bottom:8px;">🎴 <strong style="color:rgba(203,213,225,1)">Lenormand</strong> — 36 lá, dự báo thực tế và rõ ràng</p>
                         <p>✨ Chọn spread, lật bài và khám phá giải nghĩa chi tiết với AI</p>` :
                        `<p style="margin-bottom:8px;">🔮 <strong style="color:rgba(203,213,225,1)">Tarot</strong> — 78 cards, deep spiritual archetypes</p>
                         <p style="margin-bottom:8px;">🎴 <strong style="color:rgba(203,213,225,1)">Lenormand</strong> — 36 cards, practical day-to-day guidance</p>
                         <p>✨ Choose a spread, flip your cards and explore AI-powered insights</p>`
                    }
                </div>
                <button onclick="document.getElementById('ux-onboarding').remove();localStorage.setItem('ux_onboarded','1');"
                    style="width:100%;padding:10px;background:linear-gradient(135deg,rgba(180,120,10,1),rgba(245,158,11,1));border:none;border-radius:12px;color:white;font-weight:700;font-size:13px;cursor:pointer;transition:opacity 0.2s;"
                    onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                    ${lang === 'vn' ? 'Bắt đầu →' : "Let's Begin →"}
                </button>
            `;
            document.body.appendChild(tooltip);

            // Auto-dismiss sau 15s
            setTimeout(() => {
                const t = document.getElementById('ux-onboarding');
                if (t) { t.style.opacity = '0'; t.style.transition = 'opacity 0.5s'; setTimeout(() => t.remove(), 500); }
                localStorage.setItem('ux_onboarded', '1');
            }, 15000);
        }, 1200);
    }

    // =============================================
    // 10. GALLERY SEARCH (Manual Pick)
    // =============================================
    const _origOpenGallery = window.openGallery;
    window.openGallery = function() {
        if (_origOpenGallery) _origOpenGallery();

        setTimeout(() => {
            if (document.getElementById('ux-gallery-search')) return;
            const filterDiv = document.getElementById('tarot-filters');
            if (!filterDiv) return;

            const searchWrap = document.createElement('div');
            searchWrap.style.cssText = 'display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:8px 14px;margin-bottom:8px;';
            searchWrap.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,0.6)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input id="ux-gallery-search" type="text"
                    placeholder="${typeof currentLang !== 'undefined' && currentLang === 'vn' ? 'Tìm tên lá bài...' : 'Search cards...'}"
                    style="background:none;border:none;outline:none;color:rgba(203,213,225,1);font-size:13px;width:100%;"
                    oninput="filterGalleryCards(this.value)">
            `;
            filterDiv.parentElement.insertBefore(searchWrap, filterDiv);
        }, 100);
    };

    window.filterGalleryCards = function(query) {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;
        const cards = grid.querySelectorAll('[data-card-name]');
        if (cards.length === 0) {
            // fallback: filter all children
            grid.childNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                const name = (node.getAttribute('data-name') || node.textContent || '').toLowerCase();
                node.style.display = !query || name.includes(query.toLowerCase()) ? '' : 'none';
            });
            return;
        }
        cards.forEach(card => {
            const name = (card.getAttribute('data-card-name') || '').toLowerCase();
            card.style.display = !query || name.includes(query.toLowerCase()) ? '' : 'none';
        });
    };

    // Init
    patchFloatingSaveBtn();
    showOnboardingIfNeeded();

    // =============================================
    // 11. PLANETARY BAR TOGGLE (mobile)
    // =============================================
    window.togglePlanetaryBar = function() {
        const bar = document.getElementById('planetary-summary');
        if (!bar) return;
        const isHidden = bar.classList.contains('hidden');
        if (isHidden) {
            bar.classList.remove('hidden');
            bar.classList.add('flex');
            bar.style.cssText = 'position:fixed;top:68px;right:8px;z-index:100;background:rgba(15,23,42,0.97);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:12px;flex-direction:column;gap:8px;backdrop-filter:blur(16px);min-width:160px;box-shadow:0 10px 40px rgba(0,0,0,0.5);';
            setTimeout(() => {
                document.addEventListener('click', function closePlanetary(e) {
                    if (!bar.contains(e.target) && e.target.id !== 'planetary-toggle-btn') {
                        bar.classList.add('hidden');
                        bar.classList.remove('flex');
                        bar.style.cssText = '';
                        document.removeEventListener('click', closePlanetary);
                    }
                });
            }, 100);
        } else {
            bar.classList.add('hidden');
            bar.classList.remove('flex');
            bar.style.cssText = '';
        }
    };

        console.log('[UX Patches] ✅ All 10 UX improvements loaded');
})();
-e 


// ==========================================
// REVERSED DISPLAY PATCH
// ==========================================
// Patch hàm showCardInterpretation trong app.js để hiển thị
// text reversed riêng (deep_r, love_r, career_r, spiritual_r)
// khi isReversed === true và data reversed tồn tại.
//
// Load sau: app.js, reversed_major_patch.js (và các batch sau)

(function patchReversedDisplay() {
    // Wait for app functions to be ready
    if (typeof generateDetailedMeaning === 'undefined') {
        setTimeout(patchReversedDisplay, 400);
        return;
    }

    // --- Patch 1: generateDetailedMeaning ---
    // Override để dùng deep_r khi reversed và có data
    const _origGenDetail = generateDetailedMeaning;
    window.generateDetailedMeaning = function(card, reversed, lang) {
        const cardName = card.en.name;
        const deepData = (typeof tarotDeepInterpretations !== 'undefined')
            ? tarotDeepInterpretations[cardName] : null;

        // If reversed AND we have reversed-specific deep text — use it
        if (reversed && deepData && deepData[lang] && deepData[lang].deep_r) {
            const data = deepData[lang];
            let detailed = data.deep_r;
            // Add reversed badge context
            if (lang === 'en') {
                detailed = `<span class="text-indigo-300 font-bold text-xs uppercase tracking-wider block mb-2">↓ Reversed Energy</span>` + detailed;
            } else {
                detailed = `<span class="text-indigo-300 font-bold text-xs uppercase tracking-wider block mb-2">↓ Năng Lượng Ngược</span>` + detailed;
            }
            return detailed;
        }

        // Otherwise fall back to original
        return _origGenDetail(card, reversed, lang);
    };

    // --- Patch 2: showCardInterpretation sections ---
    // The sections panel (love/career/spiritual) also needs to read _r keys
    // We patch by observing when interpretation sections are built
    // Hook into the data access point

    // Override the section rendering by wrapping the deepData access
    // The safest approach: patch the getCardSectionData helper used internally
    // Since app.js reads deepData[currentLang].love directly, we intercept at data level

    const _origGetInterpData = function(cardName, lang) {
        const base = (typeof tarotDeepInterpretations !== 'undefined')
            ? tarotDeepInterpretations[cardName] : null;
        return base ? base[lang] : null;
    };

    // Create a proxy-aware getter
    window.getCardInterpData = function(cardName, lang, isReversed) {
        const base = (typeof tarotDeepInterpretations !== 'undefined')
            ? tarotDeepInterpretations[cardName] : null;
        if (!base || !base[lang]) return null;

        const data = base[lang];

        if (isReversed) {
            // Return merged object: reversed keys take priority where available
            return {
                deep:     data.deep_r     || data.deep,
                love:     data.love_r     || data.love,
                career:   data.career_r   || data.career,
                spiritual:data.spiritual_r|| data.spiritual,
                timing:   data.timing,   // no reversed variant for timing
                events:   data.events,   // no reversed variant for events
                warnings: data.warnings,
                _isReversed: true
            };
        }
        return data;
    };

    // --- Patch 3: Intercept section HTML building ---
    // Find and patch the function that builds the love/career/spiritual panels
    // In app.js this happens inside showCardInterpretation at line ~1571
    // We use MutationObserver to post-process the rendered panels

    const _sectionObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType !== 1) return;

                // Look for card detail items with reversed state
                const cardItems = node.querySelectorAll
                    ? node.querySelectorAll('[data-card-index]')
                    : [];

                cardItems.forEach(function(item) {
                    const idx = parseInt(item.getAttribute('data-card-index'));
                    if (isNaN(idx)) return;

                    const isRev = (typeof reversedList !== 'undefined') && reversedList[idx];
                    if (!isRev) return;

                    const card = (typeof drawnCards !== 'undefined') && drawnCards[idx];
                    if (!card) return;

                    const cardName = card.en.name;
                    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
                    const deepData = (typeof tarotDeepInterpretations !== 'undefined')
                        ? tarotDeepInterpretations[cardName] : null;
                    if (!deepData || !deepData[lang]) return;

                    const d = deepData[lang];

                    // Replace section texts where reversed variants exist
                    const sectionMap = {
                        'love_r':     '[data-section="love"] p',
                        'career_r':   '[data-section="career"] p',
                        'spiritual_r':'[data-section="spiritual"] p'
                    };

                    Object.entries(sectionMap).forEach(([key, selector]) => {
                        if (!d[key]) return;
                        const el = item.querySelector(selector);
                        if (el) {
                            el.textContent = d[key];
                            // Add subtle reversed indicator
                            const parent = el.closest('[data-section]');
                            if (parent && !parent.querySelector('.rev-badge')) {
                                const badge = document.createElement('span');
                                badge.className = 'rev-badge text-indigo-400 text-[9px] font-bold uppercase tracking-wider block mb-1 opacity-70';
                                badge.textContent = lang === 'en' ? '↓ Reversed' : '↓ Ngược';
                                parent.insertBefore(badge, parent.firstChild);
                            }
                        }
                    });
                });
            });
        });
    });

    // Observe the card details list
    function startObserver() {
        const list = document.getElementById('card-details-list');
        if (list) {
            _sectionObserver.observe(list, { childList: true, subtree: true });
            console.log('[Reversed Display] ✅ Observer active on card-details-list');
        } else {
            setTimeout(startObserver, 500);
        }
    }
    startObserver();

    console.log('[Reversed Display] ✅ generateDetailedMeaning patched');
    console.log('[Reversed Display] ✅ getCardInterpData helper available');
})();
