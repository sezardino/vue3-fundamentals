<template>
  <div>
    <h1>Events For Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <router-link
          v-if="page !== 1"
          id="page-prev"
          :to="{ name: 'events', query: { page: page - 1 } }"
          rel="prev"
        >
          &#60; Previous
        </router-link>
        <router-link
          v-if="hasNextPage"
          id="page-next"
          :to="{ name: 'events', query: { page: page + 1 } }"
          rel="next"
        >
          Next &#62;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventsService from "@/services/EventsService";
import { watchEffect } from "vue";

export default {
  name: "EventsView",
  components: { EventCard },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  data() {
    return { events: null, totalPages: null };
  },
  created() {
    watchEffect(async () => {
      try {
        const response = await EventsService.getEvents(this.page);
        this.events = response.data;
        this.totalPages = response.totalPages;
      } catch (error) {
        console.log(error);
      }
    });
  },
  computed: {
    hasNextPage() {
      return this.page < this.totalPages;
    },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 0.5;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
  margin-right: auto;
}

#page-next {
  margin-left: auto;
  text-align: right;
}
</style>
