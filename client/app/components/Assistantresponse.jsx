const Assistantresponse = ({text}) => {
  return (
    <>
      <p
        className="p-3 mx-[2rem] lg:mx-0"
        style={{ paddingInline: `calc(50vw - var(--container-width) / 2)` }}
      >
        {text}
      </p>
    </>
  );
};

export default Assistantresponse;
