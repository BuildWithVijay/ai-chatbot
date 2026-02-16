import { useState } from "react";
import axios from "axios";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey 👋 I’m your AI assistant. Ask anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);  
  const [showMore, setShowMore] = useState(false);
  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend) return;

    const userMsg: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: textToSend,
      });

      const botMsg: Message = {
        role: "assistant",
        content: res.data.reply,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const parseMarkdown = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Heading (###)
      if (line.startsWith("###")) {
        return (
          <h3 key={idx} className="font-bold text-lg mt-2">
            {line.replace(/^###\s?/, "").replace(/\s?###$/, "")}
          </h3>
        );
      }
      // Horizontal line (---)
      if (line.trim() === "---") {
        return <hr key={idx} className="my-2 border-gray-300" />;
      }
      // Bold (**text**)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = line.split(boldRegex);
      return (
        <p key={idx} className="text-sm leading-relaxed">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i}>{part}</strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

const actionButtons = [
  "Create a plan for beginners",
  "Help me get started",
  "Explain this in simple terms",
  "Give me step-by-step guidance",
  "Summarize my content",
  "Generate ideas for my project",
  "Fix my code issue",
  "Improve my writing",
  "Translate my text",
  "Answer my question quickly"
];


  return (
    <div className="h-full flex flex-col bg-white text-gray-900 rounded-2xl shadow-2xl border max-w-md mx-auto overflow-hidden">

      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 w-10 h-10 text-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img src="https://png.pngtree.com/png-vector/20250903/ourmid/pngtree-d-ai-chatbot-icon-cute-robot-head-with-glossy-blue-design-png-image_17355891.webp" alt="AI Bot" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-gray-900">AI ChatBot</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col  p-4 space-y-4 h-[400px] overflow-hidden overflow-y-auto" style={{scrollbarWidth:"thin", scrollbarColor:"gray transparent"}}>
        <div className="text-xs text-gray-400 text-start mb-4">Today</div>
        
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex gap-3 max-w-xs ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar */}
              {msg.role === "assistant" && (
               <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded-full flex-shrink-0 overflow-hidden">
            <img src="https://png.pngtree.com/png-vector/20250903/ourmid/pngtree-d-ai-chatbot-icon-cute-robot-head-with-glossy-blue-design-png-image_17355891.webp" alt="AI Bot" className="w-full h-full object-cover" />
          </div>
              )}
              {msg.role === "user" && (
                <div className="bg-gray-300 text-gray-600 rounded-full p-2 text-sm font-bold flex-shrink-0">
                  👤
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`p-3 rounded-lg text-start ${
                  msg.role === "user"
                    ? "bg-gray-900 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.role === "assistant" ? parseMarkdown(msg.content) : msg.content}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start gap-3">
            <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded-full flex-shrink-0 overflow-hidden">
              <img src="https://png.pngtree.com/png-vector/20250903/ourmid/pngtree-d-ai-chatbot-icon-cute-robot-head-with-glossy-blue-design-png-image_17355891.webp" alt="AI Bot" className="w-full h-full object-cover" />
            </div>
            <div className="text-gray-500 text-sm italic">Typing...</div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-3 flex flex-wrap gap-2">
        {actionButtons.slice(0, showMore ? actionButtons.length : 5).map((btn, i) => (
          <button
            key={i}
            onClick={() => sendMessage(btn)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs px-3 py-2 rounded-full transition"
          >
            {btn}
          </button>
        ))}
        {actionButtons.length > 5 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs px-3 py-2 rounded-full transition font-semibold"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask anything..."
          className="flex-1 bg-gray-50 border border-gray-300 rounded-full px-4 py-2 outline-none text-sm placeholder-gray-400 focus:border-blue-500"
        />

        <button
          onClick={() => sendMessage()}
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full font-semibold text-sm transition flex items-center justify-center"
        >
          ➜
        </button>
      </div>
    </div>
  );
}
