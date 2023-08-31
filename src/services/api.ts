import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getToken } from "./token";

const BACKEND_URL = "https://free-to-play-games-database.p.rapidapi.com/api/";
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers["x-token"] = token;
    }

    return config;
  });
  return api;
};
