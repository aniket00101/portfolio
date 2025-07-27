import { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: "This is a sample bot reply!" }]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0  w-[400px] bg-black/30 flex items-center justify-center z-40 mt-[50vh]">
      <div className="w-[90%] max-w-md bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
        
        {/* Header */}
        <div className="p-3 bg-orange-500 text-white rounded-t-lg text-center font-semibold">
          Chatbot
        </div>

        {/* Messages */}
        <div className="p-3 h-64 overflow-y-auto text-sm">
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-2 ${msg.from === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-2 py-1 rounded ${msg.from === "user" ? "bg-blue-100" : "bg-gray-200"}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex border-t border-gray-200">
          <input
            type="text"
            className="flex-1 p-2 text-sm outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="px-3 text-orange-500 font-bold"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
