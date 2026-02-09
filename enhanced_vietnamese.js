// ==========================================
// ENHANCED VIETNAMESE TRANSLATIONS
// ==========================================
// File này cải thiện ngôn ngữ tiếng Việt cho tự nhiên, dễ hiểu và thú vị hơn
// Load sau app.js để override các translations

// Enhanced Tarot card meanings in Vietnamese - Tự nhiên, có câu chuyện, dễ hiểu
const enhancedTarotVN = {
    "The Fool": {
        name: "The Fool",
        meaning: "Bạn đang ở ngưỡng cửa của một khởi đầu hoàn toàn mới! Giống như một đứa trẻ bước ra khám phá thế giới, bạn đầy nhiệt huyết nhưng chưa biết điều gì chờ đợi phía trước. Đây là lúc để tin tưởng vào hành trình, dù bạn chưa có bản đồ.",
        keywords: ["Khởi đầu mới mẻ", "Tin tưởng vào vũ trụ", "Phiêu lưu"],
        practical: "Đừng sợ nhảy vào điều mới, nhưng hãy để mắt mở để không ngã! Đôi khi bạn cần một chút 'ngây thơ đẹp đẽ' để dám làm những điều người khác cho là điên rồ."
    },
    "The Magician": {
        name: "The Magician",
        meaning: "Tất cả công cụ bạn cần đã có sẵn trong tay rồi! Như một nhà ảo thuật đứng trước bàn làm việc đầy dụng cụ, bạn có đủ kỹ năng, nguồn lực và quyền năng để biến ý tưởng thành hiện thực. Chỉ cần tập trung và hành động.",
        keywords: ["Sức mạnh sáng tạo", "Biến ý tưởng thành hiện thực", "Tài năng thiên phú"],
        practical: "Ngừng nói 'tôi không có...' - bạn CÓ đấy! Hãy sử dụng tất cả những gì đang có (kỹ năng, mối quan hệ, kinh nghiệm) để tạo ra điều bạn muốn. Đây là lúc 'làm phép màu'!"
    },
    "The High Priestess": {
        name: "The High Priestess",
        meaning: "Hãy lắng nghe giọng nói nhỏ bên trong bạn - trực giác của bạn đang thì thầm những điều quan trọng. Không phải mọi thứ đều cần lý giải bằng logic. Có những bí mật đang chờ được khám phá, nhưng chỉ khi bạn dừng lại và lắng nghe.",
        keywords: ["Trực giác mạnh mẽ", "Bí mật sắp lộ diện", "Khả năng tâm linh"],
        practical: "Đừng bị cuốn vào ồn ào bên ngoài. Tìm không gian yên tĩnh, thiền, viết nhật ký - những điều bạn cần biết sẽ tự đến. Tin vào 'linh tính' của mình!"
    },
    "The Empress": {
        name: "The Empress",
        meaning: "Giai đoạn phong phú và nuôi dưỡng! Như Mẹ Thiên Nhiên, bạn đang ở trạng thái sáng tạo và sinh sôi - có thể là một dự án, mối quan hệ, hoặc thậm chí một em bé thật sự. Mọi thứ xung quanh bạn đang nở rộ.",
        keywords: ["Sự dồi dào", "Tình yêu thương và chăm sóc", "Sáng tạo nghệ thuật"],
        practical: "Chăm sóc bản thân và những gì bạn yêu thương. Đây không phải lúc để chạy đua kiệt sức - hãy nghỉ ngơi, ăn uống ngon, tận hưởng vẻ đẹp. Kết nối với thiên nhiên sẽ giúp bạn rất nhiều!"
    },
    "The Emperor": {
        name: "The Emperor",
        meaning: "Đã đến lúc thiết lập trật tự và cầm quyền! Như một vị vua ngồi trên ngai, bạn cần cấu trúc, kỷ luật và ranh giới rõ ràng. Đừng sợ đưa ra quyết định cứng rắn và nói 'không' khi cần.",
        keywords: ["Lãnh đạo quyết đoán", "Xây dựng nền móng vững", "Kỷ luật bản thân"],
        practical: "Lập kế hoạch cụ thể, tạo thói quen tốt, đặt ra luật lệ cho riêng mình. Đây là lúc để 'cứng' lên một chút - đừng để ai lợi dụng lòng tốt của bạn. Hãy là 'ông chủ' của cuộc đời mình!"
    },
    "The Lovers": {
        name: "The Lovers",
        meaning: "Một quyết định quan trọng về mặt cảm xúc hoặc một mối quan hệ sâu sắc đang diễn ra. Không nhất thiết là tình yêu lãng mạn - có thể là sự lựa chọn giữa con tim và lý trí, hoặc giữa hai con đường khác nhau.",
        keywords: ["Tình yêu chân thật", "Quyết định từ trái tim", "Sự hài hòa trong quan hệ"],
        practical: "Đừng vội vàng! Hãy cân nhắc cả cảm xúc LẪN lý trí. Nếu đang trong mối quan hệ - hãy giao tiếp thật lòng. Nếu đang quyết định - chọn điều khiến bạn cảm thấy trọn vẹn nhất."
    },
    "The Tower": {
        name: "The Tower",
        meaning: "Ối! Một cú sốc hoặc thay đổi đột ngột đang đến (hoặc đã đến rồi). Giống như tòa tháp bị sét đánh, những gì bạn nghĩ là vững chắc có thể sụp đổ. NHƯNG... đây là cần thiết để xây lại trên nền móng đúng đắn hơn!",
        keywords: ["Thay đổi đột ngột", "Phá vỡ cũ để xây mới", "Sự thật được lộ diện"],
        practical: "Đừng chống lại sự thay đổi - hãy để nó xảy ra. Những gì thực sự quan trọng sẽ sống sót. Có thể đau nhưng sau cơn mưa trời lại sáng! Hãy tin rằng vũ trụ đang 'dọn dẹp' để nhường chỗ cho điều tốt hơn."
    },
    "The Star": {
        name: "The Star",
        meaning: "Sau bão tố là bình yên! Hy vọng đang tỏa sáng như ngôi sao dẫn đường. Bạn đang trong giai đoạn hồi phục, chữa lành và tìm lại niềm tin. Tương lai trông sáng sủa hơn nhiều rồi đấy!",
        keywords: ["Hy vọng tươi sáng", "Chữa lành vết thương", "Phước lành từ trời"],
        practical: "Hãy tin tưởng vào tương lai! Đặt ra mục tiêu lớn lao, mơ ước thật xa. Chăm sóc sức khỏe tinh thần - thiền, yoga, spa, làm bất cứ gì khiến bạn thư giãn. Vũ trụ đang mỉm cười với bạn!"
    },
    "Death": {
        name: "Death",
        meaning: "ĐỪNG SỢ! Đây không phải cái chết thật sự mà là sự KẾT THÚC của một giai đoạn để BẮT ĐẦU giai đoạn mới. Như con bướm thoát khỏi kén, bạn cần 'chết đi' ở cách cũ để 'sống lại' ở cách mới.",
        keywords: ["Kết thúc để bắt đầu", "Chuyển hóa lớn", "Buông bỏ quá khứ"],
        practical: "Đã đến lúc nói tạm biệt - với công việc cũ, mối quan hệ không còn phù hợp, hoặc phiên bản cũ của chính mình. Đừng bám víu! Cái gì đến sẽ đến, cái gì đi sẽ đi. Trust the process!"
    },
    "The Sun": {
        name: "The Sun",
        meaning: "JACKPOT! Đây là lá bài tích cực nhất trong bộ Tarot. Như mặt trời chiếu sáng, mọi thứ đang tươi đẹp, rõ ràng và thành công. Niềm vui, thành tựu, và sự công nhận đang chờ đợi bạn!",
        keywords: ["Thành công rực rỡ", "Niềm vui tràn đầy", "Mọi thứ suôn sẻ"],
        practical: "Hãy tự tin tỏa sáng! Đây là lúc để ăn mừng, chia sẻ thành công với mọi người, và tận hưởng trọn vẹn. Đừng khiêm tốn quá - bạn xứng đáng với điều này! Selfie thôi!"
    }
    // Thêm các lá khác tương tự...
};

