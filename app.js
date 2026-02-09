const tarotData = [
    { en: { name: "The Fool", meaning: "Beginnings, innocence, a free spirit.", keywords: ["New Journey", "Leap of Faith"] }, vn: { name: "The Fool", meaning: "Một khởi đầu mới đầy vô tư, tin tưởng tuyệt đối vào hành trình của linh hồn.", keywords: ["Hành trình mới", "Sự ngây thơ"] }, element: "Air", astrology: "Uranus" },
    { en: { name: "The Magician", meaning: "Manifestation, resourcefulness, power.", keywords: ["Creation", "Willpower"] }, vn: { name: "The Magician", meaning: "Năng lực biểu hiện ý chí thành hiện thực, sự tháo vát và quyền năng cá nhân.", keywords: ["Sáng tạo", "Sức mạnh ý chí"] }, element: "Air", astrology: "Mercury" },
    { en: { name: "The High Priestess", meaning: "Intuition, subconscious, mystery.", keywords: ["Secrets", "Wisdom"] }, vn: { name: "The High Priestess", meaning: "Lắng nghe tiếng nói thầm lặng của trực giác và những bí mật của tiềm thức.", keywords: ["Bí mật bản thể", "Trí tuệ tâm linh"] }, element: "Water", astrology: "Moon" },
    { en: { name: "The Empress", meaning: "Femininity, nature, abundance.", keywords: ["Fertility", "Creativity"] }, vn: { name: "The Empress", meaning: "Sự nuôi dưỡng, tình mẫu tử và sự trù phú của thiên nhiên.", keywords: ["Sự phong nhiêu", "Sáng tạo"] }, element: "Earth", astrology: "Venus" },
    { en: { name: "The Emperor", meaning: "Authority, structure, leadership.", keywords: ["Stability", "Structure"] }, vn: { name: "The Emperor", meaning: "Thiết lập trật tự, kỷ luật và khẳng định quyền lực cá nhân.", keywords: ["Sự ổn định", "Cấu trúc kỷ luật"] }, element: "Fire", astrology: "Aries" },
    { en: { name: "The Hierophant", meaning: "Tradition, guidance, belief.", keywords: ["Guidance", "Education"] }, vn: { name: "The Hierophant", meaning: "Sự kết nối với các giá trị truyền thống, hệ thống niềm tin và sự chỉ dẫn đạo đức.", keywords: ["Sự chỉ dẫn", "Truyền thống"] }, element: "Earth", astrology: "Taurus" },
    { en: { name: "The Lovers", meaning: "Relationships, choices, harmony.", keywords: ["Partnership", "Choice"] }, vn: { name: "The Lovers", meaning: "Sự hòa hợp, kết nối tâm giao và những lựa chọn quan trọng của con tim.", keywords: ["Sự đồng điệu", "Sự lựa chọn"] }, element: "Air", astrology: "Gemini" },
    { en: { name: "The Chariot", meaning: "Willpower, control, determination.", keywords: ["Victory", "Momentum"] }, vn: { name: "The Chariot", meaning: "Dùng ý chí sắt đá để kiểm soát các lực lượng đối lập và tiến tới thành công.", keywords: ["Chiến thắng", "Sự quyết tâm"] }, element: "Water", astrology: "Cancer" },
    { en: { name: "Strength", meaning: "Courage, influence, compassion.", keywords: ["Patience", "Inner Will"] }, vn: { name: "Strength", meaning: "Lòng can đảm nội tâm kết hợp với sự bao dung và kiên nhẫn.", keywords: ["Sức mạnh nội tại", "Lòng trắc ẩn"] }, element: "Fire", astrology: "Leo" },
    { en: { name: "The Hermit", meaning: "Introspection, inner guidance.", keywords: ["Solitude", "Wisdom"] }, vn: { name: "The Hermit", meaning: "Rút lui khỏi thế giới bên ngoài để tìm kiếm chân lý trong sự tĩnh lặng.", keywords: ["Sự chiêm nghiệm", "Soi sáng"] }, element: "Earth", astrology: "Virgo" },
    { en: { name: "Wheel of Fortune", meaning: "Fate, luck, cycles.", keywords: ["Change", "Destiny"] }, vn: { name: "Wheel of Fortune", meaning: "Sự luân chuyển của số phận, những chu kỳ thay đổi không ngừng.", keywords: ["Định mệnh", "Sự thay đổi"] }, element: "Fire", astrology: "Jupiter" },
    { en: { name: "Justice", meaning: "Fairness, truth, law.", keywords: ["Balance", "Fairness"] }, vn: { name: "Justice", meaning: "Sự công minh, tính nhân quả và tìm kiếm sự cân bằng trong sự thật.", keywords: ["Công bằng", "Luật nhân quả"] }, element: "Air", astrology: "Libra" },
    { en: { name: "The Hanged Man", meaning: "Perspectives, surrender, letting go.", keywords: ["Wait", "Insight"] }, vn: { name: "The Hanged Man", meaning: "Thay đổi góc nhìn bằng sự buông bỏ và chấp nhận chờ đợi một cách thấu suốt.", keywords: ["Sự hy sinh", "Thấu suốt"] }, element: "Water", astrology: "Neptune" },
    { en: { name: "Death", meaning: "Endings, transformation, transition.", keywords: ["Rebirth", "Closure"] }, vn: { name: "Death", meaning: "Sự kết thúc, chuyển hóa, quá độ để mở ra chương mới.", keywords: ["Tái sinh", "Khép lại"] }, element: "Water", astrology: "Scorpio" },
    { en: { name: "Temperance", meaning: "Balance, moderation, purpose.", keywords: ["Harmony", "Moderation"] }, vn: { name: "Temperance", meaning: "Sự cân bằng, tiết chế, tìm thấy ý nghĩa trong sự hài hòa.", keywords: ["Hài hòa", "Kiểm soát"] }, element: "Fire", astrology: "Sagittarius" },
    { en: { name: "The Devil", meaning: "Attachment, addiction, some restriction.", keywords: ["Materialism", "Temptation"] }, vn: { name: "The Devil", meaning: "Sự ràng buộc, cám dỗ, hạn chế do vật chất hoặc thói quen.", keywords: ["Vật chất", "Cám dỗ"] }, element: "Earth", astrology: "Capricorn" },
    { en: { name: "The Tower", meaning: "Upheaval, chaos, revelation.", keywords: ["Awakening", "Collapse"] }, vn: { name: "The Tower", meaning: "Biến động dữ dội, sự sụp đổ của những nền tảng cũ để thức tỉnh.", keywords: ["Thức tỉnh", "Sụp đổ"] }, element: "Fire", astrology: "Mars" },
    { en: { name: "The Star", meaning: "Hope, inspiration, renewal.", keywords: ["Healing", "Renewal"] }, vn: { name: "The Star", meaning: "Niềm hy vọng, cảm hứng vô tận và sự chữa lành tâm hồn.", keywords: ["Chữa lành", "Làm mới"] }, element: "Air", astrology: "Aquarius" },
    { en: { name: "The Moon", meaning: "Illusion, fear, subconscious.", keywords: ["Confusion", "Instinct"] }, vn: { name: "The Moon", meaning: "Sự mơ hồ, nỗi sợ mơ hồ, lắng nghe trực giác từ tiềm thức.", keywords: ["Bối rối", "Bản năng"] }, element: "Water", astrology: "Pisces" },
    { en: { name: "The Sun", meaning: "Positivity, fun, warmth.", keywords: ["Joy", "Success"] }, vn: { name: "The Sun", meaning: "Năng lượng tích cực, sự ấm áp, thành công rực rỡ.", keywords: ["Niềm vui", "Thành công"] }, element: "Fire", astrology: "Sun" },
    { en: { name: "Judgement", meaning: "Rebirth, inner calling, evaluation.", keywords: ["Reflection", "Awakening"] }, vn: { name: "Phán Xét", meaning: "Sự tái sinh, tiếng gọi linh hồn, đánh giá lại hành trình đã qua.", keywords: ["Hồi đáp", "Thức tỉnh"] }, element: "Fire", astrology: "Pluto" },
    { en: { name: "The World", meaning: "Completion, wholeness, travel.", keywords: ["Success", "Fulfillment"] }, vn: { name: "Thế Giới", meaning: "Sự hoàn tất, trọn vẹn, đạt đến đích đến của hành trình.", keywords: ["Thành công", "Mãn nguyện"] }, element: "Earth", astrology: "Saturn" },
    // Minor Arcana
    { en: { name: "Ace of Wands", keywords: ["Inspiration", "Action"], meaning: "A creative spark." }, vn: { name: "Ace of Wands", keywords: ["Cảm hứng sáng tạo", "Hành động mãnh liệt"], meaning: "Khởi đầu của một ngọn lửa nhiệt huyết và ý tưởng mới." }, element: "Fire" },
    { en: { name: "Two of Wands", keywords: ["Planning", "Future"], meaning: "Progress and decisions." }, vn: { name: "Two of Wands", keywords: ["Kế hoạch tầm nhìn", "Ước vọng tương lai"], meaning: "Sự cân nhắc và chuẩn bị cho một hành trình lớn hơn." }, element: "Fire" },
    { en: { name: "Three of Wands", keywords: ["Growth", "Expansion"], meaning: "Foresight and waiting." }, vn: { name: "Three of Wands", keywords: ["Sự bành trướng", "Tầm nhìn xa"], meaning: "Tự tin nhìn về phía trước và chờ đợi kết quả từ những nỗ lực." }, element: "Fire" },
    { en: { name: "Four of Wands", keywords: ["Home", "Stability"], meaning: "Celebration and harmony." }, vn: { name: "Four of Wands", keywords: ["Sự ổn định", "Lễ ăn mừng"], meaning: "Hài lòng với nền tảng vững chắc và tận hưởng niềm vui thành quả." }, element: "Fire" },
    { en: { name: "Five of Wands", keywords: ["Conflict", "Competition"], meaning: "Minor struggles." }, vn: { name: "Five of Wands", keywords: ["Sự cạnh tranh", "Xung đột nhỏ"], meaning: "Đấu tranh để khẳng định bản thân hoặc những tranh cãi vụn vặt." }, element: "Fire" },
    { en: { name: "Six of Wands", keywords: ["Victory", "Success"], meaning: "Public recognition." }, vn: { name: "Six of Wands", keywords: ["Chiến thắng", "Sự vinh danh"], meaning: "Nhận được sự công nhận và tôn trọng từ xã hội cho những thành tựu." }, element: "Fire" },
    { en: { name: "Seven of Wands", keywords: ["Defense", "Courage"], meaning: "Perseverance." }, vn: { name: "Seven of Wands", keywords: ["Sự bảo vệ", "Lòng dũng cảm"], meaning: "Kiên cường đứng vững trước những thử thách và áp lực từ bên ngoài." }, element: "Fire" },
    { en: { name: "Eight of Wands", keywords: ["Speed", "Action"], meaning: "Swift movement." }, vn: { name: "Eight of Wands", keywords: ["Tốc độ", "Thông điệp nhanh"], meaning: "Mọi thứ tiến triển rất nhanh, hành động quyết đoán là cần thiết." }, element: "Fire" },
    { en: { name: "Nine of Wands", keywords: ["Persistence", "Resilience"], meaning: "Resilience." }, vn: { name: "Nine of Wands", keywords: ["Kiên trì", "Sức bền"], meaning: "Trạng thái phòng thủ cuối cùng, sự bền bỉ trước khi đạt tới đích." }, element: "Fire" },
    { en: { name: "Ten of Wands", keywords: ["Burden", "Responsibility"], meaning: "Overwhelm." }, vn: { name: "Ten of Wands", keywords: ["Gánh nặng", "Trách nhiệm"], meaning: "Sự quá tải do ôm đồm quá nhiều việc, cần học cách buông bỏ." }, element: "Fire" },
    { en: { name: "Page of Wands", keywords: ["Enthusiasm", "Discovery"], meaning: "Exploration." }, vn: { name: "Page of Wands", keywords: ["Hào hứng", "Khám phá"], meaning: "Tinh thần dấn thân, đầy tò mò và sẵn sàng thử sức với cái mới." }, element: "Fire" },
    { en: { name: "Knight of Wands", keywords: ["Adventure", "Passion"], meaning: "Impulsive action." }, vn: { name: "Knight of Wands", keywords: ["Phiêu lưu", "Đam mê mãnh liệt"], meaning: "Hành động tràn đầy năng lượng nhưng đôi khi thiếu đi sự suy tính kỹ lưỡng." }, element: "Fire" },
    { en: { name: "Queen of Wands", keywords: ["Confidence", "Vibrancy"], meaning: "Independence." }, vn: { name: "Queen of Wands", keywords: ["Sự tự tin", "Sức quyến rũ"], meaning: "Người phụ nữ độc lập, nhiệt huyết và luôn tràn đầy năng lượng sống." }, element: "Fire" },
    { en: { name: "King of Wands", keywords: ["Vision", "Entrepreneurship"], meaning: "Leadership." }, vn: { name: "King of Wands", keywords: ["Tầm nhìn lãnh đạo", "Sự uyên bác"], meaning: "Người dẫn dắt đầy kinh nghiệm, quyết đoán và có tầm nhìn xa trông rộng." }, element: "Fire" },
    { en: { name: "Ace of Cups", keywords: ["Love", "Emotion"], meaning: "Emotional beginning." }, vn: { name: "Ace of Cups", keywords: ["Tình yêu thuần khiết", "Cảm xúc dâng trào"], meaning: "Khởi đầu của một tình cảm mới, sự đong đầy hạnh phúc trong tâm hồn." }, element: "Water" },
    { en: { name: "Two of Cups", keywords: ["Union", "Harmony"], meaning: "Mutual attraction." }, vn: { name: "Two of Cups", keywords: ["Sự kết nối", "Hòa hợp tâm giao"], meaning: "Mối quan hệ đôi bên cùng có lợi, sự thấu cảm và thu hút lẫn nhau." }, element: "Water" },
    { en: { name: "Three of Cups", keywords: ["Community", "Celebration"], meaning: "Friendship." }, vn: { name: "Three of Cups", keywords: ["Tình bạn", "Sự sẻ chia"], meaning: "Niềm vui từ sự kết nối cộng đồng, cùng nhau ăn mừng hạnh phúc." }, element: "Water" },
    { en: { name: "Four of Cups", keywords: ["Apathy", "Boredom"], meaning: "Reevaluation." }, vn: { name: "Four of Cups", keywords: ["Sự thờ ơ", "Lòng chán nản"], meaning: "Giai đoạn tạm dừng để nhìn lại cảm xúc, đôi khi bỏ lỡ những cơ hội trước mắt." }, element: "Water" },
    { en: { name: "Five of Cups", keywords: ["Loss", "Grief"], meaning: "Regret." }, vn: { name: "Five of Cups", keywords: ["Sự hối tiếc", "Nỗi đau mất mát"], meaning: "Tập trung quá nhiều vào điều đã mất mà quên đi những cơ hội còn lại." }, element: "Water" },
    { en: { name: "Six of Cups", keywords: ["Nostalgia", "Childhood"], meaning: "Memories." }, vn: { name: "Six of Cups", keywords: ["Ký ức tuổi thơ", "Sự hồn nhiên"], meaning: "Tìm về những kỷ niệm đẹp trong quá khứ hoặc những món quà từ tâm hồn." }, element: "Water" },
    { en: { name: "Seven of Cups", keywords: ["Choices", "Illusion"], meaning: "Fantasies." }, vn: { name: "Seven of Cups", keywords: ["Ảo tưởng", "Nhiều lựa chọn"], meaning: "Đang đứng trước quá nhiều lựa chọn nhưng cần cẩn trọng để không bị mê hoặc." }, element: "Water" },
    { en: { name: "Eight of Cups", keywords: ["Departure", "Search"], meaning: "Seeking truth." }, vn: { name: "Eight of Cups", keywords: ["Rời bỏ", "Tìm kiếm chân lý"], meaning: "Buông bỏ những cảm xúc đã cạn kiệt để đi tìm một ý nghĩa tâm linh cao hơn." }, element: "Water" },
    { en: { name: "Nine of Cups", keywords: ["Luxury", "Satisfaction"], meaning: "Gratitude." }, vn: { name: "Nine of Cups", keywords: ["Sự mãn nguyện", "Hài lòng"], meaning: "Ước nguyện thành sự thật, sự tận hưởng thành quả và lòng biết ơn." }, element: "Water" },
    { en: { name: "Ten of Cups", keywords: ["Happiness", "Bliss"], meaning: "Fulfillment." }, vn: { name: "Ten of Cups", keywords: ["Hạnh phúc trọn vẹn", "Sự viên mãn"], meaning: "Sự hòa hợp tuyệt đối trong gia đình và các mối quan hệ tình cảm." }, element: "Water" },
    { en: { name: "Page of Cups", keywords: ["Intuition", "Message"], meaning: "Dreaminess." }, vn: { name: "Page of Cups", keywords: ["Thông điệp tình cảm", "Sự nhạy cảm"], meaning: "Một tin tức về mặt cảm xúc hoặc một khởi đầu đầy mơ mộng và trực giác." }, element: "Water" },
    { en: { name: "Knight of Cups", keywords: ["Romance", "Proposal"], meaning: "Invitation." }, vn: { name: "Knight of Cups", keywords: ["Lời mời lãng mạn", "Sự theo đuổi"], meaning: "Một người mang đến những cơ hội về tình cảm, sự hào hoa và mơ mộng." }, element: "Water" },
    { en: { name: "Queen of Cups", keywords: ["Compassion", "Intuition"], meaning: "Comfort." }, vn: { name: "Queen of Cups", keywords: ["Lòng trắc ẩn", "Trực giác sắc bén"], meaning: "Sự hiện thân của tình thương, sự thấu cảm sâu sắc và thế giới nội tâm phong phú." }, element: "Water" },
    { en: { name: "King of Cups", keywords: ["Diplomacy", "Balance"], meaning: "Wisdom." }, vn: { name: "King of Cups", keywords: ["Kỷ luật cảm xúc", "Sự sáng suốt"], meaning: "Khả năng cân bằng giữa lý trí và con tim, sự điềm tĩnh trước mọi sóng gió." }, element: "Water" },
    { en: { name: "Ace of Swords", keywords: ["Clarity", "Truth"], meaning: "Breakthrough." }, vn: { name: "Ace of Swords", keywords: ["Sự minh bạch", "Nhận thức mới"], meaning: "Sức mạnh của trí tuệ, một ý tưởng mang tính đột phá và sự thật được phơi bày." }, element: "Air" },
    { en: { name: "Two of Swords", keywords: ["Indecision", "Stalemate"], meaning: "Difficult choice." }, vn: { name: "Two of Swords", keywords: ["Sự do dự", "Bế tắc trí tuệ"], meaning: "Lựa chọn khó khăn, cần nhắm mắt để lắng nghe lý trí bên trong." }, element: "Air" },
    { en: { name: "Three of Swords", keywords: ["Heartbreak", "Sorrow"], meaning: "Separation." }, vn: { name: "Three of Swords", keywords: ["Sự tan vỡ", "Nỗi đau thấu tim"], meaning: "Thừa nhận nỗi đau tổn thương để bắt đầu quá trình chữa lành." }, element: "Air" },
    { en: { name: "Four of Swords", keywords: ["Rest", "Recovery"], meaning: "Quiet." }, vn: { name: "Four of Swords", keywords: ["Sự nghỉ ngơi", "Phục hồi tinh thần"], meaning: "Rút lui để hồi sức, sự tĩnh lặng cần thiết sau những mệt mỏi." }, element: "Air" },
    { en: { name: "Five of Swords", keywords: ["Conflict", "Betrayal"], meaning: "Defeat." }, vn: { name: "Five of Swords", keywords: ["Sự phản bội", "Chiến thắng cay đắng"], meaning: "Xung đột mà người thắng cũng chịu nhiều tổn thất, sự tư lợi." }, element: "Air" },
    { en: { name: "Six of Swords", keywords: ["Transition", "Healing"], meaning: "Moving on." }, vn: { name: "Six of Swords", keywords: ["Sự chuyển giao", "Chữa lành dần dần"], meaning: "Rời bỏ vũng lầy để tìm đến một bờ bến yên bình hơn." }, element: "Air" },
    { en: { name: "Seven of Swords", keywords: ["Deception", "Stealth"], meaning: "Hidden tactics." }, vn: { name: "Seven of Swords", keywords: ["Sự lén lút", "Kế sách ngầm"], meaning: "Cần sự khôn ngoan và đôi khi là những bước đi phi truyền thống." }, element: "Air" },
    { en: { name: "Eight of Swords", keywords: ["Restriction", "Trapped"], meaning: "Analysis paralysis." }, vn: { name: "Eight of Swords", keywords: ["Bị giam cầm", "Tư duy bế tắc"], meaning: "Những hạn chế chủ yếu do chính tâm trí tự tạo ra, cần tự cởi trói." }, element: "Air" },
    { en: { name: "Nine of Swords", keywords: ["Anxiety", "Fear"], meaning: "Despair." }, vn: { name: "Nine of Swords", keywords: ["Sự lo âu", "Nỗi sợ đêm trường"], meaning: "Giai đoạn dằn vặt tinh thần, nỗi lo lắng quá mức cần được giải tỏa." }, element: "Air" },
    { en: { name: "Ten of Swords", keywords: ["Rock bottom", "Endings"], meaning: "Painful finish." }, vn: { name: "Ten of Swords", keywords: ["Chạm đáy nỗi đau", "Sự chấm dứt"], meaning: "Mọi thứ đã kết thúc, không thể tệ hơn được nữa, chỉ có thể vươn lên." }, element: "Air" },
    { en: { name: "Page of Swords", keywords: ["Vigilance", "Curiosity"], meaning: "Truth-seeking." }, vn: { name: "Page of Swords", keywords: ["Sự sắc sảo", "Sự tò mỏ"], meaning: "Tinh thần trẻ trung, nhanh nhạy và sẵn sàng học hỏi những sự thật mới." }, element: "Air" },
    { en: { name: "Knight of Swords", keywords: ["Ambition", "Intensity"], meaning: "Driven." }, vn: { name: "Knight of Swords", keywords: ["Hành động nhanh", "Tham vọng lớn"], meaning: "Lao thẳng về phía trước với sức mạnh trí tuệ nhưng đôi khi thiếu nhẫn nại." }, element: "Air" },
    { en: { name: "Queen of Swords", keywords: ["Independence", "Objective"], meaning: "Clarity." }, vn: { name: "Queen of Swords", keywords: ["Sự thấu suốt", "Khách quan"], meaning: "Người phụ nữ thông tuệ, nhìn thấu mọi ảo tượng và luôn tôn trọng sự thật." }, element: "Air" },
    { en: { name: "King of Swords", keywords: ["Authority", "Truth"], meaning: "Discipline." }, vn: { name: "King of Swords", keywords: ["Quyền uy trí tuệ", "Công minh"], meaning: "Bậc thầy về tư duy logic, sự kỷ luật và khả năng ra quyết định chính xác." }, element: "Air" },
    { en: { name: "Ace of Pentacles", keywords: ["Success", "Opportunity"], meaning: "Prosperity." }, vn: { name: "Ace of Pentacles", keywords: ["Cơ hội vật chất", "Sự thịnh vượng"], meaning: "Hạt giống tốt đẹp cho tài chính và sự ổn định lâu dài." }, element: "Earth" },
    { en: { name: "Two of Pentacles", keywords: ["Balance", "Adapting"], meaning: "Flexibility." }, vn: { name: "Two of Pentacles", keywords: ["Sự cân bằng", "Khả năng thích nghi"], meaning: "Quản lý nguồn lực linh hoạt trong những biến động của cuộc sống." }, element: "Earth" },
    { en: { name: "Three of Pentacles", keywords: ["Teamwork", "Skill"], meaning: "Mastery." }, vn: { name: "Three of Pentacles", keywords: ["Kỹ năng chuyên môn", "Xây dựng"], meaning: "Sự tinh thông trong công việc và khả năng hợp tác nhóm hiệu quả." }, element: "Earth" },
    { en: { name: "Four of Pentacles", keywords: ["Security", "Control"], meaning: "Tích trữ." }, vn: { name: "Four of Pentacles", keywords: ["Sự bảo thủ", "Giữ chặt nguồn lực"], meaning: "Cần sự ổn định nhưng tránh để nỗi sợ mất mát kìm hãm sự phát triển." }, element: "Earth" },
    { en: { name: "Five of Pentacles", keywords: ["Hardship", "Need"], meaning: "Insecurity." }, vn: { name: "Five of Pentacles", keywords: ["Sự thiếu thốn", "Thử thách khó khăn"], meaning: "Giai đoạn vất vả về vật chất nhưng luôn có những sự trợ giúp ẩn giấu." }, element: "Earth" },
    { en: { name: "Six of Pentacles", keywords: ["Generosity", "Charity"], meaning: "Equity." }, vn: { name: "Six of Pentacles", keywords: ["Lòng hào phóng", "Sự sẻ chia"], meaning: "Nhận được hoặc trao đi sự giúp đỡ, sự công bằng trong tài chính." }, element: "Earth" },
    { en: { name: "Seven of Pentacles", keywords: ["Investment", "Waiting"], meaning: "Evaluation." }, vn: { name: "Seven of Pentacles", keywords: ["Sự kiên nhẫn", "Đánh giá thành quả"], meaning: "Giai đoạn chờ đợi hạt giống nảy mầm và xem xét lại quá trình nỗ lực." }, element: "Earth" },
    { en: { name: "Eight of Pentacles", keywords: ["Diligence", "Craftsmanship"], meaning: "Education." }, vn: { name: "Eight of Pentacles", keywords: ["Sự cần mẫn", "Tay nghề tinh xảo"], meaning: "Tập trung rèn luyện kỹ năng và tỉ mỉ trong từng chi tiết công việc." }, element: "Earth" },
    { en: { name: "Nine of Pentacles", keywords: ["Abundance", "Grace"], meaning: "Independence." }, vn: { name: "Nine of Pentacles", keywords: ["Sự tự lập", "Hưởng thụ thành quả"], meaning: "Sự thành đạt cá nhân, tận hưởng cuộc sống chất lượng và tự do." }, element: "Earth" },
    { en: { name: "Ten of Pentacles", keywords: ["Legacy", "Wealth"], meaning: "Inheritance." }, vn: { name: "Ten of Pentacles", keywords: ["Di sản gia đình", "Sự giàu sang"], meaning: "Sự thịnh vượng bền vững và những giá trị truyền thống truyền lại qua các thế hệ." }, element: "Earth" },
    { en: { name: "Page of Pentacles", keywords: ["Ambition", "Loyalty"], meaning: "Opportunity." }, vn: { name: "Page of Pentacles", keywords: ["Sự thực tế", "Khởi đầu tài chính"], meaning: "Một tin tốt lành về công việc hoặc một cơ hội học hỏi mang tính thực tiễn." }, element: "Earth" },
    { en: { name: "Knight of Pentacles", keywords: ["Dependable", "Methodical"], meaning: "Steady." }, vn: { name: "Knight of Pentacles", keywords: ["Sự kiên định", "Sự ổn định"], meaning: "Làm việc có lộ trình, chậm rãi nhưng chắc chắn và cực kỳ đáng tin cậy." }, element: "Earth" },
    { en: { name: "Queen of Pentacles", keywords: ["Nurturing", "Practical"], meaning: "Domesticity." }, vn: { name: "Queen of Pentacles", keywords: ["Người mẹ hiền từ", "Sự sung túc"], meaning: "Quản lý cuộc sống ấm êm, chăm lo tốt cho gia đình và nguồn lực tài chính." }, element: "Earth" },
    { en: { name: "King of Pentacles", keywords: ["Abundance", "Stable"], meaning: "Provider." }, vn: { name: "King of Pentacles", keywords: ["Bậc thầy tài chính", "Thịnh vượng"], meaning: "Thành công rực rỡ trong kinh doanh, ổn định và có khả năng bảo hộ người khác." }, element: "Earth" },
];

