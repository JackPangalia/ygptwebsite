"use client";
import React, { useState, useEffect } from "react";
import ChatbotIframe from "./ChatbotIframe";

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Add event listener for messages from the iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "closeChatbotFromIframe") {
        setIsOpen(false); // Close the chatbot when message received
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="bg-black text-white fixed bottom-3 right-5 z-50 px-5 py-3 rounded-none shadow-md transition-all duration-300 flex gap-2 items-center"
        >
          Chatbot{" "}

        </button>
      )}

      {/* Chatbot & Close Button */}
      {isOpen && (
        <div className="fixed bottom-3 right-5 z-50">
          <ChatbotIframe />
        </div>
      )}
    </div>
  );
};

export default ChatbotToggle;
