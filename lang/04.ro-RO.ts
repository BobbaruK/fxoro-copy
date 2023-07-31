export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Acasă",

    cfds: "CFD-uri",
    forex: "Forex",
    shares: "Acțiuni",
    commodities: "Mărfuri",
    indices: "Indici",
    cryptocurrencies: "Criptomonede",
    etfs: "ETF-uri",

    investing: "Investiții",
    realShares: "Acțiuni reale",

    tradingCenter: "Centru de tranzacționare",
    tradingInfo: "Informații de tranzacționare",
    tradingConditions: "Condiții de tranzacționare",
    accounts: "Conturi",
    professionalAccounts: "Conturi profesionale",
    islamicAccounts: "Conturi islamice",
    faq: "Întrebări frecvente",
    educationDivider: "Educație",
    basicCourse: "Curs de bază",
    inDepthCourses: "Cursuri detaliate",
    eBook: "E-book",
    glossary: "Glosar",
    webminars: "Seminarii online",

    tools: "Instrumente",
    digitalIdentityVerification: "Verificare identitate digitală",
    mt4: "MT4",
    tradingCentralDivider: "Trading Central",
    tradingCentral: "Trading Central",
    marketAnalysisDivider: "Analiză de piață",
    marginCalculatorTool: "Calculator de marjă",
    economicCalendar: "Calendar economic",
    news: "Știri",
    signals: "Semnale",

    company: "Companie",
    aboutUs: "Despre noi",
    whyFxoro: "De ce FXORO",
    affiliation: "Afilieri",
    events: "Evenimente",
    contactUs: "Contactează-ne",
    newsAndUpdates: "Noutăți privind instrumentele financiare",
    blog: "Blog",

    legal: "Juridic",
    privacyAndSecurityPolicy: "Politica de confidențialitate și securitate",
    termsOfUse: "Termeni de utilizare",
    riskWarningNotice: "Avertisment privind riscul",
    regulations: "Reglementări",
    termsAndConditions: "Termeni și condiții",
    conflictOfInterest: "Conflict de interese",
    supportingDocuments: "Documente suport",
    keyInformationDocumentKid: "Documente cu informații-cheie (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