const lenormandData = [
    { en: { name: "Rider", keywords: ["News", "Visitor"], meaning: "Speed and movement." }, vn: { name: "Rider", keywords: ["Tin tức nhanh", "Vị khách"], meaning: "Sự chuyển động và những tin tức mới sắp đến." }, element: "Air" },
    { en: { name: "Clover", keywords: ["Luck", "Surprise"], meaning: "Short-term happiness." }, vn: { name: "Clover", keywords: ["May mắn bất ngờ", "Niềm vui"], meaning: "Hạnh phúc ngắn hạn nhưng đầy hy vọng và thuận lợi." }, element: "Earth" },
    { en: { name: "Ship", keywords: ["Travel", "Distance"], meaning: "A journey or transition." }, vn: { name: "Ship", keywords: ["Hành trình xa", "Chuyển động"], meaning: "Những chuyến đi hoặc sự thay đổi lớn trong cuộc đời." }, element: "Water" },
    { en: { name: "House", keywords: ["Home", "Family"], meaning: "Domestic stability." }, vn: { name: "House", keywords: ["Sự an ổn", "Gia đình"], meaning: "Môi trường sống quen thuộc và sự vững chắc trong tổ ấm." }, element: "Earth" },
    { en: { name: "Tree", keywords: ["Health", "Growth"], meaning: "Long-term vitality." }, vn: { name: "Tree", keywords: ["Sức khỏe", "Sống thọ"], meaning: "Sự phát triển chậm rãi nhưng bền bỉ và sức sống dẻo dai." }, element: "Earth" },
    { en: { name: "Clouds", keywords: ["Confusion", "Doubts"], meaning: "Uncertainty or confusion." }, vn: { name: "Clouds", keywords: ["Sự bối rối", "Mơ hồ"], meaning: "Những rắc rối tạm thời cần thời gian để tan biến đi." }, element: "Air" },
    { en: { name: "Snake", keywords: ["Hidden", "Wisdom"], meaning: "Deception or hidden wisdom." }, vn: { name: "Snake", keywords: ["Sự lừa dối", "Khôn ngoan"], meaning: "Cần cảnh giác trước những cạm bẫy hoặc sự quyến rũ nguy hiểm." }, element: "Water" },
    { en: { name: "Coffin", keywords: ["Ending", "Transition"], meaning: "End of a cycle." }, vn: { name: "Coffin", keywords: ["Sự chấm dứt", "Bế tắc"], meaning: "Sự kết thúc hoàn toàn để chuẩn bị cho một cái mới ra đời." }, element: "Earth" },
    { en: { name: "Bouquet", keywords: ["Gift", "Happiness"], meaning: "Appreciation and social joy." }, vn: { name: "Bouquet", keywords: ["Món quà", "Sự trân trọng"], meaning: "Niềm vui xã hội, sự công nhận và những lời mời tốt đẹp." }, element: "Earth" },
    { en: { name: "Scythe", keywords: ["Decision", "Warning"], meaning: "Sudden cut or change." }, vn: { name: "Scythe", keywords: ["Quyết định nhanh", "Rủi ro"], meaning: "Sự cắt đứt đột ngột, nguy hiểm hoặc một hành động dứt khoát." }, element: "Fire" },
    { en: { name: "Whip", keywords: ["Conflict", "Repetition"], meaning: "Physical activity or arguments." }, vn: { name: "Whip", keywords: ["Xung đột", "Lặp lại"], meaning: "Sự tranh luận, hoạt động thể chất hoặc những vấn đề lặp đi lặp lại." }, element: "Fire" },
    { en: { name: "Birds", keywords: ["Communication", "Anxiety"], meaning: "Excitement and chatter." }, vn: { name: "Birds", keywords: ["Giao tiếp", "Sự lo lắng"], meaning: "Những cuộc trò chuyện hào hứng, tin đồn hoặc sự bồn chồn." }, element: "Air" },
    { en: { name: "Child", keywords: ["Newness", "Innocence"], meaning: "A small beginning." }, vn: { name: "Child", keywords: ["Sự mới mẻ", "Ngây thơ"], meaning: "Khởi đầu nhỏ bé, sự hồn nhiên hoặc một đứa trẻ thực thụ." }, element: "Earth" },
    { en: { name: "Fox", keywords: ["Cunning", "Work"], meaning: "Self-preservation or stealth." }, vn: { name: "Fox", keywords: ["Sự mưu mẹo", "Công việc"], meaning: "Sự khéo léo để bảo vệ bản thân hoặc những vấn đề liên quan đến nghề nghiệp." }, element: "Fire" },
    { en: { name: "Bear", keywords: ["Power", "Strength"], meaning: "Leadership and protection." }, vn: { name: "Bear", keywords: ["Quyền lực", "Sức mạnh"], meaning: "Sự dẫn dắt, bảo vệ hoặc các vấn đề về tài chính lớn." }, element: "Earth" },
    { en: { name: "Stars", keywords: ["Hope", "Inspiration"], meaning: "Clarity and guidance." }, vn: { name: "Stars", keywords: ["Hy vọng", "Cảm hứng"], meaning: "Sự sáng suốt, định hướng và niềm tin vào tương lai." }, element: "Air" },
    { en: { name: "Stork", keywords: ["Change", "Delivery"], meaning: "Movement and evolution." }, vn: { name: "Stork", keywords: ["Sự thay đổi", "Sự chuyển giao"], meaning: "Sự dịch chuyển, cải thiện tình hình hoặc một sự ra đời mới." }, element: "Water" },
    { en: { name: "Dog", keywords: ["Loyalty", "Friendship"], meaning: "Trustworthy companion." }, vn: { name: "Dog", keywords: ["Lòng trung thành", "Tình bạn"], meaning: "Người bạn đáng tin cậy, sự hỗ trợ và lòng trung kiên." }, element: "Earth" },
    { en: { name: "Tower", keywords: ["Ambition", "Isolation"], meaning: "Structure and institutions." }, vn: { name: "Tower", keywords: ["Tham vọng", "Sự cô độc"], meaning: "Sự ổn định của các tổ chức lớn, quyền lực hoặc sự bảo vệ." }, element: "Air" },
    { en: { name: "Garden", keywords: ["Social", "Community"], meaning: "Public events and networking." }, vn: { name: "Garden", keywords: ["Xã hội", "Cộng đồng"], meaning: "Các sự kiện công cộng, gặp gỡ bạn bè và mở rộng kết nối." }, element: "Earth" },
    { en: { name: "Mountain", keywords: ["Obstacles", "Delays"], meaning: "Challenges to overcome." }, vn: { name: "Mountain", keywords: ["Trở ngại", "Sự trì trệ"], meaning: "Những thử thách lớn cần kiên nhẫn để vượt qua hoặc sự xa cách." }, element: "Earth" },
    { en: { name: "Crossroads", keywords: ["Choices", "Path"], meaning: "Decision-making and alternatives." }, vn: { name: "Crossroads", keywords: ["Lựa chọn", "Lối đi"], meaning: "Đứng trước những ngã rẽ và cần đưa ra quyết định quan trọng." }, element: "Earth" },
    { en: { name: "Mice", keywords: ["Loss", "Stress"], meaning: "Small persistent worries." }, vn: { name: "Mice", keywords: ["Sự mất mát", "Căng thẳng"], meaning: "Những lo lắng vụn vặt bào mòn tinh thần hoặc sự hao hụt dần dần." }, element: "Earth" },
    { en: { name: "Heart", keywords: ["Love", "Emotion"], meaning: "Affection and romance." }, vn: { name: "Heart", keywords: ["Tình yêu", "Cảm xúc"], meaning: "Sự yêu thương, đam mê và những rung động từ tâm hồn." }, element: "Water" },
    { en: { name: "Ring", keywords: ["Commitment", "Cycle"], meaning: "Agreements and contracts." }, vn: { name: "Ring", keywords: ["Cam kết", "Chu kỳ"], meaning: "Sự gắn kết, hợp đồng, hôn nhân hoặc những điều lặp lại." }, element: "Earth" },
    { en: { name: "Book", keywords: ["Secrets", "Knowledge"], meaning: "Learning and hidden info." }, vn: { name: "Book", keywords: ["Bí mật", "Kiến thức"], meaning: "Sự học hỏi, những điều chưa được tiết lộ hoặc hồ sơ tài liệu." }, element: "Air" },
    { en: { name: "Letter", keywords: ["Message", "Paperwork"], meaning: "Written communication." }, vn: { name: "Letter", keywords: ["Thông điệp", "Giấy tờ"], meaning: "Tin tức văn bản, thư từ, hợp đồng hoặc các chứng từ." }, element: "Air" },
    { en: { name: "Man", keywords: ["Masculine", "Male"], meaning: "Presence of a man." }, vn: { name: "Man", keywords: ["Nam tính", "Phái mạnh"], meaning: "Năng lượng nam tính hoặc sự xuất hiện của một người đàn ông." }, element: "Air" },
    { en: { name: "Woman", keywords: ["Feminine", "Female"], meaning: "Presence of a woman." }, vn: { name: "Woman", keywords: ["Nữ tính", "Phái yếu"], meaning: "Năng lượng nữ tính hoặc sự xuất hiện của một người phụ nữ." }, element: "Air" },
    { en: { name: "Lily", keywords: ["Peace", "Maturity"], meaning: "Harmony and experience." }, vn: { name: "Lily", keywords: ["Hòa bình", "Sự trưởng thành"], meaning: "Sự điềm tĩnh, trải nghiệm và sự hài hòa lâu dài." }, element: "Air" },
    { en: { name: "Sun", keywords: ["Success", "Vitality"], meaning: "Victory and light." }, vn: { name: "Sun", keywords: ["Thành công", "Sức sống"], meaning: "Sự rực rỡ, chiến thắng và năng lượng tích cực dồi dào." }, element: "Fire" },
    { en: { name: "Moon", keywords: ["Emotion", "Recognition"], meaning: "Intuition and psychic sense." }, vn: { name: "Moon", keywords: ["Cảm xúc", "Sự công nhận"], meaning: "Danh tiếng, trực giác và những cảm xúc sâu thẳm." }, element: "Water" },
    { en: { name: "Key", keywords: ["Discovery", "Access"], meaning: "Solution and opening." }, vn: { name: "Key", keywords: ["Khám phá", "Cơ hội"], meaning: "Lời giải cho vấn đề, sự mở ra những cánh cửa mới." }, element: "Earth" },
    { en: { name: "Fish", keywords: ["Wealth", "Flow"], meaning: "Abundance and luxury." }, vn: { name: "Fish", keywords: ["Sự giàu sang", "Dòng chảy"], meaning: "Sự trù phú về tài chính và các cơ hội kinh doanh thuận lợi." }, element: "Water" },
    { en: { name: "Anchor", keywords: ["Stability", "Safety"], meaning: "Long-term commitment." }, vn: { name: "Anchor", keywords: ["Sự ổn định", "An toàn"], meaning: "Sự vững chắc, kiên định và bến đỗ bình yên lâu dài." }, element: "Earth" },
    { en: { name: "Cross", keywords: ["Burden", "Faith"], meaning: "Suffering and spirituality." }, vn: { name: "Cross", keywords: ["Gánh nặng", "Đức tin"], meaning: "Những thử thách tâm linh, định mệnh hoặc sự hy sinh." }, element: "Fire" }
];

const VIETNAM_LAT = 16.0544;
const VIETNAM_LON = 108.2022;

let currentDeck = null;
let currentSpread = null;
let drawnCards = [];
let reversedList = [];
let selectionMode = 'random';
let selectedIndices = [];
let selectedReversals = {}; // Track reversed state for manually selected cards
let currentLang = localStorage.getItem('mystic_lang') || 'en';
let isAmbienceOn = false;

const transitAdvice = {
    "body-sun": {
        "zodiac-aries": { en: "A time for bold initiatives and self-assertion. Forge your own path.", vn: "Thời điểm cho những sáng kiến táo bạo và khẳng định bản thân. Hãy tự khai phá lối đi riêng." },
        "zodiac-taurus": { en: "Focus on stability and material security. Value what is enduring.", vn: "Tập trung vào sự ổn định và an ninh vật chất. Hãy trân trọng những giá trị bền vững." },
        "zodiac-gemini": { en: "Curiosity and communication are highlighted. Share your ideas widely.", vn: "Sự tò mò và giao tiếp được đề cao. Hãy chia sẻ ý tưởng của bạn một cách rộng rãi." },
        "zodiac-cancer": { en: "Nurture your emotional foundations. Home and family take center stage.", vn: "Nuôi dưỡng nền tảng cảm xúc của bạn. Gia đình và tổ ấm là trọng tâm lúc này." },
        "zodiac-leo": { en: "Radiate confidence and creativity. Express your unique light.", vn: "Tỏa sáng với sự tự tin và sáng tạo. Hãy thể hiện ánh sáng độc nhất của bạn." },
        "zodiac-virgo": { en: "Pragmatic service and attention to detail. Organize your world.", vn: "Phụng sự thực tế và chú ý đến chi tiết. Hãy sắp xếp lại thế giới của bạn." },
        "zodiac-libra": { en: "Seek balance and harmony in partnerships. Diplomacy is your strength.", vn: "Tìm kiếm sự cân bằng và hài hòa trong các mối quan hệ. Ngoại giao là sức mạnh của bạn." },
        "zodiac-scorpio": { en: "Intensity and transformation. Dive deep into the mysteries of life.", vn: "Sự mãnh liệt và chuyển hóa. Hãy lặn sâu vào những bí ẩn của cuộc sống." },
        "zodiac-sagittarius": { en: "Expansion, truth-seeking, and adventure. Broaden your horizons.", vn: "Sự mở rộng, tìm kiếm sự thật và phiêu lưu. Hãy mở rộng tầm nhìn của bạn." },
        "zodiac-capricorn": { en: "Ambition, discipline, and structure. Build for the long term.", vn: "Tham vọng, kỷ luật và cấu trúc. Hãy xây dựng những giá trị dài hạn." },
        "zodiac-aquarius": { en: "Innovation, community, and freedom. Think outside the box.", vn: "Đổi mới, cộng đồng và tự do. Hãy suy nghĩ khác biệt và đột phá." },
        "zodiac-pisces": { en: "Compassion, dreams, and intuition. Connect with the unseen world.", vn: "Lòng trắc ẩn, giấc mơ và trực giác. Hãy kết nối với thế giới tâm linh." }
    },
    "body-mercury": {
        "zodiac-aries": { en: "Swift thoughts and direct speech. Be decisive but avoid conflict.", vn: "Suy nghĩ nhạy bén và lời nói trực diện. Hãy quyết đoán nhưng tránh xung đột." },
        "zodiac-taurus": { en: "Deliberate thinking and practical solutions. Take your time.", vn: "Suy nghĩ thấu đáo và giải pháp thực tế. Đừng vội vàng trong các quyết định." },
        "zodiac-gemini": { en: "Exceptional agility of mind. A great time for learning and networking.", vn: "Trí tuệ cực kỳ linh hoạt. Thời điểm tuyệt vời để học tập và kết nối." },
        "zodiac-cancer": { en: "Communication is colored by emotion. Trust your gut feelings.", vn: "Giao tiếp mang đậm màu sắc cảm xúc. Hãy tin tưởng vào linh tính của bạn." },
        "zodiac-leo": { en: "Express ideas with flair and drama. Speak from the heart.", vn: "Bày tỏ ý tưởng một cách đầy thu hút. Hãy nói bằng cả trái tim mình." },
        "zodiac-virgo": { en: "Analytical precision and clear logic. Perfect for detailed work.", vn: "Sự chính xác trong phân tích và logic rõ ràng. Hoàn hảo cho các công việc chi tiết." },
        "zodiac-libra": { en: "Balanced communication. Weigh all sides before coming to a conclusion.", vn: "Giao tiếp cân bằng. Hãy cân nhắc mọi mặt trước khi đưa ra kết luận." },
        "zodiac-scorpio": { en: "Deep investigation and secretive talk. Uncover hidden truths.", vn: "Điều tra sâu sắc và những cuộc trò chuyện kín đáo. Hãy làm sáng tỏ sự thật." },
        "zodiac-sagittarius": { en: "Broad perspectives and philosophical discussions. Aim for the big picture.", vn: "Tầm nhìn rộng mở và những cuộc thảo luận triết học. Hãy hướng tới bức tranh lớn." },
        "zodiac-capricorn": { en: "Serious and structured thinking. Focus on professional goals.", vn: "Suy nghĩ nghiêm túc và có hệ thống. Hãy tập trung vào các mục tiêu sự nghiệp." },
        "zodiac-aquarius": { en: "Unconventional ideas and collective intelligence. Share unique views.", vn: "Ý tưởng độc đáo và trí tuệ tập thể. Hãy chia sẻ những quan điểm mới lạ." },
        "zodiac-pisces": { en: "Poetic and intuitive communication. Words carry spiritual weight.", vn: "Giao tiếp đầy chất thơ và trực giác. Lời nói mang sức mạnh tâm linh." }
    }
};

