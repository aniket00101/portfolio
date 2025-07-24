import React from 'react'
import { AboutMeText } from './AboutMeText'
import { AboutMeImage } from './AboutMeImage'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'

export const AboutMeMain = () => {
  return (
    <div id="about" className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
        <motion.div variants={fadeIn('right',0.2)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}}>
            <AboutMeText />
        </motion.div>
        <motion.div variants={fadeIn('left',0.2)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}}>
            <AboutMeImage className="md:mr-5"/>
        </motion.div>
        
        
    </div>
  )
}
