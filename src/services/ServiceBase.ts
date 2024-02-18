import axios from "axios";
import { CreateBooking } from "../models/CreateBooking";

export const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

//Borde det vara en generell beskrivning, Object istället? Finns det andra tillfällen
// vi anropar som kan ställa till bekymmer?
export const post = async <T>(url: string, data: CreateBooking) => {
  return await axios.post<T>(url, data);
};

export const put = async <T>(url: string) => {
  return await axios.put<T>(url);
};
