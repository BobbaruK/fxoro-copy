import navigation_SV from "../translations/navigation/08.sv-SE.navigation";

import header_SV from "../translations/header/08.sv-SE.header";
import footer_SV from "../translations/footer/08.sv-SE.footer";

import privacyAndSecurityPolicy_Translation_SV from "../translations/pages/legal/privacy-and-security-policy/08.sv-SE.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_SV(),
    },
    header: {
      ...header_SV(),
    },
    footer: {
      ...footer_SV(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_SV(),
    },
  };
});
