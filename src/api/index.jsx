import axios from "axios";

const api = axios.create({
  baseURL: "https://weddingplannerbackend.onrender.com/api",
});
export default api;
