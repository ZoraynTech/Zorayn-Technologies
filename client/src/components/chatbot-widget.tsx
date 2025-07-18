import { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="relative">
          {/* Pulse effect */}
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

      {/* Chatbot Interface */}
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
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 max-w-xs border border-purple-100 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Hello! I'm your AI assistant for Zorayn Technologies. I can help you explore our services, discuss your project needs, or connect you with our experts.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 max-w-xs border border-purple-100 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm text-gray-700 mb-3">
                    What interests you most?
                  </p>
                  <div className="space-y-2">
                    {[
                      "🚀 Our Technology Services",
                      "💼 Schedule a Consultation", 
                      "📊 Project Portfolio",
                      "💡 Custom Solutions"
                    ].map((option, index) => (
                      <motion.button 
                        key={index}
                        className="block w-full text-left text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200/50 p-4 bg-white/50 backdrop-blur-sm">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 group">
                  <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
