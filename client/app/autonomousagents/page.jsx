import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Footer from "../components/Footer";
import AutonomousClient from "./AutonomousClient";

export const metadata = {
  title: "Autonomous Agent Development | Centonis: AI-Powered Task Automation",
  description: "Transform your business operations with Centonis's autonomous agent development services. Our AI agents automate complex tasks, enhance efficiency, and drive productivity. Discover intelligent automation solutions.",
  keywords: ["Autonomous Agents", "AI Automation", "Task Automation", "Workflow Automation", "AI Agents", "Business Process Automation"],
  openGraph: {
    title: "Autonomous Agent Development Services | Centonis",
    description: "Intelligent AI agents that automate your business processes and enhance productivity.",
    images: [
      {
        url: "/canadaplace.webp",
        width: 1200,
        height: 630,
        alt: "Centonis Autonomous Agent Development - Modern Business Solutions"
      }
    ]
  }
};

const AutonomousAgents = () => {
  return <AutonomousClient />;
};

export default AutonomousAgents;