const i18n = {
    en: {
        "app-title": "Mystic Memory",
        "hero-title": "Begin Your Journey",
        "hero-subtitle": "Select your deck and spread to explore the unseen.",
        "tarot-title": "Tarot Deck",
        "tarot-desc": "Deep spiritual insights and archetypal wisdom.",
        "len-title": "Lenormand Deck",
        "len-desc": "Clear, practical answers for daily life situations.",
        "natal-title": "Natal Chart",
        "natal-desc": "Map of the sky at your exact moment of birth.",
        "planets-pos-title": "Planets' Position",
        "planets-pos-desc": "Real-time planetary data for your location.",
        "planets-view-title": "Celestial Positions",
        "choose-spread": "Choose Your Spread",
        "spread-3": "3 Cards",
        "spread-3-desc": "Fast & Simple",
        "spread-5": "5 Cards",
        "spread-5-desc": "Specific Insights",
        "spread-14": "Year Forecast",
        "spread-14-desc": "12 Months + 2 Tips",
        "spread-yesno": "Yes / No",
        "spread-yesno-desc": "3-Card Answer",
        "spread-daily": "Daily Draw",
        "spread-daily-desc": "Your Day Ahead",
        "daily-title": "Your Daily Guidance",
        "daily-subtitle": "A single card to illuminate your path today",
        "daily-morning": "Morning Energy",
        "daily-afternoon": "Afternoon Focus",
        "daily-evening": "Evening Reflection",
        "daily-challenge": "Today's Challenge",
        "daily-opportunity": "Today's Opportunity",
        "daily-advice": "Cosmic Advice",
        "daily-overall": "Overall Day Energy",
        "mode-random": "Deal Randomly",
        "mode-manual": "Pick Manually",
        "gallery-title": "Select Your Cards",
        "selection-counter": "Picked {count} of {total}",
        "confirm": "Confirm Selection",
        "confirm-selection": "Confirm Selection",
        "shuffle-deal": "Shuffle & Deal",
        "reading-title": "Your Reading",
        "reading-subtitle": "Detailed insights for each card drawn below.",
        "synthesis-title": "Combined Thread Meaning",
        "yesno-yes": [
            "The energies align for a definitive 'Yes'. The cosmic path is favorable.",
            "The universe whispers a resounding 'Yes' through the cards. Your path is blessed by celestial forces.",
            "A clear and powerful 'Yes' emerges from the mystical veil. The stars have spoken in your favor.",
            "The cards sing in harmony—'Yes' is your answer. Trust this cosmic affirmation.",
            "The fates smile upon you with a confident 'Yes'. Move forward with celestial blessing.",
            "The divine energies converge to grant you a 'Yes'. The moment is ripe for action."
        ],
        "yesno-no": [
            "The cards suggest a period of pause or a 'No'. Reflection is needed.",
            "The cosmic currents advise caution—'No' or 'Not yet' appears in the reading. Wait for clarity.",
            "The universe counsels patience with a gentle 'No'. The timing may not be aligned.",
            "A 'No' resonates through the cards, urging you to reconsider or wait for better circumstances.",
            "The mystical forces suggest stepping back—'No' is the wisdom offered now.",
            "The cards reveal obstacles ahead, indicating 'No' or a need for different approach."
        ],
        "synthesis-template": "This thread weaves a path from {start} towards {end}. The heart of the situation is {middle}, ultimately leading to {result}.",
        "reversed": "Reversed",
        "upright": "Upright",
        "reverse-btn": "Reverse",
        "filter-all": "All Cards",
        "filter-major": "Major Arcana",
        "filter-wands": "Wands",
        "filter-cups": "Cups",
        "filter-swords": "Swords",
        "filter-pentacles": "Pentacles",
        "harmony-fire": "Intensity and action are dominant in this spread.",
        "harmony-water": "Emotions and intuition flow deeply through this thread.",
        "harmony-air": "Logic and communication define this situation.",
        "harmony-earth": "Grounding and material manifestation are at the core.",
        "harmony-mixed": "A balanced mixture of different energies.",
        "sacred-sound": "Sacred Sound",
        "btn-save": "Save Reading",
        "btn-journal": "Journal",
        "btn-copy": "Copy Reading",
        "copy-success": "Copied to clipboard!",
        "copy-error": "Failed to copy",
        "synthesis-title-el": "Celestial Synthesis",
        "spread-past": "Past Influences",
        "spread-present": "Present Situation",
        "spread-future": "Future Trajectory",
        "spread-advice": "Guidance & Wisdom",
        "spread-outcome": "Likely Outcome",
        "spread-foundation": "Foundation & Core",
        "spread-obstacle": "Challenges & Obstacles",
        "spread-energy": "Energy & Dynamics",
        "spread-external": "External Influences",
        "spread-hopes": "Hopes & Fears",
        "spread-final": "Final Outcome",
        "aspect-love": "In Matters of Love",
        "aspect-career": "In Career & Ambitions",
        "aspect-timing": "Timing & Rhythm",
        "aspect-spiritual": "Spiritual Guidance",
        "aspect-action": "Actions to Take",
        "aspect-avoid": "What to Avoid",
        "aspect-strengths": "Your Strengths",
        "aspect-hidden": "Hidden Influences",
        "journal-title": "Reading Journal",
        "journal-empty": "No saved threads yet.",
        "save-success": "Reading saved to your journal!",
        "rev-note": "Something is blocked or internalizing. ",
        "elem-fire": "Fire", "elem-water": "Water", "elem-air": "Air", "elem-earth": "Earth",
        "moon-phase-label": "Moon Phase",
        "cosmic-advice-title": "Celestial Guidance",
        "moon-0": "New Moon", "moon-1": "Waxing Crescent", "moon-2": "First Quarter", "moon-3": "Waxing Gibbous", "moon-4": "Full Moon", "moon-5": "Waning Gibbous", "moon-6": "Last Quarter", "moon-7": "Waning Crescent",
        "zodiac-aries": "Aries", "zodiac-taurus": "Taurus", "zodiac-gemini": "Gemini", "zodiac-cancer": "Cancer", "zodiac-leo": "Leo", "zodiac-virgo": "Virgo", "zodiac-libra": "Libra", "zodiac-scorpio": "Scorpio", "zodiac-sagittarius": "Sagittarius", "zodiac-capricorn": "Capricorn", "zodiac-aquarius": "Aquarius", "zodiac-pisces": "Pisces",
        "body-sun": "Sun", "body-moon": "Moon", "body-mars": "Mars", "body-jupiter": "Jupiter", "body-saturn": "Saturn", "body-mercury": "Mercury", "body-venus": "Venus", "body-uranus": "Uranus", "body-neptune": "Neptune", "body-pluto": "Pluto",
        "forecast-title": "7-Day Celestial Forecast",
        "tab-current-sky": "Current Sky",
        "tab-transit-forecast": "7-Day Transit"
    },
    vn: {
        "app-title": "Ký Ức Huyền Bí",
        "hero-title": "Khởi Đầu Hành Trình",
        "hero-subtitle": "Chọn bộ bài và kiểu trải để khám phá những điều ẩn giấu.",
        "tarot-title": "Bài Tarot",
        "tarot-desc": "Sâu sắc về tâm linh và trí tuệ nguyên mẫu.",
        "len-title": "Bài Lenormand",
        "len-desc": "Câu trả lời rõ ràng, thực tế cho cuộc sống hàng ngày.",
        "natal-title": "Bản Đồ Sao Cá Nhân",
        "natal-desc": "Bản đồ bầu trời tại thời điểm chính xác khi bạn sinh ra.",
        "planets-pos-title": "Vị Trí Hành Tinh",
        "planets-pos-desc": "Dữ liệu hành tinh thời gian thực tại vị trí của bạn.",
        "planets-view-title": "Vị Trí Các Hành Tinh",
        "choose-spread": "Chọn Kiểu Trải Bài",
        "spread-3": "3 Lá Bài",
        "spread-3-desc": "Nhanh & Đơn Giản",
        "spread-5": "5 Lá Bài",
        "spread-5-desc": "Phân Tích Chi Tiết",
        "spread-14": "Dự Báo Năm",
        "spread-14-desc": "12 Tháng + 2 Gợi Ý",
        "spread-yesno": "Có / Không",
        "spread-yesno-desc": "3 Lá Trả Lời",
        "spread-daily": "Bốc Bài Hàng Ngày",
        "spread-daily-desc": "Dự Đoán Ngày Mới",
        "daily-title": "Chỉ Dẫn Hàng Ngày",
        "daily-subtitle": "Một lá bài để soi sáng con đường hôm nay",
        "daily-morning": "Năng Lượng Buổi Sáng",
        "daily-afternoon": "Trọng Tâm Buổi Chiều",
        "daily-evening": "Chiêm Nghiệm Buổi Tối",
        "daily-challenge": "Thử Thách Hôm Nay",
        "daily-opportunity": "Cơ Hội Hôm Nay",
        "daily-advice": "Lời Khuyên Vũ Trụ",
        "daily-overall": "Tổng Quan Năng Lượng Ngày",
        "mode-random": "Xử Ngẫu Nhiên",
        "mode-manual": "Tự Chọn Bài",
        "gallery-title": "Chọn Các Lá Bài Của Bạn",
        "selection-counter": "Đã chọn {count} trên {total}",
        "confirm": "Xác Nhận",
        "gallery-title": "Chọn Các Lá Bài Của Bạn",
        "selection-counter": "Đã chọn {count} trên {total}",
        "confirm-selection": "Xác Nhận Lựa Chọn",
        "shuffle-deal": "Xáo & Trải Bài",
        "reading-title": "Giải Mã Lời Tiên Tri",
        "reading-subtitle": "Khám phá chi tiết thông điệp ẩn giấu bên dưới.",
        "synthesis-title": "Tổng Quan Thông Điệp",
        "yesno-yes": [
            "Vũ trụ đang ủng hộ bạn mạnh mẽ. Câu trả lời là một tiếng 'Có' vang dội. Hãy tự tin tiến bước.",
            "Các vì sao đang sắp xếp hoàn hảo—câu trả lời rõ ràng là 'Có'. Năng lượng thuận lợi đang ở bên bạn.",
            "Một tiếng 'Có' mạnh mẽ xuất hiện từ lá bài. Vũ trụ đang ban phước cho hành trình của bạn.",
            "Lá bài hát vang lời 'Có' đầy tự tin. Đây là thời điểm được định mệnh chọn lựa.",
            "Các nguồn năng lượng thiên thượng hội tụ để mang đến câu trả lời 'Có' cho bạn. Hãy hành động.",
            "Định mệnh mỉm cười với bạn qua tiếng 'Có' rõ ràng. Những dấu hiệu tích cực bao quanh bạn."
        ],
        "yesno-no": [
            "Hiện tại, các lá bài khuyên bạn nên lùi lại và suy ngẫm. Câu trả lời dường như là 'Không' hoặc 'Chưa phải lúc'.",
            "Dòng chảy vũ trụ đang gợi ý sự thận trọng—'Không' hoặc 'Chưa đến thời điểm' hiện ra trong trải bài.",
            "Vũ trụ khuyên bạn kiên nhẫn với câu trả lời 'Không' nhẹ nhàng. Thời điểm chưa đồng điệu.",
            "Một tiếng 'Không' vang lên từ các lá bài, đề nghị bạn cân nhắc lại hoặc chờ đợi thêm.",
            "Các năng lượng huyền bí gợi ý bạn nên lùi một bước—'Không' là trí tuệ được ban cho hiện giờ.",
            "Lá bài hé lộ những trở ngại phía trước, chỉ ra 'Không' hoặc cần một cách tiếp cận khác."
        ],
        "synthesis-template": "Chuỗi bài này dệt nên một câu chuyện từ {start} dẫn dắt qua {middle}, và cuối cùng hội tụ tại {result}.",
        "reversed": "Ý Nghĩa Ngược",
        "upright": "Ý Nghĩa Xuôi",
        "reverse-btn": "Đảo Ngược",
        "filter-all": "Tất Cả",
        "filter-major": "Bộ Ẩn Chính",
        "filter-wands": "Gậy",
        "filter-cups": "Ly",
        "filter-swords": "Kiếm",
        "filter-pentacles": "Tiền",
        "harmony-fire": "Cường độ và hành động đang chiếm ưu thế trong trải bài này.",
        "harmony-water": "Cảm xúc và trực giác đang tuôn chảy mạnh mẽ.",
        "harmony-air": "Logic và sự giao tiếp đang định nghĩa tình huống này.",
        "harmony-earth": "Sự ổn định và vật chất là trọng tâm của vấn đề.",
        "harmony-mixed": "Sự pha trộn cân bằng giữa các nguồn năng lượng.",
        "sacred-sound": "Âm Thanh Linh Thiêng",
        "mode-random": "Trải Bài Ngẫu Nhiên",
        "mode-manual": "Tự Chọn Bài Theo Ý",
        "btn-save": "Lưu Trải Bài",
        "btn-journal": "Nhật Ký",
        "btn-copy": "Sao Chép",
        "copy-success": "Đã sao chép!",
        "copy-error": "Không thể sao chép",
        "synthesis-title-el": "Chỉ dẫn từ Vũ Trụ",
        "spread-past": "Ảnh Hưởng Quá Khứ",
        "spread-present": "Tình Huống Hiện Tại",
        "spread-future": "Quỹ Đạo Tương Lai",
        "spread-advice": "Chỉ Dẫn & Trí Tuệ",
        "spread-outcome": "Kết Quả Có Thể",
        "spread-foundation": "Nền Tảng & Cốt Lõi",
        "spread-obstacle": "Thách Thức & Trở Ngại",
        "spread-energy": "Năng Lượng & Động Lực",
        "spread-external": "Ảnh Hưởng Bên Ngoài",
        "spread-hopes": "Hy Vọng & Lo Sợ",
        "spread-final": "Kết Cục Cuối Cùng",
        "aspect-love": "Về Mặt Tình Cảm",
        "aspect-career": "Về Mặt Sự Nghiệp",
        "aspect-timing": "Về Mặt Thời Gian",
        "aspect-spiritual": "Chỉ Dẫn Tâm Linh",
        "aspect-action": "Hành Động Nên Làm",
        "aspect-avoid": "Điều Nên Tránh",
        "aspect-strengths": "Điểm Mạnh Của Bạn",
        "aspect-hidden": "Ảnh Hưởng Ẩn Giấu",
        "journal-title": "Nhật Ký Hành Trình",
        "journal-empty": "Chưa có trải bài nào được lưu.",
        "save-success": "Đã lưu trải bài vào nhật ký!",
        "rev-note": "Nguồn năng lượng đang bị tắc nghẽn hoặc cần được chuyển hóa vào bên trong. ",
        "elem-fire": "Hỏa", "elem-water": "Thủy", "elem-air": "Khí", "elem-earth": "Thổ",
        "moon-phase-label": "Pha Trăng",
        "cosmic-advice-title": "Thông Điệp Từ Tinh Tú",
        "moon-0": "Trăng Non", "moon-1": "Trăng Lưỡi Liềm Đầu Tháng", "moon-2": "Trăng Bán Nguyệt Đầu Tháng", "moon-3": "Trăng Khuyết Đầu Tháng", "moon-4": "Trăng Tròn", "moon-5": "Trăng Khuyết Cuối Tháng", "moon-6": "Trăng Bán Nguyệt Cuối Tháng", "moon-7": "Trăng Lưỡi Liềm Cuối Tháng",
        "zodiac-aries": "Bạch Dương", "zodiac-taurus": "Kim Ngưu", "zodiac-gemini": "Song Tử", "zodiac-cancer": "Cự Giải", "zodiac-leo": "Sư Tử", "zodiac-virgo": "Xử Nữ", "zodiac-libra": "Thiên Bình", "zodiac-scorpio": "Bọ Cạp", "zodiac-sagittarius": "Nhân Mã", "zodiac-capricorn": "Ma Kết", "zodiac-aquarius": "Bảo Bình", "zodiac-pisces": "Song Ngư",
        "body-sun": "Mặt Trời", "body-moon": "Mặt Trăng", "body-mars": "Sao Hỏa", "body-jupiter": "Sao Mộc", "body-saturn": "Sao Thổ", "body-mercury": "Sao Thủy", "body-venus": "Sao Kim", "body-uranus": "Thiên Vương Tinh", "body-neptune": "Hải Vương Tinh", "body-pluto": "Diêm Vương Tinh",
        "forecast-title": "Vận Hành của các Thiên Thể 7 Ngày Tới",
        "tab-current-sky": "Bầu Trời Hiện Tại",
        "tab-transit-forecast": "Dự Báo 7 Ngày"
    }
};

const celestialSymbols = {
    "body-sun": "☉", "body-moon": "☽", "body-mars": "♂", "body-jupiter": "♃", "body-saturn": "♄", "body-mercury": "☿", "body-venus": "♀",
    "zodiac-aries": "♈", "zodiac-taurus": "♉", "zodiac-gemini": "♊", "zodiac-cancer": "♋", "zodiac-leo": "♌",
    "zodiac-virgo": "♍", "zodiac-libra": "♎", "zodiac-scorpio": "♏", "zodiac-sagittarius": "♐",
    "zodiac-capricorn": "♑", "zodiac-aquarius": "♒", "zodiac-pisces": "♓",
    "body-uranus": "⛢", "body-neptune": "♆", "body-pluto": "♇"
};

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setLanguage(currentLang);
    updateMoonPhase();
    updatePlanetaryChart();
    updatePlanetaryAdvice();
    const bg = document.getElementById('app-bg');
    if (bg) bg.style.backgroundImage = "url('background.png')";

    // Initialize language
    setLanguage(currentLang);
});

// setLanguage and updateLanguageUI defined below (line ~398+)

window.toggleAmbience = () => {
    isAmbienceOn = !isAmbienceOn;
    const btn = document.getElementById('sound-toggle');
    const audio = document.getElementById('audio-rain');
    const sacred = document.getElementById('sacred-space');

    if (isAmbienceOn) {
        audio.play().catch(() => { });
        btn.querySelector('i').setAttribute('data-lucide', 'volume-2');
        sacred.style.opacity = '1';
    } else {
        audio.pause();
        btn.querySelector('i').setAttribute('data-lucide', 'volume-x');
        sacred.style.opacity = '0.3';
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
};

function updateMoonPhase() {
    if (typeof Astronomy === 'undefined') return;
    const name = document.getElementById('moon-name');
    const labelEl = document.getElementById('moon-phase-label-el');
    const date = new Date();
    const time = Astronomy.MakeTime(date);
    const strings = i18n[currentLang];

    try {
        const phase = Astronomy.MoonPhase(time); // 0 to 360
        // Convert phase angle to 0-7 index
        // 0: New Moon, 90: First Quarter, 180: Full Moon, 270: Last Quarter
        const phaseIndex = Math.floor(((phase + 22.5) % 360) / 45);

        if (name) name.innerText = strings[`moon-${phaseIndex}`];
        if (labelEl) labelEl.innerText = strings['moon-phase-label'];
    } catch (e) {
        console.error("Moon phase error:", e);
    }
}

window.setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('mystic_lang', lang);

    // Update button states
    const enBtn = document.getElementById('lang-en');
    const vnBtn = document.getElementById('lang-vn');

    if (lang === 'en') {
        enBtn.classList.add('bg-amber-600', 'text-white');
        enBtn.classList.remove('text-slate-400');
        vnBtn.classList.remove('bg-amber-600', 'text-white');
        vnBtn.classList.add('text-slate-400');
    } else {
        vnBtn.classList.add('bg-amber-600', 'text-white');
        vnBtn.classList.remove('text-slate-400');
        enBtn.classList.remove('bg-amber-600', 'text-white');
        enBtn.classList.add('text-slate-400');
    }

    updateLanguageUI();
    updatePlanetaryChart();
    updateMoonPhase();
    updatePlanetaryAdvice();
    if (document.getElementById('card-gallery-modal').classList.contains('hidden') === false) {
        updateGalleryCounter();
    }
    if (drawnCards.length > 0) refreshReading();
    if (document.getElementById('planets-view').classList.contains('hidden') === false) {
        showPlanetsPosition();
    }
};

function updateLanguageUI() {
    const strings = i18n[currentLang];
    for (const [id, text] of Object.entries(strings)) {
        const el = document.getElementById(id);
        if (el) {
            const span = el.querySelector('.lang-target');
            if (span) span.innerText = text;
            else el.innerText = text;
        }
    }

    // Special handling for synthesis title in the reading view
    const synthTitleEl = document.getElementById('synthesis-title-el');
    if (synthTitleEl) {
        synthTitleEl.innerText = strings['synthesis-title-el'] || (currentLang === 'en' ? 'Celestial Synthesis' : 'Chỉ dẫn từ Vũ Trụ');
    }

    // Update copy button text
    const copyBtnText = document.getElementById('btn-copy-text');
    if (copyBtnText) {
        copyBtnText.innerText = strings['btn-copy'];
    }

    // Update reverse button text in gallery
    const reverseBtnTexts = document.querySelectorAll('.reverse-btn-text');
    reverseBtnTexts.forEach(btnText => {
        btnText.innerText = strings['reverse-btn'];
    });
}

async function updatePlanetaryChart() {
    if (typeof Astronomy === 'undefined') return;
    const summaryEl = document.getElementById('planetary-summary');
    if (!summaryEl) return;
    const bodies = [
        { key: 'body-sun', id: 'Sun' },
        { key: 'body-moon', id: 'Moon' },
        { key: 'body-venus', id: 'Venus' },
        { key: 'body-mars', id: 'Mars' },
        { key: 'body-mercury', id: 'Mercury' },
        { key: 'body-saturn', id: 'Saturn' }
    ];
    let html = '';
    const strings = i18n[currentLang];
    const time = Astronomy.MakeTime(new Date());

    bodies.forEach(body => {
        try {
            const lon = Astronomy.EclipticLongitude(body.id, time);
            const signKey = getZodiacSignKey(lon);
            const planetSymbol = celestialSymbols[body.key];
            const zodiacSymbol = celestialSymbols[signKey];
            const translatedBody = strings[body.key];
            const translatedSign = strings[signKey];

            html += `
                <div class="planetary-item" title="${translatedBody} in ${translatedSign}">
                    <span class="text-xl text-amber-500">${planetSymbol}</span>
                    <span class="text-xl text-indigo-400 ml-1">${zodiacSymbol}</span>
                </div>
            `;
        } catch (e) {
            console.error(`Error calculating header planet ${body.id}:`, e);
        }
    });
    summaryEl.innerHTML = html;
}

function updatePlanetaryAdvice() {
    const adviceEl = document.getElementById('planetary-advice-text');
    const container = document.getElementById('planetary-advice-container');
    if (!adviceEl || !container) return;

    const time = Astronomy.MakeTime(new Date());

    try {
        const sunLon = Astronomy.EclipticLongitude('Sun', time);
        const sunSign = getZodiacSignKey(sunLon);

        const mercuryLon = Astronomy.EclipticLongitude('Mercury', time);
        const mercurySign = getZodiacSignKey(mercuryLon);

        const sunAdvice = (transitAdvice["body-sun"][sunSign] || {})[currentLang] || "";
        const mercAdvice = (transitAdvice["body-mercury"][mercurySign] || {})[currentLang] || "";

        container.classList.remove('hidden');
        adviceEl.innerHTML = `<strong>${i18n[currentLang]['cosmic-advice-title']}:</strong> ${sunAdvice} ${mercAdvice}`;
    } catch (e) {
        console.error("Advice calculation error:", e);
        container.classList.add('hidden');
    }
}

function getZodiacSignKey(lon) {
    const keys = ['zodiac-aries', 'zodiac-taurus', 'zodiac-gemini', 'zodiac-cancer', 'zodiac-leo', 'zodiac-virgo', 'zodiac-libra', 'zodiac-scorpio', 'zodiac-sagittarius', 'zodiac-capricorn', 'zodiac-aquarius', 'zodiac-pisces'];
    return keys[Math.floor(lon / 30) % 12];
}

window.selectDeck = (type, el) => {
    document.querySelectorAll('.deck-card').forEach(item => item.classList.remove('border-amber-500'));
    if (el) el.classList.add('border-amber-500');
    else if (window.event) window.event.currentTarget.classList.add('border-amber-500');

    currentDeck = type === 'tarot' ? tarotData : lenormandData;
    document.getElementById('spread-options').classList.remove('hidden');

    // Hide/show Yearly Forecast based on deck type
    const yearlyBtn = document.getElementById('spread-14-btn');
    if (yearlyBtn) {
        if (type === 'lenormand') {
            yearlyBtn.style.display = 'none';
        } else {
            yearlyBtn.style.display = '';
        }
    }
};


window.selectSpread = (type, element) => {
    currentSpread = type;

    // Remove selected class from all spread buttons
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add selected class to the clicked element if provided
    if (element) {
        element.classList.add('selected');
    }

    document.getElementById('mode-selection').classList.remove('hidden');
};

window.setMode = (mode) => { selectionMode = mode; mode === 'random' ? startReading() : openGallery(); };

