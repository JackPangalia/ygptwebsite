"use client";

import { IconTwotoneKeyboardArrowDown } from "./icons/IconTwotoneKeyboardArrowDown";
import IconClose from "./icons/IconClose";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import IconBars2 from "./icons/IconBars2";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change navbar style when scrolled past the hero section (approximately 100vh)
      setIsScrolled(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --------------------- Desktop Navbar --------------------- */}
      <header className={`z-50 hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 w-[87%] max-w-[1500px] px-1 py-1 justify-between items-center rounded-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Centonis_Logo_v5.webp"
            width={75}
            height={75}
            alt="company logo"
            className="h-7 w-7 ml-4 rounded"
          />
          <h1 className={`text-lg font-medium ml-1 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>Centonis AI</h1>
        </Link>

        <nav>
          <ul className={`flex items-center text-lg ${isScrolled ? 'text-black' : 'text-white'}`}>
            <li className="text-sm relative group">
              <Link 
                href={`${pathname === "/" ? "#services" : "/#services"}`}
                className={`flex items-center px-4 py-4 group-hover:rounded-full transition-all duration-150 ${
                  isScrolled 
                    ? 'group-hover:bg-black group-hover:text-white' 
                    : 'group-hover:bg-white group-hover:text-black'
                }`}
              >
                Services
                <IconTwotoneKeyboardArrowDown className="ml-1 w-4 h-4" />
              </Link>
              
              <div className={`absolute top-full left-0 mt-2 rounded-lg py-2 px-2 w-48 invisible group-hover:visible transition-all duration-150 opacity-0 group-hover:opacity-100 ${
                isScrolled 
                  ? 'bg-white shadow-md' 
                  : 'bg-transparent'
              }`}>
                <Link 
                  href="/enterpriseconsulting" 
                  className={`block px-4 py-2 transition-all duration-150 rounded-3xl ${
                    isScrolled 
                      ? 'hover:bg-black hover:text-white' 
                      : 'hover:bg-white hover:text-black'
                  }`}
                >
                  Consulting
                </Link>
                <Link 
                  href="/chatbotdevelopment" 
                  className={`block px-4 py-2 transition-all duration-150 rounded-3xl ${
                    isScrolled 
                      ? 'hover:bg-black hover:text-white' 
                      : 'hover:bg-white hover:text-black'
                  }`}
                >
                  Chatbots
                </Link>
                <Link 
                  href="/autonomousagents" 
                  className={`block px-4 py-2 transition-all duration-150 rounded-3xl ${
                    isScrolled 
                      ? 'hover:bg-black hover:text-white' 
                      : 'hover:bg-white hover:text-black'
                  }`}
                >
                  Automations
                </Link>
              </div>
            </li>
            <li className="text-sm ml-4">
              <Link 
                href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
                className={`px-4 py-4 hover:rounded-full transition-all duration-150 ${
                  isScrolled 
                    ? 'hover:bg-black hover:text-white' 
                    : 'hover:bg-white hover:text-black'
                }`}
              >
                Benefits
              </Link>
            </li>
            <li className="text-sm ml-4">
              <Link 
                href={`${pathname === "/" ? "#about" : "/#about"}`}
                className={`px-4 py-4 hover:rounded-full transition-all duration-150 ${
                  isScrolled 
                    ? 'hover:bg-black hover:text-white' 
                    : 'hover:bg-white hover:text-black'
                }`}
              >
                About
              </Link>
            </li>
            <li className="ml-6">
              <Link
                href="/contact"
                className={`px-4 py-4 rounded-full transition-colors text-sm ${
                  isScrolled 
                    ? 'bg-black text-white hover:bg-black/80' 
                    : 'bg-white text-black hover:bg-white/80'
                }`}
              >
                Work With Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* --------------------- Mobile Navbar --------------------- */}
      <div className="z-50 sm:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[90%] flex flex-col items-center">
        {/* Floating Nav Bar */}
        <header className={`w-full py-1 px-1 flex items-center rounded-lg transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
        }`}>
          {/* Logo / Title (change to your liking) */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Centonis_Logo_v5.webp"
              width={100}
              height={100}  
              alt="company logo"
              className="h-6 w-6 rounded ml-1"
            />
            <h1 className={`text-LG font-medium ml-1 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>Centonis AI</h1>
          </Link>

          {/* Menu Toggle Button */}
          <button
            className={`ml-auto w-8 h-8 rounded flex items-center justify-center transition-colors ${
              isScrolled 
                ? 'text-black hover:bg-black/10' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <IconClose className="w-6 h-6" />
            ) : (
              <IconBars2 className="w-6 h-6" />
            )}
          </button>
        </header>

        {/* Conditionally Render the Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className={`mt-2 w-full rounded-lg p-5 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white shadow-md' 
              : 'bg-transparent'
          }`}>
            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-all duration-150 ${
                    isScrolled 
                      ? 'text-black hover:text-black/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  Work with us
                </Link>
              </li>
              <li>
                <Link
                  href={`${pathname === "/" ? "#about" : "/#about"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-all duration-150 ${
                    isScrolled 
                      ? 'text-black hover:text-black/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-all duration-150 ${
                    isScrolled 
                      ? 'text-black hover:text-black/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  Benefits
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    className="text-white hover:text-white/80 transition-all duration-150 flex items-center w-full text-left"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  >
                    Services
                    <IconTwotoneKeyboardArrowDown className={`ml-1 w-4 h-4 transform transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesDropdownOpen && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li>
                        <Link
                          href="/enterpriseconsulting"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`transition-all duration-150 ${
                    isScrolled 
                      ? 'text-black hover:text-black/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                        >
                          Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/chatbotdevelopment"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`transition-all duration-150 ${
                    isScrolled 
                      ? 'text-black hover:text-black/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                        >
                          Chatbots
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/autonomousagents"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`transition-all duration-150 ${
                    isScrolled 
                      ? 'text-black hover:text-black/80' 
                      : 'text-white hover:text-white/80'
                  }`}
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