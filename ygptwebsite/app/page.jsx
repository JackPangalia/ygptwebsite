import Image from "next/image";
import Link from "next/link";
import Keypoint from "./components/Keypoint";
import Contactpanel from "./components/contactpanel";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="pt-[8rem]">
        {/* <Navbar /> */}
        <h1 className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl mt-20 font-semibold lg:px-[8rem] md:px-[6rem] sm:px-[4rem] px-[2rem]">
          AI Tailored For Your Business
        </h1>
        <h3 className="text-2xl ml-auto w-1/2 mt-20 text-gray-500 pr-[8rem]">
          Unlock your business's potential with our custom AI solutions.
          Tailored to meet your unique needs, our expert team ensures seamless
          implementation and enhanced productivity. Experience AI done right,
          with a focus on quality and results.
        </h3>
        <section className="bg-black py-32 mt-40 text-white px-[8rem]">
          <h2 className="text-5xl" id="services">
            Our Services
          </h2>
          <div className="flex gap-12 mt-16">
            <div className="bg-red-300 w-[20rem] h-[22rem] justify-between flex flex-col text-black p-8">
              <h4 className="text-white text-3xl">Chat Bot Development</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                tempora quis ut sit expedita iure.
              </p>
              <Link href = '/chatbot' className="text-xl bg-black w-fit text-white px-4 py-2 ">
                Learn More
              </Link>
            </div>

            <div className="bg-blue-300 w-[20rem] h-[22rem] justify-between flex flex-col text-black p-8">
              <h4 className="text-white text-3xl">
                Autonomous Agent Development
              </h4>
              <p className="text-lg">
                Lorem ipsum dolor sitta iure. Lorem ipsum dolor sittaLorem ipsum
                dolor sitta s
              </p>
              <button className="text-xl bg-black w-fit text-white px-4 py-2 ">
                Learn More
              </button>
            </div>

            <div className="bg-green-300 w-[20rem] h-[22rem] justify-between flex flex-col text-black p-8">
              <h4 className="text-white text-3xl">Enterprise Consoluting</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                tempora quis ut siita iure.
              </p>
              <button className="text-xl bg-black w-fit text-white px-4 py-2 ">
                Learn More
              </button>
            </div>

            <div className="bg-purple-300 w-[20rem] h-[22rem] justify-between flex flex-col text-black p-8">
              <h4 className="text-white text-3xl">Data Analysis</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                tempora quis ut siita iure.
              </p>
              <button className="text-xl bg-black w-fit text-white px-4 py-2 ">
                Learn More
              </button>
            </div>
          </div>
        </section>
        <section className="w-full px-[8rem]" id="benifits">
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

        {/* <section className="w-full flex mt-20 px-[8rem]">
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
      </section> */}

        <section className="w-full border-b-[1px] border-black pb-24 px-[8rem]">
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

      <Footer />
    </>
  );
};

export default Home;
