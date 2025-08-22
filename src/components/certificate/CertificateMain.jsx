import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'
import CetificateText from './CetificateText'
import SingleCertificate from './SingleCertificate'

const projects = [
  {
    name: 'IHMMC-2025 (AEC Hardware Club)',
    date: 'March 7 2025',
    align: 'right',
    image: '/images/certificates/Asansol.jpg',
  },
  {
    name: 'Hack-O-NiT 2024 ( KRITANJ )',
    date: 'May 15 2024',
    align: 'left',
    image: '/images/certificates/Hackthon.jpg',
  },
  {
    name: 'Python With Django ( Ardent Computech Pvt. Ltd)',
    date: 'February 12 2025',
    align: 'right',
    image: '/images/certificates/python with Django.jpeg',
  },
  {
    name: 'Full Stack Web Development ( CODSOFT )',
    date: 'June 28 2025',
    align: 'left',
    image: '/images/certificates/codesoft.png',
  },
  {
    name: 'Code War Workshop ( Narula Insttute of Technology )',
    date: 'May 10 2024',
    align: 'right',
    image: '/images/certificates/Code_Work_shop.jpg',
  }
]
const CertificateMain = () => {
  return (
    <div id='certificate' className="max-w-[1200px] mx-auto px-4">
      <motion.div variants={fadeIn('up',0.2)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}}>
        <CetificateText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {projects.map((item, index) => {
          return <SingleCertificate key={index} name={item.name} align={item.align} image={item.image} date={item.date} />
        })}
      </div>
    </div>
  )
}

export default CertificateMain
