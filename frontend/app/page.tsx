import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import PageTransition from "@/components/providers/PageTransition";

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="py-24" />,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="py-24" />,
});
const Industries = dynamic(() => import("@/components/Industries"), {
  loading: () => <div className="py-24" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <div className="py-24" />,
});
const Comparison = dynamic(() => import("@/components/Comparison"), {
  loading: () => <div className="py-24" />,
});
const ROICalculator = dynamic(() => import("@/components/ROICalculator"), {
  loading: () => <div className="py-24" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="py-24" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="py-24" />,
});
const Founder = dynamic(() => import("@/components/Founder"), {
  loading: () => <div className="py-24" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-16" />,
});

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <div className="section-divider" />
      <WhyNow />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <Industries />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <Comparison />
      <div className="section-divider" />
      <ROICalculator />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <CTA />
      <div className="section-divider" />
      <Founder />
      <Footer />
    </PageTransition>
  );
}
