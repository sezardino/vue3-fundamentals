import Vue from "vue";
import VueRouter from "vue-router";
import EventsView from "../views/EventsView.vue";
import AboutView from "../views/AboutView.vue";
import EventView from "../views/EventView.vue";
import NotFoundView from "../views/NotFoundView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "events",
    component: EventsView,
    props: (route) => ({ page: Number(route.query.page).valueOf() || 1 }),
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
  {
    path: "*",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
