import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import PageTransition from "@/components/providers/PageTransition";

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const Industries = dynamic(() => import("@/components/Industries"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const Comparison = dynamic(() => import("@/components/Comparison"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const ROICalculator = dynamic(() => import("@/components/ROICalculator"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const Founder = dynamic(() => import("@/components/Founder"), {
  loading: () => (
    <div className="py-24" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => (
    <div className="py-16" role="status" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-8 w-48 bg-surface/50 rounded-lg animate-pulse mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-surface/30 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
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
