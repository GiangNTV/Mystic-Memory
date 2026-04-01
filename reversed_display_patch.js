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
