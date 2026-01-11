import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // pour smooth scroll
import { Link } from "react-router-dom"; // pour les pages services
import style from "./navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      {/* Logo */}
      <div className={style.navbarLogo}>
        <Link to="/">
          <img src="src/assets/images/logo_SDIEP.png" alt="Logo" />
          <div className={style.logoTextContainer}>
            <span className={style.logoText}>SDIEP</span>
            <span className={style.logoText2}>
              Dépannage — Plomberie • Menuiserie • Électricité
            </span>
          </div>
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className={style.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`${style.navbarMenu} ${menuOpen ? style.active : ""}`}>
        {/* Dropdown Services */}
        <li
          className={`${style.navItem} ${servicesOpen ? style.active : ""}`}
          onClick={() => setServicesOpen(!servicesOpen)}
          onMouseEnter={() =>
            window.innerWidth > 992 && setServicesOpen(true)
          }
          onMouseLeave={() =>
            window.innerWidth > 992 && setServicesOpen(false)
          }
        >
          <span className={style.navLink}>Services</span>
          <ul className={style.dropdownMenu}>
            <li>
              <Link
                className={style.dropdownItem}
                to="/services/plomberie"
              >
                Plomberie
              </Link>
            </li>
            <li>
              <Link
                className={style.dropdownItem}
                to="/services/menuiserie"
              >
                Menuiserie
              </Link>
            </li>
            <li>
              <Link
                className={style.dropdownItem}
                to="/services/electricite"
              >
                Électricité
              </Link>
            </li>
          </ul>
        </li>

        {/* Liens smooth scroll */}
        <li className={style.navItem}>
          <ScrollLink
            to="apropos"
            smooth={true}
            duration={500}
            offset={-70} // pour compenser la navbar fixe
            className={style.navLink}
            onClick={() => setMenuOpen(false)} // ferme le menu sur mobile
          >
            À propos
          </ScrollLink>
        </li>
        
        <li className={style.navItem}>
          <ScrollLink
            to="temoignages"
            smooth={true}
            duration={500}
            offset={-70}
            className={style.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Témoignages
          </ScrollLink>
        </li>
        <li className={style.navItem}>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            offset={-70}
            className={style.navLink}
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </ScrollLink>
        </li>
        <li className={style.navItem}>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className={style.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </ScrollLink>
        </li>

        {/* CTA - Ouvre le modal de devis */}
        <li className={style.navItem}>
          <button 
            className={style.ctaButton}
            data-bs-toggle="modal"
            data-bs-target="#devisModal"
            onClick={() => setMenuOpen(false)}
          >
            Demander un dépannage
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;