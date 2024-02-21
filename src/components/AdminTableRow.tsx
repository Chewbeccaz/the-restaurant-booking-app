import { AdminTableDelete } from "./AdminTableDelete";
import { Booking } from "../models/Booking";
import { AdminTableUpdate } from "./AdminTableUpdate";
import { useEffect, useState } from "react";
import { get } from "../services/ServiceBase";
import { CustomerInfo } from "../models/CustomerInfo";

const API_BASE_URL = "https://school-restaurant-api.azurewebsites.net/";

interface AdminTableRowProps {
  booking: Booking;
  children?: React.ReactNode;
  onDelete: (id: string) => void;
  onUpdate: () => void;
}

export const AdminTableRow = ({
  booking,
  children,
  onDelete,
  onUpdate,
}: AdminTableRowProps) => {
  const isUpdating = true;

  const [customer, setCustomer] = useState<CustomerInfo | null>(null);
  const [isGettingCustomer, setIsGettingCustomer] = useState(false);

  useEffect(() => {
    const getCustomerInfo = async (id: string) => {
      try {
        console.log("Fetching customer info...");
        const response = await get<CustomerInfo[]>(
          `${API_BASE_URL}/customer/${id}`
        );
        console.log("Customer data:", response.data);
        if (response.data && response.data.length > 0) {
          setCustomer(response.data[0]);
        } else {
          console.error("Customer data is undefined.");
        }
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    };

    const fetchData = async () => {
      setIsGettingCustomer(true);
      try {
        await getCustomerInfo(booking.customerId);
      } finally {
        setIsGettingCustomer(false);
      }
    };

    fetchData();
  }, [booking.customerId]);

  return (
    <>
      {customer && (
        <tr>
          <td>{booking._id}</td>
          <td>{booking.date}</td>
          <td>{booking.time}</td>
          <td>{booking.numberOfGuests}</td>
          <td>
            {customer && (
              <>
                <div>{`${customer.name} ${customer.lastname}`}</div>
                <div>{customer.email}</div>
                <div>{customer.phone}</div>
              </>
            )}
          </td>
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
      )}
    </>
  );
};
