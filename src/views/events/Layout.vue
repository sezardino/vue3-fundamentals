<template>
  <div>
    <div v-if="event">
      <h1>{{ event.title }}</h1>
      <div id="nav">
        <router-link :to="{ name: 'DetailsView' }">Details</router-link>
        |
        <router-link :to="{ name: 'EditView' }">Register</router-link>
        |
        <router-link :to="{ name: 'RegisterView' }">Edit</router-link>
      </div>
      <router-view :event="event"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import EventsService from "@/services/EventsService";

export default {
  name: "EventView",
  data() {
    return { event: null };
  },
  async created() {
    try {
      const event = await EventsService.getEvent(this.$route.params.id);
      this.event = event.data;
    } catch (error) {
      console.log(error);
      this.$router.push("500");
    }
  },
};
</script>
