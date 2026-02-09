// ==========================================
// UI HELPER FUNCTIONS (FIXED VERSION)
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
