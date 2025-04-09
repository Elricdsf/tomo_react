import { AxiosError } from "axios";
// axios error handler
export const handleAxiosError = (error: any, defaultMessage: string) => {
  const axiosError = error as AxiosError;
  return typeof axiosError.response?.data === "string"
    ? axiosError.response.data
    : axiosError.message || defaultMessage;
};
