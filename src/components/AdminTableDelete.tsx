import axios from "axios";
import { useState } from "react";

interface DeleteButtonProps {
  id: string;
  onDelete: (id: string) => void;
}

export const AdminTableDelete = ({ id, onDelete }: DeleteButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    console.log("Deleting booking with id", id);
    try {
      if (isDeleting) {
        await axios.delete(
          `https://school-restaurant-api.azurewebsites.net/booking/delete/${id}`
        );
      }
      onDelete(id);
    } catch (error) {
      console.log("Error deleting booking", error);
    }
    setIsDeleting(false);
  };

  //   useEffect(() => {
  //     if (isDeleting) {
  //       handleDelete();
  //     }
  //   }, [isDeleting]);

  return (
    <>
      <button onClick={handleDelete}>Radera</button>
    </>
  );
};
