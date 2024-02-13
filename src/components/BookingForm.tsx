import { FormEvent, useState } from "react";

export const BookingForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


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

  const handleBooking = () => {


  };




  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn:</label>
        <input type="text" placeholder="Förnamn" value={firstName}/>
        <input type="text" placeholder="Efternamn" value={lastName} />

        <label htmlFor="mail">Email:</label>
        <input type="text" value={email}/>

        <label htmlFor="phoneNumber">Telefonnummer:</label>
        <input type="text" value={phoneNumber}/>
        

        <label htmlFor="personQuantity">Antal personer</label>
        <select id="personQuantity" value={persons} onChange={handlePersons}>
          {Array.from({ length: 90 }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

      
        <label htmlFor="chooseDateTime">Välj datum och tid:</label>
        <input type="date" id="chooseDateTime" name="chooseDate" value={date} />
      
        <select id="chooseDateTime" value={time}>
          <option value="">Välj tid</option>
          <option value="18:00">18:00</option>
          <option value="21:00">21:00</option>
        </select>
      


        <label htmlFor="GDPR" style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
            <span>Jag godkänner användarvillkoren</span>
        </label>

        <button onClick={handleBooking}>Boka</button>
      </form>
    </>
  );
};


// react date picker ist för input?
