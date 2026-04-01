import Navbarlogo from "./Navbarlogo";
import Navbarlinks from "./Navbarlinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import Chatbot from "./chatbot";

function Navbarmain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    darkTheme ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkTheme]);

  return (
    <>
      <nav className="max-w-[1300px] mx-auto sm:px-3 px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-3 mt-2">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto items-center p-6 rounded-r-full lg:pr-5 sm:p-3 sm:rounded-full rounded-l-full backdrop-blur-[9px] border-[2px] border-orange">
          <Navbarlogo />
          <div className={`lg:block ${menuOpen ? "block" : "hidden"} md:hidden`}>
            <Navbarlinks />
          </div>
        </div>

        <div className="flex lg:hidden sm:block sm:p-2 backdrop-blur-[9px] items-center justify-center rounded-full border-[2px] border-orange">
          <button className="text-2xl p-3 border-[2px] border-orange rounded-full text-white" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>

        <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
          <Navbarlinks />
        </div>
      </nav>

      <Chatbot />
    </>
  );
}

export default Navbarmain;