<script setup lang="ts">
// TODO: make a composable
const url = useRequestURL();
const currentUrl = url.href; // https://example.com:3000/hello-world
const protocol = url.protocol; // https:
const host = url.host; // example.com:3000
const hostname = url.hostname; // example.com
const pathname = url.pathname; // /hello-world.

useSeoMeta({
  title: "FXORO Copy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
  ogTitle: "FXORO Copy",
  ogDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
  ogImage: "/ogImage.jpg",
  ogUrl: "",
  twitterTitle: "FXORO Copy",
  twitterDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
  twitterImage: "/twitterImage.jpg",
  twitterCard: "summary",
});

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/logos/logo-white.png`,
    },
    // {
    //   rel: "preload",
    //   as: "image",
    //   href: `${protocol}//${host}/images/logos/logo-white.avif`,
    // },
    // {
    //   rel: "preload",
    //   as: "image",
    //   href: `${protocol}//${host}/images/logos/logo-white.webp`,
    // },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/ar.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/de.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/en.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/es.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/fi.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/hu.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/it.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/ms.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/pl.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/pt.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/ro.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/sv.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/th.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/tr.svg`,
    },
    {
      rel: "preload",
      as: "image",
      href: `${protocol}//${host}/images/flags/vi.svg`,
    },
  ],
});

useCheckLang();

// TODO: work on page speed
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
// define layers here because if we define them in the file they will be scoped there
@layer reset;
@layer layout;
@layer base;
@layer components;
@layer utilities;

@layer reset {
  @import "./assets/scss/reset/index";
}

@layer layout {
  @import "./assets/scss/layout/index";
}

@layer base {
  @import "./assets/scss/base/index";
}

@layer components {
  @import "./assets/scss/components/index";
}

@layer utilities {
  @import "./assets/scss/utilities/index";
}

// body {
//   background-color: #fff;
// }

// html.dark-mode {
//   body {
//     background-color: black;
//     color: white;
//   }
// }

#__nuxt {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  position: relative;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
