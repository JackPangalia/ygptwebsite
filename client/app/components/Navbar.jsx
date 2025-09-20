"use client";

import { IconTwotoneKeyboardArrowDown } from "./icons/IconTwotoneKeyboardArrowDown";
import IconClose from "./icons/IconClose";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import IconBars2 from "./icons/IconBars2";
import { useScroll } from "../hooks/useScroll";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const scrollY = useScroll();
  const isScrolled = scrollY > 50;

  return (
    <>
      {/* --------------------- Desktop Navbar --------------------- */}
      <header className={`z-50 hidden sm:flex fixed top-0 left-0 w-full py-6 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="w-full max-w-[1600px] mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Image
            src="/centonislogo.png"
            width={150}
            height={150}
            alt="company logo"
            className="w-12 rounded transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="font-semibold text-lg text-black group-hover:text-gray-700 transition-colors">
            Centonis
          </h1>
        </Link>

        {/* Full Nav - Hidden when at top, visible when scrolled */}
        <nav className={`transition-all duration-500 ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <ul className="flex items-center space-x-8">
            <li className="relative group">
              <Link 
                href={`${pathname === "/" ? "#services" : "/#services"}`}
                className="flex items-center text-black hover:text-gray-700 font-medium transition-colors duration-300 py-2"
              >
                Services
                <IconTwotoneKeyboardArrowDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              
              <div className="absolute top-full left-0 mt-4 bg-white border border-gray-200 rounded-2xl py-3 px-2 w-56 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl">
                <Link 
                  href="/enterpriseconsulting" 
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300 rounded-xl font-medium"
                >
                  Consulting
                </Link>
                <Link 
                  href="/chatbotdevelopment" 
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300 rounded-xl font-medium"
                >
                  Chatbots
                </Link>
                <Link 
                  href="/autonomousagents" 
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300 rounded-xl font-medium"
                >
                  Automations
                </Link>
              </div>
            </li>
            <li>
              <Link 
                href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
                className="text-black hover:text-gray-700 font-medium transition-colors duration-300 py-2"
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link 
                href={`${pathname === "/" ? "#about" : "/#about"}`}
                className="text-black hover:text-gray-700 font-medium transition-colors duration-300 py-2"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button - Always Visible */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact
          </Link>
        </div>
        </div>
      </header>

      {/* --------------------- Mobile Navbar --------------------- */}
      <div className="z-50 sm:hidden fixed top-0 left-0 w-full flex flex-col">
        {/* Mobile Nav Bar */}
        <header className="w-full py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="w-full max-w-[1600px] mx-auto px-4 flex items-center justify-between">
          {/* Logo / Title */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/centonislogo.png"
              width={100}
              height={100}  
              alt="company logo"
              className="w-10 rounded transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="ml-1 text-md text-black group-hover:text-gray-700 transition-colors font-semibold">
              Centonis
            </h1>
          </Link>

          {/* Right Side - Contact Button + Menu */}
          <div className="flex items-center gap-3">
            {/* Contact Button - Always Visible */}
            <Link
              href="/contact"
              className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-sm"
            >
              Contact
            </Link>

            {/* Menu Toggle Button - Always Visible on Mobile */}
            <button
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-700 hover:text-black hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <IconClose className="w-6 h-6" />
              ) : (
                <IconBars2 className="w-6 h-6" />
              )}
            </button>
          </div>
          </div>
        </header>

        {/* Conditionally Render the Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 p-6">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2"
                >
                  Work With Us
                </Link>
              </li>
              <li>
                <Link
                  href={`${pathname === "/" ? "#about" : "/#about"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    className="flex items-center w-full text-left text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  >
                    Services
                    <IconTwotoneKeyboardArrowDown className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesDropdownOpen && (
                    <ul className="pl-4 mt-3 space-y-3">
                      <li>
                        <Link
                          href="/enterpriseconsulting"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                        >
                          Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/chatbotdevelopment"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                        >
                          Chatbots
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/autonomousagents"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                        >
                          Automations
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;