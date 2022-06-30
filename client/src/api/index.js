import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
});
export default api;
