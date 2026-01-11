import style from "./whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "2250574378201"; // contact admin
  const message = encodeURIComponent(
    "Bonjour SDIEP \nJe souhaite obtenir un devis pour une intervention."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      className={style.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={style.icon} />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
