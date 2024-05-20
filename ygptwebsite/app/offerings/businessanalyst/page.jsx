import Image from "next/image";
import Contactpanel from "@/app/components/contactpanel";

const businessanalyst = () => {
  return (
    <div className="p-[8rem]">
      <div className="flex my-20">
        <h1 className="text-7xl w-[60%]">Analyst Assistant</h1>
        <p className="w-[40%] text-2xl">
          *********INTRO PARAGRAPH**********. Dignissimos,
          vitae? Quisquam saepe perferendis porro magni vel veniam nihil tempore
          vero.
        </p>
      </div>

      <Image
        className="rounded"
        src="/nightskyline.jpg"
        alt="nightcityskyline"
        width="1920"
        height="1080"
      />

      <section className="w-full">
        <h2 className="text-5xl my-20">Benifits</h2>
        <div className="flex justify-stretch gap-14">
          <div className="w-[22rem]">
            <h4 className="text-2xl mb-4">Benifit One*</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, optio.
            </p>
          </div>
          <div className="w-[22rem]">
            <h4 className="text-2xl mb-4">Benifit Two*</h4>
            <p>
              Lorem ipfsum dolor sit amet consecteturtetur adi consectetetur adi
              consectetetur adi consecte adi consectetur adipisicing episicing
              elit. Perferendis, optio.
            </p>
          </div>
          <div className="w-[22rem]">
            <h4 className="text-2xl mb-4">Benifit Three*</h4>
            <p>Lorem ipsum dolor sit ametlit. Perferendis, optio.</p>
          </div>
          <div className="w-[22rem]">
            <h4 className="text-2xl mb-4">Benifit Four*</h4>
            <p>Lorem ipsum dolor sit ametlit. Perferendis, optio.</p>
          </div>
        </div>
      </section>

      <article className="">
        <div className="flex justify-between mb-20 mt-44">
          <span className="text-xl text-gray-500 font-semibold">
            <svg
              viewBox="0 0 640 512"
              fill="currentColor"
              height="1.3em"
              width="1.3em"
              className = 'inline mr-2 mb-2'
            >
              <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0l-23.6 47.8-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z" />
            </svg>
            Fueling Exalence{" "}*
          </span>
          <h3 className="text-7xl text-right">Article Title*</h3>
        </div>
        <p className="text-2xl ml-auto text-right w-2/3">
         **************** ARTICLE ***************r adipisicing elit. Eveniet
          voluptatem voluptates ex sapiente iusto placeat ducimus esse neque
          quasi, soluta autem modi reiciendis doloremque dolor quaerat
          temporibus quidem quos obcaecati recusandae! Maiores culpa tempore,
          quam eum accusantium modi quia consectetur magni neque. Perferendis
          inventore qui id consectetur facere molestiae magnam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatem voluptates ex sapiente iusto placeat ducimus esse neque
          quasi, soluta autem modi reiciendis doloremque dolor quaerat
          temporibus quidem quos obcaecati recusandae! Maiores culpa tempore,
          quam eum accusantium modi quia consectetur magni neque. Perferendis
          inventore qui id consectetur facere molestiae magnam!
        </p>
      </article>
    </div>
  );
};

export default businessanalyst;
