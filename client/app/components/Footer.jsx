'use client'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`flex sm:flex-row flex-col sm:mt-44 mt-20 sm:gap-24 gap-10 sm:px-[3rem] px-[2rem] max-w-[1500px] mx-auto pb-[6rem]`}>
      <div>
        <div className="flex flex-col">
          {/* <span className="">© 2024 Centonis technologies Inc</span> */}
          <span>
            <svg
              viewBox="0 0 500 1000"
              fill="currentColor"
              height="1.1em"
              width="1.1em"
              className="inline mb-1"
            >
              <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
            </svg>
            Vancouver, BC
          </span>
          <span>@ centonisai@gmail.com</span>
        </div>
      </div>

      <div>
        <span className="text-gray-500 text-sm">DOCUMENTS</span>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/ai">AI</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#benifits">Benefits</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
