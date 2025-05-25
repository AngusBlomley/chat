import { useState } from 'react';
import { Card } from '../components/ui/card';
import LoginForm from '../components/auth/loginForm';
import RegisterForm from '../components/auth/registerForm';
import { motion } from 'motion/react';
import styled from 'styled-components';

// TODO: check with the user session to see if the user is
// logged in or not. if authenticated then continue to app

// maybe add special invite code from email

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Card>
        <Logo src='logo.png' alt='logo' className='h-24 w-24 self-center' />
        {showLogin ? <RegisterForm /> : <LoginForm />}

        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setShowLogin(!showLogin)}
          className='hover:opacity-75 text-blue-500 font-semibold'
        >
          {!showLogin ? 'Create an account' : 'Login'}
        </Button>
      </Card>
    </>
  );
};

const Button = styled(motion.button)`
  color: hsl(200deg 60% 30%);
  position: absolute;
  bottom: 100px;
  left: 50%;
  display: inline-block;
  width: 300px;
  transform: translateX(-50%);
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
`;

export default Auth;

// login/register page
// create forms/components for these
// connect to api
