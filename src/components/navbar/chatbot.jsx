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
    <div className="fixed bottom-20 right-4 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col">
      <div className="p-2 font-semibold bg-orange-500 text-white rounded-t-lg">Chatbot</div>
      <div className="flex-1 p-2 h-60 overflow-y-auto text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.from === "user" ? "text-right" : "text-left"}`}>
            <span className={`${msg.from === "user" ? "bg-blue-100" : "bg-gray-200"} px-2 py-1 rounded`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
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
          className="px-3 text-orange-500 font-bold"
          onClick={sendMessage}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
