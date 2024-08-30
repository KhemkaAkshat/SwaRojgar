import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ResolutionCenter = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'Daisy',
      text: 'Hello! I’m Daisy, your resolution assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        sender: 'You',
        text: input,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');

      // Daisy's response based on input
      const daisyResponse = getDaisyResponse(input);
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, daisyResponse]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents new line on Enter key press
      handleSend();
    }
  };

  const getDaisyResponse = (userInput) => {
    const lowercasedInput = userInput.toLowerCase();

    if (lowercasedInput.includes('help')) {
      return {
        sender: 'Daisy',
        text: 'Here are some things you can ask me:\n- "Check my order status"\n- "Request a refund"\n- "Escalate my issue"\n- "Contact support"\n- "Help"',
        timestamp: new Date().toLocaleTimeString(),
      };
    } else if (lowercasedInput.includes('status')) {
      return {
        sender: 'Daisy',
        text: 'Please provide your order ID, and I will check the status for you.',
        timestamp: new Date().toLocaleTimeString(),
      };
    } else if (lowercasedInput.includes('refund')) {
      return {
        sender: 'Daisy',
        text: 'I have initiated a refund request. You will receive a confirmation email shortly.',
        timestamp: new Date().toLocaleTimeString(),
      };
    } else if (lowercasedInput.includes('speed up')) {
      return {
        sender: 'Daisy',
        text: 'Your issue has been escalated to our senior support team. You will be contacted within 24 hours.',
        timestamp: new Date().toLocaleTimeString(),
      };
    } else if (lowercasedInput.includes('contact')) {
      return {
        sender: 'Daisy',
        text: 'You can contact our support team directly at support@example.com or call 1-800-123-4567.',
        timestamp: new Date().toLocaleTimeString(),
      };
    } else {
      return {
        sender: 'Daisy',
        text: "Thanks for your message. I'm processing it and will get back to you shortly.",
        timestamp: new Date().toLocaleTimeString(),
      };
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-300 via-blue-300 to-teal-300 shadow-lg rounded-lg p-6 min-h-screen flex flex-col">
      <div className="text-3xl font-bold text-center mb-4 text-white">Resolution Center</div>
      <div className="flex-1 flex flex-col space-y-4 overflow-y-auto p-4 bg-white rounded-lg shadow-md">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-yellow-300 text-gray-800'}`}>
              <div className="text-sm font-semibold">{message.sender}</div>
              <div className="text-sm">{message.text}</div>
              <div className="text-xs text-right mt-1">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-grow p-3 border rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ResolutionCenter;
