// import { IOmdbResponse } from "./../models/IOmdbResponse";
// import { IMovieExt } from "../models/IMovieExt";
// import { get } from "./serviceBase";

import { restaurantID } from "../main";
import { Booking } from "../models/Booking";
import { CreateBooking } from "../models/CreateBooking";
import { get, post } from "./ServiceBase";

// const API_BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

// export const searchMovies = async (searchText: string) => {
//   const response = await get<IOmdbResponse>(API_BASE_URL + "s=" + searchText);
//   return response.data.Search;
// };

// export const getMoviesById = async (id: string) => {
//   const response = await get<IMovieExt>(API_BASE_URL + "i=" + id);
//   return response.data;
// };

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
