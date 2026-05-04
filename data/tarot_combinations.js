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

    // ── BATCH 1: HIGH-PRIORITY MAJOR PAIRS ──────────────────────────

    "The World-The Fool": {
        en: { meaning: "The completion of one great cycle and the joyful leap into the next. You have mastered a chapter of your life and now stand at the beginning of an entirely new one.", advice: "Celebrate how far you've come before you leap forward. You are not starting over — you are starting wiser." },
        vn: { meaning: "Sự hoàn thành một chu kỳ lớn và bước nhảy vui tươi vào chu kỳ tiếp theo. Bạn đã hoàn tất một chương của cuộc đời và đang đứng trước khởi đầu hoàn toàn mới.", advice: "Hãy ăn mừng chặng đường đã đi trước khi bước tiếp. Bạn không bắt đầu lại từ đầu — bạn bắt đầu với nhiều sự khôn ngoan hơn." }
    },
    "The Empress-The Emperor": {
        en: { meaning: "The sacred balance of creation and structure. Nurturing energy meets disciplined authority. Together they represent the full power of manifestation — vision with form, love with law.", advice: "Find where you need to soften and where you need to hold firm. Both energies are needed in equal measure right now." },
        vn: { meaning: "Sự cân bằng thiêng liêng giữa sáng tạo và cấu trúc. Năng lượng nuôi dưỡng gặp gỡ quyền uy có kỷ luật. Cùng nhau, chúng đại diện cho sức mạnh biểu hiện đầy đủ — tầm nhìn có hình thức, tình yêu có luật lệ.", advice: "Tìm nơi bạn cần mềm mại hơn và nơi bạn cần giữ vững. Cả hai năng lượng đều cần thiết với liều lượng bằng nhau lúc này." }
    },
    "Strength-The Chariot": {
        en: { meaning: "Inner mastery meets outer drive. You have the willpower to push forward and the emotional intelligence to do it with grace. This is a combination of unstoppable determination.", advice: "Don't just charge ahead — lead with your heart as well as your will. True victory requires both courage and compassion." },
        vn: { meaning: "Làm chủ bên trong gặp gỡ động lực bên ngoài. Bạn có ý chí tiến về phía trước và trí tuệ cảm xúc để làm điều đó một cách duyên dáng. Đây là sự kết hợp của quyết tâm không thể ngăn cản.", advice: "Đừng chỉ lao về phía trước — hãy dẫn đầu bằng cả trái tim lẫn ý chí. Chiến thắng thật sự đòi hỏi cả can đảm lẫn lòng trắc ẩn." }
    },
    "The Hermit-The Star": {
        en: { meaning: "Solitary inner work leading to profound hope and renewal. The period of withdrawal has not been wasted — it has illuminated the path forward with genuine clarity.", advice: "The light you find in solitude is the truest guide. Trust what emerged from your quiet time and let it lead you toward healing." },
        vn: { meaning: "Công việc nội tâm cô độc dẫn đến hy vọng và sự đổi mới sâu sắc. Giai đoạn lui về không bị lãng phí — nó đã soi sáng con đường phía trước với sự rõ ràng thực sự.", advice: "Ánh sáng bạn tìm thấy trong cô đơn là người hướng dẫn chân thực nhất. Tin vào những gì nảy sinh từ thời gian yên tĩnh và để nó dẫn bạn đến sự chữa lành." }
    },
    "The Tower-The Star": {
        en: { meaning: "Destruction followed by profound hope. After the collapse of false structures, genuine healing and clarity emerge. What fell needed to fall — and what remains is real.", advice: "Don't rebuild the old structure. Let the rubble clear and look up — the star appeared precisely because the tower no longer blocks it." },
        vn: { meaning: "Sự sụp đổ tiếp nối bởi hy vọng sâu sắc. Sau khi các cấu trúc giả tạo sụp đổ, sự chữa lành và rõ ràng thực sự xuất hiện. Những gì đã ngã là cần thiết phải ngã — và những gì còn lại là thực.", advice: "Đừng xây dựng lại cấu trúc cũ. Hãy để mảnh vụn tan đi và nhìn lên — ngôi sao xuất hiện chính xác vì tòa tháp không còn che khuất nó nữa." }
    },
    "The Devil-The Tower": {
        en: { meaning: "A sudden liberation from a long-standing trap. The chains you thought were permanent have been broken by an unexpected force. What feels like crisis is actually escape.", advice: "The destruction is a gift — painful, but necessary. Don't mourn what is being torn away. You were bound, and now you are not." },
        vn: { meaning: "Sự giải phóng đột ngột khỏi một cái bẫy lâu dài. Những xiềng xích bạn tưởng là vĩnh cửu đã bị phá vỡ bởi một lực lượng bất ngờ. Điều cảm thấy như khủng hoảng thực ra là sự thoát khỏi.", advice: "Sự hủy diệt là một món quà — đau đớn, nhưng cần thiết. Đừng than thở những gì đang bị lột đi. Bạn đã bị trói buộc, và bây giờ thì không." }
    },
    "Judgement-Death": {
        en: { meaning: "A profound, irreversible transformation followed by a great awakening. You are being called to rise from the ashes of who you were. This is rebirth at the soul level.", advice: "Answer the call. The old self must be released completely — not reformed, not patched. Something entirely new is awakening in you." },
        vn: { meaning: "Sự chuyển hóa sâu sắc và không thể đảo ngược tiếp nối bởi một sự thức tỉnh vĩ đại. Bạn đang được kêu gọi trỗi dậy từ tro tàn của con người bạn đã từng là. Đây là sự tái sinh ở tầng linh hồn.", advice: "Hãy đáp lại tiếng gọi. Bản thân cũ phải được buông bỏ hoàn toàn — không cải tạo, không vá víu. Một điều gì đó hoàn toàn mới đang thức tỉnh trong bạn." }
    },
    "The Hanged Man-The World": {
        en: { meaning: "Patient surrender yielding ultimate completion. The waiting period was not passive — it was essential preparation for achieving wholeness and full understanding.", advice: "The pause was the path. Everything you endured in suspension has brought you to exactly where you need to be. The completion is now yours." },
        vn: { meaning: "Sự buông bỏ kiên nhẫn dẫn đến sự hoàn thành tối thượng. Giai đoạn chờ đợi không phải là thụ động — đó là sự chuẩn bị cần thiết để đạt được sự toàn vẹn và hiểu biết đầy đủ.", advice: "Sự tạm dừng chính là con đường. Mọi thứ bạn chịu đựng trong trạng thái lơ lửng đã đưa bạn đến chính xác nơi bạn cần đến. Sự hoàn thành giờ là của bạn." }
    },
    "The Moon-The High Priestess": {
        en: { meaning: "Deep immersion in mystery, intuition, and the unconscious. Powerful psychic sensitivity is active. Hidden truths are surfacing through dreams, symbols, and gut feelings.", advice: "Don't demand rational explanations right now. The answers are arriving through other channels — pay close attention to what you sense, not just what you see." },
        vn: { meaning: "Sự đắm chìm sâu vào bí ẩn, trực giác và tiềm thức. Sự nhạy cảm tâm linh mạnh mẽ đang hoạt động. Những sự thật ẩn giấu đang nổi lên qua giấc mơ, biểu tượng và cảm giác nội tâm.", advice: "Đừng đòi hỏi giải thích lý trí lúc này. Câu trả lời đang đến qua các kênh khác — hãy chú ý kỹ đến những gì bạn cảm nhận, không chỉ những gì bạn thấy." }
    },
    "The Sun-The World": {
        en: { meaning: "Joy and completion combining into a moment of total fulfillment. This is the brightest possible outcome — success that is both felt deeply and fully realized.", advice: "Receive this abundance with an open heart. You have arrived. Let yourself fully inhabit this moment of radiant completion." },
        vn: { meaning: "Niềm vui và sự hoàn thành kết hợp thành một khoảnh khắc thỏa mãn hoàn toàn. Đây là kết quả sáng nhất có thể — thành công được cảm nhận sâu sắc và được hiện thực hóa đầy đủ.", advice: "Hãy đón nhận sự phong phú này với trái tim rộng mở. Bạn đã đến nơi. Hãy để bản thân hoàn toàn hiện diện trong khoảnh khắc hoàn thành rực rỡ này." }
    },
    "Death-The Sun": {
        en: { meaning: "Transformation leading directly to joy, clarity, and renewal. The ending was necessary for the light to break through. Something wonderful has been released from its old form.", advice: "Trust that what ended was the husk, not the seed. The light you are stepping into now is real — and it has been waiting for this transformation." },
        vn: { meaning: "Sự chuyển hóa dẫn thẳng đến niềm vui, sự rõ ràng và đổi mới. Sự kết thúc là cần thiết để ánh sáng chiếu qua. Một điều kỳ diệu đã được giải phóng khỏi hình thức cũ của nó.", advice: "Tin rằng những gì kết thúc là vỏ bọc, không phải hạt giống. Ánh sáng bạn đang bước vào là thực — và nó đã chờ đợi sự chuyển hóa này." }
    },
    "The Star-The Moon": {
        en: { meaning: "Hope and illusion existing side by side. You can sense that healing is real, yet the path is still unclear and shadowed by fear or confusion. Navigation requires both faith and caution.", advice: "The star is your true north — keep it in sight even when the moon distorts the landscape. Intuition is your compass through the uncertainty." },
        vn: { meaning: "Hy vọng và ảo tưởng cùng tồn tại. Bạn có thể cảm nhận rằng sự chữa lành là thực, nhưng con đường vẫn chưa rõ ràng và bị che khuất bởi nỗi sợ hoặc bối rối. Sự điều hướng đòi hỏi cả niềm tin lẫn sự thận trọng.", advice: "Ngôi sao là hướng bắc thật sự của bạn — hãy giữ nó trong tầm nhìn ngay cả khi mặt trăng làm méo mó cảnh quan. Trực giác là la bàn của bạn qua sự không chắc chắn." }
    },
    "Temperance-The Devil": {
        en: { meaning: "A tension between moderation and excess, balance and addiction. You are being called to moderate something that has grown out of control, or to integrate an extremity into something sustainable.", advice: "Temperance does not demand perfection — just patient, steady correction. Identify the one habit or attachment pulling you off center and begin there." },
        vn: { meaning: "Căng thẳng giữa sự điều độ và thái quá, cân bằng và nghiện ngập. Bạn đang được kêu gọi điều chỉnh điều gì đó đã vượt ngoài tầm kiểm soát, hoặc tích hợp một thái cực thành điều gì đó bền vững.", advice: "Temperance không đòi hỏi sự hoàn hảo — chỉ là sự điều chỉnh kiên nhẫn, ổn định. Xác định một thói quen hoặc sự gắn bó đang kéo bạn lệch tâm và bắt đầu từ đó." }
    },
    "The Lovers-The Chariot": {
        en: { meaning: "A significant choice made with full commitment and then pursued with total determination. Having chosen your path — in love or in life — you now move forward without looking back.", advice: "The choice is made. Now drive. Stop revisiting the decision and put all your energy into moving forward with conviction." },
        vn: { meaning: "Một lựa chọn quan trọng được thực hiện với sự cam kết đầy đủ và sau đó được theo đuổi với quyết tâm hoàn toàn. Sau khi đã chọn con đường của mình — trong tình yêu hay cuộc sống — bạn tiến về phía trước mà không nhìn lại.", advice: "Lựa chọn đã được thực hiện. Giờ hãy tiến lên. Ngừng xem xét lại quyết định và dành toàn bộ năng lượng để tiến về phía trước với niềm tin." }
    },
    "The Hierophant-The Lovers": {
        en: { meaning: "A relationship or choice being weighed against tradition, commitment, and social expectation. A union that carries spiritual or institutional significance — marriage, a formal partnership, a vow.", advice: "Consider what values and structures you want to honor in this relationship or decision. Commitment here is not a cage — it is a foundation." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn đang được cân nhắc trước truyền thống, cam kết và kỳ vọng xã hội. Một sự kết hợp mang ý nghĩa tâm linh hoặc thể chế — hôn nhân, quan hệ đối tác chính thức, một lời thề.", advice: "Hãy cân nhắc những giá trị và cấu trúc bạn muốn tôn trọng trong mối quan hệ hoặc quyết định này. Cam kết ở đây không phải là lồng nhốt — đó là nền tảng." }
    },
    "The Empress-The High Priestess": {
        en: { meaning: "The two great feminine archetypes united. Outer abundance and inner wisdom working as one. Creative power flowing from deep intuitive knowing.", advice: "Trust the wisdom of your body and your instincts as much as your intellect. The most fertile ideas right now come from within, not from external plans." },
        vn: { meaning: "Hai nguyên mẫu nữ tính vĩ đại hợp nhất. Sự phong phú bên ngoài và trí tuệ bên trong hoạt động như một. Sức mạnh sáng tạo tuôn chảy từ sự hiểu biết trực giác sâu sắc.", advice: "Hãy tin vào sự khôn ngoan của cơ thể và bản năng của bạn không kém trí tuệ. Những ý tưởng phong phú nhất lúc này đến từ bên trong, không phải từ kế hoạch bên ngoài." }
    },

    // ── BATCH 2: MEDIUM-PRIORITY MAJOR PAIRS ────────────────────────

    "The Fool-The Emperor": {
        en: { meaning: "Spontaneous new energy meeting the need for structure and discipline. A new beginning that needs rules and boundaries to truly succeed.", advice: "Let your wild ideas breathe — then build a system around them. Structure doesn't kill inspiration; it gives it legs." },
        vn: { meaning: "Năng lượng mới tự phát gặp gỡ nhu cầu về cấu trúc và kỷ luật. Một khởi đầu mới cần quy tắc và ranh giới để thực sự thành công.", advice: "Hãy để những ý tưởng phóng khoáng của bạn thở — rồi xây dựng một hệ thống xung quanh chúng. Cấu trúc không giết chết cảm hứng; nó cho cảm hứng đôi chân." }
    },
    "The Fool-The Empress": {
        en: { meaning: "A new beginning rich with creative potential and abundance. A playful, fertile energy — things you start now have a good chance of flourishing.", advice: "Create freely and joyfully. This is a moment of inspired beginnings, not careful planning. Let things grow naturally." },
        vn: { meaning: "Một khởi đầu mới phong phú với tiềm năng sáng tạo và sự dồi dào. Một năng lượng vui tươi và màu mỡ — những gì bạn bắt đầu lúc này có cơ hội tốt để phát triển.", advice: "Hãy sáng tạo một cách tự do và vui vẻ. Đây là thời điểm của những khởi đầu đầy cảm hứng, không phải lập kế hoạch cẩn thận. Hãy để mọi thứ phát triển tự nhiên." }
    },
    "The Fool-The Hierophant": {
        en: { meaning: "Unconventional beginnings meeting tradition and established wisdom. A tension between breaking free and respecting the rules. Questioning what you were taught.", advice: "You don't have to reject all tradition — but you do need to decide which structures serve your authentic path and which ones are simply inherited cages." },
        vn: { meaning: "Những khởi đầu không theo quy ước gặp gỡ truyền thống và sự khôn ngoan đã được thiết lập. Căng thẳng giữa sự tự do và tôn trọng quy tắc. Đặt câu hỏi về những gì bạn được dạy.", advice: "Bạn không cần từ chối mọi truyền thống — nhưng bạn cần quyết định cấu trúc nào phục vụ con đường thực sự của bạn và cái nào chỉ là lồng được thừa hưởng." }
    },
    "The Magician-The Emperor": {
        en: { meaning: "Skill and will aligned with power and structure. You have both the tools and the authority to build something lasting and significant.", advice: "This is a powerful combination for leadership and achievement. Be decisive — your ability to manifest is at its peak when backed by clear intention and organized action." },
        vn: { meaning: "Kỹ năng và ý chí hòa hợp với quyền lực và cấu trúc. Bạn có cả công cụ lẫn thẩm quyền để xây dựng điều gì đó lâu dài và có ý nghĩa.", advice: "Đây là sự kết hợp mạnh mẽ để lãnh đạo và đạt thành tựu. Hãy quyết đoán — khả năng biểu hiện của bạn đạt đỉnh cao khi được hỗ trợ bởi ý định rõ ràng và hành động có tổ chức." }
    },
    "The Magician-The Lovers": {
        en: { meaning: "Skilled communication and deliberate choice in matters of the heart. A relationship or decision that requires both authenticity and conscious intention.", advice: "Use your words and your skills intentionally. In love or in an important choice, sincerity paired with clarity is more powerful than any clever strategy." },
        vn: { meaning: "Giao tiếp khéo léo và lựa chọn có chủ đích trong các vấn đề của trái tim. Một mối quan hệ hoặc quyết định đòi hỏi cả tính xác thực lẫn ý định có ý thức.", advice: "Hãy dùng lời nói và kỹ năng của bạn một cách có chủ đích. Trong tình yêu hoặc một lựa chọn quan trọng, sự chân thành kết hợp với sự rõ ràng mạnh hơn bất kỳ chiến lược khéo léo nào." }
    },
    "The High Priestess-The Empress": {
        en: { meaning: "Inner knowing flowing into outer creation. Intuition and instinct fueling abundant, tangible results. What you know in your depths is ready to be born into the world.", advice: "Trust your inner knowing enough to act on it. The most powerful creative work comes from a place of deep inner truth." },
        vn: { meaning: "Sự hiểu biết bên trong tuôn chảy vào sự sáng tạo bên ngoài. Trực giác và bản năng nuôi dưỡng kết quả phong phú và hữu hình. Những gì bạn biết trong chiều sâu đã sẵn sàng được sinh ra trên thế giới.", advice: "Hãy tin vào sự hiểu biết bên trong đủ để hành động theo nó. Công việc sáng tạo mạnh mẽ nhất đến từ nơi có sự thật bên trong sâu sắc." }
    },
    "The High Priestess-The Hermit": {
        en: { meaning: "Profound solitary wisdom. Both cards call you deep within. This is a time of serious inner inquiry, spiritual development, and accessing hidden truths through stillness.", advice: "Honor this period of deep retreat. The answers you seek are not outside — they are in the silence. Resist the pressure to perform or produce right now." },
        vn: { meaning: "Sự khôn ngoan cô độc sâu sắc. Cả hai lá đều kêu gọi bạn đi sâu vào bên trong. Đây là thời gian của việc tìm kiếm nội tâm nghiêm túc, phát triển tâm linh và tiếp cận những sự thật ẩn giấu qua sự tĩnh lặng.", advice: "Hãy tôn trọng giai đoạn lui về sâu này. Câu trả lời bạn tìm kiếm không ở bên ngoài — chúng ở trong sự im lặng. Hãy kháng cự áp lực phải thể hiện hay sản xuất lúc này." }
    },
    "The Emperor-The Hierophant": {
        en: { meaning: "Dual authority — secular and spiritual, earthly and institutional. A strong emphasis on rules, hierarchy, tradition, and the established order. Power wielded through structure.", advice: "Be aware of whether these structures serve you or control you. Authority is a tool — use it with wisdom, and question it when it demands blind obedience." },
        vn: { meaning: "Quyền uy kép — thế tục và tâm linh, trần thế và thể chế. Sự nhấn mạnh mạnh mẽ vào quy tắc, hệ thống phân cấp, truyền thống và trật tự đã được thiết lập. Quyền lực được thực hiện qua cấu trúc.", advice: "Hãy ý thức về việc những cấu trúc này phục vụ bạn hay kiểm soát bạn. Thẩm quyền là một công cụ — hãy dùng nó với sự khôn ngoan, và đặt câu hỏi khi nó đòi hỏi sự tuân thủ mù quáng." }
    },
    "The Chariot-The Star": {
        en: { meaning: "Determined forward motion guided by a clear, hopeful vision. You know where you are going and you have the drive to get there. The destination is genuinely worth reaching.", advice: "Keep your eyes on the star and your hands on the reins. The goal is real and achievable — maintain both your vision and your discipline." },
        vn: { meaning: "Sự tiến lên kiên quyết được hướng dẫn bởi tầm nhìn rõ ràng và đầy hy vọng. Bạn biết mình đang đi đâu và có động lực để đến đó. Đích đến thực sự đáng đến.", advice: "Hãy giữ mắt nhìn vào ngôi sao và tay nắm dây cương. Mục tiêu là thực và có thể đạt được — duy trì cả tầm nhìn lẫn kỷ luật của bạn." }
    },
    "The Hermit-The Hanged Man": {
        en: { meaning: "Deep withdrawal and enforced pause. Both cards speak of stepping back from the world. This is a profound — and possibly lengthy — period of inner gestation and suspended action.", advice: "Don't fight the stillness. The universe has placed you here for a reason. Use this double retreat to find the truth that only comes in silence." },
        vn: { meaning: "Sự lui về sâu sắc và tạm dừng bắt buộc. Cả hai lá đều nói về việc bước ra khỏi thế giới. Đây là giai đoạn sâu sắc — và có thể dài — của sự ủ mầm bên trong và hành động bị trì hoãn.", advice: "Đừng chống lại sự tĩnh lặng. Vũ trụ đã đặt bạn ở đây vì một lý do. Hãy dùng sự lui về kép này để tìm sự thật chỉ đến trong im lặng." }
    },
    "Wheel of Fortune-The World": {
        en: { meaning: "The full cycle completed by destiny's turning wheel. A fated conclusion. What began as chance has arrived at its perfect and complete resolution.", advice: "Acknowledge the grand arc of this journey. This conclusion was written in the stars — trust that the wheel has brought you exactly where you needed to land." },
        vn: { meaning: "Chu kỳ đầy đủ được hoàn thành bởi bánh xe số phận xoay. Một kết luận định mệnh. Những gì bắt đầu như cơ hội đã đến với sự giải quyết hoàn hảo và đầy đủ của nó.", advice: "Hãy thừa nhận cung lớn của hành trình này. Kết luận này đã được viết trong các vì sao — hãy tin rằng bánh xe đã đưa bạn đến đúng nơi bạn cần đến." }
    },
    "Justice-The Hermit": {
        en: { meaning: "Fairness achieved through careful, solitary deliberation. A decision made in quiet integrity, free from outside pressure or bias.", advice: "Withdraw from the noise and sit with the truth. The most just decision comes from honest self-reflection, not from what others expect or demand." },
        vn: { meaning: "Sự công bằng đạt được qua sự cân nhắc cẩn thận và cô độc. Một quyết định được thực hiện trong sự chính trực yên tĩnh, thoát khỏi áp lực hay thiên vị bên ngoài.", advice: "Hãy rút lui khỏi tiếng ồn và ngồi với sự thật. Quyết định công bằng nhất đến từ sự tự suy ngẫm trung thực, không phải từ những gì người khác mong đợi hay đòi hỏi." }
    },
    "Justice-The High Priestess": {
        en: { meaning: "Truth revealed through intuition and inner knowing. The verdict is found not in the evidence alone but in the deeper wisdom you carry. What you sense in your gut is valid here.", advice: "Trust your inner sense of fairness and truth. The situation calls for wisdom that goes beyond the facts presented on the surface." },
        vn: { meaning: "Sự thật được tiết lộ qua trực giác và sự hiểu biết bên trong. Phán quyết không chỉ được tìm thấy trong bằng chứng mà còn trong sự khôn ngoan sâu hơn bạn mang trong mình. Những gì bạn cảm nhận trong trực giác là có giá trị ở đây.", advice: "Hãy tin vào cảm giác nội tâm của bạn về sự công bằng và sự thật. Tình huống đòi hỏi sự khôn ngoan vượt ra ngoài những sự kiện được trình bày trên bề mặt." }
    },
    "The Hanged Man-Death": {
        en: { meaning: "Willing surrender leading to inevitable transformation. You have already accepted the pause — now the transformation completes itself. What has been released is truly gone.", advice: "You've done the hardest part: the letting go. The transformation is already in motion. Trust the process and don't reach back for what has passed." },
        vn: { meaning: "Sự buông bỏ tự nguyện dẫn đến sự chuyển hóa không thể tránh khỏi. Bạn đã chấp nhận sự tạm dừng — giờ sự chuyển hóa hoàn tất chính nó. Những gì đã được buông bỏ thực sự đã qua.", advice: "Bạn đã làm phần khó nhất: buông bỏ. Sự chuyển hóa đã chuyển động. Hãy tin vào quá trình và đừng vươn tay lại lấy những gì đã qua." }
    },
    "Temperance-The Star": {
        en: { meaning: "Gentle healing and patient hope combining beautifully. A period of gradual, sustainable renewal after difficulty. Things are improving at exactly the right pace.", advice: "Don't rush the healing. The steady, patient approach you are taking is exactly right. Rest in the knowledge that renewal is already underway." },
        vn: { meaning: "Sự chữa lành nhẹ nhàng và hy vọng kiên nhẫn kết hợp một cách đẹp đẽ. Một giai đoạn đổi mới dần dần, bền vững sau khó khăn. Mọi thứ đang được cải thiện đúng tốc độ.", advice: "Đừng vội vàng sự chữa lành. Cách tiếp cận ổn định, kiên nhẫn mà bạn đang thực hiện là hoàn toàn đúng. Hãy nghỉ ngơi trong sự hiểu biết rằng sự đổi mới đã đang diễn ra." }
    },
    "The Devil-The Moon": {
        en: { meaning: "Fear, illusion, and unconscious patterns holding you captive. You may be trapped by something you can't fully see or name. Shadow work is urgently needed here.", advice: "Shine light on what you are afraid to look at. The thing binding you loses power the moment you see it clearly. Fear of the dark is what keeps the chains on." },
        vn: { meaning: "Nỗi sợ hãi, ảo tưởng và các mẫu vô thức đang giam cầm bạn. Bạn có thể bị mắc kẹt bởi điều gì đó bạn không thể thấy hoặc đặt tên đầy đủ. Công việc bóng tối được cần thiết khẩn cấp ở đây.", advice: "Hãy chiếu ánh sáng vào những gì bạn sợ nhìn thấy. Thứ đang trói buộc bạn mất đi sức mạnh ngay khi bạn thấy nó rõ ràng. Nỗi sợ bóng tối là thứ giữ xiềng xích tại chỗ." }
    },
    "The Tower-The Moon": {
        en: { meaning: "Sudden crisis triggering deep fear and confusion. The ground has shifted and clarity feels impossible right now. You are in the most disorienting phase of a major upheaval.", advice: "Don't try to understand everything in this moment. Safety and stability come first. The meaning of what happened will only be clear once the chaos settles." },
        vn: { meaning: "Khủng hoảng đột ngột kích hoạt nỗi sợ sâu sắc và bối rối. Nền đất đã dịch chuyển và sự rõ ràng cảm thấy không thể lúc này. Bạn đang ở giai đoạn mất phương hướng nhất của một biến động lớn.", advice: "Đừng cố hiểu mọi thứ trong khoảnh khắc này. Sự an toàn và ổn định là ưu tiên hàng đầu. Ý nghĩa của những gì đã xảy ra chỉ rõ ràng khi sự hỗn loạn lắng xuống." }
    },
    "The Star-The World": {
        en: { meaning: "Hope fully realized into completion. The healing you believed in has arrived. A beautiful, whole ending that carries the warmth of renewed faith.", advice: "This is what hope was pointing toward all along. Receive this completion with gratitude — and carry forward the faith that brought you here." },
        vn: { meaning: "Hy vọng được hiện thực hóa đầy đủ thành sự hoàn thành. Sự chữa lành bạn tin tưởng đã đến. Một kết thúc đẹp đẽ, trọn vẹn mang theo sự ấm áp của niềm tin được đổi mới.", advice: "Đây là điều mà hy vọng đã chỉ đến suốt từ đầu. Hãy đón nhận sự hoàn thành này với lòng biết ơn — và mang theo niềm tin đã đưa bạn đến đây." }
    },
    "Judgement-The World": {
        en: { meaning: "A great awakening leading to full and glorious completion. Everything comes together in a moment of total clarity and achievement. You are seen, whole, and arrived.", advice: "You have answered the call and completed the journey. This is not a step — this is the destination. Own it fully." },
        vn: { meaning: "Một sự thức tỉnh vĩ đại dẫn đến sự hoàn thành đầy đủ và rực rỡ. Mọi thứ kết hợp lại trong một khoảnh khắc của sự rõ ràng và thành tựu hoàn toàn. Bạn được nhìn nhận, trọn vẹn và đã đến nơi.", advice: "Bạn đã đáp lại tiếng gọi và hoàn thành hành trình. Đây không phải là một bước — đây là đích đến. Hãy hoàn toàn sở hữu nó." }
    },
    "Judgement-The Sun": {
        en: { meaning: "Awakening into radiant clarity and joy. A moment of profound realization accompanied by genuine happiness and freedom. You see yourself and your path with joyful, clear eyes.", advice: "Let the clarity and joy land fully. This awakening is real. Trust what you now see about yourself and step into it with confidence." },
        vn: { meaning: "Thức tỉnh vào sự rõ ràng rực rỡ và niềm vui. Một khoảnh khắc nhận thức sâu sắc đi kèm với hạnh phúc thực sự và tự do. Bạn nhìn thấy bản thân và con đường của mình với đôi mắt vui vẻ, rõ ràng.", advice: "Hãy để sự rõ ràng và niềm vui đến đầy đủ. Sự thức tỉnh này là thực. Hãy tin vào những gì bạn bây giờ thấy về bản thân và bước vào nó với sự tự tin." }
    },

    // ── BATCH 3: MISSING CROSS-SUIT COMBOS ──────────────────────────

    "Wands-Cups": {
        en: { meaning: "Passion and emotion intertwined. Creative ambition meets deep feeling. Projects and relationships are both on fire right now — desire is the driving force.", advice: "Follow what excites and moves you emotionally. This is fertile ground for heart-led creative work, but don't let feeling override practical follow-through." },
        vn: { meaning: "Đam mê và cảm xúc đan xen nhau. Tham vọng sáng tạo gặp gỡ cảm xúc sâu sắc. Các dự án và mối quan hệ đều đang bùng cháy lúc này — khao khát là động lực thúc đẩy.", advice: "Hãy theo đuổi những gì kích thích và chạm đến cảm xúc bạn. Đây là mảnh đất màu mỡ cho công việc sáng tạo dẫn dắt bởi trái tim, nhưng đừng để cảm xúc lấn át sự theo đuổi thực tế." }
    },
    "Wands-Swords": {
        en: { meaning: "Fire and air combining — action and intellect at high speed. Bold ideas pursued with sharp strategy. Energy is high but conflict is possible if ego drives more than wisdom.", advice: "Channel this fierce energy into focused execution. The combination is powerful but combustible — lead with intention, not aggression." },
        vn: { meaning: "Lửa và khí kết hợp — hành động và trí tuệ ở tốc độ cao. Những ý tưởng táo bạo được theo đuổi với chiến lược sắc bén. Năng lượng cao nhưng xung đột có thể xảy ra nếu cái tôi dẫn dắt hơn sự khôn ngoan.", advice: "Hãy kênh hóa năng lượng mãnh liệt này vào việc thực hiện tập trung. Sự kết hợp mạnh mẽ nhưng dễ bùng nổ — hãy dẫn đầu bằng ý định, không phải sự hung hăng." }
    },
    "Cups-Pentacles": {
        en: { meaning: "Emotional investment meeting material reality. Love and money, relationships and security, feeling and form. What you care about deeply is also what you are building in the physical world.", advice: "Tend to both the emotional and practical dimensions of what matters to you. Security built without love feels empty — love expressed without stability feels fragile." },
        vn: { meaning: "Đầu tư cảm xúc gặp gỡ thực tế vật chất. Tình yêu và tiền bạc, các mối quan hệ và sự an toàn, cảm xúc và hình thức. Những gì bạn quan tâm sâu sắc cũng là những gì bạn đang xây dựng trong thế giới vật chất.", advice: "Hãy chăm sóc cả chiều cảm xúc lẫn thực tế của những gì quan trọng với bạn. Sự an toàn được xây dựng không có tình yêu cảm thấy trống rỗng — tình yêu được thể hiện không có sự ổn định cảm thấy mong manh." }
    },
    "Swords-Pentacles": {
        en: { meaning: "Mind over matter — intellectual strategy applied to practical, material goals. Careful analysis leading to concrete results. Planning and precision are the keys to the outcome here.", advice: "Use your mental clarity to solve the practical problem in front of you. This is a time for smart, methodical action — not emotional response or impulsive leaps." },
        vn: { meaning: "Tâm trí vượt lên vật chất — chiến lược trí tuệ được áp dụng cho các mục tiêu thực tế, vật chất. Phân tích cẩn thận dẫn đến kết quả cụ thể. Lập kế hoạch và độ chính xác là chìa khóa cho kết quả ở đây.", advice: "Hãy dùng sự rõ ràng tinh thần để giải quyết vấn đề thực tế trước mắt. Đây là thời gian cho hành động thông minh, có phương pháp — không phải phản ứng cảm xúc hay những bước nhảy bốc đồng." }
    },

    // ── BATCH A: THE FOOL completions ────────────────────────────
    "The Fool-The Lovers": {
        en: { meaning: "A new beginning in love or a fresh, naive approach to an important choice. An innocent leap into a significant relationship or decision.", advice: "Open your heart without overthinking it. The spontaneity you bring to this connection or choice is part of its gift." },
        vn: { meaning: "Một khởi đầu mới trong tình yêu hoặc cách tiếp cận hồn nhiên với một lựa chọn quan trọng. Một bước nhảy vọt vô tư vào một mối quan hệ hoặc quyết định có ý nghĩa.", advice: "Hãy mở lòng mà không suy nghĩ quá nhiều. Sự tự phát bạn mang đến kết nối hoặc lựa chọn này là một phần món quà của nó." }
    },
    "The Fool-The Chariot": {
        en: { meaning: "Spontaneous action meeting determined drive. A new venture launched with full speed and confidence — exciting but potentially reckless.", advice: "Channel your enthusiasm into a clear direction. Energy without aim scatters; pick a lane and move." },
        vn: { meaning: "Hành động tự phát gặp gỡ quyết tâm mạnh mẽ. Một dự án mới được khởi động với tốc độ đầy đủ và sự tự tin — thú vị nhưng có thể liều lĩnh.", advice: "Hãy kênh hóa sự nhiệt tình của bạn vào một hướng rõ ràng. Năng lượng không có mục tiêu sẽ phân tán; hãy chọn một làn đường và tiến lên." }
    },
    "The Fool-Strength": {
        en: { meaning: "Innocent courage meeting inner power. A beginner's heart paired with quiet, patient strength — a combination that can move mountains gently.", advice: "Trust that you have more strength than you realise. Approach the unknown with both openness and the inner calm that comes from knowing yourself." },
        vn: { meaning: "Dũng cảm hồn nhiên gặp gỡ sức mạnh nội tâm. Trái tim của người mới bắt đầu kết hợp với sức mạnh kiên nhẫn, lặng lẽ — một sự kết hợp có thể nhẹ nhàng lay chuyển núi non.", advice: "Hãy tin rằng bạn có nhiều sức mạnh hơn bạn nhận ra. Hãy tiếp cận cái chưa biết với sự cởi mở và sự bình tĩnh nội tâm đến từ việc hiểu chính mình." }
    },
    "The Fool-The Hermit": {
        en: { meaning: "A spontaneous leap into solitude or a new journey of self-discovery. Beginning a period of inner exploration without knowing where it will lead.", advice: "Trust the call to go within. Not all adventures are outward — some of the most important ones happen in silence." },
        vn: { meaning: "Một bước nhảy tự phát vào sự cô đơn hoặc một hành trình khám phá bản thân mới. Bắt đầu một giai đoạn khám phá nội tâm mà không biết nó sẽ dẫn đến đâu.", advice: "Hãy tin vào tiếng gọi hướng vào bên trong. Không phải tất cả cuộc phiêu lưu đều hướng ra ngoài — một số cuộc phiêu lưu quan trọng nhất xảy ra trong im lặng." }
    },
    "The Fool-Wheel of Fortune": {
        en: { meaning: "Stepping into the turning of fate with trust and openness. A new beginning that is cosmically timed — you are exactly where you need to be.", advice: "Surrender to the timing of things. The universe is conspiring in your favour right now — leap and trust the wheel." },
        vn: { meaning: "Bước vào vòng xoay của số phận với sự tin tưởng và cởi mở. Một khởi đầu mới được định thời gian bởi vũ trụ — bạn đang ở đúng nơi bạn cần phải có mặt.", advice: "Hãy phó thác vào thời điểm của mọi thứ. Vũ trụ đang âm mưu có lợi cho bạn lúc này — hãy nhảy và tin tưởng vào bánh xe." }
    },
    "The Fool-Justice": {
        en: { meaning: "A new beginning that must be grounded in fairness and integrity. Innocence meeting accountability — the leap is real but must be made honestly.", advice: "As you start fresh, be clear about what is right and fair. A beginning built on honesty lasts; one built on avoidance does not." },
        vn: { meaning: "Một khởi đầu mới phải được đặt nền tảng trong sự công bằng và chính trực. Sự vô tư gặp gỡ trách nhiệm — bước nhảy là thực nhưng phải được thực hiện một cách trung thực.", advice: "Khi bạn bắt đầu lại, hãy rõ ràng về điều gì là đúng và công bằng. Một khởi đầu được xây dựng trên sự trung thực sẽ bền lâu; một khởi đầu được xây dựng trên sự né tránh thì không." }
    },
    "The Fool-The Hanged Man": {
        en: { meaning: "A new beginning that requires a pause or a leap that demands surrender. Paradoxically, the most powerful next step is to stop and wait.", advice: "Before you leap, hang back. The timing for action is not yet right — use this pause to gain a perspective you would have missed." },
        vn: { meaning: "Một khởi đầu mới đòi hỏi sự tạm dừng hoặc một bước nhảy đòi hỏi sự buông bỏ. Nghịch lý thay, bước đi mạnh mẽ nhất tiếp theo là dừng lại và chờ đợi.", advice: "Trước khi nhảy, hãy giữ lại. Thời điểm hành động chưa đúng — hãy dùng sự tạm dừng này để có được góc nhìn bạn có thể đã bỏ lỡ." }
    },
    "The Fool-Death": {
        en: { meaning: "A new beginning emerging directly from an ending. The Fool steps forward precisely because the old has been released — this is pure transformation energy.", advice: "You have cleared the ground. Now take the leap without looking back at what ended. The new beginning is real." },
        vn: { meaning: "Một khởi đầu mới nổi lên trực tiếp từ một kết thúc. Người Điên bước về phía trước chính xác vì cái cũ đã được buông bỏ — đây là năng lượng chuyển hóa thuần túy.", advice: "Bạn đã dọn sạch mặt đất. Bây giờ hãy bước nhảy mà không nhìn lại những gì đã kết thúc. Khởi đầu mới là thực." }
    },
    "The Fool-Temperance": {
        en: { meaning: "A new beginning approached with patience and balance. The fresh start is real, but it will flourish best through moderation and steady, measured steps.", advice: "Don't rush this beginning. The most lasting transformations happen gradually. Take the leap but land with grace." },
        vn: { meaning: "Một khởi đầu mới được tiếp cận với sự kiên nhẫn và cân bằng. Sự khởi đầu mới là thực, nhưng nó sẽ phát triển tốt nhất qua sự điều độ và những bước đo lường ổn định.", advice: "Đừng vội vàng khởi đầu này. Những chuyển hóa bền lâu nhất xảy ra dần dần. Hãy bước nhảy nhưng tiếp đất với duyên dáng." }
    },
    "The Fool-The Devil": {
        en: { meaning: "Innocent energy stepping into temptation or a naive leap into something binding. The excitement of a new start without seeing the chains it might bring.", advice: "Look before you leap here. The opportunity is real but there are strings attached. Awareness now prevents regret later." },
        vn: { meaning: "Năng lượng hồn nhiên bước vào sự cám dỗ hoặc một bước nhảy ngây thơ vào điều gì đó ràng buộc. Sự hào hứng của một khởi đầu mới mà không nhìn thấy những xiềng xích nó có thể mang lại.", advice: "Hãy nhìn trước khi nhảy ở đây. Cơ hội là thực nhưng có điều kiện kèm theo. Sự nhận thức bây giờ ngăn chặn hối tiếc sau này." }
    },
    "The Fool-The Tower": {
        en: { meaning: "A spontaneous leap met with sudden upheaval, or a new beginning born from chaos and collapse. Unexpected disruption arriving just as something fresh is starting.", advice: "The disruption and the new beginning are connected. Trust that the collapse is clearing space for exactly the fresh start you need." },
        vn: { meaning: "Một bước nhảy tự phát gặp phải sự biến động đột ngột, hoặc một khởi đầu mới sinh ra từ sự hỗn loạn và sụp đổ. Sự gián đoạn bất ngờ đến ngay khi điều gì đó mới mẻ đang bắt đầu.", advice: "Sự gián đoạn và khởi đầu mới được kết nối với nhau. Hãy tin rằng sự sụp đổ đang dọn sạch không gian cho chính xác khởi đầu mới bạn cần." }
    },
    "The Fool-The Star": {
        en: { meaning: "A new beginning guided by hope and inspired vision. Stepping forward into the unknown with genuine faith that something beautiful is ahead.", advice: "Let hope lead this leap. The star you are following is real — trust the inspiration and move toward it without hesitation." },
        vn: { meaning: "Một khởi đầu mới được hướng dẫn bởi hy vọng và tầm nhìn đầy cảm hứng. Bước về phía trước vào cõi chưa biết với niềm tin thực sự rằng điều gì đó tươi đẹp đang ở phía trước.", advice: "Hãy để hy vọng dẫn dắt bước nhảy này. Ngôi sao bạn đang theo đuổi là thực — hãy tin vào cảm hứng và tiến về phía nó mà không do dự." }
    },
    "The Fool-The Moon": {
        en: { meaning: "A leap into mystery, illusion, and the unconscious. Beginning something whose full nature is hidden — excitement mixed with disorientation.", advice: "Proceed with awareness. Not everything about this beginning is as it appears. Trust your intuition more than the surface excitement." },
        vn: { meaning: "Một bước nhảy vào bí ẩn, ảo tưởng và tiềm thức. Bắt đầu điều gì đó mà bản chất đầy đủ của nó bị ẩn giấu — sự hào hứng pha trộn với sự mất phương hướng.", advice: "Hãy tiến hành với sự nhận thức. Không phải mọi thứ về khởi đầu này đều như vẻ bề ngoài. Hãy tin vào trực giác của bạn hơn là sự hào hứng bề mặt." }
    },
    "The Fool-The Sun": {
        en: { meaning: "A joyful, radiant new beginning. Stepping forward with pure confidence, clarity, and happiness — this is one of the most auspicious combinations for fresh starts.", advice: "Go. The timing is perfect, the energy is bright, and the beginning is genuinely blessed. Trust the joy and move forward." },
        vn: { meaning: "Một khởi đầu mới vui vẻ, rực rỡ. Bước về phía trước với sự tự tin thuần túy, sự rõ ràng và hạnh phúc — đây là một trong những sự kết hợp tốt đẹp nhất cho những khởi đầu mới.", advice: "Hãy đi. Thời điểm hoàn hảo, năng lượng sáng sủa và khởi đầu thực sự được ban phước. Hãy tin vào niềm vui và tiến lên." }
    },
    "The Fool-Judgement": {
        en: { meaning: "A new beginning answering a deep inner calling. The leap forward is also a response to something awakening within — this fresh start has soul-level significance.", advice: "This is not just a beginning — it is a calling. Answer it fully. The new chapter you are entering has been waiting for your yes." },
        vn: { meaning: "Một khởi đầu mới đáp lại một tiếng gọi nội tâm sâu sắc. Bước nhảy về phía trước cũng là phản hồi với điều gì đó đang thức dậy bên trong — khởi đầu mới này có ý nghĩa ở tầng linh hồn.", advice: "Đây không chỉ là một khởi đầu — đây là một tiếng gọi. Hãy đáp lại nó đầy đủ. Chương mới bạn đang bước vào đã chờ đợi sự đồng ý của bạn." }
    },

    // ── BATCH B: THE MAGICIAN completions ────────────────────────
    "The Magician-The Empress": {
        en: { meaning: "Skill and will channeled into abundant creative expression. The tools of manifestation meeting fertile, nurturing energy — ideas becoming real, tangible things.", advice: "Create deliberately and generously. Your skills are at peak right now; invest them in projects that have heart and lasting value." },
        vn: { meaning: "Kỹ năng và ý chí được kênh hóa vào biểu đạt sáng tạo phong phú. Các công cụ biểu hiện gặp gỡ năng lượng màu mỡ, nuôi dưỡng — những ý tưởng trở thành những thứ thực, hữu hình.", advice: "Hãy tạo ra một cách có chủ đích và hào phóng. Kỹ năng của bạn đang ở đỉnh cao ngay bây giờ; hãy đầu tư chúng vào những dự án có trái tim và giá trị lâu dài." }
    },
    "The Magician-The Hierophant": {
        en: { meaning: "Personal skill meeting established tradition. Using learned mastery within a structured system — the power of technique combined with the authority of proven knowledge.", advice: "Work within the tradition while bringing your own mastery to it. Innovation and convention are not opposites here — they amplify each other." },
        vn: { meaning: "Kỹ năng cá nhân gặp gỡ truyền thống đã được thiết lập. Sử dụng sự thành thạo đã học được trong một hệ thống có cấu trúc — sức mạnh của kỹ thuật kết hợp với thẩm quyền của kiến thức đã được chứng minh.", advice: "Hãy làm việc trong truyền thống trong khi mang sự thành thạo của riêng bạn vào nó. Sự đổi mới và quy ước không phải là đối lập ở đây — chúng khuếch đại lẫn nhau." }
    },
    "The Magician-The Chariot": {
        en: { meaning: "Focused will meeting determined drive — a powerhouse combination for achievement. Skills deployed with total commitment and directional force.", advice: "Pick your goal and pursue it with everything you have. The Magician supplies the tools; the Chariot supplies the discipline. Together they are unstoppable." },
        vn: { meaning: "Ý chí tập trung gặp gỡ quyết tâm mạnh mẽ — một sự kết hợp mạnh mẽ để đạt thành tựu. Kỹ năng được triển khai với sự cam kết hoàn toàn và lực lượng định hướng.", advice: "Hãy chọn mục tiêu của bạn và theo đuổi nó với tất cả những gì bạn có. Người Pháp Sư cung cấp công cụ; Cỗ Xe cung cấp kỷ luật. Cùng nhau họ là không thể ngăn cản." }
    },
    "The Magician-Strength": {
        en: { meaning: "Conscious skill paired with inner emotional mastery. The ability to act with both competence and compassion — head and heart working as one.", advice: "Bring your full intelligence and your full warmth to this situation. Technical skill without heart loses its power; heart without skill loses its direction." },
        vn: { meaning: "Kỹ năng có ý thức kết hợp với sự làm chủ cảm xúc bên trong. Khả năng hành động với cả năng lực lẫn lòng trắc ẩn — lý trí và trái tim hoạt động như một.", advice: "Hãy mang trí tuệ đầy đủ và sự ấm áp đầy đủ của bạn vào tình huống này. Kỹ năng kỹ thuật thiếu trái tim mất đi sức mạnh; trái tim thiếu kỹ năng mất đi hướng đi." }
    },
    "The Magician-The Hermit": {
        en: { meaning: "Skill refined through solitary practice and deep reflection. The mastery that comes only from patient, dedicated inner work — wisdom earned through disciplined study.", advice: "Take time to develop your craft in private before bringing it public. The deepest skills are built in solitude and tested in silence." },
        vn: { meaning: "Kỹ năng được tinh chỉnh qua thực hành cô độc và suy ngẫm sâu sắc. Sự thành thạo chỉ đến qua công việc nội tâm kiên nhẫn, tận tụy — sự khôn ngoan kiếm được qua nghiên cứu có kỷ luật.", advice: "Hãy dành thời gian phát triển kỹ năng của bạn trong riêng tư trước khi mang nó ra công chúng. Những kỹ năng sâu sắc nhất được xây dựng trong cô đơn và được thử thách trong im lặng." }
    },
    "The Magician-Wheel of Fortune": {
        en: { meaning: "Skill meeting opportunity at exactly the right moment. The combination of preparation and timing — when what you can do meets the moment that needs it.", advice: "This is your window. The skills you have developed are now aligned with a turning point. Move confidently and decisively." },
        vn: { meaning: "Kỹ năng gặp gỡ cơ hội vào đúng thời điểm. Sự kết hợp của sự chuẩn bị và thời điểm — khi những gì bạn có thể làm gặp gỡ thời điểm cần nó.", advice: "Đây là cửa sổ của bạn. Những kỹ năng bạn đã phát triển hiện đang được căn chỉnh với một bước ngoặt. Hãy di chuyển một cách tự tin và quyết đoán." }
    },
    "The Magician-Justice": {
        en: { meaning: "Skill and action aligned with fairness, truth, and ethical integrity. Using one's abilities in service of what is right — power guided by principle.", advice: "Use your considerable abilities in service of what is just. Competence in service of integrity is among the most powerful forces available." },
        vn: { meaning: "Kỹ năng và hành động phù hợp với sự công bằng, sự thật và chính trực đạo đức. Sử dụng khả năng của mình trong phục vụ những gì đúng đắn — quyền lực được hướng dẫn bởi nguyên tắc.", advice: "Hãy sử dụng khả năng đáng kể của bạn để phục vụ những gì công bằng. Năng lực trong phục vụ sự chính trực là một trong những lực lượng mạnh mẽ nhất có sẵn." }
    },
    "The Magician-The Hanged Man": {
        en: { meaning: "Active ability paused for a necessary perspective shift. Skill temporarily suspended so that a deeper understanding can emerge.", advice: "Pause the doing and examine the why. Your skills are real but may be applied in the wrong direction. The suspension reveals the correction." },
        vn: { meaning: "Khả năng hoạt động bị tạm dừng để có sự thay đổi góc nhìn cần thiết. Kỹ năng tạm thời bị đình chỉ để một sự hiểu biết sâu sắc hơn có thể nổi lên.", advice: "Hãy tạm dừng việc làm và xem xét lý do tại sao. Kỹ năng của bạn là thực nhưng có thể đang được áp dụng theo hướng sai. Sự đình chỉ tiết lộ sự điều chỉnh." }
    },
    "The Magician-Death": {
        en: { meaning: "Transformation of skills and methods. Old ways of doing things ending to make way for a more evolved, powerful approach.", advice: "Release the techniques that no longer serve you. Your skills are not dying — they are evolving. Let the old method go to discover the more powerful one." },
        vn: { meaning: "Sự chuyển hóa của kỹ năng và phương pháp. Những cách thức cũ kết thúc để nhường chỗ cho một cách tiếp cận tiến hóa hơn, mạnh mẽ hơn.", advice: "Hãy buông bỏ những kỹ thuật không còn phục vụ bạn. Kỹ năng của bạn không chết — chúng đang tiến hóa. Hãy để phương pháp cũ đi để khám phá phương pháp mạnh mẽ hơn." }
    },
    "The Magician-Temperance": {
        en: { meaning: "Skills applied with patience, balance, and careful calibration. The power of restraint — knowing when to act and when to hold back is itself a mastery.", advice: "Do not use all your force at once. Measure your effort with precision. The most masterful action is often the most precisely timed and exactly sufficient one." },
        vn: { meaning: "Kỹ năng được áp dụng với sự kiên nhẫn, cân bằng và hiệu chỉnh cẩn thận. Sức mạnh của sự kiềm chế — biết khi nào cần hành động và khi nào cần giữ lại bản thân là sự thành thạo.", advice: "Đừng dùng hết sức lực của bạn cùng một lúc. Hãy đo lường nỗ lực của bạn với độ chính xác. Hành động thành thạo nhất thường là hành động được tính toán thời gian chính xác và vừa đủ nhất." }
    },
    "The Magician-The Devil": {
        en: { meaning: "Skill used to control, manipulate, or create dependency. The shadow side of mastery — abilities turned toward binding rather than liberating.", advice: "Examine whether your skills are being used to empower others or to control them. Mastery that creates dependency is not true mastery." },
        vn: { meaning: "Kỹ năng được dùng để kiểm soát, thao túng hoặc tạo ra sự phụ thuộc. Mặt bóng tối của sự thành thạo — khả năng hướng về việc ràng buộc hơn là giải phóng.", advice: "Hãy kiểm tra xem kỹ năng của bạn có đang được dùng để trao quyền cho người khác hay để kiểm soát họ. Sự thành thạo tạo ra sự phụ thuộc không phải là sự thành thạo thực sự." }
    },
    "The Magician-The Tower": {
        en: { meaning: "Skills and systems disrupted by sudden, unexpected force. A breakdown that reveals which abilities are truly solid and which were built on false foundations.", advice: "Let the disruption clarify what is truly in your toolkit. Abilities that survive upheaval are the ones worth developing further." },
        vn: { meaning: "Kỹ năng và hệ thống bị gián đoạn bởi lực lượng đột ngột, bất ngờ. Sự sụp đổ tiết lộ những khả năng nào thực sự vững chắc và những khả năng nào được xây dựng trên nền tảng sai.", advice: "Hãy để sự gián đoạn làm rõ những gì thực sự có trong bộ công cụ của bạn. Những khả năng tồn tại sau biến động là những khả năng đáng phát triển thêm." }
    },
    "The Magician-The Star": {
        en: { meaning: "Skills guided by inspired vision and higher purpose. Talent in service of genuine hope — the ability to make beautiful visions real.", advice: "Use your skills to build toward what you truly believe in. Mastery connected to inspiration creates work that lasts and matters." },
        vn: { meaning: "Kỹ năng được hướng dẫn bởi tầm nhìn đầy cảm hứng và mục đích cao hơn. Tài năng phục vụ hy vọng thực sự — khả năng biến những tầm nhìn tươi đẹp thành thực.", advice: "Hãy dùng kỹ năng của bạn để xây dựng hướng tới những gì bạn thực sự tin tưởng. Sự thành thạo kết nối với cảm hứng tạo ra công việc bền lâu và có ý nghĩa." }
    },
    "The Magician-The Moon": {
        en: { meaning: "Skills applied in uncertain, unclear conditions. Acting competently when the full picture is hidden — navigating by feel and intuition as much as by knowledge.", advice: "Trust your instincts alongside your skills here. Not everything can be seen clearly; your intuitive intelligence is as valid as your technical one." },
        vn: { meaning: "Kỹ năng được áp dụng trong điều kiện không chắc chắn, không rõ ràng. Hành động có năng lực khi bức tranh đầy đủ bị ẩn giấu — điều hướng bằng cảm giác và trực giác cũng như kiến thức.", advice: "Hãy tin vào bản năng của bạn cùng với kỹ năng của bạn ở đây. Không phải mọi thứ đều có thể nhìn thấy rõ ràng; trí tuệ trực giác của bạn cũng có giá trị như trí tuệ kỹ thuật của bạn." }
    },
    "The Magician-The Sun": {
        en: { meaning: "Skill meeting full success and radiant clarity. Mastery expressing itself with complete confidence and visible, joyful results.", advice: "This is your moment. All your skills are aligned with clear, positive outcomes. Act with full confidence — the conditions are perfect." },
        vn: { meaning: "Kỹ năng gặp gỡ thành công đầy đủ và sự rõ ràng rực rỡ. Sự thành thạo thể hiện bản thân với sự tự tin hoàn toàn và kết quả vui vẻ, hiển thị.", advice: "Đây là thời điểm của bạn. Tất cả kỹ năng của bạn được căn chỉnh với kết quả rõ ràng, tích cực. Hãy hành động với sự tự tin đầy đủ — các điều kiện hoàn hảo." }
    },
    "The Magician-Judgement": {
        en: { meaning: "Skills awakened to a higher calling. A mastery that is being redirected toward its true purpose — not just what you can do, but what you are meant to do.", advice: "Let the awakening redirect your abilities. The skills you have developed are not accidental — they are preparation for what you are now being called to." },
        vn: { meaning: "Kỹ năng được thức tỉnh hướng đến một tiếng gọi cao hơn. Sự thành thạo đang được định hướng lại hướng đến mục đích thực sự của nó — không chỉ là những gì bạn có thể làm, mà là những gì bạn được định sẵn để làm.", advice: "Hãy để sự thức tỉnh định hướng lại khả năng của bạn. Những kỹ năng bạn đã phát triển không phải là ngẫu nhiên — chúng là sự chuẩn bị cho những gì bạn đang được gọi đến." }
    },
    "The Magician-The World": {
        en: { meaning: "Mastery achieving complete, total fulfillment. Skills fully expressed in a moment of genuine completion and wholeness — the culmination of dedicated craft.", advice: "Acknowledge what you have mastered. This combination speaks of genuine achievement — not arrogance, but the quiet satisfaction of a craftsperson whose work is truly done." },
        vn: { meaning: "Sự thành thạo đạt được sự thỏa mãn hoàn toàn, đầy đủ. Kỹ năng được biểu đạt đầy đủ trong một khoảnh khắc hoàn thành và toàn vẹn thực sự — đỉnh cao của kỹ năng tận tụy.", advice: "Hãy thừa nhận những gì bạn đã thành thạo. Sự kết hợp này nói về thành tựu thực sự — không phải kiêu ngạo, mà là sự thỏa mãn lặng lẽ của một người thợ thủ công có công việc thực sự hoàn thành." }
    },

    // ── BATCH C: HIGH PRIESTESS completions ──────────────────────
    "The High Priestess-The Emperor": {
        en: { meaning: "Intuition meeting authority and structure. Inner knowing held within an outer framework of rules and order — the tension between what is sensed and what is permitted.", advice: "Your intuition is valid even within rigid structures. Find the way to honour what you know while working within what exists." },
        vn: { meaning: "Trực giác gặp gỡ thẩm quyền và cấu trúc. Sự hiểu biết bên trong được giữ trong một khuôn khổ bên ngoài của các quy tắc và trật tự — sự căng thẳng giữa những gì được cảm nhận và những gì được phép.", advice: "Trực giác của bạn có giá trị ngay cả trong các cấu trúc cứng nhắc. Hãy tìm cách tôn vinh những gì bạn biết trong khi làm việc trong những gì đang tồn tại." }
    },
    "The High Priestess-The Hierophant": {
        en: { meaning: "Personal mystical knowing meeting institutional spiritual authority. Private revelation versus public tradition — the tension between inner wisdom and outer doctrine.", advice: "Your inner spiritual knowing is valid alongside institutional tradition. Both the mystical and the traditional have their wisdom; discern which serves you here." },
        vn: { meaning: "Sự hiểu biết huyền bí cá nhân gặp gỡ thẩm quyền tâm linh thể chế. Sự mặc khải riêng tư so với truyền thống công khai — sự căng thẳng giữa sự khôn ngoan bên trong và giáo lý bên ngoài.", advice: "Sự hiểu biết tâm linh bên trong của bạn có giá trị cùng với truyền thống thể chế. Cả huyền bí và truyền thống đều có sự khôn ngoan của chúng; hãy phân biệt cái nào phục vụ bạn ở đây." }
    },
    "The High Priestess-The Lovers": {
        en: { meaning: "Intuition guiding a significant choice in love or connection. Deep inner knowing illuminating what the heart truly wants beneath the surface of a relationship.", advice: "Listen to what your depths are telling you about this relationship or choice. The High Priestess sees what the conscious mind misses." },
        vn: { meaning: "Trực giác hướng dẫn một lựa chọn quan trọng trong tình yêu hoặc kết nối. Sự hiểu biết nội tâm sâu sắc chiếu sáng những gì trái tim thực sự muốn bên dưới bề mặt của một mối quan hệ.", advice: "Hãy lắng nghe những gì chiều sâu của bạn đang nói về mối quan hệ hoặc lựa chọn này. Nữ Giáo Hoàng nhìn thấy những gì tâm trí có ý thức bỏ lỡ." }
    },
    "The High Priestess-The Chariot": {
        en: { meaning: "Intuitive knowledge guiding determined action. Moving forward with both inner confidence and outer drive — the rare combination of instinct and will.", advice: "Let your gut lead before your strategy. The direction that feels right from within is often more accurate than the direction that looks right from without." },
        vn: { meaning: "Kiến thức trực giác hướng dẫn hành động quyết tâm. Tiến về phía trước với cả sự tự tin nội tâm và động lực bên ngoài — sự kết hợp hiếm có của bản năng và ý chí.", advice: "Hãy để trực giác dẫn dắt trước chiến lược của bạn. Hướng cảm thấy đúng từ bên trong thường chính xác hơn hướng trông đúng từ bên ngoài." }
    },
    "The High Priestess-Strength": {
        en: { meaning: "Inner knowing met with inner strength. Deep feminine wisdom and quiet powerful courage operating together — a deeply centred, almost unshakeable combination.", advice: "You already know what is right here, and you have the quiet strength to honour it. Trust both the knowing and the courage it takes to act on it." },
        vn: { meaning: "Sự hiểu biết bên trong gặp gỡ sức mạnh bên trong. Sự khôn ngoan nữ tính sâu sắc và lòng dũng cảm mạnh mẽ lặng lẽ hoạt động cùng nhau — một sự kết hợp sâu sắc tập trung, gần như không thể lay chuyển.", advice: "Bạn đã biết điều gì đúng ở đây, và bạn có sức mạnh lặng lẽ để tôn trọng nó. Hãy tin vào cả sự hiểu biết và sự dũng cảm cần thiết để hành động theo nó." }
    },
    "The High Priestess-Wheel of Fortune": {
        en: { meaning: "Intuition aligned with destiny's turning wheel. Inner knowing that this moment of change is fated — a deep sense that what is happening is exactly what is meant to happen.", advice: "Trust the sense that this is destined. Your intuition is reading the deeper pattern correctly. Go with the turning, not against it." },
        vn: { meaning: "Trực giác phù hợp với bánh xe định mệnh đang quay. Sự hiểu biết nội tâm rằng thời điểm thay đổi này là định mệnh — cảm giác sâu sắc rằng những gì đang xảy ra là chính xác những gì được định sẵn.", advice: "Hãy tin vào cảm giác rằng đây là định mệnh. Trực giác của bạn đang đọc đúng mẫu sâu hơn. Hãy đi theo chiều xoay, không phải chống lại nó." }
    },
    "The High Priestess-The Hanged Man": {
        en: { meaning: "Deep intuition in a state of suspension and surrender. Waiting in the knowing — a period of profound inner listening before any outer movement is possible.", advice: "The understanding you seek will come through stillness, not through action. Sit with what you know in the silence, and let the deeper truth surface." },
        vn: { meaning: "Trực giác sâu sắc trong trạng thái đình chỉ và buông bỏ. Chờ đợi trong sự hiểu biết — một giai đoạn lắng nghe nội tâm sâu sắc trước khi bất kỳ chuyển động bên ngoài nào có thể xảy ra.", advice: "Sự hiểu biết bạn tìm kiếm sẽ đến qua sự tĩnh lặng, không phải qua hành động. Hãy ngồi với những gì bạn biết trong im lặng, và để sự thật sâu hơn nổi lên." }
    },
    "The High Priestess-Death": {
        en: { meaning: "Intuitive wisdom guiding a profound transformation. The inner knowing that an ending is necessary — and that what lies beyond it is worth the passage.", advice: "Trust what your deeper self is telling you about this transition. The ending your intuition confirms is real. Move through it with awareness." },
        vn: { meaning: "Sự khôn ngoan trực giác hướng dẫn một sự chuyển hóa sâu sắc. Sự hiểu biết nội tâm rằng một kết thúc là cần thiết — và rằng những gì nằm bên kia nó xứng đáng với hành trình.", advice: "Hãy tin vào những gì bản thân sâu thẳm của bạn đang nói về sự chuyển tiếp này. Kết thúc mà trực giác của bạn xác nhận là thực. Hãy đi qua nó với sự nhận thức." }
    },
    "The High Priestess-Temperance": {
        en: { meaning: "Deep inner wisdom aligned with patient, balanced healing. Knowing when to act and when to simply allow — the grace of wise restraint.", advice: "The answer is already within you, and it is asking for patience. Trust the slow, gentle unfolding that your intuition is endorsing." },
        vn: { meaning: "Sự khôn ngoan nội tâm sâu sắc phù hợp với sự chữa lành kiên nhẫn, cân bằng. Biết khi nào cần hành động và khi nào chỉ cần để mọi thứ diễn ra — sự duyên dáng của sự kiềm chế khôn ngoan.", advice: "Câu trả lời đã ở trong bạn, và nó đang yêu cầu sự kiên nhẫn. Hãy tin vào sự mở ra chậm, nhẹ nhàng mà trực giác của bạn đang tán đồng." }
    },
    "The High Priestess-The Tower": {
        en: { meaning: "Intuition warning of sudden disruption — or inner wisdom surviving a collapse intact. What the intuition knew is now confirmed by events.", advice: "Your inner knowing was right. The disruption has validated what you sensed but perhaps could not name. Trust that wisdom now more than ever." },
        vn: { meaning: "Trực giác cảnh báo về sự gián đoạn đột ngột — hoặc sự khôn ngoan bên trong tồn tại qua sự sụp đổ nguyên vẹn. Những gì trực giác biết giờ được xác nhận bởi các sự kiện.", advice: "Sự hiểu biết nội tâm của bạn đúng rồi. Sự gián đoạn đã xác nhận những gì bạn cảm nhận nhưng có thể không thể đặt tên. Hãy tin vào sự khôn ngoan đó hơn bao giờ hết." }
    },
    "The High Priestess-The Sun": {
        en: { meaning: "Inner knowing illuminated by radiant clarity. Intuitive wisdom expressed with full confidence and joy — what was hidden becomes gloriously clear.", advice: "Trust the knowing that is emerging into full light. Your intuitive intelligence is being confirmed — act on it with the confidence it deserves." },
        vn: { meaning: "Sự hiểu biết nội tâm được chiếu sáng bởi sự rõ ràng rực rỡ. Sự khôn ngoan trực giác được thể hiện với sự tự tin và niềm vui đầy đủ — những gì ẩn giấu trở nên rõ ràng một cách rực rỡ.", advice: "Hãy tin vào sự hiểu biết đang nổi lên vào ánh sáng đầy đủ. Trí tuệ trực giác của bạn đang được xác nhận — hãy hành động theo nó với sự tự tin xứng đáng." }
    },
    "The High Priestess-Judgement": {
        en: { meaning: "Intuition answering a soul-level awakening call. The deepest inner knowing aligning with a moment of profound spiritual clarity and summons.", advice: "The call you are hearing in your depths is real and significant. Answer it with the full trust of everything you have learned to know within yourself." },
        vn: { meaning: "Trực giác đáp lại tiếng gọi thức tỉnh ở tầng linh hồn. Sự hiểu biết nội tâm sâu nhất phù hợp với một khoảnh khắc rõ ràng tâm linh sâu sắc và tiếng gọi.", advice: "Tiếng gọi bạn đang nghe trong chiều sâu của mình là thực và có ý nghĩa. Hãy đáp lại nó với sự tin tưởng đầy đủ của tất cả những gì bạn đã học được để biết trong chính mình." }
    },
    "The High Priestess-The World": {
        en: { meaning: "Intuitive mastery achieving total completion. The deep feminine wisdom fully expressed and recognised — wholeness that comes from having honoured the inner life completely.", advice: "You have walked the inner path fully. This completion is genuine and earned. Allow yourself to inhabit the wholeness you have cultivated." },
        vn: { meaning: "Sự thành thạo trực giác đạt được sự hoàn thành toàn diện. Sự khôn ngoan nữ tính sâu sắc được biểu đạt và công nhận đầy đủ — sự toàn vẹn đến từ việc hoàn toàn tôn trọng cuộc sống nội tâm.", advice: "Bạn đã đi trọn con đường nội tâm. Sự hoàn thành này là thực và xứng đáng. Hãy để bản thân hiện diện trong sự toàn vẹn bạn đã nuôi dưỡng." }
    },

    // ── BATCH D: EMPRESS completions ─────────────────────────────
    "The Empress-The Hierophant": {
        en: { meaning: "Creative abundance meeting traditional structure. Nature's generosity and organic flow encountering institutional form and established convention.", advice: "Let the creative abundance find expression within a structure that can hold and direct it. Tradition can support growth when it is not used to constrain it." },
        vn: { meaning: "Sự dồi dào sáng tạo gặp gỡ cấu trúc truyền thống. Sự hào phóng của thiên nhiên và dòng chảy hữu cơ gặp gỡ hình thức thể chế và quy ước đã được thiết lập.", advice: "Hãy để sự dồi dào sáng tạo tìm cách biểu đạt trong một cấu trúc có thể giữ và định hướng nó. Truyền thống có thể hỗ trợ sự phát triển khi nó không được dùng để kiểm soát nó." }
    },
    "The Empress-The Lovers": {
        en: { meaning: "Abundant love and deep sensual connection. A relationship blooming with full creative and emotional richness — love in its most fertile and joyful expression.", advice: "Nurture this connection with full presence and generosity. The love available here is real and rich — receive it and give it with equal openness." },
        vn: { meaning: "Tình yêu dồi dào và kết nối cảm quan sâu sắc. Một mối quan hệ nở rộ với sự phong phú sáng tạo và cảm xúc đầy đủ — tình yêu trong biểu đạt màu mỡ và vui vẻ nhất.", advice: "Hãy nuôi dưỡng kết nối này với sự hiện diện và hào phóng đầy đủ. Tình yêu có sẵn ở đây là thực và phong phú — hãy đón nhận nó và cho đi nó với sự cởi mở bình đẳng." }
    },
    "The Empress-The Chariot": {
        en: { meaning: "Creative abundance paired with focused, driving determination. The energy of full creation moving with purposeful force toward its goal.", advice: "Direct the creative abundance with clear intention. You have both the generative energy and the drive to make something significant happen now." },
        vn: { meaning: "Sự dồi dào sáng tạo kết hợp với quyết tâm tập trung, mạnh mẽ. Năng lượng của sự sáng tạo đầy đủ di chuyển với lực lượng có mục đích hướng đến mục tiêu của nó.", advice: "Hãy định hướng sự dồi dào sáng tạo với ý định rõ ràng. Bạn có cả năng lượng phát sinh và quyết tâm để làm cho điều gì đó quan trọng xảy ra ngay bây giờ." }
    },
    "The Empress-Strength": {
        en: { meaning: "Nurturing power meeting inner emotional strength. Abundant, generous energy paired with gentle, patient courage — the fullest expression of compassionate power.", advice: "Offer your care and creativity from a place of genuine inner strength. Giving from overflow is sustainable; giving from depletion is not." },
        vn: { meaning: "Sức mạnh nuôi dưỡng gặp gỡ sức mạnh cảm xúc bên trong. Năng lượng dồi dào, hào phóng kết hợp với lòng dũng cảm nhẹ nhàng, kiên nhẫn — biểu đạt đầy đủ nhất của quyền lực đầy lòng trắc ẩn.", advice: "Hãy cung cấp sự chăm sóc và sáng tạo của bạn từ một nơi có sức mạnh nội tâm thực sự. Cho đi từ sự dư dả là bền vững; cho đi từ sự kiệt sức thì không." }
    },
    "The Empress-The Hermit": {
        en: { meaning: "Creative abundance and outer generosity drawn inward for reflection. A period of withdrawal from external expression to reconnect with the creative source.", advice: "Take time to replenish the creative well. Even the most abundant nature needs seasons of quiet restoration. The withdrawal serves the next flowering." },
        vn: { meaning: "Sự dồi dào sáng tạo và sự hào phóng bên ngoài được hướng vào bên trong để suy ngẫm. Một giai đoạn rút lui khỏi biểu đạt bên ngoài để kết nối lại với nguồn sáng tạo.", advice: "Hãy dành thời gian để bổ sung giếng sáng tạo. Ngay cả thiên nhiên phong phú nhất cũng cần những mùa phục hồi yên tĩnh. Sự rút lui phục vụ sự nở hoa tiếp theo." }
    },
    "The Empress-Wheel of Fortune": {
        en: { meaning: "Creative abundance aligned with a turning point of fate. Fertile energy meeting a pivotal moment — what is planted now will flourish through the changing of the wheel.", advice: "Plant what you most want to grow right now. This is a moment of exceptional creative opportunity aligned with cosmic timing." },
        vn: { meaning: "Sự dồi dào sáng tạo phù hợp với một bước ngoặt của số phận. Năng lượng màu mỡ gặp gỡ một thời điểm then chốt — những gì được gieo trồng bây giờ sẽ phát triển qua sự thay đổi của bánh xe.", advice: "Hãy gieo trồng những gì bạn muốn phát triển nhất ngay bây giờ. Đây là thời điểm cơ hội sáng tạo đặc biệt phù hợp với thời điểm vũ trụ." }
    },
    "The Empress-Justice": {
        en: { meaning: "Abundant creative energy paired with fairness and balanced judgment. Generous expression guided by what is genuinely right — nurturing that is also discerning.", advice: "Be generous but also honest. True nurturing sometimes means setting fair limits. Abundance offered wisely is more valuable than abundance offered indiscriminately." },
        vn: { meaning: "Năng lượng sáng tạo dồi dào kết hợp với sự công bằng và phán đoán cân bằng. Biểu đạt hào phóng được hướng dẫn bởi những gì thực sự đúng — sự nuôi dưỡng cũng có sự phân biệt.", advice: "Hãy hào phóng nhưng cũng trung thực. Sự nuôi dưỡng thực sự đôi khi có nghĩa là đặt ra những giới hạn công bằng. Sự dồi dào được cung cấp khôn ngoan có giá trị hơn sự dồi dào được cung cấp bừa bãi." }
    },
    "The Empress-The Hanged Man": {
        en: { meaning: "Creative abundance paused in a state of surrender. A fertile period of waiting where the creative potential is held in suspension before it blooms.", advice: "Trust the pause. What is growing within you is real — it simply needs more time before it can emerge. Let the creative energy ripen undisturbed." },
        vn: { meaning: "Sự dồi dào sáng tạo bị tạm dừng trong trạng thái buông bỏ. Một giai đoạn màu mỡ của sự chờ đợi nơi tiềm năng sáng tạo được giữ trong sự đình chỉ trước khi nở hoa.", advice: "Hãy tin vào sự tạm dừng. Những gì đang lớn lên trong bạn là thực — nó chỉ cần thêm thời gian trước khi có thể nổi lên. Hãy để năng lượng sáng tạo chín muồi mà không bị xáo trộn." }
    },
    "The Empress-Death": {
        en: { meaning: "Creative abundance transformed through a necessary ending. Old forms of expression dying to make way for a richer, more evolved creativity.", advice: "Let the old creative form go completely. What replaces it will be more authentic and more alive. Release what no longer grows." },
        vn: { meaning: "Sự dồi dào sáng tạo được chuyển hóa qua một kết thúc cần thiết. Những hình thức biểu đạt cũ chết đi để nhường chỗ cho sự sáng tạo phong phú hơn, tiến hóa hơn.", advice: "Hãy hoàn toàn buông bỏ hình thức sáng tạo cũ. Những gì thay thế nó sẽ xác thực hơn và sống động hơn. Hãy buông bỏ những gì không còn phát triển." }
    },
    "The Empress-The Devil": {
        en: { meaning: "Creative or sensual abundance becoming excess or addiction. The shadow of fertility — pleasure without wisdom, nurturing without boundaries.", advice: "Examine where natural abundance has tipped into compulsion or overconsumption. The Empress's gifts are meant to nourish; when they bind, something has gone wrong." },
        vn: { meaning: "Sự dồi dào sáng tạo hoặc cảm quan trở thành thái quá hoặc nghiện ngập. Bóng tối của sự màu mỡ — niềm vui không có sự khôn ngoan, sự nuôi dưỡng không có ranh giới.", advice: "Hãy xem xét nơi sự dồi dào tự nhiên đã chuyển thành sự ép buộc hoặc tiêu thụ quá mức. Những món quà của Nữ Hoàng được thiết kế để nuôi dưỡng; khi chúng ràng buộc, có điều gì đó đã sai." }
    },
    "The Empress-The Tower": {
        en: { meaning: "Creative abundance disrupted by sudden upheaval. A fertile situation destabilised — but the creative potential is not destroyed, only redirected.", advice: "The disruption has not killed the creative potential; it has changed its form. Look for what is still alive and growing in the aftermath." },
        vn: { meaning: "Sự dồi dào sáng tạo bị gián đoạn bởi sự biến động đột ngột. Một tình huống màu mỡ bị bất ổn — nhưng tiềm năng sáng tạo không bị phá hủy, chỉ được định hướng lại.", advice: "Sự gián đoạn không giết chết tiềm năng sáng tạo; nó đã thay đổi hình thức của nó. Hãy tìm kiếm những gì vẫn còn sống và đang phát triển trong hậu quả." }
    },
    "The Empress-The Star": {
        en: { meaning: "Creative abundance guided by inspired vision and renewed hope. Fertility in service of what is genuinely beautiful and worth growing.", advice: "Let the vision guide the creation. You have both the abundant energy and the inspiring direction — give yourself to the work fully." },
        vn: { meaning: "Sự dồi dào sáng tạo được hướng dẫn bởi tầm nhìn đầy cảm hứng và hy vọng được đổi mới. Sự màu mỡ phục vụ những gì thực sự tươi đẹp và đáng phát triển.", advice: "Hãy để tầm nhìn hướng dẫn sự sáng tạo. Bạn có cả năng lượng dồi dào và hướng đi đầy cảm hứng — hãy hoàn toàn cống hiến bản thân cho công việc." }
    },
    "The Empress-The Moon": {
        en: { meaning: "Creative and emotional abundance mixed with intuition and deep feeling. A richly imaginative period where dreams and creative impulses run strong.", advice: "Trust the creative impulses arising from dreams and feeling. This is a period for intuitive creative work — let logic rest and let imagination lead." },
        vn: { meaning: "Sự dồi dào sáng tạo và cảm xúc pha trộn với trực giác và cảm xúc sâu sắc. Một giai đoạn giàu trí tưởng tượng nơi những giấc mơ và những xung sáng tạo chạy mạnh mẽ.", advice: "Hãy tin vào những xung sáng tạo nảy sinh từ giấc mơ và cảm xúc. Đây là giai đoạn cho công việc sáng tạo trực giác — hãy để logic nghỉ ngơi và để trí tưởng tượng dẫn dắt." }
    },
    "The Empress-The Sun": {
        en: { meaning: "Creative abundance in full, radiant bloom. Fertile energy meeting complete joy and confidence — one of the most powerfully positive combinations for creativity, love, and growth.", advice: "Create freely and joyfully. Everything you touch right now has the potential to flourish. This is a rare period of full creative permission." },
        vn: { meaning: "Sự dồi dào sáng tạo nở rộ đầy đủ, rực rỡ. Năng lượng màu mỡ gặp gỡ niềm vui và sự tự tin hoàn toàn — một trong những sự kết hợp tích cực mạnh mẽ nhất cho sự sáng tạo, tình yêu và sự phát triển.", advice: "Hãy tạo ra một cách tự do và vui vẻ. Mọi thứ bạn chạm vào ngay bây giờ đều có tiềm năng phát triển. Đây là một giai đoạn hiếm có của sự cho phép sáng tạo đầy đủ." }
    },
    "The Empress-Judgement": {
        en: { meaning: "Creative abundance called toward higher purpose. A fertile period awakening to its true meaning — generativity in service of a calling rather than just pleasure.", advice: "What you create now is not just for enjoyment — it is in answer to something larger. Let the awakening direct your creative energy toward its truest expression." },
        vn: { meaning: "Sự dồi dào sáng tạo được kêu gọi hướng đến mục đích cao hơn. Một giai đoạn màu mỡ thức dậy ý nghĩa thực sự của nó — sự sáng tạo phục vụ một tiếng gọi hơn là chỉ niềm vui.", advice: "Những gì bạn tạo ra bây giờ không chỉ để thưởng thức — đó là để đáp lại điều gì đó lớn hơn. Hãy để sự thức tỉnh định hướng năng lượng sáng tạo của bạn hướng đến biểu đạt chân thực nhất của nó." }
    },
    "The Empress-The World": {
        en: { meaning: "Creative abundance achieving full, wholehearted completion. A period of fertile creativity arriving at its most complete and satisfying expression.", advice: "Acknowledge the fullness of what has been created and nurtured. This completion is genuine. Celebrate the wholeness you have brought into being." },
        vn: { meaning: "Sự dồi dào sáng tạo đạt được sự hoàn thành đầy đủ, chân thành. Một giai đoạn sáng tạo màu mỡ đến với biểu đạt hoàn chỉnh và thỏa mãn nhất.", advice: "Hãy thừa nhận sự đầy đủ của những gì đã được tạo ra và nuôi dưỡng. Sự hoàn thành này là thực sự. Hãy ăn mừng sự toàn vẹn bạn đã mang vào tồn tại." }
    },

    // ── BATCH D cont: EMPEROR completions ────────────────────────
    "The Emperor-The Lovers": {
        en: { meaning: "Authority and structure meeting a significant choice in love. A relationship where power, responsibility, and commitment are as significant as feeling.", advice: "Bring both your heart and your responsibility to this relationship or choice. Commitment that is consciously and clearly structured is stronger than commitment by feeling alone." },
        vn: { meaning: "Thẩm quyền và cấu trúc gặp gỡ một lựa chọn quan trọng trong tình yêu. Một mối quan hệ nơi quyền lực, trách nhiệm và cam kết quan trọng không kém cảm xúc.", advice: "Hãy mang cả trái tim và trách nhiệm của bạn đến mối quan hệ hoặc lựa chọn này. Cam kết được cấu trúc một cách có ý thức và rõ ràng mạnh hơn cam kết chỉ bằng cảm xúc." }
    },
    "The Emperor-The Chariot": {
        en: { meaning: "Double authority and determined will. Structured power meeting driven determination — a combination of extraordinary capacity for ordered, forceful achievement.", advice: "Use this power responsibly and ethically. The capacity here is immense; ensure it is directed toward genuinely constructive ends." },
        vn: { meaning: "Quyền uy kép và ý chí quyết tâm. Quyền lực có cấu trúc gặp gỡ quyết tâm mạnh mẽ — một sự kết hợp năng lực phi thường cho thành tựu có trật tự, mạnh mẽ.", advice: "Hãy sử dụng quyền lực này một cách có trách nhiệm và đạo đức. Năng lực ở đây là vô cùng lớn; hãy đảm bảo nó được định hướng đến những mục đích thực sự xây dựng." }
    },
    "The Emperor-Strength": {
        en: { meaning: "Outer authority meeting inner emotional mastery. Structured power tempered by compassionate strength — leadership that commands and also listens.", advice: "The authority you carry will be most effective when it is paired with genuine compassion. Power that respects the humanity of those it leads earns lasting loyalty." },
        vn: { meaning: "Thẩm quyền bên ngoài gặp gỡ sự làm chủ cảm xúc bên trong. Quyền lực có cấu trúc được điều chỉnh bởi sức mạnh đầy lòng trắc ẩn — sự lãnh đạo vừa ra lệnh vừa lắng nghe.", advice: "Thẩm quyền bạn mang sẽ hiệu quả nhất khi nó được kết hợp với lòng trắc ẩn thực sự. Quyền lực tôn trọng tính người của những người nó lãnh đạo sẽ kiếm được lòng trung thành bền lâu." }
    },
    "The Emperor-The Hermit": {
        en: { meaning: "Structured authority seeking wisdom in solitude. A powerful figure or system pausing for deep reflection — the leader who knows when to withdraw and think.", advice: "The most effective authority rests on genuine wisdom. Take the time to go within before acting. A period of reflection strengthens rather than weakens real power." },
        vn: { meaning: "Thẩm quyền có cấu trúc tìm kiếm sự khôn ngoan trong cô đơn. Một nhân vật hoặc hệ thống quyền lực tạm dừng để suy ngẫm sâu sắc — người lãnh đạo biết khi nào cần rút lui và suy nghĩ.", advice: "Thẩm quyền hiệu quả nhất dựa trên sự khôn ngoan thực sự. Hãy dành thời gian để đi vào bên trong trước khi hành động. Một giai đoạn suy ngẫm củng cố hơn là làm yếu quyền lực thực sự." }
    },
    "The Emperor-Wheel of Fortune": {
        en: { meaning: "Established authority meeting the inevitable turning of fate. Even the most solid structure must adapt to destiny's wheel — order meeting change.", advice: "Prepare your structures to flex with change. The most durable authority knows how to adapt without collapsing. Rigidity breaks; resilient structure bends and holds." },
        vn: { meaning: "Thẩm quyền đã được thiết lập gặp gỡ sự xoay vần tất yếu của số phận. Ngay cả cấu trúc vững chắc nhất cũng phải thích nghi với bánh xe định mệnh — trật tự gặp gỡ sự thay đổi.", advice: "Hãy chuẩn bị các cấu trúc của bạn để linh hoạt với sự thay đổi. Thẩm quyền bền lâu nhất biết cách thích nghi mà không sụp đổ. Sự cứng nhắc vỡ tan; cấu trúc kiên cường uốn và giữ vững." }
    },
    "The Emperor-Justice": {
        en: { meaning: "Authority in full service of fairness and law. Structured power aligned with ethical principle — governance at its most legitimate and trustworthy.", advice: "Wield authority in complete alignment with what is right and fair. Power exercised justly builds genuine trust; power exercised unjustly destroys it." },
        vn: { meaning: "Thẩm quyền hoàn toàn phục vụ sự công bằng và pháp luật. Quyền lực có cấu trúc phù hợp với nguyên tắc đạo đức — quản trị ở mức hợp pháp và đáng tin cậy nhất.", advice: "Hãy thực hiện thẩm quyền hoàn toàn phù hợp với những gì đúng và công bằng. Quyền lực được thực hiện công bằng xây dựng sự tin tưởng thực sự; quyền lực được thực hiện bất công phá hủy nó." }
    },
    "The Emperor-The Hanged Man": {
        en: { meaning: "Structured authority facing a forced pause and perspective reversal. The powerful leader who must stop, surrender, and see things from an entirely different angle.", advice: "This pause is not weakness — it is the most powerful thing the Emperor can do right now. The view from suspension reveals what the view from the throne cannot." },
        vn: { meaning: "Thẩm quyền có cấu trúc đối mặt với sự tạm dừng bắt buộc và sự đảo ngược góc nhìn. Người lãnh đạo quyền lực phải dừng lại, buông bỏ và nhìn mọi thứ từ một góc độ hoàn toàn khác.", advice: "Sự tạm dừng này không phải là điểm yếu — đó là điều mạnh mẽ nhất Hoàng Đế có thể làm ngay bây giờ. Góc nhìn từ sự đình chỉ tiết lộ những gì góc nhìn từ ngai vàng không thể." }
    },
    "The Emperor-Death": {
        en: { meaning: "A major structure or authority undergoing profound transformation. The end of a period of order, making way for something entirely new to take form.", advice: "Release the old structure completely. What replaces it may look different, but it will serve better. Clinging to a structure past its time wastes the energy needed for what is next." },
        vn: { meaning: "Một cấu trúc hoặc thẩm quyền lớn trải qua sự chuyển hóa sâu sắc. Kết thúc của một giai đoạn trật tự, nhường chỗ cho điều gì đó hoàn toàn mới để hình thành.", advice: "Hãy hoàn toàn buông bỏ cấu trúc cũ. Những gì thay thế nó có thể trông khác đi, nhưng nó sẽ phục vụ tốt hơn. Bám víu vào một cấu trúc quá thời hạn lãng phí năng lượng cần thiết cho những gì tiếp theo." }
    },
    "The Emperor-Temperance": {
        en: { meaning: "Structured authority balanced by patience and measured application. Power exercised with restraint and calibration — strength held in perfect proportion.", advice: "Use exactly as much authority as is needed and no more. The most effective leadership is precise, not excessive. Measured power is lasting power." },
        vn: { meaning: "Thẩm quyền có cấu trúc được cân bằng bởi sự kiên nhẫn và ứng dụng đo lường. Quyền lực được thực hiện với sự kiềm chế và hiệu chỉnh — sức mạnh được giữ trong tỷ lệ hoàn hảo.", advice: "Hãy sử dụng đúng mức thẩm quyền cần thiết và không hơn. Sự lãnh đạo hiệu quả nhất là chính xác, không phải thái quá. Quyền lực được đo lường là quyền lực bền lâu." }
    },
    "The Emperor-The Devil": {
        en: { meaning: "Authority becoming tyranny or structured power used to control and oppress. The Emperor's shadow — order that binds rather than protects.", advice: "Examine honestly whether the authority being exercised serves those under it or only serves itself. Power that controls through fear is not legitimate authority." },
        vn: { meaning: "Thẩm quyền trở thành sự chuyên chế hoặc quyền lực có cấu trúc được dùng để kiểm soát và áp bức. Bóng tối của Hoàng Đế — trật tự ràng buộc hơn là bảo vệ.", advice: "Hãy trung thực kiểm tra liệu thẩm quyền đang được thực hiện có phục vụ những người dưới nó hay chỉ phục vụ chính nó. Quyền lực kiểm soát qua nỗi sợ không phải là thẩm quyền hợp pháp." }
    },
    "The Emperor-The Tower": {
        en: { meaning: "Established authority suddenly disrupted or a powerful structure collapsing. A major system or leadership arrangement facing sudden, unavoidable upheaval.", advice: "When the structure falls, focus on what is essential and what can be rebuilt on better foundations. Collapse is the beginning of genuine renewal." },
        vn: { meaning: "Thẩm quyền đã được thiết lập bị gián đoạn đột ngột hoặc một cấu trúc quyền lực sụp đổ. Một hệ thống hoặc sắp xếp lãnh đạo lớn đối mặt với sự biến động đột ngột, không thể tránh khỏi.", advice: "Khi cấu trúc sụp đổ, hãy tập trung vào những gì cần thiết và những gì có thể được xây dựng lại trên nền tảng tốt hơn. Sự sụp đổ là sự khởi đầu của sự đổi mới thực sự." }
    },
    "The Emperor-The Star": {
        en: { meaning: "Structured authority guided by an inspiring vision and genuine hope. Power in service of something worth building — leadership with a clear and positive direction.", advice: "Let the vision guide how you use your authority. Power directed toward an inspiring goal creates willing followers; power directed toward mere control does not." },
        vn: { meaning: "Thẩm quyền có cấu trúc được hướng dẫn bởi tầm nhìn đầy cảm hứng và hy vọng thực sự. Quyền lực phục vụ điều gì đó xứng đáng xây dựng — sự lãnh đạo với hướng đi rõ ràng và tích cực.", advice: "Hãy để tầm nhìn hướng dẫn cách bạn sử dụng thẩm quyền của mình. Quyền lực được định hướng đến một mục tiêu đầy cảm hứng tạo ra những người theo dõi tự nguyện; quyền lực được định hướng đến sự kiểm soát đơn thuần thì không." }
    },
    "The Emperor-The Moon": {
        en: { meaning: "Structured authority encountering confusion, illusion, or the unconscious. A rational system destabilised by irrational forces — or a leader who cannot see clearly.", advice: "Acknowledge what cannot be controlled or fully known. Trying to impose rigid order on inherently fluid situations creates more instability, not less." },
        vn: { meaning: "Thẩm quyền có cấu trúc gặp phải bối rối, ảo tưởng hoặc tiềm thức. Một hệ thống lý trí bị bất ổn bởi các lực lượng phi lý trí — hoặc một người lãnh đạo không thể nhìn thấy rõ ràng.", advice: "Hãy thừa nhận những gì không thể kiểm soát hoặc biết đầy đủ. Cố gắng áp đặt trật tự cứng nhắc lên các tình huống vốn linh hoạt tạo ra sự bất ổn hơn, không phải ít hơn." }
    },
    "The Emperor-The Sun": {
        en: { meaning: "Authority and structure meeting radiant success and clarity. Power at its most confident, legitimate, and fully effective — a combination of real achievement.", advice: "Lead from this position of genuine confidence and clarity. Your authority is both well-founded and working. Act decisively." },
        vn: { meaning: "Thẩm quyền và cấu trúc gặp gỡ thành công rực rỡ và sự rõ ràng. Quyền lực ở mức tự tin, hợp pháp và hiệu quả đầy đủ nhất — một sự kết hợp của thành tựu thực sự.", advice: "Hãy lãnh đạo từ vị trí tự tin và rõ ràng thực sự này. Thẩm quyền của bạn vừa có nền tảng tốt vừa đang hoạt động. Hãy hành động quyết đoán." }
    },
    "The Emperor-Judgement": {
        en: { meaning: "Established authority awakening to a higher calling or facing a moment of profound reckoning. Power being called to account and to evolve.", advice: "Answer the call to evolve your leadership. The structures you have built must now serve the larger awakening — or be released to make way for what does." },
        vn: { meaning: "Thẩm quyền đã được thiết lập thức dậy hướng đến một tiếng gọi cao hơn hoặc đối mặt với một khoảnh khắc reckoning sâu sắc. Quyền lực được kêu gọi để giải trình và để tiến hóa.", advice: "Hãy đáp lại tiếng gọi để tiến hóa sự lãnh đạo của bạn. Những cấu trúc bạn đã xây dựng giờ phải phục vụ sự thức tỉnh lớn hơn — hoặc được buông bỏ để nhường chỗ cho những gì làm được điều đó." }
    },
    "The Emperor-The World": {
        en: { meaning: "Structured authority achieving complete, comprehensive success. A system or leadership reaching its fullest, most accomplished expression.", advice: "Acknowledge the genuine achievement this represents. What has been built is complete and real. Honour what has been accomplished before moving to what is next." },
        vn: { meaning: "Thẩm quyền có cấu trúc đạt được thành công hoàn chỉnh, toàn diện. Một hệ thống hoặc sự lãnh đạo đến biểu đạt đầy đủ nhất, hoàn thành nhất.", advice: "Hãy thừa nhận thành tựu thực sự mà điều này đại diện. Những gì đã được xây dựng là hoàn chỉnh và thực. Tôn trọng những gì đã đạt được trước khi chuyển sang những gì tiếp theo." }
    },

    // ── BATCH E: HIEROPHANT completions ──────────────────────────
    "The Hierophant-The Chariot": {
        en: { meaning: "Traditional authority aligned with determined, forward-moving drive. Established wisdom propelling action — conviction in motion.", advice: "Let your values and principles fuel your drive. The most effective action is the one aligned with what you genuinely believe." },
        vn: { meaning: "Thẩm quyền truyền thống phù hợp với quyết tâm, động lực tiến về phía trước. Sự khôn ngoan đã được thiết lập thúc đẩy hành động — niềm tin trong chuyển động.", advice: "Hãy để giá trị và nguyên tắc của bạn thúc đẩy động lực. Hành động hiệu quả nhất là hành động phù hợp với những gì bạn thực sự tin tưởng." }
    },
    "The Hierophant-Strength": {
        en: { meaning: "Traditional wisdom meeting inner emotional mastery. Institutional guidance paired with gentle inner courage — the authority of experience alongside the strength of compassion.", advice: "Draw on the wisdom of tradition while also listening to your own inner strength. The two are not in conflict; each deepens the other." },
        vn: { meaning: "Sự khôn ngoan truyền thống gặp gỡ sự làm chủ cảm xúc bên trong. Hướng dẫn thể chế kết hợp với lòng dũng cảm nội tâm nhẹ nhàng — thẩm quyền của kinh nghiệm cùng với sức mạnh của lòng trắc ẩn.", advice: "Hãy rút ra từ sự khôn ngoan của truyền thống trong khi cũng lắng nghe sức mạnh nội tâm của bạn. Hai điều không mâu thuẫn; mỗi điều làm sâu sắc thêm điều kia." }
    },
    "The Hierophant-The Hermit": {
        en: { meaning: "Institutional spiritual teaching meeting private inner wisdom. The outer tradition and the inner path — exploring whether the two are aligned or in tension.", advice: "Compare what the tradition teaches with what your own inner search has revealed. The deepest spiritual knowledge lives at the intersection of both." },
        vn: { meaning: "Giáo huấn tâm linh thể chế gặp gỡ sự khôn ngoan nội tâm riêng tư. Truyền thống bên ngoài và con đường bên trong — khám phá liệu hai điều có phù hợp hay đang căng thẳng.", advice: "Hãy so sánh những gì truyền thống dạy với những gì tìm kiếm nội tâm của bạn đã tiết lộ. Kiến thức tâm linh sâu sắc nhất sống ở giao điểm của cả hai." }
    },
    "The Hierophant-Wheel of Fortune": {
        en: { meaning: "Traditional structures meeting the inevitable turning of fate. Even the most established institutions must adapt as destiny's wheel turns.", advice: "Traditions that cannot flex with change eventually break. Seek what is timeless in the teaching and release what was merely of its time." },
        vn: { meaning: "Các cấu trúc truyền thống gặp gỡ sự xoay vần tất yếu của số phận. Ngay cả các tổ chức được thiết lập nhất cũng phải thích nghi khi bánh xe định mệnh quay.", advice: "Những truyền thống không thể linh hoạt với sự thay đổi cuối cùng sẽ vỡ. Hãy tìm kiếm những gì vượt thời gian trong giáo huấn và buông bỏ những gì chỉ là của thời đại nó." }
    },
    "The Hierophant-Justice": {
        en: { meaning: "Institutional authority aligned with law, ethics, and fair principle. The full weight of tradition behind a just decision — or a tradition itself being held accountable.", advice: "Ensure the tradition or institution in question serves genuine justice. Structures deserve respect when they are fair; they deserve reform when they are not." },
        vn: { meaning: "Thẩm quyền thể chế phù hợp với luật pháp, đạo đức và nguyên tắc công bằng. Toàn bộ sức nặng của truyền thống đằng sau một quyết định công bằng — hoặc một truyền thống tự nó đang bị giải trình.", advice: "Hãy đảm bảo truyền thống hoặc tổ chức được đề cập phục vụ sự công bằng thực sự. Các cấu trúc xứng đáng được tôn trọng khi chúng công bằng; chúng xứng đáng được cải cách khi chúng không." }
    },
    "The Hierophant-The Hanged Man": {
        en: { meaning: "Traditional teaching or institutional authority requiring a complete reversal of perspective. The doctrine suspended to allow a deeper truth to emerge.", advice: "Question the tradition from a place of genuine suspension, not resentment. Sometimes the deepest wisdom within a teaching is only accessible from a radically different angle." },
        vn: { meaning: "Giáo huấn truyền thống hoặc thẩm quyền thể chế đòi hỏi sự đảo ngược hoàn toàn về góc nhìn. Học thuyết bị đình chỉ để cho phép một sự thật sâu sắc hơn nổi lên.", advice: "Hãy đặt câu hỏi về truyền thống từ một nơi đình chỉ thực sự, không phải sự oán giận. Đôi khi sự khôn ngoan sâu sắc nhất trong một giáo huấn chỉ có thể tiếp cận từ một góc độ hoàn toàn khác." }
    },
    "The Hierophant-Death": {
        en: { meaning: "A tradition, institution, or belief system undergoing profound transformation or ending. The death of an old spiritual or institutional form to make way for something more evolved.", advice: "Release the form while honouring the wisdom within it. What is truly valuable in the tradition survives transformation; what is merely habitual does not." },
        vn: { meaning: "Một truyền thống, tổ chức hoặc hệ thống niềm tin trải qua sự chuyển hóa sâu sắc hoặc kết thúc. Cái chết của một hình thức tâm linh hoặc thể chế cũ để nhường chỗ cho điều gì đó tiến hóa hơn.", advice: "Hãy buông bỏ hình thức trong khi tôn trọng sự khôn ngoan trong nó. Những gì thực sự có giá trị trong truyền thống tồn tại qua sự chuyển hóa; những gì chỉ là thói quen thì không." }
    },
    "The Hierophant-Temperance": {
        en: { meaning: "Traditional guidance aligned with patient, balanced healing. Institutional wisdom in service of gradual, sustainable spiritual development.", advice: "Let the tradition guide you gently and steadily. The deepest spiritual growth is rarely dramatic — it is quiet, patient, and cumulative." },
        vn: { meaning: "Hướng dẫn truyền thống phù hợp với sự chữa lành kiên nhẫn, cân bằng. Sự khôn ngoan thể chế phục vụ sự phát triển tâm linh dần dần, bền vững.", advice: "Hãy để truyền thống hướng dẫn bạn nhẹ nhàng và ổn định. Sự tăng trưởng tâm linh sâu sắc nhất hiếm khi kịch tính — nó yên lặng, kiên nhẫn và tích lũy." }
    },
    "The Hierophant-The Devil": {
        en: { meaning: "Religious or institutional authority used to create dependency, shame, or control. The shadow of organised tradition — where doctrine becomes a chain rather than a guide.", advice: "Examine honestly whether this tradition is liberating or binding you. Spiritual authority that shames and controls has lost its legitimate purpose." },
        vn: { meaning: "Thẩm quyền tôn giáo hoặc thể chế được dùng để tạo ra sự phụ thuộc, xấu hổ hoặc kiểm soát. Bóng tối của truyền thống có tổ chức — nơi học thuyết trở thành xiềng xích hơn là hướng dẫn.", advice: "Hãy trung thực kiểm tra liệu truyền thống này có đang giải phóng hay ràng buộc bạn. Thẩm quyền tâm linh gây xấu hổ và kiểm soát đã mất mục đích hợp pháp của nó." }
    },
    "The Hierophant-The Tower": {
        en: { meaning: "A religious or institutional structure collapsing suddenly. The sudden disruption of a long-established tradition or belief system.", advice: "What falls was not as solid as it appeared. The wisdom within the tradition survives the collapse of its external structure — find that wisdom and carry it forward." },
        vn: { meaning: "Một cấu trúc tôn giáo hoặc thể chế sụp đổ đột ngột. Sự gián đoạn đột ngột của một truyền thống hoặc hệ thống niềm tin đã được thiết lập lâu dài.", advice: "Những gì sụp đổ không vững chắc như vẻ bề ngoài. Sự khôn ngoan trong truyền thống tồn tại qua sự sụp đổ của cấu trúc bên ngoài — hãy tìm sự khôn ngoan đó và mang nó về phía trước." }
    },
    "The Hierophant-The Star": {
        en: { meaning: "Traditional wisdom aligned with inspired hope and spiritual renewal. An institution or teaching that genuinely points toward something beautiful and healing.", advice: "When tradition serves genuine hope and healing, it is at its best. Embrace the aspects of the teaching that genuinely elevate and restore." },
        vn: { meaning: "Sự khôn ngoan truyền thống phù hợp với hy vọng đầy cảm hứng và sự đổi mới tâm linh. Một tổ chức hoặc giáo huấn thực sự chỉ đến điều gì đó tươi đẹp và chữa lành.", advice: "Khi truyền thống phục vụ hy vọng và chữa lành thực sự, nó ở mức tốt nhất. Hãy đón nhận các khía cạnh của giáo huấn thực sự nâng cao và phục hồi." }
    },
    "The Hierophant-The Moon": {
        en: { meaning: "Official doctrine encountering intuition, mystery, and the unconscious. The tension between what the institution teaches and what the inner world reveals.", advice: "Hold both the tradition and your own inner knowing. They are not necessarily in conflict — often the deepest dimension of a teaching is accessed through the intuitive rather than the doctrinal." },
        vn: { meaning: "Học thuyết chính thức gặp phải trực giác, bí ẩn và tiềm thức. Sự căng thẳng giữa những gì tổ chức dạy và những gì thế giới nội tâm tiết lộ.", advice: "Hãy giữ cả truyền thống và sự hiểu biết nội tâm của riêng bạn. Chúng không nhất thiết phải mâu thuẫn — thường thì chiều sâu nhất của một giáo huấn được tiếp cận qua trực giác hơn là học thuyết." }
    },
    "The Hierophant-The Sun": {
        en: { meaning: "Traditional wisdom expressed with full, radiant clarity and joy. A teaching or institution genuinely illuminating and serving its community.", advice: "Celebrate the tradition that truly serves. When spiritual or institutional wisdom produces genuine joy and clarity, it is fulfilling its highest purpose." },
        vn: { meaning: "Sự khôn ngoan truyền thống được biểu đạt với sự rõ ràng và niềm vui rực rỡ, đầy đủ. Một giáo huấn hoặc tổ chức thực sự chiếu sáng và phục vụ cộng đồng của nó.", advice: "Hãy ăn mừng truyền thống thực sự phục vụ. Khi sự khôn ngoan tâm linh hoặc thể chế tạo ra niềm vui và sự rõ ràng thực sự, nó đang thực hiện mục đích cao nhất của mình." }
    },
    "The Hierophant-Judgement": {
        en: { meaning: "A spiritual tradition or institution awakening to a higher calling. The established teaching being called to evolve into a more complete expression of its own deepest wisdom.", advice: "Answer the call to evolve your spiritual understanding. The awakening is an invitation to go deeper into what the tradition actually points toward." },
        vn: { meaning: "Một truyền thống tâm linh hoặc tổ chức thức dậy hướng đến một tiếng gọi cao hơn. Giáo huấn đã được thiết lập được kêu gọi để tiến hóa thành biểu đạt hoàn chỉnh hơn của sự khôn ngoan sâu sắc nhất của nó.", advice: "Hãy đáp lại tiếng gọi để tiến hóa sự hiểu biết tâm linh của bạn. Sự thức tỉnh là lời mời để đi sâu hơn vào những gì truyền thống thực sự chỉ đến." }
    },
    "The Hierophant-The World": {
        en: { meaning: "Traditional wisdom achieving complete, wholehearted fulfillment. An institution or teaching reaching its most accomplished and comprehensive expression.", advice: "Acknowledge what has been built and transmitted through this tradition. Completion earned through genuine service to others is among the most meaningful achievements." },
        vn: { meaning: "Sự khôn ngoan truyền thống đạt được sự thỏa mãn hoàn chỉnh, chân thành. Một tổ chức hoặc giáo huấn đến biểu đạt hoàn thành và toàn diện nhất.", advice: "Hãy thừa nhận những gì đã được xây dựng và truyền đạt qua truyền thống này. Sự hoàn thành kiếm được qua sự phục vụ thực sự cho người khác là một trong những thành tựu có ý nghĩa nhất." }
    },

    // ── BATCH F: LOVERS completions ──────────────────────────────
    "The Lovers-Strength": {
        en: { meaning: "Love requiring inner strength — or a choice that demands courage and emotional mastery. A relationship where patience, compassion, and inner power are called upon.", advice: "This connection needs your quiet strength as much as your heart. Love with courage — the courage to stay present, to be honest, and to hold space for difficulty." },
        vn: { meaning: "Tình yêu đòi hỏi sức mạnh nội tâm — hoặc một lựa chọn đòi hỏi dũng cảm và sự làm chủ cảm xúc. Một mối quan hệ nơi sự kiên nhẫn, lòng trắc ẩn và sức mạnh nội tâm được kêu gọi.", advice: "Kết nối này cần sức mạnh lặng lẽ của bạn cũng như trái tim của bạn. Hãy yêu với dũng cảm — dũng cảm để ở lại hiện diện, trung thực và giữ không gian cho khó khăn." }
    },
    "The Lovers-The Hermit": {
        en: { meaning: "A significant relationship or choice calling for solitary reflection. Time apart to understand what the heart truly wants — or a choice made in the clarity of solitude.", advice: "Take the time to be alone with your feelings about this before deciding or acting. The answer to this choice lives in your depths, not in others' opinions." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn quan trọng kêu gọi suy ngẫm cô độc. Thời gian một mình để hiểu trái tim thực sự muốn gì — hoặc một lựa chọn được thực hiện trong sự rõ ràng của sự cô đơn.", advice: "Hãy dành thời gian một mình với cảm xúc của bạn về điều này trước khi quyết định hoặc hành động. Câu trả lời cho lựa chọn này sống trong chiều sâu của bạn, không phải trong ý kiến của người khác." }
    },
    "The Lovers-Wheel of Fortune": {
        en: { meaning: "A relationship or choice aligned with destiny's turning. A connection or decision that feels fated — arriving at exactly the right moment in the turning of things.", advice: "Trust the timing of this encounter or choice. The wheel has brought this to you deliberately. Honour that by engaging with full presence." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn phù hợp với sự xoay vần của số phận. Một kết nối hoặc quyết định cảm thấy như định mệnh — đến đúng thời điểm trong sự xoay vần của mọi thứ.", advice: "Hãy tin vào thời điểm của cuộc gặp gỡ hoặc lựa chọn này. Bánh xe đã mang điều này đến cho bạn một cách có chủ đích. Hãy tôn trọng điều đó bằng cách tham gia với sự hiện diện đầy đủ." }
    },
    "The Lovers-Justice": {
        en: { meaning: "A relationship or choice requiring fairness, honesty, and ethical accountability. Love grounded in truth — or a decision that must be made with integrity.", advice: "Be completely honest in this relationship and in this choice. Love that cannot survive the truth was built on something other than love." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn đòi hỏi sự công bằng, trung thực và trách nhiệm đạo đức. Tình yêu được đặt nền tảng trong sự thật — hoặc một quyết định phải được thực hiện với sự chính trực.", advice: "Hãy hoàn toàn trung thực trong mối quan hệ này và trong lựa chọn này. Tình yêu không thể tồn tại qua sự thật đã được xây dựng trên điều gì đó khác ngoài tình yêu." }
    },
    "The Lovers-The Hanged Man": {
        en: { meaning: "A relationship or choice suspended in a period of waiting and surrender. Love that requires patience — or a decision that cannot yet be made.", advice: "Don't force this relationship or choice to move before it is ready. The suspension has its own wisdom. What needs to emerge will emerge in its own time." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn bị đình chỉ trong giai đoạn chờ đợi và buông bỏ. Tình yêu đòi hỏi sự kiên nhẫn — hoặc một quyết định chưa thể được thực hiện.", advice: "Đừng ép mối quan hệ hoặc lựa chọn này di chuyển trước khi nó sẵn sàng. Sự đình chỉ có sự khôn ngoan riêng của nó. Những gì cần nổi lên sẽ nổi lên đúng thời điểm của nó." }
    },
    "The Lovers-Death": {
        en: { meaning: "A relationship or choice undergoing profound transformation. Something in the connection must end so that something more evolved can emerge.", advice: "Let what needs to transform do so completely. The relationship or choice that emerges from this transformation will be more real than what preceded it." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn trải qua sự chuyển hóa sâu sắc. Điều gì đó trong kết nối phải kết thúc để điều gì đó tiến hóa hơn có thể nổi lên.", advice: "Hãy để những gì cần chuyển hóa làm điều đó hoàn toàn. Mối quan hệ hoặc lựa chọn nổi lên từ sự chuyển hóa này sẽ thực hơn những gì đi trước nó." }
    },
    "The Lovers-Temperance": {
        en: { meaning: "Love and relationships guided by patience, balance, and careful calibration. A connection that heals — or a choice made with measured, thoughtful wisdom.", advice: "Bring patience and balance to this connection. The most lasting relationships are built steadily, not dramatically. Let things develop at their own pace." },
        vn: { meaning: "Tình yêu và các mối quan hệ được hướng dẫn bởi sự kiên nhẫn, cân bằng và hiệu chỉnh cẩn thận. Một kết nối chữa lành — hoặc một lựa chọn được thực hiện với sự khôn ngoan đo lường, chu đáo.", advice: "Hãy mang sự kiên nhẫn và cân bằng đến kết nối này. Những mối quan hệ bền lâu nhất được xây dựng ổn định, không phải kịch tính. Hãy để mọi thứ phát triển theo nhịp độ riêng của chúng." }
    },
    "The Lovers-The Tower": {
        en: { meaning: "A relationship or choice suddenly disrupted or tested by upheaval. An unexpected shock revealing which connections and decisions are truly solid.", advice: "What survives this disruption is what was genuinely real. Let the shock clarify rather than panic you — the truth about this relationship or choice is now visible." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn bị gián đoạn đột ngột hoặc được thử thách bởi biến động. Một cú sốc bất ngờ tiết lộ những kết nối và quyết định nào thực sự vững chắc.", advice: "Những gì tồn tại qua sự gián đoạn này là những gì thực sự thực. Hãy để cú sốc làm rõ chứ không gây hoảng loạn cho bạn — sự thật về mối quan hệ hoặc lựa chọn này giờ đã hiển thị." }
    },
    "The Lovers-The Star": {
        en: { meaning: "Love guided by genuine hope and inspiring vision. A relationship or choice that points toward something beautiful and worth reaching for.", advice: "Let the hope and the vision guide this choice. Love aligned with genuine aspiration has a particular quality of grace and rightness to it." },
        vn: { meaning: "Tình yêu được hướng dẫn bởi hy vọng thực sự và tầm nhìn đầy cảm hứng. Một mối quan hệ hoặc lựa chọn chỉ đến điều gì đó tươi đẹp và đáng vươn tới.", advice: "Hãy để hy vọng và tầm nhìn hướng dẫn lựa chọn này. Tình yêu phù hợp với khát vọng thực sự có một phẩm chất duyên dáng và đúng đắn đặc biệt." }
    },
    "The Lovers-The Moon": {
        en: { meaning: "Love mixed with illusion, mystery, and unconscious projection. A relationship where feelings are real but the full picture is not yet clear.", advice: "Be patient before making major declarations or decisions in this connection. The Moon is distorting the view — clarity will come, but not immediately." },
        vn: { meaning: "Tình yêu pha trộn với ảo tưởng, bí ẩn và phóng chiếu tiềm thức. Một mối quan hệ nơi cảm xúc là thực nhưng bức tranh đầy đủ chưa rõ ràng.", advice: "Hãy kiên nhẫn trước khi đưa ra những tuyên bố hoặc quyết định lớn trong kết nối này. Mặt Trăng đang làm biến dạng góc nhìn — sự rõ ràng sẽ đến, nhưng không phải ngay lập tức." }
    },
    "The Lovers-The Sun": {
        en: { meaning: "Love in its most joyful, radiant, and fully expressed form. A relationship or choice shining with clarity, happiness, and genuine mutual fulfillment.", advice: "This is what love is supposed to feel like. Receive and celebrate it fully — not every connection reaches this quality of clarity and joy." },
        vn: { meaning: "Tình yêu trong hình thức vui vẻ, rực rỡ và được biểu đạt đầy đủ nhất. Một mối quan hệ hoặc lựa chọn tỏa sáng với sự rõ ràng, hạnh phúc và sự thỏa mãn lẫn nhau thực sự.", advice: "Đây là những gì tình yêu được cho là cảm thấy. Hãy đón nhận và ăn mừng nó đầy đủ — không phải mọi kết nối đều đạt đến chất lượng rõ ràng và niềm vui này." }
    },
    "The Lovers-Judgement": {
        en: { meaning: "A relationship or choice answering a soul-level calling. A connection that is not just romantic but has genuine spiritual significance and purpose.", advice: "This relationship or choice is larger than it looks. Answer the deeper calling it represents. Say yes to what you are truly being asked to commit to." },
        vn: { meaning: "Một mối quan hệ hoặc lựa chọn đáp lại tiếng gọi ở tầng linh hồn. Một kết nối không chỉ là lãng mạn mà có ý nghĩa và mục đích tâm linh thực sự.", advice: "Mối quan hệ hoặc lựa chọn này lớn hơn vẻ bề ngoài. Hãy đáp lại tiếng gọi sâu hơn mà nó đại diện. Hãy nói có với những gì bạn thực sự đang được yêu cầu cam kết." }
    },
    "The Lovers-The World": {
        en: { meaning: "Love and relationship reaching a state of genuine wholeness and completion. A connection that has evolved into full, mature expression.", advice: "Honour the fullness of what this relationship or choice has become. Completion in love is rare and precious — acknowledge it with gratitude." },
        vn: { meaning: "Tình yêu và mối quan hệ đạt đến trạng thái toàn vẹn và hoàn thành thực sự. Một kết nối đã tiến hóa thành biểu đạt đầy đủ, trưởng thành.", advice: "Hãy tôn trọng sự đầy đủ của những gì mối quan hệ hoặc lựa chọn này đã trở thành. Sự hoàn thành trong tình yêu là hiếm và quý giá — hãy thừa nhận nó với lòng biết ơn." }
    },

    // ── BATCH G: CHARIOT completions ─────────────────────────────
    "The Chariot-The Hermit": {
        en: { meaning: "Driven determination pausing for inner reflection. The warrior who knows when to stop and listen within before moving forward again.", advice: "Before the next charge, take time to consult your own inner wisdom. The pause is not weakness — it is the intelligence that makes the next advance truly effective." },
        vn: { meaning: "Quyết tâm mạnh mẽ tạm dừng để suy ngẫm nội tâm. Chiến binh biết khi nào cần dừng lại và lắng nghe bên trong trước khi tiến về phía trước một lần nữa.", advice: "Trước lần xung phong tiếp theo, hãy dành thời gian để tham khảo sự khôn ngoan nội tâm của riêng bạn. Sự tạm dừng không phải là điểm yếu — đó là trí tuệ làm cho bước tiến tiếp theo thực sự hiệu quả." }
    },
    "The Chariot-Wheel of Fortune": {
        en: { meaning: "Determined drive aligned with a turning point of fate. The force of will meeting the force of destiny — momentum and cosmic timing combining.", advice: "Ride the momentum. The combination of your drive and this turning point is unusually powerful — move decisively while the alignment holds." },
        vn: { meaning: "Quyết tâm mạnh mẽ phù hợp với một bước ngoặt của số phận. Lực lượng của ý chí gặp gỡ lực lượng của định mệnh — động lực và thời điểm vũ trụ kết hợp.", advice: "Hãy cưỡi trên động lực. Sự kết hợp của quyết tâm và bước ngoặt này có sức mạnh bất thường — hãy di chuyển quyết đoán trong khi sự căn chỉnh còn giữ vững." }
    },
    "The Chariot-Justice": {
        en: { meaning: "Determined action aligned with ethical principle. Driving forward with both speed and integrity — movement that is both forceful and fair.", advice: "Keep your ethical commitments firm even as you push hard. The victory that matters most is the one achieved without compromising what is right." },
        vn: { meaning: "Hành động quyết tâm phù hợp với nguyên tắc đạo đức. Tiến về phía trước với cả tốc độ và chính trực — sự chuyển động vừa mạnh mẽ vừa công bằng.", advice: "Hãy giữ vững các cam kết đạo đức của bạn ngay cả khi bạn thúc đẩy mạnh. Chiến thắng quan trọng nhất là chiến thắng đạt được mà không ảnh hưởng đến những gì đúng đắn." }
    },
    "The Chariot-The Hanged Man": {
        en: { meaning: "Driven forward momentum suddenly forced to stop and surrender. The great paradox of power — sometimes the most powerful move is to pause completely.", advice: "The stopping is not defeat — it is preparation. Use this enforced suspension to gain the perspective that will make your next advance far more effective." },
        vn: { meaning: "Động lực tiến về phía trước mạnh mẽ đột ngột bị buộc phải dừng lại và buông bỏ. Nghịch lý lớn của quyền lực — đôi khi bước đi mạnh mẽ nhất là tạm dừng hoàn toàn.", advice: "Sự dừng lại không phải là thất bại — đó là sự chuẩn bị. Hãy sử dụng sự đình chỉ bắt buộc này để có được góc nhìn sẽ làm cho bước tiến tiếp theo của bạn hiệu quả hơn nhiều." }
    },
    "The Chariot-Death": {
        en: { meaning: "A drive or campaign reaching its absolute end and transformation. The determined force that has been powering something must now be completely redirected.", advice: "The battle you have been fighting is over. Let it end completely. The same determination you brought to the old direction can now power the new one." },
        vn: { meaning: "Một quyết tâm hoặc chiến dịch đến kết thúc và sự chuyển hóa tuyệt đối. Lực lượng quyết tâm đã thúc đẩy điều gì đó giờ phải được định hướng lại hoàn toàn.", advice: "Cuộc chiến bạn đã chiến đấu đã kết thúc. Hãy để nó kết thúc hoàn toàn. Sự quyết tâm bạn mang đến hướng cũ giờ có thể thúc đẩy hướng mới." }
    },
    "The Chariot-Temperance": {
        en: { meaning: "Powerful forward drive tempered by patience and calibration. Speed paired with precision — the drive that knows not just to push but exactly how much to push.", advice: "Moderate your pace without losing your direction. The Chariot provides the force; Temperance provides the wisdom about when to use it and when to hold back." },
        vn: { meaning: "Động lực tiến về phía trước mạnh mẽ được điều chỉnh bởi sự kiên nhẫn và hiệu chỉnh. Tốc độ kết hợp với độ chính xác — quyết tâm biết không chỉ cần thúc đẩy mà còn biết chính xác bao nhiêu.", advice: "Hãy điều chỉnh tốc độ của bạn mà không mất hướng. Cỗ Xe cung cấp lực lượng; Điều Độ cung cấp sự khôn ngoan về khi nào dùng nó và khi nào cần giữ lại." }
    },
    "The Chariot-The Devil": {
        en: { meaning: "Drive and ambition in service of obsession or compulsive pursuit. The will to win becoming the will to control at any cost.", advice: "Question what you are actually driving toward and why. Ambition in service of ego becomes a kind of slavery. Examine whether this goal is truly free or whether it is compulsive." },
        vn: { meaning: "Quyết tâm và tham vọng phục vụ sự ám ảnh hoặc theo đuổi bắt buộc. Ý chí chiến thắng trở thành ý chí kiểm soát bằng mọi giá.", advice: "Hãy đặt câu hỏi về những gì bạn thực sự đang lái hướng đến và tại sao. Tham vọng phục vụ cái tôi trở thành một loại nô lệ. Hãy xem xét liệu mục tiêu này có thực sự tự do hay liệu nó có bắt buộc không." }
    },
    "The Chariot-The Tower": {
        en: { meaning: "Determined drive meeting sudden, disruptive force. A collision between controlled will and uncontrollable upheaval — momentum disrupted.", advice: "When the disruption hits, stop resisting and adapt. The force of the Tower cannot be driven through — it must be navigated. Flexibility now serves better than force." },
        vn: { meaning: "Quyết tâm mạnh mẽ gặp phải lực lượng đột ngột, gây gián đoạn. Một va chạm giữa ý chí có kiểm soát và biến động không thể kiểm soát — động lực bị gián đoạn.", advice: "Khi sự gián đoạn xảy ra, hãy dừng kháng cự và thích nghi. Lực lượng của Tháp Đổ không thể bị lái qua — nó phải được điều hướng. Sự linh hoạt bây giờ phục vụ tốt hơn lực lượng." }
    },
    "The Chariot-The Moon": {
        en: { meaning: "Determined drive navigating uncertainty and unclear conditions. Moving forward when the full picture is not yet visible — willpower operating in fog.", advice: "Continue moving but trust your instincts over your plans. The Moon makes the path unclear; the Chariot's inner direction is more reliable than external landmarks right now." },
        vn: { meaning: "Quyết tâm mạnh mẽ điều hướng sự không chắc chắn và điều kiện không rõ ràng. Tiến về phía trước khi bức tranh đầy đủ chưa hiển thị — ý chí hoạt động trong sương mù.", advice: "Tiếp tục di chuyển nhưng tin vào bản năng hơn kế hoạch của bạn. Mặt Trăng làm cho con đường không rõ ràng; hướng nội tâm của Cỗ Xe đáng tin cậy hơn các điểm mốc bên ngoài ngay bây giờ." }
    },
    "The Chariot-Judgement": {
        en: { meaning: "Determined drive answering a profound awakening call. The will redirected in response to a soul-level summons — momentum in service of genuine purpose.", advice: "Let the awakening redirect your drive. The force you carry is immense; now it has a calling worthy of it. Move toward what you are being called to with full commitment." },
        vn: { meaning: "Quyết tâm mạnh mẽ đáp lại tiếng gọi thức tỉnh sâu sắc. Ý chí được định hướng lại để đáp lại tiếng gọi ở tầng linh hồn — động lực phục vụ mục đích thực sự.", advice: "Hãy để sự thức tỉnh định hướng lại quyết tâm của bạn. Lực lượng bạn mang là vô cùng lớn; giờ nó có một tiếng gọi xứng đáng với nó. Hãy tiến về phía những gì bạn được kêu gọi với sự cam kết đầy đủ." }
    },
    "The Chariot-The World": {
        en: { meaning: "Determined drive achieving complete and total victory. The full expression of focused will resulting in genuine, comprehensive success.", advice: "You have arrived at the destination you were driving toward. Acknowledge the achievement fully — the determination and discipline that brought you here deserve recognition." },
        vn: { meaning: "Quyết tâm mạnh mẽ đạt được chiến thắng hoàn chỉnh và toàn diện. Biểu đạt đầy đủ của ý chí tập trung dẫn đến thành công thực sự, toàn diện.", advice: "Bạn đã đến điểm đến bạn đang lái hướng đến. Hãy thừa nhận đầy đủ thành tựu — sự quyết tâm và kỷ luật đã đưa bạn đến đây xứng đáng được công nhận." }
    },

    // ── BATCH H: STRENGTH completions ────────────────────────────
    "Strength-The Hermit": {
        en: { meaning: "Inner strength deepened through solitary reflection. The quiet courage that develops through patient inner work — mastery earned in solitude.", advice: "The strength you need right now comes from within, not from others. Trust what your inner work has developed in you." },
        vn: { meaning: "Sức mạnh nội tâm được làm sâu sắc qua suy ngẫm cô độc. Lòng dũng cảm lặng lẽ phát triển qua công việc nội tâm kiên nhẫn — sự thành thạo kiếm được trong cô đơn.", advice: "Sức mạnh bạn cần ngay bây giờ đến từ bên trong, không phải từ người khác. Hãy tin vào những gì công việc nội tâm của bạn đã phát triển trong bạn." }
    },
    "Strength-Wheel of Fortune": {
        en: { meaning: "Inner strength aligned with a turning point of fate. Patient courage meeting a pivotal moment — the capacity to hold steady precisely when everything is changing.", advice: "This is the moment your inner strength has been preparing for. Hold steady without rigidity as the wheel turns — your groundedness is your greatest asset right now." },
        vn: { meaning: "Sức mạnh nội tâm phù hợp với một bước ngoặt của số phận. Lòng dũng cảm kiên nhẫn gặp gỡ một thời điểm then chốt — khả năng giữ vững chính xác khi mọi thứ đang thay đổi.", advice: "Đây là thời điểm sức mạnh nội tâm của bạn đã chuẩn bị sẵn sàng. Hãy giữ vững mà không cứng nhắc khi bánh xe quay — sự vững vàng của bạn là tài sản lớn nhất ngay bây giờ." }
    },
    "Strength-Justice": {
        en: { meaning: "Inner strength in service of fairness and ethical integrity. The courage to do what is right — particularly when it requires facing something difficult.", advice: "Act on what you know is right, even when it requires genuine courage. Ethical strength — the willingness to do the right thing at personal cost — is the most admirable kind." },
        vn: { meaning: "Sức mạnh nội tâm phục vụ sự công bằng và chính trực đạo đức. Dũng cảm làm những gì đúng — đặc biệt khi nó đòi hỏi đối mặt với điều gì đó khó khăn.", advice: "Hãy hành động theo những gì bạn biết là đúng, ngay cả khi nó đòi hỏi dũng cảm thực sự. Sức mạnh đạo đức — sẵn sàng làm điều đúng với chi phí cá nhân — là loại đáng ngưỡng mộ nhất." }
    },
    "Strength-The Hanged Man": {
        en: { meaning: "Inner strength in a period of enforced surrender. The courage to wait — and to do so with grace rather than resistance.", advice: "The strength required here is the strength to let go. Patience exercised consciously is not weakness; it is the most powerful kind of courage in this moment." },
        vn: { meaning: "Sức mạnh nội tâm trong giai đoạn buông bỏ bắt buộc. Dũng cảm để chờ đợi — và làm điều đó với duyên dáng hơn là kháng cự.", advice: "Sức mạnh cần thiết ở đây là sức mạnh để buông bỏ. Sự kiên nhẫn được thực hành một cách có ý thức không phải là điểm yếu; đó là loại dũng cảm mạnh mẽ nhất trong khoảnh khắc này." }
    },
    "Strength-Death": {
        en: { meaning: "Inner strength carrying through a profound transformation. The quiet courage to face an ending fully and walk through it without flinching.", advice: "You have the inner resources to face this transformation. Trust that the strength you have cultivated is exactly what this passage requires." },
        vn: { meaning: "Sức mạnh nội tâm vượt qua một sự chuyển hóa sâu sắc. Lòng dũng cảm lặng lẽ để đối mặt đầy đủ với một kết thúc và đi qua nó mà không run sợ.", advice: "Bạn có các nguồn lực nội tâm để đối mặt với sự chuyển hóa này. Hãy tin rằng sức mạnh bạn đã nuôi dưỡng là chính xác những gì hành trình này đòi hỏi." }
    },
    "Strength-Temperance": {
        en: { meaning: "Inner strength meeting patient, balanced healing. The courage to heal slowly — and the wisdom to know that genuine restoration cannot be rushed.", advice: "Trust the slow, patient healing that is underway. Your inner strength is being expressed in the willingness to let this process take the time it genuinely needs." },
        vn: { meaning: "Sức mạnh nội tâm gặp gỡ sự chữa lành kiên nhẫn, cân bằng. Dũng cảm để chữa lành từ từ — và sự khôn ngoan để biết rằng sự phục hồi thực sự không thể vội vàng.", advice: "Hãy tin vào sự chữa lành chậm, kiên nhẫn đang diễn ra. Sức mạnh nội tâm của bạn đang được biểu đạt trong sự sẵn sàng để quá trình này mất thời gian nó thực sự cần." }
    },
    "Strength-The Devil": {
        en: { meaning: "Inner strength confronting addiction, compulsion, or a powerful binding force. The courage required to face and ultimately free oneself from what has held you captive.", advice: "The strength to face what has bound you is already within you. Name the chain clearly — inner mastery begins with honest acknowledgment of what has had power over you." },
        vn: { meaning: "Sức mạnh nội tâm đối đầu với nghiện ngập, bắt buộc hoặc lực lượng ràng buộc mạnh mẽ. Dũng cảm cần thiết để đối mặt và cuối cùng giải phóng bản thân khỏi những gì đã giam cầm bạn.", advice: "Sức mạnh để đối mặt với những gì đã ràng buộc bạn đã ở trong bạn rồi. Hãy đặt tên xiềng xích một cách rõ ràng — sự làm chủ nội tâm bắt đầu bằng sự thừa nhận trung thực về những gì đã có quyền lực đối với bạn." }
    },
    "Strength-The Tower": {
        en: { meaning: "Inner strength surviving sudden disruption. The quiet courage that holds firm when external structures collapse around it.", advice: "Your inner strength is precisely what this disruption cannot destroy. Ground yourself in it. The tower falls; the inner self remains." },
        vn: { meaning: "Sức mạnh nội tâm tồn tại qua sự gián đoạn đột ngột. Lòng dũng cảm lặng lẽ giữ vững khi các cấu trúc bên ngoài sụp đổ xung quanh nó.", advice: "Sức mạnh nội tâm của bạn là chính xác những gì sự gián đoạn này không thể phá hủy. Hãy đứng vững trong nó. Tòa tháp sụp đổ; bản thân bên trong vẫn còn." }
    },
    "Strength-The Moon": {
        en: { meaning: "Inner strength navigating uncertainty, fear, and the unconscious. The quiet courage to face what is dark, unclear, or frightening within oneself.", advice: "Your inner strength is sufficient to face whatever the Moon is revealing. You don't need to understand everything — you only need to remain grounded in who you are." },
        vn: { meaning: "Sức mạnh nội tâm điều hướng sự không chắc chắn, nỗi sợ và tiềm thức. Lòng dũng cảm lặng lẽ để đối mặt với những gì tối tăm, không rõ ràng hoặc đáng sợ trong bản thân.", advice: "Sức mạnh nội tâm của bạn đủ để đối mặt với bất cứ điều gì Mặt Trăng đang tiết lộ. Bạn không cần phải hiểu mọi thứ — bạn chỉ cần vẫn đứng vững trong con người bạn là." }
    },
    "Strength-The Sun": {
        en: { meaning: "Inner strength radiating outward as full confidence and joy. Mastery expressing itself openly and brilliantly — courage and compassion at their most luminous.", advice: "This is your inner strength at full expression. Receive the joy and confidence this moment offers — it is the fruit of everything you have cultivated within yourself." },
        vn: { meaning: "Sức mạnh nội tâm tỏa ra bên ngoài như sự tự tin và niềm vui đầy đủ. Sự thành thạo biểu đạt bản thân một cách cởi mở và rực rỡ — lòng dũng cảm và lòng trắc ẩn ở mức rạng rỡ nhất.", advice: "Đây là sức mạnh nội tâm của bạn ở biểu đạt đầy đủ. Hãy đón nhận niềm vui và sự tự tin mà khoảnh khắc này cung cấp — đó là quả của mọi thứ bạn đã nuôi dưỡng trong chính mình." }
    },
    "Strength-Judgement": {
        en: { meaning: "Inner strength answering a profound awakening call. The quiet courage required to rise fully when a soul-level summons arrives.", advice: "Answer the call with the full strength you have developed. The awakening you are experiencing needs your complete inner resources — you have them." },
        vn: { meaning: "Sức mạnh nội tâm đáp lại tiếng gọi thức tỉnh sâu sắc. Lòng dũng cảm lặng lẽ cần thiết để trỗi dậy đầy đủ khi tiếng gọi ở tầng linh hồn đến.", advice: "Hãy đáp lại tiếng gọi với toàn bộ sức mạnh bạn đã phát triển. Sự thức tỉnh bạn đang trải qua cần các nguồn lực nội tâm đầy đủ của bạn — bạn có chúng." }
    },
    "Strength-The World": {
        en: { meaning: "Inner strength achieving complete, wholehearted fulfillment. The mastery of the inner life reaching its most complete and satisfying expression.", advice: "You have arrived at a genuine completion of inner work. Acknowledge the strength and compassion you have developed — it is real and it is yours." },
        vn: { meaning: "Sức mạnh nội tâm đạt được sự thỏa mãn hoàn chỉnh, chân thành. Sự thành thạo của cuộc sống nội tâm đến biểu đạt hoàn chỉnh và thỏa mãn nhất.", advice: "Bạn đã đến một sự hoàn thành thực sự của công việc nội tâm. Hãy thừa nhận sức mạnh và lòng trắc ẩn bạn đã phát triển — chúng là thực và là của bạn." }
    },

    // ── HERMIT completions ────────────────────────────────────────
    "The Hermit-Wheel of Fortune": {
        en: { meaning: "A period of inner retreat aligned with destiny's turning wheel. Solitude at a pivotal moment — the wisdom gained in withdrawal will be needed when the wheel brings change.", advice: "The insights you are developing in this quiet time are preparation, not avoidance. When the wheel turns, you will be ready." },
        vn: { meaning: "Giai đoạn rút lui nội tâm phù hợp với bánh xe định mệnh đang quay. Sự cô đơn vào một thời điểm then chốt — sự khôn ngoan đạt được trong sự rút lui sẽ cần thiết khi bánh xe mang lại sự thay đổi.", advice: "Những hiểu biết bạn đang phát triển trong thời gian yên tĩnh này là sự chuẩn bị, không phải sự né tránh. Khi bánh xe quay, bạn sẽ sẵn sàng." }
    },
    "The Hermit-Justice": {
        en: { meaning: "Wisdom achieved through solitary reflection guiding a fair, honest decision. The inner knowing that has been earned through patience now serves the cause of what is right.", advice: "The quiet wisdom you have developed is exactly what this situation of fairness requires. Trust your considered judgment over any external pressure." },
        vn: { meaning: "Sự khôn ngoan đạt được qua suy ngẫm cô độc hướng dẫn một quyết định công bằng, trung thực. Sự hiểu biết nội tâm đã được kiếm được qua sự kiên nhẫn giờ phục vụ cho những gì đúng đắn.", advice: "Sự khôn ngoan lặng lẽ bạn đã phát triển là chính xác những gì tình huống công bằng này đòi hỏi. Hãy tin vào phán đoán đã được cân nhắc của bạn hơn bất kỳ áp lực bên ngoài nào." }
    },
    "The Hermit-Death": {
        en: { meaning: "Deep inner reflection accompanying a profound transformation. The solitary witness to an ending — wisdom earned in silence guiding passage through change.", advice: "Allow the stillness to carry you through this transition. Your inner resources are sufficient. You do not need to understand it all at once." },
        vn: { meaning: "Suy ngẫm nội tâm sâu sắc đi kèm với sự chuyển hóa sâu sắc. Nhân chứng cô độc cho một kết thúc — sự khôn ngoan kiếm được trong im lặng hướng dẫn hành trình qua sự thay đổi.", advice: "Hãy để sự tĩnh lặng mang bạn qua sự chuyển tiếp này. Các nguồn lực nội tâm của bạn là đủ. Bạn không cần phải hiểu tất cả cùng một lúc." }
    },
    "The Hermit-Temperance": {
        en: { meaning: "Solitary wisdom and patient, gradual healing combined. The quiet inner work that slowly restores — a deeply peaceful combination of reflection and gentle restoration.", advice: "The healing is happening in the quiet. Trust the slow, patient process of inner restoration that solitude and temperance together make possible." },
        vn: { meaning: "Sự khôn ngoan cô độc và sự chữa lành kiên nhẫn, dần dần được kết hợp. Công việc nội tâm lặng lẽ từ từ phục hồi — một sự kết hợp sâu sắc bình yên của suy ngẫm và phục hồi nhẹ nhàng.", advice: "Sự chữa lành đang xảy ra trong sự yên tĩnh. Hãy tin vào quá trình phục hồi nội tâm chậm, kiên nhẫn mà sự cô đơn và điều độ cùng nhau làm cho có thể." }
    },
    "The Hermit-The Devil": {
        en: { meaning: "Solitary inner work confronting addiction, shadow, or binding patterns. The search within that reveals what has had power over you — inner work that leads toward genuine freedom.", advice: "The honest inner examination you are undertaking is the path to freedom from what has bound you. What is seen clearly in solitude loses much of its power." },
        vn: { meaning: "Công việc nội tâm cô độc đối mặt với nghiện ngập, bóng tối hoặc các mẫu ràng buộc. Sự tìm kiếm bên trong tiết lộ những gì đã có quyền lực đối với bạn — công việc nội tâm dẫn đến tự do thực sự.", advice: "Sự kiểm tra nội tâm trung thực bạn đang thực hiện là con đường đến tự do khỏi những gì đã ràng buộc bạn. Những gì được nhìn thấy rõ ràng trong cô đơn mất đi nhiều quyền lực của nó." }
    },
    "The Hermit-The Tower": {
        en: { meaning: "Inner wisdom surviving sudden external disruption. The quiet knowing that persists even when outer structures collapse.", advice: "Let the outer collapse happen. Your inner knowing — the wisdom developed through patient inner work — is precisely what the disruption cannot destroy." },
        vn: { meaning: "Sự khôn ngoan nội tâm tồn tại qua sự gián đoạn bên ngoài đột ngột. Sự hiểu biết lặng lẽ vẫn còn ngay cả khi các cấu trúc bên ngoài sụp đổ.", advice: "Hãy để sự sụp đổ bên ngoài xảy ra. Sự hiểu biết nội tâm của bạn — sự khôn ngoan được phát triển qua công việc nội tâm kiên nhẫn — là chính xác những gì sự gián đoạn không thể phá hủy." }
    },
    "The Hermit-The Moon": {
        en: { meaning: "Deep solitude meeting profound mystery and the unconscious. Inner retreat into the depths — a confrontation with what is unknown, feared, or hidden in the self.", advice: "Go gently into this depth. The inner retreat combined with the Moon's mysteries requires patient, non-judgmental exploration rather than forced conclusions." },
        vn: { meaning: "Sự cô đơn sâu sắc gặp gỡ bí ẩn sâu sắc và tiềm thức. Rút lui nội tâm vào chiều sâu — một cuộc đối đầu với những gì chưa biết, bị sợ hãi hoặc ẩn giấu trong bản thân.", advice: "Hãy nhẹ nhàng đi vào chiều sâu này. Sự rút lui nội tâm kết hợp với những bí ẩn của Mặt Trăng đòi hỏi sự khám phá kiên nhẫn, không phán xét hơn là những kết luận bị ép buộc." }
    },
    "The Hermit-The Sun": {
        en: { meaning: "Inner wisdom emerging into full, radiant clarity. The insight gained through patient solitude now shining with complete confidence and joy.", advice: "The wisdom you have developed in solitude is now ready to be expressed. Step forward with the quiet confidence of someone who has done the inner work." },
        vn: { meaning: "Sự khôn ngoan nội tâm nổi lên vào sự rõ ràng rực rỡ, đầy đủ. Sự thấu hiểu đạt được qua sự cô đơn kiên nhẫn giờ tỏa sáng với sự tự tin và niềm vui hoàn toàn.", advice: "Sự khôn ngoan bạn đã phát triển trong cô đơn giờ đã sẵn sàng để được biểu đạt. Hãy bước về phía trước với sự tự tin lặng lẽ của người đã thực hiện công việc nội tâm." }
    },
    "The Hermit-Judgement": {
        en: { meaning: "Solitary wisdom awakening to a profound calling. The inner work complete enough now to answer the summons that is arriving.", advice: "Your period of inner preparation has led to this moment. Answer the call. The wisdom you have cultivated in solitude is exactly what the awakening requires of you." },
        vn: { meaning: "Sự khôn ngoan cô độc thức dậy hướng đến một tiếng gọi sâu sắc. Công việc nội tâm đã hoàn thành đủ để bây giờ đáp lại tiếng gọi đang đến.", advice: "Giai đoạn chuẩn bị nội tâm của bạn đã dẫn đến khoảnh khắc này. Hãy đáp lại tiếng gọi. Sự khôn ngoan bạn đã nuôi dưỡng trong cô đơn là chính xác những gì sự thức tỉnh đòi hỏi ở bạn." }
    },
    "The Hermit-The World": {
        en: { meaning: "Solitary inner wisdom reaching complete and wholehearted fulfillment. The long inner journey arriving at genuine wholeness.", advice: "The path walked in solitude has led to real completion. Honour the journey — the inner work that brought you here is among the most significant things you have ever done." },
        vn: { meaning: "Sự khôn ngoan nội tâm cô độc đạt đến sự thỏa mãn hoàn chỉnh và chân thành. Hành trình nội tâm dài đến sự toàn vẹn thực sự.", advice: "Con đường đi trong cô đơn đã dẫn đến sự hoàn thành thực sự. Hãy tôn trọng hành trình — công việc nội tâm đã đưa bạn đến đây là một trong những điều quan trọng nhất bạn đã từng làm." }
    },

    // ── WHEEL OF FORTUNE completions ─────────────────────────────
    "Wheel of Fortune-The Hanged Man": {
        en: { meaning: "Fate's turning wheel met with a period of enforced suspension. The change is coming but first a necessary pause — held in place precisely so the shift can land fully.", advice: "The suspension is part of the turning. Trust that the waiting has purpose — when the wheel moves again, the position of the Hanged Man will have prepared you perfectly." },
        vn: { meaning: "Bánh xe định mệnh gặp gỡ một giai đoạn đình chỉ bắt buộc. Sự thay đổi đang đến nhưng trước tiên là sự tạm dừng cần thiết — được giữ tại chỗ chính xác để sự thay đổi có thể tiếp đất đầy đủ.", advice: "Sự đình chỉ là một phần của sự xoay vần. Hãy tin rằng việc chờ đợi có mục đích — khi bánh xe di chuyển trở lại, vị trí của Người Treo Ngược sẽ đã chuẩn bị bạn hoàn hảo." }
    },
    "Wheel of Fortune-Death": {
        en: { meaning: "Destiny's wheel turning alongside profound transformation. A fated ending — the timing of this change is cosmically determined and cannot be escaped or delayed.", advice: "Do not resist what is destined to end. The wheel and Death together confirm that this transformation is both fated and necessary. Release and move with it." },
        vn: { meaning: "Bánh xe định mệnh xoay cùng với sự chuyển hóa sâu sắc. Một kết thúc định mệnh — thời điểm của sự thay đổi này được xác định bởi vũ trụ và không thể thoát hoặc trì hoãn.", advice: "Đừng kháng cự những gì được định sẵn để kết thúc. Bánh xe và Cái Chết cùng nhau xác nhận rằng sự chuyển hóa này vừa là định mệnh vừa là cần thiết. Hãy buông bỏ và di chuyển theo nó." }
    },
    "Wheel of Fortune-Temperance": {
        en: { meaning: "Destiny's turning met with patient, balanced adjustment. A fated shift that unfolds gradually and sustainably rather than all at once.", advice: "The changes coming are significant but they will proceed at a pace that allows genuine integration. Trust the gradual unfolding." },
        vn: { meaning: "Sự xoay vần của định mệnh gặp gỡ sự điều chỉnh kiên nhẫn, cân bằng. Một sự thay đổi định mệnh diễn ra dần dần và bền vững hơn là tất cả cùng một lúc.", advice: "Những thay đổi sắp đến là đáng kể nhưng chúng sẽ tiến hành với tốc độ cho phép sự tích hợp thực sự. Hãy tin vào sự mở ra dần dần." }
    },
    "Wheel of Fortune-The Devil": {
        en: { meaning: "Fate intersecting with addiction, compulsion, or binding patterns. A turning point that either breaks a chain or tightens it depending on choice.", advice: "The wheel is offering a moment of genuine choice. The same turn that tightens a chain can also break it — which depends entirely on what you do with this moment." },
        vn: { meaning: "Số phận giao nhau với nghiện ngập, bắt buộc hoặc các mẫu ràng buộc. Một bước ngoặt có thể phá vỡ xiềng xích hoặc thắt chặt nó tùy thuộc vào lựa chọn.", advice: "Bánh xe đang cung cấp một khoảnh khắc lựa chọn thực sự. Cùng một vòng quay thắt chặt xiềng xích cũng có thể phá vỡ nó — điều đó hoàn toàn phụ thuộc vào những gì bạn làm với khoảnh khắc này." }
    },
    "Wheel of Fortune-The Tower": {
        en: { meaning: "Destiny's wheel bringing sudden, dramatic disruption. A doubly powerful force of change — the fated upheaval that cannot be avoided or softened.", advice: "When fate and sudden disruption arrive together, adaptation is the only productive response. Release resistance and find what can be built in the new landscape." },
        vn: { meaning: "Bánh xe định mệnh mang lại sự gián đoạn đột ngột, kịch tính. Một lực lượng thay đổi mạnh gấp đôi — sự biến động định mệnh không thể tránh hoặc làm dịu.", advice: "Khi số phận và sự gián đoạn đột ngột đến cùng nhau, sự thích nghi là phản ứng duy nhất có ích. Hãy buông bỏ sự kháng cự và tìm những gì có thể được xây dựng trong bối cảnh mới." }
    },
    "Wheel of Fortune-The Star": {
        en: { meaning: "Destiny's turning bringing genuine hope and renewal. A fated shift toward healing and inspired vision — the wheel moving in a clearly positive direction.", advice: "The change arriving is genuinely for the better. Trust the turn and follow the hope that accompanies it." },
        vn: { meaning: "Sự xoay vần của định mệnh mang lại hy vọng và đổi mới thực sự. Một sự thay đổi định mệnh hướng đến sự chữa lành và tầm nhìn đầy cảm hứng — bánh xe di chuyển theo hướng rõ ràng tích cực.", advice: "Sự thay đổi đang đến thực sự là tốt hơn. Hãy tin vào vòng quay và theo đuổi hy vọng đi kèm với nó." }
    },
    "Wheel of Fortune-The Moon": {
        en: { meaning: "Fate turning within a period of confusion and unclear conditions. A destined change that is hard to see clearly — the timing is right but the path is obscured.", advice: "Trust that the wheel is turning even when you cannot see the direction clearly. Navigate by feeling and intuition until the fog lifts." },
        vn: { meaning: "Số phận xoay vần trong một giai đoạn bối rối và điều kiện không rõ ràng. Một sự thay đổi định mệnh khó nhìn thấy rõ ràng — thời điểm đúng nhưng con đường bị che khuất.", advice: "Hãy tin rằng bánh xe đang quay ngay cả khi bạn không thể nhìn thấy hướng rõ ràng. Điều hướng bằng cảm giác và trực giác cho đến khi sương mù tan." }
    },
    "Wheel of Fortune-The Sun": {
        en: { meaning: "Destiny turning in a genuinely positive direction — a fated moment of joy, success, and full radiant clarity.", advice: "The wheel has landed in the most fortunate position. Receive this moment of fated good fortune with full presence and gratitude." },
        vn: { meaning: "Số phận xoay vần theo hướng thực sự tích cực — một khoảnh khắc định mệnh của niềm vui, thành công và sự rõ ràng rực rỡ đầy đủ.", advice: "Bánh xe đã dừng ở vị trí may mắn nhất. Hãy đón nhận khoảnh khắc may mắn định mệnh này với sự hiện diện và lòng biết ơn đầy đủ." }
    },
    "Wheel of Fortune-Judgement": {
        en: { meaning: "Fate's turning wheel aligned with a profound spiritual awakening. A destined moment of calling — the wheel brings exactly the right circumstances for a soul-level summons.", advice: "This is a cosmically timed awakening. Answer the call that arrives with the turning of the wheel — it has been prepared precisely for this moment." },
        vn: { meaning: "Bánh xe định mệnh phù hợp với sự thức tỉnh tâm linh sâu sắc. Một khoảnh khắc tiếng gọi định mệnh — bánh xe mang lại chính xác các hoàn cảnh phù hợp cho một tiếng gọi ở tầng linh hồn.", advice: "Đây là sự thức tỉnh được định thời gian bởi vũ trụ. Hãy đáp lại tiếng gọi đến cùng với sự xoay vần của bánh xe — nó đã được chuẩn bị chính xác cho khoảnh khắc này." }
    },

    // ── JUSTICE completions ───────────────────────────────────────
    "Justice-The Hanged Man": {
        en: { meaning: "A fair outcome requiring patience and suspension. Justice delayed — not denied — while the full picture becomes clear through waiting.", advice: "The just outcome is coming, but it requires the pause of the Hanged Man first. Wait with integrity rather than force the resolution prematurely." },
        vn: { meaning: "Kết quả công bằng đòi hỏi sự kiên nhẫn và đình chỉ. Công lý bị trì hoãn — không phải từ chối — trong khi bức tranh đầy đủ trở nên rõ ràng qua việc chờ đợi.", advice: "Kết quả công bằng đang đến, nhưng nó đòi hỏi sự tạm dừng của Người Treo Ngược trước tiên. Hãy chờ đợi với sự chính trực hơn là ép buộc sự giải quyết quá sớm." }
    },
    "Justice-Death": {
        en: { meaning: "A fair, just ending — a conclusion that is both ethically right and unavoidable. The karmic completion of a cycle through transformation.", advice: "Accept the ending as the just outcome it is. What is being completed has run its fair course." },
        vn: { meaning: "Một kết thúc công bằng, đúng đắn — một kết luận vừa đúng về mặt đạo đức vừa không thể tránh khỏi. Sự hoàn thành nghiệp quả của một chu kỳ qua sự chuyển hóa.", advice: "Hãy chấp nhận kết thúc như kết quả công bằng mà nó là. Những gì đang được hoàn thành đã trải qua quá trình công bằng của nó." }
    },
    "Justice-Temperance": {
        en: { meaning: "Fairness achieved through patient, balanced process. A just outcome that emerges gradually through careful, measured steps rather than dramatic intervention.", advice: "Trust the patient, balanced approach to reach a fair resolution. Measured justice is often more durable than swift justice." },
        vn: { meaning: "Sự công bằng đạt được qua quá trình kiên nhẫn, cân bằng. Kết quả công bằng nổi lên dần dần qua các bước cẩn thận, đo lường hơn là can thiệp kịch tính.", advice: "Hãy tin vào cách tiếp cận kiên nhẫn, cân bằng để đạt đến giải quyết công bằng. Công lý được đo lường thường bền lâu hơn công lý nhanh chóng." }
    },
    "Justice-The Devil": {
        en: { meaning: "Fairness confronting addiction, binding patterns, or abuses of power. Justice being served in a situation where someone has been unjustly controlled or exploited.", advice: "The situation of injustice is being addressed. Stand firmly in what is right. Justice in the face of binding power is particularly important to pursue." },
        vn: { meaning: "Sự công bằng đối mặt với nghiện ngập, các mẫu ràng buộc hoặc lạm dụng quyền lực. Công lý được phục vụ trong tình huống nơi ai đó đã bị kiểm soát hoặc khai thác bất công.", advice: "Tình huống bất công đang được giải quyết. Hãy đứng vững trong những gì đúng đắn. Công lý trước quyền lực ràng buộc đặc biệt quan trọng để theo đuổi." }
    },
    "Justice-The Tower": {
        en: { meaning: "A fair reckoning arriving suddenly and dramatically. The upheaval that is also a just consequence — what is being disrupted deserved disruption.", advice: "The disruption is a form of justice being served. Accept what is being exposed and corrected, even if the manner is uncomfortable." },
        vn: { meaning: "Sự giải trình công bằng đến đột ngột và kịch tính. Sự biến động cũng là hậu quả công bằng — những gì đang bị gián đoạn xứng đáng bị gián đoạn.", advice: "Sự gián đoạn là một hình thức công lý đang được phục vụ. Hãy chấp nhận những gì đang được phơi bày và sửa chữa, ngay cả khi cách thức không thoải mái." }
    },
    "Justice-The Star": {
        en: { meaning: "A fair outcome bringing genuine hope and healing. Justice served in a way that genuinely restores — fairness in service of renewal.", advice: "Trust that a fair resolution is available and that it points toward something better. Seek the just outcome with confidence that it serves genuine healing." },
        vn: { meaning: "Kết quả công bằng mang lại hy vọng và chữa lành thực sự. Công lý được phục vụ theo cách thực sự phục hồi — sự công bằng phục vụ sự đổi mới.", advice: "Hãy tin rằng một giải quyết công bằng có sẵn và nó chỉ đến điều gì đó tốt hơn. Hãy tìm kiếm kết quả công bằng với sự tự tin rằng nó phục vụ sự chữa lành thực sự." }
    },
    "Justice-The Moon": {
        en: { meaning: "Fairness obscured by confusion, illusion, or incomplete information. Trying to reach a just conclusion when the full truth is not yet visible.", advice: "Delay final judgment until clarity returns. Justice served without full information risks being injustice. Wait for the Moon to reveal what it is hiding." },
        vn: { meaning: "Sự công bằng bị che khuất bởi bối rối, ảo tưởng hoặc thông tin không đầy đủ. Cố gắng đạt đến kết luận công bằng khi sự thật đầy đủ chưa hiển thị.", advice: "Hãy trì hoãn phán quyết cuối cùng cho đến khi sự rõ ràng trở lại. Công lý được phục vụ thiếu thông tin đầy đủ có nguy cơ là bất công. Hãy chờ Mặt Trăng tiết lộ những gì nó đang che giấu." }
    },
    "Justice-The Sun": {
        en: { meaning: "A fair, just outcome shining with full clarity and positive resolution. Truth in the light — the just decision made with complete confidence.", advice: "Act on the clear, fair judgment that is available to you. The right decision is obvious and positive — make it without hesitation." },
        vn: { meaning: "Kết quả công bằng, đúng đắn tỏa sáng với sự rõ ràng đầy đủ và giải quyết tích cực. Sự thật trong ánh sáng — quyết định công bằng được thực hiện với sự tự tin hoàn toàn.", advice: "Hãy hành động theo phán đoán rõ ràng, công bằng có sẵn cho bạn. Quyết định đúng đắn là hiển nhiên và tích cực — hãy thực hiện nó mà không do dự." }
    },
    "Justice-Judgement": {
        en: { meaning: "Karmic justice meeting a profound awakening. A reckoning that is also a liberation — the fair accounting that clears the way for genuine renewal.", advice: "Answer the call to full, honest accounting. The awakening that arrives through justice is among the most powerful and liberating kinds." },
        vn: { meaning: "Công lý nghiệp quả gặp gỡ sự thức tỉnh sâu sắc. Sự giải trình cũng là sự giải phóng — sự thanh toán công bằng dọn đường cho sự đổi mới thực sự.", advice: "Hãy đáp lại tiếng gọi để có sự thanh toán đầy đủ, trung thực. Sự thức tỉnh đến qua công lý là một trong những loại mạnh mẽ và giải phóng nhất." }
    },
    "Justice-The World": {
        en: { meaning: "Complete, comprehensive fairness achieving wholehearted fulfillment. The full karmic cycle closed in justice — a completion that is genuinely earned and genuinely right.", advice: "Acknowledge the completion of this karmic cycle. What has been fairly resolved is truly complete. Honour the wholeness of the just outcome." },
        vn: { meaning: "Sự công bằng hoàn chỉnh, toàn diện đạt được sự thỏa mãn chân thành. Chu kỳ nghiệp quả đầy đủ được đóng lại trong công lý — một sự hoàn thành thực sự xứng đáng và thực sự đúng đắn.", advice: "Hãy thừa nhận sự hoàn thành của chu kỳ nghiệp quả này. Những gì đã được giải quyết công bằng là thực sự hoàn chỉnh. Tôn trọng sự toàn vẹn của kết quả công bằng." }
    },

    // ── HANGED MAN completions ────────────────────────────────────
    "The Hanged Man-Temperance": {
        en: { meaning: "Patient suspension aligned with gentle, balanced healing. A double invitation to slow down and let things develop at their own pace.", advice: "There is nowhere to rush to. The combination of surrender and temperance confirms that this is a time for deep patience and gradual unfolding." },
        vn: { meaning: "Sự đình chỉ kiên nhẫn phù hợp với sự chữa lành nhẹ nhàng, cân bằng. Lời mời kép để chậm lại và để mọi thứ phát triển theo nhịp độ riêng của chúng.", advice: "Không có nơi nào cần vội vàng đến. Sự kết hợp của buông bỏ và điều độ xác nhận rằng đây là thời gian cho sự kiên nhẫn sâu sắc và mở ra dần dần." }
    },
    "The Hanged Man-The Devil": {
        en: { meaning: "Surrender confronting what has held you captive. The enforced pause revealing the nature of the binding — suspension as the beginning of recognition.", advice: "Use the stillness to see clearly what has been controlling you. The Hanged Man's view reveals the chains for exactly what they are." },
        vn: { meaning: "Buông bỏ đối mặt với những gì đã giam cầm bạn. Sự tạm dừng bắt buộc tiết lộ bản chất của sự ràng buộc — sự đình chỉ như là sự bắt đầu của sự nhận thức.", advice: "Hãy dùng sự tĩnh lặng để nhìn thấy rõ ràng những gì đã kiểm soát bạn. Góc nhìn của Người Treo Ngược tiết lộ xiềng xích đúng với bản chất của chúng." }
    },
    "The Hanged Man-The Tower": {
        en: { meaning: "Enforced suspension followed by or alongside sudden upheaval. The pause before the disruption — or the disruption that finally forces the necessary surrender.", advice: "Whether suspension or disruption comes first, both are asking for the same thing: release. Let go completely and let the new emerge." },
        vn: { meaning: "Sự đình chỉ bắt buộc tiếp nối bởi hoặc cùng với sự biến động đột ngột. Sự tạm dừng trước sự gián đoạn — hoặc sự gián đoạn cuối cùng buộc phải buông bỏ cần thiết.", advice: "Dù sự đình chỉ hay sự gián đoạn đến trước, cả hai đều yêu cầu cùng một điều: buông bỏ. Hãy hoàn toàn buông bỏ và để điều mới nổi lên." }
    },
    "The Hanged Man-The Star": {
        en: { meaning: "Patient surrender aligned with genuine hope. Waiting with faith that something beautiful is coming — the hope that makes the suspension bearable.", advice: "The hope is real and it is on the other side of this waiting. Hold it gently while you are suspended — it will carry you through." },
        vn: { meaning: "Buông bỏ kiên nhẫn phù hợp với hy vọng thực sự. Chờ đợi với niềm tin rằng điều gì đó tươi đẹp đang đến — hy vọng làm cho sự đình chỉ có thể chịu đựng được.", advice: "Hy vọng là thực và nó ở phía bên kia của sự chờ đợi này. Hãy giữ nó nhẹ nhàng trong khi bạn đang bị đình chỉ — nó sẽ mang bạn qua." }
    },
    "The Hanged Man-The Moon": {
        en: { meaning: "Suspension deepened by mystery, confusion, and the unconscious. A period of enforced waiting in conditions of genuine uncertainty and unclear inner landscape.", advice: "Allow the confusion without trying to resolve it. The Moon and the Hanged Man together ask only for patient, open waiting — not for understanding." },
        vn: { meaning: "Sự đình chỉ được làm sâu sắc bởi bí ẩn, bối rối và tiềm thức. Một giai đoạn chờ đợi bắt buộc trong điều kiện không chắc chắn thực sự và cảnh quan nội tâm không rõ ràng.", advice: "Hãy cho phép sự bối rối mà không cố giải quyết nó. Mặt Trăng và Người Treo Ngược cùng nhau chỉ yêu cầu sự chờ đợi kiên nhẫn, cởi mở — không phải để hiểu." }
    },
    "The Hanged Man-The Sun": {
        en: { meaning: "Patient surrender leading to full, radiant clarity and joy. The perspective gained through suspension now emerging into complete light.", advice: "The waiting is nearly complete. The clarity and joy that emerge from genuine surrender are among the most real kinds. Trust what is surfacing." },
        vn: { meaning: "Buông bỏ kiên nhẫn dẫn đến sự rõ ràng và niềm vui rực rỡ, đầy đủ. Góc nhìn đạt được qua sự đình chỉ giờ nổi lên vào ánh sáng hoàn toàn.", advice: "Sự chờ đợi gần như hoàn thành. Sự rõ ràng và niềm vui nổi lên từ sự buông bỏ thực sự là một trong những loại thực nhất. Hãy tin vào những gì đang nổi lên." }
    },
    "The Hanged Man-Judgement": {
        en: { meaning: "The great reversal leading to a profound awakening. Surrender as the doorway to the soul-level summons — the calling that could only be heard from a position of complete openness.", advice: "The awakening arrives precisely because you have surrendered enough to hear it. Answer it from the clear, open place the suspension has brought you to." },
        vn: { meaning: "Sự đảo ngược lớn dẫn đến sự thức tỉnh sâu sắc. Buông bỏ như là cánh cửa đến tiếng gọi ở tầng linh hồn — tiếng gọi chỉ có thể nghe được từ một vị trí của sự cởi mở hoàn toàn.", advice: "Sự thức tỉnh đến chính xác vì bạn đã buông bỏ đủ để nghe thấy nó. Hãy đáp lại nó từ nơi rõ ràng, cởi mở mà sự đình chỉ đã đưa bạn đến." }
    },

    // ── DEATH completions ─────────────────────────────────────────
    "Death-Temperance": {
        en: { meaning: "Profound transformation proceeding gradually and sustainably. A major ending and rebirth that unfolds at a healing pace rather than all at once.", advice: "Trust the slow alchemy of this transformation. The changes are deep and real; they need time to integrate. Let them happen at their own pace." },
        vn: { meaning: "Sự chuyển hóa sâu sắc tiến hành dần dần và bền vững. Một kết thúc lớn và sự tái sinh mở ra với tốc độ chữa lành hơn là tất cả cùng một lúc.", advice: "Hãy tin vào sự luyện kim chậm chạp của sự chuyển hóa này. Những thay đổi là sâu sắc và thực; chúng cần thời gian để tích hợp. Hãy để chúng xảy ra theo nhịp độ riêng của chúng." }
    },
    "Death-The Devil": {
        en: { meaning: "Transformation breaking the chains of addiction or binding patterns. The ending that is also a liberation — what dies is what was holding you captive.", advice: "What is ending is also what has been controlling you. The transformation and the liberation are the same event. Let it complete fully." },
        vn: { meaning: "Sự chuyển hóa phá vỡ xiềng xích của nghiện ngập hoặc các mẫu ràng buộc. Kết thúc cũng là sự giải phóng — những gì chết đi là những gì đã giam cầm bạn.", advice: "Những gì đang kết thúc cũng là những gì đã kiểm soát bạn. Sự chuyển hóa và sự giải phóng là cùng một sự kiện. Hãy để nó hoàn thành đầy đủ." }
    },
    "Death-The Tower": {
        en: { meaning: "Double transformation — both the gradual and the sudden at once. A complete and radical ending that leaves nothing of the old structure intact.", advice: "This is a total reset. Do not attempt to preserve any part of what existed before — what is emerging needs completely clear ground." },
        vn: { meaning: "Sự chuyển hóa kép — cả dần dần lẫn đột ngột cùng một lúc. Một kết thúc hoàn toàn và triệt để không để lại gì của cấu trúc cũ còn nguyên vẹn.", advice: "Đây là sự đặt lại hoàn toàn. Đừng cố gắng bảo tồn bất kỳ phần nào của những gì đã tồn tại trước — những gì đang nổi lên cần mặt đất hoàn toàn sạch sẽ." }
    },
    "Death-The Star": {
        en: { meaning: "Transformation leading directly toward genuine hope and healing. The ending is real and the renewal that follows is also real — Death clearing the way for the Star.", advice: "Trust that what follows this ending is genuine renewal. The Star does not arrive despite the Death card — it arrives because of it." },
        vn: { meaning: "Sự chuyển hóa dẫn trực tiếp đến hy vọng và chữa lành thực sự. Kết thúc là thực và sự đổi mới tiếp theo cũng là thực — Cái Chết dọn đường cho Ngôi Sao.", advice: "Hãy tin rằng những gì theo sau kết thúc này là sự đổi mới thực sự. Ngôi Sao không đến mặc dù lá bài Cái Chết — nó đến vì nó." }
    },
    "Death-The Moon": {
        en: { meaning: "Transformation proceeding through uncertainty and unclear conditions. An ending whose full nature is not yet visible — moving through profound change in fog.", advice: "Trust the transformation even when you cannot see where it is leading. The ending is real; the confusion is temporary. Clarity will emerge in time." },
        vn: { meaning: "Sự chuyển hóa tiến hành qua sự không chắc chắn và điều kiện không rõ ràng. Một kết thúc mà bản chất đầy đủ của nó chưa hiển thị — di chuyển qua sự thay đổi sâu sắc trong sương mù.", advice: "Hãy tin vào sự chuyển hóa ngay cả khi bạn không thể thấy nó đang dẫn đến đâu. Kết thúc là thực; sự bối rối là tạm thời. Sự rõ ràng sẽ nổi lên theo thời gian." }
    },
    "Death-Judgement": {
        en: { meaning: "Profound transformation aligning with a soul-level awakening. The ending and the calling arriving together — what dies is precisely what needed to die for the summons to be answered.", advice: "Answer the awakening call that arrives with this transformation. What is ending has been holding you back from answering this call. Now you are free to respond." },
        vn: { meaning: "Sự chuyển hóa sâu sắc phù hợp với sự thức tỉnh ở tầng linh hồn. Kết thúc và tiếng gọi đến cùng nhau — những gì chết đi là chính xác những gì cần chết đi để tiếng gọi được đáp lại.", advice: "Hãy đáp lại tiếng gọi thức tỉnh đến cùng với sự chuyển hóa này. Những gì đang kết thúc đã giữ bạn lại khỏi việc đáp lại tiếng gọi này. Giờ bạn tự do để phản hồi." }
    },

    // ── TEMPERANCE completions ────────────────────────────────────
    "Temperance-The Devil": {
        en: { meaning: "Patient balance confronting addiction or excess. The healing process that gradually reduces what has grown out of control.", advice: "Approach the excess with patience rather than severity. Sustainable recovery happens through consistent, measured steps rather than dramatic renunciation." },
        vn: { meaning: "Sự cân bằng kiên nhẫn đối mặt với nghiện ngập hoặc thái quá. Quá trình chữa lành dần dần giảm những gì đã vượt ngoài tầm kiểm soát.", advice: "Hãy tiếp cận sự thái quá với sự kiên nhẫn hơn là sự nghiêm khắc. Sự phục hồi bền vững xảy ra qua các bước nhất quán, đo lường hơn là sự từ bỏ kịch tính." }
    },
    "Temperance-The Tower": {
        en: { meaning: "Patience and balance disrupted by sudden upheaval. The healing process interrupted — or gradual preparation meeting sudden, necessary change.", advice: "If the disruption has arrived, adapt with the same patient balance you were already cultivating. The capacity for equilibrium is your greatest resource in upheaval." },
        vn: { meaning: "Sự kiên nhẫn và cân bằng bị gián đoạn bởi sự biến động đột ngột. Quá trình chữa lành bị gián đoạn — hoặc sự chuẩn bị dần dần gặp gỡ sự thay đổi đột ngột, cần thiết.", advice: "Nếu sự gián đoạn đã đến, hãy thích nghi với sự cân bằng kiên nhẫn mà bạn đã nuôi dưỡng. Khả năng cân bằng là tài nguyên lớn nhất của bạn trong sự biến động." }
    },
    "Temperance-The Moon": {
        en: { meaning: "Patient healing proceeding through uncertain, emotionally confusing conditions. Gradual restoration in the midst of fog and unclear feeling.", advice: "Continue the patient healing process even when you cannot see clearly. Temperance in uncertain conditions is the deepest form of trust." },
        vn: { meaning: "Sự chữa lành kiên nhẫn tiến hành qua điều kiện không chắc chắn, bối rối cảm xúc. Phục hồi dần dần giữa sương mù và cảm giác không rõ ràng.", advice: "Hãy tiếp tục quá trình chữa lành kiên nhẫn ngay cả khi bạn không thể nhìn thấy rõ ràng. Sự điều độ trong điều kiện không chắc chắn là hình thức tin tưởng sâu sắc nhất." }
    },
    "Temperance-The Sun": {
        en: { meaning: "Patient healing arriving at full, joyful clarity and radiant restoration. The gradual process complete — balance achieved and shining.", advice: "The patient work has paid off. The integration and balance you have been cultivating are now expressing themselves in full, joyful health." },
        vn: { meaning: "Sự chữa lành kiên nhẫn đến với sự rõ ràng vui vẻ và phục hồi rực rỡ đầy đủ. Quá trình dần dần hoàn thành — sự cân bằng đạt được và tỏa sáng.", advice: "Công việc kiên nhẫn đã được đền đáp. Sự tích hợp và cân bằng bạn đã nuôi dưỡng giờ đang biểu đạt bản thân trong sức khỏe vui vẻ, đầy đủ." }
    },
    "Temperance-Judgement": {
        en: { meaning: "Gradual healing aligned with a profound awakening call. Patient restoration preparing the ground for the soul-level summons that is arriving.", advice: "The patient healing work you have been doing has prepared you for this awakening. Answer the call from the balanced, restored place you have cultivated." },
        vn: { meaning: "Sự chữa lành dần dần phù hợp với tiếng gọi thức tỉnh sâu sắc. Phục hồi kiên nhẫn chuẩn bị mặt đất cho tiếng gọi ở tầng linh hồn đang đến.", advice: "Công việc chữa lành kiên nhẫn bạn đã thực hiện đã chuẩn bị bạn cho sự thức tỉnh này. Hãy đáp lại tiếng gọi từ nơi cân bằng, được phục hồi mà bạn đã nuôi dưỡng." }
    },
    "Temperance-The World": {
        en: { meaning: "Patient balance and healing achieving complete fulfillment. The gradual process arriving at its most wholehearted and complete expression.", advice: "The completion is genuine. The patient integration work you have done has reached its fullest expression. Receive this wholeness completely." },
        vn: { meaning: "Sự cân bằng kiên nhẫn và chữa lành đạt được sự thỏa mãn hoàn chỉnh. Quá trình dần dần đến biểu đạt chân thành và hoàn chỉnh nhất.", advice: "Sự hoàn thành là thực sự. Công việc tích hợp kiên nhẫn bạn đã làm đã đạt đến biểu đạt đầy đủ nhất. Hãy đón nhận sự toàn vẹn này hoàn toàn." }
    },

    // ── DEVIL completions ─────────────────────────────────────────
    "The Devil-The Tower": {
        en: { meaning: "Sudden, forcible liberation from a binding situation. The disruption that breaks the chain — what felt permanent is destroyed by unexpected force.", advice: "The disruption is a liberation, however painful. Do not rebuild what has been torn away — it was a prison. Walk free." },
        vn: { meaning: "Sự giải phóng đột ngột, bắt buộc khỏi tình huống ràng buộc. Sự gián đoạn phá vỡ xiềng xích — những gì cảm thấy vĩnh viễn bị phá hủy bởi lực lượng bất ngờ.", advice: "Sự gián đoạn là sự giải phóng, dù đau đớn thế nào. Đừng xây dựng lại những gì đã bị phá bỏ — đó là nhà tù. Hãy bước đi tự do." }
    },
    "The Devil-The Star": {
        en: { meaning: "Hope confronting what has kept you bound. The genuine light visible even from inside the binding — or the hope that emerges the moment the chain is recognised.", advice: "Let the hope be the reason to face the binding honestly. The Star is visible from the Devil's cave — follow it toward freedom." },
        vn: { meaning: "Hy vọng đối mặt với những gì đã giữ bạn bị ràng buộc. Ánh sáng thực sự hiển thị ngay cả từ bên trong sự ràng buộc — hoặc hy vọng nổi lên ngay khoảnh khắc xiềng xích được nhận ra.", advice: "Hãy để hy vọng là lý do để đối mặt với sự ràng buộc một cách trung thực. Ngôi Sao có thể nhìn thấy từ hang động của Ác Quỷ — hãy theo đuổi nó hướng đến tự do." }
    },
    "The Devil-Judgement": {
        en: { meaning: "A profound awakening breaking the chains of bondage. The soul-level calling that makes the binding suddenly intolerable — the summons that initiates liberation.", advice: "Answer the awakening call. The call you are hearing makes staying bound unacceptable. The awakening and the liberation are the same movement." },
        vn: { meaning: "Sự thức tỉnh sâu sắc phá vỡ xiềng xích của sự ràng buộc. Tiếng gọi ở tầng linh hồn làm cho sự ràng buộc đột nhiên không thể chịu đựng — tiếng gọi khởi đầu sự giải phóng.", advice: "Hãy đáp lại tiếng gọi thức tỉnh. Tiếng gọi bạn đang nghe làm cho việc ở lại bị ràng buộc là không thể chấp nhận. Sự thức tỉnh và sự giải phóng là cùng một chuyển động." }
    },
    "The Devil-The World": {
        en: { meaning: "Complete liberation from what has bound you, arriving at genuine wholeness. The chains fully broken and the completion fully real.", advice: "The freedom is complete. What had power over you no longer does. Receive the wholeness that liberation has made possible." },
        vn: { meaning: "Sự giải phóng hoàn toàn khỏi những gì đã ràng buộc bạn, đến sự toàn vẹn thực sự. Xiềng xích hoàn toàn bị phá vỡ và sự hoàn thành hoàn toàn thực.", advice: "Tự do là hoàn toàn. Những gì đã có quyền lực đối với bạn giờ không còn nữa. Hãy đón nhận sự toàn vẹn mà sự giải phóng đã làm cho có thể." }
    },

    // ── TOWER completions ─────────────────────────────────────────
    "The Tower-The Star": {
        en: { meaning: "After sudden destruction, genuine hope and healing emerge. The collapse that clears the way for something genuinely better.", advice: "Look up after the collapse. The Star was always there — the Tower was blocking it. What has been destroyed was preventing what is now possible." },
        vn: { meaning: "Sau sự phá hủy đột ngột, hy vọng và chữa lành thực sự nổi lên. Sự sụp đổ dọn đường cho điều gì đó thực sự tốt hơn.", advice: "Hãy nhìn lên sau sự sụp đổ. Ngôi Sao đã luôn ở đó — Tòa Tháp đã chặn nó. Những gì đã bị phá hủy đang ngăn cản những gì giờ là có thể." }
    },
    "The Tower-Judgement": {
        en: { meaning: "Sudden disruption aligned with a profound awakening. The upheaval that is also the call — what collapses is precisely what was preventing the awakening.", advice: "The disruption and the awakening are the same event. Answer the call that arrives with the collapse. The clearing is for exactly this purpose." },
        vn: { meaning: "Sự gián đoạn đột ngột phù hợp với sự thức tỉnh sâu sắc. Sự biến động cũng là tiếng gọi — những gì sụp đổ là chính xác những gì đang ngăn sự thức tỉnh.", advice: "Sự gián đoạn và sự thức tỉnh là cùng một sự kiện. Hãy đáp lại tiếng gọi đến cùng với sự sụp đổ. Sự dọn dẹp là chính xác cho mục đích này." }
    },
    "The Tower-The World": {
        en: { meaning: "After sudden disruption, complete and comprehensive renewal. The total clearing that makes way for genuine wholeness.", advice: "The disruption has served its purpose completely. What rises from it is real and whole. Inhabit the new completeness without looking back." },
        vn: { meaning: "Sau sự gián đoạn đột ngột, sự đổi mới hoàn chỉnh và toàn diện. Sự dọn dẹp hoàn toàn nhường chỗ cho sự toàn vẹn thực sự.", advice: "Sự gián đoạn đã phục vụ mục đích của nó hoàn toàn. Những gì nổi lên từ nó là thực và toàn vẹn. Hãy hiện diện trong sự hoàn chỉnh mới mà không nhìn lại." }
    },

    // ── STAR completions ──────────────────────────────────────────
    "The Star-Judgement": {
        en: { meaning: "Hope aligned with a profound awakening call. The renewal and the summons arriving together — inspiration and calling as the same experience.", advice: "Answer the call with full hope. The hope you carry is not naive — it is exactly what the awakening asks you to bring to it." },
        vn: { meaning: "Hy vọng phù hợp với tiếng gọi thức tỉnh sâu sắc. Sự đổi mới và tiếng gọi đến cùng nhau — cảm hứng và tiếng gọi như là cùng một trải nghiệm.", advice: "Hãy đáp lại tiếng gọi với hy vọng đầy đủ. Hy vọng bạn mang không phải là ngây thơ — đó là chính xác những gì sự thức tỉnh yêu cầu bạn mang đến nó." }
    },
    "The Star-The World": {
        en: { meaning: "Hope fully realized in complete, wholehearted fulfillment. The vision and the completion in perfect alignment — what was hoped for is now fully real.", advice: "The hope was right all along. What you believed in has arrived in its fullest form. Receive the completion with the gratitude it deserves." },
        vn: { meaning: "Hy vọng được hiện thực hóa đầy đủ trong sự thỏa mãn hoàn chỉnh, chân thành. Tầm nhìn và sự hoàn thành hoàn toàn phù hợp — những gì được hy vọng giờ đã hoàn toàn thực.", advice: "Hy vọng đã đúng từ đầu. Những gì bạn tin tưởng đã đến dưới hình thức đầy đủ nhất. Hãy đón nhận sự hoàn thành với lòng biết ơn xứng đáng." }
    },

    // ── MOON completions ──────────────────────────────────────────
    "The Moon-Judgement": {
        en: { meaning: "Confusion and illusion giving way to a profound awakening. The fog lifting as the summons arrives — clarity breaking through the Moon's mystery.", advice: "The awakening is the clarity you have been waiting for. What the Moon obscured is now being illuminated. Answer the call that this clarity reveals." },
        vn: { meaning: "Sự bối rối và ảo tưởng nhường chỗ cho sự thức tỉnh sâu sắc. Sương mù tan biến khi tiếng gọi đến — sự rõ ràng xuyên qua bí ẩn của Mặt Trăng.", advice: "Sự thức tỉnh là sự rõ ràng bạn đã chờ đợi. Những gì Mặt Trăng che khuất giờ đang được chiếu sáng. Hãy đáp lại tiếng gọi mà sự rõ ràng này tiết lộ." }
    },
    "The Moon-The World": {
        en: { meaning: "Confusion and intuitive depth integrated into genuine wholeness. The full acceptance of both the known and the unknown as part of complete experience.", advice: "The completion here includes the mystery. Wholeness that incorporates the Moon's depths is richer than completeness that denies them." },
        vn: { meaning: "Sự bối rối và chiều sâu trực giác được tích hợp vào sự toàn vẹn thực sự. Sự chấp nhận đầy đủ cả những gì đã biết và chưa biết như một phần của trải nghiệm hoàn chỉnh.", advice: "Sự hoàn thành ở đây bao gồm cả bí ẩn. Sự toàn vẹn kết hợp chiều sâu của Mặt Trăng phong phú hơn sự hoàn chỉnh phủ nhận chúng." }
    },

    // ── JUDGEMENT completions ─────────────────────────────────────
    "Judgement-The World": {
        en: { meaning: "A profound awakening leading directly to complete, wholehearted fulfillment. The call answered and the completion arrived simultaneously.", advice: "You have answered the deepest call and arrived at genuine wholeness. This is both awakening and completion — honour both fully." },
        vn: { meaning: "Sự thức tỉnh sâu sắc dẫn trực tiếp đến sự thỏa mãn hoàn chỉnh, chân thành. Tiếng gọi được đáp lại và sự hoàn thành đến đồng thời.", advice: "Bạn đã đáp lại tiếng gọi sâu sắc nhất và đến sự toàn vẹn thực sự. Đây vừa là sự thức tỉnh vừa là sự hoàn thành — hãy tôn trọng cả hai đầy đủ." }
    },


    "The High Priestess-The Devil": {
        en: { meaning: "Deep intuition confronting addiction, shadow, or unconscious binding. The inner knowing that sees exactly what has power over you — the awareness that precedes liberation.", advice: "Your intuition already knows what has been controlling you. Trust that inner knowing enough to name it. What is seen clearly by the High Priestess loses its unconscious grip." },
        vn: { meaning: "Trực giác sâu sắc đối mặt với nghiện ngập, bóng tối hoặc sự ràng buộc tiềm thức. Sự hiểu biết nội tâm thấy chính xác những gì có quyền lực đối với bạn — sự nhận thức đi trước sự giải phóng.", advice: "Trực giác của bạn đã biết những gì đã kiểm soát bạn. Hãy tin vào sự hiểu biết nội tâm đó đủ để đặt tên cho nó. Những gì được Nữ Giáo Hoàng nhìn thấy rõ ràng mất đi sức kìm kẹp tiềm thức của nó." }
    },
    "The High Priestess-The Star": {
        en: { meaning: "Deep intuition aligned with genuine hope and healing. Inner wisdom pointing toward renewal — the knowing that recovery and restoration are truly available.", advice: "Trust the inner sense that healing is possible. The High Priestess confirms what the Star promises — the hope is grounded in genuine inner knowing." },
        vn: { meaning: "Trực giác sâu sắc phù hợp với hy vọng và chữa lành thực sự. Sự khôn ngoan bên trong chỉ đến sự đổi mới — sự hiểu biết rằng sự phục hồi và phục hồi thực sự có sẵn.", advice: "Hãy tin vào cảm giác nội tâm rằng sự chữa lành là có thể. Nữ Giáo Hoàng xác nhận những gì Ngôi Sao hứa hẹn — hy vọng được đặt nền tảng trong sự hiểu biết nội tâm thực sự." }
    },
    "The Empress-Temperance": {
        en: { meaning: "Creative abundance paired with patient, measured healing. Fertility and generosity expressed through gradual, sustainable nurturing rather than excess.", advice: "Nurture what you are growing with patience and balance. The most enduring creative and relational abundance grows steadily, not explosively." },
        vn: { meaning: "Sự dồi dào sáng tạo kết hợp với sự chữa lành kiên nhẫn, đo lường. Sự màu mỡ và hào phóng được biểu đạt qua sự nuôi dưỡng dần dần, bền vững hơn là thái quá.", advice: "Hãy nuôi dưỡng những gì bạn đang phát triển với sự kiên nhẫn và cân bằng. Sự dồi dào sáng tạo và quan hệ bền lâu nhất phát triển ổn định, không phải bùng nổ." }
    },
    "The Chariot-The Sun": {
        en: { meaning: "Determined drive achieving radiant, joyful victory. The combination of focused will and full success — confidence and momentum in perfect alignment.", advice: "Move forward with complete confidence. The drive and the positive outcome are aligned — act decisively and receive the success that follows." },
        vn: { meaning: "Quyết tâm mạnh mẽ đạt được chiến thắng rực rỡ, vui vẻ. Sự kết hợp của ý chí tập trung và thành công đầy đủ — sự tự tin và động lực hoàn toàn phù hợp.", advice: "Hãy tiến về phía trước với sự tự tin hoàn toàn. Quyết tâm và kết quả tích cực được căn chỉnh — hãy hành động quyết đoán và đón nhận thành công tiếp theo." }
    },
    "Strength-The Star": {
        en: { meaning: "Inner strength aligned with genuine hope and healing. Quiet courage pointing toward renewal — the emotional mastery that makes real restoration possible.", advice: "Your inner strength is the foundation for the hope to take root. The Star's renewal is available precisely because of the Strength you have cultivated." },
        vn: { meaning: "Sức mạnh nội tâm phù hợp với hy vọng và chữa lành thực sự. Lòng dũng cảm lặng lẽ chỉ đến sự đổi mới — sự làm chủ cảm xúc làm cho sự phục hồi thực sự có thể.", advice: "Sức mạnh nội tâm của bạn là nền tảng để hy vọng bén rễ. Sự đổi mới của Ngôi Sao có sẵn chính xác vì Sức Mạnh bạn đã nuôi dưỡng." }
    },
    "Wheel of Fortune-Justice": {
        en: { meaning: "Karmic justice aligned with destiny's turning wheel. A fair outcome that is also a fated one — what goes around comes around in the fullest sense.", advice: "Trust the karmic process. The wheel and justice together confirm that what is fair will be delivered at exactly the right time." },
        vn: { meaning: "Công lý nghiệp quả phù hợp với bánh xe định mệnh đang quay. Kết quả công bằng cũng là định mệnh — gieo nhân nào gặt quả nấy theo nghĩa đầy đủ nhất.", advice: "Hãy tin vào quá trình nghiệp quả. Bánh xe và công lý cùng nhau xác nhận rằng những gì công bằng sẽ được thực hiện vào đúng thời điểm." }
    },
    "Death-The World": {
        en: { meaning: "Profound transformation completing in genuine wholeness. An ending so complete that it becomes the fullest expression of the entire cycle — death as the ultimate fulfillment.", advice: "What has ended has fulfilled its complete purpose. The completion is real and whole. Honour the full cycle — the ending is not separate from the wholeness, it is part of it." },
        vn: { meaning: "Sự chuyển hóa sâu sắc hoàn thành trong sự toàn vẹn thực sự. Một kết thúc hoàn chỉnh đến mức trở thành biểu đạt đầy đủ nhất của toàn bộ chu kỳ — cái chết như là sự thỏa mãn tối thượng.", advice: "Những gì đã kết thúc đã thực hiện mục đích hoàn chỉnh của nó. Sự hoàn thành là thực và toàn vẹn. Hãy tôn trọng chu kỳ đầy đủ — kết thúc không tách biệt khỏi sự toàn vẹn, nó là một phần của nó." }
    },
    "The Devil-The Sun": {
        en: { meaning: "Liberation shining with full, radiant clarity. The chains dropped and freedom arriving with complete joy — the contrast between what bound you and what is now possible.", advice: "The freedom is real and the joy is genuine. Let yourself fully inhabit the light that becomes available when the binding is released." },
        vn: { meaning: "Sự giải phóng tỏa sáng với sự rõ ràng rực rỡ, đầy đủ. Xiềng xích được thả và tự do đến với niềm vui hoàn toàn — sự tương phản giữa những gì đã ràng buộc bạn và những gì giờ là có thể.", advice: "Tự do là thực và niềm vui là thực sự. Hãy để bản thân hoàn toàn hiện diện trong ánh sáng trở nên có sẵn khi sự ràng buộc được giải phóng." }
    },
    "The Tower-The Sun": {
        en: { meaning: "After sudden disruption, radiant clarity and joy emerge. The collapse that clears the way for full, brilliant light.", advice: "The disruption has served its purpose. The brightness that follows the Tower's clearing is genuine and lasting. Step into it fully." },
        vn: { meaning: "Sau sự gián đoạn đột ngột, sự rõ ràng rực rỡ và niềm vui nổi lên. Sự sụp đổ dọn đường cho ánh sáng đầy đủ, rực rỡ.", advice: "Sự gián đoạn đã phục vụ mục đích của nó. Sự sáng rỡ theo sau sự dọn dẹp của Tòa Tháp là thực và bền lâu. Hãy bước vào nó đầy đủ." }
    },
    "The Star-The Sun": {
        en: { meaning: "Hope and joy in their most radiant, complete expression. Genuine renewal shining with full confidence and happiness — two of the most positive cards combined.", advice: "This is an exceptionally auspicious combination. The hope has become joy and the vision has become reality. Receive and celebrate this moment fully." },
        vn: { meaning: "Hy vọng và niềm vui trong biểu đạt rực rỡ, hoàn chỉnh nhất. Sự đổi mới thực sự tỏa sáng với sự tự tin và hạnh phúc đầy đủ — hai lá bài tích cực nhất được kết hợp.", advice: "Đây là một sự kết hợp đặc biệt tốt đẹp. Hy vọng đã trở thành niềm vui và tầm nhìn đã trở thành thực tại. Hãy đón nhận và ăn mừng khoảnh khắc này đầy đủ." }
    },

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
} else if (typeof window !== 'undefined') {
    window.tarotCombinations = tarotCombinations;
    window.getTarotCombination = getTarotCombination;
}
