import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Contactpanel from "../components/contactpanel";
import Footer from "../components/Footer";

export const metadata = {
  title:
    "Chatbot Development Services | Centonis: Custom AI Chatbots for Your Business",
  description:
    "Discover Centonis's chatbot development services. We create custom AI chatbots tailored to your business needs, enhancing customer engagement and operational efficiency. Learn how our proprietary technology can transform your customer interactions.",
};

const Chatbotdevlopment = () => {
  return (
    <div className="pt-[8rem]">
      <section className="sm:mt-20 mt-14 max-w-[1500px] px-[2rem] mx-auto">
        <div className="w-full flex lg:flex-row flex-col gap-10">
          <h1 className="lg:text-6xl text-5xl lg:w-1/2 w-full">
            Chat Bot Development
          </h1>
          <p className=" lg:w-1/2 w-full text-lg">
            We specialize in building intelligent bots that significantly
            enhance daily efficiency and streamline your workflows. Our tailored
            solutions automate key communication tasks, ensuring seamless and
            effective interactions with both existing and potential clients. Let
            our bots handle the heavy lifting, making routine tasks easier to
            manage.
          </p>
        </div>

        <Image
          src="/aichatbotanimated.png"
          alt="chat bot img"
          height={1700}
          width={1700}
          className="w-full mt-20 max-h-[800px] object-cover"
        />

        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14 lg:mt-24 mt-14">
          <Keypoint
            title="Latest AI Models"
            paragraph="We leverage cutting-edge AI models, such as GPT-4o, to ensure you receive the most advanced and up-to-date AI responses available in the industry.
            "
          />
          <Keypoint
            title="Personalized"
            paragraph="Our chatbots are meticulously customised to align with your specific use case requirements, ensuring they seamlessly integrate into your operational framework and address your unique business needs."
          />
          <Keypoint
            title="Expansive Knowledge"
            paragraph="We have the capability to seamlessly integrate even the most complex and intricate data sets into our chatbot systems. This ensures that our solutions effectively manage diverse data challenges. Allowing us to tailor to even the more rare use cases"
          />
          <Keypoint
            title="Fast"
            paragraph="We refine our chatbots for peak speed performance, ensuring swift and efficient output. Our dedication to speed excellence guarantees unmatched responsiveness and seamless interactions."
          />
        </div>
      </section>

      <Contactpanel />
      <Footer />
    </div>
  );
};

export default Chatbotdevlopment;
