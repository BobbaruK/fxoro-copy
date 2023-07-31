export default defineI18nLocale(async (locale) => {
  const navMenu = {
    home: "Trang chủ",

    cfds: "CFDs",
    forex: "Forex",
    shares: "Cổ phiếu",
    commodities: "Hàng hóa",
    indices: "Chỉ số",
    cryptocurrencies: "Tiền điện tử",
    etfs: "ETFs",

    investing: "Đầu tư",
    realShares: "Cổ phiếu thực tế",

    tradingCenter: "Trung tâm giao dịch",
    tradingInfo: "Thông tin giao dịch",
    tradingConditions: "Điều kiện giao dịch",
    accounts: "Tài khoản",
    professionalAccounts: "Tài khoản chuyên nghiệp",
    islamicAccounts: "Tài khoản Hồi giáo",
    faq: "Câu hỏi thường gặp",
    educationDivider: "Giáo dục",
    basicCourse: "Khóa học cơ bản",
    inDepthCourses: "Khóa học sâu hơn",
    eBook: "Sách điện tử",
    glossary: "Từ điển thuật ngữ",
    webminars: "Webminars",

    tools: "Công cụ",
    digitalIdentityVerification: "Xác minh danh tính số hóa",
    mt4: "MT4",
    tradingCentralDivider: "Trading Central",
    tradingCentral: "Trading Central",
    marketAnalysisDivider: "Phân tích thị trường",
    marginCalculatorTool: "Công cụ tính margin",
    economicCalendar: "Lịch kinh tế",
    news: "Tin tức",
    signals: "Tín hiệu",

    company: "Công ty",
    aboutUs: "Về chúng tôi",
    whyFxoro: "Tại sao chọn FXORO",
    affiliation: "Liên kết",
    events: "Sự kiện",
    contactUs: "Liên hệ chúng tôi",
    newsAndUpdates: "Tin tức về các công cụ tài chính",
    blog: "Blog",

    legal: "Pháp lý",
    privacyAndSecurityPolicy: "Chính sách bảo mật và riêng tư",
    termsOfUse: "Điều khoản sử dụng",
    riskWarningNotice: "Thông báo cảnh báo rủi ro",
    regulations: "Quy định",
    termsAndConditions: "Điều khoản và điều kiện",
    conflictOfInterest: "Xung đột lợi ích",
    supportingDocuments: "Các tài liệu hỗ trợ",
    keyInformationDocumentKid: "Tài liệu Thông tin chính (KIDs)",
  };

  const output = {
    ...navMenu,
  };

  return output;
});
