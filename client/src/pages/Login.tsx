import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import MainLayout from "@/layout/MainLayout";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Announcement />
      <Navbar />
      <MainLayout>
        <LoginForm />
      </MainLayout>

      <Footer />
    </div>
  );
}