// Enhanced Lenormand meanings - Thực tế, cụ thể, có ví dụ
const enhancedLenormandVN = {
    "Rider": {
        name: "Rider",
        meaning: "Tin tức đang trên đường đến! Có thể là email quan trọng, cuộc gọi, tin nhắn, hoặc thậm chí người đưa hàng gõ cửa. Thường là TIN TỐT và đến RẤT NHANH (vài giờ đến vài ngày).",
        keywords: ["Tin tức nhanh chóng", "Khách đến thăm", "Giao thông di chuyển"],
        practical: "Check điện thoại/email thường xuyên! Nếu đang chờ tin gì - sắp có rồi đấy. Hoặc chuẩn bị đón khách. Có thể liên quan đến việc đi lại, giao hàng, hoặc thể thao."
    },
    "Clover": {
        name: "Clover",
        meaning: "May mắn nhỏ xinh! Như tìm được tờ 20k trong túi quần cũ. Không phải trúng số độc đắc nhưng là những điều vui bất ngờ, nhẹ nhàng và dễ chịu. Nhưng đừng mong nó kéo dài lâu nhé!",
        keywords: ["Vận may ngắn hạn", "Điều bất ngờ dễ chịu", "Cơ hội thoáng qua"],
        practical: "Tận dụng cơ hội ngay khi nó đến - đừng nghĩ quá nhiều! Đi mua vé số, thử vận may xem sao. Hoặc chỉ đơn giản là tận hưởng khoảnh khắc may mắn này. Nó chỉ tồn tại vài ngày đến 1-2 tuần thôi!"
    },
    "Ship": {
        name: "Ship",
        meaning: "Liên quan đến DU LỊCH, khoảng cách xa, hoặc thương mại/kinh doanh. Có thể là chuyến đi thực sự, hoặc cảm giác 'khao khát nơi xa' - muốn thay đổi môi trường. Cũng có thể là giao dịch quốc tế, hàng nhập khẩu.",
        keywords: ["Chuyến đi xa", "Kinh doanh/xuất nhập khẩu", "Khám phá mới"],
        practical: "Nếu đang lên kế hoạch du lịch - GO FOR IT! Hoặc cân nhắc việc làm ăn với nước ngoài, mua hàng online từ bên kia địa cầu. Thời gian: vài tuần đến vài tháng (ship mà, lâu chứ!)"
    },
    "House": {
        name: "House",
        meaning: "Mọi thứ về NHÀ và GIA ĐÌNH. Nơi ở, bất động sản, người thân, sự ổn định. Cảm giác an toàn, quen thuộc. Có thể liên quan đến sửa nhà, mua nhà, hoặc đơn giản là cuộc sống gia đình.",
        keywords: ["Nhà cửa", "Gia đình", "Sự ổn định lâu dài"],
        practical: "Tập trung vào gia đình và tổ ấm. Có thể là lúc để về nhà thăm bố mẹ, sửa sang nhà cửa, hoặc bàn chuyện mua bán bất động sản. Đây là năng lượng RẤT ổn định và lâu dài (tháng-năm)."
    },
    "Heart": {
        name: "Heart",
        meaning: "TÌNH YÊU! Không giải thích nhiều - chỉ cần biết đây là lá bài về cảm xúc sâu đậm, tình yêu, đam mê. Có thể là tình yêu lãng mạn, yêu gia đình, yêu công việc - bất cứ gì khiến trái tim bạn rung động.",
        keywords: ["Tình yêu chân thành", "Cảm xúc mãnh liệt", "Lòng trắc ẩn"],
        practical: "Hãy theo trái tim! Nếu trong mối quan hệ - đây là dấu hiệu tốt. Nếu độc thân - tình yêu có thể đang đến. Hoặc đơn giản là làm những gì bạn YÊU. Thời gian: phụ thuộc cảm xúc bạn sẵn sàng mở lòng."
    }
    // Thêm 31 lá còn lại...
};

