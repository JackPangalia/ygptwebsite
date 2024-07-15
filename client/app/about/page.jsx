import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Contactpanel from "../components/contactpanel";

const About = () => {
  return (
    <div className="bg-white sm:pt-[9rem] pt-[5rem]">
      <div className="max-w-[1500px] px-[2rem] mx-auto ">
        <div className="flex justify-center flex-col items-center">
          <h1 className="mb-8 text-xl lg:w-[60%] md:w-[70%] w-full">About us</h1>
          <p className=" lg:w-[60%] md:w-[70%] w-full md:text-4xl sm:text-3xl text-xl mb-8">
          At Centonis, we are dedicated to empowering businesses of all sizes through the transformative power of artificial intelligence. Our mission is to revolutionise businesses by delivering innovative AI solutions that enhance efficiency, drive growth, and unlock new opportunities.

          </p>
        </div>
      </div>

      <section className="bg-white py-2 m-4 md:m-10 rounded-xl">
        <div className="md:px-8 lg:px-16 max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-lg shadow-lg border-zinc-200 border-[1px] flex flex-col">
            <h2 className="text-2xl mb-2">Services</h2>
            <p className="w-full md:w-3/4 mb-10">
              Find out about are array of services
            </p>
            <Link
              href="/#services"
              className="border-black border-[1px] px-4 py-2 hover:bg-black hover:text-white transition-colors duration-200 w-fit mb-6"
            >
              Explore
            </Link>

            <div className="mt-auto">
              <Image
                className="rounded-xl w-full h-[200px] object-cover"
                src="/3d-sea-landscape.jpg"
                alt="water motion image"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-zinc-200 border-[1px] flex flex-col">
            <h2 className="text-2xl mb-2">Benefits</h2>
            <p className="w-full md:w-3/4 mb-10">
              Explore the vast benefits of working with Centonis
            </p>
            <Link
              href="/#benifits"
              className="border-black border-[1px] px-4 py-2 hover:bg-black hover:text-white transition-colors duration-200 w-fit mb-6"
            >
              Explore
            </Link>

            <div className="mt-auto">
              <Image
                className="rounded-xl w-full h-[200px] object-cover"
                src="/closeup-image-water-abstract-blue-orange-patterns.jpg"
                alt="water motion image"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-zinc-200 border-[1px] flex flex-col">
            <h2 className="text-2xl mb-2">Chat</h2>
            <p className="w-full md:w-3/4 mb-10">
              Gain an insight of how AI can enhance your business using the
              innovative Centonis website chatbot
            </p>
            <Link
              href="/ai"
              className="border-black border-[1px] px-4 py-2 hover:bg-black hover:text-white transition-colors duration-200 w-fit mb-6"
            >
              Explore
            </Link>

            <div className="mt-auto">
              <Image
                className="rounded-xl w-full h-[200px] object-cover"
                src="/orangemetalicgel.jpg"
                alt="water motion image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <Contactpanel />
      <Footer />
    </div>
  );
};

export default About;
