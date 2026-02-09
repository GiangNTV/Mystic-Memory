// ==========================================
// LENORMAND INTEGRATION PATCH (FIXED VERSION)
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
