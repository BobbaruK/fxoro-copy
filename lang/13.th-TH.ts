export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "หน้าหลัก",

    cfds: "CFDs",
    forex: "ฟอเร็กซ์",
    shares: "หุ้น",
    commodities: "สินค้า",
    indices: "ดัชนี",
    cryptocurrencies: "สกุลเงินดิจิตอล",
    etfs: "ETFs",

    investing: "การลงทุน",
    realShares: "หุ้นจริง",

    tradingCenter: "ศูนย์การเทรด",
    tradingInfo: "ข้อมูลการเทรด",
    tradingConditions: "เงื่อนไขการเทรด",
    accounts: "บัญชี",
    professionalAccounts: "บัญชีมืออาชีพ",
    islamicAccounts: "บัญชีอิสลาม",
    faq: "คำถามที่พบบ่อย",
    educationDivider: "การศึกษา",
    basicCourse: "คอร์สเบื้องต้น",
    inDepthCourses: "คอร์สลึกลึก",
    eBook: "หนังสืออิเล็กทรอนิกส์",
    glossary: "คำศัพท์",
    webminars: "เว็บมินาร์",

    tools: "เครื่องมือ",
    digitalIdentityVerification: "การยืนยันตัวตนดิจิตอล",
    mt4: "MT4",
    tradingCentralDivider: "ศูนย์การเทรด",
    tradingCentral: "ศูนย์การเทรด",
    marketAnalysisDivider: "การวิเคราะห์ตลาด",
    marginCalculatorTool: "เครื่องคำนวณมาร์จิ้น",
    economicCalendar: "ปฏิทินเศรษฐกิจ",
    news: "ข่าวสาร",
    signals: "สัญญาณ",

    company: "บริษัท",
    aboutUs: "เกี่ยวกับเรา",
    whyFxoro: "ทำไมต้อง FXORO",
    affiliation: "การเป็นสมาชิก",
    events: "กิจกรรม",
    contactUs: "ติดต่อเรา",
    newsAndUpdates: "ข่าวสารเกี่ยวกับเครื่องมือทางการเงิน",
    blog: "บล็อก",

    legal: "กฎหมาย",
    privacyAndSecurityPolicy: "นโยบายความเป็นส่วนตัวและความปลอดภัย",
    termsOfUse: "ข้อกำหนดการใช้งาน",
    riskWarningNotice: "ข้อแนะนำในการรับรู้ความเสี่ยง",
    regulations: "ข้อบังคับ",
    termsAndConditions: "เงื่อนไขและข้อตกลง",
    conflictOfInterest: "ความขัดแย้งทางด้านผลประโยชน์",
    supportingDocuments: "เอกสารสนับสนุน",
    keyInformationDocumentKid: "เอกสารข้อมูลสำคัญ (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
