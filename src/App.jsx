import { useState, useEffect } from "react";
import { HeroMain } from "./components/heroSection/HeroMain";
import HamsterLoader from "./components/Loader/Loader";
import Navbarmain from "./components/navbar/Navbarmain";
import { AboutMeMain } from "./components/aboutmesection/AboutMeMain";
import SkillsMain from "./components/skillssection/SkillsMain";
import ExperienceMain from "./components/experience/ExperienceMain";
import ProjectMain from "./components/projectsSection/ProjectMain";
import ContactMeMain from "./components/contactSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import { HeroGradient } from "./components/heroSection/HeroGradient";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="font-body min-h-screen bg-DarkBrown dark:bg-hex transition-colors duration-500">
      {loading ? (
        <div className="grid place-items-center min-h-screen w-screen bg-[#121621]">
          <HamsterLoader />
        </div>
      ) : (
        <div className="w-full max-w-[100vw] overflow-x-hidden relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
          >
            <source src="/video/background.mp4" type="video/mp4" />
          </video>
          <div className="fixed top-0 left-0 w-screen h-screen z-5 pointer-events-none">
            <HeroGradient />
          </div>
          <div className="pt-3 px-5 w-full dark:bg-red-600 relative z-10">
            <Navbarmain />
            <HeroMain />
            <AboutMeMain />
            <SkillsMain />
            <ExperienceMain />
            <ProjectMain />
            <ContactMeMain />
            <FooterMain />
          </div>
        </div>

      )}
    </main>
  );
}

export default App;

