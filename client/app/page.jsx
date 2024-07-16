// THIS IS THE LANDER PAGE OF THE YGPTWEBSITE (CENTONIS TECHNOLOGIES) WEBSITE.
"use client";

//* ICON COMPONENTS IMPORT * //
import IconArrowUpRight from "@/app/components/icons/IconArrowUpRight";
import IconBrain from "./components/icons/IconBrain";
import IconBorderBottom from "./components/icons/IconBorderBotton";
import IconCurvedConnector from "./components/icons/IconCurvedConnector";
import IconPieChart from "./components/icons/IconPieChart";

//* OTHER COMPONENT IMPORTS *//
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";
import Footer from "./components/Footer";
import ExploreCard from "./components/ExploreCard";
import SliderKeyPoint from "./components/SliderKeyPoint";

// * PACKAGE IMPORTS * //
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

// JSX FUNCTION
const Home = () => {
  return (
    <>
      {/* LANDER SCREEN */}
      <section className="sm:pt-[9rem] pt-[5rem] bg-cover bg-white">
        <div className="md:mt-24 sm:mt-19 mt-4 max-w-[1500px] px-[2rem] mx-auto md:pb-56 sm:pb-40 pb-24 h-[60vh] flex justify-center items-center flex-col">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "AI to elevate your business",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "AI to get things done",
              1000,
              "AI designed for you",
              1000,
              "AI designed your life",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="lg:text-8xl md:text-7xl text-6xl text-black text-center"
            repeat={Infinity}
            cursor={false}
          />
        </div>
        <h2 className="lg:text-xl text-sm md:w-1/2 px-[2rem] text-center text-zinc-900 tracking-wide mx-auto w-fit">
          Unlock your business&apos;s potential with our custom AI solutions.
          Tailored to meet your unique needs.
        </h2>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-cover h-screen md:m-10 m-4 rounded-xl flex justify-center items-center ">
        <video
          playsInline
          autoPlay
          loop
          muted
          src="/fastdrone1.mp4"
          className="h-full w-full object-cover rounded-xl"
        />

        <>
          <Link
            href="/contact"
            className="lg:text-xl text-md w-fit text-center text-zinc-100 tracking-wide rounded absolute flex justify-center items-center gap-2 bg-zinc-900 p-2 bg-opacity-20 hover:bg-opacity-60 transition-all duration-200"
          >
            <IconArrowUpRight />
            Request a demo
          </Link>
        </>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white md:py-32 py-20 text-black">
        <div className="px-[2rem] max-w-[1500px] mx-auto">
          <h2 className="sm:text-5xl text-4xl " id="services">
            Our Services
          </h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-16 ">
            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black p-8 shadow-lg rounded-lg border-zinc-200 border-[1px]">
              <IconBrain className="h-[1.5rem] w-[1.5rem] mb-5 " />
              <h4 className="text-2xl mb-4 ">Enterprise Consulting</h4>
              <p className="sm:text-lg text-sm mb-8 ">
                Expert strategies to help you implement and benefit from new
                technologies.
              </p>
              <Link
                href={{
                  pathname: "/enterpriseconsulting",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black p-8 shadow-lg rounded-lg border-zinc-200 border-[1px]">
              <IconBorderBottom className="mb-5 text-red-400 size-[1.7rem]" />
              <h4 className=" text-2xl mb-4 ">Chatbot Development</h4>
              <p className="sm:text-lg text-sm mb-8 ">
                Intelligent and personalized chat bots to automate tasked to
                boost productivity.
              </p>
              <Link
                href={{
                  pathname: "/chatbotdevelopment",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black  p-8 shadow-lg rounded-lg border-zinc-200 border-[1px]">
              <IconCurvedConnector className="mb-5 text-blue-400 size-[1.5rem]" />

              <h4 className="text-2xl mb-4 ">Autonomous Agents</h4>
              <p className="sm:text-lg text-sm mb-8 ">
                Programs that integrate with your system, streamlining your
                business.
              </p>
              <Link
                href={{
                  pathname: "/autonomousagents",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black  p-8 shadow-lg rounded-lg border-zinc-200 border-[1px]">
              <IconPieChart className="mb-5 text-purple-400 size-[1.7rem]" />
              <h4 className="text-2xl mb-4">Data Analysis</h4>
              <p className="sm:text-lg text-sm mb-8">
                Systems to analyze and visualize data, providing new useful
                insights.
              </p>
              <Link
                href={{
                  pathname: "/dataanalysis",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* WHY AI SLIDER */}
      <section className="w-full max-w-[1500px] mx-auto py-20 sm:py-10">
        <h2 className="sm:text-5xl text-4xl mb-4 px-[2rem]">
          Why Implement AI?
        </h2>
        <div className="flex md:grid sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14 sm:overflow-x-clip overflow-x-scroll sm:px-[2rem] px-10">
          <SliderKeyPoint
            title="Increase Efficiency"
            paragraph="Streamline your operations and boost productivity with AI-driven automation."
          />

          <SliderKeyPoint
            title="Automation"
            paragraph="Boost your company's output with efficient and reliable automation solutions."
          />

          <SliderKeyPoint
            title="Enhance Decision-Making"
            paragraph="Leverage data-driven insights and real-time analytics for better strategic decisions."
          />

          <SliderKeyPoint
            title="Foster Innovation"
            paragraph="Gain a competitive edge by always staying on the forefront of AI."
          />
        </div>
      </section>

      {/* EXPLORE CHAT / AI SECTION */}
      <section className="bg-white py-2 m-4 md:m-10 rounded-xl pt-6">
        <div className=" md:px-8 lg:px-16 max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <ExploreCard
            title="Chat"
            paragraph="Gain an insight of how AI can enhance your business using theinnovative Centonis website chatbot"
            link="/ai"
            imagePath="/orangemetalicgel.jpg"
            imageHeight="auto"
          />
          <ExploreCard
            title="About"
            paragraph="Learn about Centonis and the many ways we can propel your business"
            link="/about"
            imagePath="/metalicraindrops.jpg"
            imageHeight="auto"
          />
        </div>
      </section>

      {/* CENTONIS BENIFITS SECTION */}
      <section
        className="w-full sm:py-32 py-20 lg:px-[3rem] px-[1.5rem] max-w-[1500px] mx-auto "
        id="benifits"
      >
        <h2 className="sm:text-5xl text-4xl sm:w-1/2 mb-16">
          What Makes Centonis Platforms So Powerful?
        </h2>

        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14">
          <Keypoint
            title="Bespoke Consulting"
            paragraph="Before development begins, our expert consultants work closely with you to identify the most effective ways to enhance your business using AI."
          />
          <Keypoint
            title="General & Specific Knowledge"
            paragraph="We combine an extensive network of AI with your own company data in order to create a perfect response for what your use case is."
            exploretopic="Knowledge base"
          />

          <Keypoint
            title="Fine Tuning"
            paragraph="Our Model Tuning service optimizes your AI for precise, and accurate responses."
            exploretopic="Fine Tuning"
          />

          <Keypoint
            title="Day One Value"
            paragraph="Our platforms are made to hit the ground running straight from the go."
            exploretopic="Value"
          />
          <Keypoint
            title="Industry Leading AI"
            paragraph="Get access to the latest and greatest AI models and technology within your platform."
            exploretopic="Value"
          />
          <Keypoint
            title="Proprietary & Tailored Platforms"
            paragraph="We build your solution from the ground up to adjust and handle your business's needs."
            exploretopic="Value"
          />
          <Keypoint
            title="Constant Updates"
            paragraph="We always looking for ways to enhance your custom AI experience."
            exploretopic="Value"
          />
          <Keypoint
            title="Expert built"
            paragraph="Our software is crafted by a team of skilled developers and consultants, dedicated to delivering bespoke solutions tailored to your specific needs."
          />
        </div>
      </section>

      {/* FOOTER & CONTACT PANEL AREA */}
      <Contactpanel />
      <Footer />
    </>
  );
};

export default Home;