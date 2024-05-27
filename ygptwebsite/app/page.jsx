import Image from "next/image";
import Link from "next/link";
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="pt-[8rem]">
        <section className = 'sm:mt-20 mt-14 max-w-[1500px] px-[3rem] mx-auto'>
          <h1 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-semibold">
            AI Tailored For Your Business.
          </h1>
          <h3 className="md:text-2xl sm:text-xl text-lg sm:mt-20 mt-14 text-gray-500 ml-auto xl:w-[50%] lg:w-[66%] ">
            Unlock your business's potential with our custom AI solutions.
            Tailored to meet your unique needs, our expert team ensures seamless
            implementation and enhanced productivity. Experience AI done right,
            with a focus on quality and results.
          </h3>
        </section>
        
        <section className="bg-black sm:py-32 py-20 sm:mt-40 mt-24 text-white">
          <div className="px-[3rem] max-w-[1500px] mx-auto">
            <h2 className="text-5xl" id="services">
              Our Services
            </h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-16">
              <div className="bg-red-300 lg:min-h-[22rem] min-h-[17rem] justify-between flex flex-col text-black p-8">
                <h4 className="text-white xl:text-3xl text-2xl">Chat Bot Development</h4>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, tempora quis ut sit expedita iure.
                </p>
                <Link
                  href="/chatbot"
                  className="text-xl bg-black w-fit text-white px-4 py-2 "
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-blue-300 lg:min-h-[22rem] min-h-[17rem] justify-between flex flex-col text-black p-8">
                <h4 className="text-white xl:text-3xl text-2xl">
                  Autonomous Agent Development
                </h4>
                <p className="text-lg">
                  Lorem ipsum dolor sitta iure. Lorem ipsum dolor sittaLorem
                  ipsum dolor sitta s
                </p>
                <button className="text-xl bg-black w-fit text-white px-4 py-2 ">
                  Learn More
                </button>
              </div>

              <div className="bg-green-300 lg:min-h-[22rem] min-h-[17rem] justify-between flex flex-col text-black p-8">
                <h4 className="text-white xl:text-3xl text-2xl">Enterprise Consoluting</h4>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, tempora quis ut siita iure.
                </p>
                <button className="text-xl bg-black w-fit text-white px-4 py-2 ">
                  Learn More
                </button>
              </div>

              <div className="bg-purple-300 lg:min-h-[22rem] min-h-[17rem] justify-between flex flex-col text-black p-8">
                <h4 className="text-white xl:text-3xl text-2xl">Data Analysis</h4>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, tempora quis ut siita iure.
                </p>
                <button className="text-xl bg-black w-fit text-white px-4 py-2 ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[3rem] max-w-[1500px] mx-auto" id="benifits">
          <h2 className="text-5xl my-20">Why Implement AI?</h2>
          <div className="flex justify-strech gap-14">
            <Keypoint
              link="offerings/businessanalyst"
              title="Increase Efficiency"
              paragraph="Streamline your operations and boost productivity with AI-driven automation."
              exploretopic=""
            />
            <Keypoint
              link="#"
              title="Enhance Decision-Making"
              paragraph="Leverage data-driven insights and real-time analytics for better strategic decisions."
              exploretopic=""
            />
            <Keypoint
              link="#"
              title="Foster Innovation"
              paragraph="Gain a competitive edge by developing new products and services using AI insights."
              exploretopic=""
            />
            
          </div>
        </section>

        <section className="w-full border-b-[1px] border-black pb-24 lg:px-[3rem] px-[1.5rem] max-w-[1500px] mx-auto">
          <h2 className="my-20 text-5xl w-1/2">
            What Makes Companyname* Platforms So Powerful
          </h2>

          <div className="grid grid-cols-4 gap-14">
            <Keypoint
              link="#"
              title="General & Specific Knowledge"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius vero sequi magni, dolores similique delectus."
              exploretopic="Knowledge base"
            />
            <Keypoint
              link="#"
              title="Fine Tuning"
              paragraph="Our Model Tuning service optimises your chatbot for precise, responsive, and accurate interactions."
              exploretopic="Fine Tuning"
            />
            <Keypoint
              link="#"
              title="Multi-Layered Security and Data"
              paragraph="Custom AI platforms ensure security with robust encryption, strict access controls, and continuous monitoring to protect sensitive data."
              exploretopic="Security"
            />
            <Keypoint
              link="#"
              title="Day One Value"
              paragraph="Our platforms are made to be used right away, not months, but days."
              exploretopic="Value"
            />
            <Keypoint
              link="#"
              title="Industry Leading AI"
              paragraph="Get access to the latest and greatest AI tech within your platform"
              exploretopic="Value"
            />
            <Keypoint
              link="#"
              title="Proprietary & Tailored Platforms"
              paragraph="We build your solution from the ground up to handle your businesses needs"
              exploretopic="Value"
            />
            <Keypoint
              link="#"
              title="Constant Updates"
              paragraph="We always looking for ways to better your custom AI experience "
              exploretopic="Value"
            />
            <Keypoint
              link="#"
              title="Full Integration"
              paragraph="Our solutions have the scalability to potentially cover you business head to toe "
              exploretopic="Value"
            />
          </div>
        </section>

        <Contactpanel />
      </div>

      <Footer />
    </>
  );
};

export default Home;