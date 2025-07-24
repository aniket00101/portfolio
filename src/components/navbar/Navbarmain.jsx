import Navbarlogo from "./Navbarlogo";
import Navbarlinks from "./Navbarlinks";

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from "react";
import Chatbot from "./chatbot"; // Import your chatbot component
import { BsRobot, BsSun, BsMoon } from "react-icons/bs";
import { TbMessageChatbot } from "react-icons/tb"; // Optional: chatbot icon

function Navbarmain() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false); // Chatbot toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    }
    const toggleTheme = () => setDarkTheme(!darkTheme);

  // Update HTML class + localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkTheme]);

    return (
        <>
            <nav className="max-w-[1300px] mx-auto sm:px-1 px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-3 mt-2">
                <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full lg:pr-5 sm:p-3 sm:rounded-full rounded-l-full border-[0.5px] border-orange">
                    <Navbarlogo />
                    <div className={`lg:block ${menuOpen ? "block" : "hidden"}`}>
                        <Navbarlinks />
                    </div>
                </div>
                <div className="flex lg:hidden sm:block sm:p-2 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
                    <button className="text-2xl p-3 border border-orange rounded-full text-white" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className="flex sm:block sm:p-2 bg-black items-center justify-center rounded-full border-[0.5px] border-orange lg:p-6">
                    <button className="text-2xl p-3 border border-orange rounded-full text-white"
                    onClick={toggleChat}><TbMessageChatbot /></button>
                {chatOpen && <Chatbot />}
                </div>
                <div className="flex sm:block sm:p-2 bg-black items-center justify-center rounded-full border-[0.5px] border-orange lg:p-6">
                    <button className="text-2xl p-3 border border-orange rounded-full text-white"
                    onClick={toggleTheme}>{darkTheme ? <BsSun /> : <BsMoon />}</button>
                </div>
                
            </nav>
        </>
    );
}

export default Navbarmain;

