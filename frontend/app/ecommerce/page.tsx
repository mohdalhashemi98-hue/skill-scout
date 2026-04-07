import { Metadata } from "next";
import { ShoppingCart, Search, RotateCcw, BarChart3 } from "lucide-react";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "E-commerce AI Automation | SkillScout",
  description:
    "AI chatbots for e-commerce teams. Automate order tracking, returns processing, and inventory management via WhatsApp and Telegram.",
};

const useCases = [
  "Order status tracking",
  "Returns processing",
  "Inventory management",
  "Customer support automation",
  "Price monitoring",
  "Fulfillment status",
];

const detailedUseCases = [
  {
    icon: <Search size={24} strokeWidth={2} />,
    title: "Instant Order Lookup",
    description:
      "Customers or support staff message the bot with an order number and get real-time tracking, shipping carrier details, and estimated delivery — pulled directly from your OMS.",
  },
  {
    icon: <RotateCcw size={24} strokeWidth={2} />,
    title: "Automated Returns",
    description:
      "The bot guides customers through the return process, generates shipping labels, initiates refunds, and updates inventory — what used to take days now happens in minutes.",
  },
  {
    icon: <BarChart3 size={24} strokeWidth={2} />,
    title: "Sales Intelligence",
    description:
      "Ask the bot about daily revenue, top-selling products, or inventory turnover rates. It queries your analytics systems and delivers formatted reports in seconds.",
  },
];

export default function EcommercePage() {
  return (
    <PageTransition>
      <IndustryHero
        industry="E-commerce"
        headline="Automate Orders, Returns, and Support"
        description="Your support team answers the same tracking and returns questions hundreds of times a day. Deploy AI chatbots that connect to your order management system to handle queries instantly and trigger workflows automatically."
        icon={<ShoppingCart size={24} strokeWidth={2} />}
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
