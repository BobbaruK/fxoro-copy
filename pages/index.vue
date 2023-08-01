<script setup lang="ts">
useSeoMeta({
  title: "Home Page",
  description:
    "Home Page - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
  ogTitle: "Home Page",
  ogDescription:
    "Home Page - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
  ogUrl: "http://localhost:3000/",
  twitterTitle: "Home Page",
  twitterDescription:
    "Home Page - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum saepe beatae sequi sed excepturi temporibus reiciendis unde veritatis veniam?",
});
useCheckLang();
</script>

<template>
  <div>
    <PageHomeSection1 />
    <PageHomeSection2 />
  </div>
</template>
