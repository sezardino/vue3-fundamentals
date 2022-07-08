import { createStore } from "vuex";
import { v4 as uuidv4, v4 } from "uuid";

import EventService from "../services/EventService";

export default createStore({
  state: {
    organizer: "Edward A",
    events: [],
    event: null,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchEvent({ commit, state }, id) {
      const neededEvent = state.events.find((event) => event.id === id);

      if (neededEvent) {
        return commit("SET_EVENT", neededEvent);
      }

      return EventService.getEvent(id)
        .then((response) => commit("SET_EVENT", response.data))
        .catch((error) => {
          throw error;
        });
    },
    createEvent({ commit, state }, data) {
      const event = {
        ...data,
        id: v4(),
        organizer: state.organizer,
      };

      return EventService.addEvent(event)
        .then((response) => {
          commit("ADD_EVENT", response.data);
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  getters: {},
});
