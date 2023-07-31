<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { MenuItemsT } from "../../types/navMenuTypes";

const { t, locale } = useI18n({
  useScope: "global",
  messages: {
    en: {
      skipToMainContent: "Skip to main content",
      loadingUserActions: "Loading user actions...",
    },
    it: {
      skipToMainContent: "Vai al contenuto principale",
      loadingUserActions: "Caricamento azioni utente...",
    },
    tr: {
      skipToMainContent: "Ana içeriğe atla",
      loadingUserActions: "Kullanıcı eylemleri yükleniyor...",
    },
    ro: {
      skipToMainContent: "Sari la conținutul principal",
      loadingUserActions: "Se încarcă acțiunile utilizatorului...",
    },
    ar: {
      skipToMainContent: "انتقل إلى المحتوى الرئيسي",
      loadingUserActions: "جاري تحميل إجراءات المستخدم...",
    },
    de: {
      skipToMainContent: "Zum Hauptinhalt springen",
      loadingUserActions: "Benutzeraktionen werden geladen...",
    },
    es: {
      skipToMainContent: "Ir al contenido principal",
      loadingUserActions: "Cargando acciones del usuario...",
    },
    sv: {
      skipToMainContent: "Hoppa till huvudinnehållet",
      loadingUserActions: "Laddar användaråtgärder...",
    },
    pt: {
      skipToMainContent: "Saltar para o conteúdo principal",
      loadingUserActions: "Carregando ações do usuário...",
    },
    fi: {
      skipToMainContent: "Siirry pääsisältöön",
      loadingUserActions: "Ladataan käyttäjän toimintoja...",
    },
    pl: {
      skipToMainContent: "Przejdź do głównej treści",
      loadingUserActions: "Ładowanie działań użytkownika...",
    },
    hu: {
      skipToMainContent: "Ugrás a fő tartalomra",
      loadingUserActions: "Felhasználói műveletek betöltése...",
    },
    th: {
      skipToMainContent: "ข้ามไปยังเนื้อหาหลัก",
      loadingUserActions: "กำลังโหลดการดำเนินการของผู้ใช้...",
    },
    ms: {
      skipToMainContent: "Langkau ke kandungan utama",
      loadingUserActions: "Memuatkan tindakan pengguna...",
    },
    vi: {
      skipToMainContent: "Chuyển đến nội dung chính",
      loadingUserActions: "Đang tải hành động người dùng...",
    },
  },
});

