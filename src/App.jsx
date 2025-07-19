import { useState, useEffect } from "react";
import { HeroMain } from "./components/heroSection/HeroMain";
import HamsterLoader from "./components/Loader/Loader";
import Navbarmain from "./components/navbar/Navbarmain";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3659);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="font-body min-h-screen">
      {loading ? (
        <div className="grid place-items-center min-h-screen w-screen bg-[#121621]">
      <HamsterLoader />
    </div>
      ) : (
        <div className="pt-3">
          <Navbarmain />
          <HeroMain />
        </div>
      )}
    </main>
  );
}

export default App;
