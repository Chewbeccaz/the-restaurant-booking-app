import { useState } from "react";
import axios from "axios";
import { restaurantID } from "../main";

interface UpdateButtonProps {
  id: string;
  customerId: string;
  onUpdate: () => void;
}

export const AdminTableUpdate = ({
  id,
  customerId,
  onUpdate,
}: UpdateButtonProps) => {
  const [showDialog, setShowDialog] = useState({
    date: "",
    time: "",
    numberOfGuests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShowDialog({ ...showDialog, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://school-restaurant-api.azurewebsites.net/booking/update/${id}`,
        {
          id: id,
          restaurantId: restaurantID,
          date: showDialog.date,
          time: showDialog.time,
          numberOfGuests: showDialog.numberOfGuests,
          customerId: customerId, //nu kommer man åt denna via props. Ev kanske ligga i ett context?
        }
      );
      onUpdate();
    } catch (error) {
      console.log("Error updating booking", error);
    }
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  //Borde jag lägga in en formtagg också??
  //Bryt ut till en egen komponent.
  return (
    <>
      <button onClick={toggleDialog}>Ändra</button>
      {isDialogOpen && (
        <div className="dialog">
          <h2>Update Booking</h2>
          <label htmlFor="date">Datum:</label>
          <input
            type="date"
            name="date"
            value={showDialog.date}
            onChange={handleChange}
          />

          <label htmlFor="Tid:">Datum:</label>
          <select
            id="time"
            name="time"
            value={showDialog.time}
            onChange={handleChange}>
            <option value="">Tider</option>
            <option value="18:00">18:00</option>
            <option value="21:00">21:00</option>
          </select>

          <label htmlFor="date">Antal gäster:</label>
          <input
            type="number"
            name="numberOfGuests"
            value={showDialog.numberOfGuests}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Uppdatera</button>
        </div>
      )}
    </>
  );
};
