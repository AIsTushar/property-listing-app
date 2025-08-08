import About from "@/components/HomePage/aboutUs/About";
import FeaturedProperties from "@/components/HomePage/featured/FeaturedProperties";
import Hero from "@/components/HomePage/Hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProperties />
    </div>
  );
}
