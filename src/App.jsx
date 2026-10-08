import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GamingExperience from "./components/GamingExperience";
import GameLibrary from "./components/GameLibrary";
import Pricing from "./components/Pricing"; 
import Gallery from "./components/Gallery";
import GamingZone from "./components/GamingZone";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <GamingExperience />
      <GameLibrary />
      <Pricing />
      <Gallery />
      <GamingZone />
      <Booking />

      <main id="home">
        <h1>NEXORA GAMING HUB</h1>
        <p>PLAY. CHILL. COMPETE.</p>
      </main>
    </>
  );
}

export default App;