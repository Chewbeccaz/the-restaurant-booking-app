import { FormEvent, useState } from "react";

export const BookingForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const [persons, setPersons] = useState(1);

  const handlePersons = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersons(Number(e.target.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Förnamn" />
        <input type="text" placeholder="Efternamn" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefonnummer" />
        <button>Boka</button>

        <label htmlFor="personQuantity">Antal personer</label>
        <select id="personQuantity" value={persons} onChange={handlePersons}>
          {Array.from({ length: 90 }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

        <label htmlFor="GDPR">
            <input type="checkbox" />
            <span>Jag godkänner användarvillkoren</span>
        </label>
      </form>
    </>
  );
};
