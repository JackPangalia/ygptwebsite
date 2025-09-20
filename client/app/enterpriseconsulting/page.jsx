import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Footer from "../components/Footer";
import ConsultingClient from "./ConsultingClient";

export const metadata = {
  title: "Enterprise Consulting Services | Centonis: Elevate Your Business with AI Solution",
  description: "Explore Centonis's enterprise consulting services. We provide expert guidance and custom AI solutions to optimize your business processes and drive growth. Partner with us for innovative strategies and tailored solutions that deliver results.",
  keywords: ["Enterprise Consulting", "AI Consulting", "Business Optimization", "Digital Transformation", "AI Strategy", "Business Efficiency"],
  openGraph: {
    title: "Enterprise Consulting Services | Centonis",
    description: "Expert AI consulting services to transform your business operations and drive growth.",
    images: [
      {
        url: "/Vancouver_Cruise_Terminal.webp",
        width: 1200,
        height: 630,
        alt: "Centonis AI Chatbot Development Services Illustration"
      }
    ]
  }
};

const EnterpriseConsulting = () => {
  return <ConsultingClient />;
};

export default EnterpriseConsulting;
