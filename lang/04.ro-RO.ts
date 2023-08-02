import navigation_RO from "../translations/navigation/04.ro-RO.navigation";

import header_RO from "../translations/header/04.ro-RO.header";
import footer_RO from "../translations/footer/04.ro-RO.footer";

import privacyAndSecurityPolicy_Translation_RO from "../translations/pages/legal/privacy-and-security-policy/04.ro-RO.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_RO(),
    },
    header: {
      ...header_RO(),
    },
    footer: {
      ...footer_RO(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_RO(),
    },
  };
});
