import { useState, useEffect, useRef } from "react";
import { FaRobot, FaUserLarge } from "react-icons/fa6";
import ColorfulChatbotLogo from "/chatbot.jpg";
import ChatBackground from "../background/ChatBackground";

const API_URL = "https://aniket-portfolio-chatbot.onrender.com";

const TypingDots = () => (
  <div className="flex items-center gap-[5px]">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-[7px] h-[7px] rounded-full bg-orange-400 inline-block animate-bounce"
        style={{ animationDelay: `${i * 0.18}s`, animationDuration: "1.2s" }}
      />
    ))}
  </div>
);

const fmt = (d) =>
  d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const SUGGESTIONS = [
  "Who is Aniket?",
  "What are his skills?",
  "Show me his projects",
  "How to contact him?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm Aniket's AI assistant. How can I help you today?",
      ts: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    const msg = (text ?? input).trim();
    if (!msg) return;

    setMessages((p) => [...p, { from: "user", text: msg, ts: new Date() }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMessages((p) => [
        ...p,
        { from: "bot", text: data.reply, ts: new Date() },
      ]);
    } catch {
      setMessages((p) => [
        ...p,
        {
          from: "bot",
          text: "Sorry, I'm having trouble connecting right now. Please try again! 🙁",
          ts: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0px  rgba(251,146,60,0.80); }
          70%  { box-shadow: 0 0 0 11px rgba(251,146,60,0); }
          100% { box-shadow: 0 0 0 0px  rgba(251,146,60,0); }
        }
        .chat-slide { animation: slideUp 0.28s cubic-bezier(0.22,0.68,0,1.2) forwards; }
        .pulse-ring  { animation: pulseRing 2.2s infinite; }
        .chat-scroll::-webkit-scrollbar       { width: 3px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(251,146,60,0.45); border-radius: 4px; }
      `}</style>

      {isOpen && (
        <div className="chat-slide fixed bottom-24 right-5 z-50 flex flex-col rounded-2xl overflow-hidden border-[2px] border-orange  w-[min(92vw,390px)] h-[min(80vh,450px)]">

          <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">

            <ChatBackground />

          </div>

          <div className="relative z-10 flex items-center gap-3 px-4 py-3 flex-shrink-0 bg-black/50 border-b border-white">

            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-orange-400/20 border-[1.5px] border-orange">

              <FaRobot className="text-orange text-lg" />

            </div>

            <div className="flex-1">

              <p className="text-orange font-semibold text-sm tracking-wide"> Chat with Aniket </p>

              <div className="flex items-center gap-1.5 mt-0.5">

                <span className="w-[7px] h-[7px] rounded-full bg-orange-400 animate-pulse" />

                <span className="text-white text-[11px]">Portfolio Assistant</span>

              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-orange border border-orange bg-transparent hover:bg-orange-400/15 hover:text-orange-300 transition-all text-sm font-bold cursor-pointer"> ✕ </button>

          </div>

          <div className="chat-scroll relative z-10 flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-transparent">
            {messages.map((msg, i) => {
              
              const isBot = msg.from === "bot";
              
              return (
              
                <div key={i}className={`flex items-start gap-2 ${isBot ? "justify-start" : "justify-end"}`}>

                  {isBot && (

                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-400/20 border border-orange">

                      <FaRobot className="text-orange text-[15px]" />

                    </div>
                  )}

                  <div className={`flex flex-col gap-1 max-w-[78%] ${isBot ? "items-start" : "items-end"}`}>
                    
                    <div className={` px-4 py-2.5 text-white text-[13.5px] leading-relaxed whitespace-pre-wrap break-words w-full backdrop-blur-md ${isBot ? "border border-white rounded-tl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" : "border border-white rounded-tl-2xl rounded-tr rounded-br-2xl rounded-bl-2xl"}`}> {msg.text} </div>

                    <span className="text-white text-[10px] px-1"> {fmt(msg.ts)} </span>

                  </div>

                  {!isBot && (
                    
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-black/40 border border-orange">
                    
                      <FaUserLarge className="text-orange text-[15px]" />
                    
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-start gap-2 justify-start">
                
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange">
                
                  <FaRobot className="text-orange text-[15px]" />
                
                </div>
                
                <div className="px-4 py-3 flex items-center gap-2 border border-white rounded-tl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl backdrop-blur-md">
  
                  <span className="text-white text-sm">Typing....</span>

                </div>
              </div>
            )}

            {messages.length === 1 && !isTyping && (
              
              <div className="grid grid-cols-2 gap-2 mt-1">
              
                {SUGGESTIONS.map((s, i) => (
              
                  <button key={i} onClick={() => sendMessage(s)} className="text-white text-[11.5px] text-left px-3 py-2 rounded-xl bg-orange-400/10 border border-orange hover:bg-orange-400/22 hover:border-orange-400 transition-all cursor-pointer"> {s} </button>

                ))}
              </div>
            )}

            <div ref={bottomRef} />

          </div>

          <div className="relative z-10 flex items-center gap-2 px-3 py-3 flex-shrink-0 border-t border-orange">

            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()} disabled={isTyping}
              placeholder="Ask about Aniket..." className="flex-1 rounded-xl px-4 py-2.5 text-white text-[13.5px] placeholder-white outline-none bg-black/30 border border-orange
              focus:border-orange hover:border-orange transition-all disabled:opacity-60"/>

            <button onClick={() => sendMessage()} disabled={isTyping || !input.trim()} className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg border-[2px] border-orange hover:scale-105 active:scale-90 transition-all disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer"> ➤ </button>

          </div>
        </div>
      )}

      <button onClick={() => setIsOpen((p) => !p)} aria-label={isOpen ? "Close chat" : "Open chat"} className={`fixed bottom-6 right-5 z-50 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-110 active:scale-95 border-2 border-white backdrop-blur-md shadow-[0_4px_24px_rgba(251,146,60,0.35)] ${isOpen ? "bg-orange" : "bg-white pulse-ring"}`} >

        {isOpen ? (

          <span className="text-white text-4xl font-semibold leading-none"> ✕ </span>

        ) : (

          <img src={ColorfulChatbotLogo} alt="Chat with Aniket" className="w-full h-full object-cover rounded-full"/>

        )}
        
      </button>
    </>
  );
}