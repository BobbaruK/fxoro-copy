<script setup lang="ts">
// const error = useError();

const props = defineProps({
  error: Object,
});
const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

<template>
  <div>
    <h1>{{ error?.statusCode }}</h1>
    <p>{{ error?.message }}</p>
    <button @click="handleError">Go Home</button>
  </div>
</template>

<style scoped></style>
