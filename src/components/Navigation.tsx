import { NavLink } from "react-router-dom";
import "../styles/navigation.css"

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Hem</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Boka bord</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Meny</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakta oss</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
