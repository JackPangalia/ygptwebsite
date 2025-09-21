"use client";
import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ConsultingClient = () => {

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image - Static */}
        <div className="absolute inset-0">
          <Image
            src="/Vancouver_Cruise_Terminal.webp"
            alt="Vancouver Cruise Terminal background"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Geometric Overlays - Consulting Theme */}
        {/* Top Left Angular Pattern - Smaller on desktop */}
        <div className="absolute top-0 left-0 w-1/4 sm:w-1/3 lg:w-1/4 h-1/5 sm:h-1/4 lg:h-1/5 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>

        {/* Bottom Right Curved Shape - Smaller on desktop */}
        <div className="absolute bottom-0 right-0 w-1/5 sm:w-1/4 lg:w-1/5 h-1/6 sm:h-1/5 lg:h-1/6 z-10">
          <div className="relative h-full">
            <div
              className="absolute bottom-0 right-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>


        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Main Heading */}
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 font-bold leading-tight drop-shadow-2xl">
                Enterprise
                <br />
                <span className="text-white">AI Consulting</span>
              </h1>
              
              {/* Subheading */}
              <motion.p 
                className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Leverage our expertise to devise and implement effective strategies 
                for integrating groundbreaking AI technology into your business operations.
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
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">ENTERPRISE CONSULTING</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-16">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black max-w-4xl">
                Transform your business
                with strategic AI
                implementation and
                expert guidance.
              </h2>

              {/* DESCRIPTIONS - POSITIONED BELOW */}
              <div className="flex justify-end">
                <div className="max-w-lg space-y-8">
                  <p className="text-lg leading-relaxed text-gray-700">
                    We closely align with your business goals, ensuring streamlined 
                    implementation and maximizing benefits from AI integration.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Partner with us for improved efficiency, productivity, and overall 
                    business performance, from planning to ongoing support.
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
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">KEY BENEFITS</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-20">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black max-w-4xl">
                What makes our
                consulting approach
                so effective and
                results-driven.
              </h2>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Competitive Advantage",
                    description: "Implementing advanced AI with our consultants gives your business a competitive edge. Stay ahead with innovative solutions, delivering superior value and enhanced experiences.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Cost Savings & ROI",
                    description: "AI consulting drives cost savings by streamlining operations, reducing errors, and optimizing resource allocation. Strategic AI implementation enhances ROI and drives revenue growth.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    )
                  },
                  {
                    title: "Innovation & Growth",
                    description: "We foster innovation by identifying market opportunities and enabling cutting-edge product development. Integrating AI drives innovation and ensures sustainable growth.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    title: "Risk Management",
                    description: "AI enhances risk management by identifying threats and ensuring compliance. Predictive analytics and automated monitoring systems maintain a secure business environment.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              Ready to transform
              your business with
              strategic AI?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Let&apos;s develop a comprehensive AI strategy that drives growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Start Your AI Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ConsultingClient;
