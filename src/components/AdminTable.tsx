import { useState, useEffect } from "react";
import { Booking } from "../models/Booking";
import { AdminTableRow } from "./AdminTableRow";
import { fetchBooking } from "../services/BookingService";

export const AdminTable = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const deleteBooking = (id: string) => {
    // Tar bort alla med det valda id:t.
    const remainingBookings = bookings.filter((booking) => booking._id !== id);
    setBookings(remainingBookings);
  };

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);

    fetchBooking()
      .then((data) => {
        setIsLoading(false);
        if (data) setBookings(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("error :(", err);
      });
  };

  useEffect(() => {
    if (!isLoading) {
      fetchData();
    }
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
            <AdminTableRow
              key={booking._id}
              booking={booking}
              onDelete={deleteBooking}
              onUpdate={fetchData}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
