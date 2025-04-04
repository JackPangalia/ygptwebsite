"use client";

import IconHamburgerMenu from "./icons/IconHamburgerMenu";
import IconClose from "./icons/IconClose";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* --------------------- Desktop Navbar --------------------- */}
      <header className="z-50 hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 w-[87%] max-w-[1500px] px-4 py-4 justify-between items-center bg-white shadow-md rounded-full">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl text-zinc-900">Centonis AI</h1>
          <Image
            src="/centonislogov2.png"
            width={24}
            height={24}
            alt="company logo"
            className="h-4 w-4"
          />
        </Link>

        <nav>
          <ul className="flex items-center text-zinc-500 text-lg">
            <li className="text-sm hover:text-black transition-all duration-150">
              <Link href={`${pathname === "/" ? "#services" : "/#services"}`}>
                Services
              </Link>
            </li>
            <li className="text-sm hover:text-black transition-all duration-150 ml-4">
              <Link href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}>
                Benefits
              </Link>
            </li>
            <li className="text-sm hover:text-black transition-all duration-150 ml-4">
              <Link href={`${pathname === "/" ? "#about" : "/#about"}`}>
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
        <header className="w-full py-1 px-1 flex items-center bg-white rounded-full shadow">
          {/* Logo / Title (change to your liking) */}
          <div className="flex items-center gap-2">
   
            <Image
              src="/centonislogov2.png"
              width={100}
              height={100}
              alt="company logo"
              className="h-6 w-6 ml-4"
            />
          </div>

          {/* Menu Toggle Button */}
          <button
            className="ml-auto w-11 h-11 bg-black text-white rounded-full flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <IconClose className="w-5 h-5" />
            ) : (
              <IconHamburgerMenu className="w-5 h-5" />
            )}
          </button>
        </header>

        {/* Conditionally Render the Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mt-2 w-full bg-white rounded-3xl shadow p-5">
            <ul className="flex flex-col space-y-4 text-lg ">
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
                <Link
                  href={`${pathname === "/" ? "#services" : "/#services"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-black transition-all duration-150"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
