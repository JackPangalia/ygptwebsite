import Image from "next/image";
import Link from "next/link";
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";

const Home = () => {
  return (
    <div className="px-[8rem] pt-[8rem]">
      {/* <Navbar /> */}
      <h1 className="text-7xl mt-20 font-semibold">Catch Phrase *</h1>
      <h3 className="text-2xl ml-auto w-1/2 mt-20 text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        fugiat praesentium odit aliquid explicabo? Nulla, veritatis perferendis!
        Odit, quisquam explicabo.
      </h3>

      <section className="w-full">
        <h2 className="text-5xl my-20">Our Services</h2>
        <div className="flex justify-strech gap-14">
          <Keypoint
            link = 'offerings/businessanalyst'
            title="Analyst Assistant"
            paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing."
            exploretopic=""
          />
          <Keypoint
            link = '#'
            title="Educational Assistant"
            paragraph="Lorem ipsum dolor sit amet consectetur."
            exploretopic=""
          />
          <Keypoint
            link = '#'
            title="Personal Assistant"
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
          <h2 className="my-20 text-7xl ml-auto w-fit">AI Inovated</h2>
          <p className="text-2xl text-gray-500 text-right">
            Lorem ipsum dolor, ng elit. Ipsum sunt quis autem quaerat ex iste
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

        <div className="flex justify-strech gap-14">
          <Keypoint
            link = '#'
            title="General & Specific Knowledge"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius vero sequi magni, dolores similique delectus."
            exploretopic="Knowledge base"
          />
          <Keypoint
            link = '#'
            title="Fine Tuning"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius"
            exploretopic="Fine Tuning"
          />
          <Keypoint
            link = '#'
            title="Multi-Layered Security and Data"
            paragraph="et, consectetur adipisicing elit. Eius vero sequi magni, dolores similique delec lor sit amet,"
            exploretopic="Security"
          />
          <Keypoint
            link = '#'
            title="Day One Value"
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
