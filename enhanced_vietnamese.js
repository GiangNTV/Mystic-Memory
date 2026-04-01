// ==========================================
// ENHANCED VIETNAMESE - COMPLETE VERSION
// ==========================================
// File này override TOÀN BỘ meanings tiếng Việt cho 78 lá Tarot
// Ngôn ngữ tự nhiên, dễ hiểu, thú vị, có câu chuyện và ví dụ thực tế
// Cập nhật: Đầy đủ 78 lá (22 Major + 56 Minor Arcana)

// ==========================================
// MAJOR ARCANA (22 lá)
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
        practical: "💡 Tìm một MENTOR, tham gia khóa học, hoặc học hỏi từ người có kinh nghiệm. Đừng cố 'phát minh lại bánh xe' - đôi khi cách truyền thống là tốt nhất! Ví dụ: Học nghề từ thợ lão làng, tham gia cộng đồng tôn giáo, hoặc đăng ký khóa học chính quy."
    },
    "The Lovers": {
        meaning: "💕 Một QUYẾT ĐỊNH QUAN TRỌNG về mặt cảm xúc đang chờ bạn! Không nhất thiết là tình yêu lãng mạn - có thể là sự lựa chọn giữa CON TIM và LÝ TRÍ, hoặc giữa hai con đường khác nhau. Lá bài này cũng nói về SỰ KẾT NỐI sâu sắc, hài hòa.",
        keywords: ["Tình yêu chân thật", "Quyết định từ trái tim", "Sự hài hòa trong quan hệ"],
        practical: "💡 Đừng vội vàng! Hãy cân nhắc cả CẢM XÚC lẫn LÝ TRÍ. Nếu đang trong mối quan hệ - hãy giao tiếp THẬT LÒNG. Nếu đang quyết định - chọn điều khiến bạn cảm thấy TRỌN VẸN nhất. Ví dụ: Chọn giữa 2 job offers, hoặc quyết định có nên cam kết với ai đó không."
    },
    "The Chariot": {
        meaning: "🏎️ CHIẾN THẮNG qua SỨC MẠNH Ý CHÍ! Như một chiến binh lái xe chiến xa, bạn đang kiểm soát các lực lượng đối lập và tiến về phía trước với QUYẾT TÂM không gì cản được. Đây là lúc để 'GAS THẬT ĐẦY'!",
        keywords: ["Chiến thắng", "Quyết tâm cao", "Kiểm soát mục tiêu"],
        practical: "💡 Tập trung vào MỤC TIÊU, loại bỏ MỌI RỐI NHIỄU. Đừng để cảm xúc hoặc người khác làm bạn lệch hướng. Lái thẳng về đích! Ví dụ: Deadline sắp tới? Tắt mạng xã hội, ngồi vào bàn, làm cho ra hồn!"
    },
    "Strength": {
        meaning: "🦁 SỨC MẠNH thật sự không phải là cơ bắp — đó là khả năng THUẦN HÓA con thú bên trong bằng tình yêu thương! Như người phụ nữ nhẹ nhàng vuốt ve sư tử hung dữ, bạn đang học cách kiểm soát cơn giận, nỗi sợ, và những bản năng thô ráp nhất của mình.",
        keywords: ["Sức mạnh nội tâm", "Kiên nhẫn chiến thắng", "Lòng can đảm mềm mại"],
        practical: "💡 Đối mặt với người khó tính hoặc tình huống căng thẳng bằng sự BÌNH TĨNH thay vì hung hăng. Hít thở sâu, giữ giọng điệu ổn định. Ví dụ: Sếp gắt? Không cãi lại — trả lời chuyên nghiệp, giữ phẩm giá của mình."
    },
    "The Hermit": {
        meaning: "🕯️ Đã đến lúc RÚT LUI và TÌM KIẾM BÊN TRONG! Như một ẩn sĩ trên núi cao cầm đèn lồng, bạn cần THỜI GIAN MỘT MÌNH để suy ngẫm, học hỏi và tìm thấy CHÂN LÝ của riêng mình. Đừng sợ cô đơn - đó là lúc bạn tìm thấy ánh sáng!",
        keywords: ["Sự chiêm nghiệm", "Tìm kiếm nội tại", "Rút lui tạm thời"],
        practical: "💡 Tạm thời TRÁNH XA tiệc tùng, mạng xã hội. Dành thời gian ĐỌC SÁCH, THIỀN, viết NHẬT KÝ. Đi bộ trong thiên nhiên một mình. Những câu trả lời bạn tìm kiếm sẽ đến từ SỰ TĨNH LẶNG. Ví dụ: Weekend retreat một mình, tắt phone cả ngày."
    },
    "Wheel of Fortune": {
        meaning: "🎡 VÒNG QUAY CUỘC SỐNG đang xoay! Mọi thứ thay đổi - may mắn đến, vận xui đi, rồi lại ngược lại. Đây là CHU KỲ tự nhiên của vũ trụ. Nếu bạn đang ở đáy - tin vui là sắp lên! Nếu đang ở đỉnh - hãy trân trọng!",
        keywords: ["Định mệnh", "Thay đổi lớn", "Chu kỳ vận may"],
        practical: "💡 Chấp nhận sự THAY ĐỔI là BẮT BUỘC. Đừng bám chặt vào hiện tại. Nếu đang khó khăn - hãy KIÊN NHẪN, vận sẽ đổi. Nếu đang thành công - hãy CẨN THẬN, đừng tự mãn. Ví dụ: Mất việc? Có thể đó là cơ hội để tìm việc tốt hơn!"
    },
    "Justice": {
        meaning: "⚖️ Cán cân đang được CÂN BẰNG! Lá bài này nói về sự CÔNG BẰNG, hệ quả của hành động, và những quyết định cần được đưa ra với đầu óc tỉnh táo. Mọi thứ bạn đã làm — tốt hay xấu — đang chuẩn bị được 'trả lại' theo đúng giá trị của nó.",
        keywords: ["Công bằng và hệ quả", "Quyết định sáng suốt", "Sự thật được phơi bày"],
        practical: "💡 Hãy nhìn tình huống thật KHÁCH QUAN — không thiên vị bản thân, không cảm xúc thái quá. Nếu đang có tranh chấp hay quyết định lớn, hãy xem xét mọi góc độ. Ví dụ: Hợp đồng cần ký? Đọc kỹ từng điều khoản, đừng vội."
    },
    "The Hanged Man": {
        meaning: "🙃 Đang bị treo ngược — nhưng theo nghĩa CHUYỂN ĐỔI GÓC NHÌN! Đây là lúc vũ trụ buộc bạn phải DỪNG LẠI, nhìn mọi thứ theo cách hoàn toàn khác. Không phải thất bại — mà là sự tạm dừng CÓ Ý NGHĨA. Đôi khi từ bỏ kiểm soát lại chính là cách duy nhất để tiến lên.",
        keywords: ["Tạm dừng có chủ đích", "Góc nhìn mới", "Buông bỏ để tiến lên"],
        practical: "💡 Ngừng cố gắng KIỂM SOÁT mọi thứ. Hãy để tình huống tự diễn ra. Dành thời gian suy nghĩ lại — có thể bạn đang cố đi đường cũ mà không nhận ra. Ví dụ: Dự án bế tắc? Thử nghỉ 1-2 ngày hoàn toàn rồi nhìn lại."
    },
    "Death": {
        meaning: "💀 ĐỪNG SỢ! Đây không phải cái chết thực sự — mà là sự KẾT THÚC CỦA MỘT CHƯƠNG ĐỂ MỞ RA CHƯƠNG MỚI. Như con sâu phải 'chết đi' trong kén mới có thể thành bướm, bạn đang trải qua một sự chuyển hóa sâu sắc và không thể tránh khỏi.",
        keywords: ["Kết thúc chương cũ", "Chuyển hóa triệt để", "Tái sinh từ tro tàn"],
        practical: "💡 Cái gì trong cuộc sống bạn đang 'chết đi' mà bạn vẫn cố giữ lại? Hãy thành thật với bản thân. Đôi khi buông tay là hành động dũng cảm nhất. Ví dụ: Mối quan hệ độc hại, công việc không còn phù hợp — đã đến lúc thực sự khép lại."
    },
    "Temperance": {
        meaning: "🌊 Nghệ thuật CÂN BẰNG và KIÊN NHẪN! Như thiên thần rót nước từ cốc này sang cốc kia một cách khéo léo, bạn đang học cách pha trộn các yếu tố đối lập — công việc & nghỉ ngơi, lý trí & cảm xúc. Không cực đoan, không thái quá.",
        keywords: ["Cân bằng hoàn hảo", "Kiên nhẫn và điều độ", "Hòa hợp các mặt đối lập"],
        practical: "💡 Kiểm tra lịch sống của bạn — có đang LỆCH về phía nào không? Hãy điều chỉnh từng bước nhỏ. Ví dụ: Đang workaholic? Đặt lịch nghỉ ngơi như đặt lịch họp — nghiêm túc như vậy."
    },
    "The Devil": {
        meaning: "😈 Đây là lá bài của những SỢI XÍCH VÔ HÌNH — những thứ đang giữ bạn lại mà bạn không nhận ra. Nghiện ngập (mạng xã hội, công việc, mối quan hệ độc), tiền bạc, quyền lực, hoặc nỗi sợ. Điểm mấu chốt: những sợi xích này thực ra khá lỏng — bạn CÓ THỂ tháo ra.",
        keywords: ["Ràng buộc và nghiện ngập", "Bóng tối nội tâm", "Nhận diện để giải thoát"],
        practical: "💡 Thành thật: Điều gì đang kiểm soát BẠN mà bạn đang giả vờ bạn kiểm soát NÓ? Scroll mạng xã hội đến 2 giờ sáng? Đặt tên cho nó — bước đầu tiên để thoát ra."
    },
    "The Tower": {
        meaning: "⚡ BOOM! Mọi thứ vừa sụp đổ — nhưng đó là vì nền móng đã mục từ lâu rồi! The Tower là lá bài của sự THỨC TỈNH CƯỠNG BỨC. Tia sét phá vỡ tháp giả tạo, lộ ra sự thật trần trụi. Đau — có. Cần thiết — cũng có.",
        keywords: ["Sụp đổ đột ngột", "Thức tỉnh bắt buộc", "Phá hủy để tái sinh"],
        practical: "💡 Khi mọi thứ vừa sập: ĐỪNG hoảng loạn và đừng cố xây lại ngay. Hãy ngồi yên trong đống đổ nát một chút — có bài học quan trọng ở đây. Ví dụ: Mất việc đột ngột? Đây có thể là cú hích bạn cần để làm điều mình thực sự muốn."
    },
    "The Star": {
        meaning: "⭐ Sau cơn bão — ÁNH SÁNG! The Star là lá bài của SỰ HỒI PHỤC, HY VỌNG VÀ NIỀM TIN. Như người phụ nữ đang múc nước từ dòng sông dưới bầu trời đầy sao, bạn đang được vũ trụ chữa lành và tiếp thêm năng lượng.",
        keywords: ["Hy vọng và chữa lành", "Ước mơ trở thành hiện thực", "Niềm tin vào tương lai"],
        practical: "💡 Cho phép bản thân ĐƯỢC HY VỌNG trở lại. Viết ra ước mơ của bạn — không phán xét, không 'nhưng mà'. Vũ trụ đang lắng nghe. Ví dụ: Sau thất bại, đây là lúc ngồi lại và hỏi: Thực ra mình MUỐN GÌ?"
    },
    "The Moon": {
        meaning: "🌙 Bước vào vùng BÓNG TỐI và ẢO GIÁC! The Moon cảnh báo về những điều không như vẻ ngoài — nỗi sợ vô căn cứ, ảo tưởng, những gì đang bị che giấu. Đây là thế giới của giấc mơ và những sự thật chưa được phơi bày.",
        keywords: ["Ảo giác và sự thật ẩn", "Nỗi sợ nội tâm", "Trực giác trong bóng tối"],
        practical: "💡 Đừng tin mọi thứ bạn đang thấy lúc này — nỗi sợ có đang thổi phồng tình huống không? Viết ra những gì bạn sợ, rồi hỏi: 'Cái này CÓ THẬT không?' Ví dụ: Bạn đang lo lắng hay thực sự có lý do để lo?"
    },
    "The Sun": {
        meaning: "☀️ CHÚC MỪNG! Đây là lá bài HẠNH PHÚC NHẤT trong bộ Tarot! Mọi thứ đang rạng rỡ, rõ ràng, và tràn đầy năng lượng. Như đứa trẻ cưỡi ngựa dưới ánh mặt trời rực rỡ, bạn đang ở giai đoạn của sự VUI VẺ THUẦN KHIẾT và thành công.",
        keywords: ["Hạnh phúc và thành công", "Rõ ràng và tự tin", "Năng lượng rực rỡ"],
        practical: "💡 Lúc này mọi thứ đang ủng hộ bạn — hãy HÀNH ĐỘNG, ra mắt dự án, nộp đơn xin việc, tỏ tình. Đừng ngồi đợi nữa! Ví dụ: Cái kế hoạch bạn đang ôm mãi chưa dám làm? THE SUN nói: làm ngay đi!"
    },
    "Judgement": {
        meaning: "📯 TIẾNG KÈN GỌI DẬY! Đây là khoảnh khắc của sự THỨC TỈNH và ĐÁNH GIÁ LẠI. Bạn được kêu gọi nhìn lại toàn bộ hành trình — ai bạn đã là, ai bạn đang là, và ai bạn muốn trở thành. Đây là cơ hội để tha thứ, buông bỏ và đứng dậy hoàn toàn mới.",
        keywords: ["Thức tỉnh và đánh giá", "Tha thứ và buông bỏ", "Lời kêu gọi cao hơn"],
        practical: "💡 Ngồi lại và tự hỏi: 'Tôi đang sống đúng với con người thật của mình chưa?' Tha thứ cho bản thân về những gì đã qua. Ví dụ: Có mục tiêu lớn bạn đang né tránh vì sợ không xứng? Judgement nói bạn xứng đáng."
    },
    "The World": {
        meaning: "🌍 CHƯƠNG NÀY ĐÃ HOÀN THÀNH — và hoàn thành MỘT CÁCH TRỌN VẸN! The World là lá bài của sự HOÀN TẤT, thành tựu đích thực. Bạn đã học xong bài học, đạt được mục tiêu. Vũ điệu trên đỉnh cao — bạn xứng đáng!",
        keywords: ["Hoàn thành và thành tựu", "Trọn vẹn và hội nhập", "Khởi đầu mới sau đỉnh cao"],
        practical: "💡 Dừng lại để NHÌN NHẬN thành quả của mình — đừng vội phóng sang mục tiêu tiếp theo mà không ăn mừng. Hãy trân trọng khoảnh khắc này. Ví dụ: Vừa tốt nghiệp, vừa kết thúc dự án lớn? Hãy ăn mừng TRƯỚC khi lên kế hoạch tiếp!"
    }
};


