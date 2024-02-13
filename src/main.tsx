import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { Router } from "./Router.tsx";
import "./index.scss";

export const restaurantID = import.meta.env.VITE_RESTURANTID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
