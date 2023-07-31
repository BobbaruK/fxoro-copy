export default defineI18nLocale(async (locale) => {

  

  const navMenu = {
    home: "الرئيسية",

    cfds: "العقود مقابل الفروقات",
    forex: "الفوركس",
    shares: "الأسهم",
    commodities: "السلع",
    indices: "المؤشرات",
    cryptocurrencies: "العملات الرقمية",
    etfs: "صناديق المؤشرات المتداولة",

    investing: "الاستثمار",
    realShares: "الأسهم الحقيقية",

    tradingCenter: "مركز التداول",
    tradingInfo: "معلومات التداول",
    tradingConditions: "شروط التداول",
    accounts: "الحسابات",
    professionalAccounts: "حسابات احترافية",
    islamicAccounts: "حسابات إسلامية",
    faq: "الأسئلة الشائعة",
    educationDivider: "التعليم",
    basicCourse: "الدورة الأساسية",
    inDepthCourses: "الدورات المتقدمة",
    eBook: "الكتاب الإلكتروني",
    glossary: "معجم المصطلحات",
    webminars: "ندوات عبر الإنترنت",

    tools: "الأدوات",
    digitalIdentityVerification: "التحقق من الهوية الرقمية",
    mt4: "منصة التداول MT4",
    tradingCentralDivider: "التحليل التداولي",
    tradingCentral: "التحليل التداولي",
    marketAnalysisDivider: "تحليل السوق",
    marginCalculatorTool: "أداة حاسبة الهامش",
    economicCalendar: "التقويم الاقتصادي",
    news: "الأخبار",
    signals: "التوصيات",

    company: "الشركة",
    aboutUs: "معلومات عنا",
    whyFxoro: "لماذا FXORO",
    affiliation: "الانتساب",
    events: "الفعاليات",
    contactUs: "اتصل بنا",
    newsAndUpdates: "أخبار عن الأدوات المالية",
    blog: "المدونة",

    legal: "القانون والشروط",
    privacyAndSecurityPolicy: "سياسة الخصوصية والأمان",
    termsOfUse: "شروط الاستخدام",
    riskWarningNotice: "تحذير المخاطر",
    regulations: "التنظيمات",
    termsAndConditions: "الشروط والأحكام",
    conflictOfInterest: "صراع المصالح",
    supportingDocuments: "الوثائق الداعمة",
    keyInformationDocumentKid: "وثائق المعلومات الرئيسية (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
