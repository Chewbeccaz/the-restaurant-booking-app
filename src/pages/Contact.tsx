import { ContactClass } from "../models/ContactClass";
import axios from "axios";
import { restaurantID } from "../main";
import { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import "../styles/contact.css";

export const Contact = () => {
  const [contact, setContact] = useState<ContactClass>();

  if (!contact) {
    axios
      .get<ContactClass[]>(
        "https://school-restaurant-api.azurewebsites.net/restaurant/" +
          restaurantID
      )
      .then((response) => {
        setContact(response.data[0]);
      });
  }
  return (
    <>
      <div className="contactImgDiv"><img className="contactImg" src="/src/img/maffia.jpg" alt="find us"/></div>
      <div className="cfContainer"><ContactForm /></div>
      <div className="contactContainer">
        <div className="contactInfo"><p className="contactName">{contact?.name}</p>
        <p className="contactAddress"> {contact?.address}</p>
        <p className="contactAddress">
          {contact?.zip} {contact?.city}
          </p>
          </div>
          <div className="contactImg2Div"><img className="contactImg2" src="/src/img/maffia.jpg" alt="find us"/></div>
        
      </div>
    </>
  );
};

