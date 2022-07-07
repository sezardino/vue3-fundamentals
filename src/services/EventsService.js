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
  async getEvents(page, limit = 2) {
    const response = await axiosInstance.get(
      `/events?_limit=${limit}` + (page ? `&_page=${page}` : "")
    );
    return {
      data: response.data,
      totalPages: response.headers["x-total-count"] / limit,
    };
  },
  getEvent(id) {
    return axiosInstance.get(`/events/${id}`);
  },
};
