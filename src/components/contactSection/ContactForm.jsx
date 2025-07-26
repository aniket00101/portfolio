import React from 'react'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const [success, setSuccess] = useState('');
  const handleName = (e) =>{
    setName(e.target.value)
  }
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handleMessages = (e) =>{
    setMessages(e.target.value)
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_siyjtcv', 'template_c4mdtdw', form.current, {
        publicKey: 'kw1AIhDamOk2x6IBS',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessages('')
          setSuccess('Message Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <p className="text-cyan">{success}</p>
        <form action="" className="flex flex-col gap-4 text-white mt-6" ref={form} onSubmit={sendEmail}>

            <input type="text" name="from_name" placeholder="Your Name" required className="h-12 bg-black/5 px-2 border-b-2 rounded-lg border-b-orange focus:outline-none focus:border-orange border-l-2 border-l-orange " value={name} onChange={handleName}/>

            <input type="email" name="from_email" placeholder="Your Email" required className="h-12 rounded-lg bg-black/5 px-2 border-b-2 border-orange bg-transparent focus:outline-none focus:border-orange border-l-2 border-l-orange" value={email} onChange={handleEmail}/>

            <textarea type="text" name="messages" placeholder="Message" rows='9' cols='50' required className="rounded-lg bg-black/10 border-b-2  p-2 border-orange bg-transparent border-l-2 border-l-orange focus:outline-none" value={messages} onChange={handleMessages}/>

            <button type="submit" className="w-full rounded-lg border  text-white h-12 font-bold text-xl hover:bg-orange/50 bg-orange/80 transition-all duration-500">Send</button>
        </form>
    </div>
  )
}

export default ContactForm

