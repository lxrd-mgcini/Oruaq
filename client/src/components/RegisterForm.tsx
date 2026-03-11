import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { loginType, registerType } from "@/types/API.type";
import { useMutation } from "@tanstack/react-query";
import { loginMutationFn, registerMutationFn } from "@/services/API";
import { toast } from "sonner";
// import { z } from "zod";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  const [formData, setFormData] = useState<registerType>({
    email: "",
    password: "",
    username:""
  });

  const mutation = useMutation({
    mutationFn: registerMutationFn,
    onSuccess: (response) => {
      toast.success("Account registration successful")
      // Redirect or update global auth state here
      navigate('/login')
    },
    onError: (error) => {
      console.error("Account Registration failed", error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 2. Trigger the mutation with the form object
    mutation.mutate(formData);
  };

  return (
    <div className="mx-auto max-w-[400px] space-y-3 p-4 sm:space-y-6 sm:p-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-black">My Account</h1>
        <p className="font-medium text-gray-500">Register</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email address
          </label>
          <Input
            className="w-full rounded-none border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* {errors.email && <span>{errors?email.message}</span> */}
        </div>
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm text-gray-700">
            Username
          </label>
          <Input
            className="w-full rounded-none border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {/* {errors.email && <span>{errors?email.message}</span> */}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="password" className="flex text-sm text-gray-700">
              Password
            </label>
            {/* <a
              href="#"
              className="text-sm font-semibold text-black hover:text-gray-900 hover:underline"
            >
              Forgot Password
            </a> */}
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-none border-gray-300 pr-10 focus:border-gray-500 focus:ring-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" disabled={mutation.isPending} className="w-full rounded-none bg-black py-3 text-sm font-medium text-white hover:bg-gray-900">
          {mutation.isPending ? 'REGISTERING ...' : 'REGISTER'}
        </Button>

        <p className="text-center text-sm text-gray-600">
          {"Already have an account? "}
          <Link
            to="/login"
            className="font-semibold text-black hover:underline"
          >
            Login.
          </Link>
        </p>
      </form>
    </div>
  );
}
