import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'

const projects = [
  {
    name: 'Green Hand (Crop Recomadantion and Price Prediction Project)',
    align: 'right',
    image: '/images/project/greenHand.png',
    link: 'https://greenhand-pr391.onrender.com/',
    sourcecode: 'https://github.com/aniket00101/GreenHand-PR391'
  },
  {
    name: 'Chat Buddies(MERN stack project)',
    align: 'left',
    image: '/images/project/chatbuddies.png',
    link: 'https://chat-buddies.vercel.app/',
    sourcecode: 'https://github.com/aniket00101/Chat-Buddies'
  },
  {
    name: 'Virtual Assistant (Voice Assistant App)',
    align: 'right',
    image: '/images/project/voiceassistant.png',
    link: 'https://lunexa-ai-voice-assistant-frontend.onrender.com/',
    sourcecode: 'https://github.com/aniket00101/LUNEXA-AI-Voice-Assistant-'
  }  
]
const ProjectMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4">
      <motion.div variants={fadeIn('up',0.2)} initial = "hidden" whileInView="show" viewport={{ once: false, amount: 0}}>
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {projects.map((item, index) => {
          return <SingleProject key={index} name={item.name} align={item.align} image={item.image} link={item.link} sourcecode={item.sourcecode} />
        })}

      </div>
    </div>
  )
}

export default ProjectMain
