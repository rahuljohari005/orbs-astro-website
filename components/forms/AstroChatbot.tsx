"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

export default function AstroChatbot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "🙏 Namaste! I'm Saanvi, your Scientific Astrology AI assistant. I can help you with questions about career, marriage, health, wealth, and spiritual guidance. What would you like to know about your cosmic destiny?",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputText.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputText,
                    birthData: null // Will be enhanced to pass birth data from Lagna Chart Generator
                }),
            });

            const data = await response.json();

            if (response.ok) {
                const botMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: data.response,
                    isUser: false,
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, botMessage]);
            } else {
                throw new Error(data.error || 'Failed to get response');
            }
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const quickQuestions = [
        "When will I get married?",
        "What about my career prospects?",
        "Tell me about my health",
        "Financial predictions for me",
        "Generate my Kundali"
    ];

    const handleQuickQuestion = (question: string) => {
        setInputText(question);
    };

    return (
        <div className="h-96 flex flex-col bg-black/30 backdrop-blur-lg border border-gold/30 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gold/20 border-b border-gold/30 p-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                        <FaRobot className="text-black" />
                    </div>
                    <div>
                        <h3 className="text-gold font-semibold">Saanvi</h3>
                        <p className="text-offwhite/80 text-sm">Scientific Astrology Assistant</p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'bg-gold' : 'bg-olive'
                                    }`}>
                                    {message.isUser ? <FaUser className="text-black text-xs" /> : <FaRobot className="text-white text-xs" />}
                                </div>
                                <div className={`rounded-lg p-3 ${message.isUser
                                    ? 'bg-gold text-black'
                                    : 'bg-black/50 text-offwhite border border-gold/20'
                                    }`}>
                                    <p className="text-sm leading-relaxed">{message.text}</p>
                                    <p className="text-xs opacity-70 mt-1">
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-olive flex items-center justify-center">
                                <FaRobot className="text-white text-xs" />
                            </div>
                            <div className="bg-black/50 text-offwhite border border-gold/20 rounded-lg p-3">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="px-4 py-2 border-t border-gold/20">
                <div className="flex gap-2 overflow-x-auto">
                    {quickQuestions.map((question, index) => (
                        <button
                            key={index}
                            onClick={() => handleQuickQuestion(question)}
                            className="flex-shrink-0 px-3 py-1 text-xs bg-gold/20 text-gold rounded-full hover:bg-gold/30 transition"
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gold/30">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about your destiny..."
                        className="flex-1 p-3 bg-black/50 text-white rounded-lg border border-gold/30 focus:border-gold focus:outline-none placeholder-gray-400"
                        disabled={isLoading}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!inputText.trim() || isLoading}
                        className="px-4 py-3 bg-gold text-black rounded-lg hover:opacity-80 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    );
}