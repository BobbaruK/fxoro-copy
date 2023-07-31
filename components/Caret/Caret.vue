<script setup lang="ts">
import caretPropValidation from "./composables/caretPropValidation";

const props = defineProps({
  caret: {
    type: String,
    required: false,
    ...caretPropValidation(),
  },
});

const svgImagePath = ref("");

// Check caret type
switch (props.caret) {
  case "caret-down":
    // https://icones.js.org/collection/all?s=ion:caret-down
    svgImagePath.value = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='m98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62Z' /%3E%3C/svg%3E")`;
    break;

  case "caret-down-bold":
    // https://icones.js.org/collection/all?s=ph:caret-down-bold
    svgImagePath.value = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z'/%3E%3C/svg%3E")`;
    break;

  default:
    // https://icones.js.org/collection/all?s=ion:caret-down
    svgImagePath.value = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='m98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62Z' /%3E%3C/svg%3E")`;
    break;
}
</script>

<template>
  <SVGMask :svg-encoded="svgImagePath" class="caretWrapper" />
</template>

<style lang="scss"></style>
