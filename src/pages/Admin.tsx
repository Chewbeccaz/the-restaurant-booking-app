import { useEffect, useState } from "react";
import { BookingClass } from "../models/BookingClass";
import axios from "axios";

//Rensa och lägg in anropen i Services sedan.

export const Admin = () => {
  const [bookings, setBookings] = useState<BookingClass[]>([]);

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
          <li key={booking.id}>
            <div>
              <p>Booking ID: {booking.id}</p>
              <p>Datum: {booking.date}</p>
              <p>Tid: {booking.time}</p>
              <p>Antal personer: {booking.numberOfGuests}</p>
              <p>Customer: {booking.customer.name}</p>
              <p>Customer: {booking.customer.lastname}</p>
              <p>Customer: {booking.customer.email}</p>
              <p>Customer: {booking.customer.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
