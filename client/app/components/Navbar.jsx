'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`z-50 fixed top-0 w-full px-[2rem] md:px-[4rem] lg:px-[8rem] py-[1.6rem] flex sm:flex-row flex-col justify-between transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}
      >
        <Link href = '/' className = ' items-center gap-1'>
          <h1 className="text-xl font-[400] inline">
            Centonis AI
          </h1>
          <Image src = '/centonislogov2.png' width = {200} height = {200} alt = 'company logo' className = 'h-5 w-5 inline ml-2 mb-1'/> 
          <span className = 'sm:block hidden text-[11px]'>Led by you, powered by us</span>
        </Link>

        <nav className = 'flex'>
          <ul className="flex text-zinc-500 text-lg items-center ">
            <li className="text-sm hover:text-black trasition-all duration-150 sm:block hidden">
              <Link href={`${pathname === '/' ? '#services' : '/#services'}`}>Services</Link>
            </li>
            <li className="text-sm hover:text-black trasition-all duration-150 ml-4 sm:block hidden">
              <Link href={`${pathname === '/' ? '#benifits' : '/#benifits'}`}>Benefits</Link>
            </li>
            <li className = 'mr-4 sm:ml-10 sm:mt-0 mt-4'>
              <Link
                href="/contact"
                className="border-black border-[1px] text-black px-6 py-2 text-sm border-dashed hover:bg-black hover:text-white transition-all duration-300"
              >
                Work With Us
              </Link>
            </li>
            <li className = 'sm:mt-0 mt-4'>
              <Link
                href="/ai"
                className="border-black border-[1px] text-black px-6 py-2 text-sm border-dashed hover:bg-black hover:text-white transition-all duration-300"
              >
                Chat
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
