export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Nos Services</h2>

      <div className="services-grid">

        {/* CARD 1 */}
        <div className="service-card">
          <img src="/images/regular.png" alt="Gym" />

          <span className="tag">GYM</span>
          <h3>Musculation</h3>
          <p className="subtitle">Accès libre & machines modernes</p>

          <p className="price">
            60 TND <small>/ mois</small>
          </p>

          <button className="service-btn light">
            Découvrir
          </button>

          <ul>
            <li>✔ Machines professionnelles</li>
            <li>✔ Accès illimité</li>
            <li>✔ Vestiaires inclus</li>
            <li>✔ Coaching basique</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="service-card featured">
          <img src="/images/pro.png" alt="Coach" />

          <span className="tag">COACHING</span>
          <h3>Personal Training</h3>
          <p className="subtitle">Programme sur mesure</p>

          <p className="price">
            90 TND <small>/ mois</small>
          </p>

          <button className="service-btn dark">
            Découvrir
          </button>

          <span className="recommended">Recommandé</span>

          <ul>
            <li>✔ Coach personnel</li>
            <li>✔ Suivi hebdomadaire</li>
            <li>✔ Objectifs précis</li>
            <li>✔ Résultats rapides</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="service-card premium">
          <img src="/images/premieum.png" alt="Transformation" />

          <span className="tag">TRANSFORMATION</span>
          <h3>Premium 🎫</h3>
          <p className="subtitle">Coaching + Nutrition</p>

          <p className="price">
            160 TND <small>/ mois</small>
          </p>

          <button className="service-btn gradient">
            Découvrir
          </button>

          <ul>
            <li>✔ Coaching avancé</li>
            <li>✔ Nutrition personnalisée</li>
            <li>✔ Suivi quotidien</li>
            <li>✔ Résultats garantis</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
