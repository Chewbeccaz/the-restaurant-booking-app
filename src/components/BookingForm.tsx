import { FormEvent, useState } from "react";

export const BookingForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const [persons, setPersons] = useState(1);

  //funktion för mer natal personer
  //   for (let i = 2; i <= 90; i++) {
  //     let option = document.createElement("option");
  //     option.value = i.toString();
  //     option.text = i.toString() + " Personer";
  //     document.querySelector("select")?.appendChild(option);
  //   }

  const handlePersons = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersons(parseInt(e.target.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Förnamn" />
        <input type="text" placeholder="Efternamn" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefonnummer" />
        <button>Boka</button>

        <label htmlFor="AntalPersoner">Antal personer</label>
        <select value={persons} onChange={handlePersons}>
          {Array.from({ length: 90 }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

        <input type="checkbox" />
        <span>Jag godkänner användarvillkoren</span>
      </form>
    </>
  );
};
