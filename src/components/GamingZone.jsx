import gamingZone from "../assets/images/gaming-zone/gaming-zone.jpg";

function GamingZone() {
  return (
    <section className="gaming-zone">
      <div className="gaming-zone-content">
        <div className="gaming-zone-text">
          <p className="section-label">THE GAMING ZONE</p>

          <h2>
            YOUR GAME. <span>YOUR ZONE.</span>
          </h2>

          <p className="gaming-zone-description">
            Experience immersive PS5 gaming with premium setups, comfortable
            seating, and everything you need to play, compete, and enjoy.
          </p>

          <div className="gaming-zone-features">
            <div className="zone-feature">
              <span>01</span>
              <h3>PS5 GAMING STATIONS</h3>
            </div>

            <div className="zone-feature">
              <span>02</span>
              <h3>IMMERSIVE DISPLAYS</h3>
            </div>

            <div className="zone-feature">
              <span>03</span>
              <h3>PREMIUM ACCESSORIES</h3>
            </div>

            <div className="zone-feature">
              <span>04</span>
              <h3>COMFORTABLE SPACE</h3>
            </div>
          </div>
        </div>

        <div className="gaming-zone-visual">
          <div className="gaming-zone-image">
            <img src={gamingZone} alt="PS5 Gaming Zone" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GamingZone;