function openGallery() {
    const modal = document.getElementById('card-gallery-modal');
    modal.classList.remove('hidden'); document.body.style.overflow = 'hidden';
    selectedIndices = [];
    selectedReversals = {}; // Track which cards are reversed
    updateSelectionUI();
    const grid = document.getElementById('gallery-grid'); grid.innerHTML = '';
    const isTarot = currentDeck === tarotData;

    // Show/hide filter tabs based on deck type
    const filterDiv = document.getElementById('tarot-filters');
    if (filterDiv) {
        if (isTarot) {
            filterDiv.classList.remove('hidden');
        } else {
            filterDiv.classList.add('hidden');
        }
    }

    currentDeck.forEach((card, idx) => {
        const item = document.createElement('div');
        item.className = 'gallery-card relative bg-slate-900/50 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 h-40 justify-center cursor-pointer';
        item.setAttribute('data-card-idx', idx);

        // Add data attributes for filtering (Tarot only)
        if (isTarot) {
            const cardName = card.en.name.toLowerCase();
            let category = 'major';

            if (cardName.includes('wand')) category = 'wands';
            else if (cardName.includes('cup')) category = 'cups';
            else if (cardName.includes('sword')) category = 'swords';
            else if (cardName.includes('pentacle') || cardName.includes('coin')) category = 'pentacles';

            item.setAttribute('data-category', category);
        }

        // Create elements instead of using innerHTML for better event handling
        const contentDiv = document.createElement('div');
        contentDiv.className = 'flex flex-col items-center gap-2 w-full h-full justify-center pointer-events-none';

        // Add reverse button for Tarot cards
        if (isTarot) {
            const reverseBtn = document.createElement('button');
            reverseBtn.id = `reverse-btn-${idx}`;
            reverseBtn.className = 'reverse-toggle hidden pointer-events-auto';
            reverseBtn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i><span class="text-[11px] reverse-btn-text font-extrabold">${i18n[currentLang]['reverse-btn']}</span>`;
            reverseBtn.onclick = (e) => {
                e.stopPropagation();
                window.toggleReverse(idx);
            };
            item.appendChild(reverseBtn);
        }

        // Eye icon
        const eyeDiv = document.createElement('div');
        eyeDiv.className = 'text-amber-500/10';
        eyeDiv.innerHTML = '<i data-lucide="eye" class="w-8 h-8"></i>';
        contentDiv.appendChild(eyeDiv);

        // Card name
        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-[10px] font-bold text-center uppercase text-slate-400';
        nameSpan.textContent = card.en.name;
        contentDiv.appendChild(nameSpan);

        // Reverse indicator for Tarot - make it more prominent
        if (isTarot) {
            const reverseIndicator = document.createElement('span');
            reverseIndicator.id = `reverse-indicator-${idx}`;
            reverseIndicator.className = 'text-[9px] text-indigo-300 font-extrabold uppercase hidden tracking-wider';
            reverseIndicator.innerHTML = `<i data-lucide="arrow-down" class="w-3 h-3 inline-block mr-1"></i>${i18n[currentLang]['reversed']}`;
            contentDiv.appendChild(reverseIndicator);
        }

        item.appendChild(contentDiv);

        // Main card click handler
        item.onclick = () => toggleCardSelection(idx, item);

        grid.appendChild(item);
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.toggleReverse = (idx) => {
    // Only allow reversing if card is selected
    if (!selectedIndices.includes(idx)) return;

    selectedReversals[idx] = !selectedReversals[idx];
    const indicator = document.getElementById(`reverse-indicator-${idx}`);
    const btn = document.getElementById(`reverse-btn-${idx}`);

    if (selectedReversals[idx]) {
        if (indicator) indicator.classList.remove('hidden');
        if (btn) btn.classList.add('active');
    } else {
        if (indicator) indicator.classList.add('hidden');
        if (btn) btn.classList.remove('active');
    }
};

window.toggleCardSelection = (idx, el) => {
    let target = currentSpread === 'daily' ? 1 : (typeof currentSpread === 'number' ? currentSpread : 3);
    const existingIdx = selectedIndices.indexOf(idx);
    const reverseBtn = document.getElementById(`reverse-btn-${idx}`);
    const reverseIndicator = document.getElementById(`reverse-indicator-${idx}`);

    if (existingIdx > -1) {
        selectedIndices.splice(existingIdx, 1);
        el.classList.remove('selected');
        const b = el.querySelector('.selection-badge');
        if (b) b.remove();

        // Hide reverse button and reset reversal state
        if (reverseBtn) reverseBtn.classList.add('hidden');
        if (selectedReversals[idx]) {
            delete selectedReversals[idx];
            if (reverseIndicator) reverseIndicator.classList.add('hidden');
        }

        selectedIndices.forEach((selIdx, i) => {
            const badge = document.querySelectorAll('.gallery-card')[selIdx].querySelector('.selection-badge');
            if (badge) badge.innerText = i + 1;
        });
    } else if (selectedIndices.length < target) {
        selectedIndices.push(idx);
        el.classList.add('selected');
        const badge = document.createElement('div');
        badge.className = 'selection-badge';
        badge.innerText = selectedIndices.length;
        el.appendChild(badge);

        // Show reverse button for selected card
        if (reverseBtn) reverseBtn.classList.remove('hidden');
    }
    updateSelectionUI();
};

function updateSelectionUI() {
    let target = currentSpread === 'daily' ? 1 : (typeof currentSpread === 'number' ? currentSpread : 3);
    const btn = document.getElementById('confirm-selection');
    document.getElementById('selection-counter').innerText = i18n[currentLang]['selection-counter'].replace('{count}', selectedIndices.length).replace('{total}', target);
    if (selectedIndices.length === target) {
        btn.disabled = false; btn.classList.add('visible');
        btn.onclick = () => { closeGallery(); startReading(); };
    } else { btn.disabled = true; btn.classList.remove('visible'); }
}

window.switchPlanetTab = (tab) => {
    const skyTab = document.getElementById('tab-current-sky');
    const forecastTab = document.getElementById('tab-transit-forecast');
    const skyView = document.getElementById('view-current-sky');
    const forecastView = document.getElementById('view-transit-forecast');

    if (tab === 'current') {
        skyTab.classList.add('border-amber-500', 'text-amber-500');
        skyTab.classList.remove('border-transparent', 'text-slate-500');
        forecastTab.classList.add('border-transparent', 'text-slate-500');
        forecastTab.classList.remove('border-amber-500', 'text-amber-500');
        skyView.classList.remove('hidden');
        forecastView.classList.add('hidden');
    } else {
        forecastTab.classList.add('border-amber-500', 'text-amber-500');
        forecastTab.classList.remove('border-transparent', 'text-slate-500');
        skyTab.classList.add('border-transparent', 'text-slate-500');
        skyTab.classList.remove('border-amber-500', 'text-amber-500');
        forecastView.classList.remove('hidden');
        skyView.classList.add('hidden');
        renderTransitTimeline();
    }
};

window.showPlanetsPosition = () => {
    const modal = document.getElementById('planets-view');
    const list = document.getElementById('planets-list');
    const wheelContainer = document.getElementById('zodiac-wheel-container');
    if (!modal || !list) return;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Reset view to 'current' tab
    switchPlanetTab('current');

    if (typeof Astronomy === 'undefined') {
        list.innerHTML = `<div class="col-span-full p-8 text-center"><p class="text-rose-500 text-lg font-bold mb-4">Celestial Engine Not Ready</p></div>`;
        return;
    }

    list.innerHTML = '<p class="col-span-full text-center text-amber-500 animate-pulse text-lg py-20 font-["Cinzel"]">Calculating Celestial Harmonies...</p>';

    setTimeout(() => {
        try {
            const time = Astronomy.MakeTime(new Date());
            const bodies = [
                { key: 'body-sun', id: 'Sun' },
                { key: 'body-moon', id: 'Moon' },
                { key: 'body-mercury', id: 'Mercury' },
                { key: 'body-venus', id: 'Venus' },
                { key: 'body-mars', id: 'Mars' },
                { key: 'body-jupiter', id: 'Jupiter' },
                { key: 'body-saturn', id: 'Saturn' },
                { key: 'body-uranus', id: 'Uranus' },
                { key: 'body-neptune', id: 'Neptune' },
                { key: 'body-pluto', id: 'Pluto' }
            ];

            let html = '';
            let wheelData = [];

            bodies.forEach(body => {
                try {
                    const lon = Astronomy.EclipticLongitude(body.id, time);
                    const signKey = getZodiacSignKey(lon);
                    const degree = Math.floor(lon % 30);
                    const planetSymbol = celestialSymbols[body.key] || '✧';
                    const zodiacSymbol = celestialSymbols[signKey] || '✧';
                    const translatedBody = i18n[currentLang][body.key] || body.id;
                    const translatedSign = i18n[currentLang][signKey] || 'Unknown';

                    const isSun = body.id === 'Sun';
                    wheelData.push({ id: body.id, lon, symbol: planetSymbol, color: isSun ? '#f59e0b' : (body.id === 'Moon' ? '#94a3b8' : '#818cf8'), isSun });

                    html += `
                        <div class="planet-card-mini group shadow-xl ${isSun ? 'border-amber-500/50 bg-amber-500/5 scale-105 ring-1 ring-amber-500/20' : ''}">
                            <div class="flex items-center gap-2">
                                <span class="text-2xl ${isSun ? 'text-amber-400 animate-pulse' : 'text-amber-500'} drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform">${planetSymbol}</span>
                                <span class="text-[10px] font-bold text-slate-100 uppercase tracking-widest">${translatedBody}</span>
                                ${isSun ? '<span class="text-[8px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full font-bold ml-1">VITAL</span>' : ''}
                            </div>
                            <div class="flex items-center gap-1 mt-1 bg-slate-900/60 px-3 py-1 rounded-full border border-white/5">
                                <span class="text-sm text-indigo-400">${zodiacSymbol}</span>
                                <span class="text-[9px] font-medium text-amber-200/60">${degree}° ${translatedSign}</span>
                            </div>
                        </div>
                    `;
                } catch (planetErr) {
                    console.error(`Error for body ${body.id}:`, planetErr);
                }
            });

            list.innerHTML = html;
            renderZodiacWheel(wheelContainer, wheelData);
            showForecast(time);
        } catch (totalErr) {
            console.error("Planetary View Error:", totalErr);
            list.innerHTML = `<p class="col-span-full text-center text-rose-500">A cosmic disturbance occurred. Please refresh.</p>`;
        }
    }, 400);
};

function renderZodiacWheel(container, planets) {
    if (!container) return;
    const size = 400;
    const center = size / 2;
    const radius = size * 0.45;
    const innerRadius = radius * 0.7;
    const labelRadius = radius * 0.85;

    const signs = ['zodiac-aries', 'zodiac-taurus', 'zodiac-gemini', 'zodiac-cancer', 'zodiac-leo', 'zodiac-virgo', 'zodiac-libra', 'zodiac-scorpio', 'zodiac-sagittarius', 'zodiac-capricorn', 'zodiac-aquarius', 'zodiac-pisces'];

    let svg = `<svg width="100%" height="100%" viewBox="0 0 ${size} ${size}" class="animate-fade-in">
        <!-- Outer Circle -->
        <circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="rgba(245, 158, 11, 0.2)" stroke-width="1" />
        <circle cx="${center}" cy="${center}" r="${innerRadius}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1" />
    `;

    // Draw Sign Sectors
    signs.forEach((sign, i) => {
        const startAngle = (i * 30 - 90) * (Math.PI / 180);
        const endAngle = ((i + 1) * 30 - 90) * (Math.PI / 180);

        const x1 = center + radius * Math.cos(startAngle);
        const y1 = center + radius * Math.sin(startAngle);
        const x2 = center + radius * Math.cos(endAngle);
        const y2 = center + radius * Math.sin(endAngle);

        const xi1 = center + innerRadius * Math.cos(startAngle);
        const yi1 = center + innerRadius * Math.sin(startAngle);
        const xi2 = center + innerRadius * Math.cos(endAngle);
        const yi2 = center + innerRadius * Math.sin(endAngle);

        svg += `<path d="M ${xi1} ${yi1} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} L ${xi2} ${yi2} A ${innerRadius} ${innerRadius} 0 0 0 ${xi1} ${yi1}" 
            fill="rgba(245, 158, 11, ${i % 2 === 0 ? '0.03' : '0.01'})" 
            stroke="rgba(255, 255, 255, 0.1)" stroke-width="0.5" class="zodiac-sign-arc" />`;

        // Planet Symbol for Sign
        const labelAngle = (i * 30 + 15 - 90) * (Math.PI / 180);
        const lx = center + labelRadius * Math.cos(labelAngle);
        const ly = center + labelRadius * Math.sin(labelAngle);
        svg += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" fill="rgba(245, 158, 11, 0.5)" font-size="14">${celestialSymbols[sign]}</text>`;
    });

    // Draw Planets
    planets.forEach(p => {
        const angle = (p.lon - 90) * (Math.PI / 180);
        const px = center + (innerRadius + (radius - innerRadius) * 0.5) * Math.cos(angle);
        const py = center + (innerRadius + (radius - innerRadius) * 0.5) * Math.sin(angle);

        svg += `
            <g class="planet-marker ${p.isSun ? 'sun-marker' : ''}" style="color: ${p.color}">
                <circle cx="${px}" cy="${py}" r="${p.isSun ? '18' : '12'}" fill="rgba(15, 23, 42, 0.9)" stroke="currentColor" stroke-width="${p.isSun ? '2.5' : '1.5'}" />
                <text x="${px}" y="${py}" text-anchor="middle" dominant-baseline="middle" fill="currentColor" font-size="${p.isSun ? '16' : '12'}" font-weight="bold">${p.symbol}</text>
            </g>
        `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
}

async function renderTransitTimeline() {
    const timeline = document.getElementById('transit-timeline');
    if (!timeline) return;

    timeline.innerHTML = '<p class="text-center text-amber-500/50 py-10 animate-pulse uppercase tracking-widest text-xs">Scanning the Horizon...</p>';

    const bodies = [
        { key: 'body-sun', id: 'Sun' },
        { key: 'body-mercury', id: 'Mercury' },
        { key: 'body-venus', id: 'Venus' },
        { key: 'body-mars', id: 'Mars' }
    ];

    try {
        const events = [];
        const now = new Date();

        // Scan each day for the next 14 days
        for (let d = 0; d <= 14; d++) {
            const checkTime = new Date(now.getTime() + d * 24 * 60 * 60 * 1000);
            const prevTime = new Date(checkTime.getTime() - 24 * 60 * 60 * 1000);

            const aTime = Astronomy.MakeTime(checkTime);
            const aPrevTime = Astronomy.MakeTime(prevTime);

            bodies.forEach(body => {
                const lon = Astronomy.EclipticLongitude(body.id, aTime);
                const prevLon = Astronomy.EclipticLongitude(body.id, aPrevTime);

                const signIdx = Math.floor(lon / 30) % 12;
                const prevSignIdx = Math.floor(prevLon / 30) % 12;

                if (signIdx !== prevSignIdx) {
                    events.push({
                        date: checkTime,
                        body: body.key,
                        sign: `zodiac-${['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'][signIdx]}`
                    });
                }
            });

            // Moon phases as key milestones
            const moonPhase = Astronomy.MoonPhase(aTime);
            const prevMoonPhase = Astronomy.MoonPhase(aPrevTime);

            // Check for New Moon (0), First Quarter (90), Full Moon (180), Last Quarter (270)
            [0, 90, 180, 270].forEach(p => {
                if ((prevMoonPhase < p && moonPhase >= p) || (p === 0 && prevMoonPhase > 350 && moonPhase < 10)) {
                    events.push({
                        date: checkTime,
                        body: 'body-moon',
                        phase: p
                    });
                }
            });
        }

        if (events.length === 0) {
            timeline.innerHTML = '<div class="text-center py-10"><p class="text-slate-500 italic">No major transits detected in the next 14 days. The celestial tides are steady.</p></div>';
            return;
        }

        // Sort events by date
        events.sort((a, b) => a.date - b.date);

        const strings = i18n[currentLang] || i18n['en'];
        const transitAdvice = {
            "body-sun": {
                "zodiac-aries": {
                    en: { do: "Initiate new projects that require bold action.", watch: "Impulsiveness and burnout.", summary: "Energy surges for leadership and self-discovery." },
                    vn: { do: "Bắt đầu những dự án mới đòi hỏi sự can đảm.", watch: "Tính bốc đồng và kiệt sức.", summary: "Năng lượng bùng nổ cho sự dẫn đầu và khám phá bản thân." }
                },
                "zodiac-taurus": {
                    en: { do: "Focus on financial stability and sensual pleasures.", watch: "Stubbornness and overindulgence.", summary: "A period of grounding and steady progress." },
                    vn: { do: "Tập trung vào sự ổn định tài chính và hưởng thụ.", watch: "Sự bướng bỉnh và chiều chuộng bản thân quá mức.", summary: "Giai đoạn của sự vững chãi và tiến triển bền bỉ." }
                },
                "zodiac-gemini": {
                    en: { do: "Network, learn new skills, and communicate ideas.", watch: "Scattered energy and gossip.", summary: "Curiosity and social connection take center stage." },
                    vn: { do: "Mở rộng mạng lưới, học kỹ năng mới và chia sẻ ý tưởng.", watch: "Năng lượng bị phân tán và những lời đồn thổi.", summary: "Sự tò mò và kết nối xã hội là tâm điểm." }
                }
                // Fallback for other signs would be needed but for demo purposes
            },
            "body-venus": {
                "zodiac-pisces": {
                    en: { do: "Express unconditional love and creativity.", watch: "Idealizing others or escaping reality.", summary: "Romantic and spiritual heights." },
                    vn: { do: "Thể hiện tình yêu vô điều kiện và sự sáng tạo.", watch: "Lý tưởng hóa người khác hoặc trốn tránh thực tại.", summary: "Đỉnh cao của sự lãng mạn và tâm linh." }
                }
            }
        };

        events.forEach(ev => {
            const dateStr = ev.date.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'vi-VN', { month: 'short', day: 'numeric' });
            const bodyName = strings[ev.body];
            const bodySymbol = celestialSymbols[ev.body];
            const daysLeft = Math.ceil((ev.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            const daysLabel = currentLang === 'en' ? `${daysLeft} days left` : `${daysLeft} ngày tới`;

            let description = '';
            let detailedAdviceHtml = '';

            if (ev.sign) {
                const signName = strings[ev.sign];
                const signSymbol = celestialSymbols[ev.sign];
                description = currentLang === 'en'
                    ? `moves into <strong>${signName}</strong> ${signSymbol}`
                    : `di chuyển vào cung <strong>${signName}</strong> ${signSymbol}`;

                const advice = transitAdvice[ev.body] && transitAdvice[ev.body][ev.sign] ? transitAdvice[ev.body][ev.sign][currentLang] : null;
                if (advice) {
                    detailedAdviceHtml = `
                        <div class="transit-advice-box animate-fade-in" style="animation-delay: 0.2s">
                            <p class="advice-content text-amber-200/80 mb-2 italic">"${advice.summary}"</p>
                            <div class="advice-section">
                                <span class="advice-header"><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400"></i> ${currentLang === 'en' ? 'What to do' : 'Nên làm'}</span>
                                <p class="advice-content">${advice.do}</p>
                            </div>
                            <div class="advice-section">
                                <span class="advice-header"><i data-lucide="alert-triangle" class="w-3 h-3 text-rose-400"></i> ${currentLang === 'en' ? 'What to watch' : 'Đề phòng'}</span>
                                <p class="advice-content">${advice.watch}</p>
                            </div>
                        </div>
                    `;
                }
            } else if (ev.phase !== undefined) {
                const phaseNames = { 0: 'moon-0', 90: 'moon-2', 180: 'moon-4', 270: 'moon-6' };
                description = currentLang === 'en'
                    ? `reaches <strong>${strings[phaseNames[ev.phase]]}</strong>`
                    : `đạt tới pha <strong>${strings[phaseNames[ev.phase]]}</strong>`;
            }

            html += `
                <div class="transit-item fade-in">
                    <div class="flex justify-between items-center mb-2 pr-2">
                        <span class="transit-date m-0">${dateStr}</span>
                        <span class="days-badge">${daysLabel}</span>
                    </div>
                    <div class="transit-card flex flex-col gap-3">
                        <div class="flex items-center gap-4">
                            <span class="text-2xl text-amber-500 py-1 px-2 bg-amber-500/10 rounded-lg">${bodySymbol}</span>
                            <div class="flex flex-col">
                                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-[.25em]">${bodyName}</span>
                                <span class="text-sm text-slate-100">${description}</span>
                            </div>
                        </div>
                        ${detailedAdviceHtml}
                    </div>
                </div>
            `;
        });

        timeline.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();

    } catch (err) {
        console.error("Timeline error:", err);
        timeline.innerHTML = '<p class="text-rose-500 text-center">Failed to scan the timeline.</p>';
    }
}

function showForecast(time) {
    const forecastEl = document.getElementById('planetary-forecast');
    const forecastText = document.getElementById('forecast-text');

    console.log('showForecast called', { forecastEl, forecastText, time, hasAstronomy: typeof Astronomy !== 'undefined', hasForecastAdvice: typeof forecastAdvice !== 'undefined' });

    if (!forecastEl || !forecastText) {
        console.error('Forecast elements not found');
        return;
    }

    // Always show the forecast box
    forecastEl.classList.remove('hidden');

    // Check if forecastAdvice is loaded
    if (typeof forecastAdvice === 'undefined') {
        console.error('forecastAdvice not loaded');
        forecastText.innerHTML = '<span class="text-rose-400">Forecast data not available. Please refresh the page.</span>';
        return;
    }

    // Check if Astronomy library is available
    if (typeof Astronomy === 'undefined') {
        console.error('Astronomy library not loaded');
        forecastText.innerHTML = '<span class="text-rose-400">Astronomy engine not loaded. Please refresh the page.</span>';
        return;
    }

    try {
        // Validate time parameter
        if (!time) {
            throw new Error('Invalid time parameter');
        }

        // Calculate Sun's ecliptic longitude using SunPosition
        const sunPos = Astronomy.SunPosition(time);
        const sunLon = sunPos.elon;
        const sunSign = getZodiacSignKey(sunLon);
        const moonPhase = Astronomy.MoonPhase(time);

        console.log('Forecast data:', { sunLon, sunSign, moonPhase, currentLang });

        // Check if the forecast data exists for this sign
        if (!forecastAdvice["body-sun"] || !forecastAdvice["body-sun"][sunSign]) {
            throw new Error(`Forecast data not found for sign: ${sunSign}`);
        }

        const isWaxing = moonPhase < 180;
        const sunForecast = forecastAdvice["body-sun"][sunSign][currentLang];
        const moonCycleForecast = forecastAdvice["moon-cycle"][isWaxing ? "waxing" : "waning"][currentLang];

        console.log('Forecast text:', { sunForecast, moonCycleForecast });

        if (!sunForecast || !moonCycleForecast) {
            throw new Error(`Missing forecast translation for language: ${currentLang}`);
        }

        forecastText.innerHTML = `${sunForecast} ${moonCycleForecast}`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (e) {
        console.error("Forecast generation error:", e);
        let errorMsg = 'Unknown error occurred';
        if (e) {
            if (e.message) {
                errorMsg = e.message;
            } else if (typeof e === 'string') {
                errorMsg = e;
            } else {
                errorMsg = String(e);
            }
        }
        forecastText.innerHTML = '<span class="text-rose-400">Unable to generate forecast. Error: ' + errorMsg + '</span>';
    }
}

window.closePlanetsView = () => {
    document.getElementById('planets-view').classList.add('hidden');
    document.body.style.overflow = '';
};

window.closeGallery = () => {
    document.getElementById('card-gallery-modal').classList.add('hidden');
    document.body.style.overflow = '';
    // DON'T reset selectedReversals here - it needs to persist for startReading()
    // selectedReversals will be reset when openGallery() is called next time
};

window.filterCards = (category) => {
    const cards = document.querySelectorAll('.gallery-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update button states
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Find and activate the clicked button
    buttons.forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if (
            (category === 'all' && btnText.includes('all')) ||
            (category === 'major' && btnText.includes('major')) ||
            (category === 'wands' && btnText.includes('wands')) ||
            (category === 'cups' && btnText.includes('cups')) ||
            (category === 'swords' && btnText.includes('swords')) ||
            (category === 'pentacles' && btnText.includes('pentacles'))
        ) {
            btn.classList.add('active');
        }
    });

    // Filter cards
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
};

function startReading() {
    // Immediate transition to the reading state
    const selectionView = document.getElementById('selection-view');
    const readingView = document.getElementById('reading-view');
    const resetBtn = document.getElementById('reset-btn');

    if (selectionView) selectionView.classList.add('hidden');
    if (readingView) readingView.classList.remove('hidden');
    if (resetBtn) resetBtn.classList.remove('hidden');

    if (selectionMode === 'manual') {
        const interpView = document.getElementById('reading-interpretation');
        if (interpView) {
            interpView.classList.remove('hidden');
            interpView.classList.add('fade-in');
        }

        dealCards(true);

        // For manual mode, auto-flip cards after a short delay so user sees results
        setTimeout(() => {
            const cards = document.querySelectorAll('.mystic-card:not(.flipped)');
            cards.forEach((card, displayIdx) => {
                const cardIndex = parseInt(card.getAttribute('data-card-index'));
                const cardInner = card.querySelector('.card-inner');
                if (cardInner && !isNaN(cardIndex)) {
                    setTimeout(() => flipCard(cardInner, cardIndex), displayIdx * 150);
                }
            });

            // Scroll to the layout after flipping starts
            setTimeout(() => {
                const layout = document.getElementById('card-layout');
                if (layout) layout.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }, 800);
    } else {
        setupDeckPile();
    }
}

function setupDeckPile() {
    const pile = document.getElementById('deck-pile');
    pile.classList.remove('hidden');
    pile.innerHTML = `
        <div class="flex flex-col items-center gap-6">
            <div class="mystic-card mx-auto pointer-events-none">
                <div class="card-inner">
                    <div class="card-back border-2 border-amber-500/30 shadow-2xl">
                    </div>
                </div>
            </div>
            <button onclick="dealCards()" class="shuffle-deal-btn px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 border-2 border-amber-400/50">
                <i data-lucide="sparkles" class="w-5 h-5"></i>
                <span class="text-lg tracking-wide">${i18n[currentLang]['shuffle-deal']}</span>
                <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
        </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.dealCards = (isManual = false) => {
    const layout = document.getElementById('card-layout');
    layout.classList.remove('hidden');
    layout.innerHTML = ''; drawnCards = []; reversedList = [];
    let count = currentSpread === 'daily' ? 1 : (typeof currentSpread === 'number' ? currentSpread : 3);
    if (isManual) {
        selectedIndices.forEach(idx => {
            drawnCards.push(currentDeck[idx]);
            // Use manually selected reversal state
            const canReverse = currentDeck !== lenormandData;
            const isReversed = canReverse && selectedReversals[idx] === true;
            reversedList.push(isReversed);
        });
    } else {
        const shuffled = [...currentDeck].sort(() => Math.random() - 0.5);
        for (let i = 0; i < count; i++) drawnCards.push(shuffled[i]);
        // Random reversals for random mode
        drawnCards.forEach(c => {
            const canReverse = currentDeck !== lenormandData;
            reversedList.push(canReverse ? Math.random() > 0.5 : false);
        });
    }
    layout.className = 'flex-grow flex flex-wrap justify-center gap-6 items-center p-8';
    drawnCards.forEach((cardData, i) => {
        const rev = reversedList[i];
        const cardEl = document.createElement('div');
        cardEl.className = 'mystic-card fade-in transition-all duration-700';
        cardEl.setAttribute('data-card-index', i); // Add tracking for correct index
        cardEl.innerHTML = `<div class="card-inner" onclick="flipCard(this, ${i})">
            <div class="card-back bg-slate-900 border border-white/10 flex items-center justify-center p-4">
                <i data-lucide="moon" class="w-8 h-8 text-slate-700"></i>
            </div>
            <div class="card-front bg-slate-950 border border-amber-500/20 p-4 flex flex-col items-center">
                <div class="w-full h-full flex flex-col items-center ${rev ? 'rotate-180' : ''}">
                    <div class="card-image-placeholder w-full h-[55%] mb-4 bg-amber-500/5 rounded-lg flex items-center justify-center">
                        <i data-lucide="sparkles" class="w-8 h-8 text-amber-500/10"></i>
                    </div>
                    <div>
                        <h4 class="text-amber-400 font-bold text-sm mb-1">${cardData.en.name}</h4>
                        <p class="text-[8px] text-slate-500 uppercase tracking-widest">${cardData.element || ''}</p>
                    </div>
                </div>
            </div>
        </div>`;
        layout.appendChild(cardEl);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
    document.getElementById('deck-pile').classList.add('hidden');
    prepareInterpretation();
    if (selectionMode === 'random') {
        setTimeout(() => {
            const cards = document.querySelectorAll('.mystic-card');
            cards.forEach((card, displayIdx) => {
                const cardIndex = parseInt(card.getAttribute('data-card-index'));
                const cardInner = card.querySelector('.card-inner');
                if (cardInner && !isNaN(cardIndex)) {
                    setTimeout(() => flipCard(cardInner, cardIndex), displayIdx * 100);
                }
            });
        }, 1000);
    }
};

function prepareInterpretation() {
    document.getElementById('card-details-list').innerHTML = '';

    const synthesisTextEl = document.getElementById('synthesis-text');

    // Handle Daily Draw and numeric spreads (3, 5, 14) with HTML
    if (currentSpread === 'daily' || typeof currentSpread === 'number') {
        synthesisTextEl.innerHTML = generateSynthesis();
    } else {
        synthesisTextEl.innerText = generateSynthesis();
    }

    // Add aspects section after synthesis (only for non-daily spreads)
    const synthesisBox = document.getElementById('synthesis-box');
    let aspectsContainer = document.getElementById('aspects-container');

    if (currentSpread !== 'daily' && currentSpread !== 'yesno') {
        if (!aspectsContainer) {
            aspectsContainer = document.createElement('div');
            aspectsContainer.id = 'aspects-container';
            aspectsContainer.className = 'mt-6';
            synthesisBox.appendChild(aspectsContainer);
        }
        aspectsContainer.innerHTML = generateAspects();
    } else {
        // Remove aspects container for daily draw and yes/no
        if (aspectsContainer) {
            aspectsContainer.remove();
        }
    }

    updateHarmonyReport();
}

function updateHarmonyReport() {
    const report = document.getElementById('harmony-report');
    const counts = { Fire: 0, Water: 0, Air: 0, Earth: 0 };
    drawnCards.forEach(c => { if (c.element) counts[c.element]++; });
    let max = 0, dominant = 'mixed';
    for (const [e, v] of Object.entries(counts)) { if (v > max) { max = v; dominant = e.toLowerCase(); } }
    if (max <= drawnCards.length / 3) dominant = 'mixed';
    report.innerText = i18n[currentLang][`harmony-${dominant}`];
    report.classList.remove('hidden');
}

window.flipCard = (el, index) => {
    const cardContainer = el.parentElement; if (cardContainer.classList.contains('flipped')) return;
    cardContainer.classList.add('flipped'); showCardInterpretation(index); checkAllFlipped();
};

function generateDetailedMeaning(card, reversed, lang) {
    const cardName = card.en.name;
    let deepData = null;

    if (currentDeck === tarotData) {
        deepData = typeof tarotDeepInterpretations !== 'undefined' ? tarotDeepInterpretations[cardName] : null;
    } else {
        // Lenormand: Try exact match, then try removing "The " prefix
        if (typeof lenormandDeepInterpretations !== 'undefined') {
            deepData = lenormandDeepInterpretations[cardName];
            if (!deepData && cardName.startsWith('The ')) {
                deepData = lenormandDeepInterpretations[cardName.replace(/^The\s+/, '')];
            }
        }
    }

    // Create contextual detailed meanings based on card name and properties
    let detailed = "";

    if (lang === 'en') {
        if (reversed) {
            detailed = `When reversed, ${cardName} asks you to look inward and reconsider your approach. `;
            detailed += `The energy may be blocked, delayed, or requiring a different perspective. `;
            detailed += `This isn't a negative omen, but rather an invitation to pause and realign with your authentic path.`;
        } else {
            detailed = `${cardName} appears in its upright position, bringing its full power and potential into your reading. `;

            // Add context based on keywords
            const kws = card[lang].keywords || [];
            if (kws.length > 0) {
                detailed += `Key themes include ${kws.join(' and ').toLowerCase()}, `;
                detailed += `inviting you to embrace these qualities in your current situation. `;
            }

            // Add element context
            if (card.element) {
                const elementMeanings = {
                    'Fire': 'bringing passionate action and creative drive',
                    'Water': 'flowing with emotional depth and intuitive wisdom',
                    'Air': 'offering clarity of thought and communication',
                    'Earth': 'grounding you in practical matters and stability'
                };
                detailed += `The ${card.element} element is ${elementMeanings[card.element] || 'active'} here.`;
            }

            if (deepData && deepData.en && deepData.en.deep) {
                detailed += `<br><br><span class="text-amber-400/80 font-bold block mb-1">Extended Insight:</span> ${deepData.en.deep}`;
            }
        }
    } else {
        if (reversed) {
            detailed = `Khi ở vị trí ngược, ${cardName} yêu cầu bạn nhìn vào nội tâm và xem xét lại cách tiếp cận. `;
            detailed += `Năng lượng có thể bị chặn, trì hoãn, hoặc cần một góc nhìn khác. `;
            detailed += `Đây không phải điềm xấu, mà là lời mời gọi tạm dừng và điều chỉnh lại với con đường chân thật của bạn.`;
        } else {
            detailed = `${cardName} xuất hiện ở vị trí xuôi, mang đầy đủ sức mạnh và tiềm năng vào trải bài của bạn. `;

            const kws = card[lang].keywords || [];
            if (kws.length > 0) {
                detailed += `Các chủ đề chính bao gồm ${kws.join(' và ').toLowerCase()}, `;
                detailed += `mời gọi bạn đón nhận những phẩm chất này trong tình huống hiện tại. `;
            }

            if (card.element) {
                const elementMeanings = {
                    'Fire': 'mang đến hành động đam mê và động lực sáng tạo',
                    'Water': 'chảy với chiều sơ cảm xúc và trí tuệ trực giác',
                    'Air': 'mang lại sự sáng suốt trong suy nghĩ và giao tiếp',
                    'Earth': 'giúp bạn vững chắc trong các vấn đề thực tế và ổn định'
                };
                detailed += `Nguyên tố ${card.element} đang ${elementMeanings[card.element] || 'hoạt động'} ở đây.`;
            }

            if (deepData && deepData.vn && deepData.vn.deep) {
                detailed += `<br><br><span class="text-amber-400/80 font-bold block mb-1">Cái nhìn sâu sắc:</span> ${deepData.vn.deep}`;
            }
        }
    }

    return detailed;
}

function showCardInterpretation(index) {
    const list = document.getElementById('card-details-list');
    const interpView = document.getElementById('reading-interpretation');
    const card = drawnCards[index]; const rev = reversedList[index];

    // Check if this card interpretation already exists
    const existingCard = list.querySelector(`[data-card-index="${index}"]`);
    if (existingCard) {
        return; // Skip duplicate
    }

    interpView.classList.remove('hidden');
    const cardEl = document.createElement('div');
    cardEl.className = "glass p-6 rounded-2xl border border-white/5 animate-slide-up bg-white/5";
    cardEl.setAttribute('data-card-index', index); // Add tracking attribute
    const meaningText = rev ? i18n[currentLang]['rev-note'] + card[currentLang].meaning : card[currentLang].meaning;

    // Translation for Element and Astrology
    const translatedElem = i18n[currentLang][`elem-${card.element.toLowerCase()}`] || card.element;
    const astroKey = Object.keys(i18n.en).find(k => i18n.en[k] === card.astrology) || '';
    const translatedAstro = (astroKey && i18n[currentLang][astroKey]) ? i18n[currentLang][astroKey] : (card.astrology || '');

    const elemSymbol = translatedElem ? `<span class="px-2 py-0.5 rounded bg-amber-500/10 text-[10px] text-amber-500 border border-amber-500/20">${translatedElem}</span>` : '';
    const astroSymbol = translatedAstro ? `<span class="px-2 py-0.5 rounded bg-indigo-500/10 text-[10px] text-indigo-400 border border-indigo-500/20">${translatedAstro}</span>` : '';

    // Generate detailed interpretation
    const detailedMeaning = generateDetailedMeaning(card, rev, currentLang);

    cardEl.innerHTML = `
        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center border-b border-white/5 pb-4">
                <div class="flex items-center gap-3">
                    <span class="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-xs font-bold text-amber-500 border border-amber-500/20">${index + 1}</span>
                    <h5 class="text-amber-400 font-bold font-['Playfair_Display'] text-xl">${card.en.name}</h5>
                    <div class="flex gap-2 ml-2">
                        ${elemSymbol}
                        ${astroSymbol}
                    </div>
                </div>
                ${currentDeck === lenormandData ? '' : `
                <span class="text-[10px] uppercase font-bold tracking-widest ${rev ? 'text-indigo-400' : 'text-amber-500/60'}">
                    ${rev ? i18n[currentLang]['reversed'] : i18n[currentLang]['upright']}
                </span>`}
            </div>
            <p class="text-slate-300 text-sm leading-relaxed">${meaningText}</p>
            <div class="mt-4 pt-4 border-t border-white/5">
                <p id="card-desc-${index}" class="text-slate-400 text-xs leading-relaxed italic">${detailedMeaning}</p>
            </div>
            
            <!-- Deep Guidance Button -->
            <button onclick="toggleDeepGuidance(${index})" class="mt-2 flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-amber-500-alt hover:text-amber-400 transition-colors">
                <i data-lucide="sparkles" class="w-3 h-3"></i>
                <span class="lang-target">${currentLang === 'en' ? 'Deep Guidance' : 'Dẫn dắt sâu sắc'}</span>
                <i data-lucide="chevron-down" class="w-3 h-3 transition-transform" id="deep-chevron-${index}"></i>
            </button>
            <div id="deep-guidance-${index}" class="hidden mt-4 space-y-4 animate-fade-in border-l-2 border-amber-500/20 pl-4 py-2 bg-amber-500/5 rounded-r-lg">
                <!-- Deep guidance content injected here -->
            </div>
        </div>
    `;
    list.appendChild(cardEl);
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleDeepGuidance(index) {
    const guidBox = document.getElementById(`deep-guidance-${index}`);
    const chevron = document.getElementById(`deep-chevron-${index}`);
    const isHidden = guidBox.classList.contains('hidden');

    if (isHidden) {
        // Populate if empty
        if (guidBox.innerHTML.trim() === '') {
            const card = drawnCards[index];
            const cardName = card.en.name;
            let deepData = null;

            if (currentDeck === tarotData) {
                deepData = typeof tarotDeepInterpretations !== 'undefined' ? tarotDeepInterpretations[cardName] : null;
            } else {
                // Lenormand: Try exact match, then try removing "The " prefix
                if (typeof lenormandDeepInterpretations !== 'undefined') {
                    deepData = lenormandDeepInterpretations[cardName];
                    if (!deepData && cardName.startsWith('The ')) {
                        deepData = lenormandDeepInterpretations[cardName.replace(/^The\s+/, '')];
                    }
                }
            }

            if (deepData && deepData[currentLang]) {
                const data = deepData[currentLang];
                let html = '';

                if (data.love) {
                    html += `
                        <div class="space-y-1">
                            <span class="text-[10px] text-rose-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <i data-lucide="heart" class="w-2.5 h-2.5"></i> ${currentLang === 'en' ? 'Love & Relationships' : 'Tình duyên'}
                            </span>
                            <p class="text-xs text-slate-300 leading-relaxed">${data.love}</p>
                        </div>
                    `;
                }

                if (data.career) {
                    html += `
                        <div class="space-y-1">
                            <span class="text-[10px] text-blue-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <i data-lucide="briefcase" class="w-2.5 h-2.5"></i> ${currentLang === 'en' ? 'Career & Finance' : 'Sự nghiệp'}
                            </span>
                            <p class="text-xs text-slate-300 leading-relaxed">${data.career}</p>
                        </div>
                    `;
                }

                if (data.spiritual) {
                    html += `
                        <div class="space-y-1">
                            <span class="text-[10px] text-purple-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <i data-lucide="sparkles" class="w-2.5 h-2.5"></i> ${currentLang === 'en' ? 'Spiritual Advice' : 'Lời khuyên tâm linh'}
                            </span>
                            <p class="text-xs text-slate-300 leading-relaxed">${data.spiritual}</p>
                        </div>
                    `;
                }

                if (data.timing) {
                    html += `
                        <div class="space-y-1">
                            <span class="text-[10px] text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <i data-lucide="clock" class="w-2.5 h-2.5"></i> ${currentLang === 'en' ? 'Divine Timing' : 'Thời điểm'}
                            </span>
                            <p class="text-xs text-slate-300 leading-relaxed">${data.timing}</p>
                        </div>
                    `;
                }

                if (data.events) {
                    html += `
                        <div class="space-y-1">
                            <span class="text-[10px] text-amber-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <i data-lucide="calendar" class="w-2.5 h-2.5"></i> ${currentLang === 'en' ? 'Potential Events' : 'Sự kiện tiềm năng'}
                            </span>
                            <p class="text-xs text-slate-300 leading-relaxed">${data.events}</p>
                        </div>
                    `;
                }

                if (data.warnings) {
                    html += `
                        <div class="space-y-1">
                            <span class="text-[10px] text-rose-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <i data-lucide="alert-triangle" class="w-2.5 h-2.5"></i> ${currentLang === 'en' ? 'Things to Avoid' : 'Điều cần tránh'}
                            </span>
                            <p class="text-xs text-slate-300 leading-relaxed">${data.warnings}</p>
                        </div>
                    `;
                }

                if (html === '') {
                    html = `<p class="text-xs text-slate-500 italic">${currentLang === 'en' ? 'No deep guidance available for this card yet.' : 'Chưa có dẫn dắt sâu sắc cho lá bài này.'}</p>`;
                }

                guidBox.innerHTML = html;
                if (typeof lucide !== 'undefined') lucide.createIcons();
            } else {
                guidBox.innerHTML = `<p class="text-xs text-slate-500 italic">${currentLang === 'en' ? 'No deep guidance available for this card yet.' : 'Chưa có dẫn dắt sâu sắc cho lá bài này.'}</p>`;
            }
        }

        guidBox.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
    } else {
        guidBox.classList.add('hidden');
        chevron.style.transform = 'rotate(0deg)';
    }
}

function checkAllFlipped() {
    const cards = document.querySelectorAll('.mystic-card');
    const flippedCount = document.querySelectorAll('.mystic-card.flipped').length;
    if (flippedCount === cards.length && cards.length > 0) {
        const s = document.getElementById('synthesis-box');
        s.classList.remove('hidden'); s.classList.add('fade-in');
        s.querySelector('h3').innerText = i18n[currentLang]['synthesis-title'];
        s.scrollIntoView({ behavior: 'smooth' });

        // Show floating save button
        const floatingBtn = document.getElementById('floating-save-btn');
        if (floatingBtn) {
            setTimeout(() => {
                floatingBtn.classList.remove('hidden');
                floatingBtn.classList.add('flex');
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 1000);
        }
    }
}

function generateSynthesis() {
    if (drawnCards.length === 0) return "";

    const lang = currentLang;
    const cards = drawnCards;

    // Handle Daily Draw separately
    if (currentSpread === 'daily') {
        return generateEnhancedDailyInterpretation(cards[0], reversedList[0], lang);
    }

    // Handle 3, 5, 14 card spreads with enhanced synthesis
    if (typeof currentSpread === 'number') {
        return generateEnhancedSynthesis();
    }

    if (currentSpread === 'yesno') {
        // Comprehensive keyword categorization for nuanced Yes/No readings
        const positiveKeywords = {
            en: ['Luck', 'Success', 'Joy', 'Growth', 'Creation', 'Optimism', 'Victory', 'Love', 'Healing', 'Hope',
                'Renewal', 'Harmony', 'Positivity', 'Fun', 'Warmth', 'Fulfillment', 'Abundance', 'Partnership',
                'Manifestation', 'Willpower', 'Courage', 'Inspiration', 'Action', 'Celebration', 'New Journey'],
            vn: ['May mắn', 'Thành công', 'Vui vẻ', 'Phát triển', 'Thịnh vượng', 'Tình yêu', 'Chữa lành', 'Hy vọng',
                'Làm mới', 'Hài hòa', 'Niềm vui', 'Mãn nguyện', 'Phong nhiêu', 'Sự đồng điệu', 'Sáng tạo',
                'Sức mạnh ý chí', 'Can đảm', 'Cảm hứng', 'Hành động', 'Lễ ăn mừng', 'Hành trình mới']
        };

        const negativeKeywords = {
            en: ['Conflict', 'Loss', 'Grief', 'Burden', 'Chaos', 'Fear', 'Restriction', 'Ending', 'Upheaval',
                'Illusion', 'Confusion', 'Apathy', 'Boredom', 'Temptation', 'Addiction', 'Defense', 'Overwhelm'],
            vn: ['Xung đột', 'Mất mát', 'Hối tiếc', 'Gánh nặng', 'Hỗn loạn', 'Sợ hãi', 'Ràng buộc', 'Kết thúc',
                'Biến động', 'Ảo tưởng', 'Bối rối', 'Thờ ơ', 'Chán nản', 'Cám dỗ', 'Bảo vệ', 'Quá tải']
        };

        const neutralKeywords = {
            en: ['Balance', 'Choice', 'Transition', 'Patience', 'Reflection', 'Wait', 'Perspective', 'Guidance'],
            vn: ['Cân bằng', 'Lựa chọn', 'Quá độ', 'Kiên nhẫn', 'Chiêm nghiệm', 'Chờ đợi', 'Góc nhìn', 'Chỉ dẫn']
        };

        let positiveScore = 0;
        let negativeScore = 0;
        let neutralScore = 0;
        let cardAnalysis = [];

        // Analyze each card for its energy contribution
        cards.forEach((c, i) => {
            const kws = c[lang].keywords || [];
            const meaning = c[lang].meaning.toLowerCase();
            const cardName = c.en.name;
            const isReversed = reversedList[i];

            let cardEnergy = 0;
            let energyType = 'neutral';

            // Check for positive indicators
            const hasPositive = positiveKeywords[lang].some(pk =>
                kws.some(kw => kw.toLowerCase().includes(pk.toLowerCase())) ||
                meaning.includes(pk.toLowerCase())
            );

            // Check for negative indicators
            const hasNegative = negativeKeywords[lang].some(nk =>
                kws.some(kw => kw.toLowerCase().includes(nk.toLowerCase())) ||
                meaning.includes(nk.toLowerCase())
            );

            // Check for neutral indicators
            const hasNeutral = neutralKeywords[lang].some(ntk =>
                kws.some(kw => kw.toLowerCase().includes(ntk.toLowerCase())) ||
                meaning.includes(ntk.toLowerCase())
            );

            // Determine card energy
            if (isReversed) {
                // Reversed cards flip or weaken their energy
                if (hasPositive) {
                    cardEnergy = -1;
                    energyType = 'negative';
                    negativeScore += 1;
                } else if (hasNegative) {
                    cardEnergy = -1;
                    energyType = 'negative';
                    negativeScore += 1;
                } else {
                    cardEnergy = 0;
                    energyType = 'neutral';
                    neutralScore += 0.5;
                }
            } else {
                // Upright cards maintain their natural energy
                if (hasPositive && !hasNegative) {
                    cardEnergy = 1;
                    energyType = 'positive';
                    positiveScore += 1;
                } else if (hasNegative && !hasPositive) {
                    cardEnergy = -1;
                    energyType = 'negative';
                    negativeScore += 1;
                } else if (hasNeutral || (hasPositive && hasNegative)) {
                    cardEnergy = 0;
                    energyType = 'neutral';
                    neutralScore += 0.5;
                } else {
                    // Default for cards without clear indicators
                    cardEnergy = 0;
                    energyType = 'neutral';
                    neutralScore += 0.5;
                }
            }

            cardAnalysis.push({ name: cardName, energy: cardEnergy, type: energyType, reversed: isReversed });
        });

        // Calculate final decision based on card energies
        const totalCards = cards.length;
        const positiveRatio = positiveScore / totalCards;
        const negativeRatio = negativeScore / totalCards;
        const netScore = positiveScore - negativeScore;

        let selectedAnswer;
        let answerIndex;
        const resultsArray = i18n[lang]['yesno-yes'];
        const negativeArray = i18n[lang]['yesno-no'];

        // Decision logic based on card analysis
        if (netScore >= 2) {
            // Strong Yes - majority positive cards
            answerIndex = positiveRatio >= 0.75 ? 0 : (positiveRatio >= 0.67 ? 1 : 2);
            selectedAnswer = resultsArray[answerIndex];
        } else if (netScore === 1) {
            // Moderate Yes - slight positive lean
            answerIndex = 3;
            selectedAnswer = resultsArray[answerIndex];
        } else if (netScore === 0) {
            // Neutral - depends on neutralScore
            if (neutralScore >= totalCards * 0.6) {
                // High neutral energy suggests waiting/patience
                answerIndex = 1; // More cautious No
                selectedAnswer = negativeArray[answerIndex];
            } else {
                // Mixed signals, lean towards caution
                answerIndex = 2; // Timing not aligned
                selectedAnswer = negativeArray[answerIndex];
            }
        } else if (netScore === -1) {
            // Moderate No
            answerIndex = 3; // Reconsider
            selectedAnswer = negativeArray[answerIndex];
        } else {
            // Strong No - majority negative cards
            answerIndex = negativeRatio >= 0.75 ? 0 : (negativeRatio >= 0.67 ? 4 : 5);
            selectedAnswer = negativeArray[answerIndex];
        }

        const intro = lang === 'en' ? "The stars whisper through the veil of time... " : "Những vì sao thầm thì qua bức màn thời gian... ";
        return intro + selectedAnswer;
    }

    // Dynamic card-specific synthesis for general spreads
    const cardNames = cards.map(c => c.en.name);
    const cardMeanings = cards.map(c => c[lang].meaning);
    const elements = [...new Set(cards.map(c => i18n[lang][`elem-${c.element?.toLowerCase()}`] || c.element).filter(Boolean))];

    // Extract key themes from the cards
    const allKeywords = cards.flatMap(c => c[lang].keywords || []);
    const dominantThemes = allKeywords.slice(0, 3).join(', ');

    // Determine the overall energy
    const positiveCards = cards.filter((c, i) => {
        const kws = c[lang].keywords || [];
        const posWords = lang === 'en'
            ? ['Success', 'Joy', 'Growth', 'Love', 'Victory', 'Healing', 'Renewal', 'Hope', 'Harmony']
            : ['Thành công', 'Vui vẻ', 'Phát triển', 'Tình yêu', 'Chiến thắng', 'Chữa lành', 'Hy vọng', 'Hài hòa'];
        return !reversedList[i] && kws.some(kw => posWords.some(pw => kw.includes(pw)));
    });

    const challengeCards = cards.filter((c, i) => {
        const kws = c[lang].keywords || [];
        const chalWords = lang === 'en'
            ? ['Conflict', 'Loss', 'Burden', 'Chaos', 'Fear', 'Restriction', 'Endings']
            : ['Xung đột', 'Mất mát', 'Gánh nặng', 'Hỗn loạn', 'Sợ hãi', 'Ràng buộc', 'Kết thúc'];
        return reversedList[i] || kws.some(kw => chalWords.some(cw => kw.includes(cw)));
    });

    const energyRatio = positiveCards.length / cards.length;

    let text = "";
    if (lang === 'en') {
        // Opening that reflects the actual cards
        if (energyRatio > 0.6) {
            text = `The cards reveal a path illuminated by hope and possibility. With ${cardNames[0]} leading your journey, `;
        } else if (energyRatio < 0.4) {
            text = `The reading unveils a time of challenge and transformation. Beginning with ${cardNames[0]}, `;
        } else {
            text = `The cards present a delicate balance of light and shadow. ${cardNames[0]} sets the tone for `;
        }

        // Middle section based on center card and themes
        const centerCard = cards[Math.floor(cards.length / 2)];
        text += `the cosmic energies weave together themes of ${dominantThemes.toLowerCase()}. `;
        text += `At the heart of this reading, ${centerCard.en.name} speaks of ${centerCard[lang].meaning.toLowerCase()} `;

        // Closing based on elements and final card
        text += `The interplay of ${elements.join(' and ')} creates a unique resonance that guides you `;
        if (cards.length > 1) {
            const finalCard = cards[cards.length - 1];
            text += `toward ${finalCard.en.name}, which ${reversedList[cards.length - 1] ? 'challenges you to reconsider' : 'offers the potential for'} ${finalCard[lang].keywords?.[0]?.toLowerCase() || 'transformation'}. `;
        }
        text += `Trust in this unfolding journey, for the universe speaks through these ancient symbols with wisdom meant precisely for you.`;

    } else {
        // Vietnamese version with same dynamic structure
        if (energyRatio > 0.6) {
            text = `Các lá bài hé lộ một con đường được chiếu sáng bởi hy vọng và khả năng. Với ${cardNames[0]} dẫn đầu hành trình của bạn, `;
        } else if (energyRatio < 0.4) {
            text = `Trải bài mở ra một thời kỳ của thử thách và chuyển hóa. Bắt đầu từ ${cardNames[0]}, `;
        } else {
            text = `Các lá bài trình bày một sự cân bằng tinh tế giữa ánh sáng và bóng tối. ${cardNames[0]} tạo nên tông điệu cho `;
        }

        const centerCard = cards[Math.floor(cards.length / 2)];
        text += `những năng lượng vũ trụ dệt nên chủ đề xoay quanh ${dominantThemes.toLowerCase()}. `;
        text += `Ở trung tâm của trải bài này, ${centerCard.en.name} nói về ${centerCard[lang].meaning.toLowerCase()} `;

        text += `Sự giao thoa của ${elements.join(' và ')} tạo ra một sự cộng hưởng độc đáo dẫn dắt bạn `;
        if (cards.length > 1) {
            const finalCard = cards[cards.length - 1];
            text += `hướng tới ${finalCard.en.name}, điều này ${reversedList[cards.length - 1] ? 'thách thức bạn suy nghĩ lại về' : 'mang đến tiềm năng cho'} ${finalCard[lang].keywords?.[0]?.toLowerCase() || 'sự chuyển hóa'}. `;
        }
        text += `Hãy tin tưởng vào hành trình đang mở ra này, bởi vũ trụ đang nói qua những biểu tượng cổ xưa với trí tuệ được định sẵn dành riêng cho bạn.`;
    }

    return text;
}

function generateAspects() {
    // Aspects now integrated into generateEnhancedSynthesis for 3, 5, 14 card spreads
    // This function is kept for backward compatibility but returns empty for those spreads
    if (drawnCards.length === 0 || currentSpread === 'yesno' || currentSpread === 'daily') return "";
    if (typeof currentSpread === 'number') return ""; // Enhanced synthesis handles these

    const lang = currentLang;
    const cards = drawnCards;

    // Analyze cards for different aspects
    const loveCards = [];
    const careerCards = [];
    const timingCards = [];

    const loveKeywords = lang === 'en'
        ? ['Love', 'Partnership', 'Harmony', 'Emotion', 'Union', 'Romance', 'Relationship']
        : ['Tình yêu', 'Hòa hợp', 'Cảm xúc', 'Kết nối', 'Lãng mạn', 'Quan hệ'];

    const careerKeywords = lang === 'en'
        ? ['Success', 'Victory', 'Leadership', 'Power', 'Creation', 'Action', 'Structure', 'Stability']
        : ['Thành công', 'Chiến thắng', 'Lãnh đạo', 'Quyền năng', 'Sáng tạo', 'Hành động', 'Cấu trúc', 'Ổn định'];

    const timingKeywords = lang === 'en'
        ? ['Change', 'Momentum', 'Wait', 'Speed', 'Cycle', 'Destiny']
        : ['Thay đổi', 'Chờ đợi', 'Tốc độ', 'Chu kỳ', 'Định mệnh'];

    cards.forEach((card, i) => {
        const kws = card[lang].keywords || [];
        const meaning = card[lang].meaning.toLowerCase();

        if (kws.some(kw => loveKeywords.some(lk => kw.toLowerCase().includes(lk.toLowerCase()))) ||
            loveKeywords.some(lk => meaning.includes(lk.toLowerCase()))) {
            loveCards.push({ card, index: i, reversed: reversedList[i] });
        }

        if (kws.some(kw => careerKeywords.some(ck => kw.toLowerCase().includes(ck.toLowerCase()))) ||
            careerKeywords.some(ck => meaning.includes(ck.toLowerCase()))) {
            careerCards.push({ card, index: i, reversed: reversedList[i] });
        }

        if (kws.some(kw => timingKeywords.some(tk => kw.toLowerCase().includes(tk.toLowerCase()))) ||
            timingKeywords.some(tk => meaning.includes(tk.toLowerCase()))) {
            timingCards.push({ card, index: i, reversed: reversedList[i] });
        }
    });

    let aspectsHTML = '<div class="mt-8 space-y-6">';

    // Love Aspect
    if (lang === 'en') {
        aspectsHTML += `
            <div class="glass p-6 rounded-2xl border border-pink-500/20">
                <h4 class="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">
                    <i data-lucide="heart" class="w-5 h-5"></i>
                    <span>In Matters of Love</span>
                </h4>
                <p class="text-slate-300 leading-relaxed">`;

        if (loveCards.length > 0) {
            const mainLoveCard = loveCards[0];
            aspectsHTML += `The presence of ${mainLoveCard.card.en.name} suggests `;
            if (mainLoveCard.reversed) {
                aspectsHTML += `a need for patience and reflection in relationships. Energy may be blocked or requiring a shift in perspective. `;
            } else {
                aspectsHTML += `favorable conditions for emotional connections. The heart's desires align with cosmic timing. `;
            }

            if (loveCards.length > 1) {
                aspectsHTML += `With ${loveCards.length} cards touching on emotional themes, relationship dynamics are highlighted in this reading. `;
            }
        } else {
            aspectsHTML += `While love isn't the primary focus, relationships continue their natural course. Focus on the areas illuminated by the other cards for now. `;
        }

        aspectsHTML += `</p></div>`;

        // Career Aspect
        aspectsHTML += `
            <div class="glass p-6 rounded-2xl border border-amber-500/20">
                <h4 class="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
                    <i data-lucide="briefcase" class="w-5 h-5"></i>
                    <span>In Career & Ambitions</span>
                </h4>
                <p class="text-slate-300 leading-relaxed">`;

        if (careerCards.length > 0) {
            const mainCareerCard = careerCards[0];
            aspectsHTML += `${mainCareerCard.card.en.name} speaks to your professional path. `;
            if (mainCareerCard.reversed) {
                aspectsHTML += `Challenges or delays may appear, but they serve as opportunities for reassessment and strategic pivoting. `;
            } else {
                aspectsHTML += `The cosmos supports your ambitions. This is a time for decisive action and leveraging your skills. `;
            }

            if (careerCards.length > 1) {
                aspectsHTML += `Multiple cards emphasize the importance of your career trajectory at this time. `;
            }
        } else {
            aspectsHTML += `Career matters take a backseat to other life areas in this reading. Trust that professional matters will unfold naturally as you address the primary themes shown. `;
        }

        aspectsHTML += `</p></div>`;

        // Timing Aspect
        aspectsHTML += `
            <div class="glass p-6 rounded-2xl border border-indigo-500/20">
                <h4 class="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
                    <i data-lucide="clock" class="w-5 h-5"></i>
                    <span>Timing & Rhythm</span>
                </h4>
                <p class="text-slate-300 leading-relaxed">`;

        if (timingCards.length > 0) {
            const mainTimingCard = timingCards[0];
            aspectsHTML += `${mainTimingCard.card.en.name} indicates `;

            const fastCards = ['Eight of Wands', 'The Chariot', 'Knight of Wands'];
            const slowCards = ['The Hanged Man', 'Four of Cups', 'The Hermit'];

            if (fastCards.includes(mainTimingCard.card.en.name)) {
                aspectsHTML += `swift movement and rapid developments. Expect changes within days to weeks. `;
            } else if (slowCards.includes(mainTimingCard.card.en.name)) {
                aspectsHTML += `a slower, more contemplative pace. Full manifestation may take weeks to months. `;
            } else {
                aspectsHTML += `moderate timing. Events will unfold at a natural, steady pace. `;
            }
        } else {
            aspectsHTML += `Timing follows its natural course. Trust in divine timing and focus on present moment actions rather than rushing outcomes. `;
        }

        aspectsHTML += `</p></div>`;

    } else {
        // Vietnamese version
        aspectsHTML += `
            <div class="glass p-6 rounded-2xl border border-pink-500/20">
                <h4 class="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">
                    <i data-lucide="heart" class="w-5 h-5"></i>
                    <span>Về Mặt Tình Cảm</span>
                </h4>
                <p class="text-slate-300 leading-relaxed">`;

        if (loveCards.length > 0) {
            const mainLoveCard = loveCards[0];
            aspectsHTML += `Sự xuất hiện của ${mainLoveCard.card.en.name} cho thấy `;
            if (mainLoveCard.reversed) {
                aspectsHTML += `cần thêm kiên nhẫn và suy ngẫm trong các mối quan hệ. Năng lượng có thể đang bị chặn hoặc cần thay đổi góc nhìn. `;
            } else {
                aspectsHTML += `điều kiện thuận lợi cho những kết nối cảm xúc. Mong muốn của trái tim đang đồng điệu với thời điểm vũ trụ. `;
            }

            if (loveCards.length > 1) {
                aspectsHTML += `Với ${loveCards.length} lá bài liên quan đến chủ đề cảm xúc, động lực quan hệ được nhấn mạnh trong trải bài này. `;
            }
        } else {
            aspectsHTML += `Mặc dù tình yêu không phải là trọng tâm chính, các mối quan hệ vẫn tiếp tục diễn biến tự nhiên. Hãy tập trung vào những lĩnh vực được các lá bài khác chiếu sáng. `;
        }

        aspectsHTML += `</p></div>`;

        // Career
        aspectsHTML += `
            <div class="glass p-6 rounded-2xl border border-amber-500/20">
                <h4 class="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
                    <i data-lucide="briefcase" class="w-5 h-5"></i>
                    <span>Về Mặt Công Việc</span>
                </h4>
                <p class="text-slate-300 leading-relaxed">`;

        if (careerCards.length > 0) {
            const mainCareerCard = careerCards[0];
            aspectsHTML += `${mainCareerCard.card.en.name} nói về con đường sự nghiệp của bạn. `;
            if (mainCareerCard.reversed) {
                aspectsHTML += `Thách thức hoặc chậm trễ có thể xuất hiện, nhưng chúng là cơ hội để đánh giá lại và điều chỉnh chiến lược. `;
            } else {
                aspectsHTML += `Vũ trụ đang ủng hộ tham vọng của bạn. Đây là thời điểm để hành động quyết đoán và tận dụng kỹ năng của mình. `;
            }

            if (careerCards.length > 1) {
                aspectsHTML += `Nhiều lá bài nhấn mạnh tầm quan trọng của quỹ đạo sự nghiệp vào lúc này. `;
            }
        } else {
            aspectsHTML += `Vấn đề công việc lùi xuống hàng thứ hai so với các lĩnh vực khác trong đời. Tin rằng công việc sẽ diễn ra tự nhiên khi bạn giải quyết những chủ đề chính được hiển thị. `;
        }

        aspectsHTML += `</p></div>`;

        // Timing
        aspectsHTML += `
            <div class="glass p-6 rounded-2xl border border-indigo-500/20">
                <h4 class="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
                    <i data-lucide="clock" class="w-5 h-5"></i>
                    <span>Về Mặt Thời Gian</span>
                </h4>
                <p class="text-slate-300 leading-relaxed">`;

        if (timingCards.length > 0) {
            const mainTimingCard = timingCards[0];
            aspectsHTML += `${mainTimingCard.card.en.name} cho biết `;

            const fastCards = ['Eight of Wands', 'The Chariot', 'Knight of Wands'];
            const slowCards = ['The Hanged Man', 'Four of Cups', 'The Hermit'];

            if (fastCards.includes(mainTimingCard.card.en.name)) {
                aspectsHTML += `sự chuyển động nhanh chóng và phát triển vùn vụt. Kỳ vọng thay đổi trong vòng vài ngày đến tuần. `;
            } else if (slowCards.includes(mainTimingCard.card.en.name)) {
                aspectsHTML += `nhịp độ chậm rãi, chiêm nghiệm hơn. Hiện thực hóa đầy đủ có thể mất vài tuần đến tháng. `;
            } else {
                aspectsHTML += `thời gian vừa phải. Các sự kiện sẽ mở ra với tốc độ tự nhiên, ổn định. `;
            }
        } else {
            aspectsHTML += `Thời gian theo dòng chảy tự nhiên của nó. Hãy tin vào thời điểm thiêng liêng và tập trung vào hành động hiện tại thay vì vội vã đạt kết quả. `;
        }

        aspectsHTML += `</p></div>`;
    }

    aspectsHTML += '</div>';

    if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 100);
    }

    return aspectsHTML;
}

function generateDailySynthesis() {
    if (drawnCards.length === 0) return "";

    const lang = currentLang;
    const card = drawnCards[0]; // Daily draw is always 1 card
    const rev = reversedList[0];
    const cardName = card.en.name;

    let synthesis = "";

    const currentDate = new Date();
    const dayName = lang === 'en'
        ? currentDate.toLocaleDateString('en-US', { weekday: 'long' })
        : currentDate.toLocaleDateString('vi-VN', { weekday: 'long' });

    if (lang === 'en') {
        // Opening
        synthesis = `<div class="space-y-6">`;
        synthesis += `<div class="text-center pb-6 border-b border-amber-500/20">`;
        synthesis += `<p class="text-amber-400 text-sm font-bold uppercase tracking-widest mb-2">${dayName}</p>`;
        synthesis += `<h3 class="text-2xl font-['Playfair_Display'] text-amber-100">Your Daily Card: ${cardName}</h3>`;
        synthesis += `</div>`;

        // Overall Day Energy
        synthesis += `<div class="glass p-6 rounded-2xl border border-amber-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sun" class="w-5 h-5"></i><span>${i18n[lang]['daily-overall']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (rev) {
            synthesis += `${cardName} appears reversed, suggesting today calls for introspection and gentle recalibration. `;
            synthesis += `The universe invites you to slow down and examine areas where energy may be blocked or misdirected. `;
            synthesis += `This isn't a day for forcing outcomes, but rather for listening to your inner wisdom and adjusting your course accordingly.`;
        } else {
            synthesis += `${cardName} graces your day with its upright energy, bringing themes of ${card[lang].keywords?.join(' and ').toLowerCase() || 'transformation'}. `;
            synthesis += `The cosmic currents flow favorably, supporting you in embodying the qualities this card represents. `;
            synthesis += `${card[lang].meaning} This is your spiritual theme for the next 24 hours.`;
        }
        synthesis += `</p></div>`;

        // Morning Energy
        synthesis += `<div class="glass p-6 rounded-2xl border border-pink-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sunrise" class="w-5 h-5"></i><span>${i18n[lang]['daily-morning']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (rev) {
            synthesis += `Begin your morning with awareness. ${cardName} reversed suggests starting the day slowly, perhaps with meditation or journaling. `;
            synthesis += `Don't rush into action - instead, set intentions mindfully and create space for clarity to emerge.`;
        } else {
            synthesis += `Your morning is blessed with the fresh energy of ${cardName}. `;
            synthesis += `This is an excellent time to tackle important matters or set powerful intentions. `;
            synthesis += `The first hours of your day carry special potency - use them wisely to align with this card's guidance.`;
        }
        synthesis += `</p></div>`;

        // Afternoon Focus
        synthesis += `<div class="glass p-6 rounded-2xl border border-blue-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sun-medium" class="w-5 h-5"></i><span>${i18n[lang]['daily-afternoon']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        const keywords = card[lang].keywords || [];
        if (keywords.length > 0) {
            synthesis += `As the day progresses, focus on ${keywords[0].toLowerCase()}. `;
            synthesis += `${cardName} encourages you to bring conscious attention to this area. `;
            synthesis += `Afternoon activities benefit from aligning with these themes.`;
        } else {
            synthesis += `The afternoon hours call for maintaining awareness of ${cardName}'s influence. `;
            synthesis += `Stay present and responsive to the opportunities that arise.`;
        }
        synthesis += `</p></div>`;

        // Evening Reflection  
        synthesis += `<div class="glass p-6 rounded-2xl border border-indigo-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="moon" class="w-5 h-5"></i><span>${i18n[lang]['daily-evening']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        synthesis += `As evening approaches, reflect on how ${cardName} manifested throughout your day. `;
        synthesis += `Take a few moments to acknowledge the lessons learned and insights gained. `;
        synthesis += `Journaling about today's experiences in light of this card's wisdom can deepen your understanding.`;
        synthesis += `</p></div>`;

        // Challenge
        synthesis += `<div class="glass p-6 rounded-2xl border border-rose-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="alert-triangle" class="w-5 h-5"></i><span>${i18n[lang]['daily-challenge']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (rev) {
            synthesis += `Be mindful of overcompensating or forcing ${cardName}'s energy. `;
            synthesis += `The challenge lies in accepting what is, rather than trying to control outcomes. `;
            synthesis += `Practice patience and trust in divine timing.`;
        } else {
            synthesis += `The shadow side of ${cardName} may appear if its energy is expressed immaturely. `;
            synthesis += `Stay balanced and avoid extremes. `;
            synthesis += `Remember that even positive cards require conscious, centered application.`;
        }
        synthesis += `</p></div>`;

        // Opportunity
        synthesis += `<div class="glass p-6 rounded-2xl border border-emerald-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sparkles" class="w-5 h-5"></i><span>${i18n[lang]['daily-opportunity']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (!rev && keywords.length > 1) {
            synthesis += `Today offers a special opportunity to cultivate ${keywords[1].toLowerCase()}. `;
            synthesis += `${cardName} opens doors in this area. `;
            synthesis += `Stay alert to synchronicities and unexpected gifts from the universe.`;
        } else {
            synthesis += `Even in its ${rev ? 'reversed' : 'upright'} position, ${cardName} presents opportunities for growth. `;
            synthesis += `The gift may come through unexpected channels - remain open and receptive.`;
        }
        synthesis += `</p></div>`;

        // Cosmic Advice
        synthesis += `<div class="glass p-6 rounded-2xl border border-violet-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-violet-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="lightbulb" class="w-5 h-5"></i><span>${i18n[lang]['daily-advice']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed italic">`;

        synthesis += `"Let ${cardName} be your guide today. `;
        if (card.element) {
            const elementAdvice = {
                'Fire': 'Act with passion but tempered wisdom. Your enthusiasm is your greatest asset.',
                'Water': 'Trust your emotions and intuition. Flow with circumstances rather than against them.',
                'Air': 'Communicate clearly and think deeply. Your mind is sharp - use it wisely.',
                'Earth': 'Stay grounded and practical. Build something lasting through steady effort.'
            };
            synthesis += elementAdvice[card.element] || 'Stay balanced and centered.';
        } else {
            synthesis += `Move through your day with intention and awareness. `;
        }
        synthesis += ` The universe is conspiring in your favor."`;
        synthesis += `</p></div>`;

        synthesis += `</div>`;

    } else {
        // Vietnamese version
        synthesis = `<div class="space-y-6">`;
        synthesis += `<div class="text-center pb-6 border-b border-amber-500/20">`;
        synthesis += `<p class="text-amber-400 text-sm font-bold uppercase tracking-widest mb-2">${dayName}</p>`;
        synthesis += `<h3 class="text-2xl font-['Playfair_Display'] text-amber-100">Lá Bài Hôm Nay: ${card.en.name}</h3>`;
        synthesis += `</div>`;

        // Overall
        synthesis += `<div class="glass p-6 rounded-2xl border border-amber-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sun" class="w-5 h-5"></i><span>${i18n[lang]['daily-overall']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (rev) {
            synthesis += `${cardName} xuất hiện ở vị trí ngược, gợi ý hôm nay cần sự nội quan và điều chỉnh nhẹ nhàng. `;
            synthesis += `Vũ trụ mời gọi bạn chậm lại và xem xét những khu vực năng lượng có thể bị chặn hoặc sai hướng. `;
            synthesis += `Đây không phải ngày để ép buộc kết quả, mà là để lắng nghe trí tuệ nội tại và điều chỉnh hành trình cho phù hợp.`;
        } else {
            synthesis += `${cardName} ban phước cho ngày của bạn với năng lượng xuôi, mang đến chủ đề ${card[lang].keywords?.join(' và ').toLowerCase() || 'chuyển hóa'}. `;
            synthesis += `Dòng chảy vũ trụ ủng hộ bạn trong việc thể hiện những phẩm chất mà lá bài này đại diện. `;
            synthesis += `${card[lang].meaning} Đây là chủ đề tâm linh của bạn trong 24 giờ tới.`;
        }
        synthesis += `</p></div>`;

        // Morning
        synthesis += `<div class="glass p-6 rounded-2xl border border-pink-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sunrise" class="w-5 h-5"></i><span>${i18n[lang]['daily-morning']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (rev) {
            synthesis += `Bắt đầu buổi sáng với sự tỉnh thức. ${cardName} ngược gợi ý khởi đầu ngày chậm rãi, có thể với thiền định hoặc viết nhật ký. `;
            synthesis += `Đừng vội vã hành động - thay vào đó, đặt ý định cẩn thận và tạo không gian cho sự rõ ràng xuất hiện.`;
        } else {
            synthesis += `Buổi sáng của bạn được ban phước với năng lượng tươi mới của ${cardName}. `;
            synthesis += `Đây là thời điểm tuyệt vời để giải quyết những vấn đề quan trọng hoặc đặt ý định mạnh mẽ. `;
            synthesis += `Những giờ đầu ngày mang sức mạnh đặc biệt - hãy sử dụng chúng khôn ngoan.`;
        }
        synthesis += `</p></div>`;

        // Afternoon
        synthesis += `<div class="glass p-6 rounded-2xl border border-blue-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sun-medium" class="w-5 h-5"></i><span>${i18n[lang]['daily-afternoon']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        const vkeywords = card[lang].keywords || [];
        if (vkeywords.length > 0) {
            synthesis += `Khi ngày tiến triển, tập trung vào ${vkeywords[0].toLowerCase()}. `;
            synthesis += `${cardName} khuyến khích bạn đưa sự chú ý có ý thức vào lĩnh vực này. `;
            synthesis += `Các hoạt động buổi chiều được hưởng lợi khi đồng điệu với những chủ đề này.`;
        } else {
            synthesis += `Những giờ buổi chiều kêu gọi duy trì nhận thức về ảnh hưởng của ${cardName}. `;
            synthesis += `Hãy hiện diện và đáp ứng với các cơ hội nảy sinh.`;
        }
        synthesis += `</p></div>`;

        // Evening
        synthesis += `<div class="glass p-6 rounded-2xl border border-indigo-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="moon" class="w-5 h-5"></i><span>${i18n[lang]['daily-evening']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        synthesis += `Khi chiều tối đến gần, hãy suy ngẫm về cách ${cardName} hiển hiện trong suốt ngày của bạn. `;
        synthesis += `Dành vài phút để ghi nhận những bài học và insights thu được. `;
        synthesis += `Viết nhật ký về trải nghiệm hôm nay dưới ánh sáng của trí tuệ lá bài có thể làm sâu sắc thêm hiểu biết.`;
        synthesis += `</p></div>`;

        // Challenge
        synthesis += `<div class="glass p-6 rounded-2xl border border-rose-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="alert-triangle" class="w-5 h-5"></i><span>${i18n[lang]['daily-challenge']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (rev) {
            synthesis += `Cẩn thận với việc bù đắp quá mức hoặc ép buộc năng lượng của ${cardName}. `;
            synthesis += `Thách thức nằm ở việc chấp nhận những gì đang là, thay vì cố kiểm soát kết quả. `;
            synthesis += `Thực hành kiên nhẫn và tin tưởng vào thời điểm thiêng liêng.`;
        } else {
            synthesis += `Mặt tối của ${cardName} có thể xuất hiện nếu năng lượng được thể hiện một cách chưa chín chắn. `;
            synthesis += `Giữ cân bằng và tránh cực đoan. `;
            synthesis += `Nhớ rằng ngay cả những lá bài tích cực cũng cần áp dụng có ý thức và trung tâm.`;
        }
        synthesis += `</p></div>`;

        // Opportunity
        synthesis += `<div class="glass p-6 rounded-2xl border border-emerald-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="sparkles" class="w-5 h-5"></i><span>${i18n[lang]['daily-opportunity']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed">`;

        if (!rev && vkeywords.length > 1) {
            synthesis += `Hôm nay mang đến cơ hội đặc biệt để nuôi dưỡng ${vkeywords[1].toLowerCase()}. `;
            synthesis += `${cardName} mở cửa trong lĩnh vực này. `;
            synthesis += `Hãy tỉnh táo với những sự trùng hợp và quà tặng bất ngờ từ vũ trụ.`;
        } else {
            synthesis += `Ngay cả ở vị trí ${rev ? 'ngược' : 'xuôi'}, ${cardName} vẫn mang đến cơ hội phát triển. `;
            synthesis += `Món quà có thể đến qua những kênh bất ngờ - hãy mở lòng và đón nhận.`;
        }
        synthesis += `</p></div>`;

        // Advice
        synthesis += `<div class="glass p-6 rounded-2xl border border-violet-500/20">`;
        synthesis += `<h4 class="text-lg font-bold text-violet-400 mb-3 flex items-center gap-2">`;
        synthesis += `<i data-lucide="lightbulb" class="w-5 h-5"></i><span>${i18n[lang]['daily-advice']}</span></h4>`;
        synthesis += `<p class="text-slate-300 leading-relaxed italic">`;

        synthesis += `"Hãy để ${cardName} dẫn đường cho bạn hôm nay. `;
        if (card.element) {
            const elementAdvice = {
                'Fire': 'Hành động với đam mê nhưng có sự khôn ngoan điều tiết. Nhiệt huyết là tài sản lớn nhất.',
                'Water': 'Tin vào cảm xúc và trực giác. Chảy theo hoàn cảnh thay vì chống lại chúng.',
                'Air': 'Giao tiếp rõ ràng và suy nghĩ sâu sắc. Tâm trí bạn sắc bén - hãy dùng khôn ngoan.',
                'Earth': 'Giữ vững và thực tế. Xây dựng điều gì đó bền vững qua nỗ lực đều đặn.'
            };
            synthesis += elementAdvice[card.element] || 'Giữ cân bằng và tập trung.';
        } else {
            synthesis += `Di chuyển qua ngày với ý định và nhận thức. `;
        }
        synthesis += ` Vũ trụ đang đồng lòng ủng hộ bạn."`;
        synthesis += `</p></div>`;

        synthesis += `</div>`;
    }

    if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 100);
    }

    return synthesis;
}