// Enhanced i18n - Ngôn ngữ tự nhiên hơn
const enhancedI18nVN = {
    "hero-title": "Bắt Đầu Hành Trình Khám Phá",
    "hero-subtitle": "Chọn bộ bài bạn muốn và để vũ trụ trả lời câu hỏi của bạn",
    
    "tarot-desc": "Khám phá ý nghĩa sâu xa về tâm linh, sự phát triển cá nhân, và những câu hỏi lớn trong cuộc đời",
    "len-desc": "Câu trả lời thẳng thắn, thực tế cho các tình huống cụ thể - công việc, tình cảm, tiền bạc",
    
    "spread-3-desc": "Nhanh gọn, đơn giản",
    "spread-5-desc": "Chi tiết hơn, toàn diện",
    "spread-14-desc": "Xem cả năm luôn!",
    "spread-yesno-desc": "Có hay Không thôi",
    "spread-daily-desc": "Xem ngày hôm nay thế nào",
    
    "mode-random": "Để Vũ Trụ Quyết Định",
    "mode-manual": "Tôi Tự Chọn",
    
    "shuffle-deal": "Xáo Bài & Bắt Đầu",
    "confirm-selection": "OK, Chọn Những Lá Này!",
    
    "reading-title": "Lời Nhắn Từ Vũ Trụ",
    "reading-subtitle": "Đây là những gì các lá bài muốn nói với bạn",
    
    "synthesis-title": "Câu Chuyện Tổng Thể",
    
    "yesno-yes": [
        "VÂNGGggg! Vũ trụ đang gật đầu lia lịa đây. Năng lượng đang rất thuận lợi cho bạn đấy!",
        "Các vì sao đều đồng ý - đây là một cái GẬT ĐẦU rõ ràng. Cứ tiến lên không ngại!",
        "Thấy không? Vũ trụ đang nháy mắt với bạn - 'CÓ nha bạn ơi!' Cơ hội đã chín muồi rồi!",
        "100% là CÓ đấy! Các lá bài đều hợp ca bài 'Yes yes yes'. Đừng nghi ngờ nữa!",
        "Định mệnh đang mỉm cười - câu trả lời là CÓ rõ ràng. Chúc mừng bạn nhé!",
        "Tín hiệu xanh từ vũ trụ! Các năng lượng đang liên kết để nói với bạn: 'GO GO GO!'"
    ],
    
    "yesno-no": [
        "Ừmm... Không phải bây giờ đâu bạn ơi. Hãy đợi thêm một chút hoặc suy nghĩ lại nhé!",
        "Vũ trụ đang nói: 'Từ từ đã, CHƯA phải lúc!' Kiên nhẫn lên, thời điểm chưa đúng.",
        "À thì ra... là KHÔNG rồi. Hoặc ít nhất là 'Chưa phải lúc'. Đừng vội, chờ timing đúng hơn.",
        "Các lá bài đang khuyên bạn DỪNG lại. Có vẻ có vài trở ngại cần giải quyết trước đã.",
        "Không phải ý hay lắm đâu bạn ơi! Vũ trụ đang gợi ý bạn nên suy nghĩ lại hoặc thử cách khác.",
        "Đèn đỏ từ các vì sao! Lúc này tốt nhất là CHƯA NÊN làm. Hãy quan sát thêm."
    ],
    
    "reversed": "Ngược",
    "upright": "Xuôi",
    "reverse-btn": "Lật Ngược",
    
    "harmony-fire": "Wow! Năng lượng Hỏa đang bùng cháy - đầy hành động, quyết đoán, và nhiệt huyết!",
    "harmony-water": "Cảm xúc đang chảy như nước - hãy lắng nghe trái tim và trực giác của bạn.",
    "harmony-air": "Đầu óc đang hoạt động tích cực! Giao tiếp, suy nghĩ logic là chìa khóa lúc này.",
    "harmony-earth": "Thực tế và vững chắc - tập trung vào những gì hữu hình, cụ thể được.",
    "harmony-mixed": "Nhiều năng lượng pha trộn - cần cân bằng giữa cảm xúc, lý trí và hành động.",
    
    "btn-save": "Lưu Lại",
    "btn-journal": "Xem Nhật Ký",
    "btn-copy": "Copy",
    "copy-success": "Đã copy xong!",
    "copy-error": "Ối, copy không được!",
    
    "journal-title": "Nhật Ký Trải Bài Của Bạn",
    "journal-empty": "Chưa có gì cả. Hãy bắt đầu trải bài đi!",
    "save-success": "Đã lưu vào nhật ký rồi nhé!",
    
    "rev-note": "Có gì đó đang bị kẹt hoặc cần nhìn vào bên trong. ",
    
    "elem-fire": "🔥 Hỏa",
    "elem-water": "💧 Thủy", 
    "elem-air": "💨 Khí",
    "elem-earth": "🌍 Thổ",
    
    "spread-past": "Quá Khứ - Điều Đã Qua",
    "spread-present": "Hiện Tại - Bây Giờ Đang Thế Nào",
    "spread-future": "Tương Lai - Sắp Đến",
    "spread-advice": "Lời Khuyên Cho Bạn",
    "spread-outcome": "Kết Quả Có Thể",
    
    "aspect-love": "💕 Chuyện Tình Cảm",
    "aspect-career": "💼 Chuyện Sự Nghiệp",
    "aspect-timing": "⏰ Khi Nào Thì Ra Sao",
    "aspect-spiritual": "✨ Thông Điệp Tâm Linh",
    "aspect-action": "👉 Bạn Nên Làm Gì",
    "aspect-avoid": "🚫 Tránh Những Gì",
    
    "daily-morning": "🌅 Buổi Sáng",
    "daily-afternoon": "☀️ Buổi Chiều",
    "daily-evening": "🌙 Buổi Tối",
    "daily-challenge": "💪 Thử Thách Hôm Nay",
    "daily-opportunity": "🎁 Cơ Hội Hôm Nay",
    "daily-advice": "💭 Lời Khuyên Vũ Trụ",
    "daily-overall": "🌟 Tổng Quan Cả Ngày"
};

