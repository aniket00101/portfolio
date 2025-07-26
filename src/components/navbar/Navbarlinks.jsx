import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact Me", section: "contact" },
];

function Navbarlinks() {
  return (
    <ul className="flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl backdrop-blur-lg lg:backdrop-blur-0 sm:w-full py-4">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
}

export default Navbarlinks;
