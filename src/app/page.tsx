"use client"
import AirlinesSection from "@/components/airlines-section";
import AnalisicSection from "@/components/analisic-section";
import DeveloperSection from "@/components/developer-section";
import FooterSection from "@/components/footer-section";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import ImageMarqueeSection from "@/components/ImageMarqueeSection";
import LaptopScreenSection from "@/components/laptop-screen-section";
import PricingSection from "@/components/pricing-section";
import ServiceSection from "@/components/service-section";
import SignupFormDemo from "@/components/signup-form-demo";
import WaitlistSection from "@/components/waitlist-section";
 
export default function Home() {
 
  return (
 <div>
      <Header />
      <HeroSection />
      <AnalisicSection />
      <DeveloperSection />
      <LaptopScreenSection />
      <ImageMarqueeSection />
      <AirlinesSection />
      <ServiceSection />
      <SignupFormDemo />
      <WaitlistSection />
      <PricingSection />
      <FooterSection />
 </div>
  );
}

 