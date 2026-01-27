import React from "react";
import "../styles/Home.css";

function Home({ setPage }) {
  return (
    <>
      <section className="why-hero">
        <div className="why-overlay"></div>

        <div className="why-content">
          <span className="why-subtitle">Pourquoi nous choisir ?</span>

          <h2>
            UNE SALLE DE SPORT
            <br />
            ADAPTÉE À TOUS
          </h2>

          <p>
            ST-GYM vous accompagne chaque jour pour atteindre vos objectifs.
            Débutant ou confirmé, profitez d’équipements modernes, d’un
            encadrement professionnel et d’une ambiance motivante.
          </p>

          <button className="cta-btn" onClick={() => setPage("services")}>
            Devenez un membre
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>À propos de nous</h2>
        <p>
          ST-GYM est une salle de sport moderne proposant des équipements de
          haute qualité, des cours collectifs et un coaching personnalisé.
          Adaptée à tous les niveaux, elle offre un environnement motivant et
          confortable pour aider ses membres à atteindre leurs objectifs de
          forme et de bien-être.
        </p>
      </section>

      {/* OPENING HOURS */}
      <section className="opening-hours">
        <h2>Horaires d’ouverture</h2>

        <div className="hours-card animated-card">
          <div className="status">🟢 Ouvert maintenant</div>

          <div className="day">
            <span>Lundi – Vendredi</span>
            <strong>06:00 – 23:00</strong>
          </div>

          <div className="day">
            <span>Samedi</span>
            <strong>08:00 – 22:00</strong>
          </div>

          <div className="day">
            <span>Dimanche</span>
            <strong>08:00 – 14:00</strong>
          </div>
        </div>

        <p className="hours-note">
          ⏱️ Accès flexible – entraînez-vous quand vous voulez
        </p>
      </section>

      {/* MOTIVATION */}
      <section className="section motivation">
        <h2>Motivation</h2>
        <p>
          Ne repousse pas à demain ce que tu peux transformer aujourd’hui. La
          meilleure version de toi-même commence ici 💪
        </p>
      </section>

      {/* GALLERY */}
      <section className="section">
        <h2>Notre salle en images</h2>
        <div className="Photo">
          <img src="/images/gym3.jpg" alt="Gym 1" />
          <img src="/images/gym4.jpg" alt="Gym 2" />
          <img src="/images/gym5.jpg" alt="Gym 3" />
        </div>
      </section>
    </>
  );
}

export default Home;
