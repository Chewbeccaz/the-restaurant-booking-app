import { useState } from "react";
import { restaurantID } from "../main";
import { CreateBooking } from "../models/CreateBooking";
import { BookingFormError } from "./BookingFormError";
import { BookingInputs } from "./BookingInputs";
import { BookingValidation } from "./BookingValidation";

import { getCurrentDate } from "./CurrentDate";

import { makeBooking } from "../services/BookingService";

const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};


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
  const [errorValidation, setErrorValidation] = useState(false);

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
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleBooking = async () => {
    try {
      if (formValidation) {
        const bookingData: CreateBooking = {
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
        };
        await makeBooking(bookingData);

        // const response = await axios.post(
        //   "https://school-restaurant-api.azurewebsites.net/booking/create",
        //   createBooking
        // );
        // console.log("Funkar", response.data);

        setFirstName("");
        setLastName("");
        setMail("");
        setPhoneNumber("");
        setDate("");
        setTime("");
        setPersons(1);
        setIsChecked(false);

        setErrorValidation(false);
      } else {
        console.log("Formulär funkar inte");

        setErrorValidation(true);
      }
    } catch (error) {
      console.log("Funkar inte", error);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <BookingInputs
          label="Förnamn:"
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleForm}
        />

        <BookingInputs
          label="Efternamn:"
          id="lastName"
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleForm}
        />

        <BookingInputs
          label="Mail:"
          id="mail"
          name="mail"
          type="text"
          value={mail}
          onChange={handleForm}
        />

        <BookingInputs
          label="Telefonnummer:"
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          onChange={handleForm}
        />

        <BookingInputs
          label="Antal personer:"
          id="personQuantity"
          name="personQuantity"
          type="select"
          value={persons.toString()}
          options={Array.from({ length: 90 }, (_, i) => i + 1).map((i) => ({
            value: i.toString(),
            text: i.toString(),
          }))}
          onChange={handleForm}
        />

        <BookingInputs
          label="Välj datum:"
          id="chooseDate"
          name="chooseDate"
          type="date"
          min={getCurrentDate()}
          value={date}
          onChange={handleForm}
        />

        <BookingInputs
          label="Välj tid:"
          id="chooseTime"
          name="chooseTime"
          type="select"
          value={time}
          options={[
            { value: "", text: "Tider" },
            { value: "18:00", text: "18:00" },
            { value: "21:00", text: "21:00" },
          ]}
          onChange={handleForm}
        />

        <BookingInputs
          label="Jag godkänner användarvillkoren"
          id="GDPR"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />

        <BookingValidation
          formInputs={{
            firstName,
            lastName,
            mail,
            phoneNumber,
            date,
            time,
            isChecked,
          }}
          setFormValidation={setFormValidation}
        />

        <button onClick={handleBooking}>Boka</button>
      </form>

      <BookingFormError errorValidation={errorValidation} />
    </>
  );
};

// utgråade tider om full?

//inte kunna boka datum bakåt i tiden

//disabled på button om validering inte går igenom så kund ej kan trycka på knappen, eller felmeddelande om inte allt är ifyllt?

//checkboxen framför texten
