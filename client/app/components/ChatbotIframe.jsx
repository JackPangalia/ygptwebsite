'use client'
import React, { useEffect, useRef, useState } from "react";

const ChatbotIframe = () => {
  const iframeRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Apply mobile-specific styles immediately on load/resize
      if (iframeRef.current) {
        if (mobile) {
          // Full screen on mobile
          iframeRef.current.style.width = "100vw";
          iframeRef.current.style.height = "100vh";
          iframeRef.current.style.maxWidth = "100%";
          iframeRef.current.style.maxHeight = "100%";
          
          // Update wrapper positioning for mobile
          if (wrapperRef.current) {
            wrapperRef.current.style.bottom = "0";
            wrapperRef.current.style.right = "0";
          }
        } else {
          // Desktop dimensions
          iframeRef.current.style.width = "90vw";
          iframeRef.current.style.height = "80vh";
          iframeRef.current.style.maxWidth = "400px";
          iframeRef.current.style.maxHeight = "700px";
          
          // Reset wrapper positioning for desktop
          if (wrapperRef.current) {
            wrapperRef.current.style.bottom = "1rem";
            wrapperRef.current.style.right = "1.5rem";
          }
        }
      }
    };

    // Handle messages from the iframe
    const handleMessages = (event) => {
      if (event.data) {
        // Handle resize messages
        if (event.data.type === "resizeChatbot" && !isMobile) {
          if (iframeRef.current) {
            if (event.data.expanded) {
              // Expanded dimensions for desktop only
              iframeRef.current.style.width = "90vw";
              iframeRef.current.style.height = "90vh";
              iframeRef.current.style.maxWidth = "900px";
              iframeRef.current.style.maxHeight = "800px";
            } else {
              // Default dimensions for desktop
              iframeRef.current.style.width = "90vw";
              iframeRef.current.style.height = "80vh";
              iframeRef.current.style.maxWidth = "400px";
              iframeRef.current.style.maxHeight = "700px";
            }
          }
        }
        
        // Handle close chatbot messages
        if (event.data.type === "closeChatbot") {
          // Find parent component and trigger close
          window.parent.postMessage({ type: "closeChatbotFromIframe" }, "*");
        }
      }
    };

    // Prevent wheel events from propagating through the iframe wrapper
    const preventWheelPropagation = (e) => {
      // Only prevent propagation when cursor is over the iframe
      if (iframeRef.current) {
        const rect = iframeRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          e.stopPropagation();
        }
      }
    };

    // Initialize and set up event listeners
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("message", handleMessages);
    
    // Add event listener to the wrapper div
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('wheel', preventWheelPropagation, { passive: false });
    }
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("message", handleMessages);
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('wheel', preventWheelPropagation);
      }
    }
  }, [isMobile]);

  return (
    <div 
      ref={wrapperRef}
      className={`fixed z-50 transition-all duration-300 ${
        isMobile 
          ? "bottom-0 right-0 left-0 top-0" 
          : "bottom-[1rem] right-6"
      }`}
    >
      <iframe
        ref={iframeRef}
        id="ai-chatbot"
        src="http://localhost:5173/Centonis_ai_web_chatbot_frontend" // replace with your actual embed URL
        style={{
          border: "none",
          width: isMobile ? "100vw" : "90vw",
          height: isMobile ? "100vh" : "80vh",
          maxWidth: isMobile ? "100%" : "400px",
          maxHeight: isMobile ? "100%" : "700px"
        }}
        className={`${isMobile ? "" : "rounded-2xl"} shadow-lg bg-white`}
        scrolling="no" // This helps prevent some scroll issues
      ></iframe>
    </div>
  );
};

export default ChatbotIframe;