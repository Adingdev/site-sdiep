import { useState } from "react";
import style from "./contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: ""
  });

  // Mise à jour des champs texte
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoyer via WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Message WhatsApp (informe qu'il y a une pièce jointe)
    const text = `Nom: ${formData.nom}%0AEmail: ${formData.email}%0ATéléphone: ${formData.telephone}%0AMessage: ${formData.message}`;

    const whatsappNumber = "2250574378201"; // contact admin
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

  };

  return (
    <section id="contact" className={style.contact}>
      <div className="container">
        <h2 className={style.title}>Contactez-nous</h2>
        <p className={style.subtitle}>
          Pour tout dépannage ou devis, remplissez le formulaire ou contactez-nous directement via WhatsApp.
        </p>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <input
              type="text"
              name="nom"
              placeholder="Nom complet"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formGroup}>
            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formGroup}>
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={style.submitButton}>
            Envoyer via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
