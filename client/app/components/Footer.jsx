'use client'
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top border accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Left - Logo and Tagline */}
            <div className="lg:col-span-6 space-y-8">
              {/* Logo - Text only, matching navbar */}
              <Link href="/" className="group inline-flex items-center">
                <span className="font-logo text-3xl sm:text-4xl font-medium tracking-tight text-white group-hover:text-white/70 transition-colors duration-300">
                    Centonis
                </span>
                <span className="text-3xl sm:text-4xl font-light tracking-tight text-white/30 group-hover:text-white/50 transition-colors duration-300">
                  .
                </span>
              </Link>
              
              <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-md">
                A Vancouver software studio building clean digital work and practical software for businesses.
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 group mt-4"
              >
                <span className="text-white/60 group-hover:text-white transition-colors duration-300">Get in touch</span>
                <svg 
                  className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right - Contact Info */}
            <div className="lg:col-span-3 lg:col-start-10 space-y-6">
              <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest">Contact</h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                      className="w-3 h-3 text-white/40"
                >
                  <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                </svg>
                  </div>
                  <span className="text-white/50">Vancouver</span>
              </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                  </div>
                  <a 
                    href="mailto:centonisai@gmail.com" 
                    className="text-white/50 hover:text-white transition-colors duration-300"
                  >
                    centonisai@gmail.com
                  </a>
              </div>
          </div>
            </div>
            </div>

        {/* Bottom Section */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-white/30 text-sm">
                © 2024-2025 Centonis AI Inc.
            </p>
              <p className="text-white/20 text-sm">
                Vancouver
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
