function About() {
  return (
    <>
      <section className="section">
        <h2>About ST-GYM</h2>
        <p>ST-GYM est une salle moderne pour atteindre vos objectifs.</p>
      </section>

      <section className="testimonials">
        <h2>Avis des clients</h2>

        <div className="testimonial-card">
          <img src="/images/user.png" className="avatar" alt="Ahmed" />
          <p>“La meilleure salle de sport et une super ambiance.”</p>
          <div className="stars">★★★★★</div>
          <span>— Ahmed</span>
        </div>

        <div className="testimonial-card">
          <img src="/images/user1.png" className="avatar" alt="Sarah" />
          <p>
            “Un accompagnement professionnel et des résultats visibles dès le
            premier mois.”
          </p>
          <div className="stars">★★★★★</div>
          <span>— Sarah</span>
        </div>

        <div className="testimonial-card">
          <img src="/images/user.png" className="avatar" alt="Youssef" />
          <p>
            “Propreté, organisation et personnel formé qui connaît son travail.”
          </p>
          <div className="stars">★★★★☆</div>
          <span>— Youssef</span>
        </div>
      </section>
    </>
  );
}

export default About;
