<template>
  <label v-if="label">{{ label }}</label>
  <select
    v-bind="$attrs"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
