import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Contactpanel from "../components/contactpanel";
import Footer from "../components/Footer";
import ChatbotClient from "./ChatbotClient";

export const metadata = {
  title: "Chatbot Development Services | Centonis: Custom AI Chatbots for Your Business",
  description: "Discover Centonis's chatbot development services. We create custom AI chatbots tailored to your business needs, enhancing customer engagement and operational efficiency.",
  keywords: ["Chatbot Development", "AI Chatbots", "Custom Chatbots", "Business Automation", "Customer Service AI", "Conversational AI"],
  openGraph: {
    title: "Custom AI Chatbot Development Services | Centonis",
    description: "Transform your customer interactions with our custom AI chatbots.",
    images: [
      {
        url: "/aichatbotanimated.webp",
        width: 1200,
        height: 630,
        alt: "Centonis AI Chatbot Development Services Illustration"
      }
    ]
  }
};

const Chatbotdevlopment = () => {
  return <ChatbotClient />;
};

export default Chatbotdevlopment;
