import { BookingForm } from "../components/BookingForm";
import axios from "axios";
import { BookingClass } from "../models/BookingClass";
import { restaurantID } from "../main";

export const Booking = () => {
  // const restaurantID = import.meta.env.VITE_RESTURANTID;

  const hardCodedBooking = new BookingClass(
    restaurantID,
    "2024-02-12",
    "18:00",
    6,
    {
      name: "Rebecca",
      lastname: "Hansson",
      email: "rebecca@hej.se",
      phone: "123456789",
    }
  );
  // new BookingClass(
  //   // import.meta.env.VITE_RESTURANTID,
  //   "65c937170082009f7aa42577",
  //   "2024-02-12",
  //   "21:00",
  //   6,
  //   {
  //     name: "Sanna",
  //     lastname: "Siljebäck",
  //     email: "Sanna@hej.se",
  //     phone: "123456789",
  //   }
  // ),
  // new BookingClass(
  //   // import.meta.env.VITE_RESTURANTID,
  //   "65c937170082009f7aa42577",
  //   "2024-02-12",
  //   "18:00",
  //   6,
  //   {
  //     name: "Jennifer",
  //     lastname: "Logrell",
  //     email: "Jennifer@hej.se",
  //     phone: "123456789",
  //   }
  // ),

  const handleCreateBooking = async () => {
    try {
      const response = await axios.post(
        "https://school-restaurant-api.azurewebsites.net/booking/create",
        hardCodedBooking
      );
      console.log("Did this work?", response.data);
    } catch (error) {
      console.log("Error creating booking", error);
    }
  };

  return (
    <>
      <h1>Booking</h1>
      {/* tillfällig knapp för att se så man kan hämta bokningarna i admin.  */}

      <button onClick={handleCreateBooking}>Skapa tillfällig bokning</button>
      <BookingForm></BookingForm>
    </>
  );
};
