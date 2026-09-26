function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">WELCOME TO NEXORA</p>

        <h1>
          PLAY. <span>CHILL.</span> COMPETE.
        </h1>

        <p className="hero-description">
          Your ultimate gaming destination. Experience next-level
          PlayStation gaming, exciting matches, and unforgettable moments.
        </p>

        <div className="hero-buttons">
          <a href="#booking" className="hero-btn primary">
            BOOK YOUR SESSION
          </a>

          <a href="#games" className="hero-btn secondary">
            EXPLORE GAMES
          </a>
        </div>
      </div>

      <div className="hero-glow"></div>
    </section>
  );
}

export default Hero;