<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
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
    }
  },
};
</script>
