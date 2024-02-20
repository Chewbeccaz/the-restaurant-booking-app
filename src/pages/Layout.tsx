import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
// import "../styles/main.scss";
import "./../styles/main.scss";
import { Footer } from "../components/Footer";
import "../styles/layout.css"

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer> < Footer /> </footer>
    </>
  );
};
