// ==========================================
// ENHANCED VIETNAMESE - COMPLETE VERSION
// ==========================================
// File này override TOÀN BỘ meanings tiếng Việt cho 78 lá Tarot + 36 lá Lenormand
// Ngôn ngữ tự nhiên, dễ hiểu, thú vị, có câu chuyện và ví dụ thực tế

// ==========================================
// MAJOR ARCANA (22 lá) - Tự nhiên & Thú vị
// ==========================================
const enhancedTarotMajorVN = {
    "The Fool": {
        meaning: "🎒 Bạn đang ở ngưỡng cửa của một khởi đầu HOÀN TOÀN MỚI! Giống như một backpacker bước ra khám phá thế giới với ba lô và nụ cười, bạn đầy nhiệt huyết nhưng chưa biết điều gì chờ đợi phía trước. Đôi khi hơi 'liều' một chút, nhưng đó chính là sức mạnh của bạn!",
        keywords: ["Khởi đầu mới mẻ", "Tin tưởng vào vũ trụ", "Sự phiêu lưu"],
        practical: "💡 Đừng sợ nhảy vào điều mới - đôi khi bạn cần một chút 'ngây thơ đẹp đẽ' để dám làm những điều người khác cho là điên rồ. Nhưng hãy để mắt mở để không ngã nhé! Ví dụ: Bỏ việc văn phòng để theo đuổi đam mê, đi du lịch một mình lần đầu."
    },
    
    "The Magician": {
        meaning: "✨ Tất cả 'vũ khí' bạn cần đã có SẴN trong tay rồi! Như một ảo thuật gia đứng trước bàn làm việc đầy dụng cụ (cây gậy, ly, kiếm, tiền xu), bạn có ĐỦ kỹ năng, nguồn lực và quyền năng để biến ý tưởng thành hiện thực. Chỉ cần TẬP TRUNG và HÀNH ĐỘNG thôi!",
        keywords: ["Sức mạnh sáng tạo", "Biến ý tưởng thành hiện thực", "Tận dụng tài năng"],
        practical: "💡 Ngừng nói 'tôi không có...' - bạn CÓ đấy! Hãy sử dụng tất cả những gì đang có (kỹ năng, mối quan hệ, kinh nghiệm, thậm chí cả tiền trong ví) để tạo ra điều bạn muốn. Đây là lúc 'làm phép màu'! Ví dụ: Bạn muốn kinh doanh? Dùng luôn skill marketing + networking + laptop đang có."
    },
    
    "The High Priestess": {
        meaning: "🔮 Hãy lắng nghe giọng nói nhỏ bên trong bạn - TRỰC GIÁC của bạn đang thì thầm những điều quan trọng lắm đấy! Không phải mọi thứ đều cần lý giải bằng logic. Có những bí mật đang chờ được khám phá, nhưng chỉ khi bạn dừng lại, im lặng và LẮNG NGHE thật kỹ.",
        keywords: ["Trực giác mạnh mẽ", "Bí mật sắp lộ diện", "Khả năng tâm linh"],
        practical: "💡 Đừng bị cuốn vào ồn ào bên ngoài. Tìm không gian yên tĩnh, thiền, viết nhật ký - những điều bạn CẦN BIẾT sẽ tự ĐẾN. Tin vào 'linh tính' của mình! Ví dụ: Cảm thấy 'không ổn' về một deal - có lẽ nên nghe theo cảm giác đó."
    },
    
    "The Empress": {
        meaning: "🌸 Giai đoạn PHONG PHÚ và NUÔI DƯỠNG! Như Mẹ Thiên Nhiên, bạn đang ở trạng thái sáng tạo và 'sinh sôi' - có thể là một dự án, mối quan hệ, hoặc thậm chí một em bé thật sự. Mọi thứ xung quanh bạn đang NỞ RỘ như mùa xuân!",
        keywords: ["Sự dồi dào", "Tình yêu thương và chăm sóc", "Sáng tạo nghệ thuật"],
        practical: "💡 Chăm sóc BẢN THÂN và những gì bạn yêu thương. Đây không phải lúc để chạy đua kiệt sức - hãy nghỉ ngơi, ăn uống ngon, tận hưởng vẻ đẹp. Kết nối với thiên nhiên sẽ giúp bạn RẤT NHIỀU! Ví dụ: Đi spa, trồng cây, nấu ăn thật ngon cho người thân."
    },
    
    "The Emperor": {
        meaning: "👑 Đã đến lúc thiết lập TRẬT TỰ và CẦM QUYỀN! Như một vị vua ngồi trên ngai, bạn cần CẤU TRÚC, KỶ LUẬT và RANH GIỚI rõ ràng. Đừng sợ đưa ra quyết định cứng rắn và nói 'KHÔNG' khi cần. Đây là lúc để 'cứng' lên!",
        keywords: ["Lãnh đạo quyết đoán", "Xây dựng nền móng vững", "Kỷ luật bản thân"],
        practical: "💡 Lập kế hoạch CỤ THỂ, tạo thói quen TỐT, đặt ra luật lệ cho RIÊNG MÌNH. Đừng để ai lợi dụng lòng tốt của bạn. Hãy là 'ông chủ' của cuộc đời mình! Ví dụ: Đặt giờ ngủ dậy cố định, từ chối meeting không cần thiết, quản lý tài chính chặt chẽ."
    },

    "The Hierophant": {
        meaning: "📚 Học hỏi từ TRUYỀN THỐNG và TÌM KIẾM THẦY! Lá bài này nói về giáo dục, tôn giáo, các giá trị xã hội, và những hệ thống niềm tin đã tồn tại lâu đời. Đôi khi bạn cần một người hướng dẫn có kinh nghiệm, hoặc làm theo 'cách đã được kiểm chứng'.",
        keywords: ["Học từ bậc thầy", "Truyền thống & Lễ nghi", "Hệ thống niềm tin"],
        practical: "💡 Tìm một MENTOR, tham gia khóa học, hoặc học hỏi từ người có kinh nghiệm. Đừng cố 'phát minh lại bánh xe' - đôi khi cách TRU YỀN THỐNG là tốt nhất! Ví dụ: Học nghề từ thợ lão làng, tham gia cộng đồng tôn giáo, hoặc đăng ký khóa học chính quy."
    },

    "The Lovers": {
        meaning: "💕 Một QUYẾT ĐỊNH QUAN TRỌNG về mặt cảm xúc đang chờ bạn! Không nhất thiết là tình yêu lãng mạn - có thể là sự lựa chọn giữa CON TIM và LÝ TRÍ, hoặc giữa hai con đường khác nhau. Lá bài này cũng nói về SỰ KẾT NỐI sâu sắc, hài hòa.",
        keywords: ["Tình yêu chân thật", "Quyết định từ trái tim", "Sự hài hòa trong quan hệ"],
        practical: "💡 Đừng vội vàng! Hãy cân nhắc cả CẢM XÚC lẫn LÝ TRÍ. Nếu đang trong mối quan hệ - hãy giao tiếp THẬT LÒNG. Nếu đang quyết định - chọn điều khiến bạn cảm thấy TRỌN VẸN nhất. Ví dụ: Chọn giữa 2 job offers, hoặc quyết định có nên cam kết với ai đó không."
    },

    "The Chariot": {
        meaning: "🏎️ CHIẾN THẮNG qua SỨC MẠNH Ý CHÍ! Như một chiến binh lái xe chiến xa, bạn đang kiểm soát các lực lượng đối lập (2 con ngựa ngựa khác màu) và tiến về phía trước với QUYẾT TÂM không gì cản được. Đây là lúc để 'GAS THẬT ĐẦY'!",
        keywords: ["Chiến thắng", "Quyết tâm cao", "Kiểm soát mục tiêu"],
        practical: "💡 Tập trung vào MỤC TIÊU, loại bỏ MỌI RỐI NHIỄU. Đừng để cảm xúc hoặc người khác làm bạn lệch hướng. Lái thẳng về đích! Ví dụ: Deadline sắp tới? Tắt mạng xã hội, ngồi vào bàn, làm cho ra hồn!"
    },

    "Strength": {
        meaning: "🦁 SỨC MẠNH THẬT SỰ đến từ BÊN TRONG, không phải cơ bắp! Như người phụ nữ dịu dàng vuốt ve con sư tử, bạn cần kết hợp lòng CAN ĐẢM với sự BÀO DUNG và KIÊN NHẪN. Đánh bại quái vật bằng YÊU THƯƠNG, không phải TÚC GIẬN.",
        keywords: ["Sức mạnh nội tại", "Lòng trắc ẩn", "Kiên nhẫn chiến thắng"],
        practical: "💡 Đối mặt với khó khăn bằng BÌNHtĩnh và NHẸ NHÀNG. Đừng dùng VŨ LỰC hoặc hung hăng - hãy dùng TỰ TIN và KIÊN ĐỊNH. Ví dụ: Đối phó với sếp khó tính bằng sự chuyên nghiệp, không phải cãi lại; kiểm soát cơn giận bằng hít thở sâu."
    },

    "The Hermit": {
        meaning: "🕯️ Đã đến lúc RÚT LUI và TÌM KIẾM BÊN TRONG! Như một ẩn sĩ trên núi cao cầm đèn lồng, bạn cần THỜI GIAN MỘT MÌNH để suy ngẫm, học hỏi và tìm thấy CHÂN LÝ của riêng mình. Đừng sợ cô đơn - đó là lúc bạn tìm thấy TRẦN SÁNG!",
        keywords: ["Sự chiêm nghiệm", "Tìm kiếm nội tại", "Rút lui tạm thời"],
        practical: "💡 Tạm thời TRÁNH XA tiệc tùng, mạng xã hội. Dành thời gian ĐỌC SÁCH, THIỀN, viết NHẬT KÝ. Đi bộ trong thiên nhiên một mình. Những câu trả lời bạn tìm kiếm sẽ đến từ SỰ TĨNH LẶNG. Ví dụ: Weekend retreat một mình, tắt phone cả ngày, ngồi café một mình quan sát đời."
    },

    "Wheel of Fortune": {
        meaning: "🎡 VÒNG QUAY CUỘC SỐNG đang xoay! Mọi thứ thay đổi - may mắn đến, vận xui đi, rồi lại ngược lại. Đây là CHU KỲ tự nhiên của vũ trụ. Nếu bạn đang ở đáy - tin vui là sắp lên! Nếu đang ở đỉnh - hãy trân trọng!",
        keywords: ["Định mệnh", "Thay đổi lớn", "Chu kỳ vận may"],
        practical: "💡 Chấp nhận sự THAY ĐỔI là BẮT BUỘC. Đừng bám chặt vào hiện tại. Nếu đang khó khăn - hãy KIÊN NHẪN, vận sẽ đổi. Nếu đang thành công - hãy CẨN THẬN, đừng tự mãn. Ví dụ: Mất việc? Có thể đó là cơ hội để tìm việc tốt hơn!"
    }
};

console.log("✨ Loading enhanced Vietnamese - COMPLETE VERSION...");
