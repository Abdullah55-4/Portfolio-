import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Lang } from '../translations';

interface Tab { id: string; label: string; content: string }
interface Paper {
  title: string; cat: string; lang: 'ENGLISH' | 'ARABIC';
  year: string; desc: string; img: string; cta: string;
  meta: string; tabs: Tab[];
}

const papers = (lang: Lang): Paper[] => {
  const ar = lang === 'ar';
  return [
    {
      title: ar ? 'عوائق التواصل وتأثيرها في بناء العلاقات الدولية' : 'Communication Barriers & Their Impact on International Relations',
      cat: ar ? 'العلاقات الدولية' : 'INTERNATIONAL RELATIONS',
      lang: 'ARABIC', year: '2025',
      desc: ar
        ? 'دراسة تحليلية منشورة على ResearchGate تكشف كيف تؤثر العوائق اللغوية والنفسية والتقنية على مسار العلاقات الدولية عبر نماذج تاريخية متنوعة.'
        : 'Published analytical study on ResearchGate revealing how linguistic, psychological, and technical barriers affect international relations through diverse historical cases.',
      img: 'https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=800',
      cta: ar ? 'اقرأ البحث ←' : 'READ PAPER →',
      meta: ar ? 'دراسة تحليلية · ResearchGate 2025 · DOI: 10.13140/RG.2.2.31855.34728' : 'Analytical Study · ResearchGate 2025 · DOI: 10.13140/RG.2.2.31855.34728',
      tabs: [
        { id: 'intro', label: 'INTRO', content: ar
          ? 'تُعدّ العلاقات الدولية عرضةً للتقلبات بسبب عوائق التواصل، سواء كانت لغوية ناجمة عن الغموض، أو نفسية مرتبطة بالتحيزات، أو تقنية ناجمة عن الفجوة الرقمية والحروب السيبرانية. يسعى البحث إلى تحليل هذه العوائق وتأثيرها في مسار الدبلوماسية الدولية.'
          : 'International relations are vulnerable to disruptions caused by communication barriers — linguistic (from ambiguity), psychological (from biases), or technical (from digital gaps and cyber warfare). This study analyzes these barriers and their impact on the course of international diplomacy.' },
        { id: 'ch1', label: 'CH.1', content: ar
          ? 'العوائق اللغوية: تتضمن غموض الكلمات وتعدد دلالاتها، وأخطاء الترجمة، واختلاف اللهجات بين المتحدثين بلغة واحدة. كلمة واحدة مبهمة في نص دبلوماسي قد تطلق تأثير الفراشة وتحوّل تفاوضاً دبلوماسياً إلى أزمة. ومثال ذلك الخطأ الشهير في ترجمة كلمة mokusatsu اليابانية عام 1945 الذي أثّر في مسار الحرب العالمية الثانية.'
          : 'Linguistic Barriers: These include word ambiguity, translation errors, and dialectical differences even among speakers of the same language. A single ambiguous word in a diplomatic text can trigger a butterfly effect. A notable example is the mistranslation of the Japanese word "mokusatsu" in 1945, which affected the course of WWII.' },
        { id: 'ch2', label: 'CH.2', content: ar
          ? 'العوائق النفسية والشخصية: تشمل التحيزات الإدراكية والصور النمطية التي تجعل الفاعلين يفسّرون رسائل الآخرين من خلال عدسات مسبقة. أسلوب التعبير، سواء كان هادئاً في خطاب تهديدي أو انفعالياً في رسالة سلمية، يُحمّل الخطاب رسائل مبطّنة تغيّر معناه كلياً. مثال: مفاوضات يالطا 1945 حيث فسّر ستالين والغرب الاتفاقيات ذاتها بطرق متناقضة.'
          : 'Psychological & Personal Barriers: Cognitive biases and stereotypes cause actors to interpret messages through predetermined lenses. Communication style — calm in a threatening speech or emotional in a peaceful message — can embed hidden meanings that alter its intent entirely. Example: The Yalta negotiations of 1945, where Stalin and the West interpreted the same agreements in contradictory ways.' },
        { id: 'ch3', label: 'CH.3', content: ar
          ? 'العوائق التقنية والإعلامية: في العصر الرقمي، أخذت أشكالاً جديدة تشمل الفجوة الرقمية (2.7 مليار شخص بلا إنترنت عام 2022)، والحروب السيبرانية التي تستهدف قنوات الاتصال، والخوارزميات التي تُضخّم المعلومات المضللة. نموذج نزاع ناغورنو قره باغ يُظهر كيف استُخدمت وسائل الإعلام والتواصل الاجتماعي كأدوات حرب نفسية.'
          : 'Technical & Media Barriers: In the digital age, these take new forms including the digital divide (2.7 billion offline in 2022), cyber warfare targeting communication channels, and algorithms amplifying disinformation. The Nagorno-Karabakh conflict demonstrates how media and social networks were weaponized as psychological warfare tools.' },
        { id: 'con', label: 'CON', content: ar
          ? 'الخاتمة: يخلص البحث إلى ضرورة بناء آليات متكاملة للتغلب على هذه العوائق، تشمل: تعزيز الترجمة الدقيقة بمرتجمين محترفين، والاستفادة من الذكاء الاصطناعي في تحليل المشاعر وكشف المعلومات المضللة، وتقوية قنوات الدبلوماسية المباشرة لبناء الثقة. فهم هذه العوائق شرط أساسي لبناء علاقات دولية مستقرة.'
          : 'Conclusion: The study concludes that overcoming these barriers requires integrated mechanisms: enhancing accurate translation with professional interpreters, leveraging AI for sentiment analysis and misinformation detection, and strengthening direct diplomacy channels. Understanding these barriers is a prerequisite for building stable international relations.' },
      ]
    },
    {
      title: ar ? 'النظام السياسي الأوكراني: المؤسسات والانتخابات وتأثير الحرب' : 'Ukraine Political System: Institutions, Elections & the Impact of War',
      cat: ar ? 'السياسة المقارنة · العلاقات الدولية' : 'COMPARATIVE POLITICS · IR',
      lang: 'ENGLISH', year: '2024',
      desc: ar
        ? 'تحليل شامل للنظام شبه الرئاسي الأوكراني، المؤسسات السياسية، المشهد الحزبي، المجتمع المدني، والتأثيرات العميقة للحرب الروسية على الشأن الداخلي الأوكراني.'
        : 'A comprehensive analysis of Ukraine\'s semi-presidential system, political institutions, party landscape, civil society, and the profound effects of the Russian war on Ukrainian internal affairs.',
      img: 'https://images.unsplash.com/photo-1585007600263-71228e40c8d1?q=80&w=800',
      cta: ar ? 'اقرأ البحث ←' : 'READ PAPER →',
      meta: ar ? 'بحث أكاديمي · إشراف د. دينا أسامة لطفي · قسم العلوم السياسية، جامعة القاهرة' : 'Academic Research · Dr. Dina Osama Lotfy · Dept. of Political Science, Cairo University',
      tabs: [
        { id: 'intro', label: 'INTRO', content: ar
          ? 'أوكرانيا — ثاني أكبر دول أوروبا مساحةً — تمثل نقطة تقاطع استراتيجية بين الشرق والغرب. دولة غنية بالموارد الطبيعية وتحتل موقعاً محورياً في الأمن الطاقوي الأوروبي، كانت منذ استقلالها عام 1991 ساحةً للصراع بين التوجهات الموالية لروسيا والتوجهات الأوروبية.'
          : 'Ukraine — Europe\'s second largest country — represents a strategic crossroads between East and West. Rich in natural resources and pivotal to European energy security, it has been a battleground since independence in 1991 between pro-Russian and pro-European orientations.' },
        { id: 'ch1', label: 'CH.1', content: ar
          ? 'المؤسسات السياسية: يقوم النظام الأوكراني على نموذج شبه رئاسي يجمع بين رئيس يُنتخب مباشرة لمدة خمس سنوات، وبرلمان أحادي (الرادا الفرخوفنا) من 450 نائباً، ومجلس وزراء. المحكمة الدستورية تُعدّ الحارسة الدستورية، والمحكمة العليا المُعاد هيكلتها في 2016 تُشكّل قمة السلطة القضائية. هذا النظام يتسم بتوترات مستمرة بين السلطتين التنفيذية والتشريعية.'
          : 'Political Institutions: Ukraine operates a semi-presidential system combining a directly elected president (5-year terms), a unicameral Verkhovna Rada (450 deputies), and a Cabinet of Ministers. The Constitutional Court serves as the constitutional guardian, while the restructured Supreme Court (2016) forms the judiciary\'s apex. This system is marked by continuous tensions between executive and legislative branches.' },
        { id: 'ch2', label: 'CH.2', content: ar
          ? 'النظام الحزبي: شهدت أوكرانيا تحولاً جذرياً في مشهدها الحزبي بعد 2014. حركة الميدان أسقطت يانوكوفيتش وفتحت المجال أمام الأحزاب الموالية لأوروبا كـ"التضامن الأوروبي" بقيادة بوروشينكو و"خادم الشعب" بقيادة زيلينسكي. في المقابل، باتت الأحزاب الموالية لروسيا كـ"منصة المعارضة - من أجل الحياة" تحت الحظر بعد 2022.'
          : 'Party System: Ukraine\'s party landscape underwent a radical transformation post-2014. The Maidan movement ousted Yanukovych, opening the field for pro-European parties like "European Solidarity" (Poroshenko) and "Servant of the People" (Zelensky). Pro-Russian parties like "Opposition Platform — For Life" were subsequently banned after 2022.' },
        { id: 'ch3', label: 'CH.3', content: ar
          ? 'النظام الانتخابي والمجتمع المدني: تعتمد أوكرانيا نظاماً انتخابياً مختلطاً — نصف المقاعد بالتمثيل النسبي والنصف الآخر بالدوائر الفردية. المجتمع المدني الأوكراني برز قوةً ديمقراطية فاعلة في مراقبة الحكومة ومكافحة الفساد، وكان محركاً رئيسياً لانتفاضة الميدان 2014.'
          : 'Electoral System & Civil Society: Ukraine uses a mixed electoral system — half seats by proportional representation, half by single-member districts. Ukrainian civil society emerged as a powerful democratic force in government oversight and anti-corruption efforts, and was a key driver of the 2014 Maidan uprising.' },
        { id: 'ch4', label: 'CH.4', content: ar
          ? 'تأثير الحرب الروسية الأوكرانية: الغزو الروسي في فبراير 2022 أحدث تحولات جذرية في الداخل الأوكراني. سياسياً: وحّد المجتمع الأوكراني (91% يؤيدون عضوية الاتحاد الأوروبي). اقتصادياً: انخفض الناتج المحلي 29.1% عام 2022. هوياتياً: عزّزت الحرب الهوية الأوكرانية ومحت الانقسامات اللغوية والإقليمية.'
          : 'Impact of the Russia-Ukraine War: The February 2022 invasion triggered seismic domestic transformations. Politically: united Ukrainian society (91% now support EU membership). Economically: GDP fell 29.1% in 2022. Identity-wise: the war reinforced Ukrainian national identity and erased linguistic and regional divisions.' },
        { id: 'con', label: 'CON', content: ar
          ? 'الخاتمة: النظام السياسي الأوكراني يعكس توازناً دقيقاً بين السلطات في إطار شبه رئاسي. الحرب حوّلت أوكرانيا من ساحة للتجاذب الجيوسياسي إلى شريك استراتيجي راسخ للغرب، مع تحديات اقتصادية جسيمة تواجهها بدعم أمريكي وأوروبي.'
          : 'Conclusion: Ukraine\'s political system reflects a delicate balance of powers within a semi-presidential framework. The war transformed Ukraine from a geopolitical battleground into a firm Western strategic partner, while facing severe economic challenges sustained by American and European support.' },
      ]
    },
    {
      title: ar ? 'المدينة الفاضلة مقابل الدولة الرشيدة: دراسة مقارنة بين أفلاطون والماوردي' : 'The Ideal City vs. The Rational State: A Comparative Study of Plato & Al-Mawardi',
      cat: ar ? 'الفكر السياسي · الفلسفة' : 'POLITICAL THOUGHT · PHILOSOPHY',
      lang: 'ARABIC', year: '2024',
      desc: ar
        ? 'دراسة مقارنة تتناول مفهوم العدالة، ونظام الحكم المثالي، والنظام الاقتصادي عند أفلاطون في جمهوريته والماوردي في أحكامه السلطانية، مع تقييم قابلية تطبيق أفكارهم في السياق المعاصر.'
        : 'A comparative study examining the concept of justice, ideal governance, and economic systems in Plato\'s Republic and Al-Mawardi\'s Al-Ahkam al-Sultaniyya, evaluating their applicability in contemporary context.',
      img: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=800',
      cta: ar ? 'اقرأ البحث ←' : 'READ PAPER →',
      meta: ar ? 'بحث أكاديمي · 5050 كلمة · إشراف د. إبراهيم فوزي & د. فرح شوقي' : 'Academic Research · 5050 words · Dr. Ibrahim Fawzy & Dr. Farah Shawqi',
      tabs: [
        { id: 'intro', label: 'INTRO', content: ar
          ? 'يسعى البحث إلى مقارنة فكرية بين أفلاطون (428 ق.م) والماوردي (972م) — الأول فيلسوف يوناني تأثر بإعدام سقراط وأسّس الأكاديمية، والثاني فقيه إسلامي شغل منصب قاضي القضاة وتأثر بضعف الخلافة العباسية — من خلال مفهوم العدالة ونموذج الدولة المثالية ونظام الحكم والاقتصاد.'
          : 'This study draws an intellectual comparison between Plato (428 BC) and Al-Mawardi (972 AD) — the former a Greek philosopher influenced by Socrates\' execution who founded the Academy, the latter an Islamic jurist who served as Chief Justice influenced by Abbasid Caliphate weakness — through the concepts of justice, ideal state, governance and economy.' },
        { id: 'ch1', label: 'CH.1', content: ar
          ? 'مفهوم العدالة: عند أفلاطون، العدالة هي التناغم بين طبقات المجتمع الثلاث (الحكام، المحاربون، المنتجون) حيث يؤدي كل فرد دوره دون تداخل. وعند الماوردي، العدالة هي التزام الحاكم بتطبيق الشريعة وتحقيق المساواة بين الرعية. كلاهما يرى العدالة ركيزة الاستقرار، غير أن أفلاطون يُؤسّسها على الفلسفة والعقل، فيما يُؤسّسها الماوردي على الشرع الإلهي.'
          : 'Justice: For Plato, justice is harmony among society\'s three classes (rulers, warriors, producers), each performing their role without interference. For Al-Mawardi, justice is the ruler\'s commitment to applying Sharia and equality among citizens. Both see justice as the pillar of stability, yet Plato grounds it in philosophy and reason, while Al-Mawardi grounds it in divine law.' },
        { id: 'ch2', label: 'CH.2', content: ar
          ? 'المدينة الفاضلة مقابل الدولة الرشيدة: أفلاطون يقسم المجتمع إلى ثلاث طبقات ثابتة، والفلاسفة يحكمون لحكمتهم — نموذج مغلق نسبياً. الماوردي يرفض التقسيم الطبقي ويركز على الخليفة العادل مع مبدأ الشورى كآلية رئيسية — نموذج أكثر مرونة وانفتاحاً على المشاركة. كلاهما يسعى لتحقيق العدالة والاستقرار لكن عبر مسارات مختلفة.'
          : 'Ideal City vs. Rational State: Plato divides society into three fixed classes, with philosopher-kings ruling by wisdom — a relatively closed model. Al-Mawardi rejects class division, focusing on the just caliph with Shura (consultation) as the primary mechanism — a more flexible, participatory model. Both seek justice and stability but through fundamentally different paths.' },
        { id: 'ch3', label: 'CH.3', content: ar
          ? 'نظام الحكم المثالي: عند أفلاطون، الحاكم المثالي هو الفيلسوف البعيد عن الأهواء. عند الماوردي، الخليفة يُشترط فيه العدل والقوة والإلمام بالشريعة وأن يكون من نسل قريش، ويختاره أهل الحل والعقد. في رأي الباحث، كلا النموذجين يفتقران إلى آليات رقابة كافية — فنظام الحاكم الفيلسوف قد يتحول إلى استبداد، وشروط الخلافة غير مرنة لواقع العصر الحديث.'
          : 'Ideal Governance: For Plato, the ideal ruler is the philosopher-king removed from passions. For Al-Mawardi, the Caliph must be just, powerful, versed in Sharia, and of Qurayshi lineage, chosen by ahl al-hall wal-aqd. The researcher argues both models lack adequate oversight mechanisms — the philosopher-king model risks autocracy, while caliphate conditions are too rigid for modern realities.' },
        { id: 'con', label: 'CON', content: ar
          ? 'الخاتمة: أفلاطون قدّم مثاليةً فلسفية صارمة تصعب تطبيقها في مجتمعات متعددة الثقافات، بينما قدّم الماوردي تصوراً أكثر عملية لكنه يحتاج إلى تحديث. البحث عن الدولة المثالية يتطلب مزيجاً من المبادئ القيمية والفهم الواقعي للتحولات الاجتماعية، مع استلهام من كلا التراثين للتعامل مع تحديات الحوكمة المعاصرة.'
          : 'Conclusion: Plato offered a rigorous philosophical idealism difficult to implement in multicultural societies, while Al-Mawardi presented a more pragmatic vision needing modernization. The search for an ideal state requires combining principled values with realistic understanding of social change, drawing from both traditions to address contemporary governance challenges.' },
      ]
    },
    {
      title: ar ? 'تأثير وسائل التواصل الاجتماعي في تشكيل الرأي العام: دراسة حالة القضية الفلسطينية' : 'Social Media\'s Impact on Public Opinion: A Case Study of the Palestinian Cause',
      cat: ar ? 'الإعلام السياسي · الرأي العام' : 'POLITICAL MEDIA · PUBLIC OPINION',
      lang: 'ARABIC', year: '2024',
      desc: ar
        ? 'دراسة ميدانية كمية ونوعية على عينة من 42 طالباً في جامعة القاهرة تكشف كيف أعادت المنصات الرقمية هندسة المجال العام وأثّرت على تشكيل الرأي العام السياسي تجاه القضية الفلسطينية.'
        : 'A quantitative and qualitative field study on 42 Cairo University students revealing how digital platforms re-engineered the public sphere and shaped political public opinion toward the Palestinian cause.',
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800',
      cta: ar ? 'اقرأ البحث ←' : 'READ PAPER →',
      meta: ar ? 'دراسة حالة · إشراف د. شريف عبد الرحمن & د. محمد أشرف رستم · 42 مشارك' : 'Case Study · Dr. Sherif Abdelrahman & Dr. Mohamed Ashraf Rostom · 42 participants',
      tabs: [
        { id: 'intro', label: 'INTRO', content: ar
          ? 'يشهد العالم تحولاً جذرياً في آليات تشكيل الرأي العام — أزاحت وسائل التواصل المؤسسات الإعالمية التقليدية عن موقعها المحتكر لصناعة الخبر. السؤال البحثي: ما هو تأثير استخدام وسائل التواصل الاجتماعي في توجيه الرأي العام تجاه الأحداث السياسية المتعلقة بالقضية الفلسطينية؟ يعتمد البحث على نظريتي المجال العام الافتراضي ودوامة الصمت لنويل-نيومان.'
          : 'The world is witnessing a radical transformation in public opinion formation — social media has displaced traditional media institutions from their monopoly on news production. Research question: What is the impact of social media use in shaping public opinion toward political events related to the Palestinian cause? The study relies on the Virtual Public Sphere and Spiral of Silence (Noelle-Neumann) theories.' },
        { id: 'ch1', label: 'CH.1', content: ar
          ? 'أنماط الاستخدام وخصائص العينة: عينة من 42 طالباً (52.4% إناث، 47.6% ذكور)، 78.57% في الفئة العمرية 21-23 سنة، 73.81% تخصص اقتصاد وعلوم سياسية. النتيجة الأبرز: وسائل التواصل الاجتماعي هي المصدر الأول للأخبار السياسية بنسبة 36.7%، متقدمةً على مواقع الأخبار (25.5%) والمصادر الأكاديمية (18.4%).'
          : 'Usage Patterns & Sample Characteristics: Sample of 42 students (52.4% female, 47.6% male), 78.57% aged 21-23, 73.81% studying Economics & Political Science. Key finding: Social media is the primary source of political news at 36.7%, ahead of news websites (25.5%) and academic sources (18.4%).' },
        { id: 'ch2', label: 'CH.2', content: ar
          ? 'التحليل الكمي لمقياس ليكرت: أعلى نسب الموافقة لـ"وسائل التواصل تلعب دوراً أساسياً في نشر الأخبار" (م=4.55) و"تساهم في تشكيل الرأي العام" (م=4.38). في المقابل، أدنى نسبة لـ"أعتبرها مصدراً موثوقاً" (م=2.40). تناقض لافت: الجمهور يُقرّ بتأثير المنصات لكنه يشك في موثوقيتها — إدراك للتأثير مع ضعف الثقة.'
          : 'Likert Scale Quantitative Analysis: Highest agreement for "social media plays a key role in news dissemination" (M=4.55) and "contributes to shaping public opinion" (M=4.38). Lowest for "I consider it a reliable source" (M=2.40). Notable paradox: audiences acknowledge platforms\' influence while doubting their reliability — awareness of impact with low trust.' },
        { id: 'ch3', label: 'CH.3', content: ar
          ? 'التحليل الموضوعي: 83.33% من المستجيبين يعتقدون أن المنصات تختار ما يظهر لهم لتوجيه رأيهم (وعي بالتأثير الخوارزمي). 59.52% تعرّضوا لمحتوى شعروا أنه يحاول التأثير على رأيهم السياسية. 54.76% يثقون بالمحتوى "أحياناً" فقط — ثقة مشروطة تعكس حالة من الحذر النقدي الصحي تجاه المحتوى الرقمي.'
          : 'Qualitative Analysis: 83.33% believe platforms select content to steer their opinions (algorithmic influence awareness). 59.52% encountered content attempting to influence their political opinion. 54.76% trust content only "sometimes" — conditional trust reflecting healthy critical caution toward digital content.' },
        { id: 'con', label: 'CON', content: ar
          ? 'الخاتمة: المنصات الرقمية ليست مجرد وسيط بل فاعل سياسي يُعيد هندسة المجال العام. يُقرّ الطلاب بتأثيرها في نشر الأخبار وتشكيل الرأي العام، لكنهم يشككون في موثوقيتها. وعيهم بالتأثير الخوارزمي يُشير إلى ثقافة إعلامية ناضجة، لكنها تحتاج إلى تعزيز مهارات التحقق ونقد المعلومات الرقمية.'
          : 'Conclusion: Digital platforms are not mere intermediaries but political actors re-engineering the public sphere. Students acknowledge their role in news dissemination and opinion shaping, but doubt their reliability. Their awareness of algorithmic influence suggests a maturing media literacy, yet one that needs reinforcement through fact-checking and digital critical thinking skills.' },
      ]
    },
    {
      title: ar ? 'رؤى نقدية للسلام العالمي في ضوء القضية الفلسطينية' : 'Critical Visions of Global Peace in Light of the Palestinian Issue',
      cat: ar ? 'دراسات السلام والصراع · رسالة تخرج' : 'PEACE STUDIES · DISSERTATION',
      lang: 'ARABIC', year: '2026',
      desc: ar
        ? 'رسالة تخرج قيد الإنجاز بإشراف د. سماح عبد الصبور — تحلل أطر السلام السائدة (الواقعية، الليبرالية، الماركسية) من منظور ما بعد الاستعمار، مستخدمةً القضية الفلسطينية نموذجاً بنيوياً يكشف حدود الليبرالية في بناء السلام.'
        : 'Graduation dissertation in progress, supervised by Dr. Samah Abd El-Sabour — critically analyses dominant peace frameworks (Realism, Liberalism, Marxism) through a post-colonial lens, using the Palestinian question as a structural case exposing the limits of liberal peacebuilding.',
      img: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800',
      cta: ar ? 'اقرأ البحث ←' : 'READ PAPER →',
      meta: ar ? 'رسالة تخرج · إشراف د. سماح عبد الصبور · جامعة القاهرة 2025–2026' : 'Graduation Dissertation · Supervised by Dr. Samah Abd El-Sabour · Cairo University 2025–2026',
      tabs: [
        { id: 'intro', label: 'INTRO', content: ar
          ? 'تنطلق الرسالة من إشكالية جوهرية: لماذا تفشل أطر السلام السائدة في معالجة حالات الظلم البنيوي؟ تتخذ من القضية الفلسطينية نموذجاً تحليلياً لاختبار هذه الأطر، موضحةً أن نظرية السلام السائدة تُهمّش منهجياً الإجحاف الهيكلي وتُبرّر الوضع الراهن بدلاً من تفكيكه.'
          : 'The dissertation departs from a core problematic: why do dominant peace frameworks systematically fail to address structural injustice? It employs the Palestinian question as an analytical case to test these frameworks, demonstrating that mainstream peace theory marginalises structural injustice and legitimises the status quo rather than dismantling it.' },
        { id: 'ch1', label: 'CH.1', content: ar
          ? 'الفصل الأول: يؤسّس الإطار المفاهيمي للدراسة من خلال مراجعة نقدية لنظريات السلام الثلاث الكبرى. الواقعية: تُرجئ السلام لما بعد توازن القوى، لكنها تُشرعن التفوق العسكري بما فيه ضد المقاومة. الليبرالية: تربط السلام بالديمقراطية والسوق، لكنها تتجاهل أن الاستعمار ذاته حمل راياتٍ ليبرالية. الماركسية: تُبرز الأبعاد الطبقية والاستغلالية، وهي الأقرب لكشف البنى الاستعمارية.'
          : 'Chapter One establishes the conceptual framework through a critical review of the three major peace theories. Realism defers peace to post-balance of power, yet legitimises military supremacy. Liberalism links peace to democracy and markets, yet ignores that colonialism itself marched under liberal banners. Marxism highlights class and exploitation dimensions — the closest to exposing colonial structures.' },
        { id: 'ch2', label: 'CH.2', content: ar
          ? 'الفصل الثاني: القضية الفلسطينية كنموذج بنيوي — يُظهر كيف أنتج مشروع الاستيطان الاستعماري الصهيوني واقعاً يتجاوز فاعلية آليات السلام الليبرالي (مفاوضات، دولتان، اتفاقيات أوسلو) بسبب عدم معالجتها لجذر الصراع: نزع الملكية والتهجير القسري المستمر. الأطر الثلاث بأشكال متفاوتة تُخفق في استيعاب هذا البُعد.'
          : 'Chapter Two treats the Palestinian question as a structural case — demonstrating how colonial settler-colonial dynamics exceed the effectiveness of liberal peace mechanisms (negotiations, two-state solution, Oslo Accords) by failing to address the root: ongoing dispossession and forced displacement. All three frameworks fail, in varying degrees, to grasp this dimension.' },
        { id: 'con', label: 'CON', content: ar
          ? 'الخاتمة: تُجادل الرسالة بأن أي إطار للسلام العادل يجب أن يُعالج المظالم التاريخية والهيكلية، ويتبنّى منظور ما بعد الاستعمار، ويضع حق تقرير المصير في صميمه. القضية الفلسطينية ليست استثناءً، بل هي المرآة التي تكشف القيود البنيوية لنظرية السلام الدولية في سياقات ما بعد الاستعمار.'
          : 'Conclusion: The dissertation argues that any framework for just peace must address historical and structural grievances, adopt post-colonial perspectives, and place self-determination at its core. The Palestinian question is not an exception — it is the mirror that reveals the structural limitations of international peace theory in post-colonial contexts.' },
      ]
    },
    {
      title: ar ? 'QualityLand — مشروع بحث وتحليل سياسي' : 'QualityLand — Political Research & Analysis Project',
      cat: ar ? 'الفلسفة السياسية · الحوكمة الرقمية' : 'POLITICAL PHILOSOPHY · DIGITAL GOVERNANCE',
      lang: 'ARABIC', year: '2025',
      desc: ar
        ? 'مشروع بحثي وتحليلي يستكشف موضوعات المجتمعات المُدارة خوارزمياً، والشرعية السياسية، وحوكمة الأنظمة الآلية من منظور الفلسفة السياسية، مدمجاً النظرية النقدية مع النقاشات المعاصرة حول السلطة التكنوسياسية.'
        : 'Research and analytical project exploring themes of algorithmically managed societies, political legitimacy, and the governance of automated systems through the lens of political philosophy — integrating critical theory with contemporary debates on digital governance and techno-political power.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
      cta: ar ? 'اقرأ البحث ←' : 'READ PAPER →',
      meta: ar ? 'مشروع بحثي · فلسفة سياسية تطبيقية · أغسطس 2025' : 'Research Project · Applied Political Philosophy · August 2025',
      tabs: [
        { id: 'intro', label: 'INTRO', content: ar
          ? 'يستلهم المشروع من رواية \"QualityLand\" الساخرة ليطرح أسئلة فلسفية عميقة: هل يمكن للأنظمة الخوارزمية أن تُعوّض عن الإرادة السياسية؟ ما حدود الشرعية في دولة تُدير خوارزمياتها كل قرار؟ وأين يقع الفرد أمام الآلة القارئة للبيانات؟'
          : 'Drawing from the satirical novel "QualityLand," the project raises deep philosophical questions: can algorithmic systems substitute political will? What are the limits of legitimacy in a state where algorithms manage every decision? And where does the individual stand before the data-reading machine?' },
        { id: 'ch1', label: 'ANALYSIS', content: ar
          ? 'التحليل: يستعين المشروع بالنظرية النقدية (هابرماس، فوكو) لتشريح مفهوم المراقبة الخوارزمية كآليةٍ لإعادة إنتاج السلطة. يُبيّن أن السلطة التكنوسياسية لا تعمل بالقسر بل بالتطبيع: حين تُقبل الخوارزمية بوصفها "موضوعية" يُصبح الطعن فيها فعلاً مضاداً للعقل لا السلطة. وهذا هو مكمن الخطر السياسي الأعمق.'
          : 'Analysis: The project employs critical theory (Habermas, Foucault) to dissect algorithmic surveillance as a mechanism for reproducing power. It demonstrates that techno-political power operates not through coercion but normalisation — when the algorithm is accepted as "objective," questioning it becomes an act against reason rather than authority. This is where the deepest political danger lies.' },
        { id: 'con', label: 'CON', content: ar
          ? 'الخاتمة: يخلص المشروع إلى أن التنظيم السياسي للذكاء الاصطناعي لا يحتاج فقط إلى أطر قانونية تقنية، بل إلى فلسفة سياسية جديدة تُعيد تعريف الشرعية، المسؤولية، والمشاركة الديمقراطية في عصر الأتمتة. القرار الخوارزمي لا يُلغي السياسة — بل يُخفيها.'
          : 'Conclusion: The project concludes that political regulation of AI requires not just technical legal frameworks, but a new political philosophy redefining legitimacy, accountability, and democratic participation in an age of automation. The algorithmic decision does not eliminate politics — it conceals it.' },
      ]
    },
    {
      title: ar ? 'وهم التفوق' : 'The Illusion of Excellence',
      cat: ar ? 'مقال رأي · الحياة الأكاديمية' : 'OPINION ARTICLE · ACADEMIC LIFE',
      lang: 'ARABIC', year: '2024',
      desc: ar
        ? 'مقال نقدي يتناول مظاهر الخلل في حفل تكريم "المتفوقين" بكلية الاقتصاد والعلوم السياسية — من غياب معايير واضحة للتكريم إلى التناقض بين تكريم الأنشطة والتفوق الأكاديمي، وصولاً إلى التساؤل عن مفهوم التفوق الحقيقي.'
        : 'A critical article examining the flaws in an "Excellence Day" ceremony at the Faculty of Economics and Political Science — from absent clear criteria to the contradiction between honoring activities vs. academic achievement, questioning what true excellence means.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800',
      cta: ar ? 'اقرأ المقال ←' : 'READ ARTICLE →',
      meta: ar ? 'مقال رأي · كتابة حرة · 2024' : 'Opinion Article · Free Writing · 2024',
      tabs: [
        { id: 'intro', label: 'INTRO', content: ar
          ? '"في يوم الاحتفال بالمتفوقين لم نحفل بالمتفوقين" — هكذا يستهل الكاتب مقالته بمفارقة صادمة. حين أخبره زميله (وهو من ضمن المُكرَّمين) بالحفل عبر أخبار متناقلة لا إعلان رسمياً، وحين لم يُعلَن عن معايير التكريم لطلابه، وحين غابت دعوات الأساتذة الذين يرغب المُكرَّمون في رؤيتهم — بدأت علامات الاستفهام تتراكم.'
          : '"On the day of honoring the excellent, we didn\'t truly honor the excellent" — the author opens with a striking paradox. When his classmate (among those honored) learned of the ceremony through word-of-mouth, not official announcement; when no criteria were disclosed; when professors students wanted present were never informed — the question marks began accumulating.' },
        { id: 'ch1', label: 'CH.1', content: ar
          ? 'إشكالية معايير التفوق: حصل الطلاب على "جائزة الدكتور فلان" دون أن يعرف أحد — لا الحضور ولا المُكرَّمون أنفسهم — على أيّ أساس مُنحت. هل كان المعدل؟ الالتزام؟ مساعدة الزملاء؟ ترشيح الأساتذة؟ هذا الغموض يُفقد التكريم قيمته ويجعل الطالب المُكرَّم في حيرة حقيقية: "ما الفرق بيني وبين زملائي؟ في أيّ ناحية تفوّقت؟"'
          : 'The Criteria Problem: Students received "Dr. X\'s Award" without anyone — neither attendees nor honorees themselves — knowing on what basis it was granted. Was it GPA? Commitment? Helping peers? Faculty nomination? This opacity strips the honor of its value and leaves the honored student genuinely confused: "What sets me apart? In what dimension did I excel?"' },
        { id: 'con', label: 'CON', content: ar
          ? 'الخاتمة: ما حفّز الكاتب فعلاً للكتابة كان تكريم الطالب الراحل معاذ — الذي وصفه كل من عرفه بالخير — حيث جلس أهله بين احتفالات وتصفيقات لساعات حتى النهاية، ليستلموا تكريم ولدهم آخراً. "ألا تضعون أنفسكم مكان هذا الأب وهذه الأم وتشعرون بحزنهم؟" — تفصيل صغير لكن له أثر عظيم في الإنسانية، تلك التفاصيل التي تكشف أن التفوق الحقيقي يكمن في الاهتمام بالإنسان.'
          : 'Conclusion: What truly prompted the author to write was the tribute to the late student Muadh — universally remembered with praise — whose family sat through hours of celebrations and applause until the very end to receive their son\'s posthumous honor. "Don\'t you put yourselves in this father and mother\'s place?" — a small detail with profound human weight, revealing that true excellence lies in caring for the human being.' },
      ]
    },
  ];
};

