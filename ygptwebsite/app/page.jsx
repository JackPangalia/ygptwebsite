import Image from "next/image";
import Link from "next/link";
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";

const Home = () => {
  return (
    <div className="pt-[8rem] px-[8rem]">
      {/* <Navbar /> */}
      <h1 className="text-9xl mt-20 font-semibold">AI Tailored For Your Business</h1>
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
            title="Enhance Decision-Making"
            paragraph="Leverage data-driven insights and real-time analytics for better strategic decisions."
            exploretopic=""
          />
          <Keypoint
            link="#"
            title="Foster Innovation"
            paragraph="Gain a competitive edge by developing new products and services using AI insights."
            exploretopic=""
          />
        </div>
      </section>

      <section className="w-full flex mt-20">
        <Image
          className="w-1/2 my-20 mr-20 rounded object-cover"
          src="/aichatbotanimated.png"
          alt="aichatbot-img"
          width="2500"
          height="2500"
        />

        <div className="w-full">
          <h2 className="my-10 text-7xl ml-auto w-fit">About Title*</h2>
          <p className="text-2xl text-gray-500 text-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit a
            dignissimos qui aspernatur animi repellat officia illum dolorum et.
            Nihil autem aperiam vero harum fuga deleniti dolor consectetur
            laborum inventore optio neque unde exercitationem, expedita, nam
            corporis, omnis numquam enim officiis qui? Consequatur dolore
            exercitationem quas veritatis eaque, non, tempora aperiam optio
            velit reiciendis iure. Commodi velit dolor dolorem aspernatur rem a
            quae enim cumque? Natus voluptatibus et dolorum quasi aliquid
            maiores ab beatae quo. Eaque mollitia architecto dolorem illum
            aliquam similique iste impedit? Magni deleniti voluptate nesciunt
            eveniet!
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
            paragraph="Our Model Tuning service optimises your chatbot for precise, responsive, and accurate interactions."
            exploretopic="Fine Tuning"
          />
          <Keypoint
            link="#"
            title="Multi-Layered Security and Data"
            paragraph="Custom AI platforms ensure security with robust encryption, strict access controls, and continuous monitoring to protect sensitive data."
            exploretopic="Security"
          />
          <Keypoint
            link="#"
            title="Day One Value"
            paragraph="Our platforms are made to be used right away, not months, but days."
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Industry Leading AI"
            paragraph="Get access to the latest and greatest AI tech within your platform"
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Proprietary & Tailored Platforms"
            paragraph="We build your solution from the ground up to handle your businesses needs"
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Constant Updates"
            paragraph="We always looking for ways to better your custom AI experience "
            exploretopic="Value"
          />
          <Keypoint
            link="#"
            title="Full Integration"
            paragraph="Our solutions have the scalability to potentially cover you business head to toe "
            exploretopic="Value"
          />
        </div>
      </section>

      <Contactpanel />
    </div>
  );
};

export default Home;
