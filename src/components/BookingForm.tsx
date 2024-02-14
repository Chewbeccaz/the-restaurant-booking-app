import axios from "axios";
import { FormEvent, useState } from "react";
import { restaurantID } from "../main";

export const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  //ej ha kvar dessa?
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  //ha kvar denna
  const handlePersons = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersons(Number(e.target.value));
  };

  //inte dessa
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  //men denna
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post(
        "https://school-restaurant-api.azurewebsites.net/booking/create",
        {
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
      );
      console.log("funkar", response);
    } catch (error) {
      console.log("funkar inte", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn:</label>
        <input
          id="name"
          type="text"
          value={firstName}
          onChange={handleFirstName}
        />
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={handleLastName}
        />

        <label htmlFor="mail">Mail:</label>
        <input id="mail" type="text" value={mail} onChange={handleMail} />

        <label htmlFor="phoneNumber">Telefonnummer:</label>
        <input
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />

        <label htmlFor="personQuantity">Antal personer</label>
        <select id="personQuantity" onChange={handlePersons}>
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
          onChange={handleDate}
        />

        <label htmlFor="chooseTime">Välj tid:</label>
        <select id="chooseTime" value={time} onChange={handleTime}>
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
