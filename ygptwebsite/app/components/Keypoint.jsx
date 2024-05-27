import Link from "next/link";

const Keypoint = ({ title, paragraph, exploretopic, link }) => {
  return (
    <Link href={link} className={`w-[22rem] flex flex-col justify-between`}>
      <h4 className="text-2xl">{title}</h4>
      <p className="py-4">{paragraph}</p>
      <span href="#" className=" border-gray-500 border-b-[1px] text-gray-500 w-fit">
        Explore {`${exploretopic}`}
      </span>
    </Link>
  );
};

export default Keypoint;