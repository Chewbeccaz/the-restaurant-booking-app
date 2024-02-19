
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
      <h1 className="contactHead">Kontakta oss</h1>

      <form className="contactForm">
        <input className="nameInput" type="text" placeholder="Namn" />
        <input className="mailInput" type="text" placeholder="Mailadress"/>
        <input className="messageInput" type="text" placeholder="Skriv ditt meddelande här"/>
        <button className="contactButton" onClick={handleClick}>Skicka</button>
      </form>
    </>
  );
};