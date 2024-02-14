import { Booking } from "../models/Booking";

interface AdminTableRowProps {
  booking: Booking;
}
//Destructuring (Slippa skriva props.booking)
export const AdminTableRow = ({ booking }: AdminTableRowProps) => {
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
          <button>Radera</button>
        </td>
      </tr>
    </>
  );
};
