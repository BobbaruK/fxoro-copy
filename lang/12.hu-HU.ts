import navigation_HU from "../translations/navigation/12.hu-HU.navigation";

import header_HU from "../translations/header/12.hu-HU.header";
import footer_HU from "../translations/footer/12.hu-HU.footer";

import privacyAndSecurityPolicy_Translation_HU from "../translations/pages/legal/privacy-and-security-policy/12.hu-HU.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_HU(),
    },
    header: {
      ...header_HU(),
    },
    footer: {
      ...footer_HU(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_HU(),
    },
  };
});