// ==========================================
// MINOR ARCANA - WANDS (Lửa, đam mê, hành động)
// ==========================================
const enhancedWandsVN = {
    "Ace of Wands": {
        meaning: "🔥 TIA LỬA ĐẦU TIÊN! Một ý tưởng, đam mê, hoặc cơ hội mới vừa bùng lên trong bạn. Đây là năng lượng khởi tạo thuần túy nhất — chưa có hình hài cụ thể nhưng đầy tiềm năng. Bàn tay vũ trụ đang chìa ra ngọn đuốc: BẠN CÓ DÁM CẦM KHÔNG?",
        keywords: ["Khởi đầu đầy lửa", "Ý tưởng bùng cháy", "Năng lượng sáng tạo mới"],
        practical: "💡 Cái ý tưởng vừa lóe lên trong đầu bạn lúc 2 giờ sáng đó? Hãy GHI LẠI ngay và bắt đầu ngay hôm nay. Đừng đợi 'điều kiện hoàn hảo'. Ví dụ: Muốn học vẽ? Mua sổ và bút ngay hôm nay, không cần đăng ký lớp học."
    },
    "Two of Wands": {
        meaning: "🗺️ Bạn đứng trên cao nhìn ra THẾ GIỚI RỘNG LỚN phía trước và đang LÊN KẾ HOẠCH! Đây là giai đoạn của tầm nhìn và hoạch định chiến lược — bạn đã có nền tảng ban đầu, giờ phải quyết định đi theo hướng nào. Thế giới là sân chơi của bạn.",
        keywords: ["Lập kế hoạch dài hạn", "Tầm nhìn xa", "Sẵn sàng mở rộng"],
        practical: "💡 Ngồi xuống và vẽ ra BIG PICTURE của bạn — không phải plan cho tuần này, mà cho 1-3 năm tới. Bạn muốn cuộc sống trông như thế nào? Ví dụ: Muốn mở công ty? Hôm nay research thị trường, đặt tên thương hiệu, tìm co-founder."
    },
    "Three of Wands": {
        meaning: "⛵ Con thuyền đã ra khơi — giờ là lúc THEO DÕI KẾT QUẢ TRỞ VỀ! Bạn đã đặt nền móng và bắt đầu hành trình, bây giờ đang quan sát những nỗ lực đầu tiên của mình sinh trái. Mở rộng tầm mắt ra ngoài biên giới quen thuộc.",
        keywords: ["Chờ đợi kết quả", "Mở rộng ra thế giới", "Tầm nhìn quốc tế"],
        practical: "💡 Hãy KIÊN NHẪN với những gì bạn đã gieo. Nhưng đừng ngồi không — tiếp tục tìm kiếm cơ hội MỚI song song. Ví dụ: Đã nộp đơn xin việc? Trong lúc chờ, hãy apply thêm 5 chỗ khác và học thêm kỹ năng."
    },
    "Four of Wands": {
        meaning: "🎉 ĂN MỪNG! Đây là lá bài của SỰ KIỆN VUI, THÀNH TỰU ĐƯỢC GHI NHẬN và CỘNG ĐỒNG ẤM ÁP! Cổng hoa đã được dựng lên, mọi người đang tụ họp — đây là khoảnh khắc của niềm vui được chia sẻ. Ngôi nhà an lành, mối quan hệ ổn định.",
        keywords: ["Ăn mừng và kết nối", "Nền tảng gia đình vững", "Sự kiện hạnh phúc"],
        practical: "💡 Đây là lúc CHIA SẺ thành công với người thân và ĂN MỪNG dù nhỏ. Đừng một mình hưởng thụ thành quả. Ví dụ: Vừa ký hợp đồng mới? Mời gia đình ăn tối để cảm ơn sự ủng hộ của họ."
    },
    "Five of Wands": {
        meaning: "⚔️ MỌI NGƯỜI ĐANG ĐI LOẠN! Five of Wands là cảnh tranh giành, cạnh tranh, bất đồng, và sự hỗn loạn sáng tạo. Không ai chịu ai — nhưng không hẳn là xấu. Đây có thể là cạnh tranh lành mạnh kích thích sự phát triển, hoặc là xung đột cần được giải quyết.",
        keywords: ["Cạnh tranh và xung đột", "Bất đồng ý kiến", "Sức mạnh từ va chạm"],
        practical: "💡 Đang trong môi trường cạnh tranh gay gắt? ĐỪNG LÙI BƯỚC — nhưng cũng đừng đánh nhau vô nghĩa. Hãy tập trung vào điểm mạnh của mình thay vì đánh hạ đối thủ. Ví dụ: Nhiều người cùng pitch ý tưởng? Làm cho của bạn NỔI BẬT hơn, không phải dìm người khác."
    },
    "Six of Wands": {
        meaning: "🏆 CHIẾN THẮNG VÀ SỰ CÔNG NHẬN! Bạn vừa vượt qua thử thách và được CẢ ĐÁM ĐÔNG TÔN VINH. Đây là khoảnh khắc của sự tự hào, thành công được thừa nhận công khai. Cưỡi ngựa giữa tiếng hô vang — bạn đã làm được!",
        keywords: ["Chiến thắng công khai", "Sự công nhận", "Tự hào chính đáng"],
        practical: "💡 Đừng GIẢ KHIÊM TỐN! Hãy tự hào về thành tựu của mình và chia sẻ nó. Đây cũng là lúc TRUYỀN CẢM HỨNG cho người khác bằng câu chuyện của bạn. Ví dụ: Vừa được thăng chức? Đừng chỉ cảm ơn rồi thôi — hãy chia sẻ bài học trên LinkedIn."
    },
    "Seven of Wands": {
        meaning: "🛡️ ĐỨNG VỮNG GIỮA BÃO! Bạn đang ở VỊ TRÍ CAO nhưng bị tấn công từ nhiều phía. Cần phải DEFEND bản thân, quan điểm, và thành quả của mình. Áp lực lớn — nhưng bạn ở thế cao hơn, có lợi thế hơn. Đừng bỏ chạy!",
        keywords: ["Bảo vệ lập trường", "Chịu áp lực từ nhiều phía", "Kiên trì không nhượng bộ"],
        practical: "💡 Bị chỉ trích, phản đối? Đừng THAY ĐỔI lập trường chỉ vì bị áp lực. Hãy lắng nghe phản hồi có lý, nhưng giữ vững những gì bạn TIN LÀ ĐÚNG. Ví dụ: Dự án bị phản đối? Chuẩn bị data và lý lẽ rõ ràng để bảo vệ."
    },
    "Eight of Wands": {
        meaning: "🚀 MỌI THỨ ĐANG PHÓNG NHANH! Eight of Wands là lá bài của tốc độ — tin tức đến nhanh, cơ hội đến nhanh, mọi thứ cùng xảy ra một lúc. Bạn không có thời gian để suy nghĩ quá nhiều. Hãy TẬP TRUNG và PHẢN ỨNG NHANH!",
        keywords: ["Tốc độ và chuyển động", "Tin tức bay về", "Hành động không do dự"],
        practical: "💡 ĐỪNG TRÌ HOÃN — cơ hội này có hạn. Khi mọi thứ đang chuyển động nhanh, người nắm bắt đầu tiên sẽ thắng. Ví dụ: Nhận được email job offer? Reply và đàm phán ngay, đừng để qua ngày hôm sau."
    },
    "Nine of Wands": {
        meaning: "😤 GẦN VỀ ĐÍCH RỒI — nhưng kiệt sức quá! Người chiến binh đứng với 9 cây gậy sau lưng, đầy thương tích nhưng vẫn không bỏ cuộc. Bạn đã trải qua rất nhiều và đang cảnh giác cao độ. CHỈ CÒN MỘT BƯỚC NỮA THÔI — đừng bỏ cuộc!",
        keywords: ["Kiên trì đến cùng", "Gần đích nhưng mệt mỏi", "Cảnh giác sau tổn thương"],
        practical: "💡 Bạn đã đi xa đến thế này rồi — ĐỪNG BỎ CUỘC ngay trước vạch đích! Nhưng hãy nghỉ ngơi NGẮN nếu cần. Ví dụ: Luận văn sắp xong nhưng kiệt sức? Ngủ một giấc rồi làm tiếp — đừng bỏ dở."
    },
    "Ten of Wands": {
        meaning: "😩 ĐANG GÁNH QUÁ NHIỀU RỒI! Người trong lá bài đang cúi gập người vì 10 cây gậy quá nặng. Bạn đang ôm đồm quá nhiều trách nhiệm, deadline chồng chất. Thành công đang đến nhưng bạn sắp gục ngã trước khi tới nơi.",
        keywords: ["Gánh nặng quá sức", "Trách nhiệm chồng chất", "Cần học cách buông bỏ"],
        practical: "💡 HÃY DELEGATE! Bạn không cần làm TẤT CẢ một mình. Liệt kê mọi thứ đang làm, gạch bỏ những thứ không thật sự cần bạn. Ví dụ: Đang làm 3 dự án cùng lúc? Thương lượng lại deadline hoặc nhờ đồng nghiệp support."
    },
    "Page of Wands": {
        meaning: "🌟 NĂNG LƯỢNG TRẺ TRUNG VÀ NHIỆT HUYẾT! Page of Wands là người trẻ đầy đam mê, tò mò, sẵn sàng thử mọi thứ mới. Tin tức thú vị đang đến, hoặc bạn đang ở trạng thái 'học sinh giỏi' — hấp thụ mọi thứ xung quanh.",
        keywords: ["Nhiệt huyết và tò mò", "Tin tức kích thích", "Tinh thần học hỏi"],
        practical: "💡 Hãy thử cái gì đó HOÀN TOÀN MỚI — kể cả nếu bạn chưa giỏi. Tinh thần người mới bắt đầu là sức mạnh, không phải điểm yếu. Ví dụ: Luôn muốn học nhạc? Đăng ký buổi học thử đầu tiên ngay tuần này."
    },
    "Knight of Wands": {
        meaning: "🏇 LƯỚT NHANH VÀ BẠO DẠN! Knight of Wands đang phi nước đại — đầy nhiệt huyết, táo bạo, đôi khi hơi LIỀU nhưng không thể cản được. Năng lượng này có thể là bạn, hoặc là người/tình huống đang đến với tốc độ cao.",
        keywords: ["Hành động táo bạo", "Nhiệt huyết không ngại ngùng", "Quyết đoán và nhanh nhẹn"],
        practical: "💡 Cơ hội không chờ đợi — HÃY NHẢY VÀO! Nhưng lên kế hoạch tối thiểu trước khi lao. Ví dụ: Muốn quit job để làm freelance? Tiết kiệm 3 tháng chi phí sống TRƯỚC, rồi nhảy với sự tự tin."
    },
    "Queen of Wands": {
        meaning: "👸🔥 BÀ HOÀNG CỦA ĐAM MÊ VÀ NĂNG LƯỢNG! Queen of Wands ấm áp, tự tin, quyến rũ và đầy sức sống. Bà biết mình muốn gì và có sức thu hút tự nhiên. Con mèo đen ở chân bà — bà không sợ bóng tối, bà làm chủ nó.",
        keywords: ["Sức thu hút tự nhiên", "Tự tin và đam mê", "Lãnh đạo bằng cảm hứng"],
        practical: "💡 HÃY LÀ CHÍNH MÌNH một cách MẠNH MẼ NHẤT! Sức hút của bạn đến từ sự chân thật, không phải từ việc cố gắng được mọi người thích. Ví dụ: Buổi thuyết trình sắp tới? Đừng học thuộc lòng — hãy nói từ đam mê thật sự."
    },
    "King of Wands": {
        meaning: "👑🔥 VUA CỦA TẦM NHÌN VÀ LÃNH ĐẠO! King of Wands là nhà lãnh đạo bẩm sinh — người biến ý tưởng thành đế chế, dẫn dắt bằng cảm hứng hơn là quy tắc. Ông biết ai phải làm gì và tạo ra văn hóa mà mọi người MUỐN được là một phần.",
        keywords: ["Lãnh đạo bằng tầm nhìn", "Đế chế từ đam mê", "Cảm hứng và quyết đoán"],
        practical: "💡 Đây là lúc bạn LÃNH ĐẠO — không phải quản lý. Tập trung vào WHY (tại sao) thay vì HOW (như thế nào). Ví dụ: Bạn là founder? Hãy truyền đạt vision rõ ràng để team tự biết phải làm gì."
    }
};

