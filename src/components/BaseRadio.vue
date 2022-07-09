<template>
  <input
    v-bind="$attrs"
    :id="id"
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
  />
  <label v-if="label" :for="id">{{ label }}</label>
</template>

<script>
import { uuid } from "../helpers/uuid";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
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
