import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardHeader } from "../ui/card";

/*    Todo: - connect to backend
            - handle form validation
            - error handling
            - handleSubmit if successful redirect user to chat page
*/

const LoginForm = () => {
  return (
    <>
      <CardHeader className="font-semibold">Welcome back!</CardHeader>
      <form className="flex-col flex space-y-2" action="">
        <Input
          title="email"
          type="email"
          placeholder="Enter email..."
          autoComplete="email"
        />
        <Input
          title="password"
          type="password"
          placeholder="Enter password..."
          autoComplete="suggested-password"
        />
        <Button>Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
