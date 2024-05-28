const Keypoint = ({ title, paragraph }) => {
  return (
    <div className={`min-w-[22rem] flex flex-col justify-between sm:py-0 py-4`}>
      <h4 className="text-2xl">{title}</h4>
      <p className="py-4">{paragraph}</p>
    </div>
  );
};

export default Keypoint;