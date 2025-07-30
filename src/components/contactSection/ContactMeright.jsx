import React from 'react'
import ContactInfo from './ContactInfo'
import Contactsocial from './Contactsocial'

const ContactMeright = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
        <img src="/images/contact/contact.png" alt="Contact Me Image" className="w-full max-w-[300px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto" />
        <ContactInfo />
        <Contactsocial />
    </div>
  )
}

export default ContactMeright