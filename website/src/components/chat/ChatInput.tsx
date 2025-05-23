/*
This component sends a request to the chatgpt API and 
we display the response in state in the chat.
we change the state of showWelcomeMessage to false and conditionally render the reponse instead.
*/
import { useState } from "react";
import { IoArrowUpCircle } from "react-icons/io5";
import axios from "axios";

interface ChatProps {
  setChat: (chat: string) => void;
  setShowWelcomeMessage: (showWelcomeMessage: boolean) => void;
  setLoading: (loading: boolean) => void;
}

const ChatInput = ({
  setChat,
  setShowWelcomeMessage,
  setLoading,
}: ChatProps) => {
  const [prompt, setPrompt] = useState("");

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/chatGPT", {
        prompt,
      });

      setLoading(false);
      setShowWelcomeMessage(false);
      setChat(res.data.text);
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandler = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Ask Anything"
        className="focus:outline-none focus:ring-0 focus:border-transparent w-full"
      />
      <button title="send" onClick={sendMessage}>
        <IoArrowUpCircle size={36} color="black" className="hover:opacity-70" />
      </button>
    </div>
  );
};

export default ChatInput;
