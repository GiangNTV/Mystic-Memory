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
