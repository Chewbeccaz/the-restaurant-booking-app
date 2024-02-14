import axios from "axios";
import { FormEvent, useState } from "react";
import { restaurantID } from "../main";
import { CreateBooking } from "../models/CreateBooking";

export const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

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
          setEmail(value);
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

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  // };

  // const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFirstName(e.target.value);
  // };

  // const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLastName(e.target.value);
  // };

  // const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  // const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const handlePersons = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setPersons(Number(e.target.value));
  // };

  // const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setDate(e.target.value);
  // };

  // const handleTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTime(e.target.value);
  // };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleBooking = async () => {
    try {
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
      };

      const response = await axios.post(
        "https://school-restaurant-api.azurewebsites.net/booking/create",
        createBooking
      );
      console.log("Funkar", response.data);
    } catch (error) {
      console.log("Funkar inte", error);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Namn:</label>
        <input id="name" type="text" value={firstName} onChange={handleForm} />
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={handleForm}
        />

        <label htmlFor="mail">Mail:</label>
        <input id="mail" type="text" value={mail} onChange={handleForm} />

        <label htmlFor="phoneNumber">Telefonnummer:</label>
        <input
          id="phoneNumber"
          type="text"
          value={phoneNumber}
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
          value={date}
          onChange={handleForm}
        />

        <label htmlFor="chooseTime">Välj tid:</label>
        <select id="chooseTime" value={time} onChange={handleForm}>
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

        <button onClick={handleBooking}>Boka</button>
      </form>
    </>
  );
};

// react date picker ist för input?
// utgråade tider om full?
//error meddelande? till användren?
// stor funktion för e target grejerna
//validering för input med tex bara nummer osv
// tömma inputs efter
