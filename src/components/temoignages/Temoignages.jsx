// Temoignages.jsx - Version avec modal
import { useState, useEffect, useRef } from "react";
import style from "./temoignages.module.css";
import { 
  FaStar, 
  FaCheckCircle, 
  FaQuoteLeft, 
  FaUser, 
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";
import AvisModal from "./avisModal"

const allAvis = [
  {
    nom: "Kouassi Jean",
    service: "Électricité",
    message: "Intervention rapide et très professionnelle. Le problème a été réglé le jour même. Je recommande vivement leurs services !",
    note: 5,
    verified: true,
    date: "Il y a 2 jours"
  },
  {
    nom: "Traoré Aminata",
    service: "Plomberie",
    message: "Technicien ponctuel et travail propre. Je recommande SDIEP sans hésiter. Excellente qualité de service.",
    note: 5,
    verified: true,
    date: "Il y a 1 semaine"
  },
  {
    nom: "Yao Marcel",
    service: "Menuiserie",
    message: "Service sérieux et devis respecté. Très satisfait du résultat final. Une équipe à l'écoute et compétente.",
    note: 4,
    verified: true,
    date: "Il y a 2 semaines"
  },
  {
    nom: "Koné Fatoumata",
    service: "Électricité",
    message: "Dépannage d'urgence effectué rapidement. Technicien très compétent et sympathique. Prix correct.",
    note: 5,
    verified: true,
    date: "Il y a 3 jours"
  },
  {
    nom: "Diallo Ibrahim",
    service: "Plomberie",
    message: "Réparation de fuite réalisée en moins de 2h. Travail soigné et professionnel. Je recommande !",
    note: 5,
    verified: true,
    date: "Il y a 5 jours"
  },
  {
    nom: "N'Guessan Marie",
    service: "Menuiserie",
    message: "Installation de porte parfaite. Finitions impeccables. Très satisfaite du service.",
    note: 4,
    verified: true,
    date: "Il y a 1 semaine"
  }
];

function Temoignages() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal
  const sectionRef = useRef(null);

  const itemsPerPage = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filtrer les avis
  const filteredAvis = filter === "Tous" 
    ? allAvis 
    : allAvis.filter(avis => avis.service === filter);

  // Pagination
  const totalPages = Math.ceil(filteredAvis.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const displayedAvis = filteredAvis.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filter]);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const filters = ["Tous", "Plomberie", "Menuiserie", "Électricité"];

  // Calculer les statistiques
  const stats = {
    total: allAvis.length,
    average: (allAvis.reduce((acc, a) => acc + a.note, 0) / allAvis.length).toFixed(1),
    verified: allAvis.filter(a => a.verified).length
  };

  return (
    <>
      <section 
        className={style.testimonials}
        id="temoignages"
        ref={sectionRef}
      >
        <h2 className={style.title}>Ils nous font confiance</h2>
        <p className={style.subtitle}>
          Découvrez les avis authentiques de nos clients satisfaits
        </p>

        {/* Statistiques */}
        <div className={style.statsContainer}>
          <div className={style.statCard}>
            <div className={style.statNumber}>{stats.total}+</div>
            <div className={style.statLabel}>Avis clients</div>
          </div>
          <div className={style.statCard}>
            <div className={style.statNumber}>{stats.average}/5</div>
            <div className={style.statLabel}>Note moyenne</div>
          </div>
          <div className={style.statCard}>
            <div className={style.statNumber}>{stats.verified}</div>
            <div className={style.statLabel}>Avis vérifiés</div>
          </div>
        </div>

        {/* Filtres */}
        <div className={style.filterButtons}>
          {filters.map(f => (
            <button
              key={f}
              className={`${style.filterBtn} ${filter === f ? style.active : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cartes d'avis */}
        <div className={style.container}>
          {displayedAvis.map((item, index) => (
            <div 
              key={index}
              className={style.card}
            >
              {/* Badge vérifié */}
              {item.verified && (
                <div className={style.verified} title="Avis vérifié">
                  <FaCheckCircle />
                </div>
              )}

              {/* Icône citation */}
              <FaQuoteLeft className={style.quoteIcon} />

              {/* Étoiles */}
              <div className={style.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    style={{ 
                      opacity: i < item.note ? 1 : 0.3 
                    }} 
                  />
                ))}
              </div>

              {/* Message */}
              <p className={style.message}>{item.message}</p>

              {/* Auteur avec avatar */}
              <div className={style.author}>
                <div className={style.avatar}>
                  <FaUser />
                </div>
                <div className={style.authorInfo}>
                  <h4 className={style.name}>{item.nom}</h4>
                  <span className={style.service}>{item.service}</span>
                </div>
              </div>

              {/* Date */}
              <div className={style.date}>{item.date}</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={style.pagination}>
            <button 
              className={style.pageButton}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <FaChevronLeft />
            </button>
            
            <span className={style.pageInfo}>
              {currentPage + 1} / {totalPages}
            </span>
            
            <button 
              className={style.pageButton}
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Bouton "Laisser un avis" - Ouvre le modal */}
        <button 
          className={style.moreButton}
          onClick={() => setIsModalOpen(true)}
        >
          Laisser un avis
        </button>
      </section>

      {/* Modal pour laisser un avis */}
      <AvisModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default Temoignages;