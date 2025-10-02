import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'

export const HeroText = () => {
    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left md:pl-10 text-center px-4">
            
            <motion.h2 variants={fadeIn('down',0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0}} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-cyan" >MERN stack Developer</motion.h2>

            <motion.h1 variants={fadeIn('right',0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0}} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-special text-orange">Aniket Das</motion.h1>

            <motion.p variants={fadeIn('up',0.6)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0}} className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-white">Innovative MERN developer crafting modern, <br className="hidden sm:block" /> scalable, and efficient web solutions.</motion.p>
            
            <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0}} className="flex gap-3 sm:gap-4 mt-6 md:justify-start justify-center flex-wrap">
                
                <h3 className="border-2 border-orange rounded-full py-2 px-3 sm:px-4 text-sm sm:text-base md:text-lg flex items-center backdrop-blur-xl text-white whitespace-nowrap">Software Engineer</h3>

                <h3 className="border-2 border-orange rounded-full py-2 px-3 sm:px-4 text-sm sm:text-base md:text-lg flex items-center backdrop-blur-xl text-white whitespace-nowrap">ML Enthusiast</h3>
                
            </motion.div>

        </div>
    )
}