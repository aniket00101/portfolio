import { useState, useEffect } from "react";
import { HeroMain } from "./components/heroSection/HeroMain";
import HamsterLoader from "./components/Loader/Loader";
import Navbarmain from "./components/navbar/Navbarmain";
import { AboutMeMain } from "./components/aboutmesection/AboutMeMain";
import Helper from "./components/HelperSection/Helper";
import SkillsMain from "./components/skillssection/SkillsMain";
import ExperienceMain from "./components/experience/ExperienceMain";
import ProjectMain from "./components/projectsSection/ProjectMain";
import ContactMeMain from "./components/contactSection/ContactMeMain";

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
        <div>
          <div className="pt-3 w-full mx-1 dark:bg-red-600">
            <Navbarmain />
            <HeroMain />
            <AboutMeMain />
            <SkillsMain />
            <ExperienceMain />
            <ProjectMain />
            <ContactMeMain />
            <Helper />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
