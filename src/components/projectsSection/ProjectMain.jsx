import React from 'react'
import ProjectText from './ProjectText'
import { motion } from 'framer-motion'
import { fadeIn } from '../framerMotion/variants'

const projects = [
  {
    name: 'Green Hand (Crop Recommendation and Price Prediction Project)',
    image: '/images/project/greenHand.png',
    link: 'https://greenhand-pr391.onrender.com/',
    sourcecode: 'https://github.com/aniket00101/GreenHand-PR391'
  },
  {
    name: 'Chat Buddies (MERN Stack Real Time Chatting App)',
    image: '/images/project/chatbuddies.png',
    link: 'https://chat-buddies.vercel.app/',
    sourcecode: 'https://github.com/aniket00101/Chat-Buddies'
  },
  {
    name: 'Virtual Assistant (Voice Assistant App)',
    image: '/images/project/voiceassistant.png',
    link: 'https://lunexa-ai-voice-assistant-frontend.onrender.com/',
    sourcecode: 'https://github.com/aniket00101/LUNEXA-AI-Voice-Assistant-'
  }  
]

const ProjectMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4">
      <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }}>
        <ProjectText />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto border-2 md:border-white/60 md:p-[20px]">
        {projects.map((project, index) => (
          <motion.div key={index} variants={fadeIn('up', 0.1 * index)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }}>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/90 overflow-hidden h-full flex flex-col">
              
              <div className="relative overflow-hidden aspect-[4/3] bg-black/30">
                <img src={project.image} alt={project.name} className="w-full h-full object-contain"/>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>
                
                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/50">
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-orange/80 hover:bg-orange text-white rounded-lg transition-colors duration-300 text-sm font-medium" >Live Demo</a>
                  
                  <a href={project.sourcecode} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 border border-white/60 hover:bg-white/10 text-white rounded-lg transition-colors duration-300 text-sm font-medium">Source Code</a>

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectMain