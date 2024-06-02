import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Contactpanel from "../components/contactpanel";
import Footer from "../components/Footer";

const Chatbotdevlopment = () => {
  return (
    <div className="pt-[8rem]">
      <section className="sm:mt-20 mt-14 max-w-[1500px] px-[2rem] mx-auto">
        <div className="w-full flex lg:flex-row flex-col gap-10">
          <h1 className="lg:text-6xl text-5xl lg:w-1/2 w-full">
            Data Analysis
          </h1>
          <p className=" lg:w-1/2 w-full text-lg">
            We deploy sophisticated systems and applications meticulously
            designed to analyze diverse datasets, presenting information in a
            comprehensible format. These cutting-edge tools empower you to
            extract valuable insights and make informed decisions based on
            data-driven predictions. Additionally, our applications seamlessly
            retrieve both real-time and historical data, responding to queries
            with efficiency and accuracy, thereby facilitating swift
            decision-making processes.
          </p>
        </div>

        <Image
          src="/analysis.jpg"
          alt="chat bot img"
          height={1700}
          width={1700}
          className="w-full mt-20 max-h-[800px] object-cover"
        />

        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14 lg:mt-24 mt-14">
          <Keypoint
            title="Automation of Routine Tasks"
            paragraph="AI can automate repetitive and time-consuming tasks such as data entry, report generation, and basic customer service inquiries. This frees up human resources to focus on more strategic and creative activities, increasing overall productivity."
          />
          <Keypoint
            title="Predictive Analytics 
            "
            paragraph="AI can predict future outcomes based on historical data, helping businesses anticipate market trends, customer behaviours, and operational challenges. This enables proactive decision-making and strategic planning."
          />
          <Keypoint
            title="Real-Time Data Processing "
            paragraph="AI can process and analyse data in real-time, providing businesses with up-to-the-minute insights. This is crucial for dynamic environments where timely information can significantly impact decision-making and competitive positioning."
          />
          <Keypoint
            title="Enhanced Data Accuracy"
            paragraph="AI algorithms can identify and correct errors in data, ensuring higher data quality and reliability. This improves the accuracy of business insights and decisions derived from the analysed data."
          />
        </div>
      </section>

      <Contactpanel />
      <Footer />
    </div>
  );
};

export default Chatbotdevlopment;
