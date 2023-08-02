import navigation_ES from "../translations/navigation/07.es-ES.navigation";

import header_ES from "../translations/header/07.es-ES.header";
import footer_ES from "../translations/footer/07.es-ES.footer";

import privacyAndSecurityPolicy_Translation_ES from "../translations/pages/legal/privacy-and-security-policy/07.es-ES.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_ES(),
    },
    header: {
      ...header_ES(),
    },
    footer: {
      ...footer_ES(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_ES(),
    },
  };
});
