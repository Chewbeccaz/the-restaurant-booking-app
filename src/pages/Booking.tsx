import { BookingForm } from "../components/BookingForm";
import { BookingClass } from "../models/BookingClass";

export const Booking = () => {
  const restaurantID = import.meta.env.VITE_RESTURANTID;  

  const hardCodedBooking = [
    new BookingClass(
      import.meta.env.VITE_RESTURANTID,
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
      import.meta.env.VITE_RESTURANTID,
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
      import.meta.env.VITE_RESTURANTID,
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

  return (<>
  <h1>Booking</h1>
  <BookingForm></BookingForm>
  </>);

  //Här ska det finnas: < Formulär />
};
