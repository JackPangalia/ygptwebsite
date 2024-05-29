const ChatResponseLoading = () => {
  return (
    <div className="p-3 lg:mx-0 mx-[2rem]" style={{ paddingInline: `calc(50vw - var(--container-width) / 2)` }}>
      <div class="loader"></div>
    </div>
  );
};

export default ChatResponseLoading;
