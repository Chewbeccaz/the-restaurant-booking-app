import { useEffect, useState } from "react";
import axios from "axios";
import { FetchingBookings } from "../models/FetchingBookings";

//Rensa och lägg in anropen i Services sedan.

export const Admin = () => {
  const [bookings, setBookings] = useState<FetchingBookings[]>([]);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${
          import.meta.env.VITE_RESTURANTID
        }`
      );
      setBookings(response.data);
    } catch (error) {
      console.log("Error fetching bookings", error);
    }
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <>
      <h1>You're in admin.</h1>
      <h3>Please sign in.</h3>
      <h4>Here are the bookings:</h4>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <div>
              <p>Booking ID: {booking._id}</p>
              <p>Datum: {booking.date}</p>
              <p>Tid: {booking.time}</p>
              <p>Antal personer: {booking.numberOfGuests}</p>
              <p>Customer: {booking.customerId}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
