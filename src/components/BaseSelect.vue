<template>
  <label v-if="label" :for="id">{{ label }}</label>
  <select
    v-bind="$attrs"
    :id="id"
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
  setup() {
    const id = uuid().getId();

    return { id };
  },
};
</script>
