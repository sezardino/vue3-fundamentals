<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <BaseSelect
        label="Select a category"
        v-model="event.category"
        :options="categories"
      />

      <h3>Name & describe your event</h3>

      <BaseInput
        v-model="event.title"
        label="Title"
        placeholder="Title"
        class="field"
      />

      <BaseInput
        v-model="event.description"
        label="Description"
        placeholder="Description"
        class="field"
      />

      <h3>Where is your event?</h3>

      <BaseInput
        v-model="event.location"
        label="Location"
        placeholder="Location"
        class="field"
      />

      {{ event }}

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup v-model="event.pets" :options="petsOptions" name="pets" />

      <h3>Extras</h3>
      <div>
        <BaseCheckbox
          label="Catering"
          v-model="event.extras.catering"
          class="field"
        />
      </div>

      <div>
        <BaseCheckbox
          label="Live Music"
          v-model="event.extras.music"
          class="field"
        />
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseRadioGroup from "./BaseRadioGroup.vue";

export default {
  components: { BaseInput, BaseSelect, BaseCheckbox, BaseRadioGroup },
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
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petsOptions: [
        { value: 1, label: "Yes" },
        { value: 0, label: "No" },
      ],
    };
  },
};
</script>
