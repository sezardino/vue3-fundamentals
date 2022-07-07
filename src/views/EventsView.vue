<template>
  <div>
    <h1>Events For Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventsService from "@/services/EventsService";

export default {
  name: "EventsView",
  components: { EventCard },
  data() {
    return { events: null };
  },
  async created() {
    try {
      const events = await EventsService.getEvents();
      this.events = events.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
