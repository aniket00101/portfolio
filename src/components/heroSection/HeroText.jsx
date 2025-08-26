import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'

export const HeroText = () => {
    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left md:pl-10 sm:text-center">
            
            <motion.h2 variants={fadeIn('down',0.2)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}}
            className="lg:text-6xl font-bold sm:text-[30px] md:text-[25px] uppercase text-cyan">MERN stack Developer</motion.h2>

            <motion.h1 variants={fadeIn('right',0.4)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}} className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">Aniket Das</motion.h1>

            <motion.p variants={fadeIn('up',0.6)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}} className="text-2xl mt-4 text-white">Innovative MERN developer crafting modern, <br/> scalable, and efficient web solutions.</motion.p>
            
        </div>
    )
}

