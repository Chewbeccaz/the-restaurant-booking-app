import axios from "axios";
import { CreateBooking } from "../models/CreateBooking";
import { UpdateBooking } from "../models/UpdateBooking";

export const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const post = async <T>(url: string, data: CreateBooking) => {
  return await axios.post<T>(url, data);
};

export const put = async <T>(url: string, data: UpdateBooking) => {
  return await axios.put<T>(url, data);
};
