// import { useState } from 'react';
// import { FaRobot,  FaUserLarge } from "react-icons/fa6";

// function Chatbot() {
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "Hi! How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = () => {
//     if (input.trim() === "") return;
//     setMessages([...messages, { from: "user", text: input }]);
//     setInput("");
//     setTimeout(() => {
//       setMessages(prev => [...prev, { from: "bot", text: "This is a sample bot reply!" }]);
//     }, 1000);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-40 p-4 mt-[50vh]">
//       <div className="w-full max-w-md backdrop-blur-[50px] border-gray-300 rounded-lg shadow-lg flex flex-col border-white border-2">
//         <div className="p-3 text-white text-xl rounded-t-lg text-center font-semibold">Chat with Aniket</div>
//         <div className="p-3 h-64 overflow-y-auto text-sm">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`mb-2 flex items-center ${msg.from === "user" ? "justify-end" : "justify-start"}`}
//             >
//               {msg.from === "bot" && (
//                 <FaRobot className="w-5 h-5 text-white mr-1" />
//               )}
//               <span
//                 className={`inline-block font-[px] font-bold px-2 py-1 text-white rounded ${msg.from === "user" ? "bg-blue-100" : "bg-gray-200"}`}
//               >
//                 {msg.text}
//               </span>
//               {msg.from === "user" && (
//                 <FaUserLarge className="w-5 h-5 text-white ml-1" />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="flex border-t border-gray-200">
//           <input
//             type="text"
//             className="flex-1 backdrop-blur-xl text-white font-bold bg-black/20 border-t-white border-t-2 border-r-2 border-r-white p-2 text-md outline-none"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             placeholder="Type a message..."
//           />
//           <button onClick={sendMessage} className="px-3 border-white border-t-2 text-orange-500 text-white font-bold">➤</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;

















