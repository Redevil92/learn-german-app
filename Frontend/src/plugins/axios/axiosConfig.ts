import axios from "axios";

const config = {
  baseURL: import.meta.env.VITE_BASE_PATH,
};

axios.create(config);
