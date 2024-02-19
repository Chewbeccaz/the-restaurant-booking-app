import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <a href="https://www.facebook.com/" ><img className="icon" src="/src/img/icon-fb.svg" alt="facebook"/></a>
            <a href="https://www.linkedin.com/" ><img className="icon" src="/src/img/linkedinicon.svg" alt="linkedin"/></a>
            <a href="https://www.instagram.com/" ><img className="icon" src="/src/img/instaicon.svg" alt="instagram"/></a>
            <NavLink to="/contact" ><img className="icon" src="/src/img/mailicon.svg" alt="mail"/></NavLink>
            <NavLink to="/notfound" ><img className="icon" src="/src/img/simsicon.png" alt="sims"/></NavLink>
            <p>Copyright 2024</p>
        </footer>
    );
}