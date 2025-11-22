import React, { useState, useEffect, useRef } from 'react';
import { X, MessageSquare, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { callGeminiAPI } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: 'ai', text: `Hello! I'm ${PERSONAL_INFO.name}'s AI Assistant. Ask me anything about her work! ✨` }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue("");
    setIsLoading(true);
    const aiResponse = await callGeminiAPI(userMsg, "You are a helpful portfolio assistant.");
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group border border-purple-400/50 active:scale-90"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[400px] bg-[#1a1a1a] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="p-4 bg-gradient-to-r from-purple-900 to-black border-b border-white/10 flex items-center gap-3">
             <Sparkles className="w-5 h-5 text-white" />
             <h3 className="font-bold text-white text-sm">AI Assistant</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#121212]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-200'}`}>{msg.text}</div>
              </div>
            ))}
            {isLoading && <div className="text-xs text-gray-400 ml-2">AI is typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-black/50 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 bg-gray-900 text-white text-sm rounded-full px-4 py-2 focus:outline-none" 
              placeholder="Ask me..." 
            />
            <button onClick={handleSendMessage} disabled={isLoading}><Send className="w-4 h-4 text-white" /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;