import { ContactClass } from "../models/ContactClass";
import axios from "axios";
import { restaurantID } from "../main";
import { useState } from "react";

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
        <p className="address">
          {contact?.address}
          <p className="address">
            {" "}
            {contact?.zip}
            {contact?.city}
          </p>
        </p>
      </div>
    </>
  );
};

/*  return (
    <>
      <h4>Kontakta oss</h4>
      <div>
        <p>

        </p>
      </div>
      <div>
        <input type="text" placeholder="Namn"/>
        <input type="text" placeholder="Mailadress"/>
        <input type="text" placeholder="Skriv din fråga här"/>
      </div>
    </>
  );
; */
