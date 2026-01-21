import Announcement from "../components/Announcement";

import Catagories from "../components/Catagories";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";

import PopularProducts from "../components/Lists/Popular";
import NewProducts from "../components/Lists/New";
import Features from "../components/Lists/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative max-w-full">
      <div className="sticky top-0 bg-white z-20">
        <Announcement />
        <Navbar />
      </div>
      
      <MainLayout>
        <Hero />
        <Catagories />
        <PopularProducts />
        <NewProducts />
        <Features />
      </MainLayout>
      <Footer />
    </div>
  );
}