// ==========================================
// MINOR ARCANA - CUPS (Nước, cảm xúc, tình yêu)
// ==========================================
const enhancedCupsVN = {
    "Ace of Cups": {
        meaning: "💧 NGUỒN CẢM XÚC TINH KHIẾT NHẤT! Chiếc ly tràn đầy nước từ trên trời đổ xuống — đây là tình yêu thương vô điều kiện, cảm xúc mới mẻ, và khả năng kết nối sâu sắc đang được mời gọi. Trái tim đang mở ra.",
        keywords: ["Tình yêu mới nở", "Cảm xúc tươi sáng", "Kết nối tâm hồn"],
        practical: "💡 Hãy MỞ LÒNG với tình yêu — tình yêu đôi lứa, tình bạn, hoặc tình yêu với công việc. Đừng để vết thương cũ ngăn bạn đón nhận điều tốt đẹp mới. Ví dụ: Có người đang muốn gần gũi với bạn — hãy cho họ cơ hội."
    },
    "Two of Cups": {
        meaning: "💑 KẾT NỐI HAI CHIỀU! Đây là lá bài của SỰ KẾT HỢP HOÀN HẢO — hai người, hai ý tưởng, hoặc hai phần của bạn đang hòa hợp. Tình yêu đôi lứa, hợp tác kinh doanh, hoặc tình bạn thân thiết đều được chào đón ở đây.",
        keywords: ["Kết nối sâu sắc", "Hợp tác hoàn hảo", "Tình yêu đôi lứa"],
        practical: "💡 Hãy ĐẦU TƯ VÀO MỐI QUAN HỆ này — dù là tình yêu hay partnership. Nói chuyện thật lòng, chia sẻ cảm xúc thật. Ví dụ: Muốn làm business cùng người bạn thân? Two of Cups nói cặp đôi này có thể làm tốt lắm!"
    },
    "Three of Cups": {
        meaning: "🥂 TIỆC TÙY! Ba người bạn nâng ly ăn mừng — đây là lá bài của niềm vui được chia sẻ, tình bạn ấm áp, và những khoảnh khắc kết nối thật sự. Cuộc sống không chỉ là làm việc — đây là lúc vui vẻ cùng người thân!",
        keywords: ["Tình bạn và niềm vui", "Kết nối cộng đồng", "Ăn mừng cùng nhau"],
        practical: "💡 GỌI BẠN BÈ RA NGOÀI! Đừng để bận rộn khiến bạn cô lập. Một buổi cafe, một bữa ăn cùng nhau có thể nạp lại năng lượng tốt hơn bất kỳ ngày nghỉ nào một mình. Ví dụ: Lâu rồi không gặp nhóm bạn cũ? Hãy nhắn tin ngay hôm nay."
    },
    "Four of Cups": {
        meaning: "😒 'ĐƯỢC RỒI NHƯNG KHÔNG THẤY VUI'! Có người đang chìa tặng bạn một cơ hội (chiếc cốc thứ tư) nhưng bạn đang ngồi khoanh tay và không thèm nhìn. Chán nản, thờ ơ, hoặc mải mê với ba chiếc cốc cũ đã có. Đang bỏ lỡ điều gì đó!",
        keywords: ["Thờ ơ và chán nản", "Bỏ lỡ cơ hội", "Cần nhìn ra bên ngoài"],
        practical: "💡 Nhìn xung quanh xem có cơ hội nào bạn đang KHÔNG CHÚ Ý không? Đôi khi vì quá tập trung vào nỗi buồn cũ mà không thấy điều tốt mới. Ví dụ: Ai đó đang cố kết nối với bạn mà bạn đang phớt lờ vì 'bận'?"
    },
    "Five of Cups": {
        meaning: "😢 ĐAU KHỔ VÌ MẤT MÁT. Người trong lá bài đang nhìn chằm chằm vào 3 chiếc cốc đổ, mà không nhìn 2 chiếc còn nguyên phía sau. Bạn đang bị cuốn vào nỗi buồn mà quên mất những gì vẫn còn. Đau — có, nhưng không phải mất tất cả!",
        keywords: ["Nỗi đau mất mát", "Tập trung vào tiêu cực", "Vẫn còn điều tốt đẹp"],
        practical: "💡 Hãy khóc đi nếu cần — đó là lành mạnh. Nhưng sau đó, QUAY ĐẦU LẠI và nhìn những gì vẫn còn. Ví dụ: Chia tay đau lòng? Nhớ rằng bạn vẫn còn sức khỏe, gia đình, bạn bè và tương lai phía trước."
    },
    "Six of Cups": {
        meaning: "🌸 HOÀI NIỆM VÀ KÝ ỨC ẤM ÁP! Hai đứa trẻ chia nhau những bông hoa — đây là lá bài của tuổi thơ, kỷ niệm đẹp, và sự trong sáng. Có thể gặp lại người cũ, được kết nối với quá khứ, hoặc cần nhìn lại nguồn cội để tìm nguồn cảm hứng.",
        keywords: ["Hoài niệm đẹp đẽ", "Kết nối với quá khứ", "Sự trong sáng và đơn giản"],
        practical: "💡 Đôi khi câu trả lời nằm ở QUÁ KHỨ — điều bạn yêu thích hồi nhỏ, ước mơ ban đầu. Hãy nhớ lại. Ví dụ: Hồi nhỏ bạn thích vẽ/nhảy/hát? Có thể đó là sở thích bạn nên quay lại bây giờ."
    },
    "Seven of Cups": {
        meaning: "🌈 QUÁ NHIỀU LỰA CHỌN — ĐẦU ÓC LOẠN! Bảy chiếc cốc mỗi cái chứa một ảo mộng khác nhau — bạn đang bị choáng ngợp bởi khả năng, ước mơ, và... có thể là ảo tưởng. Không phải tất cả đều là thật. Cần tỉnh táo để phân biệt cái nào có giá trị.",
        keywords: ["Choáng ngợp với lựa chọn", "Ảo tưởng và thực tế", "Cần sự rõ ràng"],
        practical: "💡 Viết ra TẤT CẢ các lựa chọn bạn đang cân nhắc, rồi gạch bỏ những cái thực ra chỉ là 'daydream đẹp'. Tập trung vào 1-2 cái có cơ sở thực tế. Ví dụ: Đang cân nhắc 5 hướng nghề nghiệp? Hãy research thực tế về từng cái trước khi quyết định."
    },
    "Eight of Cups": {
        meaning: "🚶 QUAY LƯNG VÀ ĐI TIẾP. Người trong lá bài bỏ lại 8 chiếc cốc đã có (đủ để sống!) và đi theo ánh trăng. Đây là sự lựa chọn dũng cảm: TỪ BỎ ĐIỀU ĐỦ TỐT để tìm kiếm điều THỰC SỰ Ý NGHĨA. Không phải trốn chạy — mà là trưởng thành.",
        keywords: ["Từ bỏ có chủ đích", "Tìm kiếm ý nghĩa sâu hơn", "Dũng cảm bỏ điều đủ tốt"],
        practical: "💡 Nếu cảm thấy cuộc sống 'ổn nhưng thiếu gì đó' — đó không phải vô lý. Bạn ĐƯỢC PHÉP tìm kiếm nhiều hơn. Ví dụ: Công việc lương tốt nhưng trống rỗng? Đây là lúc nghiêm túc suy nghĩ về career change."
    },
    "Nine of Cups": {
        meaning: "😊 ƯỚC GÌ ĐƯỢC NẤY! The Wish Card — người đàn ông ngồi hài lòng trước 9 chiếc cốc đầy. Đây là lá bài báo hiệu điều bạn mong muốn sẽ XẢY RA. Hài lòng, thỏa mãn, và những điều tốt đẹp đang đến.",
        keywords: ["Ước nguyện thành sự thật", "Hài lòng và thỏa mãn", "Niềm vui vật chất và cảm xúc"],
        practical: "💡 Đây là lúc TRÂN TRỌNG những gì bạn đang CÓ, đồng thời vui vì điều bạn ước sẽ đến. Hãy cụ thể hóa ước muốn của mình — viết ra, hình dung rõ ràng. Ví dụ: Ước gì? Viết xuống và đọc mỗi sáng."
    },
    "Ten of Cups": {
        meaning: "🌈👨‍👩‍👧‍👦 GIA ĐÌNH HẠNH PHÚC DƯỚI CẦU VỒNG! Đây là lá bài của HẠNH PHÚC TRỌN VẸN — tình yêu, gia đình, cộng đồng, và sự thỏa mãn sâu sắc. Không chỉ là 'okay' — mà là THỰC SỰ TUYỆT VỜI. Bức tranh hoàn hảo của cuộc đời.",
        keywords: ["Hạnh phúc gia đình", "Tình yêu viên mãn", "Cuộc sống trọn vẹn"],
        practical: "💡 Hạnh phúc không tự đến — hãy TÍCH CỰC XÂY DỰNG nó mỗi ngày. Dành thời gian chất lượng cho gia đình và người thân. Ví dụ: Bao lâu rồi bạn chưa ăn tối cùng cả nhà không có điện thoại?"
    },
    "Page of Cups": {
        meaning: "🐟 THÔNG ĐIỆP CẢM XÚC BẤT NGỜ! Page of Cups đang nhìn con cá trong cốc với vẻ ngạc nhiên — điều bất ngờ về mặt cảm xúc đang đến. Tin tức lãng mạn, sự sáng tạo nảy sinh từ hư không, hoặc trực giác mách bảo điều kỳ lạ.",
        keywords: ["Thông điệp cảm xúc", "Sáng tạo bất ngờ", "Trực giác nhạy bén"],
        practical: "💡 Hãy LẮNG NGHE cảm xúc của bạn hơn, đặc biệt những cảm giác kỳ lạ không giải thích được. Ví dụ: Có ý tưởng sáng tạo lạ lùng vừa xuất hiện? Đừng gạt đi — ghi lại và khám phá thêm."
    },
    "Knight of Cups": {
        meaning: "🦢 HIỆP SĨ LÃNG MẠN ĐANG ĐẾN! Người cưỡi ngựa trắng, tay cầm cốc vàng — đây là hình ảnh của người theo đuổi ước mơ, kẻ lãng mạn, hoặc người đến với trái tim mở. Lời mời, đề nghị, hoặc cơ hội cảm xúc đang được trao đến.",
        keywords: ["Theo đuổi ước mơ", "Lãng mạn và lý tưởng", "Lời đề nghị từ trái tim"],
        practical: "💡 Nếu có cảm xúc muốn BÀY TỎ — hãy làm! Đừng để lý trí dập tắt trái tim quá sớm. Ví dụ: Có người bạn thích? Knight of Cups nói: HÃY NÓI RA — theo cách chân thật và không áp lực."
    },
    "Queen of Cups": {
        meaning: "🌊👑 BÀ HOÀNG CỦA CẢM XÚC VÀ TRỰC GIÁC! Queen of Cups ngồi ở bờ biển với chiếc cốc kín — bà hiểu mọi cảm xúc sâu sắc nhất của con người. Empathy vô biên, trực giác sắc bén, và khả năng chữa lành tự nhiên. Là người chăm sóc và được chăm sóc.",
        keywords: ["Empathy và chữa lành", "Trực giác sâu sắc", "Tình yêu vô điều kiện"],
        practical: "💡 Hãy LẮNG NGHE người khác bằng cả trái tim, không chỉ bằng tai. Và chăm sóc CẢM XÚC CỦA CHÍNH MÌNH — bạn không thể rót đầy cốc của người khác khi cốc mình trống. Ví dụ: Tự hỏi: Hôm nay mình CẢM THẤY THẾ NÀO thực sự?"
    },
    "King of Cups": {
        meaning: "🌊👑 VUA CỦA TRÍ TUỆ CẢM XÚC! King of Cups ngồi giữa biển động mà không bị ảnh hưởng — ông đã làm chủ cảm xúc của mình, không kìm nén nhưng không bị cuốn trôi. Sự cân bằng giữa lý trí và cảm xúc ở mức bậc thầy.",
        keywords: ["Làm chủ cảm xúc", "Khôn ngoan và bình thản", "Lãnh đạo bằng trái tim"],
        practical: "💡 Khi tình huống căng thẳng, hãy hỏi: 'Tôi CẢM THẤY gì và tôi muốn PHẢN ỨNG như thế nào — có phải là giống nhau không?' Không phải lúc nào cũng nên hành động theo cảm xúc ngay lập tức. Ví dụ: Ai đó chọc giận bạn? Hít thở 10 giây rồi mới reply."
    }
};

