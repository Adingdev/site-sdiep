// Services.jsx
import { useEffect, useRef, useState } from "react";
import style from "./services.module.css";
import { Link } from "react-router-dom";
import { 
  FaFaucet, 
  FaTools, 
  FaBolt, 
  FaCheckCircle, 
  FaArrowRight,
  FaPhoneAlt 
} from "react-icons/fa";

function Services() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaFaucet className={style.icon} />,
      title: "Plomberie",
      description: "Dépannage, installations et réparations rapides pour tous vos problèmes de plomberie.",
      features: [
        "Fuites et robinetterie",
        "Installation sanitaire",
        "Débouchage canalisations",
        "Chauffe-eau"
      ],
      link: "/services/plomberie",
      popular: false
    },
    {
      icon: <FaTools className={style.icon} />,
      title: "Menuiserie",
      description: "Conception et installation de portes, fenêtres et mobilier sur mesure de qualité.",
      features: [
        "Portes & fenêtres",
        "Mobilier sur mesure",
        "Réparations bois",
        "Agencement intérieur"
      ],
      link: "/services/menuiserie",
      popular: true
    },
    {
      icon: <FaBolt className={style.icon} />,
      title: "Électricité",
      description: "Dépannage électrique, installation et mise aux normes pour votre sécurité.",
      features: [
        "Dépannage urgence",
        "Installation électrique",
        "Mise aux normes",
        "Tableau électrique"
      ],
      link: "/services/electricite",
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} className={style.services} id="services">
      <h2 className={style.title}>Nos Services Professionnels</h2>
      <p className={style.subtitle}>
        Des solutions complètes pour tous vos travaux de dépannage et rénovation
      </p>

      <div className={style.cards}>
        {services.map((service, index) => (
          <div 
            className={`${style.card} ${visible ? style.show : ""}`} 
            key={index}
          >
            {/* Badge populaire */}
            {service.popular && (
              <span className={style.popularBadge}>Populaire</span>
            )}

            {/* Icône */}
            <div className={style.iconWrapper}>
              {service.icon}
            </div>

            {/* Titre */}
            <h3>{service.title}</h3>

            {/* Description */}
            <p>{service.description}</p>

            {/* Liste des fonctionnalités */}
            <ul className={style.features}>
              {service.features.map((feature, idx) => (
                <li key={idx} className={style.featureItem}>
                  <FaCheckCircle className={style.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Lien */}
            <div className={style.linkWrapper}>
              <Link to={service.link} className={style.link}>
                En savoir plus
                <FaArrowRight className={style.arrow} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA global */}
      <div className={style.ctaSection}>
        <button 
          className={style.ctaButton}
          data-bs-toggle="modal"
          data-bs-target="#devisModal"
        >
          <FaPhoneAlt />
          Demander un Dépannage Urgent
        </button>
      </div>
    </section>
  );
}

export default Services;