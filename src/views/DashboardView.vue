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
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const isLoading = ref(true);
const events = ref([]);

store
  .dispatch("getEvents")
  .then(() => {
    isLoading.value = false;
    events.value = store.state.events;
  })
  .catch((e) =>
    router.push({
      name: "error",
      params: { status: e.response.status, message: e.response.statusText },
    })
  );
</script>
