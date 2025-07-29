import { useState } from 'react';
import { FaRobot,  FaUserLarge } from "react-icons/fa6";

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
    <div className="fixed inset-0 flex items-center justify-center z-40 p-4 mt-[50vh]">
      <div className="w-full max-w-md backdrop-blur-[50px] border-gray-300 rounded-lg shadow-lg flex flex-col border-white border-2">
        <div className="p-3 text-white text-xl rounded-t-lg text-center font-semibold">Chat with Aniket</div>
        <div className="p-3 h-64 overflow-y-auto text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 flex items-center ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "bot" && (
                <FaRobot className="w-5 h-5 text-white mr-1" />
              )}
              <span
                className={`inline-block font-[px] font-bold px-2 py-1 text-white rounded ${msg.from === "user" ? "bg-blue-100" : "bg-gray-200"}`}
              >
                {msg.text}
              </span>
              {msg.from === "user" && (
                <FaUserLarge className="w-5 h-5 text-white ml-1" />
              )}
            </div>
          ))}
        </div>
        <div className="flex border-t border-gray-200">
          <input
            type="text"
            className="flex-1 backdrop-blur-xl text-white font-bold bg-black/20 border-t-white border-t-2 border-r-2 border-r-white p-2 text-md outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage} className="px-3 border-white border-t-2 text-orange-500 text-white font-bold">➤</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
