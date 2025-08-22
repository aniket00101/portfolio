import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'

const SingleCertificate = ({ name, align, image, date }) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end`}>
      <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }}>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <div className="flex gap-10 justify-center">
                  <p className={`text-lg mt-[10px] flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500  cursor-pointer sm:justify-self-center ${align==="left" ? "md:justify-self-end" : "md:justify-seld-start"}`}>{date}</p>
                  
                </div>
      </motion.div>
      <div className="max-h-[320px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <img src={image} alt="project image" className="block w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default SingleCertificate
