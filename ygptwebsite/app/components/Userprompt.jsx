const Userprompt = ({text}) => {
  return (
    <p
      className="bg-zinc-100 p-8"
      style={{ paddingInline: `calc(50vw - var(--container-width) / 2)` }}
    >
      {`You: ${text}`}
    </p>
  );
};

export default Userprompt;
