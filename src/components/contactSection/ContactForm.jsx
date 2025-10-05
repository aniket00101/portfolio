// ContactForm.jsx
import React, { useRef, useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, Timestamp, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import AnalogClock from './Clock';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const [success, setSuccess] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminMessages, setAdminMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  const form = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessages = (e) => setMessages(e.target.value);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "newPortfolio"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const messagesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAdminMessages(messagesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages: ", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteDoc(doc(db, "newPortfolio", id));
        setAdminMessages(adminMessages.filter(msg => msg.id !== id));
        setExpandedMessageId(null);
        setSuccess("Message deleted successfully!");
        setTimeout(() => setSuccess(''), 3000);
      } catch (error) {
        console.error("Error deleting message: ", error);
        setSuccess("Error deleting message.");
      }
    }
  };

  const toggleMessage = (id) => {
    if (expandedMessageId === id) {
      setExpandedMessageId(null);
    } else {
      setExpandedMessageId(id);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  
  const sendDataToFirebase = async (e) => {
    e.preventDefault();

    if (name.toLowerCase() === import.meta.env.VITE_NAME && email.toLowerCase() === import.meta.env.VITE_EMAIL && messages.toLowerCase() === import.meta.env.VITE_NAME) {
      setShowAdmin(true);
      fetchMessages();
      setName('');
      setEmail('');
      setMessages('');
      return;
    }

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
      
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSuccess('Error sending message. Please try again.');
    }
  };

  return (
    <div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-6">
        
        <div className="flex-1">
          <form className="flex flex-col gap-4 text-white" ref={form} onSubmit={sendDataToFirebase}>

            <p className="text-cyan flex justify-center font-bold">{success}</p>

            <input type="text" name="from_name" placeholder="Your Name" required className="h-12 bg-black/25 px-2 border-b-2 rounded-lg border-b-orange focus:outline-none focus:border-orange border-l-2 border-l-orange"value={name} onChange={handleName} />

            <input type="email" name="from_email" placeholder="Your Email" required className="h-12 rounded-lg bg-black/25 px-2 border-b-2 border-orange bg-transparent focus:outline-none backdrop-blur-[10px] focus:border-orange border-l-2 border-l-orange" value={email} onChange={handleEmail} />

            <textarea name="messages" placeholder="Message" rows="9" cols="50" required className="rounded-lg bg-black/25 border-b-2 p-2 border-orange bg-transparent border-l-2 border-l-orange focus:outline-none backdrop-blur-[10px]" value={messages} onChange={handleMessages} />

            <button type="submit" className="w-full rounded-lg border text-white h-12 font-bold text-xl hover:bg-orange/50 bg-orange/80 transition-all duration-500">Send</button>

          </form>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <AnalogClock />
        </div>

      </div>

      {showAdmin && (
        <div className="mt-12 border-t-2 border-orange pt-8">
          <div className="flex justify-between items-center mb-6">
            
            <h2 className="text-3xl md:text-4xl font-bold text-cyan">Admin Panel</h2>
            
            <button onClick={() => setShowAdmin(false)} className="bg-orange/70 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold transition-all">Close Admin Panel</button>
          
          </div>

          <div className="bg-orange/20 border-2 border-orange p-4 rounded-lg mb-6">
            <p className="text-lg text-white">Total Messages: <span className="text-cyan font-bold text-xl">{adminMessages.length}</span></p>

          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-white text-xl">Loading messages...</p>
            </div>
          ) : adminMessages.length === 0 ? (
            <div className="bg-black/50 border-2 border-gray-700 p-8 rounded-lg text-center">
              <p className="text-xl text-gray-400">No messages yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {adminMessages.map((msg) => (
                <div key={msg.id} className={`bg-black/50 backdrop-blur-md rounded-lg border-2 transition-all ${expandedMessageId === msg.id ? 'border-orange' : 'border-gray-700 hover:border-orange/50'}`}>

                  <div onClick={() => toggleMessage(msg.id)} className="p-6 cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-cyan mb-2">{msg.name}</h3>
                        <p className="text-orange text-sm">{msg.email}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm text-gray-400 text-white">{formatDate(msg.createdAt)}</span>
                        <span className="text-cyan text-2xl transition-transform duration-300" style={{transform: expandedMessageId === msg.id ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}>▼</span>
                      </div>
                    </div>
                    
                    {expandedMessageId !== msg.id && (
                      <p className="text-white line-clamp-2 mt-3">{msg.message}</p>
                    )}
                  </div>

                  {expandedMessageId === msg.id && (
                    <div className="px-6 pb-6 border-t-2 border-orange/30 pt-4 animate-slideDown">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-orange text-sm font-semibold">Name:</label>
                            <p className="text-white text-lg mt-1">{msg.name}</p>
                          </div>

                          <div>
                            <label className="text-orange text-sm font-semibold">Email:</label>
                            <p className="text-white text-lg mt-1">{msg.email}</p>
                          </div>

                          <div className="md:col-span-2">
                            <label className="text-orange text-sm font-semibold">Date & Time:</label>
                            <p className="text-white text-lg mt-1">{formatDate(msg.createdAt)}</p>
                          </div>
                        </div>

                        <div>
                          <label className="text-orange text-sm font-semibold">Message:</label>
                          <p className="text-white text-lg bg-black/70 p-4 rounded-lg mt-2 border border-gray-700 whitespace-pre-wrap">{msg.message}</p>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(msg.id);
                            }}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-all">🗑️ Delete Message</button>
                          <button onClick={(e) => {
                              e.stopPropagation();
                              toggleMessage(msg.id);
                            }}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-bold transition-all"
                          >Close</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;