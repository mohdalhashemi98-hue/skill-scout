import { Metadata } from "next";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "Careers | SkillScout",
  description: "Join the SkillScout team — help us build the future of AI-powered business automation.",
};

export default function CareersPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Join <span className="text-gradient">SkillScout</span>
          </h1>
          <p className="text-sm text-muted/30 mb-12">Help us build the future of AI automation</p>

          <div className="glass rounded-2xl p-8 text-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">No Open Positions Yet</h2>
            <p className="text-sm text-muted/40 leading-relaxed max-w-md mx-auto mb-6">
              We&apos;re a lean startup building fast. As we grow, we&apos;ll be looking for talented engineers, designers, and business minds who are passionate about AI automation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            >
              Get Notified When We Hire
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
