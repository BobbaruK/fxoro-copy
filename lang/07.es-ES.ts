export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Inicio",

    cfds: "CFDs",
    forex: "Forex",
    shares: "Acciones",
    commodities: "Materias primas",
    indices: "Índices",
    cryptocurrencies: "Criptomonedas",
    etfs: "ETFs",

    investing: "Inversiones",
    realShares: "Acciones reales",

    tradingCenter: "Centro de trading",
    tradingInfo: "Información de trading",
    tradingConditions: "Condiciones de trading",
    accounts: "Cuentas",
    professionalAccounts: "Cuentas profesionales",
    islamicAccounts: "Cuentas islámicas",
    faq: "Preguntas frecuentes",
    educationDivider: "Educación",
    basicCourse: "Curso básico",
    inDepthCourses: "Cursos avanzados",
    eBook: "Libro electrónico",
    glossary: "Glosario",
    webminars: "Seminarios web",

    tools: "Herramientas",
    digitalIdentityVerification: "Verificación de identidad digital",
    mt4: "MT4",
    tradingCentralDivider: "Análisis de trading",
    tradingCentral: "Análisis de trading",
    marketAnalysisDivider: "Análisis de mercado",
    marginCalculatorTool: "Calculadora de margen",
    economicCalendar: "Calendario económico",
    news: "Noticias",
    signals: "Señales",

    company: "Compañía",
    aboutUs: "Acerca de nosotros",
    whyFxoro: "Por qué FXORO",
    affiliation: "Afiliación",
    events: "Eventos",
    contactUs: "Contáctenos",
    newsAndUpdates: "Noticias sobre instrumentos financieros",
    blog: "Blog",

    legal: "Legal",
    privacyAndSecurityPolicy: "Política de privacidad y seguridad",
    termsOfUse: "Términos de uso",
    riskWarningNotice: "Aviso de riesgo",
    regulations: "Regulaciones",
    termsAndConditions: "Términos y condiciones",
    conflictOfInterest: "Conflicto de intereses",
    supportingDocuments: "Documentos de soporte",
    keyInformationDocumentKid: "Documentos informativos clave (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