// ==========================================
// MINOR ARCANA - SWORDS (Không khí, tư duy, xung đột)
// ==========================================
const enhancedSwordsVN = {
    "Ace of Swords": {
        meaning: "⚔️ SỰ THẬT ĐƯỢC PHƠI BÀY! Thanh kiếm bứt phá qua mây mù — đây là khoảnh khắc của NHẬN THỨC SÁNG TỎ, sự thật trần trụi, và sức mạnh của trí tuệ thuần túy. Đau có thể — nhưng sự rõ ràng là quà tặng.",
        keywords: ["Sự thật sắc bén", "Tư duy rõ ràng", "Đột phá nhận thức"],
        practical: "💡 Đã đến lúc NÓI THẬT — với bản thân và người khác. Dù đau, sự thật vẫn tốt hơn ảo tưởng. Ví dụ: Mối quan hệ/công việc đang có vấn đề? Thừa nhận thực tế và đối mặt thay vì né tránh."
    },
    "Two of Swords": {
        meaning: "🙈 BỊCH MẮT VÀ TỪ CHỐI NHÌN! Người ngồi với hai thanh kiếm chéo nhau, mắt bịt lại — bạn đang CỐ TÌNH TRÁNH MỘT QUYẾT ĐỊNH KHÓ KHĂN. Sự bế tắc này do chính bạn tạo ra. Nhưng trì hoãn mãi cũng không giải quyết được gì.",
        keywords: ["Tránh né quyết định", "Bế tắc tự tạo", "Cần nhìn nhận sự thật"],
        practical: "💡 Quyết định bạn đang trốn tránh đó — hãy NHÌN THẲNG VÀO NÓ hôm nay. Không quyết định CŨNG là một quyết định, và thường là quyết định tệ nhất. Ví dụ: Không biết chọn A hay B? Tung đồng xu — phản ứng của bạn khi thấy kết quả sẽ cho biết câu trả lời thật."
    },
    "Three of Swords": {
        meaning: "💔 ĐAU LÒNG THẬT SỰ. Ba thanh kiếm xuyên qua trái tim — đây là nỗi đau tinh thần, sự thất vọng, chia ly, hoặc sự thật phũ phàng. Đừng cố không cảm thấy. Hãy cho phép bản thân đau — đó là bước đầu tiên để lành.",
        keywords: ["Đau lòng và mất mát", "Nỗi đau tinh thần", "Chia ly và thất vọng"],
        practical: "💡 Cho phép bản thân KHÓC và ĐAU. Đừng giả vờ 'tôi ổn' khi chưa ổn. Nhưng cũng nhớ: đau không phải vĩnh viễn. Ví dụ: Tìm người tin tưởng để nói chuyện — không cần phải một mình chịu đựng."
    },
    "Four of Swords": {
        meaning: "😴 NGHỈ NGƠI ĐỂ PHỤC HỒI! Hiệp sĩ nằm yên tĩnh như đang thiền hoặc ngủ dưỡng sức — đây là lúc DỪNG LẠI CÓ CHỦ ĐÍCH. Không phải lười biếng — mà là sự phục hồi cần thiết sau căng thẳng. Hệ thống cần được reboot.",
        keywords: ["Nghỉ ngơi và phục hồi", "Thiền định và tĩnh lặng", "Nạp lại năng lượng"],
        practical: "💡 NGHỈ NGƠI THẬT SỰ — không phải 'lướt TikTok trên giường'. Ngủ đủ giấc, thiền, spa, hoặc chỉ đơn giản là ngồi im và không làm gì. Ví dụ: Cuối tuần này đừng đặt lịch gì hết — chỉ nghỉ thôi."
    },
    "Five of Swords": {
        meaning: "😏 THẮNG TRẬN NHƯNG MẤT NGƯỜI. Người thắng đang thu gom kiếm, còn những kẻ thất bại bỏ đi buồn bã — chiến thắng này có giá quá đắt. Đây là cảnh báo về sự tranh giành vô nghĩa, cái tôi, hoặc việc 'thắng bằng mọi giá'.",
        keywords: ["Chiến thắng rỗng tuếch", "Xung đột và bẽ mặt", "Cần biết lúc nào nên dừng"],
        practical: "💡 Hỏi bản thân: 'Mình đang chiến đấu để THẮNG hay để ĐÚNG?' Đôi khi nhường một bước sẽ giữ được quan hệ quan trọng hơn nhiều. Ví dụ: Đang cãi nhau với đồng nghiệp? Hỏi xem có đáng để 'thắng' cuộc cãi đó không."
    },
    "Six of Swords": {
        meaning: "⛵ RỜI BỎ ĐỂ TÌM VÙNG NƯỚC YÊN. Con thuyền chậm rãi rời khỏi vùng nước sóng gió — đây là sự CHUYỂN ĐỔI từ khó khăn sang bình yên hơn. Không phải giải quyết xong mọi thứ — mà là rời xa điều đang làm hại bạn.",
        keywords: ["Chuyển tiếp sang bình yên", "Rời xa cái cũ", "Hành trình phục hồi"],
        practical: "💡 Nếu môi trường hoặc mối quan hệ đang DRAINING bạn — hãy TÌM CÁCH THOÁT RA từng bước. Không cần dramatic, chỉ cần bắt đầu di chuyển. Ví dụ: Công việc độc hại? Bắt đầu apply chỗ mới trong lúc vẫn đang làm."
    },
    "Seven of Swords": {
        meaning: "🦊 CÓ GÌ ĐÓ ĐANG BỊ GIẤU GIẾM! Người đang lén lút mang đi 5 thanh kiếm trong khi để lại 2 — đây là lá bài của sự lừa dối, chiến lược che giấu, hoặc cần phải 'đi đêm'. Có ai đó không thành thật, hoặc bạn đang phải dùng chiến thuật.",
        keywords: ["Lừa dối và chiến lược", "Điều gì đó bị giấu", "Cần thận trọng"],
        practical: "💡 KIỂM TRA LẠI thông tin trước khi tin. Và nếu BẠN đang che giấu điều gì — hỏi xem có thực sự cần không, hay đang tự làm phức tạp mọi thứ. Ví dụ: Cảm thấy ai đó không thành thật? Tin vào linh tính đó."
    },
    "Eight of Swords": {
        meaning: "😰 BỊ TRÓI NHƯNG BẰNG SỢI DÂY TỰ TẠO! Người đứng bịt mắt, bị trói, bao quanh bởi kiếm — nhưng nếu nhìn kỹ, sợi dây khá lỏng và cô ấy có thể bước ra. ĐÂY LÀ NHẬN THỨC TỰ GIỚI HẠN. Bạn đang nhốt chính mình trong một cái lồng tưởng tượng.",
        keywords: ["Bị kẹt trong tư duy", "Tự giới hạn bản thân", "Sợ hãi vô căn cứ"],
        practical: "💡 Câu hỏi quan trọng: Điều đang 'nhốt' bạn có thực sự tồn tại, hay chỉ là nỗi sợ trong đầu? Thử MỘT BƯỚC NHỎ ra khỏi vùng an toàn và xem điều gì xảy ra. Ví dụ: Sợ bị phán xét nếu thay đổi? Thử thay đổi nhỏ xem thực tế có tệ như bạn nghĩ không."
    },
    "Nine of Swords": {
        meaning: "😱 3 GIỜ SÁNG VÀ ĐẦU ÓC LOẠN! Người ngồi dậy giữa đêm, tay ôm mặt, 9 thanh kiếm trên tường — đây là nỗi lo lắng, hoảng loạn, và những suy nghĩ tiêu cực xoay vần không dứt. Tin tốt: ĐA PHẦN ĐIỀU BẠN LO SỢ SẼ KHÔNG XẢY RA.",
        keywords: ["Lo lắng và mất ngủ", "Suy nghĩ tiêu cực", "Hoảng loạn đêm khuya"],
        practical: "💡 Khi lo lắng quá: Viết ra TẤT CẢ những gì đang lo, rồi bên cạnh mỗi cái viết 'xác suất thực sự xảy ra?'. 90% sẽ thấy mình đang lo quá đà. Ví dụ: Không ngủ được vì lo công việc? Viết ra to-do list ngày mai rồi đi ngủ."
    },
    "Ten of Swords": {
        meaning: "💀 CHẠM ĐÁY RỒI — VÀ ĐÓ LÀ TIN TỐT! Người nằm xuống với 10 thanh kiếm cắm vào lưng — không thể tệ hơn nữa. Nhưng bầu trời phía xa đang hừng sáng. Đây là SỰ KẾT THÚC DỨT KHOÁT, sau đó chỉ có thể đi lên.",
        keywords: ["Chạm đáy hoàn toàn", "Kết thúc đau đớn nhưng dứt khoát", "Sau đêm tối là bình minh"],
        practical: "💡 Khi mọi thứ đã đến mức NÀY — chỉ có thể đi lên. Hãy thừa nhận rằng chương này đã THỰC SỰ KẾT THÚC, rồi bắt đầu chương mới. Ví dụ: Dự án thất bại hoàn toàn? Đây là thông tin quý giá — rút bài học và pivot."
    },
    "Page of Swords": {
        meaning: "🗡️ TRÍ TUỆ TRẺ TRUNG VÀ SẮC BÉN! Page of Swords đứng với thanh kiếm giơ cao, nhìn quanh cảnh giác — đầy tò mò, nhanh nhẹn về trí tuệ, nhưng đôi khi nói nhiều hơn làm. Tin tức đang đến, hoặc có người trẻ sắc sảo xuất hiện.",
        keywords: ["Tư duy sắc bén", "Tò mò trí tuệ", "Thông tin sắp đến"],
        practical: "💡 Hãy HỎI NHIỀU HƠN — câu hỏi đúng còn quan trọng hơn câu trả lời đúng. Nhưng cũng nhớ: biết nhiều không bằng làm được. Ví dụ: Đang nghiên cứu quá nhiều mà chưa bắt tay làm? Đã đủ thông tin rồi — hành động đi!"
    },
    "Knight of Swords": {
        meaning: "⚡ XÔNG VÀO KHÔNG SUY NGHĨ! Knight of Swords đang lao nhanh, kiếm giơ cao — đầy nhiệt huyết, quyết tâm, nhưng đôi khi bỏ qua hậu quả. Tốc độ và quyết tâm là sức mạnh, nhưng cần chút suy nghĩ trước khi xông.",
        keywords: ["Hành động nhanh và quyết", "Trực tiếp và thẳng thắn", "Liều lĩnh cần kiểm soát"],
        practical: "💡 Năng lượng này là TỐT — hãy dùng nó! Nhưng dành 10 phút để lên kế hoạch trước khi lao vào. Ví dụ: Muốn confrontation ai đó? Biết TRƯỚC bạn muốn kết quả gì, rồi mới nói chuyện."
    },
    "Queen of Swords": {
        meaning: "👑⚔️ BÀ HOÀNG CỦA SỰ THẬT VÀ TRÍ TUỆ! Queen of Swords ngồi thẳng, thanh kiếm giơ cao, mắt nhìn xa — bà đã trải qua đau khổ và trở nên SẮC BÉN, THỰC DỤNG VÀ KHÔNG TỰ LỪA DỐI. Bà nhìn thấy sự thật mà người khác né tránh.",
        keywords: ["Trí tuệ sắc sảo", "Độc lập và thực dụng", "Sự thật không khoan nhượng"],
        practical: "💡 Đây là lúc nhìn thẳng vào thực tế MÀ KHÔNG VIỆN LÝ. Hỏi bản thân: 'Sự thật ở đây là gì?' và chấp nhận nó dù có dễ nghe hay không. Ví dụ: Ai đó đang không tôn trọng bạn? Queen of Swords nói: đặt ranh giới RÕ RÀNG."
    },
    "King of Swords": {
        meaning: "👑⚔️ VUA CỦA CÔNG LÝ VÀ TRÍ TUỆ TỐI CAO! King of Swords ngồi thẳng, nhìn thẳng — đây là biểu tượng của tư duy logic, sự công bằng, và khả năng đưa ra quyết định khó mà không bị cảm xúc chi phối. Luật lệ, nguyên tắc, và lý trí trị vì.",
        keywords: ["Tư duy logic tối cao", "Công lý và nguyên tắc", "Quyết định không cảm xúc"],
        practical: "💡 Lúc này cần TƯ DUY LẠNH — đặt cảm xúc sang một bên và nhìn vào SỰ KIỆN, DỮ LIỆU, HẬU QUẢ. Ví dụ: Đang phải đưa ra quyết định khó về nhân sự? Hãy dựa vào tiêu chí khách quan, không phải cảm giác."
    }
};

