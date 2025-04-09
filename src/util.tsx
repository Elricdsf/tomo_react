import axios, { AxiosError } from "axios";
// axios error handler
export const handleAxiosError = (error: any, defaultMessage: string) => {
  const axiosError = error as AxiosError;
  return typeof axiosError.response?.data === "string"
    ? axiosError.response.data
    : axiosError.message || defaultMessage;
};

// add jwttoken
export const axiosInstanceWithUserToken = axios.create({
  baseURL: "https://localhost:5000/",
});
axiosInstanceWithUserToken.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
