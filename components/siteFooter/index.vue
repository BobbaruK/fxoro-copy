<script setup lang="ts">
import { MenuItemsT } from "../../types/navMenuTypes";

const localePath = useLocalePath();
const logoText = useLogoFXORO();

const { t, locale } = useI18n();

const menuItems = ref<MenuItemsT>({
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
      tradingCentral: {
        route: "/tools/trading-central",
        routeLabel: "navigation.tradingCentral",
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

const fbSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z'/%3E%3C/svg%3E")`;
const instagramSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z'/%3E%3C/svg%3E")`;
const twitterSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z'/%3E%3C/svg%3E")`;
const linkedInSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z'/%3E%3C/svg%3E")`;
const telegramSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z' fill='currentColor'/%3E%3C/svg%3E")`;
</script>

<template>
  <BackToTop />
  <SiteFooterTopStrip />
  <footer id="footer" class="siteFooter">
    <div class="siteFooter__navigation">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <nav>
              <ul class="siteFooter__navigationMenu">
                <li v-for="item in menuItems" :key="item.routeLabel">
                  <NuxtLink :to="localePath(item.route)">
                    <span v-html="t(item.routeLabel)" />
                  </NuxtLink>
                  <ul v-if="'children' in item">
                    <li
                      v-for="childItem in item.children"
                      :key="childItem.routeLabel"
                    >
                      <NuxtLink :to="localePath(childItem.route)">
                        <span v-html="t(childItem.routeLabel)" />
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__divider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__social">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 siteFooter__socialInner">
            <p v-html="t('footer.social.followUsOn')" />
            <div class="siteFooter__socials">
              <NuxtLink
                class="facebook"
                to="https://www.facebook.com/fxoro.official/"
                target="_blank"
                aria-labelledby="siteFooter__facebookLabel"
              >
                <span id="siteFooter__facebookLabel" class="sr-only">
                  Facebook
                </span>
                <SVGMask :svg-encoded="fbSVG" />
              </NuxtLink>
              <NuxtLink
                class="instagram"
                to="https://www.instagram.com/fxoroofficialpage/"
                target="_blank"
                aria-labelledby="siteFooter__instagramLabel"
              >
                <span id="siteFooter__instagramLabel" class="sr-only">
                  Instagram
                </span>
                <SVGMask :svg-encoded="instagramSVG" />
              </NuxtLink>
              <NuxtLink
                class="twitter"
                to="https://twitter.com/FXORO1"
                target="_blank"
                aria-labelledby="siteFooter__twitterLabel"
              >
                <span id="siteFooter__twitterLabel" class="sr-only">
                  Twitter
                </span>
                <SVGMask :svg-encoded="twitterSVG" />
              </NuxtLink>
              <NuxtLink
                class="linkedIn"
                to="https://www.linkedin.com/company/fxoro"
                target="_blank"
                aria-labelledby="siteFooter__linkedinLabel"
              >
                <span id="siteFooter__linkedinLabel" class="sr-only">
                  LinkedIn
                </span>
                <SVGMask :svg-encoded="linkedInSVG" />
              </NuxtLink>
              <NuxtLink
                class="telegram"
                to="https://t.me/fxoro_official"
                target="_blank"
                aria-labelledby="siteFooter__telegramLabel"
              >
                <span id="siteFooter__telegramLabel" class="sr-only">
                  Telegram
                </span>
                <SVGMask :svg-encoded="telegramSVG" />
              </NuxtLink>
            </div>
            <p v-html="t('footer.social.getOurApp')" />
            <div class="siteFooter__theApps">
              <div class="qr">
                <nuxt-picture
                  format="avif,webp"
                  loading="lazy"
                  src="/images/footer/social/qr-code.png"
                  alt="QR"
                  width="93"
                  height="93"
                />
              </div>
              <div class="google">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fxoro.app"
                  aria-labelledby="siteFooter__googlePlayLabel"
                >
                  <span
                    id="siteFooter__googlePlayLabel"
                    class="sr-only"
                    :lang="locale"
                    v-html="t('footer.social.getOurAppFromGoogle')"
                  />
                  <nuxt-picture
                    format="avif,webp"
                    loading="lazy"
                    src="/images/footer/social/google-play.png"
                    alt="Google Play"
                    width="120"
                    height="36"
                  />
                </a>
              </div>
              <div class="apple">
                <a
                  href="https://apps.apple.com/th/app/fxoro/id1579042568"
                  aria-labelledby="siteFooter__appleStoreLabel"
                >
                  <span
                    id="siteFooter__appleStoreLabel"
                    class="sr-only"
                    :lang="locale"
                    v-html="t('footer.social.getOurAppFromApple')"
                  />
                  <nuxt-picture
                    format="avif,webp"
                    loading="lazy"
                    src="/images/footer/social/apple-store.png"
                    alt="Apple Store"
                    width="120"
                    height="36"
                  />
                </a>
              </div>
            </div>
            <nuxt-picture
              format="avif,webp"
              loading="lazy"
              src="/images/footer/social/logo-diff.png"
              class="logo-diff"
              alt="Logo"
              width="213"
              height="140"
            />
            <nuxt-picture
              format="avif,webp"
              loading="lazy"
              src="/images/footer/social/logo-investing.png"
              class="logo-investing"
              alt="investing"
              width="200"
              height="57"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__divider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__brands">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 siteFooter__brandsInner">
            <nuxt-picture
              format="avif,webp"
              loading="lazy"
              src="/images/footer/brands/bita.png"
              alt="Bita"
              height="30"
              width="83"
              style="height: fit-content"
            />
            <nuxt-picture
              format="avif,webp"
              loading="lazy"
              src="/images/footer/brands/refinitiv.png"
              alt="REFINITIV"
              height="30"
              width="83"
              style="height: fit-content"
            />
            <nuxt-picture
              format="avif,webp"
              loading="lazy"
              src="/images/footer/brands/lseg.png"
              alt="LSEG"
              height="30"
              width="114"
              style="height: fit-content"
            />
            <nuxt-picture
              format="avif,webp"
              loading="lazy"
              src="/images/footer/brands/cboe.png"
              alt="Cboe"
              height="30"
              width="79"
              style="height: fit-content"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__divider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__disclaimer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <p v-html="t('footer.disclaimer.para1')" tabindex="0" />
            <p v-html="t('footer.disclaimer.para2')" tabindex="0" />
            <p v-html="t('footer.disclaimer.para3')" tabindex="0" />
            <p v-html="t('footer.disclaimer.para4')" tabindex="0" />
            <p v-html="t('footer.disclaimer.para5')" tabindex="0" />
            <p v-html="t('footer.disclaimer.para6')" tabindex="0" />
            <p v-html="t('footer.disclaimer.para7')" tabindex="0" />
            <i18n-t
              keypath="footer.disclaimer.para8.para"
              tag="p"
              scope="global"
              tabindex="0"
            >
              <template #logoText>
                <span v-html="logoText" />
              </template>
              <template #riskWarningPage>
                <NuxtLink :to="localePath('/legal/risk-warning-notice')">{{
                  t("footer.disclaimer.para8.riskWarning")
                }}</NuxtLink>
              </template>
            </i18n-t>
            <p v-html="t('footer.disclaimer.para9')" tabindex="0" />
            <p v-html="t('footer.disclaimer.para10')" tabindex="0" />
          </div>
        </div>
      </div>
    </div>
    <div class="siteFooter__credits">
      <SiteFooterCredits />
    </div>
  </footer>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

footer#footer {
  background-color: var(--clr-gray-900);
  color: var(--clr-white);
  z-index: 0;
}
.siteFooter {


  // Divider
  &__divider {
  }

  // Navigation
  &__navigation,
  &__social,
  &__brandsInner,
  &__disclaimer,
  &__credits {
    padding-block: calc(var(--spacing) / 2);
    a {
      color: var(--clr-brandSecondaryColor);
    }
  }
  &__navigation {
    padding-block-start: 0;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      a {
        color: var(--clr-white);
      }
    }
  }
  &__navigationMenu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    gap: 2rem;
    justify-content: space-between;
    > li > a {
      text-transform: uppercase;
    }
    ul {
      margin-block-start: 1rem;
      li {
        margin-block-end: 0.5rem;
        max-width: 25ch;
      }
    }
    a {
      &.router-link-active,
      &.router-link-exact-active {
        font-weight: bold;
      }
    }
  }

  // Social
  &__social {
  }
  &__socialInner {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 2rem;
    @include mxns.mediamin(md) {
      grid-template-columns: repeat(4, 1fr);
    }

    p {
      margin: 0;
      text-transform: uppercase;
      font-weight: bold;
    }

    .logo-diff,
    .logo-investing {
      grid-column-start: 1;
      grid-column-end: 3;
      align-self: center;
      justify-self: center;
    }

    .logo-diff {
      @include mxns.mediamin(sm) {
        grid-column-start: 1;
        grid-column-end: 2;
      }
      @include mxns.mediamin(md) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
      }
      @include mxns.mediamin(lg) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
      }
    }
    .logo-investing {
      @include mxns.mediamin(sm) {
        grid-column-start: 2;
        grid-column-end: 3;
      }
      @include mxns.mediamin(md) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 2;
      }
      @include mxns.mediamin(lg) {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 1;
      }
    }
  }
  &__socials {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: flex-start;
    a {
      color: var(--clr-white);
      font-size: 32px;
      &:hover {
        &.facebook {
          color: #3b5998;
        }
        &.instagram {
          color: #e1306c;
        }
        &.twitter {
          color: #55acee;
        }
        &.linkedIn {
          color: #0077b5;
        }
        &.telegram {
          color: #2fa6de;
        }
      }
    }
  }
  &__theApps {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    max-width: 240px;
    .qr {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }

  // Brands
  &__brands {
  }
  &__brandsInner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    gap: 2rem;
    max-width: none;
  }

  // Disclaimer
  &__disclaimer {
    --clr-brandPrimaryColor: var(--clr-white)

    padding-block-end: 0;
  }

  // Credits
  &__credits {
    font-size: 80%;
  }
}
</style>
