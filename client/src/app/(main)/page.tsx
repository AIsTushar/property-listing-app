import About from "@/components/homePage/aboutUs/About";
import FeaturedProperties from "@/components/homePage/featured/FeaturedProperties";
import Hero from "@/components/homePage/Hero/Hero";
import HomebuyingSteps from "@/components/homePage/homeBuyingSteps/homebuying-steps";
import LocationShowcase from "@/components/homePage/locationShowcase/location-showcase";
import InteractivePropertyShowcase from "@/components/homePage/property-showcase/interactive-property-showcase";
import ParallaxStatsSection from "@/components/homePage/stats-section/parallax-stats-section";
import TestimonialsSection from "@/components/homePage/testimonials/testimonials-section";

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
