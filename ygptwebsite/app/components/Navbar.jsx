import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 w-full px-[8rem] bg-white py-[2rem] flex justify-between">
        <div>
          <Link href = '/' className="text-xl">Company Name</Link>
        </div>

        <nav>
          <ul className="flex text-zinc-500 gap-10 text-lg items-center">
            <li className = 'text-sm'>
              <Link href="#">Services</Link>
            </li>
            <li className = 'text-sm'>
              <Link href="#">Benifits</Link>
            </li>
            <li className = 'text-sm'>
              <Link href="#">AI</Link>
            </li>
            <li>
              <Link href="/contact" className="border-black border-[1px]  text-black px-6 py-2 text-sm">
                Work With Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
