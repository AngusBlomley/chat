import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardHeader } from "../ui/card";
import { useState } from "react";
import axios from "axios";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const getPasswordErrors = (password: string): string[] => {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }

    if (password.length > 8 && password[0] !== password[0].toUpperCase()) {
      errors.push("Password must start with a capitol letter.");
    }

    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number");
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const username = formData.email.split("@")[0];
    const passwordErrors = getPasswordErrors(formData.password);
    const mismatchError = formData.password !== formData.confirmPassword;

    if (passwordErrors.length > 0 || mismatchError) {
      setErrors(true);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", {
        username,
        email: formData.email,
        password: formData.password,
      });
      console.log(res.data);
      setServerError("");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.error) {
        setServerError(err.response.data.error);
      } else {
        setServerError("An unexpected error occurred.");
      }
    }
  };

  const showMismatchError =
    errors &&
    formData.confirmPassword.length > 0 &&
    formData.password !== formData.confirmPassword;

  const passwordErrors = getPasswordErrors(formData.password);

  return (
    <>
      <CardHeader className="font-semibold">Create an account.</CardHeader>
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
          placeholder="Enter Password..."
          autoComplete="suggested-password"
          onBlur={() => setErrors(true)}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        {errors && passwordErrors.length > 0 && (
          <div className="text-sm text-red-400 space-y-1">
            {passwordErrors.map((err, i) => (
              <p key={i}>{err}</p>
            ))}
          </div>
        )}

        <Input
          title="password"
          type="password"
          placeholder="Verify Password..."
          autoComplete="suggested-password"
          onBlur={() => setErrors(true)}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />

        {showMismatchError && (
          <p className="text-sm text-red-400">Passwords do not match</p>
        )}

        <Button>Create Account</Button>
      </form>
      {serverError && <p className="text-sm text-red-500">{serverError}</p>}
    </>
  );
};

export default RegisterForm;