function generateEnhancedSynthesis() {
    const lang = currentLang;
    const cards = drawnCards;
    const count = cards.length;

    let html = '<div class="space-y-6">';

    // Main Overview Section
    html += `<div class="glass p-6 rounded-2xl border border-amber-500/20">`;
    html += `<h4 class="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">`;
    html += `<i data-lucide="compass" class="w-5 h-5"></i>`;
    html += `<span>${lang === 'en' ? 'Reading Overview' : 'Tổng Quan Trải Bài'}</span></h4>`;
    html += `<p class="text-slate-300 leading-relaxed">`;

    if (lang === 'en') {
        if (count === 3) {
            html += `This three-card spread reveals the journey from ${cards[0].en.name} through ${cards[1].en.name} to ${cards[2].en.name}. `;
            html += `The cards speak of ${cards[0][lang].keywords?.[0]?.toLowerCase() || 'transformation'}, `;
            html += `${cards[1][lang].keywords?.[0]?.toLowerCase() || 'growth'}, and `;
            html += `${cards[2][lang].keywords?.[0]?.toLowerCase() || 'evolution'}. `;
        } else if (count === 5) {
            html += `This five-card reading presents a comprehensive view of your situation. `;
            html += `Beginning with ${cards[0].en.name}, moving through ${cards[1].en.name} and ${cards[2].en.name}, `;
            html += `guided by ${cards[3].en.name}, and culminating in ${cards[4].en.name}. `;
        } else if (count === 14) {
            html += `This yearly forecast maps your journey across twelve months plus two key insights. `;
            html += `The cards reveal a rich tapestry of experiences, challenges, and opportunities awaiting you. `;
        }
        html += `The cosmic energies weave a message specifically meant for you at this moment in your journey.`;
    } else {
        if (count === 3) {
            html += `Trải bài ba lá này hé lộ hành trình từ ${cards[0].en.name} qua ${cards[1].en.name} đến ${cards[2].en.name}. `;
            html += `Các lá bài nói về ${cards[0][lang].keywords?.[0]?.toLowerCase() || 'sự chuyển hóa'}, `;
            html += `${cards[1][lang].keywords?.[0]?.toLowerCase() || 'sự phát triển'}, và `;
            html += `${cards[2][lang].keywords?.[0]?.toLowerCase() || 'sự tiến hóa'}. `;
        } else if (count === 5) {
            html += `Trải bài năm lá này trình bày cái nhìn toàn diện về tình huống của bạn. `;
            html += `Bắt đầu với ${cards[0].en.name}, di chuyển qua ${cards[1].en.name} và ${cards[2].en.name}, `;
            html += `được dẫn dắt bởi ${cards[3].en.name}, và đạt đỉnh điểm tại ${cards[4].en.name}. `;
        } else if (count === 14) {
            html += `Dự báo năm này vẽ nên hành trình của bạn qua mười hai tháng cùng hai insights quan trọng. `;
            html += `Các lá bài hé lộ một tấm thảm phong phú gồm trải nghiệm, thách thức, và cơ hội đang chờ đón bạn. `;
        }
        html += `Năng lượng vũ trụ dệt nên thông điệp được định sẵn dành riêng cho bạn tại thời điểm này.`;
    }
    html += `</p></div>`;

    // Position-based Analysis for 3-card spread
    if (count === 3) {
        html += `<div class="glass p-6 rounded-2xl border border-blue-500/20">`;
        html += `<h4 class="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">`;
        html += `<i data-lucide="layers" class="w-5 h-5"></i>`;
        html += `<span>${i18n[lang]['spread-past']} → ${i18n[lang]['spread-present']} → ${i18n[lang]['spread-future']}</span></h4>`;
        html += `<div class="space-y-3 text-slate-300 text-sm">`;

        html += `<p><strong class="text-blue-300">${i18n[lang]['spread-past']}:</strong> `;
        html += lang === 'en'
            ? `${cards[0].en.name} reveals the foundation of your current situation. ${cards[0][lang].meaning} This energy has shaped where you stand today.`
            : `${cards[0].en.name} hé lộ nền tảng của tình huống hiện tại. ${cards[0][lang].meaning} Năng lượng này đã định hình nơi bạn đang đứng hôm nay.`;
        html += `</p>`;

        html += `<p><strong class="text-blue-300">${i18n[lang]['spread-present']}:</strong> `;
        html += lang === 'en'
            ? `${cards[1].en.name} illuminates your present moment. ${cards[1][lang].meaning} This is the energy you're actively working with now.`
            : `${cards[1].en.name} chiếu sáng khoảnh khắc hiện tại. ${cards[1][lang].meaning} Đây là năng lượng bạn đang tích cực làm việc cùng.`;
        html += `</p>`;

        html += `<p><strong class="text-blue-300">${i18n[lang]['spread-future']}:</strong> `;
        html += lang === 'en'
            ? `${cards[2].en.name} points toward the likely outcome. ${cards[2][lang].meaning} This represents the trajectory if current energies continue.`
            : `${cards[2].en.name} chỉ về kết quả có thể. ${cards[2][lang].meaning} Điều này đại diện cho quỹ đạo nếu các năng lượng hiện tại tiếp tục.`;
        html += `</p>`;

        html += `</div></div>`;
    }

    // Position-based Analysis for 5-card spread
    if (count === 5) {
        html += `<div class="glass p-6 rounded-2xl border border-purple-500/20">`;
        html += `<h4 class="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">`;
        html += `<i data-lucide="grid-3x3" class="w-5 h-5"></i>`;
        html += `<span>${lang === 'en' ? 'Five-Card Breakdown' : 'Phân Tích Năm Lá'}</span></h4>`;
        html += `<div class="space-y-3 text-slate-300 text-sm">`;

        const positions = [
            { key: 'foundation', index: 0 },
            { key: 'obstacle', index: 1 },
            { key: 'energy', index: 2 },
            { key: 'advice', index: 3 },
            { key: 'outcome', index: 4 }
        ];

        positions.forEach(pos => {
            const card = cards[pos.index];
            html += `<p><strong class="text-purple-300">${i18n[lang]['spread-' + pos.key]}:</strong> `;
            html += `${card.en.name} - ${card[lang].meaning}`;
            html += `</p>`;
        });

        html += `</div></div>`;
    }

    // Love Aspect
    html += `<div class="glass p-6 rounded-2xl border border-pink-500/20">`;
    html += `<h4 class="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">`;
    html += `<i data-lucide="heart" class="w-5 h-5"></i><span>${i18n[lang]['aspect-love']}</span></h4>`;
    html += `<p class="text-slate-300 leading-relaxed">`;

    const loveCards = cards.filter((c, i) => {
        const kws = c[lang].keywords || [];
        const loveKw = lang === 'en' ? ['Love', 'Partnership', 'Harmony', 'Emotion'] : ['Tình yêu', 'Hòa hợp', 'Cảm xúc'];
        return kws.some(kw => loveKw.some(lk => kw.toLowerCase().includes(lk.toLowerCase())));
    });

    if (loveCards.length > 0) {
        html += lang === 'en'
            ? `${loveCards[0].en.name} brings significant energy to matters of the heart. In relationships, this reading suggests ${loveCards[0][lang].meaning.toLowerCase()} The emotional landscape is influenced by these powerful currents.`
            : `${loveCards[0].en.name} mang năng lượng quan trọng vào các vấn đề trái tim. Trong các mối quan hệ, trải bài này gợi ý ${loveCards[0][lang].meaning.toLowerCase()} Cảnh quan cảm xúc được ảnh hưởng bởi những dòng chảy mạnh mẽ này.`;
    } else {
        html += lang === 'en'
            ? `While romance isn't the primary focus, relationships continue their natural evolution. The cards suggest attending to the other highlighted areas will indirectly benefit your emotional connections.`
            : `Mặc dù tình cảm không phải trọng tâm chính, các mối quan hệ vẫn tiếp tục tiến hóa tự nhiên. Các lá bài gợi ý chú ý đến các lĩnh vực được nhấn mạnh khác sẽ gián tiếp có lợi cho kết nối cảm xúc của bạn.`;
    }
    html += `</p></div>`;

    // Career & Ambitions
    html += `<div class="glass p-6 rounded-2xl border border-amber-500/20">`;
    html += `<h4 class="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">`;
    html += `<i data-lucide="briefcase" class="w-5 h-5"></i><span>${i18n[lang]['aspect-career']}</span></h4>`;
    html += `<p class="text-slate-300 leading-relaxed">`;

    const careerCards = cards.filter((c, i) => {
        const kws = c[lang].keywords || [];
        const careerKw = lang === 'en' ? ['Success', 'Victory', 'Power', 'Creation', 'Action'] : ['Thành công', 'Chiến thắng', 'Quyền năng', 'Sáng tạo', 'Hành động'];
        return kws.some(kw => careerKw.some(ck => kw.toLowerCase().includes(ck.toLowerCase())));
    });

    if (careerCards.length > 0) {
        html += lang === 'en'
            ? `Professional matters are strongly indicated through ${careerCards[0].en.name}. ${careerCards[0][lang].meaning} This is a potent time for career development and manifestation of ambitions.`
            : `Các vấn đề nghề nghiệp được chỉ ra mạnh mẽ qua ${careerCards[0].en.name}. ${careerCards[0][lang].meaning} Đây là thời điểm mạnh mẽ cho phát triển sự nghiệp và hiện thực hóa tham vọng.`;
    } else {
        html += lang === 'en'
            ? `Career energies are present but subtle in this reading. Focus on the personal growth themes shown, as they will naturally support professional advancement when the time is right.`
            : `Năng lượng sự nghiệp có mặt nhưng tinh tế trong trải bài này. Tập trung vào các chủ đề phát triển cá nhân được hiện ra, vì chúng sẽ tự nhiên hỗ trợ tiến bộ nghề nghiệp khi thời điểm đúng.`;
    }
    html += `</p></div>`;

    // Spiritual Guidance
    html += `<div class="glass p-6 rounded-2xl border border-violet-500/20">`;
    html += `<h4 class="text-lg font-bold text-violet-400 mb-3 flex items-center gap-2">`;
    html += `<i data-lucide="sparkles" class="w-5 h-5"></i><span>${i18n[lang]['aspect-spiritual']}</span></h4>`;
    html += `<p class="text-slate-300 leading-relaxed">`;

    const mainCard = cards[Math.floor(count / 2)];
    if (lang === 'en') {
        html += `At the spiritual heart of this reading lies ${mainCard.en.name}. `;
        html += `The universe asks you to embody the qualities of ${mainCard[lang].keywords?.join(' and ').toLowerCase() || 'wisdom'}. `;
        if (mainCard.element) {
            const elementSpiritual = {
                'Fire': 'Connect with your inner passion and divine spark.',
                'Water': 'Trust the flow of your intuition and emotional wisdom.',
                'Air': 'Seek clarity through meditation and conscious thought.',
                'Earth': 'Ground yourself in the present moment and physical reality.'
            };
            html += elementSpiritual[mainCard.element] || 'Stay centered in your spiritual practice.';
        }
        html += ` This is a time of spiritual significance - pay attention to synchronicities.`;
    } else {
        html += `Tại trung tâm tâm linh của trải bài này là ${mainCard.en.name}. `;
        html += `Vũ trụ yêu cầu bạn thể hiện các phẩm chất của ${mainCard[lang].keywords?.join(' và ').toLowerCase() || 'trí tuệ'}. `;
        if (mainCard.element) {
            const elementSpiritual = {
                'Fire': 'Kết nối với đam mê nội tại và tia lửa thiêng liêng.',
                'Water': 'Tin tưởng dòng chảy của trực giác và trí tuệ cảm xúc.',
                'Air': 'Tìm kiếm sự rõ ràng qua thiền định và suy nghĩ có ý thức.',
                'Earth': 'Vững chắc trong khoảnh khắc hiện tại và thực tế vật chất.'
            };
            html += elementSpiritual[mainCard.element] || 'Giữ tâm trong thực hành tâm linh.';
        }
        html += ` Đây là thời điểm có ý nghĩa tâm linh - chú ý đến các sự trùng hợp.`;
    }
    html += `</p></div>`;

    // Actions to Take
    html += `<div class="glass p-6 rounded-2xl border border-emerald-500/20">`;
    html += `<h4 class="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">`;
    html += `<i data-lucide="check-circle" class="w-5 h-5"></i><span>${i18n[lang]['aspect-action']}</span></h4>`;
    html += `<p class="text-slate-300 leading-relaxed">`;

    if (lang === 'en') {
        html += `Based on this reading, focus your energy on: `;
        html += `<strong>${cards[0][lang].keywords?.[0] || 'self-awareness'}</strong> as a foundation. `;
        if (count >= 3) {
            html += `Actively work with <strong>${cards[1][lang].keywords?.[0] || 'balance'}</strong> in your daily life. `;
        }
        if (count >= 5) {
            html += `Allow <strong>${cards[3][lang].keywords?.[0] || 'guidance'}</strong> to inform your decisions. `;
        }
        html += `Take practical steps aligned with these energies - the universe supports mindful action.`;
    } else {
        html += `Dựa trên trải bài này, tập trung năng lượng vào: `;
        html += `<strong>${cards[0][lang].keywords?.[0] || 'nhận thức bản thân'}</strong> như một nền tảng. `;
        if (count >= 3) {
            html += `Tích cực làm việc với <strong>${cards[1][lang].keywords?.[0] || 'cân bằng'}</strong> trong cuộc sống hàng ngày. `;
        }
        if (count >= 5) {
            html += `Để <strong>${cards[3][lang].keywords?.[0] || 'chỉ dẫn'}</strong> định hướng các quyết định. `;
        }
        html += `Thực hiện các bước thực tế đồng điệu với những năng lượng này - vũ trụ hỗ trợ hành động có ý thức.`;
    }
    html += `</p></div>`;

    // Timing
    html += `<div class="glass p-6 rounded-2xl border border-indigo-500/20">`;
    html += `<h4 class="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">`;
    html += `<i data-lucide="clock" class="w-5 h-5"></i><span>${i18n[lang]['aspect-timing']}</span></h4>`;
    html += `<p class="text-slate-300 leading-relaxed">`;

    const finalCard = cards[cards.length - 1];
    const fastCards = ['Eight of Wands', 'The Chariot', 'Knight of Wands', 'The Magician'];
    const slowCards = ['The Hanged Man', 'Four of Cups', 'The Hermit', 'Temperance'];

    if (fastCards.includes(finalCard.en.name)) {
        html += lang === 'en'
            ? `Expect swift developments. The presence of ${finalCard.en.name} indicates rapid movement - events may unfold within days to weeks. Strike while the iron is hot.`
            : `Kỳ vọng phát triển nhanh chóng. Sự hiện diện của ${finalCard.en.name} chỉ ra chuyển động vùn vụt - các sự kiện có thể mở ra trong vài ngày đến tuần. Hãy tận dụng thời cơ.`;
    } else if (slowCards.includes(finalCard.en.name)) {
        html += lang === 'en'
            ? `Patience is wisdom here. ${finalCard.en.name} suggests a slower, more contemplative timeline. Full manifestation may take weeks to months. Trust in divine timing.`
            : `Kiên nhẫn là trí tuệ ở đây. ${finalCard.en.name} gợi ý timeline chậm rãi, chiêm nghiệm hơn. Hiện thực hóa đầy đủ có thể mất vài tuần đến tháng. Tin vào thời điểm thiêng liêng.`;
    } else {
        html += lang === 'en'
            ? `Events will unfold at a natural, steady pace. Neither rushed nor delayed - the universe orchestrates perfect timing. Stay present and responsive to opportunities as they arise.`
            : `Các sự kiện sẽ mở ra với tốc độ tự nhiên, ổn định. Không vội vã cũng không trì hoãn - vũ trụ dàn dựng thời điểm hoàn hảo. Hãy hiện diện và đáp ứng với cơ hội khi chúng nảy sinh.`;
    }
    html += `</p></div>`;

    html += '</div>';

    if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 100);
    }

    return html;
}

