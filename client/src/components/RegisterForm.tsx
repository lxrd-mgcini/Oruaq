import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto max-w-[400px] space-y-6 p-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-black">My Account</h1>
        <p className="font-medium text-gray-500">Register</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-none border-gray-300 focus:border-gray-500 focus:ring-gray-500"
          />
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
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          REGISTER
        </Button>

        <p className="text-center text-sm text-gray-600">
          {"Already have an account? "}
          <Link
            to="/login"
            className="font-semibold text-black hover:underline"
          >
            Login now.
          </Link>
        </p>
      </form>
    </div>
  );
}
