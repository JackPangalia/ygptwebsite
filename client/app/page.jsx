// THIS IS THE LANDER PAGE OF THE CENTONIS AI WEBSITE.
"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded" />
});

const Home = () => {
  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const words = ["Scaling", "human", "potential", "through", "intelligent", "software."];

  return (
    <>
      {/* HERO SECTION - Split layout with video and animated text */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* Video section - Right side peek on desktop */}
        <div className="absolute inset-0 lg:left-1/2 w-full lg:w-1/2 h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/vancouverharbour.webm" type="video/webm" />
            <source src="/vancouverharbour.mp4" type="video/mp4" />
          </video>
          {/* Gradient mask for video edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/60" />
        </div>

        {/* Floating geometric accents */}
        <motion.div 
          className="absolute top-1/3 left-8 w-px h-24 bg-gradient-to-b from-white/30 via-white/10 to-transparent z-10"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-16 w-12 h-px bg-gradient-to-r from-white/20 to-transparent z-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
        
        {/* Main Content - Left aligned */}
        <div className="relative z-[2] flex flex-col justify-center min-h-screen w-full pt-28 pb-20">
          <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 lg:px-16">
            <div className="max-w-4xl">
            {/* Staggered word animation headline */}
            <motion.h1 
              className="font-headline font-semibold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.3] tracking-tight pb-4 overflow-visible"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-white/40 text-lg sm:text-xl md:text-2xl mt-12 sm:mt-16 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              A venture studio based in Vancouver.
            </motion.p>

            {/* CTA row */}
            <motion.div 
              className="mt-12 sm:mt-16 flex items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <a 
                href="#focus" 
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm uppercase tracking-widest">Learn more</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom line accent */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          style={{ transformOrigin: 'left' }}
        />
      </section>

      {/* THE FOCUS SECTION */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white" id="focus">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* MAIN HEADING */}
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] tracking-tight text-black max-w-5xl">
              We build high-performance software.
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-start lg:justify-end">
              <p className="text-xl sm:text-2xl leading-relaxed text-gray-500 max-w-xl">
                Centonis AI Inc. is a venture studio and holding company. We identify industries where inefficiencies create bottlenecks and build software solutions to solve them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION - Split Layout with Visual Accents */}
      <section className="py-24 sm:py-32 lg:py-40 bg-black overflow-hidden" id="philosophy">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* Section Label */}
          <motion.div 
            className="flex items-center mb-16 sm:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-white/20 mr-4" />
            <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Philosophy</span>
          </motion.div>

          {/* Split Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left Side - Principles List */}
            <div className="lg:col-span-7 space-y-0">
              {[
                {
                  number: "01",
                  headline: "Utility First",
                  subtext: "If a tool doesn't save time or generate revenue within the first 10 minutes, we don't build it."
                },
                {
                  number: "02",
                  headline: "The 80/20 of AI",
                  subtext: "We don't use AI for the sake of the trend. We use it where it actually moves the needle for the end-user."
                },
                {
                  number: "03",
                  headline: "Ultra-functional design",
                  subtext: "No BS. No fluff. Every pixel serves a purpose. Clean, purposeful, and built for function over form."
                },
                {
                  number: "04",
                  headline: "ROI from day one",
                  subtext: "Every feature, every decision, every line of code must deliver measurable value. We build for impact, not vanity metrics."
                }
              ].map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group border-t border-white/10 first:border-t-0"
                >
                  <div className="py-10 sm:py-12 lg:py-14">
                    <div className="space-y-3">
                      <h3 className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.15] tracking-tight text-white group-hover:text-white/80 transition-colors duration-300">
                        {principle.headline}
                      </h3>
                      <p className="text-base sm:text-lg text-white/40 leading-relaxed">
                        {principle.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Large Visual Numbers */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-between items-end py-8">
              {["01", "02", "03", "04"].map((num, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                  className="text-[8rem] xl:text-[10rem] font-bold leading-none text-white/[0.03] select-none"
                >
                  {num}
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* VENTURE SECTION */}
      <section className="py-24 sm:py-32 lg:py-40 bg-gray-50" id="ventures">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* MAIN HEADING */}
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] tracking-tight text-black">
              Primary Venture
            </h2>

            {/* Realtysnap */}
            <motion.a
              href="https://realtysnap.ca"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="group block mt-16 sm:mt-20 lg:mt-24"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 pb-8 border-b-2 border-gray-200 group-hover:border-black transition-colors duration-500">
                <div className="space-y-4">
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Real Estate Intelligence</span>
                  <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black group-hover:text-gray-600 transition-colors duration-300">
                    Realtysnap
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-lg sm:text-xl text-gray-500 max-w-md">
                    A lead intelligence platform that streamlines scoring and follow-up for realtors.
                  </p>
                  <div className="w-12 h-12 rounded-full border border-gray-300 group-hover:border-black group-hover:bg-black flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
