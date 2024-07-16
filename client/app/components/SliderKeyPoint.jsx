const SliderKeyPoint = ({title, paragraph}) => {
  return (
    <div
      className={`min-w-[20rem] flex flex-col justify-between py-10 sm:pl-0 pl-10`}
    >
      <h4 className="text-2xl">{title}</h4>
      <p className="py-4">
        {paragraph}
      </p>
    </div>
  );
};

export default SliderKeyPoint