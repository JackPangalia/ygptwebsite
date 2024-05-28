import Link from "next/link";

const Contactpanel = () => {
  return (
    <section className="flex items-end justify-between lg:px-[3rem] mx-auto max-w-[1500px]">
      <h4 className="text-5xl mt-20">Request a Demo</h4>

      <div>
        <span className="mr-10 text-sm">Bring Your Ideas To Light</span>
        <Link href="/contact" className="px-6 py-2 border-black border h-fit border-dashed hover:bg-black hover:text-white transition-all duration-300">
          Work With Us
        </Link>
      </div>
    </section>
  );
};

export default Contactpanel;
