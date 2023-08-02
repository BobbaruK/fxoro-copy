import navigation_AR from "../translations/navigation/05.ar-SA.navigation";

import header_AR from "../translations/header/05.ar-SA.header";
import footer_AR from "../translations/footer/05.ar-SA.footer";

import privacyAndSecurityPolicy_Translation_AR from "../translations/pages/legal/privacy-and-security-policy/05.ar-SA.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_AR(),
    },
    header: {
      ...header_AR(),
    },
    footer: {
      ...footer_AR(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_AR(),
    },
  };
});