// ==========================================
// MINOR ARCANA - PENTACLES (Đất, vật chất, tài chính)
// ==========================================
const enhancedPentaclesVN = {
    "Ace of Pentacles": {
        meaning: "💰 CƠ HỘI VẬT CHẤT MỚI! Bàn tay vũ trụ chìa ra đồng tiền vàng — đây là khởi đầu của một cơ hội tài chính, dự án kinh doanh, hoặc nền tảng vật chất mới. Tiền bạc, sức khỏe, hoặc nguồn lực thực tế đang được trao cho bạn. HÃY CẦM LẤY!",
        keywords: ["Cơ hội tài chính mới", "Nền tảng vật chất", "Khởi đầu thịnh vượng"],
        practical: "💡 Khi cơ hội kiếm tiền hoặc đầu tư xuất hiện — đừng bỏ lỡ. Nhưng hãy NGHIÊN CỨU kỹ trước khi đặt cược. Ví dụ: Ai đó vừa đề xuất cơ hội kinh doanh? Hãy nghiên cứu cẩn thận trong 48 giờ rồi quyết định."
    },
    "Two of Pentacles": {
        meaning: "🤹 ĐANG TUNG HỨNG NHIỀU VIỆC CÙNG LÚC! Người đứng tung hứng hai đồng tiền trong hình số 8 vô cực — bạn đang cân bằng nhiều trách nhiệm, dự án, hoặc nguồn thu nhập. Khéo léo là chìa khóa. Nhưng đừng tung quá nhiều cùng lúc!",
        keywords: ["Cân bằng nhiều trách nhiệm", "Linh hoạt tài chính", "Quản lý đa nhiệm"],
        practical: "💡 List ra mọi thứ đang phải cân bằng và đặt PRIORITY. Một số thứ có thể được DELEGATE hoặc hoãn lại. Ví dụ: Có 2 nguồn thu nhập cùng một lúc? Xem cái nào đang cho nhiều giá trị hơn để tập trung."
    },
    "Three of Pentacles": {
        meaning: "🏗️ TEAMWORK MAKES THE DREAM WORK! Ba người đang làm việc cùng nhau — kiến trúc sư, thợ thủ công, và người bảo trợ. Đây là lúc HỢP TÁC, học hỏi từ người khác, và xây dựng cái gì đó có giá trị thực tế. Kỹ năng của bạn đang được công nhận.",
        keywords: ["Hợp tác và teamwork", "Kỹ năng được công nhận", "Xây dựng cùng nhau"],
        practical: "💡 Đừng CỐ LÀM MỌI THỨ MỘT MÌNH! Hãy tìm những người bổ trợ kỹ năng cho bạn và hợp tác. Ví dụ: Bạn giỏi ý tưởng nhưng dở kỹ thuật? Tìm đối tác kỹ thuật thay vì tự học mọi thứ."
    },
    "Four of Pentacles": {
        meaning: "🤑 ÔM TIỀN QUÁ CHẶT! Người ngồi ôm chặt 4 đồng tiền — sợ mất, sợ cho đi, sợ thay đổi. Đây là lá bài của sự KÌM HÃM TÀI CHÍNH VÀ TÂM LÝ. Bảo vệ tài sản là tốt — nhưng đến mức không dám đầu tư hay chia sẻ thì lại cản trở tăng trưởng.",
        keywords: ["Keo kiệt và sợ mất", "Bảo vệ thái quá", "Cần học cách buông tay"],
        practical: "💡 Tiền không phải đế giữ mãi — tiền là để CHẢY. Đầu tư vào bản thân, đầu tư vào mối quan hệ, đầu tư vào dự án. Ví dụ: Có khoản tiết kiệm đang để ngân hàng với lãi suất thấp? Hãy research cách đầu tư thông minh hơn."
    },
    "Five of Pentacles": {
        meaning: "❄️ LẠNH VÀ KHÓ KHĂN. Hai người đang đi trong bão tuyết, bên cạnh cửa sổ nhà thờ sáng ấm mà không vào — đây là giai đoạn TÀI CHÍNH KHÓ KHĂN, cảm giác bị bỏ lại, hoặc tâm lý nghèo nàn. Nhưng luôn có sự trợ giúp — chỉ cần NHÌN LÊN.",
        keywords: ["Khó khăn tài chính", "Cảm giác bị bỏ rơi", "Trợ giúp đang ở gần"],
        practical: "💡 Đừng ngại XIN GIÚP ĐỠ khi cần. Và đừng đắm chìm trong cảm giác khổ mà quên nhìn xung quanh có gì có thể tận dụng. Ví dụ: Đang khó về tài chính? Tìm hiểu các chương trình hỗ trợ, vay ưu đãi, hoặc nhờ mentor kinh nghiệm."
    },
    "Six of Pentacles": {
        meaning: "⚖️💰 GIVE AND TAKE! Người giàu đang cho người nghèo tiền trong khi cân nhắc — đây là lúc của SỰ CHO ĐI VÀ NHẬN LẠI. Bạn có thể là người cho (mentor, hỗ trợ) hoặc người nhận. Dòng chảy tài chính và năng lượng đang được cân bằng.",
        keywords: ["Cho đi và nhận lại", "Từ thiện và hào phóng", "Dòng chảy tài chính"],
        practical: "💡 Khi bạn có đủ — HÃY CHO ĐI. Không chỉ tiền — mà cả thời gian, kiến thức, cơ hội. Điều bạn cho đi sẽ quay lại nhân đôi. Ví dụ: Mentor một người trẻ hơn, chia sẻ kiến thức miễn phí — bạn sẽ nhận lại theo cách bạn không ngờ."
    },
    "Seven of Pentacles": {
        meaning: "🌱 TRỒNG RỒI ĐỨNG NHÌN CHỜ! Người nông dân đứng tựa vào xẻng, nhìn cây trồng — đây là giai đoạn ĐÁNH GIÁ TIẾN ĐỘ và CHỜ ĐỢI KẾT QUẢ. Bạn đã đầu tư công sức rồi — giờ hãy kiên nhẫn và xem xem có cần điều chỉnh gì không.",
        keywords: ["Đánh giá đầu tư", "Kiên nhẫn chờ kết quả", "Nhìn lại để điều chỉnh"],
        practical: "💡 Ngồi lại và đánh giá: Những gì bạn đang ĐẦU TƯ (thời gian, tiền, công sức) có đang cho ra KẾT QUẢ xứng đáng không? Điều chỉnh nếu cần. Ví dụ: Tập gym 3 tháng rồi — kết quả ra sao? Có cần thay đổi chế độ ăn hay bài tập không?"
    },
    "Eight of Pentacles": {
        meaning: "🔨 ĐANG MÀI GIŨA KỸ NĂNG! Thợ thủ công chăm chú đục đẽo từng đồng tiền — đây là lá bài của SỰ CHUYÊN TÂM, LUYỆN TẬP, VÀ NÂNG CAO TAY NGHỀ. Làm đi làm lại cho đến khi hoàn hảo. Đây là giai đoạn học nghề và trở thành chuyên gia.",
        keywords: ["Luyện tập và chuyên nghiệp", "Nâng cao kỹ năng", "Tập trung và kiên trì"],
        practical: "💡 Muốn giỏi ở lĩnh vực nào? Hãy LUYỆN TẬP CÓ CHỦ ĐÍCH mỗi ngày — không phải chỉ làm cho xong. Ví dụ: Muốn giỏi viết? Viết 500 chữ mỗi ngày, đọc và chỉnh sửa nghiêm túc, học từ người giỏi hơn."
    },
    "Nine of Pentacles": {
        meaning: "👩‍🌾✨ ĐỘC LẬP VÀ TỰ CHỦ! Người phụ nữ đứng trong vườn nho thịnh vượng, chim ưng trên tay — bà đã xây dựng cuộc sống LUX bằng chính nỗ lực của mình. Đây là lúc tận hưởng thành quả MỘT MÌNH mà không cần ai approve.",
        keywords: ["Độc lập tài chính", "Tự chủ và thịnh vượng", "Tận hưởng thành quả"],
        practical: "💡 Hãy TỰ THƯỞNG cho mình xứng đáng với công sức đã bỏ ra. Và nếu chưa đến giai đoạn này — hãy hỏi: Bạn cần làm gì để TỰ CHỦ hơn về tài chính? Ví dụ: Tự thưởng bản thân một trải nghiệm tốt — không cần ai cho phép."
    },
    "Ten of Pentacles": {
        meaning: "🏡👨‍👩‍👧‍👦💰 DI SẢN VÀ THỊNH VƯỢNG THẾ HỆ! Gia đình nhiều thế hệ đứng trước ngôi nhà lớn — đây là lá bài của SỰ GIÀU CÓ BỀN VỮNG, gia đình hạnh phúc, và di sản được truyền lại. Không chỉ kiếm tiền cho mình — mà xây dựng cái gì đó TRƯỜNG TỒN.",
        keywords: ["Di sản gia đình", "Thịnh vượng bền vững", "Thành công nhiều thế hệ"],
        practical: "💡 Hãy nghĩ dài hơn: Bạn đang XÂY DỰNG GÌ có thể kéo dài sau khi bạn không còn ở đó? Ví dụ: Đầu tư vào giáo dục con cái, xây dựng thương hiệu gia đình, hoặc tạo ra tài sản thực sự bền vững."
    },
    "Page of Pentacles": {
        meaning: "📚💰 HỌC SINH CHĂM CHỈ VỀ THẾ GIỚI THỰC! Page of Pentacles nhìn chằm chằm vào đồng tiền với sự tò mò — người trẻ đang học về tiền bạc, kinh doanh, và thế giới thực. Tin tức về cơ hội học nghề hoặc dự án mới đang đến.",
        keywords: ["Học hỏi về vật chất", "Cơ hội thực tập/học nghề", "Tư duy thực tế"],
        practical: "💡 Học về TIỀN và KINH DOANH ngay từ bây giờ — dù bạn bao nhiêu tuổi. Kiến thức tài chính là nền tảng. Ví dụ: Đọc 1 cuốn sách về tài chính cá nhân trong tháng này."
    },
    "Knight of Pentacles": {
        meaning: "🐢💪 CHẬM MÀ CHẮC! Knight of Pentacles cưỡi ngựa đứng yên — không phóng như các Knight khác. Đây là sự KIÊN ĐỊNH, TRÁCH NHIỆM, và XÂY DỰNG TỪNG BƯỚC. Không sexy — nhưng hiệu quả. Làm đúng hơn làm nhanh.",
        keywords: ["Kiên định và trách nhiệm", "Chậm mà chắc", "Đáng tin cậy"],
        practical: "💡 Đây KHÔNG PHẢI lúc để liều hoặc nhảy bước. Hãy LÀM TỪNG BƯỚC một cách chắc chắn và đáng tin cậy. Ví dụ: Đang xây dựng dự án? Deliver từng milestone nhỏ đúng hẹn — uy tín được xây bằng sự nhất quán."
    },
    "Queen of Pentacles": {
        meaning: "🌿👑 BÀ HOÀNG CỦA SỰ THỊNH VƯỢNG VÀ CHĂM SÓC! Queen of Pentacles ngồi giữa thiên nhiên tươi tốt với con thỏ — bà vừa thực dụng vừa ấm áp, vừa kiếm tiền giỏi vừa xây gia đình đẹp. Cân bằng hoàn hảo giữa vật chất và tình cảm.",
        keywords: ["Thịnh vượng thực tế", "Chăm sóc và nuôi dưỡng", "Cân bằng vật chất-cảm xúc"],
        practical: "💡 Hãy chăm sóc CÙNG LÚC: ngôi nhà, sức khỏe, tài chính VÀ các mối quan hệ. Không cái nào được bỏ bê. Ví dụ: Hôm nay vừa check tài chính, vừa nấu ăn ngon cho gia đình — hai thứ đó không mâu thuẫn."
    },
    "King of Pentacles": {
        meaning: "👑💎 VUA CỦA SỰ GIÀU CÓ VÀ THÀNH CÔNG! King of Pentacles ngồi trên ngai được trang trí bằng nho và bò tót — đây là sự thành công đỉnh cao về vật chất, được xây dựng bằng NỖ LỰC VÀ CHIẾN LƯỢC qua nhiều năm. Đế vương của thế giới thực.",
        keywords: ["Thành công vật chất đỉnh cao", "Lãnh đạo thực dụng", "Di sản và quyền lực"],
        practical: "💡 Thành công kiểu này đến từ SỰ NHẤT QUÁN THEO THỜI GIAN, không phải may mắn. Hỏi: Bạn đang xây dựng 'đế chế' của mình như thế nào mỗi ngày? Ví dụ: Tạo hệ thống, tự động hóa, và đầu tư dài hạn — không chỉ làm việc theo giờ."
    }
};

