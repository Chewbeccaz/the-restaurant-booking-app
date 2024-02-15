import { AdminTableDelete } from "./AdminTableDelete";
import { Booking } from "../models/Booking";
import { useState } from "react";
import { AdminTableUpdate } from "./AdminTableUpdate";

interface AdminTableRowProps {
  booking: Booking;
  children?: React.ReactNode;
  onDelete: (id: string) => void;
  onUpdate: () => void;
}

//Destructuring (Slippa skriva props.booking)
export const AdminTableRow = ({
  booking,
  children,
  onDelete,
  onUpdate,
}: AdminTableRowProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  return (
    <>
      <tr>
        <td>{booking._id}</td>
        <td>{booking.date}</td>
        <td>{booking.time}</td>
        <td>{booking.numberOfGuests}</td>
        <td>{booking.customerId}</td>
        <td>
          <button onClick={handleUpdate}>Ändra</button>
        </td>
        <td>
          {children}
          <AdminTableDelete id={booking._id} onDelete={onDelete} />
        </td>
        {isUpdating && (
          <td>
            <AdminTableUpdate
              id={booking._id}
              customerId={booking.customerId}
              onUpdate={onUpdate}
            />
          </td>
        )}
      </tr>
    </>
  );
};