window.saveReading = () => {
    if (drawnCards.length === 0) return;
    const journal = JSON.parse(localStorage.getItem('mystic_journal') || '[]');
    journal.push({
        date: new Date().toLocaleString(),
        cards: drawnCards.map(c => c.en.name),
        synthesis: generateSynthesis()
    });
    localStorage.setItem('mystic_journal', JSON.stringify(journal));

    // Show toast notification
    showToast(i18n[currentLang]['save-success'] || 'Reading saved successfully!');

    // Update save button appearance
    const btn = document.getElementById('btn-save');
    const floatingBtn = document.getElementById('floating-save-btn');
    if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5"></i> <span class="lang-target">${i18n[currentLang]['save-success']}</span>`;
        btn.classList.add('opacity-50', 'pointer-events-none');
        if (typeof lucide !== 'undefined') lucide.createIcons();

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('opacity-50', 'pointer-events-none');
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2500);
    }

    // Update floating button
    if (floatingBtn && !floatingBtn.classList.contains('hidden')) {
        floatingBtn.classList.add('opacity-50', 'pointer-events-none');
        setTimeout(() => {
            floatingBtn.classList.remove('opacity-50', 'pointer-events-none');
        }, 2500);
    }
};

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');

    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('flex');
        if (typeof lucide !== 'undefined') lucide.createIcons();

        setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('flex');
        }, 3000);
    }
}

