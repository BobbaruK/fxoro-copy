export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Koti",

    cfds: "CFD:t",
    forex: "Forex",
    shares: "Osakkeet",
    commodities: "Hyödykkeet",
    indices: "Indeksit",
    cryptocurrencies: "Kryptovaluutat",
    etfs: "ETF:t",

    investing: "Sijoittaminen",
    realShares: "Oikeat osakkeet",

    tradingCenter: "Kauppakeskus",
    tradingInfo: "Kaupankäyntitiedot",
    tradingConditions: "Kaupankäyntiehdot",
    accounts: "Tilit",
    professionalAccounts: "Ammattilaisille",
    islamicAccounts: "Islamilaiset tilit",
    faq: "UKK",
    educationDivider: "Koulutus",
    basicCourse: "Peruskurssi",
    inDepthCourses: "Syventävät kurssit",
    eBook: "E-kirja",
    glossary: "Sanasto",
    webminars: "Webinaarit",

    tools: "Työkalut",
    digitalIdentityVerification: "Digitaalinen henkilöllisyyden varmennus",
    mt4: "MT4",
    tradingCentralDivider: "Kauppakeskus",
    tradingCentral: "Kauppakeskus",
    marketAnalysisDivider: "Markkina-analyysi",
    marginCalculatorTool: "Vipuvaikutuslaskin",
    economicCalendar: "Taloudellinen kalenteri",
    news: "Uutiset",
    signals: "Signaalit",

    company: "Yritys",
    aboutUs: "Tietoja meistä",
    whyFxoro: "Miksi FXORO",
    affiliation: "Kumppanuus",
    events: "Tapahtumat",
    contactUs: "Ota yhteyttä",
    newsAndUpdates: "Uutisia rahoitusinstrumenteista",
    blog: "Blogi",

    legal: "Oikeudelliset",
    privacyAndSecurityPolicy: "Tietosuoja ja tietoturvakäytäntö",
    termsOfUse: "Käyttöehdot",
    riskWarningNotice: "Riskien varoitus",
    regulations: "Säädökset",
    termsAndConditions: "Ehdot ja edellytykset",
    conflictOfInterest: "Ristiriita etujen välillä",
    supportingDocuments: "Tukiasiakirjat",
    keyInformationDocumentKid: "Keskeisten tietojen asiakirjat (KID)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
