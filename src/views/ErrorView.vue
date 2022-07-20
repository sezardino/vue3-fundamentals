<template>
  <div>
    <h1>{{ status }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  message: {
    type: String,
    default: "Page not found",
  },
  status: {
    type: Number,
    default: 404,
  },
});
</script>

<style scoped></style>
