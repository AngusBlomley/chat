import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardHeader } from "../ui/card";

const LoginForm = () => {
  return (
    <>
      <CardHeader className="font-semibold">Welcome back!</CardHeader>
      <form className="flex-col flex space-y-2" action="">
        <Input
          title="email"
          type="email"
          placeholder="Email..."
          autoComplete="email"
        />
        <Input
          title="password"
          type="password"
          placeholder="Password..."
          autoComplete="suggested-password"
        />
        <Button>Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
