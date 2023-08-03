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
      href: `/images/logos/logo-white.png`,
      as: "image",
    },
    // {
    //   rel: "preload",
    //   href: `/images/logos/logo-white.avif`,
    //   as: "image",
    // },
    // {
    //   rel: "preload",
    //   href: `/images/logos/logo-white.webp`,
    //   as: "image",
    // },
    {
      rel: "preload",
      href: `/images/flags/ar.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/de.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/en.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/es.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/fi.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/hu.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/it.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/ms.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/pl.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/pt.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/ro.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/sv.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/th.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/tr.svg`,
      as: "image",
    },
    {
      rel: "preload",
      href: `/images/flags/vi.svg`,
      as: "image",
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
