import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardHeader } from "../ui/card";
import axios from "axios";
import { useState, type FormEvent } from "react";
import { TOKEN } from "../../storageKeys";
import { useNavigate } from "react-router-dom";

//  Todo: - handle form validation

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    _id?: string;
    username: string;
    email: string;
    createdAt?: string;
  };
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post<LoginResponse>(
        "http://localhost:3000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      localStorage.setItem(TOKEN, res.data.token);
      navigate("/chat");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CardHeader className="font-semibold">Welcome back!</CardHeader>
      <form className="flex-col flex space-y-2" onSubmit={handleSubmit}>
        <Input
          title="email"
          type="email"
          placeholder="Enter email..."
          autoComplete="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          title="password"
          type="password"
          placeholder="Enter password..."
          autoComplete="suggested-password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button>Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
