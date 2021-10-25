import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:11000/api/v1",
 });
 export default api;
