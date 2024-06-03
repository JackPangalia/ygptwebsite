import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Contactpanel from "../components/contactpanel";
import Footer from "../components/Footer";

export const metadata = {
  title:
    "Enterprise Consulting Services | Centonis: Elevate Your Business with AI Solution",
  description:
    "Explore Centonis's enterprise consulting services. We provide expert guidance and custom AI solutions to optimize your business processes and drive growth. Partner with us for innovative strategies and tailored solutions that deliver results.",
};

const Chatbotdevlopment = () => {
  return (
    <div className="pt-[8rem]">
      <section className="sm:mt-20 mt-14 max-w-[1500px] px-[2rem] mx-auto">
        <div className="w-full flex lg:flex-row flex-col gap-10">
          <h1 className="lg:text-6xl text-5xl lg:w-1/2 w-full">
            Enterprise Consulting
          </h1>
          <p className=" lg:w-1/2 w-full text-lg">
            Leverage our expertise to devise and implement an effective strategy
            for integrating this groundbreaking technology. We&apos;ll closely
            align with your business goals, ensuring streamlined implementation
            and maximizing benefits. Partner with us for improved efficiency,
            productivity, and overall business performance, from planning to
            ongoing support.
          </p>
        </div>

        <Image
          src="/cooldesign.jpg"
          alt="chat bot img"
          height={1700}
          width={1700}
          className="w-full mt-20 max-h-[800px] object-cover"
        />

        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14 lg:mt-24 mt-14">
          <Keypoint
            title="Competitive Advantage"
            paragraph="Implementing advanced AI with our consultants gives Your Business a competitive edge. Stay ahead with innovative solutions, delivering superior value. Harness the full potential of AI to premote innovation, efficiency, and enhanced experiences."
          />
          <Keypoint
            title="Cost Savings and ROI Improvement"
            paragraph="
            AI consulting drives cost savings by streamlining operations, reducing errors, and optimizing resource allocation. Strategic AI implementation enhances ROI, improving performance and driving revenue growth."
          />
          <Keypoint
            title="Innovation and Growth"
            paragraph="We foster innovation by identifying market opportunities and enabling cutting-edge product development. Integrating AI drives innovation, explores new revenue streams, and ensures sustainable growth."
          />
          <Keypoint
            title="Risk Management and Compliance"
            paragraph="AI enhances risk management by identifying threats and ensuring compliance. Predictive analytics and automated monitoring systems mitigate risks, maintaining a secure environment for Your Business."
          />
        </div>
      </section>

      <Contactpanel />
      <Footer />
    </div>
  );
};

export default Chatbotdevlopment;
