<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLoadingIndicator :height="15" :color="'red'" :throttle="0" />
    <SiteHeader />
    <main id="mainContent">
      <slot />
    </main>
    <LazySiteFooter />
  </div>
</template>

<style scoped></style>
