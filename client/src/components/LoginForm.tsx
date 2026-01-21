import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { z } from "zod";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  // const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/v1/auth/login",
        data,
      );

      if (response.data.success) {
        navigate("/products");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // const formSchema = z.object({
  //   email: z.string().trim().email("Invalid email address").min(1, {
  //     message: "Email is required",
  //   }),
  //   password: z.string().trim().min(1, {
  //     message: "Password is required",
  //   }),
  // });

  return (
    <div className="mx-auto max-w-[400px] space-y-3 p-4 sm:space-y-6 sm:p-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-black">My Account</h1>
        <p className="font-medium text-gray-500">Login</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email address
          </label>
          <Input
            {...register("email", { required: "Email is required" })}
            className="w-full rounded-none border-gray-300 focus:border-gray-500 focus:ring-gray-500"
          />
          {/* {errors.email && <span>{errors?email.message}</span> */}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="password" className="flex text-sm text-gray-700">
              Password
            </label>
            <a
              href="#"
              className="text-sm font-semibold text-black hover:text-gray-900 hover:underline"
            >
              Forgot Password
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
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

        <Button
          type="submit"
          className="w-full rounded-none bg-black py-3 text-sm font-medium text-white hover:bg-gray-900"
        >
          LOGIN
        </Button>

        <p className="text-center text-sm text-gray-600">
          {"Don't have an account? "}
          <Link
            to="/register"
            className="font-semibold text-black hover:underline"
          >
            Register now.
          </Link>
        </p>
      </form>
      <Link to="/admin" className="font-semibold text-black hover:underline">
        Aunty, click here to see the dashboard.
      </Link>
    </div>
  );
}