// ==========================================
// TÍCH HỢP VÀO APP
// ==========================================
// Merge tất cả vào một object duy nhất để dễ truy xuất
const enhancedVietnameseAll = {
    ...enhancedTarotMajorVN,
    ...enhancedWandsVN,
    ...enhancedCupsVN,
    ...enhancedSwordsVN,
    ...enhancedPentaclesVN
};

// Override VN meanings trong tarotDeepInterpretations nếu đã load
function applyEnhancedVietnamese() {
    if (typeof tarotDeepInterpretations === 'undefined') {
        setTimeout(applyEnhancedVietnamese, 300);
        return;
    }
    let applied = 0;
    Object.keys(enhancedVietnameseAll).forEach(cardName => {
        if (tarotDeepInterpretations[cardName]) {
            const enhanced = enhancedVietnameseAll[cardName];
            // Override meaning và practical vào vn.deep và vn.events tương ứng
            if (enhanced.meaning) {
                tarotDeepInterpretations[cardName].vn._enhancedMeaning = enhanced.meaning;
            }
            if (enhanced.practical) {
                tarotDeepInterpretations[cardName].vn._enhancedPractical = enhanced.practical;
            }
            if (enhanced.keywords) {
                tarotDeepInterpretations[cardName].vn._enhancedKeywords = enhanced.keywords;
            }
            applied++;
        }
    });
    console.log('[Enhanced VN] ✅ Applied to ' + applied + '/78 cards');
}

applyEnhancedVietnamese();

console.log('✨ Enhanced Vietnamese COMPLETE loaded: 78 lá đầy đủ (22 Major + 56 Minor Arcana)');
console.log('📊 Total cards with enhanced VN:', Object.keys(enhancedVietnameseAll).length);
