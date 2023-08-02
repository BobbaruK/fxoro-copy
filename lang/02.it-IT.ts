import navigation_IT from "../translations/navigation/02.it-IT.navigation";

import header_IT from "../translations/header/02.it-IT.header";
import footer_IT from "../translations/footer/02.it-IT.footer";

import privacyAndSecurityPolicy_Translation_IT from "../translations/pages/legal/privacy-and-security-policy/02.it-IT.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_IT(),
    },
    header: {
      ...header_IT(),
    },
    footer: {
      ...footer_IT(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_IT(),
    },
  };
});
