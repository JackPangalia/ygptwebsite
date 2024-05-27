const Assistantresponse = ({text}) => {
  return (
    <>
      <p
        className="p-3"
        style={{ paddingInline: `calc(50vw - var(--container-width) / 2)` }}
      >
        {text}
      </p>
    </>
  );
};

export default Assistantresponse;
