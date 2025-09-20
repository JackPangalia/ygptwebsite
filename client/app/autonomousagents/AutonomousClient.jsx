"use client";
import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";

const AutonomousClient = () => {
  const scrollY = useScroll();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            height: '120%',
            top: '-10%'
          }}
        >
          <Image
            src="/canadaplace.webp"
            alt="Canada Place background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Geometric Overlays - Automation Theme */}
        {/* Top Right Triangular Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 right-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              }}
            />
          </div>
        </div>

        {/* Bottom Left Hexagonal Shape */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 z-10">
          <div className="relative h-full">
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>


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
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 font-bold leading-tight drop-shadow-2xl">
                Autonomous
                <br />
                <span className="text-white">Agent Development</span>
              </h1>
              
              {/* Subheading */}
              <motion.p 
                className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We develop intelligent agents that seamlessly integrate with your existing 
                systems and perform tasks autonomously, enhancing workflow efficiency.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-30">
          <div className="text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4 drop-shadow-lg">Scroll down</div>
          <div className="w-px h-8 sm:h-12 bg-white/80 mx-auto animate-pulse drop-shadow-lg" />
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-32 bg-white">
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
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">AUTONOMOUS AGENTS</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-16">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black max-w-4xl">
                Automate complex tasks
                with intelligent agents
                that work around the
                clock for your business.
              </h2>

              {/* DESCRIPTIONS - POSITIONED BELOW */}
              <div className="flex justify-end">
                <div className="max-w-lg space-y-8">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our autonomous agents execute tasks swiftly and accurately without 
                    human intervention, significantly reducing time and effort required.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Operating continuously without breaks, they enhance cost-effectiveness 
                    and deliver consistent, reliable results for your business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 bg-gray-50">
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
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">KEY CAPABILITIES</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-20">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black max-w-4xl">
                What makes our
                autonomous agents
                so powerful and
                business-transforming.
              </h2>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Enhanced Efficiency",
                    description: "Our autonomous agents execute tasks swiftly and accurately without human intervention, significantly reducing the time and effort required for routine and repetitive tasks.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    title: "Cost Optimization",
                    description: "By automating processes, our autonomous agents help lower labour costs and minimise errors, which can otherwise lead to expensive corrections or inefficiencies.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    )
                  },
                  {
                    title: "Consistency & Reliability",
                    description: "Autonomous agents ensure tasks are performed with consistent precision, adhering to predefined protocols and standards, reducing variability and enhancing quality.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Scalability & Flexibility",
                    description: "Our autonomous agents can effortlessly scale to manage increased workloads and are adaptable, capable of being reprogrammed to perform a variety of tasks.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="group"
                  >
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full hover:border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className="space-y-6">
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8">
              Ready to automate
              your business
              processes?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Let&apos;s build intelligent autonomous agents that work 24/7 
              to enhance your productivity and drive business growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Automate Your Workflow
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AutonomousClient;
