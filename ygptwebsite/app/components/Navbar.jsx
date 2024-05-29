import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header
        className={`fixed top-0 w-full px-[2rem] md:px-[4rem] lg:px-[8rem] bg-white py-[2rem] flex sm:flex-row flex-col justify-between`}
      >
        <div>
          <Link href="/" className="text-xl">
            Auxin
          </Link>
        </div>

        <nav>
          <ul className="flex text-zinc-500 text-lg items-center ">
            <li className="text-sm hover:text-black trasition-all duration-150 sm:block hidden">
              <Link href="#services">Services</Link>
            </li>
            <li className="text-sm hover:text-black trasition-all duration-150 ml-4 sm:block hidden">
              <Link href="#benifits">Benifits</Link>
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
                href="/chatbot"
                className="border-black border-[1px] text-black px-6 py-2 text-sm border-dashed hover:bg-black hover:text-white transition-all duration-300"
              >
                AI
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
