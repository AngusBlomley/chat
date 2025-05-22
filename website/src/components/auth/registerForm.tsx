import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardHeader } from "../ui/card";

const RegisterForm = () => {
  return (
    <>
      <CardHeader className="font-semibold">Create an account.</CardHeader>
      <form className="flex-col flex space-y-2" action="">
        <Input title="email" type="email" placeholder="Email..." />
        <Input title="password" type="password" placeholder="Password..." />
        <Input
          title="password"
          type="password"
          placeholder="Verify Password..."
        />
        <Button>Create Account</Button>
      </form>
    </>
  );
};

export default RegisterForm;
