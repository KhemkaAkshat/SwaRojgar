import React, { useState } from "react";

function AIComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Can I help you with something?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      const userMessage = { sender: "user", text: userInput };
      const botResponse = {
        sender: "bot",
        text: userInput.toLowerCase() === "yes" ? "Great! How can I assist you?" : "Okay, let me know if you need anything!",
      };

      setMessages([...messages, userMessage, botResponse]);
      setUserInput("");
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      <div
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full cursor-pointer text-xl"
        onClick={toggleChat}
      >
        💬
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Chatbot</span>
            <button className="text-white" onClick={toggleChat}>X</button>
          </div>
          <div className="p-3 h-60 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg ${message.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-300 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg ml-2"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIComponent;
