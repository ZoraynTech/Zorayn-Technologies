import { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/supabase";


interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  created_at: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Load initial messages and subscribe to new ones
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setMessages(data);
    };

    fetchMessages();

    const channel = supabase
      .channel('chat_messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          setMessages(prev => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Omit<Message, 'id' | 'created_at'> = {
      content: input,
      sender: 'user'
    };

    const { error } = await supabase
      .from('messages')
      .insert([userMessage]);

    if (!error) {
      setInput('');
      generateBotResponse(input);
    }
  };

  const generateBotResponse = async (userInput: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const botResponse: Omit<Message, 'id' | 'created_at'> = {
      content: getBotResponseContent(userInput),
      sender: 'bot'
    };

    await supabase
      .from('messages')
      .insert([botResponse]);

    setIsTyping(false);
  };

  const getBotResponseContent = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('service') || lowerInput.includes('technology')) {
      return "We offer cutting-edge solutions in AI, Web Development, and Cloud Computing. Would you like me to detail any specific area?";
    } else if (lowerInput.includes('consult') || lowerInput.includes('meet')) {
      return "I can connect you with our experts. Please provide your availability and contact details.";
    } else if (lowerInput.includes('portfolio') || lowerInput.includes('project')) {
      return "Here are some featured projects: [Project 1], [Project 2]. Would you like details on any?";
    } else if (lowerInput.includes('custom') || lowerInput.includes('solution')) {
      return "Our team specializes in tailored solutions. Could you describe your specific requirements?";
    }
    
    return "Thank you for your message! How can I assist you further with Zorayn Technologies' services?";
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-ping opacity-20"></div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 group"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <MessageCircle className="h-6 w-6" />
                  <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-300 animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: 15 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Zorayn AI</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-sm opacity-90">Online & Ready to Help</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 h-72 overflow-y-auto bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
              <div className="space-y-4">
                {/* Initial Message */}
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 max-w-xs border border-purple-100 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Hello! I'm your AI assistant for Zorayn Technologies. How can I help you today?
                    </p>
                  </div>
                </motion.div>

                {/* Dynamic Messages */}
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 max-w-xs border ${
                      message.sender === 'user' 
                        ? 'ml-auto border-blue-100 bg-blue-50/50' 
                        : 'mr-auto border-purple-100'
                    } shadow-sm`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-sm text-gray-700">
                      {message.content}
                    </p>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 max-w-xs border border-purple-100 shadow-sm mr-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-75"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-150"></div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200/50 p-4 bg-white/50 backdrop-blur-sm">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                  disabled={isTyping}
                />
                <button 
                  onClick={sendMessage}
                  disabled={isTyping}
                  className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-2xl transition-all duration-200 transform ${
                    !isTyping ? 'hover:scale-105 hover:shadow-lg' : 'opacity-50'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}