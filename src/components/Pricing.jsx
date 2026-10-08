function Pricing() {
  const plans = [
    {
      name: "BASIC",
      duration: "1 HOUR",
      price: "INR 100",
      features: [
        "PS5 Gaming",
        "Standard Gaming Setup",
        "Access to Game Library",
      ],
    },
    {
      name: "PRO",
      duration: "2 HOURS",
      price: "INR 180",
      features: [
        "PS5 Gaming",
        "Premium Gaming Setup",
        "Full Game Library Access",
      ],
      popular: true,
    },
    {
      name: "ELITE",
      duration: "3 HOURS",
      price: "INR 250",
      features: [
        "PS5 Gaming",
        "Premium Gaming Setup",
        "Multiplayer Gaming",
      ],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <p className="section-label">CHOOSE YOUR EXPERIENCE</p>

        <h2>
          PLAY MORE. <span>HAVE MORE FUN.</span>
        </h2>

        <p className="pricing-description">
          Flexible gaming sessions designed for every type of player.
        </p>
      </div>

      <div className="pricing-grid">
            {plans.map((plan) => (
                <div
                    className={`pricing-card ${plan.popular ? "popular" : ""}`}
                    key={plan.name}
                >
                    {plan.popular && (
                    <span className="popular-badge">MOST POPULAR</span>
                    )}

                    <div className="pricing-card-header">
                        <p className="plan-name">{plan.name}</p>
                        <p className="plan-duration">{plan.duration}</p>
                    </div>

                    <div className="plan-price">
                        <span>{plan.price}</span>
                    </div>

                    <ul className="plan-features">
                        {plan.features.map((feature) => (
                            <li key={feature}>
                                <span>✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="pricing-button">BOOK NOW</button>
                </div>
            ))}
      </div>
    </section>
  );
}

export default Pricing;