function Booking() {
  return (
    <section className="booking">
      <div className="booking-header">
        <p className="section-label">BOOK YOUR SESSION</p>

        <h2>
          READY TO <span>PLAY?</span>
        </h2>

        <p className="booking-description">
          Choose your gaming session and reserve your spot at our gaming hub.
        </p>
      </div>

      <div className="booking-content">

        {/* LEFT SIDE */}
        <div className="booking-info">
          <h3>RESERVE YOUR GAMING SESSION</h3>

          <p>
            Select your preferred plan, choose a convenient date and time,
            and get ready for an unforgettable gaming experience.
          </p>

          <div className="booking-features">

            <div className="booking-feature">
              <span className="feature-icon">🎮</span>

              <div>
                <h4>PREMIUM GAMING SETUP</h4>
                <p>
                  Enjoy a high-quality PlayStation gaming experience.
                </p>
              </div>
            </div>

            <div className="booking-feature">
              <span className="feature-icon">👥</span>

              <div>
                <h4>PLAY WITH FRIENDS</h4>
                <p>
                  Bring your squad and have a blast together!
                </p>
              </div>
            </div>

            <div className="booking-feature">
              <span className="feature-icon">⚡</span>

              <div>
                <h4>QUICK & EASY BOOKING</h4>
                <p>
                  Choose your plan, date, and time slot with just a few clicks.
                </p>
              </div>
            </div>

          </div>

          <div className="booking-price">
            <span>SESSION STARTS FROM</span>
            <strong>INR 100</strong>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="booking-form">
          <form>

            <div className="form-group">
              <label htmlFor="name">FULL NAME</label>

              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="phone">PHONE NUMBER</label>

              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>


            <div className="form-row">

              <div className="form-group">
                <label htmlFor="plan">SELECT PLAN</label>

                <select id="plan" defaultValue="" required>
                  <option value="" disabled>
                    Choose a plan
                  </option>

                  <option value="basic">
                    Basic - INR 100
                  </option>

                  <option value="pro">
                    Pro - INR 180
                  </option>

                  <option value="elite">
                    Elite - INR 250
                  </option>
                </select>
              </div>


              <div className="form-group">
                <label htmlFor="players">NUMBER OF PLAYERS</label>

                <select id="players" defaultValue="" required>
                  <option value="" disabled>
                    Players
                  </option>

                  <option value="1">
                    1 Player
                  </option>

                  <option value="2">
                    2 Players
                  </option>

                  <option value="3">
                    3 Players
                  </option>

                  <option value="4">
                    4 Players
                  </option>
                </select>
              </div>

            </div>


            <div className="form-row">

              <div className="form-group">
                <label htmlFor="date">SELECT DATE</label>

                <input
                  type="date"
                  id="date"
                  min={new Date().toISOString().split("T")[0]}
                  onClick={(e) => e.target.showPicker()}
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="time">SELECT TIME SLOT</label>

                <select id="time" defaultValue="" required>
                  <option value="" disabled>
                    Choose a time slot
                  </option>

                  <option value="10:00">
                    10:00 AM
                  </option>

                  <option value="12:00">
                    12:00 PM
                  </option>

                  <option value="14:00">
                    2:00 PM
                  </option>

                  <option value="16:00">
                    4:00 PM
                  </option>

                  <option value="18:00">
                    6:00 PM
                  </option>

                  <option value="20:00">
                    8:00 PM
                  </option>
                </select>
              </div>

            </div>


            <button
              type="submit"
              className="booking-button"
            >
              BOOK NOW
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Booking;