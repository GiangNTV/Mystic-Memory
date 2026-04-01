/**
 * TAROT CARD COMBINATIONS SYSTEM
 * This database provides specialized interpretations for pairs of Tarot cards.
 */

const tarotCombinations = {
    // MAJOR ARCANA KEY COMBINATIONS
    "The Fool-The Magician": {
        en: { meaning: "A powerful new beginning where potential meets action. You have the tools to manifest your spontaneous ideas.", advice: "Don't just leap; use your skills to guide the fall." },
        vn: { meaning: "Một khởi đầu mới đầy quyền năng nơi tiềm năng gặp gỡ hành động. Bạn có đủ công cụ để hiện thực hóa những ý tưởng ngẫu hứng của mình.", advice: "Đừng chỉ nhảy đại; hãy dùng kỹ năng của bạn để dẫn dắt cú rơi." }
    },
    "The Fool-The High Priestess": {
        en: { meaning: "Spiritual journey into the unknown. Trusting intuition during a phase of transition.", advice: "Listen to the silence before you take the next step." },
        vn: { meaning: "Hành trình tâm linh vào cõi vô định. Tin tưởng vào trực giác trong giai đoạn chuyển giao.", advice: "Hãy lắng nghe sự tĩnh lặng trước khi bạn bước tiếp bước tiếp theo." }
    },
    "The Magician-The High Priestess": {
        en: { meaning: "Perfect balance of action and intuition. Conscious and subconscious working in harmony.", advice: "Combine your outer work with inner reflection." },
        vn: { meaning: "Sự cân bằng hoàn hảo giữa hành động và trực giác. Ý thức và tiềm thức đang làm việc hài hòa.", advice: "Hãy kết hợp công việc bên ngoài với sự soi chiếu bên trong." }
    },
    "The Lovers-The Devil": {
        en: { meaning: "A choice between healthy connection and toxic attachment. Temptation in relationships.", advice: "Distinguish between true love and obsession." },
        vn: { meaning: "Sự lựa chọn giữa kết nối lành mạnh và sự gắn bó độc hại. Sự cám dỗ trong các mối quan hệ.", advice: "Hãy phân biệt giữa tình yêu đích thực và sự ám ảnh." }
    },
    "The Tower-Death": {
        en: { meaning: "Sudden, radical transformation. The old structure collapses to make way for a complete rebirth.", advice: "Let go of the wreckage; the ground is now clear for something entirely new." },
        vn: { meaning: "Sự chuyển hóa đột ngột và triệt để. Cấu trúc cũ sụp đổ để nhường chỗ cho một sự tái sinh hoàn toàn.", advice: "Hãy buông bỏ những mảnh vụn; mặt đất giờ đã sạch sẽ cho một điều gì đó hoàn toàn mới." }
    },
    "The Sun-The Moon": {
        en: { meaning: "Integration of light and shadow. Hidden truths coming to light, providing clarity after confusion.", advice: "Appreciate the full cycle of your experience." },
        vn: { meaning: "Sự tích hợp giữa ánh sáng và bóng tối. Những sự thật ẩn giấu đang lộ diện, mang lại sự rõ ràng sau những bối rối.", advice: "Hãy trân trọng trọn vẹn chu kỳ trải nghiệm của bạn." }
    },
    "Justice-The Wheel of Fortune": {
        en: { meaning: "Karmic justice. What goes around comes around. A fair outcome after a period of instability.", advice: "Trust that the scales are balancing themselves through destiny." },
        vn: { meaning: "Công lý nghiệp quả. Gieo nhân nào gặt quả nấy. Một kết quả công bằng sau một thời gian bất ổn.", advice: "Hãy tin rằng cán cân đang tự cân bằng thông qua định mệnh." }
    },

    // SUIT COMBINATIONS (General Logic)
    "Wands-Wands": {
        en: { meaning: "High energy, ambition, and intense action. Possible competition or rapid progress.", advice: "Focus your fire to avoid burnout." },
        vn: { meaning: "Năng lượng cao, tham vọng và hành động mãnh liệt. Có thể có sự cạnh tranh hoặc tiến triển thần tốc.", advice: "Hãy tập trung ngọn lửa của bạn để tránh kiệt sức." }
    },
    "Cups-Cups": {
        en: { meaning: "Deep emotional resonance, love, and community. Focus on feelings and relationships.", advice: "Celebrate your connections but stay grounded." },
        vn: { meaning: "Cộng hưởng cảm xúc sâu sắc, tình yêu và cộng đồng. Tập trung vào cảm xúc và các mối quan hệ.", advice: "Hãy ăn mừng các kết nối của bạn nhưng hãy giữ vững đôi chân trên mặt đất." }
    },
    "Swords-Swords": {
        en: { meaning: "Mental conflict, heavy thinking, or strategic planning. Communication is sharp and direct.", advice: "Don't let your thoughts become a prison." },
        vn: { meaning: "Xung đột tinh thần, tư duy nặng nề hoặc lập kế hoạch chiến lược. Giao tiếp sắc bén và trực tiếp.", advice: "Đừng để suy nghĩ của bạn trở thành một nhà tù." }
    },
    "Pentacles-Pentacles": {
        en: { meaning: "Focus on material growth, financial stability, and long-term results. Practical matters rule.", advice: "Keep building steadily; patience is your greatest asset." },
        vn: { meaning: "Tập trung vào tăng trưởng vật chất, ổn định tài chính và kết quả dài hạn. Các vấn đề thực tế chiếm ưu thế.", advice: "Hãy tiếp tục xây dựng ổn định; kiên nhẫn là tài sản lớn nhất của bạn." }
    },
    "Wands-Pentacles": {
        en: { meaning: "Turning creative ideas into financial reality. Hard work paying off materially.", advice: "Your passion needs a solid plan to succeed." },
        vn: { meaning: "Biến các ý tưởng sáng tạo thành hiện thực tài chính. Làm việc chăm chỉ mang lại thành quả vật chất.", advice: "Đam mê của bạn cần một kế hoạch vững chắc để thành công." }
    },
    "Swords-Cups": {
        en: { meaning: "Conflict between head and heart. Trying to rationalize emotions or feeling overwhelmed by logic.", advice: "Seek a compromise between what you think and what you feel." },
        vn: { meaning: "Xung đột giữa lý trí và con tim. Cố gắng hợp lý hóa cảm xúc hoặc cảm thấy bị áp đảo bởi logic.", advice: "Hãy tìm một sự thỏa hiệp giữa điều bạn nghĩ và điều bạn cảm thấy." }
    }
};

