import SideBar from "../components/SideBar";
import ChatInput from "../components/ChatInput";

const Chat = () => {
  return (
    <div className="bg-zinc-800 h-screen w-screen">
      <SideBar />
      <ChatInput />
    </div>
  );
};

export default Chat;