import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaUserLarge } from "react-icons/fa6";

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Aniket's AI assistant. How can I help you today? 🚀", timestamp: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState([]);
  const [userPreferences, setUserPreferences] = useState({});
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Portfolio data
  const portfolioData = {
    skills: {
      frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS", "HTML5", "CSS3"],
      backend: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "MongoDB", "PostgreSQL", "MySQL"],
      tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman", "Firebase"],
      languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    projects: [
      {
        name: "E-Commerce Platform",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        description: "Full-stack e-commerce solution with payment integration",
        features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing"],
        status: "Completed"
      },
      {
        name: "Social Media Dashboard",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
        description: "Analytics dashboard for social media management",
        features: ["Real-time analytics", "Multi-platform integration", "Custom reports"],
        status: "In Progress"
      },
      {
        name: "AI Chatbot Platform",
        tech: ["React", "Python", "OpenAI API", "WebSocket"],
        description: "Intelligent chatbot builder with customizable responses",
        features: ["Natural language processing", "Custom training", "Multi-channel deployment"],
        status: "Completed"
      }
    ],
    experience: [
      {
        role: "Full Stack Developer",
        company: "Tech Solutions Inc.",
        duration: "2023 - Present",
        responsibilities: ["React application development", "API design", "Database optimization"]
      },
      {
        role: "Frontend Developer",
        company: "Digital Agency",
        duration: "2022 - 2023",
        responsibilities: ["UI/UX implementation", "Performance optimization", "Client collaboration"]
      }
    ],
    education: {
      degree: "Computer Science Engineering",
      institution: "University Name",
      year: "2022",
      cgpa: "8.5/10"
    },
    contact: {
      email: "aniket@example.com",
      linkedin: "linkedin.com/in/aniket",
      github: "github.com/aniket",
      phone: "+91-XXXXXXXXXX"
    }
  };

  // Advanced response system
  const getBotResponse = (userMessage, context = []) => {
    const message = userMessage.toLowerCase().trim();
    const words = message.split(' ');
    
    // Context-aware responses
    const lastBotMessage = messages[messages.length - 1]?.from === 'bot' ? messages[messages.length - 1].text : '';
    
    // Greetings with time awareness
    if (message.includes('hi') || message.includes('hello') || message.includes('hey') || message === 'hi there') {
      const hour = new Date().getHours();
      let greeting = '';
      if (hour < 12) greeting = 'Good morning!';
      else if (hour < 17) greeting = 'Good afternoon!';
      else greeting = 'Good evening!';
      
      return `${greeting} I'm Aniket's portfolio assistant. I can help you learn about his skills, projects, experience, and more. What interests you most? 🌟`;
    }

    // Skills inquiries with detailed breakdown
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
      if (message.includes('frontend') || message.includes('front-end')) {
        return `Aniket's frontend skills include: ${portfolioData.skills.frontend.join(', ')}. He specializes in creating responsive, user-friendly interfaces with modern frameworks. Would you like to know about any specific technology?`;
      }
      if (message.includes('backend') || message.includes('back-end')) {
        return `Backend technologies: ${portfolioData.skills.backend.join(', ')}. He builds scalable APIs and manages databases efficiently. Need details about any particular backend technology?`;
      }
      if (message.includes('language') || message.includes('programming')) {
        return `Programming languages: ${portfolioData.skills.languages.join(', ')}. Each serves different purposes in his development workflow. Curious about his proficiency in any specific language?`;
      }
      
      return `Aniket works with a comprehensive tech stack:\n\n🎨 Frontend: ${portfolioData.skills.frontend.slice(0, 4).join(', ')}\n⚙️ Backend: ${portfolioData.skills.backend.slice(0, 4).join(', ')}\n🛠️ Tools: ${portfolioData.skills.tools.slice(0, 4).join(', ')}\n\nWould you like details about any specific area?`;
    }

    // Project inquiries with interactive options
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      if (message.includes('latest') || message.includes('recent')) {
        const latestProject = portfolioData.projects[0];
        return `Latest project: **${latestProject.name}**\n\n🔧 Tech: ${latestProject.tech.join(', ')}\n📝 ${latestProject.description}\n✨ Key features: ${latestProject.features.join(', ')}\n\nWant to know more about this or other projects?`;
      }
      
      const projectNames = portfolioData.projects.map(p => p.name).join(', ');
      return `Aniket has worked on several exciting projects: ${projectNames}. Each showcases different aspects of his skills. Which project would you like to explore in detail? 🚀`;
    }

    // Specific project details
    portfolioData.projects.forEach(project => {
      if (message.includes(project.name.toLowerCase()) || message.includes('ecommerce') || message.includes('dashboard') || message.includes('chatbot')) {
        return `**${project.name}** 🎯\n\n${project.description}\n\n🛠️ Technologies: ${project.tech.join(', ')}\n⭐ Features:\n${project.features.map(f => `• ${f}`).join('\n')}\n📊 Status: ${project.status}\n\nWould you like to see more projects or learn about the development process?`;
      }
    });

    // Experience and career
    if (message.includes('experience') || message.includes('career') || message.includes('job') || message.includes('work history')) {
      const exp = portfolioData.experience[0];
      return `Current role: **${exp.role}** at ${exp.company} (${exp.duration})\n\n💼 Key responsibilities:\n${exp.responsibilities.map(r => `• ${r}`).join('\n')}\n\nTotal experience spans multiple companies and roles. Want to know about his career journey or specific responsibilities? 📈`;
    }

    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('university') || message.includes('study')) {
      const edu = portfolioData.education;
      return `🎓 Education: ${edu.degree} from ${edu.institution}\n📅 Graduated: ${edu.year}\n⭐ CGPA: ${edu.cgpa}\n\nAniket combines academic knowledge with practical experience. Curious about his learning journey or certifications?`;
    }

    // Contact information
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('hire') || message.includes('connect')) {
      return `📞 Let's connect! Here are the best ways to reach Aniket:\n\n📧 Email: ${portfolioData.contact.email}\n💼 LinkedIn: ${portfolioData.contact.linkedin}\n👨‍💻 GitHub: ${portfolioData.contact.github}\n📱 Phone: ${portfolioData.contact.phone}\n\nFeel free to reach out for collaborations or opportunities! 🤝`;
    }

    // Availability and hiring
    if (message.includes('available') || message.includes('hiring') || message.includes('freelance') || message.includes('opportunity')) {
      return `Aniket is currently open to new opportunities! He's interested in:\n\n🚀 Full-stack development roles\n💡 Innovative tech projects\n🌟 Freelance collaborations\n📈 Growth-oriented positions\n\nShall I help you get in touch with him?`;
    }

    // Code/Development process
    if (message.includes('code') || message.includes('development') || message.includes('process') || message.includes('methodology')) {
      return `Aniket follows modern development practices:\n\n🔄 Agile methodology\n🧪 Test-driven development\n📝 Clean code principles\n🔧 CI/CD pipelines\n🎨 Mobile-first design\n\nHe believes in writing maintainable, scalable code. Want to know about his approach to any specific aspect?`;
    }

    // Hobbies and interests
    if (message.includes('hobby') || message.includes('interest') || message.includes('free time') || message.includes('passion')) {
      return `Beyond coding, Aniket is passionate about:\n\n🌐 Open source contributions\n📚 Learning new technologies\n🎯 Problem-solving challenges\n🏃‍♂️ Staying active and healthy\n📖 Tech blogs and tutorials\n\nHe believes in continuous learning and giving back to the community! 🌟`;
    }

    // Specific technology questions
    const techQuestions = ['react', 'nodejs', 'python', 'javascript', 'typescript', 'mongodb', 'sql'];
    const mentionedTech = techQuestions.find(tech => message.includes(tech));
    if (mentionedTech) {
      const techResponses = {
        'react': 'React is one of Aniket\'s core strengths! He has 3+ years of experience building complex SPAs, state management with Redux/Context, and modern hooks. He loves React\'s component-based architecture.',
        'nodejs': 'Node.js expertise includes building RESTful APIs, microservices, real-time applications with Socket.io, and database integration. He appreciates its performance and JavaScript ecosystem.',
        'python': 'Python skills span web development with Django/FastAPI, data analysis, automation scripts, and API integrations. He loves Python\'s simplicity and versatility.',
        'javascript': 'JavaScript is Aniket\'s primary language! From ES6+ features to async programming, DOM manipulation, and modern frameworks - he\'s got it covered.',
        'typescript': 'TypeScript adds robustness to his JavaScript projects. He uses it for better code quality, IDE support, and catching errors early in development.',
        'mongodb': 'MongoDB experience includes schema design, aggregation pipelines, indexing strategies, and integration with Node.js applications. Great for flexible data structures!',
        'sql': 'SQL database management includes PostgreSQL and MySQL. He handles complex queries, optimization, relationships, and database design principles.'
      };
      
      return `${techResponses[mentionedTech]} Want to know about his projects using ${mentionedTech.toUpperCase()} or other related technologies? 💻`;
    }

    // Questions about the chatbot itself
    if (message.includes('you') || message.includes('chatbot') || message.includes('ai') || message.includes('assistant')) {
      return `I'm Aniket's AI portfolio assistant! 🤖 I'm here to help you learn everything about his skills, projects, and background. I can provide detailed information and answer specific questions. What would you like to explore next?`;
    }

    // Compliments and positive feedback
    if (message.includes('good') || message.includes('great') || message.includes('awesome') || message.includes('impressive') || message.includes('cool')) {
      return `Thank you! Aniket puts a lot of passion into his work. He's always striving to create meaningful solutions and improve his skills. Is there anything specific you'd like to explore further? 🙌`;
    }

    // Questions about learning/growth
    if (message.includes('learn') || message.includes('growth') || message.includes('future') || message.includes('goals')) {
      return `Aniket is committed to continuous learning! 📚 Currently exploring:\n\n🔮 AI/ML integration in web apps\n☁️ Cloud architecture (AWS/Azure)\n📱 Mobile app development\n🔒 Cybersecurity best practices\n\nHe believes in staying ahead of technology trends. What interests you about his growth journey?`;
    }

    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
      return `You're very welcome! I'm here whenever you need more information about Aniket or his work. Feel free to ask anything else! 😊`;
    }

    // Goodbye
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
      return `Goodbye! It was great chatting with you. Don't forget to reach out to Aniket if you'd like to connect. Have a wonderful day! 👋`;
    }

    // Help and capabilities
    if (message.includes('help') || message.includes('what can you') || message.includes('commands')) {
      return `I can help you with:\n\n💼 Skills & technologies\n🚀 Project details & demos\n📈 Career experience\n🎓 Education background\n📞 Contact information\n💡 Development approach\n🌟 Personal interests\n\nJust ask me anything about Aniket's portfolio! What interests you most?`;
    }

    // Default intelligent responses
    const contextualResponses = [
      "That's an interesting question! Could you tell me more about what specifically interests you about Aniket's work?",
      "I'd love to help you learn more! Are you interested in his technical skills, projects, or experience?",
      "Great question! I can share details about Aniket's portfolio. What aspect would you like to focus on?",
      "I'm here to showcase Aniket's expertise! Would you like to know about his latest projects or technical skills?",
      "Let me help you discover Aniket's capabilities! What type of information are you looking for?"
    ];
    
    return contextualResponses[Math.floor(Math.random() * contextualResponses.length)];
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    
    const userMessage = input;
    const timestamp = new Date();
    
    // Add user message
    setMessages(prev => [...prev, { from: "user", text: userMessage, timestamp }]);
    setInput("");
    setIsTyping(true);
    
    // Update conversation context
    setConversationContext(prev => [...prev.slice(-5), userMessage]);
    
    // Simulate realistic typing delay based on response length
    const response = getBotResponse(userMessage, conversationContext);
    const typingDelay = Math.min(Math.max(response.length * 20, 1000), 3000);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        from: "bot", 
        text: response,
        timestamp: new Date()
      }]);
    }, typingDelay);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 p-4 mt-[50vh]">
      <div className="w-full max-w-md backdrop-blur-[50px] border-gray-300 rounded-lg shadow-lg flex flex-col border-white border-2">
        <div className="p-3 text-white text-xl rounded-t-lg text-center font-semibold">
          Chat with Aniket
          <div className="text-xs opacity-75 mt-1">Portfolio Assistant • Online</div>
        </div>
        <div className="p-3 h-64 overflow-y-auto text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 flex items-start ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "bot" && (
                <FaRobot className="w-5 h-5 text-white mr-2 mt-1 flex-shrink-0" />
              )}
              <div className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}>
                <span
                  className={`inline-block font-bold px-3 py-2 text-white rounded-lg max-w-[85%] ${
                    msg.from === "user" ? "bg-blue-500/80" : "bg-gray-700/80"
                  }`}
                  style={{ wordBreak: 'break-word', whiteSpace: 'pre-line' }}
                >
                  {msg.text}
                </span>
                <span className="text-xs opacity-50 text-white mt-1">
                  {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
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
          <input
            type="text"
            className="flex-1 backdrop-blur-xl text-white font-bold bg-black/20 border-t-white border-t-2 border-r-2 border-r-white p-2 text-md outline-none placeholder-gray-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about skills, projects, experience..."
            disabled={isTyping}
          />
          <button 
            onClick={sendMessage} 
            disabled={isTyping}
            className="px-3 border-white border-t-2 text-orange-500 font-bold hover:bg-white/10 transition-colors disabled:opacity-50"
          >
            ➤
          </button>
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