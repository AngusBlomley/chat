/*
This component sends a request to the chatgpt API and 
we display the response in state in the chat.
we change the state of showWelcomeMessage to false and conditionally render the reponse instead.
*/

const ChatInput = () => {
  return (
    <input
      type="text"
      placeholder="Ask Anything"
      className="focus:outline-none focus:ring-0 focus:border-transparent caret-white text-white w-full"
    />
  );
};

export default ChatInput;
