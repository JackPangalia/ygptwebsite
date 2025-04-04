// THIS IS THE LANDER PAGE OF THE YGPTWEBSITE (CENTONIS TECHNOLOGIES) WEBSITE.
'use client'
//* ICON COMPONENTS IMPORT * //
import dynamic from "next/dynamic";

//* OTHER COMPONENT IMPORTS *//
const Contactpanel = dynamic(() => import("./components/contactpanel"));
const Footer = dynamic(() => import("./components/Footer"));

// * PACKAGE IMPORTS * //
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// JSX FUNCTION
const Home = () => {
  return (
    <>
      {/* LANDER SCREEN */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 mb-10 mx-10 rounded-bl-3xl rounded-br-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto "
        >
          <TypeAnimation
            sequence={[
              "AI to boost your business",
              1000,
              "AI to get things done",
              1000,
              "AI designed for your clients",
              1000,
              "AI designed for you",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            preRenderFirstString={true}
            className="text-6xl md:text-7xl lg:text-7xl tracking-tight"
            repeat={Number.POSITIVE_INFINITY}
            cursor={false}
          />

          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock your business&apos;s potential with our custom AI solutions.
            Tailored to meet your unique needs.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-black/80 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative h-[90vh] mx-4 md:mx-10 rounded-3xl overflow-hidden bg-gray-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          src="/vancouverharbour.mp4"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300"
          >
            Get In Contact
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-4" id="services">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {[
              {
                title: "Consulting",
                description:
                  "Expert strategies to help you implement and benefit from new technologies.",
                link: "/enterpriseconsulting",
                keyPoints: [
                  "Custom AI strategies",
                  "Tailored automation plans",
                  "Unlock AI potential",
                  "Future-proof your business",
                ],
                LinkText: "Learn more about Consulting",
              },
              {
                title: "Chatbots",
                description:
                  "Intelligent and personalized chat bots to automate tasks to boost productivity.",
                link: "/chatbotdevelopment",
                keyPoints: [
                  "Easy Information",
                  "Smart, real-time responses",
                  "Seamless platform integration",
                  "Convert visitors into leads",
                ],
                LinkText: "Learn more about Chatbots",
              },
              {
                title: "Automations",
                description:
                  "Programs that integrate with your system, streamlining your business.",
                link: "/autonomousagents",
                keyPoints: [
                  "Automate workflows fast",
                  "AI-powered decision-making",
                  "Scale with efficiency",
                  "Lower costs, higher output",
                ],
                LinkText: "Learn more about Automations",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl  mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8">{service.description}</p>
                <div className="space-y-1 mb-8">
                  {service.keyPoints.map((keyPoint, i) => (
                    <p
                      key={i}
                      className="px-2 py-1 shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 rounded-lg w-fit text-sm"
                    >
                      {keyPoint}
                    </p>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-black  group-hover:translate-x-1 transition-transform"
                >
                  {service.LinkText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AI SLIDER */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-[1500px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl  mb-16"
          >
            Why Implement AI?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Increase Efficiency",
                description:
                  "Streamline your operations and boost productivity with AI-driven automation.",
              },
              {
                title: "Automation",
                description:
                  "Boost your company's output with efficient and reliable automation solutions.",
              },
              {
                title: "Enhance Decision-Making",
                description:
                  "Leverage data-driven insights and real-time analytics for better strategic decisions.",
              },
              {
                title: "Foster Innovation",
                description:
                  "Gain a competitive edge by always staying on the forefront of AI.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE CHAT / AI SECTION */}
      <section className="py-32 px-4 bg-white" id="about">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl mb-8">About Centonis</h2>
            <p className="text-xl leading-relaxed text-gray-600">
              At Centonis, we are dedicated to empowering businesses of all
              sizes through the transformative power of artificial intelligence.
              Our mission is to revolutionise businesses by delivering
              innovative AI solutions that enhance efficiency, drive growth, and
              unlock new opportunities.
            </p>
          </motion.div>
        </div>
      </section>
      {/* CENTONIS BENIFITS SECTION */}
      <section className="py-32 px-4" id="benefits">
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl  mb-6">
              What Makes Centonis Platforms So Powerful?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines cutting-edge technology with deep
              industry expertise to deliver unparalleled results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bespoke Consulting",
                description:
                  "Our expert consultants work closely with you to identify the most effective ways to enhance your business using AI.",
              },
              {
                title: "Comprehensive Knowledge",
                description:
                  "We combine an extensive network of AI with your own company data to create perfect responses for your use case.",
              },
              {
                title: "Fine Tuning",
                description:
                  "Our Model Tuning service optimizes your AI for precise and accurate responses.",
              },
              {
                title: "Day One Value",
                description:
                  "Our platforms are designed to deliver immediate results, hitting the ground running from day one.",
              },
              {
                title: "Industry Leading AI",
                description:
                  "Get access to the latest and greatest AI models and technology within your platform.",
              },
              {
                title: "Tailored Solutions",
                description:
                  "We build your solution from the ground up to address and handle your specific business needs.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "We're always looking for ways to enhance your custom AI experience with regular updates.",
              },
              {
                title: "Expert Development",
                description:
                  "Our software is crafted by a team of skilled developers and consultants, dedicated to delivering bespoke solutions.",
              },
              {
                title: "Seamless Integration",
                description:
                  "Our AI solutions are designed to integrate smoothly with your existing systems and workflows.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT PANEL AREA */}
      <Contactpanel />
      <Footer />
    </>
  );
};

export default Home;
