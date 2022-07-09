<template>
  <component
    :is="isVertical ? 'div' : 'span'"
    v-for="option in options"
    :key="option.value"
    :class="{ horizontal: !isVertical }"
  >
    <BaseRadio
      :value="option.value"
      :label="option.label"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
import BaseRadio from "@/components/BaseRadio.vue";

export default {
  components: { BaseRadio },
  props: {
    isVertical: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.horizontal {
  margin-right: 10px;
}
</style>
