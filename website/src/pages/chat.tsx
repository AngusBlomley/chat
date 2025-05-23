import SideBar from "../components/chat/SideBar";
import ChatInput from "../components/chat/ChatInput";
import OptionsMenu from "../components/chat/OptionsMenu";
import { useState } from "react";
// import { Conversation, User } from "../../../types"

// parent component, get the data from mongo on mount.

const Chat = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  return (
    <div className="bg-zinc-800 h-screen w-screen relative">
      <OptionsMenu />
      <div className="h-full w-[300px] bg-zinc-900 fixed top-0 left-0 text-white p-4">
        <SideBar />
      </div>
      <div className="text-white h-screen w-screen pl-80 flex justify-center items-center">
        {showWelcomeMessage ? (
          <div>
            <h1 className="text-2xl">What can I help you with?</h1>
          </div>
        ) : (
          <div>
            <div></div>
          </div>
        )}
      </div>
      <div
        className={`fixed rounded-4xl bg-neutral-700 min-w-3xl px-5 py-4 ${
          showWelcomeMessage ? "bottom-96" : "bottom-4"
        } ml-88 translate-x-1/2`}
      >
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
