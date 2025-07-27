import React, { useRef, useState } from 'react';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const [success, setSuccess] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessages = (e) => setMessages(e.target.value);

  const form = useRef();

  const sendDataToFirebase = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "newPortfolio"), {
        name,
        email,
        message: messages,
        createdAt: Timestamp.now(),
      });

      setName('');
      setEmail('');
      setMessages('');
      setSuccess('Message sent to Aniket!');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      
      <form className="flex flex-col gap-4 text-white mt-6" ref={form} onSubmit={sendDataToFirebase}>

        <input
          type="text" name="from_name" placeholder="Your Name" required className="h-12 bg-black/25 px-2 border-b-2 rounded-lg border-b-orange focus:outline-none focus:border-orange border-l-2 border-l-orange" value={name}
          onChange={handleName} />

        <input type="email" name="from_email" placeholder="Your Email" required className="h-12 rounded-lg bg-black/25 px-2 border-b-2 border-orange bg-transparent focus:outline-none backdrop-blur-[10px] focus:border-orange border-l-2 border-l-orange" value={email} onChange={handleEmail} />

        <textarea name="messages" placeholder="Message" rows="9" cols="50" required className="rounded-lg bg-black/25 border-b-2 p-2 border-orange bg-transparent border-l-2 border-l-orange focus:outline-none backdrop-blur-[10px]" value={messages} onChange={handleMessages} />

        <p className="text-cyan flex justify-center font-bold">{success}</p>

        <button type="submit" className="w-full rounded-lg border text-white h-12 font-bold text-xl hover:bg-orange/50 bg-orange/80 transition-all duration-500"> Send </button>

      </form>
    </div>
  );
};

export default ContactForm;
