import { useState } from "react";
import axios from "axios";
import { restaurantID } from "../main";

interface UpdateButtonProps {
  id: string;
  customerId: string;
  onUpdate: (id: string) => void;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      onUpdate(id);
    } catch (error) {
      console.log("Error updating booking", error);
    }
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <button onClick={toggleDialog}>Ändra</button>
      {isDialogOpen && (
        <div className="dialog">
          <h2>Update Booking</h2>
          <input
            type="date"
            name="date"
            value={showDialog.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            value={showDialog.time}
            onChange={handleChange}
          />
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
