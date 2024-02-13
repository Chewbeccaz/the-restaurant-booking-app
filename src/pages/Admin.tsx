import { useEffect, useState } from "react";
import axios from "axios";
import { Booking } from "../models/Booking";

//Rensa och lägg in anropen i Services sedan.

export const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

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
      <table className="bookings-table">
        <thead>
          <tr>
            <th>BokningsID</th>
            <th>Datum</th>
            <th>Tid</th>
            <th>Antal gäster</th>
            <th>Kund</th>
            <th>Ändra</th>
            <th>Radera</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking._id}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.numberOfGuests}</td>
              <td>{booking.customerId}</td>
              <td>
                <button>Ändra</button>
              </td>
              <td>
                <button>Radera</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
