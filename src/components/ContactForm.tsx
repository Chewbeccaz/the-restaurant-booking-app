
export const ContactForm = () => {

  const inputFields = document.getElementsByTagName("input");

  const handleClick = () => {
    if (inputFields[0].value === "" || inputFields[1].value === "" || inputFields[2].value === "") {
      alert("Vänligen fyll i alla fält!");
      return false;
    }
    else {
      alert ("Tack för ditt meddelande! Eftersom detta är en skoluppgift återkommer vi inte att återkomma till dig.");
    }
  }

return (
    <>
      <h4>Kontakta oss</h4>

      <form className="contact-form">
        <input type="text" placeholder="Namn" />
        <input type="text" placeholder="Mailadress"/>
        <input type="text" placeholder="Skriv ditt meddelande här"/>
        <button onClick={handleClick}>Skicka</button>
      </form>
    </>
  );
};