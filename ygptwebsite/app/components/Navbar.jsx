import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex items-center">
          <h1 className="text-xl">Ygpt</h1>
          <Link
            href="#"
            className="ml-auto w-fit px-14 py-2 border-black border"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="0.9em"
              width="0.9em"
              className="inline mr-1"
            >
              <path
                fillRule="evenodd"
                d="M2 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1H3.707l10.147 10.146a.5.5 0 01-.708.708L3 3.707V8.5a.5.5 0 01-1 0v-6z"
              />
            </svg>
            Get Started
          </Link>
        </div>
        <nav className="flex mt-1">
          <ul className="flex text-zinc-500 gap-5 text-lg">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Ai</Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <Link href="#">Fine tuning</Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
