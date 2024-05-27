import Link from "next/link";

const Contactpanel = () => {
  return (
    <section className="flex items-end justify-between lg:px-[3rem] mx-auto max-w-[1500px]">
      <h4 className="text-5xl mt-20">Request a Demo</h4>

      <div>
        <span className="mr-10 text-sm">Bring Your Ideas To Light</span>
        <Link href="#" className="px-14 py-2 border-black border h-fit">
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
          Work With Us
        </Link>
      </div>
    </section>
  );
};

export default Contactpanel;
