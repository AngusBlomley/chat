import { useState } from "react";
import { Card } from "../components/ui/card";
import LoginForm from "../components/auth/loginForm";
import RegisterForm from "../components/auth/registerForm";

// TODO: check with the user session to see if the user is
// logged in or not. if authenticated then continue to app

// maybe add special invite code from email

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => {
    if (!showLogin) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  };

  return (
    <>
      <Card className="p-10 min-w-sm min-h-[50vh] relative">
        <img src="logo.png" alt="logo" className="h-24 w-24 self-center" />
        {showLogin ? <RegisterForm /> : <LoginForm />}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button
            onClick={toggleForm}
            className="hover:opacity-75 text-blue-500 font-semibold"
          >
            {!showLogin ? "Create an account" : "Login"}
          </button>
        </div>
      </Card>
    </>
  );
};

export default Auth;

// login/register page
// create forms/components for these
// connect to api
