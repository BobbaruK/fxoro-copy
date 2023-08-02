import navigation_MS from "../translations/navigation/14.ms-MY.navigation";

import header_MS from "../translations/header/14.ms-MY.header";
import footer_MS from "../translations/footer/14.ms-MY.footer";

import privacyAndSecurityPolicy_Translation_MS from "../translations/pages/legal/privacy-and-security-policy/14.ms-MY.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_MS(),
    },
    header: {
      ...header_MS(),
    },
    footer: {
      ...footer_MS(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_MS(),
    },
  };
});
