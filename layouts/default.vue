<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLoadingIndicator :height="5" :color="'hsl(42, 100%, 50%)'" :throttle="0" />
    <SiteHeader />
    <main id="mainContent">
      <slot />
    </main>
    <LazySiteFooter />
  </div>
</template>

<style scoped></style>
