"use client";

import Link from "next/link";
import { useScroll } from "../hooks/useScroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollY = useScroll();
  const isScrolled = scrollY > 100;

  return (
    <motion.header 
      className={`z-50 fixed top-0 left-0 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Subtle bottom border when scrolled */}
      <div className={`absolute bottom-0 left-0 w-full h-px transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 flex justify-between items-center">
        {/* Logo - Text only, typographic treatment */}
        <Link href="/" className="group flex items-center">
          <span className={`font-logo text-2xl sm:text-2xl font-medium tracking-tight transition-colors duration-300 ${
          isScrolled 
              ? 'text-black group-hover:text-gray-600' 
              : 'text-white group-hover:text-white/70'
          }`}>
                Centonis
          </span>
          <span className={`ml-1 text-2xl sm:text-2xl font-light tracking-tight transition-colors duration-300 ${
            isScrolled 
              ? 'text-gray-400 group-hover:text-gray-500' 
              : 'text-white/40 group-hover:text-white/60'
          }`}>
            .
              </span>
          </Link>

        {/* Contact Button - Refined with animated underline */}
            <Link
              href="/contact"
          className={`group relative px-6 py-2.5 text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 ${
            isScrolled
              ? 'bg-black text-white hover:bg-gray-900'
              : 'bg-white text-black hover:bg-white/90'
          }`}
            >
          <span className="relative z-10">Contact</span>
            </Link>
          </div>
    </motion.header>
  );
};

export default Navbar;
