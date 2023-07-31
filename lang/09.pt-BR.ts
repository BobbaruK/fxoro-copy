export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Início",

    cfds: "CFDs",
    forex: "Forex",
    shares: "Ações",
    commodities: "Mercadorias",
    indices: "Índices",
    cryptocurrencies: "Criptomoedas",
    etfs: "ETFs",

    investing: "Investimento",
    realShares: "Ações reais",

    tradingCenter: "Centro de negociação",
    tradingInfo: "Informações de negociação",
    tradingConditions: "Condições de negociação",
    accounts: "Contas",
    professionalAccounts: "Contas profissionais",
    islamicAccounts: "Contas islâmicas",
    faq: "Perguntas frequentes",
    educationDivider: "Educação",
    basicCourse: "Curso básico",
    inDepthCourses: "Cursos avançados",
    eBook: "E-book",
    glossary: "Glossário",
    webminars: "Webinars",

    tools: "Ferramentas",
    digitalIdentityVerification: "Verificação de identidade digital",
    mt4: "MT4",
    tradingCentralDivider: "Central de negociação",
    tradingCentral: "Central de negociação",
    marketAnalysisDivider: "Análise de mercado",
    marginCalculatorTool: "Calculadora de margem",
    economicCalendar: "Calendário econômico",
    news: "Notícias",
    signals: "Sinais",

    company: "Empresa",
    aboutUs: "Sobre nós",
    whyFxoro: "Por que FXORO",
    affiliation: "Afiliação",
    events: "Eventos",
    contactUs: "Contate-nos",
    newsAndUpdates: "Notícias sobre instrumentos financeiros",
    blog: "Blog",

    legal: "Legal",
    privacyAndSecurityPolicy: "Política de privacidade e segurança",
    termsOfUse: "Termos de uso",
    riskWarningNotice: "Aviso de risco",
    regulations: "Regulamentos",
    termsAndConditions: "Termos e condições",
    conflictOfInterest: "Conflito de interesse",
    supportingDocuments: "Documentos de suporte",
    keyInformationDocumentKid: "Documentos de Informações Chave (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
