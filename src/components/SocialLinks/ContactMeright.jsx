import React from 'react'
import ContactInfo from './ContactInfo'
import Contactsocial from './Contactsocial'

const ContactMeright = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">

      <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan mb-6 md:mb-10">Contact Information</h2>

      <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-4 mb-6 md:mb-8'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and build something impactful!</p>

      <div className="w-full border-2 border-orange rounded-2xl backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl mt-6 flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-20">
        
        <div className="flex-1 mb-6 lg:mb-0"> <ContactInfo /> </div>

        <div className="flex-1">

          <h3 className="text-white text-lg font-bold mb-4">Socials Links:</h3>

          <Contactsocial />
        
        </div>        
      </div>
    </div>
  )
}

export default ContactMeright