import { createStore } from "vuex";

export default createStore({
  state: {
    organizer: "Edward A",
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {},
  getters: {},
});
