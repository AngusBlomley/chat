import SideBar from '../components/chat/SideBar';
import ChatInput from '../components/chat/ChatInput';
import OptionsMenu from '../components/chat/OptionsMenu';
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';

const Chat = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [chat, setChat] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <OptionsMenu />
      <SideBar />
      <Main>
        <Question>
          {showWelcomeMessage ? (
            <Heading>What can I help you with?</Heading>
          ) : (
            <ChatBox>
              {loading && <Loading>loading...</Loading>}
              <Paragraph>{chat}</Paragraph>
            </ChatBox>
          )}
        </Question>
        <ChatInput
          setChat={setChat}
          setShowWelcomeMessage={setShowWelcomeMessage}
          setLoading={setLoading}
        />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  color: black;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled.main`
  padding: 30px;
  margin: 0 auto;
`;

const Question = styled.div``;
const Heading = styled.h1`
  font-size: 25px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 90px;
`;
const ChatBox = styled.div`
  font-size: 16px;
`;
const Paragraph = styled.p`
  font-size: 14px;
`;
const Loading = styled.span`
  font-size: 12px;
`;

export default Chat;
