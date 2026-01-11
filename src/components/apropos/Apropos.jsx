// Apropos.jsx
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaClock, FaShieldAlt, FaUserTie, FaUsers, FaAward } from "react-icons/fa";
import style from "./apropos.module.css";

function Apropos() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="apropos" ref={sectionRef} className={style.about}>
      <div className={style.container}>
        {/* TEXTE */}
        <div className={`${style.text} ${visible ? style.showLeft : ""}`}>
          <h2>À propos de SDIEP</h2>
          
          <p>
            SDIEP est votre partenaire de confiance pour tous vos travaux de dépannage et réparations professionnelles. 
            Spécialisés en <strong>plomberie, menuiserie, électricité et maçonnerie</strong>, nous intervenons rapidement 
            partout en Côte d'Ivoire avec des techniciens qualifiés et expérimentés.
          </p>
          
          <p>
            Notre engagement : vous offrir un service de qualité irréprochable, des interventions rapides et sécurisées, 
            ainsi qu'une transparence totale sur nos tarifs. Disponibles 24/7, nous sommes là pour résoudre vos urgences 
            et réaliser vos projets avec professionnalisme.
          </p>

          {/* Liste de valeurs */}
          <div className={style.valuesList}>
            <div className={style.valueItem}>
              <FaCheckCircle className={style.valueIcon} />
              <p className={style.valueText}>Artisans qualifiés</p>
            </div>
            <div className={style.valueItem}>
              <FaClock className={style.valueIcon} />
              <p className={style.valueText}>Intervention rapide</p>
            </div>
            <div className={style.valueItem}>
              <FaShieldAlt className={style.valueIcon} />
              <p className={style.valueText}>Travaux garantis</p>
            </div>
            <div className={style.valueItem}>
              <FaUserTie className={style.valueIcon} />
              <p className={style.valueText}>Devis transparent</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className={`${style.image} ${visible ? style.showRight : ""}`}>
          <div className={style.imageWrapper}>
            <span className={style.badge}>✓ Certifié Pro</span>
            <img src="src/assets/images/apropos.png" alt="À propos SDIEP - Équipe professionnelle" />
          </div>
        </div>
      </div>

      {/* STATISTIQUES (Optionnel - vous pouvez ajuster les chiffres) */}
      {visible && (
        <div className={style.stats}>
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
        </div>
      )}
    </section>
  );
}

export default Apropos;