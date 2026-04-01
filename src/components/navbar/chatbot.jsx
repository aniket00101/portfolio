import { useState, useEffect, useRef } from "react";
import { FaRobot, FaUserLarge } from "react-icons/fa6";
import ColorfulChatbotLogo from "/chatbot.jpg";

const API_URL = "https://aniket-portfolio-chatbot.onrender.com";

const TypingDots = () => (
  <div className="flex items-center gap-[5px]">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-[7px] h-[7px] rounded-full bg-white/80 inline-block"
        style={{
          animation: "dotBounce 1.2s infinite ease-in-out",
          animationDelay: `${i * 0.18}s`,
        }}
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
      setMessages((p) => [...p, { from: "bot", text: data.reply, ts: new Date() }]);
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
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0);    opacity: .45; }
          40%            { transform: translateY(-6px); opacity: 1;   }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0    rgba(251,146,60,.80); }
          70%  { box-shadow: 0 0 0 11px rgba(251,146,60,0);   }
          100% { box-shadow: 0 0 0 0    rgba(251,146,60,0);   }
        }
        .chat-slide { animation: slideUp .28s cubic-bezier(.22,.68,0,1.2) forwards; }
        .pulse-ring  { animation: pulseRing 2.2s infinite; }

        /* custom scrollbar */
        .chat-scroll::-webkit-scrollbar       { width: 3px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 4px; }
      `}</style>

      {/* ════════════════ CHAT PANEL ════════════════ */}
      {isOpen && (
        <div className="chat-slide fixed bottom-24 right-5 z-50 flex flex-col rounded-2xl overflow-hidden"
          style={{ width: "min(92vw, 390px)", height: "min(85vh, 560px)", background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", border: "1.5px solid rgba(255, 255, 255, 0.30)", boxShadow: "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.22)",
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.10)",
              borderBottom: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            {/* bot avatar */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.35)",
              }}
            >
              <FaRobot className="text-white text-lg" />
            </div>

            <div className="flex-1">
              <p className="text-white font-semibold text-sm tracking-wide">
                Chat with Aniket
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-[7px] h-[7px] rounded-full bg-white/80 animate-pulse" />
                <span className="text-white/60 text-[11px]">Portfolio Assistant</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all text-sm font-bold cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              ✕
            </button>
          </div>

          {/* ── Messages ── */}
          <div
            className="chat-scroll flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            {messages.map((msg, i) => {
              const isBot = msg.from === "bot";
              return (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${isBot ? "justify-start" : "justify-end"}`}
                >
                  {/* Bot avatar */}
                  {isBot && (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.28)",
                      }}
                    >
                      <FaRobot className="text-white text-[10px]" />
                    </div>
                  )}

                  <div className={`flex flex-col gap-1 ${isBot ? "items-start" : "items-end"} max-w-[78%]`}>
                    {/* Bubble — key fix: whitespace-pre-wrap + break-words so long replies wrap correctly */}
                    <div
                      className="px-4 py-2.5 rounded-2xl text-white text-[13.5px] leading-[1.6] whitespace-pre-wrap break-words w-full"
                      style={{
                        background: isBot
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.22)",
                        border: "1px solid rgba(255,255,255,0.22)",
                        borderRadius: isBot
                          ? "4px 18px 18px 18px"
                          : "18px 4px 18px 18px",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      {msg.text}
                    </div>

                    <span className="text-white/35 text-[10px] px-1">
                      {fmt(msg.ts)}
                    </span>
                  </div>

                  {/* User avatar */}
                  {!isBot && (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.28)",
                      }}
                    >
                      <FaUserLarge className="text-white text-[10px]" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start gap-2 justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.28)",
                  }}
                >
                  <FaRobot className="text-white text-[10px]" />
                </div>
                <div
                  className="px-4 py-3 text-white text-[13px] flex items-center gap-2"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: "4px 18px 18px 18px",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <TypingDots />
                  <span className="text-white/70 text-xs">Typing...</span>
                </div>
              </div>
            )}

            {/* Suggestion chips — only at start */}
            {messages.length === 1 && !isTyping && (
              <div className="grid grid-cols-2 gap-2 mt-1">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="text-white/80 hover:text-white text-[11.5px] text-left px-3 py-2 rounded-xl transition-all cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.22)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.20)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* ── Input bar ── */}
          <div
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderTop: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              disabled={isTyping}
              placeholder="Ask about Aniket..."
              className="flex-1 rounded-xl px-4 py-2.5 text-white text-[13.5px] placeholder-white/40 outline-none transition-all disabled:opacity-60"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.55)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.22)")
              }
            />

            <button
              onClick={() => sendMessage()}
              disabled={isTyping || !input.trim()}
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg transition-all active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "1.5px solid rgba(255,255,255,0.30)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* ════════════════ TOGGLE BUTTON ════════════════ */}
      <button
        onClick={() => setIsOpen((p) => !p)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={`fixed bottom-6 right-5 z-50 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-110 active:scale-95 ${!isOpen ? "pulse-ring" : ""}`}
        style={{
          border: "2px solid rgba(255,255,255,0.60)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: isOpen
            ? "rgba(255,255,255,0.18)"
            : "rgba(255,255,255,0.12)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.30)",
        }}
      >
        {isOpen ? (
          <span className="text-white text-xl font-bold leading-none">✕</span>
        ) : (
          <img
            src={ColorfulChatbotLogo}
            alt="Chat with Aniket"
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </button>
    </>
  );
}