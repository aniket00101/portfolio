import Navbarlogo from "./Navbarlogo";
import Navbarlinks from "./Navbarlinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";

function Navbarmain() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="max-w-[1300px] m-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
            <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
                <Navbarlogo />

                <div className={`lg:block ${menuOpen ? "block" : "hidden"}`}>
                    <Navbarlinks />
                </div>

                <NavbarBtn />
            </div>

            <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
                <button className="text-2xl p-3 border border-orange rounded-full text-white" onClick={toogleMenu}>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
                <button className="text-2xl p-3 border border-orange rounded-full text-white" onClick={toogleMenu}>
                    <GiHamburgerMenu />
                </button>
            </div>
        </nav>
    )
}

export default Navbarmain;