// =====================
// TODO: Build Conversation List Component
// =====================

// 1. Create a new component called ConversationList
//    - This will display a list of conversation items using mock data.

// 2. Create a constant array called MOCK_CONVERSATIONS
//    - Each item should have an id and title, e.g.:
//      const MOCK_CONVERSATIONS = [
//        { id: 1, title: "Chat with GPT" },
//        { id: 2, title: "Project Ideas" },
//        { id: 3, title: "Daily Notes" }
//      ];

// 3. Inside the component, use .map() to render each conversation
//    - Each item should show the conversation title.

// 4. Add a toggle menu (button with "⋮" or similar) to each item
//    - When clicked, it should show basic options like:
//      - Rename
//      - Delete
//    - (You can use a basic dropdown or just show buttons below it for now)

// 5. Add a "New Conversation" button
//    - For now, this button can just log to the console or add a new mock item in state.

// 6. Style the component so it looks clean
//    - Use Tailwind or simple CSS to give spacing and make the list readable.

// BONUS (Optional):
// - Add state to highlight the selected conversation
// - Implement rename using a text input and save button

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
