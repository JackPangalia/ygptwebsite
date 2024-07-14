"use client";

import Link from "next/link";
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";
import Footer from "./components/Footer";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section className="sm:pt-[9rem] pt-[5rem] bg-cover bg-white">
        <div className="md:mt-24 sm:mt-19 mt-4 max-w-[1500px] px-[2rem] mx-auto md:pb-56 sm:pb-40 pb-24 h-[63vh] flex justify-center items-center flex-col">
          {/* <h1 className="">
      AI to elevate your business
     </h1> */}

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "AI to elevate your business",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "AI to gets things done",
              1000,
              "AI designed for you",
              1000,
              "AI designed your life",
              1000,
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: "2em", display: "inline-block" }}
            className="lg:text-8xl md:text-7xl text-6xl text-black"
            repeat={Infinity}
            cursor={false}
          />

          {/* <Image
      src="/skybg.jpg"
      alt="chat bot img"
      height={1700}
      width={1700}
      className=" mt-32 max-h-[1000px] object-cover w-full "
     /> */}
        </div>
        <h2 className="lg:text-xl text-sm md:w-1/2 px-[2rem] text-center text-zinc-900 tracking-wide mx-auto w-fit">
          Unlock your business's potential with our custom AI solutions.
          Tailored to meet your unique needs.
        </h2>
      </section>

      <section className="bg-cover h-screen md:m-10 m-4 rounded-xl flex justify-center items-center ">
        <video
          playsInline
          autoPlay
          loop
          muted
          src="./fastdrone1.mp4"
          className="h-full w-full object-cover rounded-xl"
        />

        <>
          <Link
            href="/contact"
            className="lg:text-xl text-md w-fit text-center text-zinc-100 tracking-wide rounded absolute flex justify-center items-center gap-2 bg-zinc-900 p-2 bg-opacity-20 hover:bg-opacity-60 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            Request a demo
          </Link>
          {/* <button className = 'absolute mt-20'>Request a demo</button> */}
        </>
      </section>

      <section className="bg-white md:py-32 py-20 text-black">
        <div className="px-[2rem] max-w-[1500px] mx-auto">
          <h2 className="sm:text-5xl text-4xl px-[2rem]" id="services">
            Our Services
          </h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-16 px-[2rem]">
            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black py-8 pr-8">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.7em"
                width="1.7em"
                className="mb-5"
              >
                <path d="M3.299 17.596c.432 1.332 1.745 2.182 3.146 2.182H6.5A2.78 2.78 0 009.223 22c.457 0 .884-.115 1.262-.313a.992.992 0 00.515-.882V3.027a.997.997 0 00-.785-.983 2.324 2.324 0 00-1.479.201c-.744.356-1.18 1.151-1.18 1.978v.055a2.778 2.778 0 00-2.744 4.433A3.327 3.327 0 002 12c0 1.178.611 2.211 1.533 2.812-.43.771-.571 1.746-.234 2.784zm15.889-8.885a2.778 2.778 0 00-2.744-4.433v-.055c0-.826-.437-1.622-1.181-1.978a2.32 2.32 0 00-1.478-.201.998.998 0 00-.785.983v17.777c0 .365.192.712.516.882.378.199.804.314 1.261.314a2.78 2.78 0 002.723-2.223h.056c1.4 0 2.714-.85 3.146-2.182.337-1.038.196-2.013-.234-2.784A3.35 3.35 0 0022 12a3.327 3.327 0 00-2.812-3.289z" />
              </svg>
              <h4 className="text-2xl mb-4 ">Enterprise Consulting</h4>
              <p className="sm:text-lg text-sm mb-8 ">
                Expert strategies to help you implement and benefit from new
                technologies.
              </p>
              <Link
                href={{
                  pathname: "/enterpriseconsulting",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200 rounded"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black py-8 pr-8">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.7em"
                width="1.7em"
                className="mb-5 text-red-400"
              >
                <path d="M872 808H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-720-94h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-498h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-166h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm166 166h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm222-72h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388-404h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388 426h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388-404h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z" />
              </svg>
              <h4 className=" text-2xl mb-4 ">Chatbot Development</h4>
              <p className="sm:text-lg text-sm mb-8 ">
                Intelligent and personalized chat bots to automate tasked to
                boost productivity.
              </p>
              <Link
                href={{
                  pathname: "/chatbotdevelopment",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200 rounded"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black py-8 pr-8">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.7em"
                width="1.7em"
                className="mb-5 text-blue-400"
              >
                <path d="M7.05 3.5a3.519 3.519 0 000 4.97l8.49 8.48c.58.59.58 1.55 0 2.12-.59.59-1.54.59-2.13 0l-4.24-4.24 1.06-1.06-3.53-3.54-.36.36-1.41-1.42a1.02 1.02 0 00-1.43 0l-1.4 1.42c-.39.41-.39 1.02 0 1.41l1.4 1.41-.34.36L6.7 17.3l1.06-1.06L12 20.5a3.531 3.531 0 004.95 0c1.37-1.38 1.37-3.6 0-4.96L8.46 7.05c-.58-.59-.58-1.55 0-2.12.59-.59 1.54-.59 2.13 0l4.24 4.24-1.06 1.06 3.53 3.54.36-.36 1.41 1.42c.39.39 1.03.39 1.43 0l1.4-1.42c.39-.41.39-1.02 0-1.41l-1.4-1.41.34-.36L17.3 6.7l-1.06 1.06L12 3.5a3.531 3.531 0 00-4.95 0m-4.24 7.79l1.41-1.41 1.42 1.41-1.42 1.42m14.14 0l1.42-1.42 1.41 1.42-1.41 1.41z" />
              </svg>
              <h4 className="text-2xl mb-4 ">Autonomous Agents</h4>
              <p className="sm:text-lg text-sm mb-8 ">
                Programs that integrate with your system, streamlining your
                business.
              </p>
              <Link
                href={{
                  pathname: "/autonomousagents",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200 rounded"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white lg:min-h-[22rem] min-h-[14rem] text-black py-8 pr-8">
              <svg
                viewBox="0 0 64 64"
                fill="currentColor"
                height="1.7em"
                width="1.7em"
                className="mb-5 text-purple-400"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M54.999 36.001C55 50.913 42.912 63 28 62.999 13.087 63 1 50.912 1.001 36 1 21.088 13.088 9 28 9.001V36l26.999.001z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M63 28C63.001 13.087 50.914.998 36.001 1v27H63z"
                />
              </svg>

              <h4 className="text-2xl mb-4">Data Analysis</h4>
              <p className="sm:text-lg text-sm mb-8">
                Systems to analyze and visualize data, providing new useful
                insights.
              </p>
              <Link
                href={{
                  pathname: "/dataanalysis",
                }}
                className="sm:text-lg sm:px-4 sm:py-2 px-2 py-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border-[1px] border-black transition-all duration-200 rounded"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1500px] mx-auto py-20 sm:py-28 lg:px-[3rem] px-[1.5rem]">
        <h2 className="sm:text-5xl text-4xl mb-4 px-[2rem]">
          Why Implement AI?
        </h2>
        <div className="flex md:grid sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-14 sm:overflow-x-clip overflow-x-scroll sm:px-[2rem] ">
          <div
            className={`min-w-[20rem] flex flex-col justify-between py-10 sm:pl-0 pl-10`}
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
            <h4 className="text-2xl">Automation</h4>
            <p className="py-4">
              Boost your company&apos;s output with efficient and reliable
              automation solutions.
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
              Gain a competitive edge by always staying on the forefront of AI.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 sm:py-52 text-white">
        <div className="px-[2rem] max-w-[1500px] mx-auto">
          <h2 className="w-[60%] xl:text-7xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl mb-10">
            Learn More About Us With AI
          </h2>

          <p className="mb-16 sm:w-1/2 sm:text-xl md:text-lg text-gray-500">
            Explore the potential of AI and find the best solutions for your
            business through the innovative Centonis website chatbot. Discover
            how our technology can transform your operations and enhance
            customer experiences.
          </p>
          <Link
            href="/ai"
            className=" border-white border-[1px] text-white lg:px-10 lg:py-3 px-6 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300 "
          >
            Try it out
          </Link>
        </div>
      </section>

      <section
        className="w-full sm:py-40 py-20 lg:px-[3rem] px-[1.5rem] max-w-[1500px] mx-auto"
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

      <section className="bg-zinc-100 py-32 sm:py-40 sm:mb-20 mb-10">
        <div className="px-[2rem] max-w-[1500px] mx-auto">
          <h2 className="w-[80%]">
            <span className="xl:text-7xl lg:text-7xl md:text-7xl sm:text-6xl text-5xl text-zinc-600">
              We are more than a business we are a{" "}
            </span>
            <span className=" xl:text-7xl lg:text-7xl md:text-7xl sm:text-6xl text-5xl">
              partnership
            </span>
          </h2>

          <p className="sm:w-[60%] sm:text-xl md:text-lg text-gray-500 mt-10">
            At Centonis, we deliver AI software solutions while building strong,
            personal connections with our clients. By understanding your unique
            needs, we provide tailored solutions that drive success and
            sustainable growth. Together, we turn potential into performance.
          </p>
        </div>
      </section>

      <Contactpanel />

      <Footer />
    </>
  );
};

export default Home;
