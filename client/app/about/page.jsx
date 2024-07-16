import Footer from "../components/Footer";
import Contactpanel from "../components/contactpanel";
import ExploreCard from "../components/ExploreCard";

const About = () => {
  return (
    <div className="bg-white sm:pt-[9rem] pt-[5rem]">
      <div className="max-w-[1500px] px-[2rem] mx-auto ">
        <div className="flex justify-center flex-col items-center">
          <h1 className="mb-8 text-2xl sm:text-xl lg:w-[60%] md:w-[70%] w-full">
            About us
          </h1>
          <p className=" lg:w-[60%] md:w-[70%] w-full md:text-4xl sm:text-3xl text-xl mb-8">
            At Centonis, we are dedicated to empowering businesses of all sizes
            through the transformative power of artificial intelligence. Our
            mission is to revolutionise businesses by delivering innovative AI
            solutions that enhance efficiency, drive growth, and unlock new
            opportunities.
          </p>
        </div>
      </div>

      <section className="bg-white py-2 m-4 md:m-10 rounded-xl">
        <div className="md:px-8 lg:px-16 max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <ExploreCard
            title="Services"
            paragraph="Find out about are useful array of services"
            link="/#services"
            imagePath="/3d-sea-landscape.jpg"
            imageHeight="200px"
          />

          <ExploreCard
            title="Benefits"
            paragraph="Explore the vast benefits of working with Centonis"
            link="/#benifits"
            imagePath="/closeup-image-water-abstract-blue-orange-patterns.jpg"
            imageHeight="200px"
          />

          <ExploreCard
            title="Chat"
            paragraph="Gain an insight of how AI can enhance your business using theinnovative Centonis website chatbot"
            link="/ai"
            imagePath="/orangemetalicgel.jpg"
            imageHeight="200px"
          />
        </div>
      </section>

      <Contactpanel />
      <Footer />
    </div>
  );
};

export default About;
