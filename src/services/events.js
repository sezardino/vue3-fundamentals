import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/sezardino/vue3-fundamentals",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default {
  getEvents() {
    return axiosInstance.get("/events");
  },
};
