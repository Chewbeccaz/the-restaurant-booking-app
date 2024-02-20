import { useState } from "react";
import { restaurantID } from "../main";
import { CreateBooking } from "../models/CreateBooking";
import { BookingFormError } from "./BookingFormError";
import { BookingInputs } from "./BookingInputs";
import { BookingValidation } from "./BookingValidation";
import { makeBooking } from "../services/BookingService";
import { BookingCheckbox } from "./BookingCheckbox";
import { SearchTable } from "./SearchTable";
import { Booking } from "../models/Booking";
import { get } from "../services/ServiceBase";

const API_BASE_URL = "https://school-restaurant-api.azurewebsites.net/";

export const BookingForm = () => {
  const [isSeaching, setIsSearching] = useState(true);
  const [isTablesAvailable, setIsTablesAvailable] = useState(false);

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

  // const [arrayData, setArrayData] = useState<Booking[]>([]);

  // const tables = [];

  const handleSearch = async () => {
    try {
      console.log("Fetching the bookings....");
      const response = await get<Booking[]>(
        API_BASE_URL + "booking/restaurant/" + restaurantID
      );
      console.log("Fetched sucess???", response.data);
      const fetchedTables = response.data.filter(
        (booking) => booking.time === time && booking.date === date
      );
      console.log("funkadee", fetchedTables);
      setIsTablesAvailable(fetchedTables.length < 15); // blir antingen true eller false.
      setIsSearching(false);
    } catch (error) {
      console.log("error fetching bookings", error);
    }
  };

  //ta bort select på e? har testat nu
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

        setFirstName("");
        setLastName("");
        setMail("");
        setPhoneNumber("");
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

  if (isSeaching) {
    return (
      <SearchTable
        onSearch={handleSearch}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        persons={persons}
        setPersons={setPersons}
      />
    );
  }

  return (
    <>
      {isTablesAvailable ? (
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

          <BookingCheckbox
            label="Jag godkänner användarvillkoren"
            id="checkbox"
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

          <BookingFormError errorValidation={errorValidation} />
        </form>
      ) : (
        <p>Tyvärr finns inga lediga bord</p>
      )}
    </>
  );
};
