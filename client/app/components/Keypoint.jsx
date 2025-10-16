const Keypoint = ({ title, paragraph }) => {
  return (
    <article className="min-w-[22rem] flex flex-col sm:py-0 py-10">
      <h3 className="text-2xl font-normal mb-2">{title}</h3>
      <p className="py-4 text-gray-700 leading-relaxed">{paragraph}</p>
    </article>
  );
};

export default Keypoint;