import Image from "next/image";
import Link from "next/link";
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="pt-[8rem]">
        <section className="sm:mt-20 mt-14 max-w-[1500px] px-[2rem] mx-auto">
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

        <section className="bg-black md:py-32 py-20 md:mt-40 mt-24 text-white">
          <div className="px-[2rem] max-w-[1500px] mx-auto">
            <h2 className="sm:text-5xl text-4xl" id="services">
              Our Services
            </h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-16">
              <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black p-8">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="2em"
                  width="2em"
                  className="mb-6 text-red-400"
                >
                  <path d="M6 12.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 004.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 01-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 013 9.219V8.062zm4.542-.827a.25.25 0 00-.217.068l-.92.9a24.767 24.767 0 01-1.871-.183.25.25 0 00-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 00.189-.071l.754-.736.847 1.71a.25.25 0 00.404.062l.932-.97a25.286 25.286 0 001.922-.188.25.25 0 00-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 00-.166.076l-.754.785-.842-1.7a.25.25 0 00-.182-.135z" />
                  <path d="M8.5 1.866a1 1 0 10-1 0V3h-2A4.5 4.5 0 001 7.5V8a1 1 0 00-1 1v2a1 1 0 001 1v1a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 001-1V9a1 1 0 00-1-1v-.5A4.5 4.5 0 0010.5 3h-2V1.866zM14 7.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A3.5 3.5 0 015.5 4h5A3.5 3.5 0 0114 7.5z" />
                </svg>
                <h4 className=" text-2xl mb-4 ">Chat Bot Development</h4>
                <p className="sm:text-lg text-sm mb-8 ">
                  Intelligent bots to automate tasks and streamline client
                  communication.
                </p>
                <Link
                  href="/chatbot"
                  className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black p-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  className="mb-6 text-blue-400"
                >
                  <path d="M7.05 3.5a3.519 3.519 0 000 4.97l8.49 8.48c.58.59.58 1.55 0 2.12-.59.59-1.54.59-2.13 0l-4.24-4.24 1.06-1.06-3.53-3.54-.36.36-1.41-1.42a1.02 1.02 0 00-1.43 0l-1.4 1.42c-.39.41-.39 1.02 0 1.41l1.4 1.41-.34.36L6.7 17.3l1.06-1.06L12 20.5a3.531 3.531 0 004.95 0c1.37-1.38 1.37-3.6 0-4.96L8.46 7.05c-.58-.59-.58-1.55 0-2.12.59-.59 1.54-.59 2.13 0l4.24 4.24-1.06 1.06 3.53 3.54.36-.36 1.41 1.42c.39.39 1.03.39 1.43 0l1.4-1.42c.39-.41.39-1.02 0-1.41l-1.4-1.41.34-.36L17.3 6.7l-1.06 1.06L12 3.5a3.531 3.531 0 00-4.95 0m-4.24 7.79l1.41-1.41 1.42 1.41-1.42 1.42m14.14 0l1.42-1.42 1.41 1.42-1.41 1.41z" />
                </svg>
                <h4 className="text-2xl mb-4 ">Autonomous Agents</h4>
                <p className="sm:text-lg text-sm mb-8 ">
                  Agents that integrate with your system to perform tasks
                  efficiently.
                </p>
                <Link
                  href="/chatbot"
                  className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black p-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  className="text-green-400 mb-6"
                >
                  <path d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45-.19.47-.58.84-1.06 1l-.79.25a1.687 1.687 0 01-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1-.5.15-1 .23-1.5.23-.88 0-1.76-.27-2.5-.79-.53.16-1.07.23-1.62.22-.79.01-1.57-.15-2.3-.45a4.105 4.105 0 01-2.43-3.61c-.08-.72.04-1.45.35-2.11-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7 1.6-1.5 4.05-1.66 5.83-.37.42-.11.86-.17 1.3-.17 1.36-.03 2.65.57 3.5 1.64 2.04.53 3.5 2.35 3.58 4.47.05 1.11-.25 2.2-.86 3.13.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 01-1 1h-.63c-.32.9-.88 1.69-1.62 2.29.25.09.51.14.77.21 5.13-.07 4.53-3.2 4.53-3.25a2.592 2.592 0 00-2.69-2.49 1 1 0 01-1-1 1 1 0 011-1c1.23.03 2.41.49 3.33 1.3.05-.29.08-.59.08-.89-.06-1.24-.62-2.32-2.87-2.53-1.25-2.96-4.4-1.32-4.4-.4-.03.23.21.72.25.75a1 1 0 011 1c0 .55-.45 1-1 1-.53-.02-1.03-.22-1.43-.56-.48.31-1.03.5-1.6.56-.57.05-1.04-.35-1.07-.9a.968.968 0 01.88-1.1c.16-.02.94-.14.94-.77 0-.66.25-1.29.68-1.79-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2 4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25.5.19.78.75.59 1.29-.19.52-.77.78-1.29.59-.73-.32-1.55-.34-2.3-.06-.32.27-.32.83-.32 1.27 0 .74.37 1.43 1 1.83.53.27 1.12.41 1.71.4-.15-.26-.28-.53-.39-.81a1.038 1.038 0 011.96-.68c.4 1.14 1.42 1.92 2.62 2.05 1.37-.07 2.59-.88 3.19-2.13.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3-.71.16 1 1.25.33-.11m-4.65-8.61a1 1 0 00-.91-1.03c-.71-.04-1.4.2-1.93.67-.57.58-.87 1.38-.84 2.19a1 1 0 001 1c.57 0 1-.45 1-1 0-.27.07-.54.23-.76.12-.1.27-.15.43-.15.55.03 1.02-.38 1.02-.92z" />
                </svg>
                <h4 className="text-2xl mb-4 ">Enterprise Consoluting</h4>
                <p className="sm:text-lg text-sm mb-8 ">
                  Expert strategies to help you implement and benefit from new
                  technologies.
                </p>
                <Link
                  href="/chatbot"
                  className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black p-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  className="text-purple-400 mb-6"
                >
                  <path d="M6 13H2a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1v-8a1 1 0 00-1-1zm-1 8H3v-6h2zM22 9h-4a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V10a1 1 0 00-1-1zm-1 12h-2V11h2zM14 1h-4a1 1 0 00-1 1v20a1 1 0 001 1h4a1 1 0 001-1V2a1 1 0 00-1-1zm-1 20h-2V3h2z" />
                </svg>
                <h4 className="text-2xl  mb-4">Data Analysis</h4>
                <p className="sm:text-lg text-sm  mb-8">
                  Systems to analyze and visualize data, providing insights and
                </p>
                <Link
                  href="/chatbot"
                  className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full max-w-[1500px] mx-auto py-20 sm:py-28"
          id="benifits"
        >
          <h2 className="sm:text-5xl text-4xl mb-4 px-[2rem]">
            Why Implement AI?
          </h2>
          <div className="flex sm:overflow-hidden overflow-x-scroll sm:px-[2rem] sm:gap-14 gap-0">
            <div
              className={`min-w-[22rem] flex flex-col justify-between py-10 sm:pl-0 pl-10`}
            >
              <h4 className="text-2xl">Increase Efficiency</h4>
              <p className="py-4">
                Streamline your operations and boost productivity with AI-driven
                automation.
              </p>
            </div>

            <div
              className={`min-w-[22rem] flex flex-col justify-between py-10 sm:pl-0 pl-10`}
            >
              <h4 className="text-2xl">Enhance Decision-Making</h4>
              <p className="py-4">
                Leverage data-driven insights and real-time analytics for better
                strategic decisions.
              </p>
            </div>

            <div
              className={`min-w-[22rem] flex flex-col justify-between py-10 sm:pl-0 pl-10 pr-5`}
            >
              <h4 className="text-2xl">Foster Innovation</h4>
              <p className="py-4">
                Gain a competitive edge by developing new products and services
                using AI insights.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black py-20 sm:py-52  text-white">
          <div className="px-[2rem] max-w-[1500px] mx-auto">
            <h2 className="mb-4 xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl bg-gradient-to-r from-red-300 via-blue-300 to-green-300 text-transparent bg-clip-text w-fit font-semibold">
              Learn More About With With AI
            </h2>
            <p className="mb-10 sm:w-1/2 sm:text-md  text-gray-500">
              Lorem ipsum dolor, sit amet consecteturm perspiciatis vero illo
              placeat consequatur voluptatem quaerat assumenda tenetur dolores.
              Molestiae, asperiores voluptatum.
            </p>
            <Link
              href="/chatbot"
              className=" border-white border-[1px] text-white lg:px-10 lg:py-3 px-6 py-2 text-sm border-dashed hover:bg-white hover:text-black transition-all duration-300"
            >
              Try it out
            </Link>
          </div>
        </section>

        <section className="w-full border-b-[1px] border-black sm:py-40 py-20 lg:px-[3rem] px-[1.5rem] max-w-[1500px] mx-auto">
          <h2 className="sm:text-5xl text-4xl sm:w-1/2 mb-16">
            What Makes Auxin Platforms So Powerful
          </h2>

          <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14">
            <Keypoint
              title="General & Specific Knowledge"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius vero sequi magni, dolores similique delectus."
              exploretopic="Knowledge base"
            />
            <Keypoint
              title="Fine Tuning"
              paragraph="Our Model Tuning service optimises your chatbot for precise, responsive, and accurate interactions."
              exploretopic="Fine Tuning"
            />
            <Keypoint
              title="Multi-Layered Security and Data"
              paragraph="Custom AI platforms ensure security with robust encryption, strict access controls, and continuous monitoring to protect sensitive data."
              exploretopic="Security"
            />
            <Keypoint
              title="Day One Value"
              paragraph="Our platforms are made to be used right away, not months, but days."
              exploretopic="Value"
            />
            <Keypoint
              title="Industry Leading AI"
              paragraph="Get access to the latest and greatest AI tech within your platform"
              exploretopic="Value"
            />
            <Keypoint
              title="Proprietary & Tailored Platforms"
              paragraph="We build your solution from the ground up to handle your businesses needs"
              exploretopic="Value"
            />
            <Keypoint
              title="Constant Updates"
              paragraph="We always looking for ways to better your custom AI experience "
              exploretopic="Value"
            />
            <Keypoint
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
