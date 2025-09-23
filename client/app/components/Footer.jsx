'use client'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-black">

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16"
        >
          {/* Company Info Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Logo and Company Name */}
              <div className="flex items-center mb-6">
                <Image 
                  src="/centonislogo.png" 
                  alt="Centonis Technologies Logo" 
                  width={80}
                  height={80}
                  className="w-20 object-contain"
                  priority
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Centonis
                  </h3>
           
                  <span className = 'text-sm'>AI technologies</span>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-md">
                Transforming businesses through intelligent automation 
                and cutting-edge AI solutions.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                  height="1.2em"
                  width="1.2em"
                  className="text-gray-600"
                >
                  <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                </svg>
                <span className="text-lg text-gray-700">Vancouver, BC</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg text-gray-700">centonisai@gmail.com</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-6">
                Navigation
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Benefits", href: "#benefits" },
                  { name: "Contact", href: "/contact" }
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-lg text-gray-700 hover:text-black transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                      <svg className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "AI Consulting", href: "/enterpriseconsulting" },
                  { name: "Chatbot Development", href: "/chatbotdevelopment" },
                  { name: "Process Automation", href: "/autonomousagents" }
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-lg text-gray-700 hover:text-black transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                      <svg className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 Centonis Technologies Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 text-sm">Powered by AI</span>
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