window.copyReading = async () => {
    if (drawnCards.length === 0) return;

    const lang = currentLang;
    let text = '';

    // Header with date and deck type
    const date = new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'vi-VN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const deckType = currentDeck === tarotData ? 'Tarot' : 'Lenormand';

    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += lang === 'en' ? `🌟 TAROT READING\n` : `🌟 TRẢI BÀI TAROT\n`;
    text += `${date}\n`;
    text += `${deckType} - `;

    // Spread type
    if (currentSpread === 'daily') {
        text += lang === 'en' ? 'Daily Draw\n' : 'Bốc Bài Hàng Ngày\n';
    } else if (currentSpread === 'yesno') {
        text += lang === 'en' ? 'Yes/No Reading\n' : 'Câu Hỏi Có/Không\n';
    } else if (currentSpread === 3) {
        text += lang === 'en' ? '3-Card Spread\n' : 'Trải 3 Lá\n';
    } else if (currentSpread === 5) {
        text += lang === 'en' ? '5-Card Spread\n' : 'Trải 5 Lá\n';
    } else if (currentSpread === 14) {
        text += lang === 'en' ? 'Yearly Forecast\n' : 'Dự Báo Năm\n';
    }
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    // Cards drawn
    text += lang === 'en' ? '📋 CARDS DRAWN:\n' : '📋 CÁC LÁ BÀI:\n';
    drawnCards.forEach((card, i) => {
        const rev = reversedList[i];
        const revText = rev ? (lang === 'en' ? ' (Reversed)' : ' (Ngược)') : '';
        text += `${i + 1}. ${card.en.name}${revText}\n`;
    });
    text += `\n`;

    // Individual card meanings
    text += lang === 'en' ? '🔮 CARD INTERPRETATIONS:\n\n' : '🔮 GIẢI NGHĨA CÁC LÁ BÀI:\n\n';
    drawnCards.forEach((card, i) => {
        const rev = reversedList[i];
        text += `${i + 1}. ${card.en.name}\n`;
        text += `${lang === 'en' ? 'Meaning' : 'Ý nghĩa'}: ${card[lang].meaning}\n`;
        if (card[lang].keywords && card[lang].keywords.length > 0) {
            text += `${lang === 'en' ? 'Keywords' : 'Từ khóa'}: ${card[lang].keywords.join(', ')}\n`;
        }
        if (rev) {
            text += `${lang === 'en' ? 'Note' : 'Lưu ý'}: ${i18n[lang]['rev-note']}\n`;
        }
        text += `\n`;
    });

    // Synthesis - Convert HTML to plain text
    text += lang === 'en' ? '✨ SYNTHESIS:\n\n' : '✨ TỔNG HỢP:\n\n';

    // Get synthesis content and strip HTML
    const synthesisHTML = generateSynthesis();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = synthesisHTML;

    // Extract text from each section
    const sections = tempDiv.querySelectorAll('.glass, p');
    sections.forEach(section => {
        // Get section title (h4)
        const title = section.querySelector('h4');
        if (title) {
            const titleText = title.textContent.trim();
            text += `\n━━━ ${titleText} ━━━\n`;
        }

        // Get section content (p tags)
        const paragraphs = section.querySelectorAll('p');
        paragraphs.forEach(p => {
            if (!p.querySelector('i')) { // Skip if it's just an icon
                let content = p.textContent.trim();
                if (content) {
                    text += content + '\n';
                }
            }
        });
    });

    // Footer
    text += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += lang === 'en'
        ? '🌙 May the cards guide your path 🌙\n'
        : '🌙 Nguyện các lá bài dẫn đường cho bạn 🌙\n';
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    // Copy to clipboard
    try {
        await navigator.clipboard.writeText(text);

        // Show success feedback
        const btn = document.getElementById('btn-copy');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> <span class="lang-target">${i18n[currentLang]['copy-success']}</span>`;
        btn.classList.add('text-green-400');
        if (typeof lucide !== 'undefined') lucide.createIcons();

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('text-green-400');
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2500);
    } catch (err) {
        console.error('Failed to copy:', err);
        const btn = document.getElementById('btn-copy');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="x" class="w-4 h-4"></i> <span class="lang-target">${i18n[currentLang]['copy-error']}</span>`;
        btn.classList.add('text-red-400');
        if (typeof lucide !== 'undefined') lucide.createIcons();

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('text-red-400');
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2500);
    }
};

window.downloadSpread = () => { html2canvas(document.getElementById('reading-view'), { backgroundColor: '#020617' }).then(canvas => { const link = document.createElement('a'); link.download = 'my-reading.png'; link.href = canvas.toDataURL(); link.click(); }); };

window.openJournal = () => {
    document.getElementById('journal-view').classList.remove('hidden');
    const list = document.getElementById('journal-list');
    const data = JSON.parse(localStorage.getItem('mystic_journal') || '[]');
    list.innerHTML = data.length === 0 ? `<p class="text-slate-500 text-center italic">${i18n[currentLang]['journal-empty']}</p>` : '';
    data.reverse().forEach(entry => { list.innerHTML += `<div class="p-4 border border-white/5 rounded-xl bg-white/5"><div class="flex justify-between text-[10px] text-amber-500 font-bold mb-2"><span>${entry.date}</span><span>${entry.cards.length} Cards</span></div><p class="text-white text-sm line-clamp-2">${entry.synthesis}</p></div>`; });
};

window.closeJournal = () => document.getElementById('journal-view').classList.add('hidden');

function refreshReading() {
    updateLanguageUI();
    document.getElementById('card-details-list').innerHTML = '';
    document.querySelectorAll('.mystic-card.flipped').forEach((c, i) => showCardInterpretation(i));

    const synthesisTextEl = document.getElementById('synthesis-text');
    if (currentSpread === 'daily' || typeof currentSpread === 'number') {
        synthesisTextEl.innerHTML = generateSynthesis();
    } else {
        synthesisTextEl.innerText = generateSynthesis();
    }
}

document.getElementById('reset-btn').addEventListener('click', () => {
    location.reload();
});
// ==========================================
// ENHANCED DAILY DRAW INTERPRETATION
// Detailed, social-media ready content
// ==========================================

