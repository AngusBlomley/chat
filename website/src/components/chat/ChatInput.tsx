/*
This component sends a request to the chatgpt API and 
we display the response in state in the chat.
we change the state of showWelcomeMessage to false and conditionally render the reponse instead.
*/
import { useState } from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'motion/react';

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
  const [prompt, setPrompt] = useState('');

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/api/chatGPT', {
        prompt,
      });

      setLoading(false);
      setShowWelcomeMessage(false);
      setChat(res.data.text);
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandler = e => {
    setPrompt(e.target.value);
  };

  return (
    <Wrapper>
      <TextInput
        type='text'
        onChange={onChangeHandler}
        placeholder='Ask Anything'
      />
      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.3 }}
        title='send'
        onClick={sendMessage}
      >
        <Icon size={36} />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: hsl(200deg 10% 97%);

  border-radius: 10px;
  padding: 10px;
`;

const TextInput = styled.input`
  padding: 20px;
  width: 600px;
  border: none;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

const Button = styled(motion.button)`
  border: none;
  justify-self: flex-end;
  cursor: pointer;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  justify-content: center;

  align-items: center;
  background-color: transparent;
`;

const Icon = styled(IoArrowUpCircle)`
  color: hsl(200deg 100% 10%);

  &:hover {
    color: hsl(200deg 100% 20%);
  }
`;

export default ChatInput;
