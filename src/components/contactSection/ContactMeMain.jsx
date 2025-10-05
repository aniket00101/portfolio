import React from 'react'
import { ContactMeleft } from './ContactMeleft'
import AnalogClock from './Clock'


const ContactMeMain = () => {
  return (
    <div id="contact" className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4">
        <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
        <div className="flex justify-between gap-24 border-[2px] backdrop-blur-lg border-orange p-5 rounded-2xl lg:flex-row sm:flex-col">
            <ContactMeleft />
           
            <AnalogClock />
        </div>
    </div>
  )
}

export default ContactMeMain