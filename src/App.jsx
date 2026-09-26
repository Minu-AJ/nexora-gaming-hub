import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GamingExperience from "./components/GamingExperience";
import GameLibrary from "./components/GameLibrary";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <GamingExperience />
      <GameLibrary />

      <main id="home">
        <h1>NEXORA GAMING HUB</h1>
        <p>PLAY. CHILL. COMPETE.</p>
      </main>
    </>
  );
}

export default App;