/**
 * Helper to get interpretation for any two tarot cards
 */
function getTarotCombination(card1, card2, lang = 'en') {
    const name1 = card1.en.name;
    const name2 = card2.en.name;

    // Check for specific Major combination
    const specificKey = `${name1}-${name2}`;
    const specificKeyRev = `${name2}-${name1}`;

    if (tarotCombinations[specificKey]) return tarotCombinations[specificKey][lang];
    if (tarotCombinations[specificKeyRev]) return tarotCombinations[specificKeyRev][lang];

    // Check for Suit combination
    const getSuit = (name) => {
        if (name.includes('Wands')) return 'Wands';
        if (name.includes('Cups')) return 'Cups';
        if (name.includes('Swords')) return 'Swords';
        if (name.includes('Pentacles')) return 'Pentacles';
        return 'Major';
    };

    const suit1 = getSuit(name1);
    const suit2 = getSuit(name2);

    const suitKey = `${suit1}-${suit2}`;
    const suitKeyRev = `${suit2}-${suit1}`;

    if (tarotCombinations[suitKey]) return tarotCombinations[suitKey][lang];
    if (tarotCombinations[suitKeyRev]) return tarotCombinations[suitKeyRev][lang];

    // Fallback
    return lang === 'en'
        ? { meaning: `The interaction between ${name1} and ${name2} creates a complex energetic dynamic.`, advice: "Observe how these two archetypes manifest in your current situation." }
        : { meaning: `Sự tương tác giữa ${name1} và ${name2} tạo ra một động lực năng lượng phức tạp.`, advice: "Hãy quan sát cách hai nguyên mẫu này hiện diện trong tình huống hiện tại của bạn." };
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tarotCombinations, getTarotCombination };
}
