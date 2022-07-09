<template>
  <input
    v-bind="$attrs"
    type="checkbox"
    :checked="modelValue"
    class="field"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
