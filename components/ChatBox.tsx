'use client';

import { useState } from 'react';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
}

export default function ChatBox() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            isUser: true,
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/proxy/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (response.status === 400) {
                const botMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: 'Pehle kundali generate kijiye 💫',
                    isUser: false,
                };
                setMessages(prev => [...prev, botMessage]);
            } else {
                const data = await response.json();
                const botMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: data.reply || 'Got your message!',
                    isUser: false,
                };
                setMessages(prev => [...prev, botMessage]);
            }
        } catch (error) {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: 'Error: Please try again',
                isUser: false,
            };
            setMessages(prev => [...prev, botMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-lg shadow-lg">
            <div className="p-4 border-b">
                <h3 className="font-semibold">AI Astrologer 🔮</h3>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-2">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`p-2 rounded ${message.isUser
                            ? 'bg-blue-500 text-white ml-8'
                            : 'bg-gray-200 text-gray-800 mr-8'
                            }`}
                    >
                        {message.text}
                    </div>
                ))}
                {loading && (
                    <div className="text-gray-500 text-sm">Typing...</div>
                )}
            </div>

            <div className="p-4 border-t flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 p-2 border rounded"
                />
                <button
                    onClick={sendMessage}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
