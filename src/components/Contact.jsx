import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "sr6zy28", //SERVICE ID
        "template_9r58xnl", //TEMPLATE ID
        form.current,
        "rqXXSMFBN9wfEz2Uk", //PUBLIC KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <section className="contact">
      <h2>Contactez-nous</h2>
      <p className="contact-desc">
        Des questions ? Envoyez-nous un message. 👇
      </p>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="name" required />
          <label>Nom</label>
        </div>

        <div className="input-group">
          <input type="email" name="email" required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input type="tel" name="phone" required />
          <label>Téléphone</label>
        </div>

        <div className="input-group">
          <textarea name="message" rows="4" required></textarea>
          <label>Message</label>
        </div>

        <button type="submit">Envoyer un message</button>
      </form>

      <a
        href="https://wa.me/21629034764?text=Salut%20ST-GYM%20Je%20veux%20plus%20informations"
        className="whatsapp-bouton"
        target="_blank"
        rel="noreferrer"
      >
        Contactez-nous sur WhatsApp
      </a>

      {success && (
        <div className="success-message show">
          ✅ Message envoyé avec succès !
        </div>
      )}

      {error && (
        <div className="error-message show">❌ Erreur, réessayez !</div>
      )}
    </section>
  );
}

export default Contact;
