<template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="email" />

    <BaseInput label="Password" type="password" />

    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: { BaseInput, BaseButton },
  setup() {
    function onSubmit() {
      alert("Submitted");
    }

    return {
      onSubmit,
    };
  },
};
</script>
