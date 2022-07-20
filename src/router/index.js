import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Dashboard from "@/views/DashboardView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/:pathName()",
    name: "error",
    props: true,
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
