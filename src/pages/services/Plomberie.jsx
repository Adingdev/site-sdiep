// Plomberie.jsx
import style from "./service.module.css";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaWater,
  FaToilet,
  FaShower,
  FaFaucet,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaHome,
} from "react-icons/fa";

function Plomberie() {
  const services = [
    {
      icon: <FaWater />,
      title: "Réparation de Fuites",
      description:
        "Détection et réparation rapide de toutes fuites d'eau (robinets, canalisations, WC)",
    },
    {
      icon: <FaToilet />,
      title: "Débouchage",
      description:
        "Débouchage professionnel d'évier, lavabo, douche, baignoire et WC",
    },
    {
      icon: <FaShower />,
      title: "Installation Sanitaire",
      description:
        "Pose et remplacement de tous équipements sanitaires",
    },
    {
      icon: <FaFaucet />,
      title: "Robinetterie",
      description:
        "Installation et remplacement de robinets, mitigeurs et mélangeurs",
    },
  ];

  const prestations = [
    "Fuite d'eau (robinet, canalisation, WC)",
    "Débouchage d'évier, lavabo, douche et WC",
    "Installation de sanitaires complets",
    "Réparation et remplacement chauffe-eau",
    "Remplacement de robinetterie",
    "Travaux de plomberie générale",
    "Détection de fuite cachée",
    "Rénovation salle de bain",
  ];

  const etapes = [
    "Contact rapide via WhatsApp ou téléphone",
    "Diagnostic précis et devis transparent",
    "Intervention rapide à domicile",
    "Réparation fiable avec garantie",
  ];

  const avantages = [
    { icon: <FaClock />, text: "Intervention rapide 7j/7" },
    { icon: <FaShieldAlt />, text: "Travaux garantis" },
    { icon: <FaTools />, text: "Plombiers expérimentés" },
    { icon: <FaHome />, text: "Service à domicile" },
  ];

  return (
    <>
      {/* HERO FULL WIDTH */}
      <section
        className={style.hero}
        style={{ backgroundImage: "url(/src/assets/images/img1.png)" }}
      >
        <div className={style.overlay}></div>

        <div className={style.heroContent}>
          <h1>Dépannage & Travaux de Plomberie</h1>
          <p>Intervention rapide • Travaux durables • Devis transparent</p>

          <div className={style.breadcrumb}>
            <a href="/">Accueil</a>
            <span>›</span>
            <span>Services</span>
            <span>›</span>
            <span>Plomberie</span>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className={style.service}>
        <div className={style.content}>
          <p className={style.intro}>
            <strong>SDIEP</strong> intervient pour tous vos besoins en plomberie à
            Abidjan, qu'il s'agisse d'un dépannage urgent ou de travaux
            d'installation. Nos plombiers qualifiés assurent des interventions
            rapides, propres et durables avec une garantie de satisfaction.
          </p>

          <h2 className={style.sectionTitle}>Nos Services en Plomberie</h2>
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

          <h2 className={style.sectionTitle}>Notre Méthode d'Intervention</h2>
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
            <h2>Besoin d'un Plombier en Urgence ?</h2>
            <p>
              Contactez-nous maintenant pour une intervention rapide et un devis
              gratuit. Notre équipe est disponible 24h/24 et 7j/7.
            </p>
            <a
              href="https://wa.me/2250574378201"
              className={style.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plomberie;
