"use client";

import { IconTwotoneKeyboardArrowDown } from "./icons/IconTwotoneKeyboardArrowDown";
import IconClose from "./icons/IconClose";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import IconBars2 from "./icons/IconBars2";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <>
      {/* --------------------- Desktop Navbar --------------------- */}
      <header className="z-50 hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 w-[87%] max-w-[1500px] px-1 py-1 justify-between items-center bg-white shadow-md rounded-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Centonis_Logo_v5.webp"
            width={75}
            height={75}
            alt="company logo"
            className="h-7 w-7 ml-4 rounded"
          />
          <h1 className="text-lg text-zinc-900 font-medium ml-1">Centonis AI</h1>
        </Link>

        <nav>
          <ul className="flex items-center text-black text-lg">
            <li className="text-sm relative group">
              <Link 
                href={`${pathname === "/" ? "#services" : "/#services"}`}
                className="flex items-center px-4 py-4 group-hover:bg-black group-hover:text-white group-hover:rounded-full transition-all duration-150"
              >
                Services
                <IconTwotoneKeyboardArrowDown className="ml-1 w-4 h-4" />
              </Link>
              
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg py-2 px-2 w-48 invisible group-hover:visible transition-all duration-150 opacity-0 group-hover:opacity-100">
                <Link 
                  href="/enterpriseconsulting" 
                  className="block px-4 py-2 hover:bg-black hover:text-white transition-all duration-150 rounded-3xl"
                >
                  Consulting
                </Link>
                <Link 
                  href="/chatbotdevelopment" 
                  className="block px-4 py-2 hover:bg-black hover:text-white transition-all duration-150 rounded-3xl"
                >
                  Chatbots
                </Link>
                <Link 
                  href="/autonomousagents" 
                  className="block px-4 py-2 hover:bg-black hover:text-white transition-all duration-150 rounded-3xl"
                >
                  Automations
                </Link>
              </div>
            </li>
            <li className="text-sm ml-4">
              <Link 
                href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
                className="px-4 py-4 hover:bg-black hover:text-white hover:rounded-full transition-all duration-150"
              >
                Benefits
              </Link>
            </li>
            <li className="text-sm ml-4">
              <Link 
                href={`${pathname === "/" ? "#about" : "/#about"}`}
                className="px-4 py-4 hover:bg-black hover:text-white hover:rounded-full transition-all duration-150"
              >
                About
              </Link>
            </li>
            <li className="ml-6">
              <Link
                href="/contact"
                className="bg-black text-white px-4 py-4 rounded-full hover:bg-black/80 transition-colors text-sm"
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
        <header className="w-full py-1 px-1 flex items-center bg-white rounded-lg shadow">
          {/* Logo / Title (change to your liking) */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Centonis_Logo_v5.webp"
              width={100}
              height={100}  
              alt="company logo"
              className="h-6 w-6 rounded ml-1"
            />
            <h1 className="text-LG text-zinc-900 font-medium ml-1">Centonis AI</h1>
          </Link>

          {/* Menu Toggle Button */}
          <button
            className="ml-auto w-8 h-8 text-black rounded flex items-center justify-center"
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
          <div className="mt-2 w-full bg-white rounded-lg shadow p-5">
            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-black transition-all duration-150"
                >
                  Work with us
                </Link>
              </li>
              <li>
                <Link
                  href={`${pathname === "/" ? "#about" : "/#about"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-black transition-all duration-150"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-black transition-all duration-150"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    className="hover:text-black transition-all duration-150 flex items-center w-full text-left"
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
                          className="hover:text-black transition-all duration-150"
                        >
                          Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/chatbotdevelopment"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:text-black transition-all duration-150"
                        >
                          Chatbots
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/autonomousagents"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:text-black transition-all duration-150"
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