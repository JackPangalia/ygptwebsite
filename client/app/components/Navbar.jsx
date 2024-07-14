"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
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
          <span className="sm:block hidden text-[11px]">
            Led by you, powered by us
          </span>
        </Link>

        <nav className="flex">
          <ul className="text-zinc-500 text-lg items-center sm:flex hidden">
            <li className="text-sm hover:text-black trasition-all duration-150 ">
              <Link href={`${pathname === "/" ? "#services" : "/#services"}`}>
                Services
              </Link>
            </li>
            <li className="text-sm hover:text-black trasition-all duration-150 ml-4 ">
              <Link href={`${pathname === "/" ? "#benifits" : "/#benifits"}`}>
                Benefits
              </Link>
            </li>
            <li className="mr-4 sm:ml-10 sm:mt-0 mt-4">
              <Link
                href="/contact"
                className="border-black border-[1px] text-black px-6 py-2 text-sm  hover:bg-black hover:text-white transition-all duration-300"
              >
                Work With Us
              </Link>
            </li>
            <li className="sm:mt-0 mt-4">
              <Link
                href="/ai"
                className="border-black border-[1px] text-black px-6 py-2 text-sm  hover:bg-black hover:text-white transition-all duration-300"
              >
                Chat
              </Link>
            </li>
          </ul>

          <button
            className="sm:hidden block"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>

      <div
        className={`bg-white w-screen h-screen left-0 fixed top-[4.5rem] transition-all duration-400 transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="ml-10 space-y-3 mt-4 text-2xl">
          <li>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className = 'hover:font-[500] transition-all duration-150'>
              Work with us
            </Link>
          </li>
          <li>
            <Link href="/ai" onClick={() => setIsMobileMenuOpen(false)} className = 'hover:font-[500] transition-all duration-150'>
              Chat
            </Link>
          </li>
          <li>
            <Link
              href={`${pathname === "/" ? "#benifits" : "/#benifits"}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className = 'hover:font-[500] transition-all duration-150'
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              href={`${pathname === "/" ? "#services" : "/#services"}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className = 'hover:font-[500] transition-all duration-150'
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
