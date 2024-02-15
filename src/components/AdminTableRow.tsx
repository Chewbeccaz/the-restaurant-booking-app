import { AdminTableDelete } from "./AdminTableDelete";
import { Booking } from "../models/Booking";
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
  const isUpdating = true;

  return (
    <>
      <tr>
        <td>{booking._id}</td>
        <td>{booking.date}</td>
        <td>{booking.time}</td>
        <td>{booking.numberOfGuests}</td>
        <td>{booking.customerId}</td>
        <td>
          {isUpdating && (
            <AdminTableUpdate
              id={booking._id}
              customerId={booking.customerId}
              onUpdate={onUpdate}
            />
          )}
        </td>
        <td>
          {children}
          <AdminTableDelete id={booking._id} onDelete={onDelete} />
        </td>
      </tr>
    </>
  );
};
