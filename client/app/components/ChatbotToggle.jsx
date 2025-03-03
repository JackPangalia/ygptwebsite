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
          className="bg-black text-white fixed bottom-3 right-5 z-50 px-5 py-3 rounded-full shadow-md transition-all duration-300 flex gap-2 items-center"
        >
          Chatbot{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
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
