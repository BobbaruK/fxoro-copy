import navigation_PT from "../translations/navigation/09.pt-BR.navigation";

import header_PT from "../translations/header/09.pt-BR.header";
import footer_PT from "../translations/footer/09.pt-BR.footer";

import privacyAndSecurityPolicy_Translation_PT from "../translations/pages/legal/privacy-and-security-policy/09.pt-BR.privacy-and-security-policy";

export default defineI18nLocale(async (locale) => {
  return {
    navigation: {
      ...navigation_PT(),
    },
    header: {
      ...header_PT(),
    },
    footer: {
      ...footer_PT(),
    },
    privacyAndSecurityPolicy: {
      ...privacyAndSecurityPolicy_Translation_PT(),
    },
  };
});
