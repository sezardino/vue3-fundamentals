<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit="onSubmit">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="category"
        :error="errors.category"
      />

      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        v-model="title"
        type="text"
        :error="errors.title"
      />

      <BaseInput
        label="Description"
        v-model="description"
        :error="errors.description"
        type="text"
      />

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        v-model="location"
        :error="errors.location"
        type="text"
      />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="pets"
        name="pets"
        :options="[
          { value: 1, label: 'Yes' },
          { value: 0, label: 'No' },
        ]"
      />

      <template v-if="pets === 0">
        <h3>Are you sure? 🐶</h3>
        <BaseRadioGroup
          v-model="pets"
          name="pets"
          :options="[
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' },
          ]"
        />
      </template>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox label="Catering" v-model="catering" />
      </div>

      <div>
        <BaseCheckbox label="Live music" v-model="music" />
      </div>

      <div>
        <BaseButton type="submit" class="-fill-gradient" something="else">
          Submit
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import BaseInput from "@/components/BaseInput.vue";
import BaseRadioGroup from "@/components/BaseRadioGroup.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  components: {
    BaseInput,
    BaseRadioGroup,
    BaseCheckbox,
    BaseButton,
    BaseSelect,
  },
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
    };
  },
  setup() {
    const required = (value) => {
      if (!value) return "This field is required";

      if (String(value).length < 0) return "This field is required";

      return true;
    };

    const minLength = (min, value) => {
      if (String(value).length < min)
        return `This field must be at least ${min} characters long`;

      return true;
    };

    const validators = {
      category: undefined,
      title: (value) => {
        const req = required(value);
        if (req !== true) return req;

        const min = minLength(3, value);
        if (min !== true) return min;

        return true;
      },
      description: required,
      location: required,
      pets: undefined,
      catering: undefined,
      music: undefined,
    };

    const { errors, handleSubmit } = useForm({
      validationSchema: validators,
      initialValues: {
        title: "",
        category: "",
        description: "",
        location: "",
        pets: 1,
        catering: false,
        music: false,
      },
    });

    const { value: category } = useField("category");
    const { value: title } = useField("title");
    const { value: description } = useField("description");
    const { value: location } = useField("location");
    const { value: pets } = useField("pets");
    const { value: catering } = useField("catering");
    const { value: music } = useField("music");

    const onSubmit = handleSubmit((data) => {
      console.log(data);
    });

    return {
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      errors,
      onSubmit,
    };
  },
};
</script>
