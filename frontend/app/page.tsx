import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <Industries />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <CTA />
      <Footer />
    </>
  );
}
