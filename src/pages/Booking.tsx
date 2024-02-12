import axios from "axios";
import { BookingClass } from "../models/BookingClass";

export const Booking = () => {
  const hardCodedBooking = [
    new BookingClass(
      // import.meta.env.VITE_RESTURANTID,
      "65c937170082009f7aa42577",
      "2024-02-12",
      "18:00",
      6,
      {
        name: "Rebecca",
        lastname: "Hansson",
        email: "rebecca@hej.se",
        phone: "123456789",
      }
    ),
    new BookingClass(
      // import.meta.env.VITE_RESTURANTID,
      "65c937170082009f7aa42577",
      "2024-02-12",
      "21:00",
      6,
      {
        name: "Sanna",
        lastname: "Siljebäck",
        email: "Sanna@hej.se",
        phone: "123456789",
      }
    ),
    new BookingClass(
      // import.meta.env.VITE_RESTURANTID,
      "65c937170082009f7aa42577",
      "2024-02-12",
      "18:00",
      6,
      {
        name: "Jennifer",
        lastname: "Logrell",
        email: "Jennifer@hej.se",
        phone: "123456789",
      }
    ),
  ];

  const handleCreateBooking = async () => {
    for (const booking of hardCodedBooking) {
      const response = await axios.post(
        "https://school-restaurant-api.azurewebsites.net/booking/create",
        booking
      );
      console.log("Did this work?", response.data);
    }
  };

  return (
    <>
      <h1>Booking</h1>
      {/* tillfällig knapp för att se så man kan hämta bokningarna i admin.  */}
      <button onClick={handleCreateBooking}>
        Skapa 3 tillfälliga bokningar
      </button>
    </>
  );

  //Här ska det finnas: < Formulär />
};
