<template>
  <input
    v-bind="$attrs"
    :id="id"
    type="checkbox"
    :checked="modelValue"
    class="field"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <label v-if="label" :for="id">{{ label }}</label>
</template>

<script lang="ts">
import { uuid } from "../helpers/uuid";

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
  setup() {
    const id = uuid().getId();

    return { id };
  },
};
</script>
