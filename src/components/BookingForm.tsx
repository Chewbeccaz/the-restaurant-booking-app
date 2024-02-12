export const BookingForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Förnamn"/>
        <input type="text" placeholder="Efternamn"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Telefonnummer"/>
        <button>Boka</button>

        <label htmlFor="AntalPersoner">Antal personer</label>
        <select>
          <option>1 Person</option>
          <option>2 Personer</option>
          <option>3 Personer</option>
          <option>4 Personer</option>
          <option>5 Personer</option>
          <option>6 Personer</option>
        </select>

        <input type="checkbox"/><span>Jag godkänner användarvillkoren</span>
      </form>
    </>
  );
};