function generateEnhancedDailyInterpretation(card, reversed, lang) {
    const cardName = card.en.name;
    const rev = reversed;
    const deepData = currentDeck === tarotData ? (typeof tarotDeepInterpretations !== 'undefined' ? tarotDeepInterpretations[cardName] : null) : (typeof lenormandDeepInterpretations !== 'undefined' ? lenormandDeepInterpretations[cardName] : null);
    let html = '';

    const dayNames = {
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        vn: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
    };
    const today = new Date();
    const dayName = dayNames[lang][today.getDay()];

    // Core structure
    html = `<div class="space-y-8 animate-fade-in pb-12">`;

    // HEADER SECTION
    html += `
        <div class="text-center pb-8 border-b border-amber-500/20 relative pt-4">
            <div class="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent -z-10 rounded-t-3xl"></div>
            <p class="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">${dayName}</p>
            <h3 class="text-3xl md:text-5xl font-['Cinzel'] font-bold text-amber-100 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">${card.en.name}</h3>
            ${rev ? `<div class="mt-4"><span class="px-6 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-500/10">${lang === 'en' ? 'Reversed' : 'Vị Trí Ngược'}</span></div>` : ''}
        </div>
    `;

    if (lang === 'en') {
        // ENGLISH VERSION
        html += `
            <div class="grid gap-8">
                <!-- Main Energy -->
                <div class="glass p-8 rounded-[2rem] border border-amber-500/20 group hover:border-amber-500/40 transition-all duration-500 shadow-xl">
                    <h4 class="text-xl font-bold text-amber-400 mb-5 flex items-center gap-3">
                        <i data-lucide="sparkles" class="w-6 h-6"></i>
                        <span>Celestial Essence</span>
                    </h4>
                    <p class="text-slate-100 leading-relaxed text-xl italic font-serif">
                        "${rev ? (card.vn?.meaning_rev || card.en.meaning) : card.en.meaning}"
                    </p>
                    <p class="text-slate-300 mt-6 leading-relaxed text-base">
                        ${(deepData && deepData.en && deepData.en.deep) ? deepData.en.deep : (rev
                ? `Today, ${cardName} appears in its introspective shadow form. This isn't a "bad" omen, but a call to retreat and examine your inner machinery. External progress may seem stalled, but soul-level movement is intense.`
                : `The universe emanates the crystalline energy of ${cardName} for you today. This is a profound signal of ${card.en.keywords?.join(', ').toLowerCase()}. You are the conduit for this frequency.`)}
                    </p>
                </div>

                <!-- Three-Act Day -->
                <div class="grid lg:grid-cols-3 gap-6">
                    <div class="glass p-6 rounded-2xl border border-pink-500/20 hover:scale-[1.02] transition-transform">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400">
                                <i data-lucide="sunrise" class="w-5 h-5"></i>
                            </div>
                            <h5 class="font-bold text-pink-300">Events & Manifestation</h5>
                        </div>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            ${(deepData && deepData.en && deepData.en.events) ? deepData.en.events : (rev ? 'Internalize your intentions. The morning calls for "being" rather than "doing".' : `Focus your first hours toward ${card.en.keywords?.[0] || 'strategic moves'}.`)}
                        </p>
                    </div>
                    <div class="glass p-6 rounded-2xl border border-amber-500/20 hover:scale-[1.02] transition-transform">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                                <i data-lucide="sun" class="w-5 h-5"></i>
                            </div>
                            <h5 class="font-bold text-amber-300">Divine Timing</h5>
                        </div>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            ${(deepData && deepData.en && deepData.en.timing) ? deepData.en.timing : `Expect the main energy to peak during the afternoon. The core vibration of ${cardName} is active now.`}
                        </p>
                    </div>
                    <div class="glass p-6 rounded-2xl border border-violet-500/20 hover:scale-[1.02] transition-transform">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
                                <i data-lucide="alert-triangle" class="w-5 h-5"></i>
                            </div>
                            <h5 class="font-bold text-violet-300">Cosmic Warning</h5>
                        </div>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            ${(deepData && deepData.en && deepData.en.warnings) ? deepData.en.warnings : "Maintain balance and awareness. Every choice today carries significant weight for your future path."}
                        </p>
                    </div>
                </div>

                <!-- Life Aspects -->
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="glass p-8 rounded-[2rem] border border-rose-500/20 group">
                        <h5 class="text-lg font-bold text-rose-400 mb-4 flex items-center gap-3">
                            <i data-lucide="heart" class="w-5 h-5"></i>
                            <span>Love & Relationships</span>
                        </h5>
                        <p class="text-slate-300 leading-relaxed">
                            ${(deepData && deepData.en && deepData.en.love) ? deepData.en.love : (rev ? `Unresolved shadows may surface. This is a time to listen more than talk. Vulnerability is your strength.` : `A beautiful day for genuine connection. ${cardName} fosters mutual understanding.`)}
                        </p>
                    </div>
                    <div class="glass p-8 rounded-[2rem] border border-emerald-500/20 group">
                        <h5 class="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-3">
                            <i data-lucide="briefcase" class="w-5 h-5"></i>
                            <span>Career & Abundance</span>
                        </h5>
                        <p class="text-slate-300 leading-relaxed">
                            ${(deepData && deepData.en && deepData.en.career) ? deepData.en.career : (rev ? `Wait for secondary confirmation before signing contracts. Focus on finishing old tasks.` : `Cosmic green light for your ambitions. Financial seeds planted today will grow.`)}
                        </p>
                    </div>
                </div>

                <!-- Actionable Wisdom -->
                <div class="glass p-8 rounded-[2rem] border-2 border-indigo-500/30 bg-indigo-950/20 relative overflow-hidden shadow-2xl">
                    <div class="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 blur-[100px] rounded-full"></div>
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                        <div class="flex-shrink-0 p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                            <i data-lucide="compass" class="w-10 h-10 text-indigo-400"></i>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-xl font-bold text-indigo-200">The Soul's Compass</h4>
                            <p class="text-slate-200 leading-relaxed italic text-lg font-serif">
                                "${(deepData && deepData.en && deepData.en.spiritual) ? deepData.en.spiritual : `The universe doesn't happen to you; it happens through you. Today, ${cardName} is your instrument.`}"
                            </p>
                            <div class="flex flex-wrap gap-2 pt-2">
                                ${card.en.keywords?.map(kw => `<span class="px-3 py-1 bg-indigo-500/5 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-300 uppercase tracking-widest">#${kw}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // VIETNAMESE VERSION
        html += `
            <div class="grid gap-8">
                <!-- Năng lượng chủ đạo -->
                <div class="glass p-8 rounded-[2rem] border border-amber-500/20 group hover:border-amber-500/40 transition-all duration-500 shadow-xl">
                    <h4 class="text-xl font-bold text-amber-400 mb-5 flex items-center gap-3">
                        <i data-lucide="sparkles" class="w-6 h-6"></i>
                        <span>Thông Điệp Của Vũ Trụ</span>
                    </h4>
                    <p class="text-slate-100 leading-relaxed text-xl italic font-['Playfair_Display']">
                        "${rev ? (card.vn?.meaning_rev || card.vn?.meaning) : card.vn?.meaning}"
                    </p>
                    <p class="text-slate-300 mt-6 leading-relaxed font-light text-base">
                        ${(deepData && deepData.vn && deepData.vn.deep) ? deepData.vn.deep : (rev
                ? `Hôm nay, ${cardName} xuất hiện trong hình thái "ẩn mình", mời gọi bạn quay vào bên trong để chiêm nghiệm. Các tiến trình bên ngoài có thể chậm lại để tâm hồn bạn được thấu suốt hơn.`
                : `Vũ trụ đang gửi đến bạn tần số rung động của ${cardName}. Đây là tín hiệu mạnh mẽ về ${card.vn?.keywords?.join(', ').toLowerCase()}. Hãy hành động với sự thấu đáo mà lá bài này đại diện.`)}
                    </p>
                </div>

                <!-- Diễn biến và Cảnh báo -->
                <div class="grid lg:grid-cols-3 gap-6">
                    <div class="glass p-6 rounded-2xl border border-pink-500/20 hover:scale-[1.02] transition-all bg-pink-500/5">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 border border-pink-500/30">
                                <i data-lucide="target" class="w-5 h-5"></i>
                            </div>
                            <h5 class="font-bold text-pink-300">Sự Kiện & Thực Hiện</h5>
                        </div>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            ${(deepData && deepData.vn && deepData.vn.events) ? deepData.vn.events : (rev ? 'Hãy dành thời gian cho sự tĩnh lặng. Tránh đưa ra các quyết định hệ trọng khi chưa thấu suốt.' : `Tầm nhìn của bạn hiện đang rất rõ nét. Hãy tập trung cho ${card.vn?.keywords?.[0] || 'những mục tiêu quan trọng'}.`)}
                        </p>
                    </div>
                    <div class="glass p-6 rounded-2xl border border-blue-500/20 hover:scale-[1.02] transition-all bg-blue-500/5">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                                <i data-lucide="clock" class="w-5 h-5"></i>
                            </div>
                            <h5 class="font-bold text-blue-300">Thời Điểm Thiên Định</h5>
                        </div>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            ${(deepData && deepData.vn && deepData.vn.timing) ? deepData.vn.timing : `Năng lượng của ${cardName} sẽ hiển lộ rõ nhất khi bạn sẵn sàng nắm bắt cơ hội. Hãy tin vào nhịp điệu của vũ trụ.`}
                        </p>
                    </div>
                    <div class="glass p-6 rounded-2xl border border-violet-500/20 hover:scale-[1.02] transition-all bg-violet-500/5">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 border border-violet-500/30">
                                <i data-lucide="alert-circle" class="w-5 h-5"></i>
                            </div>
                            <h5 class="font-bold text-violet-300">Lời Nhắc Nhở</h5>
                        </div>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            ${(deepData && deepData.vn && deepData.vn.warnings) ? deepData.vn.warnings : "Hãy giữ tâm thế quân bình. Đừng để những lo âu nhất thời làm lu mờ đi trí tuệ nội tại của bạn."}
                        </p>
                    </div>
                </div>

                <!-- Các khía cạnh cuộc sống -->
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="glass p-8 rounded-[2rem] border border-rose-500/20 group hover:bg-rose-500/5 transition-colors">
                        <h5 class="text-lg font-bold text-rose-400 mb-5 flex items-center gap-3">
                            <i data-lucide="heart" class="w-6 h-6"></i>
                            <span>Tình Cảm & Kết Nối</span>
                        </h5>
                        <p class="text-slate-300 leading-relaxed text-sm">
                            ${(deepData && deepData.vn && deepData.vn.love) ? deepData.vn.love : (rev ? `Cần sự thấu cảm sâu sắc hơn hôm nay. Hãy lắng nghe tiếng nói từ trái tim đối phương.` : `Một giai đoạn thuận lợi để gắn kết. ${cardName} mang lại sự thấu hiểu và sẻ chia cảm xúc.`)}
                        </p>
                    </div>
                    <div class="glass p-8 rounded-[2rem] border border-emerald-500/20 group hover:bg-emerald-500/5 transition-colors">
                        <h5 class="text-lg font-bold text-emerald-400 mb-5 flex items-center gap-3">
                            <i data-lucide="briefcase" class="w-6 h-6"></i>
                            <span>Sự Nghiệp & Tài Lộc</span>
                        </h5>
                        <p class="text-slate-300 leading-relaxed text-sm">
                            ${(deepData && deepData.vn && deepData.vn.career) ? deepData.vn.career : (rev ? `Hãy kiểm tra lại lộ trình của bạn. Đây là lúc để củng cố nền tảng hơn là mạo hiểm.` : `Hạt giống bạn gieo hôm nay sẽ sớm đơm hoa kết trái dưới sự bảo trợ của năng lượng lá bài.`)}
                        </p>
                    </div>
                </div>

                <!-- Lời khuyên Vũ trụ -->
                <div class="glass p-8 rounded-[2rem] border-2 border-indigo-500/30 bg-indigo-950/20 relative overflow-hidden shadow-2xl">
                    <div class="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 blur-[100px] rounded-full"></div>
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                        <div class="flex-shrink-0 p-5 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                            <i data-lucide="compass" class="w-12 h-12 text-indigo-400"></i>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-xl font-bold text-indigo-200 uppercase tracking-widest font-['Cinzel']">Chỉ Dẫn Tâm Linh</h4>
                            <p class="text-slate-100 leading-relaxed italic text-lg font-['Playfair_Display']">
                                "${(deepData && deepData.vn && deepData.vn.spiritual) ? deepData.vn.spiritual : `Vũ trụ vận hành thông qua chính tâm hồn bạn. Hôm nay, ${cardName} là chìa khóa để bạn mở ra những tầng thức mới.`}"
                            </p>
                            <div class="flex flex-wrap gap-2 pt-3">
                                ${card.vn?.keywords?.map(kw => `<span class="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-[10px] font-bold text-indigo-200 uppercase tracking-[0.2em] shadow-sm">#${kw}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    html += '</div>';

    // Refresh Lucide icons
    if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 100);
    }

    return html;
}

// ==========================================
// ENHANCED MULTI-CARD SYNTHESIS
// Weaving cards together into coherent narrative
// ==========================================

function generateDeepSynthesis(cards, spread, lang) {
    const count = cards.length;
    let html = '<div class="space-y-8 pb-12 animate-fade-in">';

    // HELPER: Get Card Display Name (Always English)
    const getCardName = (c) => c.en.name;

    // ========== 1. COSMIC SYNERGY (Combinations) ==========
    html += `
        <div class="glass p-8 rounded-[2rem] border border-amber-500/20 bg-amber-950/5">
            <h4 class="text-xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                <i data-lucide="merge" class="w-6 h-6"></i>
                <span>${lang === 'en' ? 'Cosmic Synergy' : 'Sự Cộng Hưởng Vũ Trụ'}</span>
            </h4>
            <div class="space-y-4">
    `;

    // Combination Logic: Major Arcana Count
    const majors = cards.filter(c => !c.en.name.includes('of') && !c.en.name.includes('Page') && !c.en.name.includes('Knight') && !c.en.name.includes('Queen') && !c.en.name.includes('King'));
    if (majors.length >= 2) {
        html += `
            <div class="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p class="text-purple-300 text-sm font-bold mb-1 italic">${lang === 'en' ? 'Major Arcana Overload' : 'Sức Mạnh Ẩn Số Chính'}</p>
                <p class="text-slate-300 text-sm">
                    ${lang === 'en'
                ? `The presence of ${majors.length} Major Arcana indicates that destiny is actively weaving a path for you. These are not mere daily events, but soul-level shifts.`
                : `Sự xuất hiện của ${majors.length} lá Ẩn chính cho thấy định mệnh đang trực tiếp can thiệp. Đây không chỉ là chuyện thường ngày, mà là những bước ngoặt tâm hồn.`}
                </p>
            </div>
        `;
    }

    // Combination Logic: Element Dominance
    const elements = cards.map(c => c.element).filter(Boolean);
    const elementCounts = elements.reduce((acc, el) => { acc[el] = (acc[el] || 0) + 1; return acc; }, {});
    const dominantElement = Object.entries(elementCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

    if (dominantElement && elementCounts[dominantElement] >= 2) {
        const elMsgs = {
            'Fire': { en: 'Intense passion and rapid action.', vn: 'Đam mê rực cháy và hành động chớp nhoáng.' },
            'Water': { en: 'Deep emotional processing and intuition.', vn: 'Xử lý cảm xúc sâu sắc và trực giác nhạy bén.' },
            'Air': { en: 'Mental clarity and intellectual breakthrough.', vn: 'Sự minh mẫn tâm trí và đột phá ý tưởng.' },
            'Earth': { en: 'Tangible results and material stability.', vn: 'Kết quả thực tế và sự ổn định vật chất.' }
        };
        html += `
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <p class="text-amber-300 text-sm font-bold mb-1 italic">${lang === 'en' ? `Dominant Element: ${dominantElement}` : `Nguyên Tố Chủ Đạo: ${dominantElement === 'Fire' ? 'Lửa' : dominantElement === 'Water' ? 'Nước' : dominantElement === 'Air' ? 'Khí' : 'Đất'}`}</p>
                <p class="text-slate-300 text-sm">${elMsgs[dominantElement][lang]}</p>
            </div>
        `;
    }

    // Combination Logic: Suite Dominance (for Tarot)
    if (currentDeck === tarotData) {
        const suites = cards.map(c => c.en.name.split(' of ')[1]).filter(Boolean);
        const suiteCounts = suites.reduce((acc, s) => { acc[s] = (acc[s] || 0) + 1; return acc; }, {});
        const dominantSuite = Object.entries(suiteCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

        if (dominantSuite && suiteCounts[dominantSuite] >= 2) {
            const suiteMsgs = {
                'Wands': { en: 'High energy, creativity, and spiritual drive.', vn: 'Năng lượng cao, sáng tạo và động lực tâm linh.' },
                'Cups': { en: 'Focus on emotions, relationships, and intuition.', vn: 'Tập trung vào cảm xúc, mối quan hệ và trực giác.' },
                'Swords': { en: 'Mental challenges, communication, and conflict resolution.', vn: 'Thách thức trí tuệ, giao tiếp và giải quyết xung đột.' },
                'Pentacles': { en: 'Financial stability, material gains, and practical work.', vn: 'Ổn định tài chính, thành quả vật chất và công việc thực tế.' }
            };
            html += `
                <div class="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <p class="text-indigo-300 text-sm font-bold mb-1 italic">${lang === 'en' ? `Dominant Suite: ${dominantSuite}` : `Bộ Cố Định: ${dominantSuite === 'Wands' ? 'Gậy' : dominantSuite === 'Cups' ? 'Cốc' : dominantSuite === 'Swords' ? 'Kiếm' : 'Tiền'}`}</p>
                    <p class="text-slate-300 text-sm">${suiteMsgs[dominantSuite][lang]}</p>
                </div>
            `;
        }
    }

    // Spread-Specific Position logic
    if (spread === 3) {
        html += `
            <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <p class="text-blue-300 text-sm font-bold mb-1 italic">${lang === 'en' ? 'Three-Card Path' : 'Hành Trình Ba Lá'}</p>
                <p class="text-slate-300 text-xs">
                    ${lang === 'en'
                ? `This spread maps your transition: ${getCardName(cards[0])} (Past) → ${getCardName(cards[1])} (Present) → ${getCardName(cards[2])} (Future).`
                : `Trải bài này vẽ nên sự chuyển đổi: ${getCardName(cards[0])} (Quá khứ) → ${getCardName(cards[1])} (Hiện tại) → ${getCardName(cards[2])} (Tương lai).`}
                </p>
            </div>
        `;
    } else if (spread === 5) {
        html += `
            <div class="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <p class="text-purple-300 text-sm font-bold mb-1 italic">${lang === 'en' ? 'Five-Card Crossroads' : 'Ngã Rẽ Năm Lá'}</p>
                <p class="text-slate-300 text-xs text-center">
                    ${getCardName(cards[2])} (The Core)
                </p>
            </div>
        `;
    }

    html += `</div></div>`;

    // ========== 2. LIFE ASPECTS SECTION ==========
    const aspects = [
        { id: 'love', icon: 'heart', color: 'rose', title: { en: 'Love & Attraction', vn: 'Tình Duyên & Sức Hút' } },
        { id: 'career', icon: 'briefcase', color: 'emerald', title: { en: 'Career & Ambition', vn: 'Sự Nghiệp & Tham Vọng' } },
        { id: 'health', icon: 'activity', color: 'blue', title: { en: 'Vitality & Health', vn: 'Sức Khỏe & Sinh Lực' } },
        { id: 'social', icon: 'users', color: 'pink', title: { en: 'Social Dynamics', vn: 'Kết Nối Xã Hội' } },
        { id: 'spiritual', icon: 'moon', color: 'violet', title: { en: 'Spiritual Path', vn: 'Con Đường Tâm Linh' } }
    ];

    html += `<div class="grid md:grid-cols-2 gap-6">`;

    aspects.forEach(aspect => {
        html += `
            <div class="glass p-6 rounded-3xl border border-${aspect.color}-500/20 hover:bg-${aspect.color}-500/5 transition-all">
                <h5 class="text-lg font-bold text-${aspect.color}-400 mb-3 flex items-center gap-2">
                    <i data-lucide="${aspect.icon}" class="w-5 h-5"></i>
                    <span>${aspect.title[lang]}</span>
                </h5>
                <p class="text-sm text-slate-300 leading-relaxed">
                    ${generateAspectText(aspect.id, cards, lang)}
                </p>
            </div>
        `;
    });

    html += `</div>`;

    // ========== 3. LITERAL MANIFESTATIONS ==========
    const leadCard = cards[Math.floor(cards.length / 2)];
    const leadCardName = leadCard.en.name;
    const deepData = currentDeck === tarotData ? (typeof tarotDeepInterpretations !== 'undefined' ? tarotDeepInterpretations[leadCardName] : null) : (typeof lenormandDeepInterpretations !== 'undefined' ? lenormandDeepInterpretations[leadCardName] : null);

    if (deepData && deepData[lang] && deepData[lang].events) {
        html += `
            <div class="glass p-8 rounded-[2rem] border border-amber-500/30 bg-amber-950/10 mt-8">
                <h4 class="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                    <i data-lucide="zap" class="w-6 h-6"></i>
                    <span>${lang === 'en' ? 'Literal Manifestations' : 'Hiện Thực Hóa'}</span>
                </h4>
                <p class="text-slate-300 text-sm leading-relaxed">
                    ${deepData[lang].events}
                </p>
            </div>
        `;
    }

    // ========== 4. WARNINGS & TIMING ==========
    html += `
        <div class="grid lg:grid-cols-2 gap-8 mt-8">
            <div class="glass p-8 rounded-[2rem] border border-rose-500/30 bg-rose-950/10">
                <h4 class="text-lg font-bold text-rose-400 mb-4 flex items-center gap-2">
                    <i data-lucide="alert-triangle" class="w-6 h-6"></i>
                    <span>${lang === 'en' ? 'Cosmic Warnings' : 'Cảnh Báo Từ Vũ Trụ'}</span>
                </h4>
                <p class="text-slate-300 text-sm leading-relaxed italic">
                    ${generateWarningText(cards, lang)}
                </p>
            </div>
            <div class="glass p-8 rounded-[2rem] border border-indigo-500/30 bg-indigo-950/10">
                <h4 class="text-lg font-bold text-indigo-400 mb-4 flex items-center gap-2">
                    <i data-lucide="clock" class="w-6 h-6"></i>
                    <span>${lang === 'en' ? 'Divine Timing' : 'Thời Điểm Thiên Định'}</span>
                </h4>
                <p class="text-slate-300 text-sm leading-relaxed">
                    ${generateTimingText(cards, lang)}
                </p>
            </div>
        </div>
    `;

    // ========== 5. FINAL SYNTHESIS WRAPUP ==========
    const spiritualGuidance = (deepData && deepData[lang] && deepData[lang].spiritual) ? deepData[lang].spiritual : (lang === 'en' ? `The conversation between ${getCardName(cards[0])} and ${getCardName(cards[count - 1])} reveals that your journey is unique.` : `Cuộc đối thoại giữa ${getCardName(cards[0])} và ${getCardName(cards[count - 1])} cho thấy hành trình của bạn là duy nhất.`);

    html += `
        <div class="glass p-8 rounded-[2.5rem] border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 text-center mt-8">
            <h4 class="text-2xl font-['Cinzel'] font-bold text-amber-100 mb-6 tracking-widest">${lang === 'en' ? 'The Final Word' : 'Lời Kết'}</h4>
            <p class="text-slate-300 leading-relaxed max-w-2xl mx-auto font-['Playfair_Display'] italic text-lg">
                "${spiritualGuidance}"
            </p>
        </div>
    `;

    html += '</div>';

    if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 100);
    }

    return html;
}

// --- HELPER GENERATORS ---

function generateAspectText(aspect, cards, lang) {
    const card = cards[Math.floor(cards.length / 2)];
    const cardName = card.en.name;
    const deepData = currentDeck === tarotData ? (typeof tarotDeepInterpretations !== 'undefined' ? tarotDeepInterpretations[cardName] : null) : (typeof lenormandDeepInterpretations !== 'undefined' ? lenormandDeepInterpretations[cardName] : null);

    if (deepData && deepData[lang] && deepData[lang][aspect]) {
        return deepData[lang][aspect];
    }

    const meanings = {
        love: {
            en: `The influence of ${card.en.name} suggests a time of ${card.en.keywords?.[0] || 'emotional shift'} in your connections. Pay attention to unspoken needs.`,
            vn: `Sự ảnh hưởng của ${card.en.name} cho thấy một giai đoạn ${card.vn?.keywords?.[0] || 'chuyển biến cảm xúc'} trong các mối quan hệ. Hãy chú ý đến những nhu cầu chưa được nói ra.`
        },
        career: {
            en: `In professional realms, ${card.en.name} represents ${card.en.keywords?.[1] || 'strategic growth'}. A window of opportunity is opening now.`,
            vn: `Trong lĩnh vực sự nghiệp, ${card.en.name} đại diện cho ${card.vn?.keywords?.[1] || 'sự phát triển chiến lược'}. Một cánh cửa cơ hội đang mở ra.`
        },
        health: {
            en: `Physically, your energy levels are tied to the vibration of ${card.en.name}. Balance is key—don't overextend your vital forces.`,
            vn: `Về mặt thể chất, mức năng lượng của bạn gắn liền với rung động của ${card.en.name}. Cân bằng là chìa khóa—đừng vắt kiệt sức lực của mình.`
        },
        social: {
            en: `In your social circle, expect themes of ${card.en.keywords?.[2] || 'collaboration'}. Someone in the background is watching your progress.`,
            vn: `Trong vòng tròn xã hội, hãy mong đợi các chủ đề về ${card.vn?.keywords?.[2] || 'sự hợp tác'}. Ai đó đang thầm quan sát tiến trình của bạn.`
        },
        spiritual: {
            en: `Your soul is currently learning the lessons of ${card.en.name}. Meditate on this archetype to unlock deeper intuitive channels.`,
            vn: `Linh hồn bạn đang học những bài học của ${card.en.name}. Hãy thiền định về nguyên mẫu này để mở khóa các kênh trực giác sâu sắc hơn.`
        }
    };
    return (meanings[aspect] && meanings[aspect][lang]) ? meanings[aspect][lang] : (lang === 'en' ? "Guidance is unfolding..." : "Sự chỉ dẫn đang diễn ra...");
}

function generateWarningText(cards, lang) {
    const card = cards[Math.floor(cards.length / 2)];
    const cardName = card.en.name;
    const deepData = currentDeck === tarotData ? (typeof tarotDeepInterpretations !== 'undefined' ? tarotDeepInterpretations[cardName] : null) : (typeof lenormandDeepInterpretations !== 'undefined' ? lenormandDeepInterpretations[cardName] : null);

    if (deepData && deepData[lang] && deepData[lang].warnings) {
        return deepData[lang].warnings;
    }

    const hasReverse = cards.some((_, i) => reversedList[i]);
    if (lang === 'en') {
        return hasReverse
            ? "Beware of internal resistance. The path is clear, but your own shadows might create obstacles if left unaddressed. Look closely at what you are avoiding."
            : "The flow is positive, but avoid complacency. The highest expression of your cards requires conscious effort and disciplined focus.";
    } else {
        return hasReverse
            ? "Hãy cẩn trọng với sự kháng cự nội tâm. Con đường đã rõ, nhưng những bóng tối của chính bạn có thể tạo ra rào cản nếu không được đối mặt. Hãy nhìn kỹ vào những gì bạn đang né tránh."
            : "Dòng chảy đang tích cực, nhưng đừng chủ quan. Sự thể hiện cao nhất của các lá bài yêu cầu nỗ lực có ý thức và sự tập trung kỷ luật.";
    }
}

function generateTimingText(cards, lang) {
    const card = cards[cards.length - 1];
    const cardName = card.en.name;
    const deepData = currentDeck === tarotData ? (typeof tarotDeepInterpretations !== 'undefined' ? tarotDeepInterpretations[cardName] : null) : (typeof lenormandDeepInterpretations !== 'undefined' ? lenormandDeepInterpretations[cardName] : null);

    if (deepData && deepData[lang] && deepData[lang].timing) {
        return deepData[lang].timing;
    }

    const timingNum = card.en.name.includes('Ace') ? '1' : card.en.name.match(/\d+/) ? card.en.name.match(/\d+/)[0] : 'soon';

    if (lang === 'en') {
        return `Events are likely to unfold within ${timingNum} ${card.element === 'Fire' ? 'days' : card.element === 'Air' ? 'weeks' : card.element === 'Water' ? 'months' : 'seasons'}. Look for signs near the next ${cards.some(c => c.astrology?.includes('Moon')) ? 'Full Moon' : 'New Moon'}.`;
    } else {
        return `Các sự kiện có khả năng diễn ra trong vòng ${timingNum} ${card.element === 'Fire' ? 'ngày' : card.element === 'Air' ? 'tuần' : card.element === 'Water' ? 'tháng' : 'mùa'}. Hãy tìm các dấu hiệu gần kỳ ${cards.some(c => c.astrology?.includes('Moon')) ? 'Trăng Tròn' : 'Trăng Non'} tiếp theo.`;
    }
}

// ==========================================
// INTEGRATION NOTE
// ==========================================
// To integrate these enhanced functions:
// 1. Replace generateDailySynthesis() calls with generateEnhancedDailyInterpretation()
// 2. Replace generateEnhancedSynthesis() calls with generateDeepSynthesis() for 3/5/14 card spreads
// 3. Adjust function parameters as needed (card object, reversed boolean, language string, cards array, spread type)

// ==========================================
// OVERRIDE OLD FUNCTIONS WITH ENHANCED VERSIONS
// ==========================================

// Override generateDailySynthesis to use enhanced version
const originalGenerateDailySynthesis = generateDailySynthesis;
generateDailySynthesis = function () {
    if (drawnCards.length === 0) return "";
    const card = drawnCards[0];
    const reversed = reversedList[0] || false;
    const lang = currentLang;
    return generateEnhancedDailyInterpretation(card, reversed, lang);
};

// Override generateEnhancedSynthesis to use deep synthesis
const originalGenerateEnhancedSynthesis = generateEnhancedSynthesis;
generateEnhancedSynthesis = function () {
    const cards = drawnCards;
    const spread = currentSpread;
    const lang = currentLang;
    return generateDeepSynthesis(cards, spread, lang);
};

console.log('✨ Enhanced interpretation functions loaded successfully!');

