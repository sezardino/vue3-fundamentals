<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      label="Email"
      type="email"
      v-model="emailValue"
      :error="errorMessage"
    />

    <BaseInput label="Password" type="password" />

    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>

<script>
import { useField } from "vee-validate";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: { BaseInput, BaseButton },
  setup() {
    const emailValidator = (value) => {
      if (!value) return "Email is required";

      const emailRegexp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegexp.test(String(value).toLowerCase()))
        return "Please enter a valid email address";

      return true;
    };

    const { value: emailValue, errorMessage } = useField(
      "email",
      emailValidator
    );

    function onSubmit() {
      alert("Submitted");
    }

    return {
      onSubmit,
      emailValue,
      errorMessage,
    };
  },
};
</script>
