import navigation_DE from "../translations/navigation/06.de-DE.navigation";

import header_DE from "../translations/header/06.de-DE.header";
import footer_DE from "../translations/footer/06.de-DE.footer";

import privacyAndSecurityPolicy_Translation_DE from "../translations/pages/legal/privacy-and-security-policy/06.de-DE.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_DE(),
    },
    header: {
      ...header_DE(),
    },
    footer: {
      ...footer_DE(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_DE(),
    },
  };
});
