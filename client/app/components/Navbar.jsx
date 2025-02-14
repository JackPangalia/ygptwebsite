"use client";

//* ICON COMPONENT IMPORTS *//
import IconHamburgerMenu from "./icons/IconHamburgerMenu";
import IconClose from "./icons/IconClose";

//* PACKAGE COMPONENT IMPORTS *//
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <headers
        className={`z-50 fixed top-0 w-full px-[2rem] md:px-[4rem] lg:px-[8rem] py-[1.6rem] flex  justify-between transition-colors duration-300 bg-white`}
      >
        <Link
          href="/"
          className={`items-center gap-1 ${
            isMobileMenuOpen ? "hidden" : "block"
          }`}
        >
          <h1 className="text-xl font-[400]  sm:inline hidden">Centonis AI</h1>
          <Image
            src="/centonislogov2.png"
            width={200}
            height={200}
            alt="company logo"
            className="h-5 w-5 inline ml-2 mb-1"
          />
          {/* <span className="sm:block hidden text-[11px]">
            Led by you, powered by us
          </span> */}
        </Link>

        <nav className="flex">
          <ul className="text-zinc-500 text-lg items-center sm:flex hidden">
            <li className="text-sm hover:text-black trasition-all duration-150 ">
              <Link href={`${pathname === "/" ? "#services" : "/#services"}`}>
                Services
              </Link>
            </li>
            <li className="text-sm hover:text-black trasition-all duration-150 ml-4 ">
              <Link href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}>
                Benefits
              </Link>
            </li>
            <li className="text-sm hover:text-black trasition-all duration-150 ml-4 ">
              <Link href={`${pathname === "/" ? "#about" : "/#about"}`}>About</Link>
            </li>
            <li className="mr-4 sm:ml-10 sm:mt-0 mt-4">
              <Link
                href="/contact"
                className="bg-black text-white px-4 py-3 rounded-full hover:bg-black/80 transition-colors text-sm"
              >
                Work With Us
              </Link>
            </li>
          </ul>

          <button
            className="sm:hidden block"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobileMenuOpen ? (
              <IconHamburgerMenu className="size-[1.4rem]" />
            ) : (
              <IconClose className="size-[1.4rem]" />
            )}
          </button>
        </nav>
      </headers>

      <div
        className={`bg-white w-screen h-screen left-0 fixed top-[4.5rem] transition-all duration-400 transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="ml-10 space-y-3 mt-4 text-2xl">
          <li>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:font-[500] transition-all duration-150"
            >
              Work with us
            </Link>
          </li>
          <li>
            <Link
              href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
              className="hover:font-[500] transition-all duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:font-[500] transition-all duration-150"
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              href={`${pathname === "/" ? "#services" : "/#services"}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:font-[500] transition-all duration-150"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
