import axios from "axios";
import { parseCookies } from "nookies";

export const authInstance = axios.create({
  baseURL: 'https://interview.t-alpha.com.br/api/',
})

export const instance = axios.create({
  baseURL: 'https://interview.t-alpha.com.br/api/',
})

authInstance.interceptors.request.use(
  async (config) => {
    const cookies = parseCookies();

    const token = JSON.parse(cookies.token);

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);