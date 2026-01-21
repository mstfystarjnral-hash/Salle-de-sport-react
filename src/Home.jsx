function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <h1>ST-GYM</h1>
        <p>Transformez votre corps, améliorez votre vie</p>
      </header>
      {/* WHY CHOOSE US */}
      <section>
        <h2>Pourquoi choisir ST-GYM ?</h2>
        <ul>
          <li>✔ Équipements modernes et performants</li>
          <li>✔ Coachs professionnels certifiés</li>
          <li>✔ Programmes adaptés à tous les niveaux</li>
          <li>✔ Ambiance motivante et conviviale</li>
          <li>✔ Résultats visibles et durables</li>
        </ul>
      </section>
      {/* ABOUT */}
      <section>
        <h2>À propos de nous</h2>
        <p>
          ST-GYM est une salle de sport moderne dédiée à votre bien-être.
          Nous vous accompagnons dans votre transformation physique avec
          des programmes personnalisés et un suivi professionnel.
        </p>
      </section>
      {/* MOTIVATION */}
      <section>
        <h2>Motivation</h2>
        <p>
          Ne repousse pas à demain ce que tu peux transformer aujourd’hui.
          La meilleure version de toi-même commence ici.
        </p>
      </section>
      {/* GALLERY */}
      <section>
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