import About from "@/components/HomePage/aboutUs/About";
import FeaturedProperties from "@/components/HomePage/featured/FeaturedProperties";
import Hero from "@/components/HomePage/Hero/Hero";
import HomebuyingSteps from "@/components/HomePage/homeBuyingSteps/homebuying-steps";
import LocationShowcase from "@/components/HomePage/locationShowcase/location-showcase";
import InteractivePropertyShowcase from "@/components/HomePage/property-showcase/interactive-property-showcase";
import ParallaxStatsSection from "@/components/HomePage/stats-section/parallax-stats-section";
import TestimonialsSection from "@/components/HomePage/testimonials/testimonials-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProperties />
      <ParallaxStatsSection />
      <InteractivePropertyShowcase />
      <LocationShowcase />
      <HomebuyingSteps />
      <TestimonialsSection />
    </div>
  );
}
