import Navbarlogo from "./Navbarlogo";
import Navbarlinks from "./Navbarlinks";

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from "react";
import Chatbot from "./chatbot";
import { BsSun, BsMoon } from "react-icons/bs";
import ColorfulChatbotLogo from '/chatbot.jpg';

function Navbarmain() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    };
    const toggleTheme = () => setDarkTheme(!darkTheme);

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
            <nav className="max-w-[1300px] mx-auto sm:px-3 px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-3 mt-2">
                <div className="flex justify-between w-full max-w-[1200px] mx-auto items-center p-6 rounded-r-full lg:pr-5 sm:p-3 sm:rounded-full rounded-l-full backdrop-blur-[9px] border-[2px] border-orange">
                    <Navbarlogo />
                    <div className={`lg:block ${menuOpen ? "block" : "hidden"} md:hidden`}>
                        <Navbarlinks />
                    </div>
                </div>
                {chatOpen && <Chatbot />}
                <div className="flex lg:hidden sm:block sm:p-2 backdrop-blur-[9px] items-center justify-center rounded-full border-[2px] border-orange">
                    <button className="text-2xl p-3 border-[2px] border-orange rounded-full text-white" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                
                <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
                    <Navbarlinks />
                </div>
            </nav>

            <div className="fixed bottom-[109px] right-6 z-50 w-[70px] h-[70px] rounded-full border-[2px] border-white backdrop-blur-[9px] bg-white dark:bg-gray-900">
            
                <button className="w-full h-full flex items-center justify-center rounded-full" onClick={toggleTheme}>{darkTheme ? <BsSun /> : <BsMoon />}</button>

            </div>            

            <div className="fixed bottom-6 right-6 z-50 w-[70px] h-[70px] rounded-full border-[2px] border-white backdrop-blur-[9px] bg-white dark:bg-gray-900">
                <button className="w-full h-full flex items-center justify-center rounded-full" onClick={toggleChat}>
                <img src={ColorfulChatbotLogo} alt="Chatbot" className="w-full h-full rounded-full object-cover"/></button>
            </div>

        </>
    );
}

export default Navbarmain;
