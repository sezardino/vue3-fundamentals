<template>
  <label v-if="label" :for="id">{{ label }}</label>

  <input
    v-bind="$attrs"
    :id="id"
    :type="$attrs.type || 'text'"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :aria-describedby="error ? `${id}-error` : null"
    :aria-invalid="error ? 'true' : null"
  />

  <p
    v-if="error"
    :id="`${id}-error`"
    class="error-message"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import { uuid } from "../helpers/uuid";

export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup() {
    const id = uuid().getId();

    return { id };
  },
};
</script>
