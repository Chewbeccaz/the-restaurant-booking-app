import { AdminTableDelete } from "./AdminTableDelete";
import { Booking } from "../models/Booking";

interface AdminTableRowProps {
  booking: Booking;
  children?: React.ReactNode;
  onDelete: (id: string) => void;
}

//Destructuring (Slippa skriva props.booking)
export const AdminTableRow = ({
  booking,
  children,
  onDelete,
}: AdminTableRowProps) => {
  return (
    <>
      <tr>
        <td>{booking._id}</td>
        <td>{booking.date}</td>
        <td>{booking.time}</td>
        <td>{booking.numberOfGuests}</td>
        <td>{booking.customerId}</td>
        <td>
          <button>Ändra</button>
        </td>
        <td>
          {children}
          <AdminTableDelete id={booking._id} onDelete={onDelete} />
        </td>
      </tr>
    </>
  );
};
