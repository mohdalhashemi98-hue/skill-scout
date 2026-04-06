import { Metadata } from "next";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "Privacy Policy | SkillScout",
  description: "SkillScout privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Data Collection",
      content: "We collect information you provide directly, such as your name, email address, and message content when you use our contact form. We also collect basic analytics data to improve our services.",
    },
    {
      title: "How We Use Your Data",
      content: "Your information is used to respond to inquiries, provide our AI chatbot automation services, and improve user experience. We never sell your personal data to third parties.",
    },
    {
      title: "Data Storage & Security",
      content: "All data is stored securely using industry-standard encryption. We use Supabase for database management with row-level security policies to protect your information.",
    },
    {
      title: "Cookies & Analytics",
      content: "We use minimal, essential cookies for site functionality. Analytics data is collected anonymously to help us understand how visitors interact with our site.",
    },
    {
      title: "Contact Us",
      content: "If you have questions about this privacy policy or your data, please reach out through our contact form or email us at privacy@skillscout.ai.",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-sm text-muted/30 mb-12">Last updated: March 2026</p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="glass rounded-2xl p-6">
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
