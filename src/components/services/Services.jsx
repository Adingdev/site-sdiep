// Services.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Ajout de l'import Link
import style from "./services.module.css";
import { FaCheckCircle, FaArrowRight, FaPhoneAlt } from "react-icons/fa";

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
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80",
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
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80",
      title: "Menuiserie",
      description: "Conception et installation de portes, fenêtres et mobilier sur mesure de qualité.",
      features: [
        "Portes & fenêtres",
        "Mobilier sur mesure",
        "Réparations bois",
        "Agencement intérieur"
      ],
      link: "/services/menuiserie", // Corrigé le / manquant
      popular: true
    },
    {
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80",
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
    },
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
      title: "Peinture",
      description: "Travaux de peinture intérieure et extérieure avec finitions impeccables.",
      features: [
        "Peinture intérieure",
        "Peinture extérieure",
        "Revêtements muraux",
        "Finitions décoratives"
      ],
      link: "/services/peinture",
      popular: false
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
      title: "Carrelage",
      description: "Pose de carrelage professionnel pour sols et murs, intérieur et extérieur.",
      features: [
        "Carrelage sol & mur",
        "Faïence salle de bain",
        "Terrasse & extérieur",
        "Joints et finitions"
      ],
      link: "/services/carrelage",
      popular: false
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
      title: "Vitrerie",
      description: "Dépannage et installation vitrerie : vitres, miroirs et doubles vitrages.",
      features: [
        "Remplacement vitres",
        "Double vitrage",
        "Miroirs sur mesure",
        "Dépannage d'urgence"
      ],
      link: "/services/vitrerie",
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

            {/* Image */}
            <div className={style.imageWrapper}>
              <img 
                src={service.image} 
                alt={service.title}
                className={style.image}
              />
              <div className={style.imageOverlay}></div>
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

            {/* Lien - REMPLACÉ <a> par <Link> */}
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
