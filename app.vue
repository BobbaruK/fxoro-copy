<script setup lang="ts">
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
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
  ],
});

useCheckLang();

// TODO: work on page speed
// TODO: reduce unused js in entry.*.js?
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
  @import "./assets/scss/reset/";
}

@layer layout {
  @import "./assets/scss/layout/";
}

@layer base {
  @import "./assets/scss/base/";
}

@layer components {
  @import "./assets/scss/components/";
}

@layer utilities {
  @import "./assets/scss/utilities/";
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
