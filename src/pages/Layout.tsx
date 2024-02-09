import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <h1>
          <Outlet />
        </h1>
      </main>
      <footer> Social media stuff</footer>
    </>
  );
};
