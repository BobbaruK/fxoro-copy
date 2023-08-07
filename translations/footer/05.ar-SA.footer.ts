const logoText = useLogoFXORO();
const footerPercent = useFooterPercent();

function footer_AR() {
  return {
    social: {
      followUsOn: "تابعنا على",
      getOurApp: "احصل على تطبيقنا",
      getOurAppFromApple: `احصل على تطبيقنا من <span lang="en">Apple Store</span>`,
      getOurAppFromGoogle: `احصل على تطبيقنا من <span lang="en">متجر Google Play</span>`,
    },
    disclaimer: {
      para1: `هذا الموقع الإلكتروني تحت إشراف MCA Intelifunds Ltd ويتم التداول به باسم ${logoText.value}.`,
      para2: `MCA INTELIFUNDS LTD هي شركة خدمات مالية مسجلة ومرخصة بموجب قوانين جمهورية قبرص، وتحت رقم الترخيص 126/10 من قبل لجنة الأوراق المالية والبورصة في قبرص (CySEC).`,
      para3: `العنوان: بيترو تسيرو 82، ميسا جيتونيا، 3076، ليماسول، قبرص.`,
      para4: `يتم حفظ أموال العملاء في حسابات منفصلة ومؤمَّنة من خلال صناديق تعويض العملاء وفقًا للشروط المؤهلة.`,
      para5: `<u>إخلاء المسؤولية بشأن المخاطر</u>`,
      para6: `العقود مقابل الفروقات (CFDs) هي أدوات معقدة وتأتي مع مخاطر عالية للخسارة السريعة بسبب التداول بالرافعة المالية. يخسر حوالي <strong>${footerPercent.value}% من حسابات المستثمرين التجزئة أموالهم عند التداول بالعقود مقابل الفروقات مع هذا المزود</strong>. يجب أن تُنظر في مدى فهمك لكيفية عمل العقود مقابل الفروقات وما إذا كنت تستطيع تحمل مخاطر الخسارة العالية لأموالك.`,
      para7: `قد قررت الهيئة الوطنية لأسواق الأوراق المالية في إسبانيا (CNMV) أن شراء مثل هذا المنتج من قبل العملاء التجزئة غير مناسب/مناسب بسبب تعقيد عقود مقابل الفروقات والمخاطر المرتبطة بها. في هذا الصدد، وبموجب المتطلبات ذات الصلة التي أُدخلتها CNMV، يتم تحذيرك من أنك على وشك شراء منتج معقد وصعب الفهم: عقود مقابل الفروقات (CFDs). قررت CNMV أن شراء هذا المنتج من قبل المستثمرين التجزئة غير مناسب/مناسب بسبب تعقيداته والمخاطر المرتبطة به.`,
      para8: {
        para: `نظرًا لذلك، قد لا تكون عقود مقابل الفروقات استثمارًا مثاليًا للجميع. يمكن أن تكون الرافعة المالية العالية المتاحة للمتداولين في عقود مقابل الفروقات ذات تأثير إيجابي أو سلبي عليك. يجب عليك أن تستثمر فقط المال الذي تستطيع تحمل خسارته. عقود مقابل الفروقات هي أصول مالية معقدة وذات رافعة مالية. تداول الفوركس، السلع، المؤشرات، وأسهم عقود مقابل الفروقات، أو أي أدوات أخرى تتأثر بالشركة، ينطوي على درجة عالية من المخاطر وقد يؤدي إلى خسارة استثمارك. قبل الانخراط في التداول، انظر إلى أهدافك المالية ومهاراتك وقيّم المخاطر المحتملة المرتبطة بتداول منتجات الشركة. يمكن أن تُظهر الأصول المشتقة مثل عقود مقابل الفروقات وأدوات مشابهة من الأسواق الأخرى تقلبًا شديدًا. يمكن أن تتحول عقود مقابل الفروقات إلى أسعار بسرعة وقد تظهر تغييرات في ظروف السوق ناتجة عن حوادث غير متوقعة. لا يمكن تلاعب بهذه الحقائق من قبلك أو {logoText}. من الأفضل استشارة مستشار مالي مرخص. {logoText} لا يُقدم نصائح مالية لعملائه والمعلومات المقدمة هنا هي لأغراض التسويق فقط. الأداء السابق لا يُعد مؤشرًا للنتائج المستقبلية. تأكد من قراءة {riskWarningPage} للحصول على صورة واضحة للمخاطر المترتبة على تداول منتجات الشركة.`,
        riskWarning: `تحذير المخاطر`,
      },
      para9: `MCA Intelifunds Limited لا تقدم عقودًا مقابل الفروقات للمقيمين في بعض الاختصاصات مثل الولايات المتحدة الأمريكية والجمهورية الإسلامية الإيرانية وكندا.`,
      para10: `جميع الحقوق محفوظة ${
        logoText.value
      } ${new Date().getFullYear()}`,
    },
  };
}

export default footer_AR;