<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { MenuItemsT } from "../../types/navMenuTypes";

const { t, locale } = useI18n();
const menuItems = ref<MenuItemsT>({
  home: {
    route: "/",
    routeLabel: "navigation.home",
  },
  cfds: {
    route: "/cfds",
    routeLabel: "navigation.cfds",
    children: {
      forex: {
        route: "/cfds/forex",
        routeLabel: "navigation.forex",
      },
      shares: {
        route: "/cfds/shares",
        routeLabel: "navigation.shares",
      },
      commodities: {
        route: "/cfds/commodities",
        routeLabel: "navigation.commodities",
      },
      indices: {
        route: "/cfds/indices",
        routeLabel: "navigation.indices",
      },
      cryptocurrencies: {
        route: "/cfds/cryptocurrencies",
        routeLabel: "navigation.cryptocurrencies",
      },
      etfs: {
        route: "/cfds/etfs",
        routeLabel: "navigation.etfs",
      },
    },
  },
  investing: {
    route: "/investing",
    routeLabel: "navigation.investing",
    children: {
      realShares: {
        route: "/investing/real-shares",
        routeLabel: "navigation.realShares",
      },
    },
  },
  tradingCenter: {
    route: "/trading-center",
    routeLabel: "navigation.tradingCenter",
    children: {
      tradingInfo: {
        route: "/trading-center/trading-info",
        routeLabel: "navigation.tradingInfo",
      },
      tradingConditions: {
        route: "/trading-center/trading-conditions",
        routeLabel: "navigation.tradingConditions",
      },
      accounts: {
        route: "/trading-center/accounts",
        routeLabel: "navigation.accounts",
      },
      professionalAccounts: {
        route: "/trading-center/professional-accounts",
        routeLabel: "navigation.professionalAccounts",
      },
      islamicAccounts: {
        route: "/trading-center/islamic-account",
        routeLabel: "navigation.islamicAccounts",
      },
      faq: {
        route: "/trading-center/faq",
        routeLabel: "navigation.faq",
      },
      educationDivider: {
        divider: true,
        route: "#",
        routeLabel: "navigation.educationDivider",
        class: "divider",
      },
      basicCourse: {
        route: "/trading-center/basic-course",
        routeLabel: "navigation.basicCourse",
      },
      inDepthCourses: {
        route: "/trading-center/in-depth-courses",
        routeLabel: "navigation.inDepthCourses",
      },
      eBook: {
        route: "/trading-center/e-book",
        routeLabel: "navigation.eBook",
      },
      glossary: {
        route: "/trading-center/glossary",
        routeLabel: "navigation.glossary",
      },
      webminars: {
        route: "/trading-center/webminars",
        routeLabel: "navigation.webminars",
      },
    },
  },
  tools: {
    route: "/tools",
    routeLabel: "navigation.tools",
    children: {
      digitalIdentityVerification: {
        route: "/tools/digital-identity-verification",
        routeLabel: "navigation.digitalIdentityVerification",
      },
      mt4: {
        route: "/tools/mt4",
        routeLabel: "navigation.mt4",
      },
      tradingCentralDivider: {
        divider: true,
        route: "#",
        routeLabel: "navigation.tradingCentralDivider",
        class: "divider",
      },
      tradingCentral: {
        route: "/tools/trading-central",
        routeLabel: "navigation.tradingCentral",
      },
      marketAnalysisDivider: {
        divider: true,
        route: "#",
        routeLabel: "navigation.marketAnalysisDivider",
        class: "divider",
      },
      marginCalculatorTool: {
        route: "/tools/margin-calculator-tool",
        routeLabel: "navigation.marginCalculatorTool",
      },
      economicCalendar: {
        route: "/tools/economic-calendar",
        routeLabel: "navigation.economicCalendar",
      },
      news: {
        route: "/tools/news",
        routeLabel: "navigation.news",
      },
      signals: {
        route: "/tools/signals",
        routeLabel: "navigation.signals",
      },
    },
  },
  company: {
    route: "/company",
    routeLabel: "navigation.company",
    children: {
      aboutUs: {
        route: "/company/about-us",
        routeLabel: "navigation.aboutUs",
      },
      whyFxoro: {
        route: "/company/why-fxoro",
        routeLabel: "navigation.whyFxoro",
      },
      affiliation: {
        route: "/company/affiliation",
        routeLabel: "navigation.affiliation",
      },
      events: {
        route: "/company/events",
        routeLabel: "navigation.events",
      },
      contactUs: {
        route: "/company/contact-us",
        routeLabel: "navigation.contactUs",
      },
      newsAndUpdates: {
        route: "/company/news-and-updates",
        routeLabel: "navigation.newsAndUpdates",
      },
      blog: {
        route: "/company/blog",
        routeLabel: "navigation.blog",
      },
    },
  },
  legal: {
    route: "/legal",
    routeLabel: "navigation.legal",
    children: {
      privacyAndSecurityPolicy: {
        route: "/legal/privacy-and-security-policy",
        routeLabel: "navigation.privacyAndSecurityPolicy",
      },
      termsOfUse: {
        route: "/legal/terms-of-use",
        routeLabel: "navigation.termsOfUse",
      },
      riskWarningNotice: {
        route: "/legal/risk-warning-notice",
        routeLabel: "navigation.riskWarningNotice",
      },
      regulations: {
        route: "/legal/regulations",
        routeLabel: "navigation.regulations",
      },
      termsAndConditions: {
        route: "#",
        routeLabel: "navigation.termsAndConditions",
      },
      conflictOfInterest: {
        route: "#",
        routeLabel: "navigation.conflictOfInterest",
      },
      supportingDocuments: {
        route: "/legal/supporting-documents",
        routeLabel: "navigation.supportingDocuments",
      },
      keyInformationDocumentKid: {
        route: "/legal/key-information-document-kid",
        routeLabel: "navigation.keyInformationDocumentKid",
      },
    },
  },
});

