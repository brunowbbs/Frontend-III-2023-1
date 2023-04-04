import axios from "axios";

const api = axios.create({
  baseURL: "https://api-products-dh-next.vercel.app/",
});

export default api;
