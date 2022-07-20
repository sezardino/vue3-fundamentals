import { axiosService } from "@/services";
import { createStore } from "vuex";

export default createStore({
  state: {
    events: [],
    user: null,
  },
  getters: {},
  mutations: {},
  actions: {
    async getEvents() {
      const response = await axiosService.get("/dashboard");
      console.log(response);
    },
  },
  modules: {},
});
