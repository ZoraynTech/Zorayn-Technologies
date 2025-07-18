import { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase"; // Your Supabase client

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

    // Add user message
    const userMessage: Omit<Message, 'id' | 'created_at'> = {
      content: input,
      sender: 'user'
    };

    // Save to Supabase
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
    
    // Simulate bot thinking delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create bot response (replace with your actual logic)
    const botResponse: Omit<Message, 'id' | 'created_at'> = {
      content: getBotResponseContent(userInput),
      sender: 'bot'
    };

    // Save to Supabase
    await supabase
      .from('messages')
      .insert([botResponse]);

    setIsTyping(false);
  };

  const getBotResponseContent = (input: string): string => {
    // Add your custom bot logic here
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

  // ... (keep your existing JSX, but update the messages rendering)