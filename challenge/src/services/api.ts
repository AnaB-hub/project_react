import axios from "axios";

const api = axios.create({
  baseURL: "https://countries-274616.ew.r.appspot.com",
});

export default api;
