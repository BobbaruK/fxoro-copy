// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // { rel: "dns-prefetch", href: `http://localhost:3000/` },
        // { rel: "preconnect", href: `http://localhost:3000/` },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/logos/logo-white.png`,
        },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: `/images/logos/logo-white.avif`,
        // },
        // {
        //   rel: "preload",
        //   as: "image",
        //   href: `/images/logos/logo-white.webp`,
        // },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/ar.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/de.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/en.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/es.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/fi.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/hu.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/it.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/ms.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/pl.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/pt.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/ro.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/sv.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/th.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/tr.svg`,
        },
        {
          rel: "preload",
          as: "image",
          href: `/images/flags/vi.svg`,
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: [
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
    // "@nuxtjs/google-fonts",
    "nuxt-purgecss",
    "nuxt-delay-hydration",
  ],
  devtools: { enabled: true },
  // css: [ "~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  image: {
    provider: "netlify",
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
    experimental: { jsTsFormatResource: true }, // so i can use defineI18nLocale in lang folder
    // precompile: { strictMessage: false }, // allow html tag into the translations: XSS vulnerability
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        dir: "ltr",
        file: "01.en-US.ts",
      },
      {
        code: "it",
        iso: "it-IT",
        name: "Italiano",
        dir: "ltr",
        file: "02.it-IT.ts",
      },
      {
        code: "tr",
        iso: "tr-TR",
        name: "Türkçe",
        dir: "ltr",
        file: "03.tr-TR.ts",
      },
      {
        code: "ro",
        iso: "ro-RO",
        name: "Română",
        dir: "ltr",
        file: "04.ro-RO.ts",
      },
      {
        code: "ar",
        iso: "ar-SA",
        name: "العربية",
        dir: "rtl",
        file: "05.ar-SA.ts",
      },
      {
        code: "de",
        iso: "de-DE",
        name: "Deutsch",
        dir: "ltr",
        file: "06.de-DE.ts",
      },
      {
        code: "es",
        iso: "es-ES",
        name: "Español",
        dir: "ltr",
        file: "07.es-ES.ts",
      },
      {
        code: "sv",
        iso: "sv-SE",
        name: "Svenska",
        dir: "ltr",
        file: "08.sv-SE.ts",
      },
      {
        code: "pt",
        iso: "pt-BR",
        name: "Português",
        dir: "ltr",
        file: "09.pt-BR.ts",
      },
      {
        code: "fi",
        iso: "fi-FI",
        name: "Suomi",
        dir: "ltr",
        file: "10.fi-FI.ts",
      },
      {
        code: "pl",
        iso: "pl-PL",
        name: "Polski",
        dir: "ltr",
        file: "11.pl-PL.ts",
      },
      {
        code: "hu",
        iso: "hu-HU",
        name: "Magyar",
        dir: "ltr",
        file: "12.hu-HU.ts",
      },
      {
        code: "th",
        iso: "th-TH",
        name: "ภาษาไทย",
        dir: "ltr",
        file: "13.th-TH.ts",
      },
      {
        code: "ms",
        iso: "ms-MY",
        name: "Bahasa Melayu",
        dir: "ltr",
        file: "14.ms-MY.ts",
      },
      {
        code: "vi",
        iso: "vi-VN",
        name: "Tiếng Việt",
        dir: "ltr",
        file: "15.vi-VN.ts",
      },
    ],
    lazy: true,
    langDir: "lang",
  },
  // googleFonts: {
  //   download: false,
  //   preconnect: true,
  //   display: "swap",
  //   families: {
  //     Montserrat: {
  //       wght: [300, 400, 600, 700],
  //     },
  //   },
  // },
  purgecss: {
    // TODO: maybe remove this bc it purge the hover styles
    // enabled: true, // Always enable purgecss
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // debug: process.env.NODE_ENV === "development",
    debug: false,
    mode: "init",
  },
});
