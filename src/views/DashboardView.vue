<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>Loading events</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EventCard from "@/components/EventCard.vue";

const isLoading = ref(true);
const events = ref([]);
</script>
