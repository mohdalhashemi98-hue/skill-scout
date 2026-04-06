import { Metadata } from "next";
import { Activity, ClipboardList, Calendar, FlaskConical } from "lucide-react";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "../legal/IndustryUseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "AI Automation for Healthcare | SkillScout",
  description:
    "HIPAA-aware AI chatbots for healthcare organizations. Automate patient records access, appointment scheduling, and lab results delivery.",
};

const useCases = [
  "Patient record access",
  "Appointment scheduling",
  "Lab results delivery",
  "HIPAA-compliant workflows",
  "Prescription tracking",
  "Staff communication",
];

const detailedUseCases = [
  {
    icon: <ClipboardList size={24} strokeWidth={2} />,
    title: "Patient Records",
    description:
      "Securely access patient records via chat with role-based permissions. Every query is logged and audit-ready for HIPAA compliance.",
  },
  {
    icon: <Calendar size={24} strokeWidth={2} />,
    title: "Appointment Scheduling",
    description:
      "Patients book, reschedule, or cancel appointments through WhatsApp. The bot checks availability and confirms in real time.",
  },
  {
    icon: <FlaskConical size={24} strokeWidth={2} />,
    title: "Lab Results",
    description:
      "Deliver lab results securely via messaging. Patients get notified when results are ready and can access them through authenticated chat.",
  },
];

export default function HealthcarePage() {
  return (
    <PageTransition>
      <IndustryHero
        industry="Healthcare"
        headline="AI Automation for Healthcare Teams"
        description="Deploy HIPAA-aware AI assistants that manage patient records, schedule appointments, and deliver lab results — all through secure, compliant messaging channels."
        icon={<Activity size={24} strokeWidth={2} />}
        useCases={useCases}
      />
      <div className="section-divider" />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-6 sm:p-8 border-success/20 flex items-start gap-4 max-w-2xl mx-auto">
            <div className="h-10 w-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center shrink-0">
              <Activity size={20} strokeWidth={2} className="text-success" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                HIPAA Compliance Built In
              </p>
              <p className="text-sm text-muted/50">
                All SkillScout healthcare bots are designed with HIPAA
                compliance in mind. Self-hosted deployment ensures patient data
                never leaves your infrastructure. Every interaction is logged
                and audit-ready.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      <IndustryUseCases useCases={detailedUseCases} />
      <div className="section-divider" />
      <CTA />
      <Footer />
    </PageTransition>
  );
}
