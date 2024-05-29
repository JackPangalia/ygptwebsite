import Link from "next/link";

const Contactpanel = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:items-end justify-between px-[2rem] mx-auto max-w-[1500px]">
      <h4 className="sm:text-5xl text-4xl mt-20">Request a Demo</h4>

      <div className = 'lg:mt-0 mt-10'>
        <span className="mr-10 text-sm sm:inline hidden">Bring Your Ideas To Light</span>
        <Link href="/contact" className="px-6 py-2 border-black border h-fit border-dashed hover:bg-black hover:text-white transition-all duration-300">
          Work With Us
        </Link>
      </div>
    </section>
  );
};

export default Contactpanel;
