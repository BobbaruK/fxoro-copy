import navigation_PL from "../translations/navigation/11.pl-PL.navigation";

import header_PL from "../translations/header/11.pl-PL.header";
import footer_PL from "../translations/footer/11.pl-PL.footer";

import privacyAndSecurityPolicy_Translation_PL from "../translations/pages/legal/privacy-and-security-policy/11.pl-PL.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_PL(),
    },
    header: {
      ...header_PL(),
    },
    footer: {
      ...footer_PL(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_PL(),
    },
  };
});