// {
//   en: "Profile";
//   it: "";
//   tr: "";
//   ro: "";
//   ar: "";
//   de: "";
//   es: "";
//   sv: "";
//   pt: "";
//   fi: "";
//   pl: "";
//   hu: "";
//   th: "";
//   ms: "";
//   vi: "";
// }
const menuItems = ref<MenuItemsT>({
  home: {
    route: "/",
    routeLabel: "home",
  },
  cfds: {
    route: "/cfds",
    routeLabel: "cfds",
    children: {
      forex: {
        route: "/cfds/forex",
        routeLabel: "forex",
      },
      shares: {
        route: "/cfds/shares",
        routeLabel: "shares",
      },
      commodities: {
        route: "/cfds/commodities",
        routeLabel: "commodities",
      },
      indices: {
        route: "/cfds/indices",
        routeLabel: "indices",
      },
      cryptocurrencies: {
        route: "/cfds/cryptocurrencies",
        routeLabel: "cryptocurrencies",
      },
      etfs: {
        route: "/cfds/etfs",
        routeLabel: "etfs",
      },
    },
  },
  investing: {
    route: "/investing",
    routeLabel: "investing",
    children: {
      realShares: {
        route: "/investing/real-shares",
        routeLabel: "realShares",
      },
    },
  },
  tradingCenter: {
    route: "/trading-center",
    routeLabel: "tradingCenter",
    children: {
      tradingInfo: {
        route: "/trading-center/trading-info",
        routeLabel: "tradingInfo",
      },
      tradingConditions: {
        route: "/trading-center/trading-conditions",
        routeLabel: "tradingConditions",
      },
      accounts: {
        route: "/trading-center/accounts",
        routeLabel: "accounts",
      },
      professionalAccounts: {
        route: "/trading-center/professional-accounts",
        routeLabel: "professionalAccounts",
      },
      islamicAccounts: {
        route: "/trading-center/islamic-account",
        routeLabel: "islamicAccounts",
      },
      faq: {
        route: "/trading-center/faq",
        routeLabel: "faq",
      },
      educationDivider: {
        divider: true,
        route: "#",
        routeLabel: "educationDivider",
        class: "divider",
      },
      basicCourse: {
        route: "/trading-center/basic-course",
        routeLabel: "basicCourse",
      },
      inDepthCourses: {
        route: "/trading-center/in-depth-courses",
        routeLabel: "inDepthCourses",
      },
      eBook: {
        route: "/trading-center/e-book",
        routeLabel: "eBook",
      },
      glossary: {
        route: "/trading-center/glossary",
        routeLabel: "glossary",
      },
      webminars: {
        route: "/trading-center/webminars",
        routeLabel: "webminars",
      },
    },
  },
  tools: {
    route: "/tools",
    routeLabel: "tools",
    children: {
      digitalIdentityVerification: {
        route: "/tools/digital-identity-verification",
        routeLabel: "digitalIdentityVerification",
      },
      mt4: {
        route: "/tools/mt4",
        routeLabel: "mt4",
      },
      tradingCentralDivider: {
        divider: true,
        route: "#",
        routeLabel: "tradingCentralDivider",
        class: "divider",
      },
      tradingCentral: {
        route: "/tools/trading-central",
        routeLabel: "tradingCentral",
      },
      marketAnalysisDivider: {
        divider: true,
        route: "#",
        routeLabel: "marketAnalysisDivider",
        class: "divider",
      },
      marginCalculatorTool: {
        route: "/tools/margin-calculator-tool",
        routeLabel: "marginCalculatorTool",
      },
      economicCalendar: {
        route: "/tools/economic-calendar",
        routeLabel: "economicCalendar",
      },
      news: {
        route: "/tools/news",
        routeLabel: "news",
      },
      signals: {
        route: "/tools/signals",
        routeLabel: "signals",
      },
    },
  },
  company: {
    route: "/company",
    routeLabel: "company",
    children: {
      aboutUs: {
        route: "/company/about-us",
        routeLabel: "aboutUs",
      },
      whyFxoro: {
        route: "/company/why-fxoro",
        routeLabel: "whyFxoro",
      },
      affiliation: {
        route: "/company/affiliation",
        routeLabel: "affiliation",
      },
      events: {
        route: "/company/events",
        routeLabel: "events",
      },
      contactUs: {
        route: "/company/contact-us",
        routeLabel: "contactUs",
      },
      newsAndUpdates: {
        route: "/company/news-and-updates",
        routeLabel: "newsAndUpdates",
      },
      blog: {
        route: "/company/blog",
        routeLabel: "blog",
      },
    },
  },
  legal: {
    route: "/legal",
    routeLabel: "legal",
    children: {
      privacyAndSecurityPolicy: {
        route: "/legal/privacy-and-security-policy",
        routeLabel: "privacyAndSecurityPolicy",
      },
      termsOfUse: {
        route: "/legal/terms-of-use",
        routeLabel: "termsOfUse",
      },
      riskWarningNotice: {
        route: "/legal/risk-warning-notice",
        routeLabel: "riskWarningNotice",
      },
      regulations: {
        route: "/legal/regulations",
        routeLabel: "regulations",
      },
      termsAndConditions: {
        route: "#",
        routeLabel: "termsAndConditions",
      },
      conflictOfInterest: {
        route: "#",
        routeLabel: "conflictOfInterest",
      },
      supportingDocuments: {
        route: "/legal/supporting-documents",
        routeLabel: "supportingDocuments",
      },
      keyInformationDocumentKid: {
        route: "/legal/key-information-document-kid",
        routeLabel: "keyInformationDocumentKid",
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
</script>

<template>
  <header id="header" class="siteHeader">
    <a href="#mainContent" class="siteHeader__skipLink" :lang="locale">
      {{ t("skipToMainContent") }}
    </a>
    <div class="siteHeader__topHeader">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 siteHeader__topHeaderInner">
            <NuxtLink :to="localePath('/')" aria-label="Home">
              <NuxtImg
                src="/images/logos/logo-white.webp"
                class="siteHeader__logo"
                alt="Logo"
                width="137"
                height="55"
              />
            </NuxtLink>
            <ClientOnly>
              <template #fallback>
                <!-- this will be rendered on server side -->
                <div class="fallbackMsg">
                  <Loader :loader="'oval'" />
                  {{ t("loadingUserActions") }}
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
  position: sticky;
  inset: 0;
  z-index: 10;
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
