import { Metadata } from "next";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "Terms of Service | SkillScout",
  description: "SkillScout terms of service — rules and guidelines for using our platform.",
};

export default function TermsPage() {
  const sections = [
    {
      id: "service",
      title: "Service Description",
      content: "SkillScout provides AI chatbot automation services through WhatsApp and Telegram. Our bots offer file access, command execution, and workflow automation for businesses across multiple industries.",
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use",
      content: "You agree to use our services only for lawful purposes. You may not use our AI chatbots to generate harmful, misleading, or illegal content. Automated abuse of our services is strictly prohibited.",
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: "SkillScout provides services on an \"as is\" basis. While we strive for reliability, we are not liable for damages arising from service interruptions, data loss, or AI-generated output inaccuracies.",
    },
    {
      id: "security",
      title: "Security",
      content: "We implement enterprise-grade security measures including end-to-end encryption, sandboxed execution environments, and regular security audits. All bot interactions are isolated to prevent unauthorized access.",
    },
    {
      id: "contact",
      title: "Contact",
      content: "For questions about these terms, please reach out through our contact form or email legal@skillscout.ai.",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-sm text-muted/30 mb-12">Last updated: March 2026</p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="glass rounded-2xl p-6 scroll-mt-24">
                <h2 className="text-lg font-semibold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-sm text-muted/40 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
