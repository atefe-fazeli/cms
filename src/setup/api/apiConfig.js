import axios from "axios";
// import { toast } from "react-hot-toast";

export const productionMode = true;
export const baseURL = "http://178.239.151.223:8080"

export const APIFetch = () => {
  const api = axios.create({
    baseURL: baseURL,
  });

  const access_token = localStorage.getItem("_token");

  api.interceptors.request.use((req) => {
    if (access_token) {
      req.headers.Authorization = `Bearer ${access_token}`;
    }
    return req;
  });

  return api;
};
