import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Contactpanel from "../components/contactpanel";
import Footer from "../components/Footer";

const Chatbotdevlopment = () => {
  return (
    <div className="pt-[8rem]">
      <section className="sm:mt-20 mt-14 max-w-[1500px] px-[2rem] mx-auto">
        <div className = 'w-full flex lg:flex-row flex-col gap-10'>
          <h1 className="lg:text-6xl text-5xl lg:w-1/2 w-full">Chat Bot Development</h1>
          <p className=" lg:w-1/2 w-full text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            dolore explicabo facere temporibus voluptate hic eos repellat.
            Nesciunt nulla aperiam repellat fuga eveniet unde quisquam, nam
            nobis neque quos quo aspernatur accusantium, voluptas, minus fugit.
          </p>

        </div>

        <Image src = '/aichatbotanimated.png' alt = 'chat bot img' height = {2000} width = {2000} className = 'w-full mt-20 max-h-[800px] object-cover'/>


        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14 lg:mt-24 mt-14">
          <Keypoint
            title="Latest AI Models"
            paragraph="Our Model Tuning servipsum dolor sit amet, ce optimises your chatbot for precise, responsi"
          />
          <Keypoint
            title="Personalized"
            paragraph="Our Model Tuning servipsum dolor sit amet, ce optimises your chatbot for precise, responsi"
          />
          <Keypoint
            title="Expansive Knowledge"
            paragraph="Our Model Tuning servipsum dolor sit amet, ce optimises your chatbot for precise, responsi"
          />
          <Keypoint
            title="Fast"
            paragraph="Our Model Tuning servipsum dolor sit amet, ce optimises your chatbot for precise, responsi"
          />
        </div>
      </section>

      <Contactpanel />
      <Footer />
    </div>
  );
};

export default Chatbotdevlopment;
