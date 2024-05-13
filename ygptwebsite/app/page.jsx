import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-7xl mt-20 font-semibold">AI Crafted For You</h1>
      <h3 className="text-2xl ml-auto w-1/2 mt-20 text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        fugiat praesentium odit aliquid explicabo? Nulla, veritatis perferendis!
        Odit, quisquam explicabo.
      </h3>

      <section className="w-full">
        <h2 className="text-4xl my-20">Our Services</h2>
        <div className="flex justify-strech gap-14">
          <div className="w-[22rem] flex flex-col justify-between">
            <h4 className="text-lg font-semiboldp">Business Assistant</h4>
            {/* <Image
              className="w-full max-h-[24rem] object-cover rounded"
              src="/documenttyping.jpg"
              alt="business-img"
              width="1000"
              height="1000"
            /> */}
            <p className="py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <Link href="#" className="overline w-fit">
              explore
            </Link>
          </div>
          <div className=" w-[22rem] flex flex-col justify-between">
            <h4 className=" text-lg font-semibold">Educational Assistant</h4>
            <p className="py-4">Lorem ipsum dolor sit amet consectetur.</p>
            <Link href="#" className="overline w-fit">
              explore
            </Link>
          </div>
          <div className=" w-[22rem] flex flex-col justify-between">
            <h4 className="text-lg font-semibold">Personal Assistant</h4>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
              praesentium.
            </p>
            <Link href="#" className="overline w-fit">
              explore
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full flex">

        <Image className = 'w-1/2 my-20 mr-20 rounded' src = '/aichatbotanimated.png' alt = 'aichatbot-img' width = '1920' height = '1080' />

        <div className = 'w-1/2'>
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

      <section className="w-full">
        <h2 className="my-20 text-4xl w-1/3">
          What Makes KGPT Platforms So Powerful
        </h2>
      </section>

      {/* <Image className = 'w-full mt-20 object-cover h-[80vh]' src = '/manwalking.jpg' width = '2000' height = '2000' alt = 'lander-img'/> */}
    </>
  );
};

export default Home;
