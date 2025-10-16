// THIS IS THE LANDER PAGE OF THE YGPTWEBSITE (CENTONIS TECHNOLOGIES) WEBSITE.
"use client";
//* ICON COMPONENTS IMPORT * //
import dynamic from "next/dynamic";

//* OTHER COMPONENT IMPORTS *//
const Contactpanel = dynamic(() => import("./components/contactpanel"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded" />
});
const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

// * PACKAGE IMPORTS * //
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "./hooks/useScroll";

// JSX FUNCTION
const Home = () => {
  const scrollY = useScroll();

  return (
    <>W
      {/* LANDER SCREEN */}
      <section className="relative h-[91vh] w-full overflow-hidden">
        {/* White Top Border - matches navbar height */}
        <div className="absolute top-0 left-0 w-full h-10 bg-white z-30"></div>
        
        {/* Background Video with Parallax Effect */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/vancouverharbour.webm" type="video/webm" />
          <source src="/vancouverharbour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-5" />
        
        {/* Text Background Overlay for Better Contrast */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

        {/* OPTION 2: Angled Top Bar (commented out - uncomment to try) */}
        {/* <div className="absolute top-0 left-0 w-full h-1/3 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }}
            />
          </div>
        </div> */}

        {/* OPTION 3: Multiple Overlapping Shapes (commented out - uncomment to try) */}
        {/* <div className="absolute top-0 right-0 w-2/3 h-1/2 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 right-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
              }}
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-1/3 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white/80"
              style={{
                clipPath: "polygon(0 0, 80% 0, 60% 100%, 0% 100%)",
              }}
            />
          </div>
        </div> */}

        {/* OPTION 4: Large Hexagonal Pattern (commented out - uncomment to try) */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>
        </div> */}

        {/* OPTION 5: Curved Top Section (commented out - uncomment to try) */}
        {/* <div className="absolute top-0 left-0 w-full h-2/5 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 80% 100%, 20% 100%, 0% 70%)",
              }}
            />
          </div>
        </div> */}


        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Main Heading */}
              <div className="text-center space-y-4 sm:space-y-6">
                {/* Main Headline */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-normal text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl leading-tight"
                >
                  That Actually Works
                </motion.h1>
                
                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a 
                    href="#services"
                    className="bg-white text-black px-6 py-3 rounded-none font-normal hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg text-sm w-full sm:w-auto text-center"
                  >
                    Get Started
                  </a>
                  <a 
                    href="#about"
                    className="border-2 border-white text-white px-6 py-3 rounded-none font-normal hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm w-full sm:w-auto text-center"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
              
              {/* Subheading */}
              {/* <motion.p 
                className="text-white/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We help businesses automate processes, enhance decision-making, 
                and unlock new opportunities through cutting-edge AI technology.
              </motion.p> */}
              
              {/* CTA Buttons */}
              {/* <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <a 
                  href="#services"
                  className="bg-white text-black px-8 py-4 rounded-none font-normal hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Started
                </a>
                <a 
                  href="#about"
                  className="border-2 border-white text-white px-8 py-4 rounded-none font-normal hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </motion.div> */}
            </motion.div>
          </div>
        </div>

        {/* White Bottom Border - matches navbar height */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-white z-30"></div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 bg-white" id="about">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* INTRO SECTION */}
            <div className="flex items-center mb-16">
              <div className="w-6 h-6 mr-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">INTRO</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-16">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-black max-w-4xl">
                We help businesses
                transform through
                intelligent automation
                and AI solutions.
              </h2>

              {/* DESCRIPTIONS - POSITIONED BELOW */}
              <div className="flex justify-end">
                <div className="max-w-lg space-y-8">
                  <p className="text-lg leading-relaxed text-gray-700">
                    No complex implementations or empty promises,
                    but practical support in making strategic decisions
                    in an era of rapid technological change.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We are a solution-focused team. We help you map out
                    what needs to change, why, and when. And we ensure
                    that change is not only strategic, but also
                    implementable and sustainable.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative h-screen flex justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/fast.jpg')"
          }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* White Geometric Shape - Top Right */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 right-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 40% 100%)",
              }}
            />
          </div>
        </div>

        {/* White Geometric Shape - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 z-10">
          <div className="relative h-full">
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0% 0%, 60% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-white text-center">
            Accelerating Businesses With AI
          </h2>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 bg-white" id="services">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* INTRO SECTION */}
            <div className="flex items-center mb-16">
              <div className="w-6 h-6 mr-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">SERVICES</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-20">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-black max-w-4xl">
                Three core services
                that transform your
                business through
                intelligent automation.
              </h2>

              {/* SERVICES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "AI Consulting",
                    description: "Expert strategies to help you implement and benefit from new technologies. We work closely with you to identify the most effective ways to enhance your business using AI.",
                    link: "/enterpriseconsulting",
                    linkText: "Explore Consulting"
                  },
                  {
                    title: "Intelligent Chatbots", 
                    description: "Smart, personalized chatbots that automate tasks and boost productivity. Seamless platform integration that converts visitors into leads.",
                    link: "/chatbotdevelopment",
                    linkText: "Learn about Chatbots"
                  },
                  {
                    title: "Process Automation",
                    description: "Advanced automation programs that integrate with your systems, streamlining workflows and scaling efficiency across your organization.",
                    link: "/autonomousagents", 
                    linkText: "Discover Automation"
                  }
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="group"
                  >
                    <Link
                      href={service.link}
                      className="block h-full"
                    >
                      <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full hover:border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        <div className="space-y-6">
                          <h3 className="text-2xl font-medium text-black group-hover:text-gray-700 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-lg leading-relaxed text-gray-700">
                            {service.description}
                          </p>
                          <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform duration-300">
                            {service.linkText}
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* CENTONIS BENEFITS SECTION */}
      <section className="py-32 bg-white" id="benefits">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* INTRO SECTION */}
            <div className="flex items-center mb-16">
              <div className="w-6 h-6 mr-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">BENEFITS</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-20">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-black max-w-4xl">
                What makes our
                platforms so powerful
                and uniquely effective
                for your business.
              </h2>

              {/* BENEFITS TIMELINE */}
              <div className="relative">
                {/* CONNECTING LINE */}
                <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      title: "Bespoke Consulting",
                      description: "Our expert consultants work closely with you to identify the most effective ways to enhance your business using AI.",
                      number: "01"
                    },
                    {
                      title: "Comprehensive Knowledge",
                      description: "We combine an extensive network of AI with your own company data to create perfect responses for your use case.",
                      number: "02"
                    },
                    {
                      title: "Fine Tuning",
                      description: "Our Model Tuning service optimizes your AI for precise and accurate responses.",
                      number: "03"
                    },
                    {
                      title: "Day One Value",
                      description: "Our platforms are designed to deliver immediate results, hitting the ground running from day one.",
                      number: "04"
                    },
                    {
                      title: "Industry Leading AI",
                      description: "Get access to the latest and greatest AI models and technology within your platform.",
                      number: "05"
                    },
                    {
                      title: "Tailored Solutions",
                      description: "We build your solution from the ground up to address and handle your specific business needs.",
                      number: "06"
                    },
                    {
                      title: "Continuous Improvement",
                      description: "We're always looking for ways to enhance your custom AI experience with regular updates.",
                      number: "07"
                    },
                    {
                      title: "Expert Development",
                      description: "Our software is crafted by a team of skilled developers and consultants, dedicated to delivering bespoke solutions.",
                      number: "08"
                    },
                    {
                      title: "Seamless Integration",
                      description: "Our AI solutions are designed to integrate smoothly with your existing systems and workflows.",
                      number: "09"
                    }
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex items-start gap-8"
                    >
                      {/* NUMBER CIRCLE */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-20 h-20 bg-black text-white rounded-none flex items-center justify-center text-xl font-medium">
                          {benefit.number}
                        </div>
                      </div>
                      
                      {/* CONTENT */}
                      <div className="flex-1 pt-2">
                        <h3 className="text-2xl font-medium text-black mb-4">
                          {benefit.title}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER & CONTACT PANEL AREA */}
      {/* <Contactpanel /> */}
      <Footer />
    </>
  );
};

export default Home;
