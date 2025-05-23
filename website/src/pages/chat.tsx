import SideBar from "../components/chat/SideBar";
import ChatInput from "../components/chat/ChatInput";
import OptionsMenu from "../components/chat/OptionsMenu";
import { useState } from "react";

const Chat = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [chat, setChat] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen w-full relative flex flex-col">
      <OptionsMenu />

      <div className="hidden md:block md:fixed md:top-0 md:left-0 md:w-64 h-full bg-zinc-100  p-4">
        <SideBar />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center min-w-xl max-w-xl px-4 pt-20">
        {showWelcomeMessage ? (
          <h1 className="text-2xl text-center">What can I help you with?</h1>
        ) : (
          <div className="w-full space-y-4">
            {loading && <span className="text-sm">loading...</span>}
            <p className="text-left duration-200">{chat}</p>
          </div>
        )}
      </div>

      <div
        className={`fixed w-full md:w-[calc(100%-16rem)] max-w-3xl left-1/2 transform -translate-x-1/2 px-4 ${
          showWelcomeMessage ? "bottom-36" : "bottom-4"
        }`}
      >
        <div className="bg-neutral-100 rounded-3xl pl-5 pr-2 py-2">
          <ChatInput
            setChat={setChat}
            setShowWelcomeMessage={setShowWelcomeMessage}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
