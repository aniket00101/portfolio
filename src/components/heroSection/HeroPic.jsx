import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'
import React from 'react'
import { PiHexagonThin } from "react-icons/pi"

export const HeroPic = () => {
  return (
    <motion.div variants={fadeIn('left',0.2)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}} className="h-full relative flex items-center justify-center overflow-hidden">

      <div className="absolute -z-10 flex justify-center items-center inset-0">
        <PiHexagonThin className="h-[420px] w-[420px] text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
      
      <img src="/images/myself/me.png" alt="Aniket Das" className="max-h-[800px] w-auto relative z-10"/>
    
    </motion.div>
  )
}
