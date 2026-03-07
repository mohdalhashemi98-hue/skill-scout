import { Metadata } from "next";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "About | SkillScout",
  description: "Learn about SkillScout — our mission to make AI automation accessible through messaging apps.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            About <span className="text-gradient">SkillScout</span>
          </h1>
          <p className="text-sm text-muted/30 mb-12">Building the future of business automation</p>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Our Mission</h2>
              <p className="text-sm text-muted/40 leading-relaxed">
                We believe every business deserves an AI assistant that goes beyond conversation. SkillScout builds purpose-built chatbots that access your files, execute commands, and automate workflows — all through the messaging apps your team already uses.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Why Now?</h2>
              <p className="text-sm text-muted/40 leading-relaxed">
                In January 2026, Meta banned general-purpose AI chatbots from WhatsApp. This created a massive gap: businesses that relied on AI assistants suddenly lost their tools. SkillScout fills that gap with purpose-built bots that are fully compliant with Meta&apos;s policies while delivering even more powerful capabilities — file access, terminal commands, and deep system integrations that generic chatbots never offered.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-3">The Market Gap</h2>
              <p className="text-sm text-muted/40 leading-relaxed">
                There&apos;s a $15/month world of basic chat tools and a $25,000+ world of custom enterprise builds. SkillScout sits in the sweet spot at $199-499/month — delivering enterprise-grade AI automation at a fraction of the cost of custom development, purpose-built for legal, real estate, healthcare, logistics, and e-commerce businesses.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Our Stack</h2>
              <p className="text-sm text-muted/40 leading-relaxed">
                Built on n8n for workflow automation, Supabase for secure data management, and Claude AI for intelligent natural language processing. Deployed on hardened infrastructure with sandboxed execution environments, end-to-end encryption, and row-level security policies.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Building in Public</h2>
              <p className="text-sm text-muted/40 leading-relaxed">
                We&apos;re building SkillScout transparently. Follow our journey on our blog where we share technical deep dives, business learnings, and product updates. We believe in earning trust through openness.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
