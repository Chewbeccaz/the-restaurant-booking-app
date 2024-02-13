import { FormEvent, useState } from "react";

export const BookingForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const [persons, setPersons] = useState(1);

  const handlePersons = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersons(Number(e.target.value));
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn:</label>
        <input type="text" placeholder="Förnamn" />
        <input type="text" placeholder="Efternamn" />

        <label htmlFor="mail">Email:</label>
        <input type="text"/>

        <label htmlFor="phoneNumber">Telefonnummer:</label>
        <input type="text"/>
        <button>Boka</button>

        <label htmlFor="personQuantity">Antal personer</label>
        <select id="personQuantity" value={persons} onChange={handlePersons}>
          {Array.from({ length: 90 }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>


      
        <label htmlFor="chooseDate">Välj datum:</label>
        <input type="date" id="chooseDate" name="chooseDate" />
      


        <label htmlFor="GDPR" style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
            <span>Jag godkänner användarvillkoren</span>
        </label>
      </form>
    </>
  );
};


// react date picker ist för input?
