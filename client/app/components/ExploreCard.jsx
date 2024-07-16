import Link from "next/link";
import Image from "next/image";

const ExploreCard = ({title, paragraph, link, imagePath, imageHeight}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-zinc-200 border-[1px] flex flex-col">
      <h2 className="text-2xl mb-2">{title}</h2>
      <p className="w-full md:w-3/4 mb-10">
        {paragraph}
      </p>
      <Link
        href={link}
        className="border-black border-[1px] px-4 py-2 hover:bg-black hover:text-white transition-colors duration-200 w-fit mb-6"
      >
        Explore
      </Link>

      <div className="mt-auto">
        <Image
          className={`rounded-xl w-full h-[${imageHeight}] object-cover`}
          src={imagePath}
          alt="water motion image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ExploreCard