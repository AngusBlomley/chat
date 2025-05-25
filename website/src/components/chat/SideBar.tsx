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

import styled from 'styled-components';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { motion } from 'motion/react';

const promptList = [];

const SideBar = () => {
  const [list, setList] = useState(false);
  const [count, setCount] = useState(1);

  const addItemHandler = () => {
    setCount(previousCount => previousCount + 1);

    promptList.push(`Prompt ${count}`);
    setList(true);
  };

  return (
    <Wrapper>
      <Details>
        <Heading>Conversations</Heading>
        <Button onClick={addItemHandler} title='edit'>
          <FiEdit size={36} className='hover:bg-neutral-600 rounded-md p-2' />
        </Button>
      </Details>
      <List>
        {list &&
          promptList.map((item, index) => {
            return (
              <ListEl
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={item}
              >
                {item}
              </ListEl>
            );
          })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: hsl(200deg 10% 10%);
  color: white;
  padding: 30px;
  width: 400px;
  /* border-right: 5px solid hsl(200deg 10% 80%); */
`;

const Details = styled.section`
  display: flex;
  margin-top: 30px;
  gap: 30px;
  margin-bottom: 30px;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  background-color: transparent;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  font-size: 16px;
  margin-left: -30px;
  margin-right: -30px;
  padding-left: 0;
`;

const ListEl = styled(motion.li)`
  /* background-color: hsl(200deg 10% 95%); */
  color: hsl(200deg 10% 90%);
  padding: 10px;
  padding-left: 30px;
  border-bottom: 1px solid hsl(200deg 10% 60%);
`;

export default SideBar;
