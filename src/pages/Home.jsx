import React from "react";
import Navbar from "../components/steady-yield/Navbar";
import HeroSection from "../components/steady-yield/HeroSection";
import TrustBar from "../components/steady-yield/TrustBar";
import HowItWorks from "../components/steady-yield/HowItWorks";
import LandlordsSection from "../components/steady-yield/LandlordsSection";
import CommercialSection from "../components/steady-yield/CommercialSection";
import InspectionsSection from "../components/steady-yield/InspectionsSection";
import TenantsSection from "../components/steady-yield/TenantsSection";
import TestimonialsSection from "../components/steady-yield/TestimonialsSection";
import ContactSection from "../components/steady-yield/ContactSection";
import Footer from "../components/steady-yield/Footer";

const IMAGES = {
  hero: "https://media.base44.com/images/public/69d516936e59faa54b8f3315/aaa8f062a_generated_e7a02d81.png",
  landlords: "https://media.base44.com/images/public/69d516936e59faa54b8f3315/6eedf3ceb_generated_35c12b82.png",
  commercial: "https://media.base44.com/images/public/69d516936e59faa54b8f3315/36516a81a_generated_d8079cd1.png",
  testimonials: "https://media.base44.com/images/public/69d516936e59faa54b8f3315/f41f67635_generated_fd378930.png",
  inspections: "https://media.base44.com/images/public/69d516936e59faa54b8f3315/b25647f70_generated_17d68ed8.png",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <TrustBar />
      <HowItWorks />
      <LandlordsSection image={IMAGES.landlords} />
      <CommercialSection image={IMAGES.commercial} />
      <InspectionsSection image={IMAGES.inspections} />
      <TenantsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}