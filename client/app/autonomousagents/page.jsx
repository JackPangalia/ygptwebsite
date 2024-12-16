import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Contactpanel from "../components/contactpanel";
import Footer from "../components/Footer";

export const metadata = {
  title:
    "Data Analysis Services | Centonis: Unlock Insights with Advanced AI Solutions",
  description:
    "Discover Centonis's data analysis services. We leverage advanced AI technology to transform your data into actionable insights, driving informed decision-making and business growth. Partner with us to harness the power of your data.",
};

const Chatbotdevlopment = () => {
  return (
    <div className="pt-[8rem]">
      <section className="sm:mt-20 mt-14 max-w-[1500px] px-[2rem] mx-auto">
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
          src="/nightskyline.jpg"
          alt="chat bot img"
          height={1700}
          width={1700}
          className="w-full mt-20 max-h-[800px] object-cover"
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
      </section>

      <Contactpanel />
      <Footer />
    </div>
  );
};

export default Chatbotdevlopment;
