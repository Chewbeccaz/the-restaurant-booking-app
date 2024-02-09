import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/booking",
        element: <Booking />,
        errorElement: <NotFound />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
