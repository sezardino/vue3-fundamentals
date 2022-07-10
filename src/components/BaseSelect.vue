<template>
  <label v-if="label" :for="uuid">
    {{ label }}
  </label>
  <select
    class="field"
    v-bind="{
      ...$attrs,
      onChange: updateValue,
    }"
    :value="modelValue"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
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
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import SetupFormComponent from "@/helpers/SetupFormComponent";
import UniqueID from "@/helpers/uuid";
import BaseErrorMessage from "@/components/BaseErrorMessage.vue.vue";

export default {
  components: { BaseErrorMessage },
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();

    return {
      updateValue,
      uuid,
    };
  },
};
</script>
