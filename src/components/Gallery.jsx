function Gallery() {
    const images = [
        {
            image: "/src/assets/images/gaming/gaming-controllers.jpg",
            title: "GAMING EXPERIENCE",
        },
        {
            image: "/src/assets/images/gaming/gaming-lounge.png",
            title: "NEXORA GAMING",
        },
        {
            image: "/src/assets/images/gaming/console-gaming.jpg",
            title: "PREMIUM GAMING",
        },
    ];

    return (
        <section className="gallery" id="gallery">
            <div className="gallery-header">
                <p className="section-label">STEP INTO THE EXPERIENCE</p>

                <h2>
                    SEE THE <span>EXPERIENCE.</span>
                </h2>

                <p className="gallery-description">
                    Take a look at the gaming environment, premium setups, and the
                    atmosphere waiting for you at NEXORA.
                </p>
            </div>

            <div className="gallery-grid">
                {images.map((item) => (
                    <div className="gallery-card" key={item.title}>
                        <img src={item.image} alt={item.title} />
                        
                        <div className="gallery-overlay">
                            <span>{item.title}</span>
                            <span className="gallery-arrow">→</span>
                        </div>
                    </div>
                ))}

            </div>
        </section>
                
    );
} 

export default Gallery;