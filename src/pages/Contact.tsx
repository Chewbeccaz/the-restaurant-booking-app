import { ContactClass } from "../models/ContactClass";
import axios from "axios";
import { restaurantID } from "../main";
import { useState } from "react";
import { ContactForm } from "../components/ContactForm";

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
      <div>
        <p className="name">{contact?.name}</p>
        <p className="address"> {contact?.address}</p>
        <p className="address">
            {contact?.zip}
            {contact?.city}
          </p>
      </div>
      <ContactForm />
    </>
  );
};

