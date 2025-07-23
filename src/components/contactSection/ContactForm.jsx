import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="" className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" required className="h-12 rounded-lg bg-lightBrown px-2"/>
            <input type="email" placeholder="Your Email" required className="h-12 rounded-lg bg-lightBrown px-2"/>
            <textarea type="text" placeholder="Message" rows='9' cols='50' required className="rounded-lg bg-lightBrown p-2"/>
            <button type="submit" className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">Send</button>
        </form>
    </div>
  )
}

export default ContactForm