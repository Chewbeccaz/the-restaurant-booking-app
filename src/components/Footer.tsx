import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="iconContainer">
                <a href="https://www.facebook.com/" ><img className="icon" src="/src/img/icon-fb.svg" alt="facebook"/></a>
                <a href="https://www.linkedin.com/" ><img className="icon" src="/src/img/linkedinicon.svg" alt="linkedin"/></a>
                <a href="https://www.instagram.com/" ><img className="icon" src="/src/img/instaicon.svg" alt="instagram"/></a>
                <NavLink to="/contact" ><img className="icon" src="/src/img/mailicon.svg" alt="mail"/></NavLink>
                <NavLink to="/notfound" ><img className="icon" src="/src/img/simsicon.png" alt="sims"/></NavLink>
            </div>
            <div className="openingHours">
                <p className="openingHoursText">Våra öppettider är:</p>
                <p className="openingHoursText">Alla dagar i veckan 17:00 - 24:00</p>
            </div>
            <div className="copyrightDiv">
                <p className="copyright">Copyright 2024</p>
            </div>
        </footer>
    );
}