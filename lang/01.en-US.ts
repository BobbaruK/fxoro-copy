export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Home",

    cfds: "CFDs",
    forex: "Forex",
    shares: "Shares",
    commodities: "Commodities",
    indices: "Indices",
    cryptocurrencies: "Cryptocurrencies",
    etfs: "ETFs",

    investing: "Investing",
    realShares: "Real shares",

    tradingCenter: "Trading center",
    tradingInfo: "Trading info",
    tradingConditions: "Trading Conditions",
    accounts: "Accounts",
    professionalAccounts: "Professional accounts",
    islamicAccounts: "Islamic accounts",
    faq: "FAQ",
    educationDivider: "Education",
    basicCourse: "Basic course",
    inDepthCourses: "In-depth courses",
    eBook: "E-book",
    glossary: "Glossary",
    webminars: "Webminars",

    tools: "Tools",
    digitalIdentityVerification: "Digital identity verification",
    mt4: "MT4",
    tradingCentralDivider: "Trading central",
    tradingCentral: "Trading central",
    marketAnalysisDivider: "Market analysis",
    marginCalculatorTool: "Margin calculator tool",
    economicCalendar: "Economic calendar",
    news: "News",
    signals: "Signals",

    company: "Company",
    aboutUs: "About us",
    whyFxoro: "Why FXORO",
    affiliation: "Affiliation",
    events: "Events",
    contactUs: "Contact us",
    newsAndUpdates: "News on financial instruments",
    blog: "Blog",

    legal: "Legal",
    privacyAndSecurityPolicy: "Privacy and security policy",
    termsOfUse: "Terms of use",
    riskWarningNotice: "Risk warning notice",
    regulations: "Regulations",
    termsAndConditions: "Terms and conditions",
    conflictOfInterest: "Conflict of interest",
    supportingDocuments: "Supporting documents",
    keyInformationDocumentKid: "Key Information Documents (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
