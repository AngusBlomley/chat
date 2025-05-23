const ChatInput = () => {
  return (
    <div className="fixed rounded-4xl bg-neutral-700 min-w-3xl px-5 py-4 bottom-4 left-4/12">
      <input
        type="text"
        placeholder="Ask Anything"
        className="focus:outline-none focus:ring-0 focus:border-transparent caret-white text-white w-full"
      />
    </div>
  );
};

export default ChatInput;
