"use client";
import Keypoint from "../components/Keypoint";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ChatbotClient = () => {

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image - Static */}
        <div className="absolute inset-0">
          <Image
            src="/aichatbotanimated.webp"
            alt="AI Chatbot background"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Geometric Overlays - Chatbot Theme */}
        {/* Top Right Hexagonal Pattern - Smaller on desktop */}
        <div className="absolute top-0 right-0 w-1/5 sm:w-1/4 lg:w-1/5 h-1/5 sm:h-1/4 lg:h-1/5 z-10">
          <div className="relative h-full">
            <div
              className="absolute top-0 right-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
              }}
            />
          </div>
        </div>

        {/* Bottom Left Curved Shape - Smaller on desktop */}
        <div className="absolute bottom-0 left-0 w-1/4 sm:w-1/3 lg:w-1/4 h-1/6 sm:h-1/5 lg:h-1/6 z-10">
          <div className="relative h-full">
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-white"
              style={{
                clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
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
                Intelligent
                <br />
                <span className="text-white">Chatbot Development</span>
              </h1>
              
              {/* Subheading */}
              <motion.p 
                className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We specialize in building intelligent bots that significantly enhance daily efficiency 
                and streamline your workflows with cutting-edge AI technology.
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
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">CHATBOT DEVELOPMENT</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-16">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black max-w-4xl">
                Transform customer
                interactions with
                intelligent automation
                and AI-powered solutions.
              </h2>

              {/* DESCRIPTIONS - POSITIONED BELOW */}
              <div className="flex justify-end">
                <div className="max-w-lg space-y-8">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our tailored solutions automate key communication tasks, ensuring 
                    seamless and effective interactions with both existing and potential clients.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Let our intelligent bots handle the heavy lifting, making routine 
                    tasks easier to manage while delivering exceptional user experiences.
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
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">KEY FEATURES</span>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-20">
              {/* MAIN HEADING */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black max-w-4xl">
                What makes our
                chatbot solutions
                so powerful and
                uniquely effective.
              </h2>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Latest AI Models",
                    description: "We leverage cutting-edge AI models, such as GPT-4o, to ensure you receive the most advanced and up-to-date AI responses available in the industry.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: "Personalized",
                    description: "Our chatbots are meticulously customised to align with your specific use case requirements, ensuring they seamlessly integrate into your operational framework.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Expansive Knowledge",
                    description: "We have the capability to seamlessly integrate even the most complex and intricate data sets into our chatbot systems for diverse use cases.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )
                  },
                  {
                    title: "Lightning Fast",
                    description: "We refine our chatbots for peak speed performance, ensuring swift and efficient output with unmatched responsiveness and seamless interactions.",
                    icon: (
                      <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
              your customer
              experience?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Let&apos;s build an intelligent chatbot that enhances your business operations 
              and delivers exceptional customer interactions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChatbotClient;
