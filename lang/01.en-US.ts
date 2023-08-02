import navigation_EN from "../translations/navigation/01.en-US.navigation";

import header_EN from "../translations/header/01.en-US.header";
import footer_EN from "../translations/footer/01.en-US.footer";

import privacyAndSecurityPolicy_Translation_EN from "../translations/pages/legal/privacy-and-security-policy/01.en-US.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_EN(),
    },
    header: {
      ...header_EN(),
    },
    footer: {
      ...footer_EN(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_EN(),
    },
  };
});