// Override existing data after app.js loads
document.addEventListener('DOMContentLoaded', function() {
    // Override Tarot data
    if (typeof tarotData !== 'undefined') {
        Object.keys(enhancedTarotVN).forEach(cardName => {
            const cardIndex = tarotData.findIndex(c => c.en.name === cardName);
            if (cardIndex !== -1 && tarotData[cardIndex].vn) {
                tarotData[cardIndex].vn.meaning = enhancedTarotVN[cardName].meaning;
                tarotData[cardIndex].vn.keywords = enhancedTarotVN[cardName].keywords;
                if (enhancedTarotVN[cardName].practical) {
                    tarotData[cardIndex].vn.practical = enhancedTarotVN[cardName].practical;
                }
            }
        });
    }
    
    // Override Lenormand data
    if (typeof lenormandData !== 'undefined') {
        Object.keys(enhancedLenormandVN).forEach(cardName => {
            const cardIndex = lenormandData.findIndex(c => c.en.name === cardName);
            if (cardIndex !== -1 && lenormandData[cardIndex].vn) {
                lenormandData[cardIndex].vn.meaning = enhancedLenormandVN[cardName].meaning;
                lenormandData[cardIndex].vn.keywords = enhancedLenormandVN[cardName].keywords;
                if (enhancedLenormandVN[cardName].practical) {
                    lenormandData[cardIndex].vn.practical = enhancedLenormandVN[cardName].practical;
                }
            }
        });
    }
    
    // Override i18n
    if (typeof i18n !== 'undefined' && i18n.vn) {
        Object.keys(enhancedI18nVN).forEach(key => {
            i18n.vn[key] = enhancedI18nVN[key];
        });
    }
    
    console.log('✨ Enhanced Vietnamese translations loaded!');
    console.log('🇻🇳 Ngôn ngữ tiếng Việt đã được cải thiện - tự nhiên và thú vị hơn!');
});
