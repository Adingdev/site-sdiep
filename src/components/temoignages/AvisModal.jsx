// AvisModal.jsx
import { useState } from "react";
import style from "./avisModal.module.css";
import { 
  FaStar, 
  FaTimes, 
  FaUser, 
  FaPhone, 
  FaBriefcase, 
  FaComment,
  FaCheckCircle,
  FaPaperPlane,
  FaExclamationCircle
} from "react-icons/fa";

function AvisModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    service: "",
    commentaire: ""
  });

  const [errors, setErrors] = useState({});

  // Textes pour les étoiles
  const ratingTexts = {
    1: "Très insatisfait 😞",
    2: "Insatisfait 😕",
    3: "Correct 😐",
    4: "Satisfait 😊",
    5: "Très satisfait 🤩"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (rating === 0) {
      newErrors.rating = "Veuillez sélectionner une note";
    }
    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le téléphone est requis";
    } else if (!/^[0-9]{10}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = "Numéro de téléphone invalide (10 chiffres)";
    }
    if (!formData.service) {
      newErrors.service = "Veuillez sélectionner un service";
    }
    if (!formData.commentaire.trim()) {
      newErrors.commentaire = "Le commentaire est requis";
    } else if (formData.commentaire.trim().length < 20) {
      newErrors.commentaire = "Le commentaire doit contenir au moins 20 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Construire le message WhatsApp
    const message = `
NOUVEL AVIS CLIENT - SDIEP

Note : ${rating}/5 étoiles ${ratingTexts[rating]}

 Client :
Nom : ${formData.nom}
Téléphone : ${formData.telephone}
Service utilisé : ${formData.service}

 Commentaire :
${formData.commentaire}

---
Merci pour votre confiance ! 🙏
`;

    const phoneNumber = "2250574378201"; // Remplacez par votre numéro WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Ouvrir WhatsApp
    window.open(whatsappUrl, "_blank");

    // Afficher le message de succès
    setShowSuccess(true);
  };

  const handleClose = () => {
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      telephone: "",
      service: "",
      commentaire: ""
    });
    setRating(0);
    setErrors({});
    setShowSuccess(false);
    onClose();
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`${style.modalOverlay} ${isOpen ? style.show : ''}`}
      onClick={handleClose}
    >
      <div 
        className={style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {!showSuccess ? (
          <>
            {/* Header */}
            <div className={style.modalHeader}>
              <h2>
                <FaStar />
                Laisser un Avis
              </h2>
              <p>Votre satisfaction est notre priorité. Partagez votre expérience !</p>
              <button 
                className={style.closeButton}
                onClick={handleClose}
                aria-label="Fermer"
              >
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className={style.modalBody}>
              <form onSubmit={handleSubmit}>
                {/* Section notation */}
                <div className={style.ratingSection}>
                  <label className={style.ratingLabel}>
                    Comment évaluez-vous notre service ? <span className={style.required}>*</span>
                  </label>
                  <div className={style.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`${style.star} ${
                          star <= (hoverRating || rating) ? style.filled : ''
                        }`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      />
                    ))}
                  </div>
                  <div className={style.ratingText}>
                    {ratingTexts[hoverRating || rating] || "Cliquez pour noter"}
                  </div>
                  {errors.rating && (
                    <div className={style.errorText}>
                      <FaExclamationCircle />
                      {errors.rating}
                    </div>
                  )}
                </div>

                {/* Nom */}
                <div className={style.formGroup}>
                  <label className={style.formLabel}>
                    <FaUser />
                    Nom complet <span className={style.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    className={style.formInput}
                    placeholder="Ex: Kouassi Jean"
                    value={formData.nom}
                    onChange={handleInputChange}
                  />
                  {errors.nom && (
                    <div className={style.errorText}>
                      <FaExclamationCircle />
                      {errors.nom}
                    </div>
                  )}
                </div>

                {/* Téléphone */}
                <div className={style.formGroup}>
                  <label className={style.formLabel}>
                    <FaPhone />
                    Téléphone (WhatsApp) <span className={style.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    className={style.formInput}
                    placeholder="Ex: 0777123456"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                  {errors.telephone && (
                    <div className={style.errorText}>
                      <FaExclamationCircle />
                      {errors.telephone}
                    </div>
                  )}
                </div>

                {/* Service */}
                <div className={style.formGroup}>
                  <label className={style.formLabel}>
                    <FaBriefcase />
                    Service utilisé <span className={style.required}>*</span>
                  </label>
                  <select
                    name="service"
                    className={style.formSelect}
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Sélectionnez un service...</option>
                    <option value="Plomberie">Plomberie</option>
                    <option value="Menuiserie">Menuiserie</option>
                    <option value="Électricité">Électricité</option>
                    <option value="Maçonnerie">Maçonnerie</option>
                    <option value="Autre">Autre</option>
                  </select>
                  {errors.service && (
                    <div className={style.errorText}>
                      <FaExclamationCircle />
                      {errors.service}
                    </div>
                  )}
                </div>

                {/* Commentaire */}
                <div className={style.formGroup}>
                  <label className={style.formLabel}>
                    <FaComment />
                    Votre avis <span className={style.required}>*</span>
                  </label>
                  <textarea
                    name="commentaire"
                    className={style.formTextarea}
                    placeholder="Partagez votre expérience avec SDIEP... (minimum 20 caractères)"
                    value={formData.commentaire}
                    onChange={handleInputChange}
                  />
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: '#94a3b8', 
                    marginTop: '5px' 
                  }}>
                    {formData.commentaire.length} / 500 caractères
                  </div>
                  {errors.commentaire && (
                    <div className={style.errorText}>
                      <FaExclamationCircle />
                      {errors.commentaire}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className={style.infoBox}>
                  <strong>ℹ️ Information</strong>
                  Votre avis sera envoyé via WhatsApp pour vérification. 
                  Nous ne publions que les avis authentiques de nos clients.
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className={style.modalFooter}>
              <button 
                type="button"
                className={style.cancelButton}
                onClick={handleClose}
              >
                <FaTimes />
                Annuler
              </button>
              <button 
                type="submit"
                className={style.submitButton}
                onClick={handleSubmit}
              >
                <FaPaperPlane />
                Envoyer l'avis
              </button>
            </div>
          </>
        ) : (
          /* Message de succès */
          <div className={style.successMessage}>
            <div className={style.successIcon}>
              <FaCheckCircle />
            </div>
            <h3>Merci pour votre avis !</h3>
            <p>
              Votre retour d'expérience a été envoyé avec succès via WhatsApp. 
              Nous vous remercions pour votre confiance et prendrons en compte 
              votre témoignage après vérification.
            </p>
            <button 
              className={style.successButton}
              onClick={handleSuccessClose}
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AvisModal;