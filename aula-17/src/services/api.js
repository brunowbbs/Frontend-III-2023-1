import axios from "axios";

const api = axios.create({
  baseURL: "https://api-aluno.vercel.app",
});

export default api;
