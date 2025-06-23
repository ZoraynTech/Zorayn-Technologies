import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[var(--zorayn-gold)] hover:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-[var(--zorayn-gold)] p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Zorayn AI</h3>
                  <p className="text-sm opacity-90">How can I help you today?</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 h-72 overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-700">
                    Hi! I'm Zorayn AI, your virtual assistant. I can help you learn about our services, schedule consultations, or answer any questions about Zorayn Technologies.
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-700">
                    What would you like to know?
                  </p>
                  <div className="mt-2 space-y-1">
                    <button className="block w-full text-left text-xs text-[var(--zorayn-gold)] hover:underline">
                      → Tell me about your services
                    </button>
                    <button className="block w-full text-left text-xs text-[var(--zorayn-gold)] hover:underline">
                      → Schedule a consultation
                    </button>
                    <button className="block w-full text-left text-xs text-[var(--zorayn-gold)] hover:underline">
                      → View pricing information
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--zorayn-gold)]"
                />
                <Button size="sm" className="bg-[var(--zorayn-gold)] hover:bg-yellow-500">
                  Send
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
