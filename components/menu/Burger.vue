<script setup lang="ts">
import { watchOnce } from "@vueuse/core";

const mobileOpenTrigger = useMobileOpenTrigger();
const burgerMenu = ref<null | HTMLElement>(null);

watch(mobileOpenTrigger, () => {
  if (burgerMenu.value?.getAttribute("aria-expanded") === "false") {
    burgerMenu.value?.setAttribute("aria-expanded", "true");
    return;
  }

  burgerMenu.value?.setAttribute("aria-expanded", "false");
});

watchOnce(burgerMenu, () => {
  burgerMenu.value?.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    mobileOpenTrigger.value++;
  });
});
</script>

<template>
  <button
    class="menu-burger"
    @click="mobileOpenTrigger++"
    aria-labelledby="burgerMenuLabel"
    aria-expanded="false"
    ref="burgerMenu"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>

  <span class="sr-only" id="burgerMenuLabel"> Main Navigation</span>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

@layer components {
  .menu-burger {
    $menuBreakPoint: lg;

    align-items: flex-end;
    background-color: var(--clr-brandSecondaryColor);
    border-radius: var(--borderRadius);
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 40px;
    justify-content: space-around;
    padding: 8px;
    position: relative;
    width: 40px;
    z-index: 31;
    @include mxns.mediamin($menuBreakPoint) {
      display: none;
    }
    .bar {
      background-color: var(--clr-black);
      border-radius: 3px;
      height: 3px;
      width: 100%;
      transition: width 320ms ease-in-out;
      pointer-events: none;
      &:first-child {
      }
      &:nth-child(2) {
        width: 80%;
      }
      &:last-child {
        width: 50%;
      }
    }
    &.open {
      .bar {
        width: 100%;
      }
    }
  }
}
</style>
