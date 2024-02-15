import axios from "axios";
import { useState } from "react";
import { restaurantID } from "../main";
import { CreateBooking } from "../models/CreateBooking";

export const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(1);
  const [isChecked, setIsChecked] = useState(false);


  const [formValidation, setFormValidation] = useState(false);


  const handleForm = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLSelectElement
    ) {
      const { name, value } = e.target;

      switch (name) {
        case "firstName":
          setFirstName(value);
          break;
        case "lastName":
          setLastName(value);
          break;
        case "mail":
          setMail(value);
          break;
        case "phoneNumber":
          setPhoneNumber(value);
          break;
        case "chooseDate":
          setDate(value);
          break;
        case "chooseTime":
          setTime(value);
          break;
        case "personQuantity":
          setPersons(Number(value));
          break;
        default:
          break;
      }
    }


  //validation för inputs
    const isValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    mail.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    date !== "" &&
    time !== "" &&
    isChecked;

    setFormValidation(isValid);
   
  };





  const handleCheckbox = () => {
    setIsChecked(!isChecked);


    //för att få disabled att funka
    const isValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    mail.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    date !== "" &&
    time !== "" &&
    !isChecked;
   

    setFormValidation(isValid);
  };


  const [bookings, setBookings] = useState([]);


  const handleBooking = async () => {

    try {


      const getAllBookings = await axios.get(`https://school-restaurant-api.azurewebsites.net/booking/restaurant/${
        import.meta.env.VITE_RESTURANTID
      }`
      );


      if (formValidation) {
        const createBooking: CreateBooking = {
        restaurantId: restaurantID,
        date: date,
        time: time,
        numberOfGuests: persons,
        customer: {
          name: firstName,
          lastname: lastName,
          email: mail,
          phone: phoneNumber,
        },

      }

      const response = await axios.post(
        "https://school-restaurant-api.azurewebsites.net/booking/create",
        createBooking
      );
      console.log("Funkar", response.data);
       }

       else {
        console.log("Formulär funkar inte");
      }

    } catch (error) {
      console.log("Funkar inte", error);
    }
  };




  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="firstName">Förnamn:</label>
        <input id="firstName" name="firstName" type="text" onChange={handleForm} />

        <label htmlFor="lastName">Efternamn:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleForm}
        />

        <label htmlFor="mail">Mail:</label>
        <input id="mail" name="mail" type="text" onChange={handleForm} />

        <label htmlFor="phoneNumber">Telefonnummer:</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={handleForm}
        />

        <label htmlFor="personQuantity">Antal personer</label>
        <select id="personQuantity" onChange={handleForm}>
          {Array.from({ length: 90 }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

        <label htmlFor="chooseDate">Välj datum:</label>
        <input
          id="chooseDate"
          type="date"
          name="chooseDate"
          onChange={handleForm}
        />

        <label htmlFor="chooseTime">Välj tid:</label>
        <select id="chooseTime" name="chooseTime" onChange={handleForm}>
          <option value="">Tider</option>
          <option value="18:00">18:00</option>
          <option value="21:00">21:00</option>
        </select>

        <label
          htmlFor="GDPR"
          style={{ textDecoration: isChecked ? "line-through" : "none" }}
        >
          <input
            id="GDPR"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          <span>Jag godkänner användarvillkoren</span>
        </label>

        <button disabled={!formValidation} onClick={handleBooking}>Boka</button>
      </form>
    </>
  );
};

// react date picker ist för input??

// utgråade tider om full?

//error meddelande? till användren?

// tömma inputs efter

//disabled på button om validering inte går igenom så kund ej kan trycka på knappen, plus ett felmeddelande till användaren 