export default function Research({ lang }: { lang: Lang }) {
  const [selected, setSelected] = useState<Paper | null>(null);
  const [tab, setTab] = useState('intro');
  const items = papers(lang);
  const isAr = lang === 'ar';

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <h1 className="font-serif font-black text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 mb-4 leading-tight">
          {isAr ? 'الأبحاث والمنشورات' : 'Research & Publications'}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          {isAr ? 'اضغط على أي بحث لقراءته كاملاً.' : 'Click any paper to read it in full.'}
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((p, i) => (
          <article
            key={i}
            onClick={() => { setSelected(p); setTab('intro'); }}
            className="group flex flex-col bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/10"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={p.img} alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-3 start-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md">
                {p.year}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              {/* Language divider */}
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">{p.lang}</span>
              </div>

              {/* Category */}
              <p className="text-[11px] font-bold text-primary tracking-widest uppercase mb-3">{p.cat}</p>

              {/* Title */}
              <h3 className="font-serif text-[15px] font-bold text-slate-900 dark:text-slate-50 mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-3 flex-1">
                {p.title}
              </h3>

              {/* Desc */}
              <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-5">
                {p.desc}
              </p>

              {/* CTA */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <span className="text-[11px] font-bold text-primary tracking-widest uppercase transition-all group-hover:tracking-[0.2em]">
                  {p.cta}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-background-dark rounded-2xl w-full max-w-2xl max-h-[88vh] overflow-hidden shadow-2xl flex flex-col"
            style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-900 p-6 relative flex-shrink-0">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 end-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              >
                <X size={15} />
              </button>
              <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-3">{selected.cat}</p>
              <h2 className="font-serif text-xl font-bold text-white leading-snug pr-8">{selected.title}</h2>
              <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">{selected.meta}</p>
            </div>

            {/* Tabs */}
            <div className="bg-slate-800 flex overflow-x-auto border-b border-slate-700 flex-shrink-0 scrollbar-hide">
              {selected.tabs.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-5 py-3 text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
                    tab === t.id ? 'border-primary text-primary' : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-7">
              <p className="text-slate-700 dark:text-slate-300 leading-[1.9] text-[15px]">
                {selected.tabs.find(t => t.id === tab)?.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
