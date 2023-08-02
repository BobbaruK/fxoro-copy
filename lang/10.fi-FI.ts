import navigation_FI from "../translations/navigation/10.fi-FI.navigation";

import header_FI from "../translations/header/10.fi-FI.header";
import footer_FI from "../translations/footer/10.fi-FI.footer";

import privacyAndSecurityPolicy_Translation_FI from "../translations/pages/legal/privacy-and-security-policy/10.fi-FI.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_FI(),
    },
    header: {
      ...header_FI(),
    },
    footer: {
      ...footer_FI(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_FI(),
    },
  };
});
