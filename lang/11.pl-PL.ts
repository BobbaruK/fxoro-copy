export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Strona główna",

    cfds: "Kontrakty CFD",
    forex: "Forex",
    shares: "Akcje",
    commodities: "Surowce",
    indices: "Indeksy",
    cryptocurrencies: "Kryptowaluty",
    etfs: "ETF-y",

    investing: "Inwestowanie",
    realShares: "Prawdziwe akcje",

    tradingCenter: "Centrum handlowe",
    tradingInfo: "Informacje o handlu",
    tradingConditions: "Warunki handlowe",
    accounts: "Konta",
    professionalAccounts: "Konta dla profesjonalistów",
    islamicAccounts: "Konta islamskie",
    faq: "FAQ",
    educationDivider: "Edukacja",
    basicCourse: "Podstawowy kurs",
    inDepthCourses: "Zaawansowane kursy",
    eBook: "E-book",
    glossary: "Słownik",
    webminars: "Webinary",

    tools: "Narzędzia",
    digitalIdentityVerification: "Weryfikacja tożsamości cyfrowej",
    mt4: "MT4",
    tradingCentralDivider: "Centrum handlowe",
    tradingCentral: "Centrum handlowe",
    marketAnalysisDivider: "Analiza rynku",
    marginCalculatorTool: "Kalkulator marży",
    economicCalendar: "Kalendarz ekonomiczny",
    news: "Wiadomości",
    signals: "Sygnały",

    company: "Firma",
    aboutUs: "O nas",
    whyFxoro: "Dlaczego FXORO",
    affiliation: "Afiliacja",
    events: "Wydarzenia",
    contactUs: "Kontakt",
    newsAndUpdates: "Wiadomości o instrumentach finansowych",
    blog: "Blog",

    legal: "Prawne",
    privacyAndSecurityPolicy: "Polityka prywatności i bezpieczeństwa",
    termsOfUse: "Warunki korzystania",
    riskWarningNotice: "Ostrzeżenie o ryzyku",
    regulations: "Regulacje",
    termsAndConditions: "Warunki i zasady",
    conflictOfInterest: "Konflikt interesów",
    supportingDocuments: "Dokumenty wsparcia",
    keyInformationDocumentKid: "Kluczowe informacje (KID)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
