import navigation_TH from "../translations/navigation/13.th-TH.navigation";

import header_TH from "../translations/header/13.th-TH.header";
import footer_TH from "../translations/footer/13.th-TH.footer";

import privacyAndSecurityPolicy_Translation_TH from "../translations/pages/legal/privacy-and-security-policy/13.th-TH.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_TH(),
    },
    header: {
      ...header_TH(),
    },
    footer: {
      ...footer_TH(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_TH(),
    },
  };
});
