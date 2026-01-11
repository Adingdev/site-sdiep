// Electricite.jsx
import style from "./service.module.css";
import { 
  FaWhatsapp, 
  FaCheckCircle, 
  FaBolt, 
  FaLightbulb, 
  FaPlug, 
  FaExclamationTriangle,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaCertificate
} from "react-icons/fa";

function Electricite() {
  const services = [
    {
      icon: <FaBolt />,
      title: "Dépannage Urgent",
      description: "Intervention rapide 24h/24 pour pannes électriques, courts-circuits et coupures"
    },
    {
      icon: <FaLightbulb />,
      title: "Installation Éclairage",
      description: "Pose et remplacement d'éclairages intérieurs et extérieurs"
    },
    {
      icon: <FaPlug />,
      title: "Tableaux Électriques",
      description: "Installation et mise aux normes de tableaux et disjoncteurs"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Mise aux Normes",
      description: "Diagnostic et mise en conformité de vos installations électriques"
    }
  ];

  const prestations = [
    "Dépannage électrique d'urgence 24h/24",
    "Installation de tableaux électriques",
    "Mise aux normes NFC 15-100",
    "Éclairage intérieur et extérieur",
    "Installation prises et interrupteurs",
    "Pose de disjoncteurs différentiels",
    "Détection et réparation de courts-circuits",
    "Installation de ventilateurs et climatiseurs",
    "Câblage et raccordement électrique",
    "Diagnostic électrique complet"
  ];

  const etapes = [
    "Contact immédiat via WhatsApp ou téléphone",
    "Diagnostic rapide et devis transparent",
    "Intervention par électricien qualifié",
    "Travail sécurisé et garanti conforme"
  ];

  const avantages = [
    { icon: <FaCertificate />, text: "Électriciens certifiés" },
    { icon: <FaShieldAlt />, text: "Normes de sécurité respectées" },
    { icon: <FaClock />, text: "Intervention rapide 24h/24" },
    { icon: <FaTools />, text: "Matériel professionnel" }
  ];

  return (
    <section className={style.service}>
      {/* HERO */}
      <div
        className={style.hero}
        style={{ backgroundImage: "url(/src/assets/images/img2.jpg)" }}
      >
        <div className={style.overlay}></div>
        <div className={style.heroContent}>
          <h1>Dépannage & Installation Électrique</h1>
          <p>Sécurité • Rapidité • Conformité aux Normes</p>
          <div className={style.breadcrumb}>
            <a href="/">Accueil</a>
            <span>›</span>
            <span>Services</span>
            <span>›</span>
            <span>Électricité</span>
          </div>
        </div>
      </div>

      {/* CONTENU */}
      <div className={style.content}>
        <p className={style.intro}>
          <strong>SDIEP</strong> met à votre disposition des électriciens qualifiés et 
          certifiés pour tous vos besoins en électricité à Abidjan. Nous intervenons 
          rapidement pour résoudre vos pannes, sécuriser vos installations et réaliser 
          vos travaux dans le strict respect des normes de sécurité en vigueur.
        </p>

        {/* Grid de services principaux */}
        <h2 className={style.sectionTitle}>Nos Services Électriques</h2>
        <div className={style.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={style.serviceCard}>
              <div className={style.serviceIcon}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Liste complète des prestations */}
        <h2 className={style.sectionTitle}>Toutes Nos Prestations</h2>
        <ul className={style.list}>
          {prestations.map((item, index) => (
            <li key={index}>
              <FaCheckCircle />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Comment se déroule l'intervention */}
        <h2 className={style.sectionTitle}>Comment Se Déroule l'Intervention ?</h2>
        <div className={style.steps}>
          {etapes.map((etape, index) => (
            <div key={index} className={style.stepCard}>
              <span className={style.stepNumber}>{index + 1}</span>
              <p>{etape}</p>
            </div>
          ))}
        </div>

        {/* Pourquoi nous choisir */}
        <div className={style.whySection}>
          <h2 className={style.sectionTitle}>Pourquoi Choisir SDIEP ?</h2>
          <div className={style.whyGrid}>
            {avantages.map((avantage, index) => (
              <div key={index} className={style.whyCard}>
                <div className={style.whyIcon}>
                  {avantage.icon}
                </div>
                <p>{avantage.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Box Sécurité */}
        <div style={{
          background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
          padding: '30px',
          borderRadius: '15px',
          borderLeft: '4px solid #f59e0b',
          margin: '50px 0'
        }}>
          <h3 style={{
            color: '#0f314d',
            fontSize: '1.5rem',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaExclamationTriangle style={{ color: '#f59e0b' }} />
            Attention : Sécurité Électrique
          </h3>
          <p style={{
            color: '#475569',
            lineHeight: '1.7',
            margin: 0
          }}>
            Pour votre sécurité, ne manipulez jamais une installation électrique défectueuse. 
            En cas de panne, coupez immédiatement le courant au disjoncteur principal et 
            contactez nos électriciens professionnels. Toute intervention est réalisée dans 
            le respect des normes NFC 15-100.
          </p>
        </div>

        {/* CTA Section */}
        <div className={style.ctaSection}>
          <h2>Problème Électrique ? Intervention Rapide !</h2>
          <p>
            Nos électriciens sont disponibles 24h/24 et 7j/7 pour tous vos dépannages urgents. 
            Contactez-nous maintenant pour une intervention rapide et sécurisée.
          </p>
          <a
            href="https://wa.me/2250574378201"
            className={style.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
            Demander un Devis Électrique
          </a>
        </div>
      </div>
    </section>
  );
}

export default Electricite;