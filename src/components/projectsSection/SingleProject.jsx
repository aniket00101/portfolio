import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, align, image, link, sourcecode }) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end`}>
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2 className={`text-xl  font-thin text-white font-special sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>{year}</h2>
        <div className="flex gap-10 justify-center">
          <a href={link} className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500  cursor-pointer sm:justify-self-center ${align==="left" ? "md:justify-self-end" : "md:justify-seld-start"}`}>Live<BiSolidRightTopArrowCircle /></a>
          <a href={sourcecode} className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500  cursor-pointer sm:justify-self-center ${align==="left" ? "md:justify-self-end" : "md:justify-seld-start"}`}>Source Code<BiSolidRightTopArrowCircle /></a>
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <img src={image} alt="project image" className="w-full h-full"/>
      </div>
    </div>
  )
}

export default SingleProject