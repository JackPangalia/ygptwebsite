import Link from "next/link";

const Contactpanel = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:items-end justify-between px-[2rem] mx-auto max-w-[1500px]">
      <h2 className="sm:text-5xl text-4xl mt-20">Request a Demo</h2>

      <div className="lg:mt-0 mt-10">
        <p className="mr-10 text-sm sm:inline hidden">
          Bring Your Ideas To Light
        </p>

        <Link href="/contact" className = 'bg-black text-white px-4 py-3 rounded-none hover:bg-black/80 transition-colors text-sm'>Work With Us</Link>
      </div>
    </section>
  );
};

export default Contactpanel;
