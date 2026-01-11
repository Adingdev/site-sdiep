// PourquoiNousChoisir.jsx
import { useEffect, useRef, useState } from "react";
import style from "./pourquoi.module.css";
import { 
  FaUserCheck, 
  FaClock, 
  FaTools, 
  FaPhoneAlt, 
  FaShieldAlt,
  FaCertificate,
  FaAward,
  FaStar
} from "react-icons/fa";

function PourquoiNousChoisir() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const raisons = [
    {
      icon: <FaUserCheck className={style.icon} />,
      titre: "Techniciens Qualifiés",
      description: "Professionnels certifiés et expérimentés pour tous vos travaux.",
      badge: null
    },
    {
      icon: <FaClock className={style.icon} />,
      titre: "Intervention Rapide",
      description: "Disponibles 24h/24 et 7j/7 partout à Abidjan.",
      badge: "Populaire"
    },
    {
      icon: <FaTools className={style.icon} />,
      titre: "Travail Garanti",
      description: "Prestations fiables et durables avec garantie de satisfaction.",
      badge: null
    },
    {
      icon: <FaPhoneAlt className={style.icon} />,
      titre: "Assistance Client",
      description: "Suivi personnalisé et devis transparent à chaque étape.",
      badge: null
    }
  ];

  return (
    <section ref={ref} className={style.why} id="pourquoi">
      <h2 className={style.title}>Pourquoi choisir SDIEP ?</h2>
      <p className={style.subtitle}>
        Un service fiable, rapide et transparent pour tous vos dépannages et travaux
      </p>

      <div className={style.grid}>
        {raisons.map((raison, index) => (
          <div 
            key={index}
            className={`${style.card} ${show ? style.show : ""}`}
          >
            {/* Badge optionnel */}
            {raison.badge && (
              <span className={style.badge}>{raison.badge}</span>
            )}

            {/* Icône avec wrapper */}
            <div className={style.iconWrapper}>
              {raison.icon}
            </div>

            {/* Titre */}
            <h3>{raison.titre}</h3>

            {/* Description */}
            <p>{raison.description}</p>
          </div>
        ))}
      </div>

      {/* Section statistiques (optionnel) */}
      {show && (
        <div className={style.statsBar}>
          <div className={style.statItem}>
            <div className={style.statNumber}>500+</div>
            <div className={style.statLabel}>Clients Satisfaits</div>
          </div>
          <div className={style.statItem}>
            <div className={style.statNumber}>24/7</div>
            <div className={style.statLabel}>Disponibilité</div>
          </div>
          <div className={style.statItem}>
            <div className={style.statNumber}>5+</div>
            <div className={style.statLabel}>Ans d'Expérience</div>
          </div>
          <div className={style.statItem}>
            <div className={style.statNumber}>100%</div>
            <div className={style.statLabel}>Garantie Qualité</div>
          </div>
        </div>
      )}

       <div className={style.ctaSection}>
        <button 
          className={style.ctaButton}
          data-bs-toggle="modal"
          data-bs-target="#devisModal"
        >
          Demander un devis gratuit
        </button>
      </div> 
    </section>
  );
}

export default PourquoiNousChoisir;