import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Contactpanel from "../components/contactpanel";
import Footer from "../components/Footer";

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
  return (
    <main className="pt-[8rem]">
      <article className="sm:mt-20 mt-14 max-w-[1500px] px-[2rem] mx-auto">
        <div className="w-full flex lg:flex-row flex-col gap-10">
          <h1 className="lg:text-6xl text-5xl lg:w-1/2 w-full">
            Autonomous Agent Development
          </h1>
          <p className=" lg:w-1/2 w-full text-lg">
            We develop agents that seamlessly integrate with your existing
            system and perform tasks on your behalf once approved. These agents
            will enhance your workflow efficiency, significantly reducing the
            overall time required to complete tasks and increasing productivity.
          </p>
        </div>

        <Image
          src="/canadaplace.webp"
          alt="chat bot img"
          height={1700}
          width={1700}
          className="w-full mt-20 max-h-[800px] object-cover"
          layout="responsive"

        />

        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14 lg:mt-24 mt-14">
          <Keypoint
            title="Enhanced Efficiency and Productivity"
            paragraph="Our autonomous agents execute tasks swiftly and accurately without human intervention, significantly reducing the time and effort required for routine and repetitive tasks. This leads to a substantial increase in overall productivity."
          />
          <Keypoint
            title="Cost Optimization"
            paragraph="By automating processes, our autonomous agents help lower labour costs and minimise errors, which can otherwise lead to expensive corrections or inefficiencies. Operating continuously without breaks, they enhance cost-effectiveness."
          />
          <Keypoint
            title="Consistency and Reliability"
            paragraph="Autonomous agents ensure tasks are performed with consistent precision, adhering to predefined protocols and standards. This reduces variability and enhances the quality and reliability of outcomes."
          />
          <Keypoint
            title="Scalability and Flexibility: 
            "
            paragraph="Our autonomous agents can effortlessly scale to manage increased workloads without the need for proportional increases in human resources. They are also adaptable, capable of being reprogrammed to perform a variety of tasks, offering the flexibility to meet evolving business needs."
          />
        </div>
      </article>

      <Contactpanel />
      <Footer />
    </main>
  );
};

export default AutonomousAgents;
