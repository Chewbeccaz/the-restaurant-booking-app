import { restaurantID } from "../main";
import { Booking } from "../models/Booking";
import { CreateBooking } from "../models/CreateBooking";
import { get, post, put } from "./ServiceBase";
import { UpdateBooking } from "../models/UpdateBooking";

const API_BASE_URL = "https://school-restaurant-api.azurewebsites.net/";

export const fetchBooking = async () => {
  try {
    console.log("funkar det?");
    const response = await get<Booking[]>(
      API_BASE_URL + "booking/restaurant/" + restaurantID
    );
    console.log("Funkar det 2?", response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching bookings", error);
  }
};

export const makeBooking = async (bookingData: CreateBooking) => {
  try {
    console.log("funkar det?");
    const response = await post<CreateBooking[]>(
      `${API_BASE_URL}booking/create`,
      bookingData
    );
    console.log("Funkar det 2?", response.data);
  } catch (error) {
    console.log("Error creating bookings", error);
  }
};

export const updateBooking = async (id: string, updateData: UpdateBooking) => {
  try {
    console.log("Funkar det?");
    const response = await put<UpdateBooking[]>(
      `${API_BASE_URL}booking/update/${id}`,
      updateData
    );
    console.log("Funkar det 2?", response.data);
  } catch (error) {
    console.log("Error updating bookings", error);
  }
};
