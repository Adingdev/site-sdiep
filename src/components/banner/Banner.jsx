import { useState, useEffect } from "react";
import { 
  FaTools, 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaHome,
  FaBriefcase,
  FaGlobe,
  FaIdCard,
  FaCheckCircle,
  FaWhatsapp
} from "react-icons/fa";
import style from "./banner.module.css";
import banner1 from "../../assets/images/banner1.png";
import banner5 from "../../assets/images/banner5.png";
import banner3 from "../../assets/images/banner3.png";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import apropos from "../../assets/images/apropos.png";
import img1 from "../../assets/images/img1.png";
function Banner() {
  /* ================= SLIDER ================= */
  const images = [
    banner1,
    banner5,
    banner3,
    img2,
    img3,
    img4,
    img5,
    apropos,
    img1

  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ================= DEVIS ================= */
  const [devis, setDevis] = useState({
    services: [],
    date: "",
    heure: "",
    nom: "",
    telephone: "",
    commune: "",
    quartier: "",
  });

  const [devisErrors, setDevisErrors] = useState({});

  const handleDevisChange = (e) => {
    setDevis({ ...devis, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service) => {
    setDevis(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateDevis = () => {
    let errors = {};
    if (devis.services.length === 0) errors.services = "Sélectionnez au moins un service";
    if (!devis.nom) errors.nom = "Nom requis";
    if (!devis.telephone) errors.telephone = "Téléphone requis";
    if (!devis.commune) errors.commune = "Commune requise";
    setDevisErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const envoyerDevisWhatsApp = () => {
    if (!validateDevis()) return;

    const msg = `
🔧 RÉSERVATION DÉPANNAGE – SDIEP

Service(s) : ${devis.services.join(", ")}
Date préférée : ${devis.date || "Non spécifiée"}
Heure préférée : ${devis.heure || "Non spécifiée"}

👤 Client :
Nom : ${devis.nom}
Téléphone : ${devis.telephone}
Adresse : ${devis.commune}${devis.quartier ? " - " + devis.quartier : ""}
`;

    const phone = "2250574378201"; // numero admin
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  /* ================= POSTULER ================= */
  const [candidat, setCandidat] = useState({
    metier: "",
    autreMetier: "",
    nom: "",
    nationalite: "",
    tel1: "",
    tel2: "",
    adresse: "",
  });

  const [postErrors, setPostErrors] = useState({});

  const handlePostChange = (e) => {
    setCandidat({ ...candidat, [e.target.name]: e.target.value });
  };

  const validatePost = () => {
    let errors = {};
    if (!candidat.metier) errors.metier = "Métier requis";
    if (candidat.metier === "Autre" && !candidat.autreMetier) {
      errors.autreMetier = "Précisez votre métier";
    }
    if (!candidat.nom) errors.nom = "Nom requis";
    if (!candidat.nationalite) errors.nationalite = "Nationalité requise";
    if (!candidat.tel1) errors.tel1 = "Numéro requis";
    if (!candidat.adresse) errors.adresse = "Adresse requise";
    setPostErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const envoyerPostWhatsApp = () => {
    if (!validatePost()) return;

    const metierFinal = candidat.metier === "Autre" ? candidat.autreMetier : candidat.metier;

    const msg = `
 CANDIDATURE PROFESSIONNEL – SDIEP

Métier : ${metierFinal}
Nom : ${candidat.nom}
Nationalité : ${candidat.nationalite}
Téléphone 1 : ${candidat.tel1}
Téléphone 2 : ${candidat.tel2 || "Non fourni"}
Adresse : ${candidat.adresse}

 Je joins ma photo CNI dans cette discussion.
`;

    const phone = "2250777000000"; // Remplacez par votre numéro
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* ================= BANNER ================= */}
      <section
        className={style.banner}
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className={style.overlay}></div>

        <div className={`${style.content} ${fade ? style.fadeIn : style.fadeOut}`}>
          <h1 className={style.title}>Réparations & Dépannages Professionnels</h1>

          <p className={style.subtitle}>
            Plomberie • Menuiserie • Électricité • Maçonnerie<br/>
            Interventions rapides avec des techniciens qualifiés
          </p>

          <div className={style.buttons}>
            <button
              className={style.ctaButton}
              data-bs-toggle="modal"
              data-bs-target="#devisModal"
            >
              <FaTools style={{ display: 'inline', marginRight: '8px' }} />
              Demander un Devis
            </button>

            <button
              className={style.postuleButton}
              data-bs-toggle="modal"
              data-bs-target="#postulerModal"
            >
              <FaBriefcase style={{ display: 'inline', marginRight: '8px' }} />
              Postuler comme Professionnel
            </button>
          </div>
        </div>
      </section>

      {/* ================= MODAL DEVIS ================= */}
      <div className="modal fade" id="devisModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className={`modal-header ${style.modalHeaderBlue}`}>
              <h5 className="modal-title">
                <FaTools style={{ display: 'inline', marginRight: '10px' }} />
                Réserver un Dépannage
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {/* Services */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Service(s) Requis <span className="text-danger">*</span>
                </label>
                <div className="row">
                  {["Plomberie", "Menuiserie", "Électricité", "Maçonnerie", "Autres"].map(service => (
                    <div className="col-md-6 mb-2" key={service}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`service-${service}`}
                          checked={devis.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                        />
                        <label className="form-check-label" htmlFor={`service-${service}`}>
                          {service}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                {devisErrors.services && <div className="text-danger small mt-1">{devisErrors.services}</div>}
              </div>

              {/* Date et Heure */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    <FaCalendarAlt style={{ display: 'inline', marginRight: '5px' }} />
                    Date Préférée
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    onChange={handleDevisChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    <FaClock style={{ display: 'inline', marginRight: '5px' }} />
                    Heure Préférée
                  </label>
                  <input
                    type="time"
                    name="heure"
                    className="form-control"
                    onChange={handleDevisChange}
                  />
                </div>
              </div>

              {/* Nom */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  <FaUser style={{ display: 'inline', marginRight: '5px' }} />
                  Nom Complet <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  className="form-control"
                  placeholder="Ex: Jean Kouassi"
                  onChange={handleDevisChange}
                />
                {devisErrors.nom && <div className="text-danger small mt-1">{devisErrors.nom}</div>}
              </div>

              {/* Téléphone */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  <FaPhone style={{ display: 'inline', marginRight: '5px' }} />
                  Téléphone (WhatsApp) <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  name="telephone"
                  className="form-control"
                  placeholder="Ex: 2250574378201"
                  onChange={handleDevisChange}
                />
                {devisErrors.telephone && <div className="text-danger small mt-1">{devisErrors.telephone}</div>}
              </div>

              {/* Commune et Quartier */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    <FaMapMarkerAlt style={{ display: 'inline', marginRight: '5px' }} />
                    Commune <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="commune"
                    className="form-control"
                    placeholder="Ex: Cocody"
                    onChange={handleDevisChange}
                  />
                  {devisErrors.commune && <div className="text-danger small mt-1">{devisErrors.commune}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    <FaHome style={{ display: 'inline', marginRight: '5px' }} />
                    Quartier
                  </label>
                  <input
                    type="text"
                    name="quartier"
                    className="form-control"
                    placeholder="Ex: Riviera"
                    onChange={handleDevisChange}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-success btn-lg w-100" onClick={envoyerDevisWhatsApp}>
                <FaWhatsapp style={{ display: 'inline', marginRight: '8px' }} />
                Envoyer la Réservation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL POSTULER ================= */}
      <div className="modal fade" id="postulerModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className={`modal-header ${style.modalHeaderGreen}`}>
              <h5 className="modal-title">
                <FaBriefcase style={{ display: 'inline', marginRight: '10px' }} />
                Postuler comme Professionnel
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {/* Info Box */}
              <div className="alert alert-info" role="alert">
                <strong>ℹ️ Information importante :</strong><br/>
                Ce formulaire est réservé aux professionnels indépendants (freelance). 
                Si vous êtes Menuisier, Électricien, Plombier ou similaire, vous êtes au bon endroit. 
                Si vous ne correspondez pas à ces critères, merci de ne pas remplir ce formulaire.
              </div>

              {/* Métier */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Votre Métier <span className="text-danger">*</span>
                </label>
                <select
                  name="metier"
                  className="form-select"
                  onChange={handlePostChange}
                >
                  <option value="">Choisir un métier...</option>
                  <option>Menuisier</option>
                  <option>Électricien</option>
                  <option>Plombier</option>
                  <option>Autre</option>
                </select>
                {postErrors.metier && <div className="text-danger small mt-1">{postErrors.metier}</div>}
              </div>

              {/* Autre Métier */}
              {candidat.metier === "Autre" && (
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Précisez votre métier <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="autreMetier"
                    className="form-control"
                    placeholder="Ex: Maçon, Peintre..."
                    onChange={handlePostChange}
                  />
                  {postErrors.autreMetier && <div className="text-danger small mt-1">{postErrors.autreMetier}</div>}
                </div>
              )}

              {/* Nom */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  <FaUser style={{ display: 'inline', marginRight: '5px' }} />
                  Nom Complet <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  className="form-control"
                  placeholder="Ex: Kouadio Jean"
                  onChange={handlePostChange}
                />
                {postErrors.nom && <div className="text-danger small mt-1">{postErrors.nom}</div>}
              </div>

              {/* Nationalité */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  <FaGlobe style={{ display: 'inline', marginRight: '5px' }} />
                  Nationalité <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="nationalite"
                  className="form-control"
                  placeholder="Ex: Ivoirienne"
                  onChange={handlePostChange}
                />
                {postErrors.nationalite && <div className="text-danger small mt-1">{postErrors.nationalite}</div>}
              </div>

              {/* Téléphones */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    <FaPhone style={{ display: 'inline', marginRight: '5px' }} />
                    Numéro 1 (WhatsApp) <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    name="tel1"
                    className="form-control"
                    placeholder="Ex: 2250574378201"
                    onChange={handlePostChange}
                  />
                  {postErrors.tel1 && <div className="text-danger small mt-1">{postErrors.tel1}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    <FaPhone style={{ display: 'inline', marginRight: '5px' }} />
                    Numéro 2 (Optionnel)
                  </label>
                  <input
                    type="tel"
                    name="tel2"
                    className="form-control"
                    placeholder="Ex: 2250574378201"
                    onChange={handlePostChange}
                  />
                </div>
              </div>

              {/* Adresse */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  <FaMapMarkerAlt style={{ display: 'inline', marginRight: '5px' }} />
                  Adresse <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="adresse"
                  className="form-control"
                  placeholder="Ex: Cocody Riviera, près du marché"
                  onChange={handlePostChange}
                />
                {postErrors.adresse && <div className="text-danger small mt-1">{postErrors.adresse}</div>}
              </div>

              {/* Info CNI */}
              <div className="alert alert-warning" role="alert">
                <FaIdCard style={{ display: 'inline', marginRight: '8px' }} />
                <strong>Photo Pièce d'Identité / CNI</strong><br/>
                La photo ne sera pas envoyée automatiquement. Veuillez la joindre dans la discussion WhatsApp.
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-success btn-lg w-100" onClick={envoyerPostWhatsApp}>
                <FaCheckCircle style={{ display: 'inline', marginRight: '8px' }} />
                Envoyer ma Candidature
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;