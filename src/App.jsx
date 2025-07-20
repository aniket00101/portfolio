import { useState, useEffect } from "react";
import { HeroMain } from "./components/heroSection/HeroMain";
import HamsterLoader from "./components/Loader/Loader";
import Navbarmain from "./components/navbar/Navbarmain";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3655);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="font-body min-h-screen ">
      {loading ? (
        <div className="grid place-items-center min-h-screen w-screen bg-[#121621]">
          <HamsterLoader />
        </div>
      ) : (
        // <div className="pt-3 w-screen mx-1">
        //   <Navbarmain />
        //   <HeroMain />
        // </div>
        <div className="fixed inset-0 flex items-center justify-center bg-black">
  <div className="w-[98%] h-[95vh] m-2 p-2 border border-white box-border">
    <Navbarmain />
    <HeroMain />
  </div>
</div>

      )}
    </main>
  );
}

export default App;
