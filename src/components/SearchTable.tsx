// datum tid personer
//  knapp sök bord
// knapp med validering om bord finns

import { useState } from "react";
import { BookingDateTimeGuests } from "./BookingDateTimeGuests";
import { getCurrentDate } from "./CurrentDate";

export const SeachTable = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(1);

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

  setDate("");
  setTime("");
  setPersons(1);

  return (
    <>
      <form onSubmit={handleForm}>
        <BookingDateTimeGuests
          label="Antal gäster:"
          id="personQuantity"
          name="personQuantity"
          value={persons.toString()}
          options={Array.from({ length: 90 }, (_, i) => i + 1).map((i) => ({
            value: i.toString(),
            text: i.toString(),
          }))}
          onChange={handleForm}
        />

        <BookingDateTimeGuests
          label="Välj datum:"
          id="chooseDate"
          name="chooseDate"
          type="date"
          min={getCurrentDate()}
          value={date}
          onChange={handleForm}
        />

        <BookingDateTimeGuests
          label="Välj tid:"
          id="chooseTime"
          name="chooseTime"
          value={time}
          options={[
            { value: "", text: "Tider" },
            { value: "18:00", text: "18:00" },
            { value: "21:00", text: "21:00" },
          ]}
          onChange={handleForm}
        />
      </form>
    </>
  );
};
