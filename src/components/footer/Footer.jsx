// Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";
import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        {/* Logo et slogan */}
        <div className={style.logoSection}>
          <div className={style.logoWrapper}>
          
            <img src="src/assets/images/logo_SDIEP.png" alt="SDIEP Logo" />
  
            <div className={style.logoPlaceholder}>SDIEP</div>
          </div>
          <p className={style.companyName}>SDIEP - Dépannage & Travaux professionnels</p>
          <span className={style.slogan}>
            Votre partenaire pour les urgences de plomberie,<br /> 
            menuiserie et électricité.
          </span>
        </div>

        {/* Liens rapides */}
        <div className={style.linksSection}>
          <h4>Nos Services</h4>
          <ul>
            <li>
              <Link to="/services/plomberie">
                <span className={style.linkIcon}>→</span>
                Plomberie
              </Link>
            </li>
            <li>
              <Link to="/services/menuiserie">
                <span className={style.linkIcon}>→</span>
                Menuiserie
              </Link>
            </li>
            <li>
              <Link to="/services/electricite">
                <span className={style.linkIcon}>→</span>
                Électricité
              </Link>
            </li>
            <li>
              <Link to="/urgences">
                <span className={style.linkIcon}>→</span>
                Urgences 24/7
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={style.contactSection}>
          <h4>Contactez-nous</h4>
          <div className={style.contactItem}>
            <FaPhone className={style.contactIcon} />
            <p>+225 05 74 37 82 01</p>
          </div>
          <div className={style.contactItem}>
            <FaEnvelope className={style.contactIcon} />
            <p>sdiepcotedivoire@gmail.com</p>
          </div>
          <div className={style.contactItem}>
            <FaMapMarkerAlt className={style.contactIcon} />
            <p>Abidjan, Côte d'Ivoire</p>
          </div>
          
          <div className={style.socials}>
            <a 
              href="https://web.facebook.com/profile.php?id=61578712971055"
              aria-label="Facebook" 
              className={`${style.socialLink} ${style.facebook}`}
            >
              <FaFacebookF />
            </a>
            <a 
             href="https://www.instagram.com/sdiep2025"
              aria-label="Instagram" 
              className={`${style.socialLink} ${style.instagram}`}
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/2250574378201" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp" 
              className={`${style.socialLink} ${style.whatsapp}`}
            >
              <FaWhatsapp />
            </a>
            <a 
             href="https://www.tiktok.com/@sdiep2025?is_from_webapp=1&sender_device=pc"
              aria-label="Tiktok" 
              className={`${style.socialLink} ${style.tiktok}`}
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Horaires */}
        <div className={style.hoursSection}>
          <h4>Horaires d'ouverture</h4>
          <div className={style.hoursList}>
            <div className={style.hourItem}>
              <span className={style.day}>Lundi - Vendredi</span>
              <span className={style.time}>8h - 18h</span>
            </div>
            <div className={style.hourItem}>
              <span className={style.day}>Samedi</span>
              <span className={style.time}>9h - 16h</span>
            </div>
            <div className={`${style.hourItem} ${style.emergency}`}>
              <span className={style.day}>Urgences</span>
              <span className={style.time}>24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className={style.bottom}>
        <div className={style.bottomContent}>
          <p>© {new Date().getFullYear()} SDIEP. Tous droits réservés.</p>
          <div className={style.bottomLinks}>
            <Link to="/mentions-legales">Mentions légales</Link>
            <span className={style.separator}>•</span>
            <Link to="/confidentialite">Confidentialité</Link>
            <span className={style.separator}>•</span>
            <Link to="/cgv">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;