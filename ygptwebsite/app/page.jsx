import Image from "next/image";
import Link from "next/link";
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";

const Home = () => {
  return (
    <div className="px-[8rem] pt-[8rem]">
      {/* <Navbar /> */}
      <h1 className="text-7xl mt-20 font-semibold">AI Tailored For You</h1>
      <h3 className="text-2xl ml-auto w-1/2 mt-20 text-gray-500">
        Unlock your business's potential with our custom AI solutions. Tailored
        to meet your unique needs, our expert team ensures seamless
        implementation and enhanced productivity. Experience AI done right, with
        a focus on quality and results.
      </h3>

      <section className="w-full">
        <h2 className="text-5xl my-20">Why Implement AI?</h2>
        <div className="flex justify-strech gap-14">
          <Keypoint
            link="offerings/businessanalyst"
            title="Increase Efficiency"
            paragraph="Streamline your operations and boost productivity with AI-driven automation."
            exploretopic=""
          />
          <Keypoint
            link="#"
            title="Key Point 2*"
            paragraph="Lorem ipsum dolor sit amet consectetur."
            exploretopic=""
          />
          <Keypoint
            link="#"
            title="Key Point 3*"
            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,praesentium."
            exploretopic=""
          />
        </div>
      </section>

      <section className="w-full flex">
        <Image
          className="w-1/2 my-20 mr-20 rounded object-cover"
          src="/aichatbotanimated.png"
          alt="aichatbot-img"
          width="1920"
          height="1080"
        />

        <div className="w-1/2">
          <h2 className="my-20 text-7xl ml-auto w-fit">About Title*</h2>
          <p className="text-2xl text-gray-500 text-right">
            **********ABOUT PARAGRAPH ********* quis autem quaerat ex iste
            delectus,<span className="bg-[#e9ff32]">officia provident </span>
            voluptate rem dolore vero illo dicta, velit possimus nihil animi!
            Iste sequi molestiae quibusdam cupiditate{" "}
            <span className="bg-[#e9ff32]">quod ex dignissimos</span> recusandae
            blanditiis nesciunt similique, laudantium tenetur saepe neque,
            corporis iusto optio illum itaque.
          </p>
        </div>
      </section>

      <section className="w-full border-b-[1px] border-black pb-24">
        <h2 className="my-20 text-5xl w-1/2">
          What Makes Companyname* Platforms So Powerful
        </h2>

        <div className="grid grid-cols-4 gap-14">
          <Keypoint
            link="#"
            title="General & Specific Knowledge"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius vero sequi magni, dolores similique delectus."
            exploretopic="Knowledge base"
          />
          <Keypoint
            link="#"
            title="Fine Tuning"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius"
            exploretopic="Fine Tuning"
          />
          <Keypoint
            link="#"
            title="Multi-Layered Security and Data"
            paragraph="et, consectetur adipisicing elit. Eius vero sequi magni, dolores similique delec lor sit amet,"
            exploretopic="Security"
          />
          <Keypoint
            link="#"
            title="Day One Value"
            paragraph="consectetur adipisicing elit. Eius vero sequi magni, dolores sim"
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Industry Leading AI"
            paragraph="consectetur adipisicing elit. Eius vero sequi magni, dolores sim"
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Proprietary & Tailored Platforms"
            paragraph="consectetur adipisicing elit. Eius vero sequi magni, dolores sim"
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Constant Updates"
            paragraph="consectetur adipisicing elit. Eius vero sequi magni, dolores sim"
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Title*"
            paragraph="consectetur adipisicing elit. Eius vero sequi magni, dolores sim"
            exploretopic="Value"
          />
        </div>
      </section>

      <Contactpanel />
    </div>
  );
};

export default Home;
