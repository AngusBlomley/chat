import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';
import { motion } from 'motion/react';

const OptionsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Button title='Options Menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Icon size={36} />
      {isMenuOpen && (
        <ButtonWrapper
          initial={{ scale: 0, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <List>
            <ListEl>Signout</ListEl>
            <ListEl>Options</ListEl>
          </List>
        </ButtonWrapper>
      )}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  margin: 0 auto;
  top: 60px;
  right: 30px;
  cursor: pointer;
  background-color: transparent;
  color: hsl(200deg 10% 30%);
  outline: none;
  border: none;
`;

const ButtonWrapper = styled(motion.div)`
  border-radius: 10px;
  text-align: center;
  position: fixed;
  right: 30px;
  top: 20px;
  min-width: 400px;
  border: none;
  outline: none;
  background-color: hsl(200deg 10% 10%);
  color: white;
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  font-size: 16px;
  padding: 0;
  margin: 0;
`;

const Icon = styled(RxHamburgerMenu)`
  color: hsl(200deg 10% 30%);
`;

const ListEl = styled.li`
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;

  &:hover {
    background-color: hsl(200deg 10% 50%);
  }
`;

export default OptionsMenu;
