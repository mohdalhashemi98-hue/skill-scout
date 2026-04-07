import { Metadata } from "next";
import { Scale, FileSearch, ShieldCheck, BookOpen } from "lucide-react";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "AI Automation for Legal Teams | SkillScout",
  description:
    "Purpose-built AI chatbots for law firms. Automate document retrieval, contract analysis, and compliance workflows via WhatsApp & Telegram.",
};

const useCases = [
  "Document retrieval via chat",
  "Contract clause analysis",
  "Compliance monitoring",
  "Client intake automation",
  "Case file summaries",
  "Deadline tracking",
];

const detailedUseCases = [
  {
    icon: <FileSearch size={24} strokeWidth={2} />,
    title: "Document Retrieval",
    description:
      "Ask your bot for any document by name, case number, or keyword. It searches your file system and delivers the right file — instantly, via WhatsApp.",
  },
  {
    icon: <BookOpen size={24} strokeWidth={2} />,
    title: "Contract Analysis",
    description:
      "Upload a contract and get a structured summary: key clauses, obligations, deadlines, and potential risks — all analyzed and returned in seconds.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={2} />,
    title: "Compliance Automation",
    description:
      "Automated compliance checks against regulatory requirements. Get alerts for upcoming deadlines and audit-ready logs of all bot interactions.",
  },
];

export default function LegalPage() {
  return (
    <PageTransition>
      <IndustryHero
        industry="Legal"
        headline="AI Automation for Legal Teams"
        description="Deploy purpose-built AI assistants that access your case files, analyze contracts, and automate compliance workflows — all through the messaging apps your team already uses."
        icon={<Scale size={24} strokeWidth={2} />}
        useCases={useCases}
      />
      <div className="section-divider" />
      <IndustryUseCases useCases={detailedUseCases} />
      <div className="section-divider" />
      <CTA />
      <Footer />
    </PageTransition>
  );
}
