export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Laman Utama",

    cfds: "CFDs",
    forex: "Forex",
    shares: "Saham",
    commodities: "Komoditi",
    indices: "Indeks",
    cryptocurrencies: "Matawang Kripto",
    etfs: "ETFs",

    investing: "Pelaburan",
    realShares: "Saham Sebenar",

    tradingCenter: "Pusat Perdagangan",
    tradingInfo: "Maklumat Perdagangan",
    tradingConditions: "Syarat-syarat Perdagangan",
    accounts: "Akaun",
    professionalAccounts: "Akaun Profesional",
    islamicAccounts: "Akaun Islamik",
    faq: "Soalan Lazim",
    educationDivider: "Pendidikan",
    basicCourse: "Kursus Asas",
    inDepthCourses: "Kursus Mendalam",
    eBook: "E-buku",
    glossary: "Glosari",
    webminars: "Webminar",

    tools: "Alat",
    digitalIdentityVerification: "Pengesahan Identiti Digital",
    mt4: "MT4",
    tradingCentralDivider: "Trading Central",
    tradingCentral: "Trading Central",
    marketAnalysisDivider: "Analisis Pasaran",
    marginCalculatorTool: "Peralatan Pengiraan Margin",
    economicCalendar: "Kalendar Ekonomi",
    news: "Berita",
    signals: "Isyarat",

    company: "Syarikat",
    aboutUs: "Tentang Kami",
    whyFxoro: "Mengapa FXORO",
    affiliation: "Perhubungan",
    events: "Acara",
    contactUs: "Hubungi Kami",
    newsAndUpdates: "Berita tentang Instrumen Kewangan",
    blog: "Blog",

    legal: "Undang-undang",
    privacyAndSecurityPolicy: "Polisi Privasi dan Keselamatan",
    termsOfUse: "Syarat Penggunaan",
    riskWarningNotice: "Notis Peringatan Risiko",
    regulations: "Peraturan",
    termsAndConditions: "Terma dan Syarat",
    conflictOfInterest: "Konflik Kepentingan",
    supportingDocuments: "Dokumen Sokongan",
    keyInformationDocumentKid: "Dokumen Maklumat Utama (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
