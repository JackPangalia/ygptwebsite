"use client"

import IconHamburgerMenu from "./icons/IconHamburgerMenu"
import IconClose from "./icons/IconClose"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const Navbar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`z-50 fixed top-0 left0 w-full px-2 py-4 flex justify-between items-center bg-white transition-all duration-300 shadow-md ${
          isScrolled ? "" : ""
        } sm:top-6 sm:left-1/2 sm:-translate-x-1/2 sm:w-[87%] sm:max-w-[1500px] sm:rounded-full`}
      >
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl hidden sm:inline ml-4 text-zinc-900">Centonis AI</h1>
          <Image src="/centonislogov2.png" width={24} height={24} alt="company logo" className="h-4 w-4" />

        </Link>

        <nav className="flex items-center">
          <ul className="text-zinc-500 text-lg items-center hidden sm:flex">
            <li className="text-sm hover:text-black transition-all duration-150">
              <Link href={`${pathname === "/" ? "#services" : "/#services"}`}>Services</Link>
            </li>
            <li className="text-sm hover:text-black transition-all duration-150 ml-4">
              <Link href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}>Benefits</Link>
            </li>
            <li className="text-sm hover:text-black transition-all duration-150 ml-4">
              <Link href={`${pathname === "/" ? "#about" : "/#about"}`}>About</Link>
            </li>
            <li className="ml-6">
              <Link
                href="/contact"
                className="bg-black text-white px-4 py-4 rounded-full hover:bg-black/80 transition-colors text-sm "
              >
                Work With Us
              </Link>
            </li>
          </ul>

          <button
            className="sm:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {!isMobileMenuOpen ? <IconHamburgerMenu className="size-6" /> : <IconClose className="size-6" />}
          </button>
        </nav>
      </header>
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } sm:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <ul className="space-y-6 text-center">
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium hover:text-black transition-all duration-150"
              >
                Work with us
              </Link>
            </li>
            <li>
              <Link
                href={`${pathname === "/" ? "#about" : "/#about"}`}
                className="text-2xl font-medium hover:text-black transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={`${pathname === "/" ? "#benefits" : "/#benefits"}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium hover:text-black transition-all duration-150"
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                href={`${pathname === "/" ? "#services" : "/#services"}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium hover:text-black transition-all duration-150"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar

