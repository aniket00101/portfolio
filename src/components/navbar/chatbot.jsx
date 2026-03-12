import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaUserLarge } from "react-icons/fa6";

const API_URL = "https://aniket-chatbot-api.onrender.com";

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Aniket's AI assistant. How can I help you today? ", timestamp: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    const timestamp = new Date();

    setMessages(prev => [...prev, { from: "user", text: userMessage, timestamp }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      setMessages(prev => [...prev, {
        from: "bot",
        text: data.reply,
        timestamp: new Date()
      }]);

    } catch {
      setMessages(prev => [...prev, {
        from: "bot",
        text: "Sorry, I'm having trouble connecting right now. Please try again! 🙁",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 p-4 mt-[50vh]">
      <div className="w-full max-w-md backdrop-blur-[50px] border-gray-300 rounded-lg shadow-lg flex flex-col border-white border-2">
        <div className="p-3 text-white text-xl rounded-t-lg text-center font-semibold">Chat with Aniket
          <div className="text-xs opacity-75 mt-1">Portfolio Assistant</div>
        </div>
        <div className="p-3 h-64 overflow-y-auto text-sm">
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-2 flex items-start ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              {msg.from === "bot" && (
                <FaRobot className="w-5 h-5 text-white mr-2 mt-1 flex-shrink-0" />
              )}
              <div className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}>
                <span className={`inline-block font-bold px-3 py-2 text-white rounded-lg max-w-[85%] ${msg.from === "user" ? "bg-blue-500/80" : "bg-gray-700/80"
                  }`} style={{ wordBreak: 'break-word', whiteSpace: 'pre-line' }} >{msg.text}</span>
                <span className="text-xs opacity-50 text-white mt-1">{msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              {msg.from === "user" && (
                <FaUserLarge className="w-5 h-5 text-white ml-2 mt-1 flex-shrink-0" />
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="mb-2 flex items-center justify-start">
              <FaRobot className="w-5 h-5 text-white mr-2" />
              <span className="inline-block font-bold px-3 py-2 text-white rounded-lg bg-gray-700/80">
                <span className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                Typing...
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex border-t border-gray-200">
          <input type="text" className="flex-1 backdrop-blur-xl text-white font-bold bg-black/20 border-t-white border-t-2 border-r-2 border-r-white p-2 text-md outline-none placeholder-gray-300" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about Aniket..." disabled={isTyping}/>
          <button onClick={sendMessage} disabled={isTyping} className="px-3 border-white text-white border-t-2 text-orange-500 font-bold hover:bg-white/10 transition-colors disabled:opacity-50">➤</button>
        </div>
      </div>
      
      <style jsx>{`
        .typing-indicator {
          display: inline-flex;
          gap: 2px;
        }
        .typing-indicator span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: currentColor;
          animation: typing 1.4s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Chatbot;