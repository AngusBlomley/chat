//TODO: Create and Render list of conversations
// import { Conversation, User } from "../../../types"
import { FiEdit } from "react-icons/fi";
const SideBar = () => {
  return (
    <>
      <div className="flex items-center justify-between align-middle">
        <h2 className="text-xl p-2">Conversations</h2>
        <button title="edit">
          <FiEdit size={36} className="hover:bg-neutral-600 rounded-md p-2" />
        </button>
      </div>
      <ul></ul>
    </>
  );
};

export default SideBar;
