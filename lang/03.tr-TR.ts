import navigation_TR from "../translations/navigation/03.tr-TR.navigation";

import header_TR from "../translations/header/03.tr-TR.header";
import footer_TR from "../translations/footer/03.tr-TR.footer";

import privacyAndSecurityPolicy_Translation_TR from "../translations/pages/legal/privacy-and-security-policy/03.tr-TR.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_TR(),
    },
    header: {
      ...header_TR(),
    },
    footer: {
      ...footer_TR(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_TR(),
    },
  };
});
