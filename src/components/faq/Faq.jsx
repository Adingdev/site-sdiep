// Faq.jsx
import { useState } from "react";
import style from "./faq.module.css";
import { FaChevronDown, FaQuestionCircle, FaWhatsapp } from "react-icons/fa";

const allQuestions = [
  {
    q: "Intervenez-vous en urgence ?",
    a: "Oui, SDIEP intervient 24h/24 et 7j/7 pour les urgences en plomberie, électricité et menuiserie partout à Abidjan. Notre équipe est prête à intervenir rapidement pour résoudre vos problèmes.",
    category: "Services"
  },
  {
    q: "Comment obtenir un devis gratuit ?",
    a: "Vous pouvez demander un devis gratuitement et sans engagement via notre formulaire de contact en ligne, par téléphone ou directement par WhatsApp. Nous vous répondons dans les plus brefs délais avec un devis détaillé et transparent.",
    category: "Devis"
  },
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Nous intervenons rapidement dans toute la ville d'Abidjan et ses environs : Cocody, Plateau, Yopougon, Abobo, Adjamé, Marcory, Koumassi, Port-Bouët et toutes les autres communes.",
    category: "Zone"
  },
  {
    q: "Les interventions sont-elles garanties ?",
    a: "Oui, toutes nos prestations sont garanties pour assurer votre tranquillité. Nous nous engageons sur la qualité de nos travaux et intervenons gratuitement en cas de problème lié à notre intervention.",
    category: "Garantie"
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Nous acceptons plusieurs moyens de paiement pour votre confort : espèces, mobile money (Orange Money, MTN Money, Moov Money) et virements bancaires.",
    category: "Paiement"
  },
  {
    q: "Proposez-vous des tarifs pour les entreprises ?",
    a: "Oui, nous proposons des tarifs préférentiels et des contrats de maintenance pour les entreprises, commerces et administrations. Contactez-nous pour un devis personnalisé adapté à vos besoins professionnels.",
    category: "Entreprises"
  },
  {
    q: "Combien de temps dure une intervention en moyenne ?",
    a: "La durée d'intervention dépend de la nature du problème. Une réparation simple peut prendre 30 minutes à 2 heures, tandis que des travaux plus importants peuvent nécessiter plusieurs heures ou jours. Nous vous informons toujours de la durée estimée avant de commencer.",
    category: "Services"
  },
  {
    q: "Faut-il être présent lors de l'intervention ?",
    a: "Votre présence est recommandée pour expliquer le problème et valider les travaux. Cependant, si vous ne pouvez pas être présent, nous pouvons intervenir avec une personne de confiance que vous désignerez.",
    category: "Services"
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Catégories uniques
  const categories = ["Tous", ...new Set(allQuestions.map(q => q.category))];

  // Filtrer les questions par catégorie
  const filteredQuestions = selectedCategory === "Tous" 
    ? allQuestions 
    : allQuestions.filter(q => q.category === selectedCategory);

  return (
    <section id="faq" className={style.faq}>
      <div className={style.header}>
        <h2 className={style.title}>Questions Fréquentes</h2>
        <p className={style.subtitle}>
          Tout ce que vous devez savoir avant de nous contacter
        </p>
      </div>

      {/* Tabs de catégories */}
      <div className={style.categoryTabs}>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`${style.categoryTab} ${selectedCategory === cat ? style.active : ''}`}
            onClick={() => {
              setSelectedCategory(cat);
              setActiveIndex(null); // Fermer toutes les questions lors du changement de catégorie
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={style.container}>
        {filteredQuestions.map((item, index) => (
          <div
            key={index}
            className={`${style.item} ${activeIndex === index ? style.active : ""}`}
            onClick={() => toggle(index)}
          >
            <div className={style.question}>
              <div className={style.questionContent}>
                {/* Numéro */}
                <div className={style.questionNumber}>
                  {index + 1}
                </div>
                
                {/* Question */}
                <h3>{item.q}</h3>
              </div>

              {/* Icône chevron */}
              <div className={style.iconWrapper}>
                <FaChevronDown className={style.icon} />
              </div>
            </div>

            {/* Réponse */}
            <div className={style.answer}>
              <div className={style.answerContent}>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compteur de questions */}
      <div className={style.questionCount}>
        {filteredQuestions.length} question{filteredQuestions.length > 1 ? 's' : ''} affichée{filteredQuestions.length > 1 ? 's' : ''}
      </div>

      {/* Section CTA */}
      <div className={style.ctaSection}>
        <FaQuestionCircle style={{ fontSize: '3rem', color: '#f0a500', marginBottom: '20px' }} />
        <h3 className={style.ctaTitle}>Vous avez d'autres questions ?</h3>
        <p className={style.ctaText}>
          Notre équipe est là pour vous répondre et vous accompagner dans tous vos projets. 
          N'hésitez pas à nous contacter !
        </p>
        <a 
          href="https://wa.me/2250574378201" 
          target="_blank" 
          rel="noopener noreferrer"
          className={style.ctaButton}
        >
          <FaWhatsapp />
          Contactez-nous sur WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Faq;