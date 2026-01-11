// Menuiserie.jsx
import { Link } from "react-router-dom";
import style from "./service.module.css";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaDoorOpen,
  FaWindowMaximize,
  FaCouch,
  FaRulerCombined,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaAward,
} from "react-icons/fa";

function Menuiserie() {
  const services = [
    {
      icon: <FaDoorOpen />,
      title: "Portes sur Mesure",
      description:
        "Fabrication et installation de portes intérieures et extérieures en bois ou aluminium",
    },
    {
      icon: <FaWindowMaximize />,
      title: "Fenêtres & Baies",
      description:
        "Menuiserie de fenêtres, baies vitrées et volets en bois ou aluminium",
    },
    {
      icon: <FaCouch />,
      title: "Mobilier sur Mesure",
      description:
        "Conception et fabrication de meubles personnalisés pour tous espaces",
    },
    {
      icon: <FaRulerCombined />,
      title: "Agencement",
      description:
        "Aménagement d'intérieur, placards, dressings et cuisines sur mesure",
    },
  ];

  const prestations = [
    "Fabrication et pose de portes intérieures et extérieures",
    "Fenêtres bois et aluminium",
    "Placards et rangements sur mesure",
    "Réparation de meubles et boiseries",
    "Pose de cuisines équipées",
    "Dressings et penderies personnalisés",
    "Travaux de finition et ajustements",
    "Parquets et revêtements bois",
    "Escaliers en bois",
    "Terrasses et pergolas",
  ];

  const etapes = [
    "Prise de contact et analyse de vos besoins",
    "Étude du projet et devis détaillé",
    "Fabrication avec matériaux de qualité",
    "Installation professionnelle et finitions",
  ];

  const avantages = [
    { icon: <FaTools />, text: "Menuisiers expérimentés et qualifiés" },
    { icon: <FaAward />, text: "Matériaux de qualité supérieure" },
    { icon: <FaClock />, text: "Respect strict des délais" },
    { icon: <FaShieldAlt />, text: "Travail propre et garanti" },
  ];

  return (
    <>
      {/* HERO FULL WIDTH */}
      <section
        className={style.hero}
        style={{ backgroundImage: "url(/src/assets/images/banner1.png)" }}
      >
        <div className={style.overlay}></div>

        <div className={style.heroContent}>
          <h1>Travaux de Menuiserie Professionnelle</h1>
          <p>Bois • Aluminium • Finitions sur Mesure</p>

          <div className={style.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>›</span>
            <span>Services</span>
            <span>›</span>
            <span>Menuiserie</span>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className={style.service}>
        <div className={style.content}>
          <p className={style.intro}>
            <strong>SDIEP</strong> vous accompagne dans tous vos travaux de
            menuiserie intérieure et extérieure à Abidjan. Nos menuisiers
            qualifiés réalisent des prestations soignées, durables et
            parfaitement adaptées à vos besoins et à votre budget.
          </p>

          <h2 className={style.sectionTitle}>
            Nos Services de Menuiserie
          </h2>
          <div className={style.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={style.serviceCard}>
                <div className={style.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <h2 className={style.sectionTitle}>Toutes Nos Prestations</h2>
          <ul className={style.list}>
            {prestations.map((item, index) => (
              <li key={index}>
                <FaCheckCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className={style.sectionTitle}>
            Déroulement de Votre Projet
          </h2>
          <div className={style.steps}>
            {etapes.map((etape, index) => (
              <div key={index} className={style.stepCard}>
                <span className={style.stepNumber}>{index + 1}</span>
                <p>{etape}</p>
              </div>
            ))}
          </div>

          <div className={style.whySection}>
            <h2 className={style.sectionTitle}>Pourquoi Choisir SDIEP ?</h2>
            <div className={style.whyGrid}>
              {avantages.map((avantage, index) => (
                <div key={index} className={style.whyCard}>
                  <div className={style.whyIcon}>{avantage.icon}</div>
                  <p>{avantage.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={style.ctaSection}>
            <h2>Un Projet de Menuiserie en Vue ?</h2>
            <p>
              Contactez nos menuisiers experts pour un devis gratuit et
              personnalisé. Nous transformons vos idées en réalité avec
              professionnalisme et savoir-faire.
            </p>
            <a
              href="https://wa.me/2250574378201"
              className={style.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
              Demander un devis menuiserie
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menuiserie;
