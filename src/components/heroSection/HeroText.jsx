import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'
import { FaEnvelope, FaDownload } from 'react-icons/fa'

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left md:pl-10 text-center px-4">
      
      <motion.h2 variants={fadeIn('down', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-cyan">MERN stack Developer</motion.h2>

      <motion.h1 variants={fadeIn('right', 0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-special text-orange" >Aniket Das</motion.h1>

      <motion.p variants={fadeIn('up', 0.6)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }} className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-white" >Innovative MERN developer crafting modern, <br className="hidden sm:block" /> scalable, and efficient web solutions.</motion.p>

      <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }} className="flex gap-3 sm:gap-4 mt-6 md:justify-start justify-center flex-wrap w-full max-w-md">

        <a href="#contact" className="flex-1 min-w-[160px] h-12 flex items-center justify-center gap-2 border-2 border-orange rounded-full py-2 px-4 text-lg backdrop-blur-xl hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan"><FaEnvelope className="text-xl"/>Get In Touch</a>

        <a href="/Resume.pdf" download className="flex-1 min-w-[160px] h-12 flex items-center justify-center gap-2 border-2 border-orange rounded-full py-2 px-4 text-lg backdrop-blur-xl hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan"><FaDownload className="text-xl"/>Download Resume</a>
        
      </motion.div>
    </div>
  )
}
