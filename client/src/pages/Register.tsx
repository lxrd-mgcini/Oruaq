import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { RegisterForm } from "@/components/RegisterForm";
import MainLayout from "@/layout/MainLayout";

export default function Register() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Announcement />
      <Navbar />
      <MainLayout>
        <RegisterForm />
      </MainLayout>

      <Footer />
    </div>
  );
}
