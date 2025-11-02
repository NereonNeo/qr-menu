import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { LocalStorageNames } from "../const/storage";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const apiInstance = axios.create({
  baseURL: "https://nest-chat-81rd.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(function (config: AdaptAxiosRequestConfig) {
  const token = window.localStorage.getItem(LocalStorageNames.Token);

  if (token) {
    if (config.headers) {
      config.headers.Authorization = token ? `Bearer ${token}` : "";
    }
  }

  return config;
});

export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  }).then((r) => r.data);
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