const localePath = useLocalePath();

const { width, height } = useWindowSize();

const isMobile = ref<boolean>(true);

watchEffect(() => {
  if (width.value >= 992) {
    isMobile.value = false;

    return;
  }
  isMobile.value = true;
});


const nuxtApp = useNuxtApp();
const loading = ref(true);
// nuxtApp.hook("page:start", () => {
//   console.log('start');
//   loading.value = true;
// });
nuxtApp.hook("page:finish", () => {
  console.log('end');
  loading.value = false;
});
</script>

<template>
  <header id="header" class="siteHeader">
    <a href="#mainContent" class="siteHeader__skipLink" :lang="locale">
      {{ t("header.a11y.skipToMainContent") }}
    </a>
    <div class="siteHeader__topHeader">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 siteHeader__topHeaderInner">
            <NuxtLink :to="localePath('/')" aria-label="Home">
              <nuxt-picture
                format="avif,webp"
                src="/images/logos/logo-white.png"
                class="siteHeader__logo"
                alt="Logo"
                width="137"
                height="55"
              />
            </NuxtLink>
            <!-- TODO put this on a service worker? -->
            <ClientOnly v-if="!loading">
              <template #fallback>
                <div class="fallbackMsg">
                  <Loader :loader="'oval'" />
                  {{ t("header.misc.loadingUserActions") }}
                </div>
              </template>
              <div class="siteHeader__userActions" v-if="!isMobile">
                <LangSwitcher id="HeaderLangSwitcher" />
                <div class="siteHeader__divider"></div>
                <SiteHeaderPhoneNo />
                <div class="siteHeader__divider"></div>
                <SiteLogin />
              </div>
              <MenuBurger v-else />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <MenuNavigation :menu-items="menuItems" />
  </header>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;
$menuBreakPoint: lg;

header#header.siteHeader {
  // position: sticky;
  // inset: 0;
  // z-index: 10;
  padding: 0;

  .siteHeader {
    &__skipLink {
      background-color: var(--clr-brandPrimaryColor);
      color: var(--clr-brandSecondaryColor);
      position: absolute;
      padding: 0.5rem 1.5rem;
      border-color: var(--clr-brandSecondaryColor);
      border-style: solid;
      border-width: 0 1px 1px;
      border-radius: 0 0 0.25rem 0.25rem;
      opacity: 0;
      z-index: 11;
      pointer-events: none;
      &:focus {
        pointer-events: all;
        opacity: 1;
      }
    }
    &__topHeaderInner,
    &__userActions {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &__topHeader {
      padding: 10px 0;
      position: relative;
      z-index: 10;

      background-color: var(--clr-brandPrimaryColor);
      color: var(--clr-white);

      @include mxns.mediamax($menuBreakPoint) {
        box-shadow: 0px 3px 7px -2px hsla(var(--clr-brandPrimaryColor-hue), var(--clr-brandPrimaryColor-saturation), var(--clr-brandPrimaryColor-lightness), 0.75);
      }
    }
    &__topHeaderInner {
      justify-content: space-between;
    }
    &__logo {
      max-height: 55px;
    }
    &__userActions {
      gap: 1rem;
    }
    &__divider {
      width: 1px;
      height: 30px;
      background-color: var(--clr-white);
    }
  }
}
</style>
