const Userprompt = ({ text }) => {
  return (
    <div className = 'px-[2rem] lg:px-0 pt-[2.3rem] pb-8 bg-zinc-100 '>
      <p
        className=""
        style={{ paddingInline: `calc(50vw - var(--container-width) / 2)` }}
      >
        {`You: ${text}`}
      </p>
    </div>
  );
};

export default Userprompt;
