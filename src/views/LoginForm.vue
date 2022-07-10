<template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="email" v-model="email" :error="emailError" />

    <BaseInput
      label="Password"
      type="password"
      v-model="password"
      :error="passwordError"
    />

    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>

<script>
import { useField, useForm } from "vee-validate";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: { BaseInput, BaseButton },
  setup() {
    const validators = {
      email: (value) => {
        if (!value) return "Email is required";

        const emailRegexp =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegexp.test(String(value).toLowerCase()))
          return "Please enter a valid email address";

        return true;
      },
      password: (value) => {
        const requiredMessage = "This field is required";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;

        return true;
      },
    };

    useForm({ validationSchema: validators });

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");

    function onSubmit() {
      alert("Submitted");
    }

    return {
      email,
      password,
      onSubmit,
      emailError,
      passwordError,
    };
  },
};
</script>
