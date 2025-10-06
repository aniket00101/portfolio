import React from 'react'
import ContactInfo from './ContactInfo'
import Contactsocial from './Contactsocial'
import Program from './Program'

const ContactMeright = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

      <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 mt-4 sm:mt-6  gap-5 sm:gap-8 lg:gap-10 xl:gap-12">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan mb-4 sm:mb-6 md:mb-8 lg:mb-10 font-bold">Contact Information</h2>

        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mt-3 sm:mt-4 mb-4 sm:mb-6 md:mb-8 max-w-4xl">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and build something impactful!</p>

      </div>

      <div className="w-full max-w-5xl mx-auto border-2 border-orange rounded-xl sm:rounded-2xl backdrop-blur-xl p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 shadow-2xl mt-4 sm:mt-4 flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-10 xl:gap-12">

        <div className="flex-1 w-full min-w-0"><ContactInfo /></div>

        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[320px] xl:w-[360px] 2xl:w-[420px] lg:min-w-0 min-w-0">

          <div className="w-full">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">Social Links:</h3>
            <Contactsocial />
          </div>

          <div className="w-full">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">My Coding Platforms:</h3>
            <Program />
          </div>

        </div>
      </div>

    </div>
  )
}

export default ContactMeright
