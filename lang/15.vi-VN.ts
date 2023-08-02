import navigation_VI from "../translations/navigation/15.vi-VN.navigation";

import header_VI from "../translations/header/15.vi-VN.header";
import footer_VI from "../translations/footer/15.vi-VN.footer";

import privacyAndSecurityPolicy_Translation_VI from "../translations/pages/legal/privacy-and-security-policy/15.vi-VN.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_VI(),
    },
    header: {
      ...header_VI(),
    },
    footer: {
      ...footer_VI(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_VI(),
    },
  };
});
