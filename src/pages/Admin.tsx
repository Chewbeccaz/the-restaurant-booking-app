import { AdminTable } from "../components/AdminTable";
import "../styles/admin.css";

export const Admin = () => {
  return (
    <>
      <h1>You're in admin.</h1>
      <h3>Please sign in.</h3>
      <h4>Here are the bookings:</h4>
      <AdminTable />
    </>
  );
};
