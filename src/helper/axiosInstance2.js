import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://doc-rajaee.ir/api/General/`,
  // withCredentials: true,
});

export default axiosInstance;
