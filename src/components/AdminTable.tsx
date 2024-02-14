import axios from "axios";
import { useState, useEffect } from "react";
import { Booking } from "../models/Booking";
import { AdminTableRow } from "./AdminTableRow";

export const AdminTable = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  //Rensa och lägg in anropen i Services sedan.

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
            <AdminTableRow key={booking._id} booking={booking} />
          ))}
        </tbody>
      </table>
    </>
  );
};
