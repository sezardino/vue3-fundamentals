import Vue from "vue";
import VueRouter from "vue-router";
import EventsView from "../views/EventsView.vue";
import AboutView from "../views/AboutView.vue";
import EventView from "../views/EventView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "events",
    component: EventsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/events/:id",
    name: "event",
    component: EventView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
