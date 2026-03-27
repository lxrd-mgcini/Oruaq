import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import MainLayout from "@/layout/MainLayout";
import { emailSignupMutationFn } from "@/services/API";
import { emailSignupType } from "@/types/API.type";
import { useMutation } from "@tanstack/react-query";

import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import confetti from "canvas-confetti"

export default function EmailSignup() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState<emailSignupType>({
    email: "",
  });

  const celebration = ()=>{
      const end = Date.now() + 4 * 1000 // 3 seconds
      const colors = ["#fff0d9", "#d9d9d99e", "#77736E", "#77736E"]
      const frame = () => {
        if (Date.now() > end) return
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 60,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
        })
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 60,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
        })
        requestAnimationFrame(frame)
      }
      frame()
    }

  const mutation = useMutation({
    mutationFn: emailSignupMutationFn,
    onSuccess: () => {
      toast.success("Email successfully registered");
      // Redirect or update global auth state here
      celebration()
      navigate("/");
    },
    onError: (error:any) => {
      console.error("Login failed", error);
      toast.error(error?.response?.data?.message);
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
    <div className="flex max-h-fit flex-col bg-gray-50">
      <Announcement />
      <Navbar />
      <div className="max-h-fit max-w-full pl-4 pr-4 sm:pl-8 sm:pr-8 pt-10 pb-5">
        <div className="mx-auto max-w-[400px] space-y-3 p-4 sm:space-y-6 sm:p-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold text-black">Don’t miss our launch</h1>
            <p className="font-light text-gray-500">Reserve your spot for launch deals</p>
          </div>

          <form className="space-y-6 pb-24" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-black">
                Email address
              </label>
              <Input
                className="w-full rounded-none border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                required
              />
              {/* {errors.email && <span>{errors?email.message}</span> */}
            </div>

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full rounded-none bg-black py-3 text-sm font-medium text-white hover:text-black hover:bg-brand"
            >
              {mutation.isPending ? "SIGNING UP..." : "SIGN UP"}
            </Button>

            
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
