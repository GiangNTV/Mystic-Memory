// ============================================================
//  DAILY TIME-OF-DAY PATCH  v2
//  Nâng cấp daily tarot: 3 buổi sáng/trưa-chiều/tối ~50 chữ
//  Load sau: app.js, patches.js, enhanced_vietnamese.js
// ============================================================
(function patchDailyTimeOfDay() {

    function buildTimeBlocks(card, reversed, lang, deepData) {
        const name = card.en.name;
        const el   = card.element || '';
        const kw   = (card[lang]?.keywords || card.en.keywords || []);
        const kw0  = (kw[0] || '').toLowerCase();
        const kw1  = (kw[1] || kw[0] || '').toLowerCase();
        const rev  = reversed;

        // Element-based default messages
        const elMap = {
            en: {
                morning: {
                    Fire:  'Begin with bold intention before anything else. Write one audacious goal before checking your phone. Fire energy peaks early; this first hour sets the tone for decisive, momentum-driven action.',
                    Water: 'Start with five minutes of stillness. Notice the emotional currents before the day\'s demands arrive. Your intuition is sharpest in these quiet morning moments — honour what surfaces.',
                    Air:   'Capture your first thoughts in writing; they carry unusual clarity at this hour. Review your day\'s plan with fresh eyes, then communicate the most important thing before anything else.',
                    Earth: 'Ground yourself before you rush. A brief walk, a nourishing breakfast, or simply five slow breaths will anchor your energy and make everything that follows more effective and sustainable.'
                },
                afternoon: {
                    Fire:  'Channel peak energy into the day\'s most demanding task. If momentum has flagged, a short burst of physical movement will reignite your focus and restore the forward drive you need.',
                    Water: 'Relationships come into sharp focus after midday. A genuine check-in with someone who matters — not a text, a real exchange — deepens trust and softens any friction that has built up.',
                    Air:   'The afternoon favours negotiations, presentations, and communication requiring precision. Think twice before sending important messages; clarity of tone and intent matter most at this hour.',
                    Earth: 'Progress shows best through concrete, measurable actions. Tackle one overdue practical task — a bill, a repair, a stalled plan. Completion brings the quiet satisfaction that grounds you.'
                },
                evening: {
                    Fire:  'Review what you acted on today and honour it — even imperfect action matters. Release the residue of urgency before sleep. Let the evening be genuinely restorative rather than just exhausted.',
                    Water: 'Allow the emotional texture of the day to settle without judgment. A few reflective minutes with tea, music, or quiet will integrate what you experienced and prepare you for tomorrow.',
                    Air:   'Process the day\'s information before sleep. Write one insight or question that arose. Leaving the mind clear of unprocessed thoughts makes tomorrow\'s thinking noticeably sharper and fresher.',
                    Earth: 'Take stock of what was built or completed today, however small. Tidy one physical space before resting — the order outside mirrors the calm order you are cultivating within yourself.'
                }
            },
            vn: {
                morning: {
                    Fire:  'Bắt đầu với một ý định táo bạo trước mọi thứ khác. Ghi lại một mục tiêu lớn trước khi kiểm tra điện thoại. Năng lượng Lửa đạt đỉnh vào buổi sáng; giờ đầu tiên định hướng cho cả ngày.',
                    Water: 'Dành năm phút tĩnh lặng trước khi ngày bắt đầu. Lắng nghe những cảm xúc đầu tiên nổi lên trước khi áp lực của ngày ập đến. Trực giác bạn sắc bén nhất trong những khoảnh khắc yên tĩnh.',
                    Air:   'Ghi lại những suy nghĩ đầu tiên — chúng có sự rõ ràng đặc biệt vào buổi sáng. Xem lại kế hoạch ngày với góc nhìn tươi mới, rồi truyền đạt điều quan trọng nhất trước khi làm gì khác.',
                    Earth: 'Đặt nền tảng cho ngày trước khi vội vã. Một buổi tản bộ ngắn, bữa sáng đủ chất, hoặc năm hơi thở sâu sẽ neo giữ năng lượng và giúp mọi việc sau đó hiệu quả, bền vững hơn.'
                },
                afternoon: {
                    Fire:  'Kênh hóa năng lượng vào công việc đòi hỏi nhất trong ngày. Nếu động lực giảm sút, một chút vận động thể chất sẽ khởi động lại sự tập trung và khôi phục đà tiến về phía trước.',
                    Water: 'Các mối quan hệ trở nên rõ nét nhất sau buổi trưa. Một cuộc trò chuyện thật sự — không phải nhắn tin — với ai đó quan trọng sẽ làm sâu sắc thêm sự tin tưởng và giảm bớt mâu thuẫn.',
                    Air:   'Buổi chiều thuận lợi cho đàm phán và giao tiếp đòi hỏi sự chính xác. Hãy suy nghĩ kỹ trước khi gửi tin nhắn quan trọng — ngữ điệu và sự rõ ràng là điều quan trọng nhất lúc này.',
                    Earth: 'Tiến độ thể hiện rõ nhất qua các hành động cụ thể, đo lường được. Xử lý một công việc thực tế còn tồn đọng. Sự hoàn thành mang lại thỏa mãn lặng lẽ giúp bạn giữ vững nền tảng.'
                },
                evening: {
                    Fire:  'Nhìn lại những gì bạn đã hành động hôm nay và trân trọng nó — dù chưa hoàn hảo. Thả bỏ cảm giác cấp bách trước khi ngủ. Hãy để buổi tối thực sự phục hồi chứ không chỉ là kiệt sức.',
                    Water: 'Để kết cấu cảm xúc của ngày lắng xuống mà không phán xét. Vài phút chiêm nghiệm với trà, âm nhạc hoặc sự yên tĩnh sẽ tích hợp những gì bạn đã trải qua và chuẩn bị cho ngày mai.',
                    Air:   'Xử lý thông tin của ngày trước khi ngủ. Viết một hiểu biết hoặc câu hỏi nảy sinh. Để đầu óc không còn suy nghĩ chưa được xử lý giúp tư duy ngày mai sắc bén và tươi mới hơn đáng kể.',
                    Earth: 'Nhìn lại những gì đã được xây dựng hoặc hoàn thành hôm nay, dù nhỏ. Dọn dẹp một không gian vật lý trước khi nghỉ ngơi — trật tự bên ngoài phản chiếu sự bình tĩnh bên trong bạn.'
                }
            }
        };

        function trimTo52(txt) {
            if (!txt) return '';
            return txt.trim();
        }

        function pick(deepField, fallbackEl, fallbackRev, fallbackNorm) {
            if (deepField) return trimTo52(deepField);
            if (el && fallbackEl[el]) return fallbackEl[el];
            return rev ? fallbackRev : fallbackNorm;
        }

        const L = elMap[lang] || elMap.en;

        const morning = pick(
            deepData?.[lang]?.events,
            L.morning,
            lang === 'en'
                ? `The reversed energy of ${name} invites a slower, more intentional morning. Resist the urge to rush into action. Set one honest intention before engaging with the world, and let it guide your choices.`
                : `Năng lượng ngược của ${name} mời một buổi sáng chậm hơn, có chủ đích hơn. Hãy kháng lại cám dỗ vội vàng hành động. Đặt ra một ý định trung thực trước khi tham gia với thế giới.`,
            lang === 'en'
                ? `The morning carries the freshest expression of ${name}. Direct your first waking hours toward ${kw0} — this is when the card's influence flows most naturally into meaningful, tangible beginnings.`
                : `Buổi sáng mang biểu đạt tươi nhất của ${name}. Hướng những giờ đầu thức dậy về phía ${kw0} — đây là lúc ảnh hưởng của lá bài chảy tự nhiên nhất vào những khởi đầu có ý nghĩa.`
        );

        const afternoon = pick(
            deepData?.[lang]?.timing,
            L.afternoon,
            lang === 'en'
                ? `Midday brings a choice point. Consider whether you are still resisting what the reversal is asking you to release. A short pause before reacting — a walk, a breath — can reshape the entire afternoon.`
                : `Buổi trưa mang đến điểm lựa chọn. Hãy xem xét liệu bạn có còn kháng cự những gì sự đảo ngược đang yêu cầu bạn buông bỏ không. Một khoảnh khắc tạm dừng có thể định hình lại cả buổi chiều.`,
            lang === 'en'
                ? `The afternoon is the peak expression window for ${name}. Focus your energy on ${kw1} — the work or interactions you undertake now carry the card's full momentum. Act with purpose rather than habit.`
                : `Buổi chiều là cửa sổ biểu đạt đỉnh cao của ${name}. Tập trung năng lượng vào ${kw1} — công việc hoặc tương tác bạn thực hiện bây giờ mang đầy đủ đà của lá bài. Hãy hành động có mục đích.`
        );

        const evening = pick(
            deepData?.[lang]?.spiritual,
            L.evening,
            lang === 'en'
                ? `As the day closes, sit with what the reversed ${name} revealed today. What resisted, what felt off — these signals carry tomorrow's guidance. Write one honest sentence about what you noticed in yourself.`
                : `Khi ngày tàn, hãy ngồi với những gì ${name} ngược tiết lộ hôm nay. Những kháng cự, những gì cảm thấy không ổn — những tín hiệu này mang hướng dẫn cho ngày mai. Viết một câu trung thực.`,
            lang === 'en'
                ? `The evening is for integration, not acceleration. Let the day's experiences settle. Ask yourself how ${name}'s essence — ${kw0} — expressed itself today. This simple reflection deepens the card's teaching.`
                : `Buổi tối dành cho sự tích hợp, không phải tăng tốc. Để những trải nghiệm trong ngày lắng xuống. Hỏi bản thân ${name} — ${kw0} — đã biểu đạt như thế nào hôm nay. Sự chiêm nghiệm này làm sâu sắc thêm bài học.`
        );

        return { morning, afternoon, evening };
    }

    // ── Main render function ─────────────────────────────────────
    function generateEnhancedDailyInterpretationV2(card, reversed, lang) {
        const cardName = card.en.name;
        const rev = reversed;
        const deepData = (typeof tarotDeepInterpretations !== 'undefined' && tarotDeepInterpretations[cardName])
            ? tarotDeepInterpretations[cardName] : null;

        const dayNames = {
            en: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            vn: ['Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy']
        };
        const today = new Date();
        const dayName = dayNames[lang]?.[today.getDay()] || '';
        const times = buildTimeBlocks(card, rev, lang, deepData);

        const mainMsg = deepData?.[lang]?.deep || (rev
            ? (lang === 'en'
                ? `Today ${cardName} appears in its reflective shadow. External progress may slow, but soul-level movement is intense and meaningful. Resistance is a signal, not a verdict.`
                : `Hôm nay ${cardName} xuất hiện trong hình thái chiêm nghiệm. Tiến trình bên ngoài có thể chậm lại, nhưng sự chuyển động ở tầng linh hồn thì rất mạnh mẽ. Kháng cự là tín hiệu, không phải phán quyết.`)
            : (lang === 'en'
                ? `The universe flows the frequency of ${cardName} through you today — a powerful invitation to embody ${(card.en.keywords||[]).slice(0,2).join(' and ').toLowerCase()} in everything you do.`
                : `Vũ trụ gửi tần số của ${cardName} qua bạn hôm nay — lời mời mạnh mẽ để thể hiện ${(card.vn?.keywords||card.en.keywords||[]).slice(0,2).join(' và ').toLowerCase()} trong mọi việc bạn làm.`));

        const loveText = deepData?.[lang]?.love || (rev
            ? (lang === 'en' ? `Unresolved emotional patterns may surface today. Listen more than you speak; genuine vulnerability is your greatest strength in any relationship right now.`
                             : `Những mẫu cảm xúc chưa giải quyết có thể nổi lên hôm nay. Hãy lắng nghe nhiều hơn nói; sự dễ bị tổn thương thực sự là sức mạnh lớn nhất của bạn trong các mối quan hệ lúc này.`)
            : (lang === 'en' ? `A beautiful day for genuine, open-hearted connection. ${cardName} fosters authentic warmth, mutual understanding, and the courage to be truly present with those you care about.`
                             : `Một ngày đẹp cho sự kết nối chân thành từ trái tim. ${cardName} nuôi dưỡng sự ấm áp, hiểu biết lẫn nhau và dũng cảm để thực sự hiện diện với những người bạn quan tâm.`));

        const careerText = deepData?.[lang]?.career || (rev
            ? (lang === 'en' ? `Pause before major professional commitments. Completing existing responsibilities with full attention will serve you better today than launching ambitious new ventures.`
                             : `Hãy dừng lại trước khi cam kết nghề nghiệp lớn. Hoàn thành các trách nhiệm hiện có với sự chú ý đầy đủ sẽ phục vụ bạn tốt hơn hôm nay so với việc khởi động dự án mới tham vọng.`)
            : (lang === 'en' ? `Cosmic alignment supports your professional ambitions today. Bold moves, creative initiatives, and financial seeds planted now are backed by the full momentum of ${cardName}'s energy.`
                             : `Sự căn chỉnh vũ trụ hỗ trợ tham vọng nghề nghiệp của bạn hôm nay. Những bước đi táo bạo, sáng kiến sáng tạo và hạt giống tài chính được gieo bây giờ được hỗ trợ bởi đầy đủ đà của ${cardName}.`));

        const warnText = deepData?.[lang]?.warnings || (rev
            ? (lang === 'en' ? `Forcing outcomes or overcompensating for this card's shadow energy leads to unnecessary exhaustion. Trust the process rather than trying to control every variable.`
                             : `Ép buộc kết quả hoặc bù đắp quá mức cho năng lượng bóng tối của lá bài này dẫn đến kiệt sức không cần thiết. Hãy tin vào quá trình hơn là cố kiểm soát mọi biến số.`)
            : (lang === 'en' ? `The shadow of ${cardName} emerges when its gifts are expressed without grounding or awareness. Stay centred today, avoid extremes, and let the energy work through you — not for you.`
                             : `Bóng tối của ${cardName} nảy sinh khi những món quà của nó được biểu đạt thiếu sự tập trung. Hãy giữ vững trung tâm hôm nay, tránh cực đoan và để năng lượng hoạt động qua bạn.`));

        const spirText = deepData?.[lang]?.spiritual || (lang === 'en'
            ? `You are not separate from the universe — you are one of its instruments. Today, ${cardName} plays through you. Bring full awareness to what you create, choose, and offer to the world.`
            : `Bạn không tách biệt khỏi vũ trụ — bạn là một trong những nhạc cụ của nó. Hôm nay, ${cardName} chơi qua bạn. Hãy mang sự tỉnh thức đầy đủ đến những gì bạn tạo ra và trao tặng cho thế giới.`);

        const kws = card[lang]?.keywords || card.en.keywords || [];

        let html = `<div class="space-y-6 animate-fade-in pb-12">`;

        // Header
        html += `
        <div class="text-center pb-6 border-b border-amber-500/20 pt-4">
            <p class="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">${dayName}</p>
            <h3 class="text-3xl md:text-4xl font-['Cinzel'] font-bold text-amber-100 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">${card[lang]?.name || card.en.name}</h3>
            ${rev ? `<div class="mt-3"><span class="px-5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest">${lang === 'en' ? 'Reversed' : 'Vị Trí Ngược'}</span></div>` : ''}
        </div>`;

        // Main energy
        html += `
        <div class="glass p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
            <h4 class="text-base font-bold text-amber-400 mb-3 flex items-center gap-2">
                <i data-lucide="sparkles" class="w-5 h-5 flex-shrink-0"></i>
                <span>${lang === 'en' ? "Today's Energy" : 'Thông Điệp Hôm Nay'}</span>
            </h4>
            <p class="text-slate-100 leading-relaxed text-base italic mb-3">"${rev
                ? (card[lang]?.meaning_rev || card[lang]?.meaning || card.en.meaning)
                : (card[lang]?.meaning || card.en.meaning)}"</p>
            <p class="text-slate-300 leading-relaxed text-sm">${mainMsg}</p>
        </div>`;

        // Three time blocks
        const blocks = [
            {
                icon: 'sunrise', color: 'pink',
                label: lang === 'en' ? '🌅 Morning  ·  5:00 AM – 12:00 PM' : '🌅 Buổi Sáng  ·  5:00 – 12:00',
                text: times.morning
            },
            {
                icon: 'sun', color: 'amber',
                label: lang === 'en' ? '☀️ Afternoon  ·  12:00 PM – 6:00 PM' : '☀️ Buổi Trưa & Chiều  ·  12:00 – 18:00',
                text: times.afternoon
            },
            {
                icon: 'moon', color: 'indigo',
                label: lang === 'en' ? '🌙 Evening  ·  6:00 PM onward' : '🌙 Buổi Tối  ·  18:00 trở đi',
                text: times.evening
            }
        ];

        html += `<div class="space-y-4">
            <h4 class="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <i data-lucide="clock" class="w-4 h-4"></i>
                ${lang === 'en' ? 'Your Day in Three Acts' : 'Ngày Của Bạn Qua Ba Giai Đoạn'}
            </h4>`;

        for (const b of blocks) {
            html += `
            <div class="glass p-5 rounded-2xl border border-${b.color}-500/25 bg-${b.color}-500/5 hover:border-${b.color}-500/40 transition-all">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-9 h-9 rounded-full bg-${b.color}-500/15 flex items-center justify-center text-${b.color}-400 border border-${b.color}-500/30 flex-shrink-0">
                        <i data-lucide="${b.icon}" class="w-4 h-4"></i>
                    </div>
                    <h5 class="font-bold text-${b.color}-300 text-sm">${b.label}</h5>
                </div>
                <p class="text-slate-200 leading-relaxed text-sm">${b.text}</p>
            </div>`;
        }
        html += `</div>`;

        // Love + Career
        html += `
        <div class="grid md:grid-cols-2 gap-4">
            <div class="glass p-5 rounded-2xl border border-rose-500/20">
                <h5 class="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                    <i data-lucide="heart" class="w-4 h-4"></i>
                    ${lang === 'en' ? 'Love & Relationships' : 'Tình Yêu & Mối Quan Hệ'}
                </h5>
                <p class="text-slate-300 leading-relaxed text-sm">${loveText}</p>
            </div>
            <div class="glass p-5 rounded-2xl border border-emerald-500/20">
                <h5 class="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                    <i data-lucide="briefcase" class="w-4 h-4"></i>
                    ${lang === 'en' ? 'Career & Abundance' : 'Sự Nghiệp & Tài Chính'}
                </h5>
                <p class="text-slate-300 leading-relaxed text-sm">${careerText}</p>
            </div>
        </div>`;

        // Warning + Spiritual
        html += `
        <div class="grid md:grid-cols-2 gap-4">
            <div class="glass p-5 rounded-2xl border border-rose-500/20 bg-rose-950/10">
                <h5 class="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                    <i data-lucide="alert-triangle" class="w-4 h-4"></i>
                    ${lang === 'en' ? "Today's Caution" : 'Lưu Ý Hôm Nay'}
                </h5>
                <p class="text-slate-300 leading-relaxed text-sm">${warnText}</p>
            </div>
            <div class="glass p-5 rounded-2xl border border-violet-500/20 bg-violet-950/10">
                <h5 class="text-sm font-bold text-violet-400 mb-2 flex items-center gap-2">
                    <i data-lucide="compass" class="w-4 h-4"></i>
                    ${lang === 'en' ? "Soul's Compass" : 'La Bàn Tâm Hồn'}
                </h5>
                <p class="text-slate-300 leading-relaxed text-sm italic">"${spirText}"</p>
            </div>
        </div>`;

        // Keywords
        if (kws.length) {
            html += `
        <div class="flex flex-wrap gap-2 justify-center pt-1">
            ${kws.map(k => `<span class="px-3 py-1 bg-amber-500/5 border border-amber-500/20 rounded-full text-[10px] font-bold text-amber-300 uppercase tracking-widest">#${k}</span>`).join('')}
        </div>`;
        }

        html += `</div>`;

        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            setTimeout(() => lucide.createIcons(), 60);
        }
        return html;
    }

    // Override both function references
    window.generateEnhancedDailyInterpretation = generateEnhancedDailyInterpretationV2;

    // Also patch generateDailySynthesis (used in spread type 1)
    const _origDailySynth = typeof generateDailySynthesis === 'function' ? generateDailySynthesis : null;
    generateDailySynthesis = function() {
        if (typeof drawnCards === 'undefined' || drawnCards.length === 0) {
            return _origDailySynth ? _origDailySynth() : '';
        }
        return generateEnhancedDailyInterpretationV2(
            drawnCards[0],
            (typeof reversedList !== 'undefined' && reversedList[0]) || false,
            typeof currentLang !== 'undefined' ? currentLang : 'en'
        );
    };

    console.log('[Daily Time Patch v2] ✅ Sáng / Trưa-Chiều / Tối blocks đã được nâng cấp.');
})();
