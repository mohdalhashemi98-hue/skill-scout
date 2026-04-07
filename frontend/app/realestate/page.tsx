import { Metadata } from "next";
import { Home, FileText, Calendar, TrendingUp } from "lucide-react";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "Real Estate AI Automation | SkillScout",
  description:
    "AI chatbots for real estate teams. Generate CMA reports, manage listings, schedule showings, and follow up with leads — all through WhatsApp and Telegram.",
};

const useCases = [
  "CMA report generation",
  "Showing scheduling",
  "Listing management",
  "Lead follow-up automation",
  "Market data access",
  "Client communication",
];

const detailedUseCases = [
  {
    icon: <FileText size={24} strokeWidth={2} />,
    title: "Instant CMA Reports",
    description:
      "Your agents send one message and get a formatted Comparative Market Analysis with recent sales, price trends, and recommended listing price — generated in seconds, not hours.",
  },
  {
    icon: <Calendar size={24} strokeWidth={2} />,
    title: "Automated Scheduling",
    description:
      "Buyers request a showing, the bot checks availability, coordinates with the listing agent, and confirms the appointment. No phone tag, no double-bookings.",
  },
  {
    icon: <TrendingUp size={24} strokeWidth={2} />,
    title: "Market Intelligence",
    description:
      "Get real-time market data on demand. Ask about average days on market, price per square foot trends, or inventory levels in any zip code — the bot queries your systems and responds instantly.",
  },
];

export default function RealEstatePage() {
  return (
    <PageTransition>
      <IndustryHero
        industry="Real Estate"
        headline="Close Deals Faster with AI Automation"
        description="Your agents shouldn't spend hours pulling comps and scheduling showings. Deploy AI chatbots that access your MLS data, generate reports, and manage client communication — from the messaging apps your team already uses."
        icon={<Home size={24} strokeWidth={2} />}
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
