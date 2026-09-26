function GameLibrary() {
  const games = [
    {
      name: "FC 24",
      image: "/src/assets/images/games/fc24.jpg",
    },
    {
      name: "GTA V",
      image: "/src/assets/images/games/gta5.jpg",
    },
    {
      name: "TEKKEN 8",
      image: "/src/assets/images/games/tekken8.jpg",
    },
    {
      name: "MORTAL KOMBAT 1",
      image: "/src/assets/images/games/mortal-kombat1.jpg",
    },
    {
      name: "WWE 2K24",
      image: "/src/assets/images/games/wwe2k24.jpg",
    },
    {
      name: "UFC 5",
      image: "/src/assets/images/games/ufc5.jpg",
    },
    {
      name: "SPIDER-MAN 2",
      image: "/src/assets/images/games/spiderman2.jpg",
    },
    {
      name: "GHOST OF TSUSHIMA",
      image: "/src/assets/images/games/ghost-of-tsushima.jpg",
    },
  ];

  return (
    <section className="game-library" id="games">
      <div className="library-header">
        <p className="section-label">EXPLORE THE LIBRARY</p>

        <h2>
          CHOOSE YOUR <span>GAME.</span>
        </h2>

        <p className="library-description">
          From competitive battles to immersive adventures, choose your
          favourite game and start playing at NEXORA.
        </p>
      </div>

      <div className="game-grid">
        {games.map((game) => (
          <div
            className="game-card"
            key={game.name}
            style={{
              backgroundImage: `url(${game.image})`,
            }}
          >
            <div className="game-overlay"></div>

            <div className="game-card-content">
              <span className="game-number">PS5</span>

              <h3>{game.name}</h3>

              <span className="game-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GameLibrary;