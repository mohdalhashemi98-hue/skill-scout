import { Metadata } from "next";
import { Truck, MapPin, Package, Zap } from "lucide-react";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "Logistics AI Automation | SkillScout",
  description:
    "AI chatbots for logistics and supply chain teams. Automate shipment tracking, dispatch coordination, and inventory management via WhatsApp and Telegram.",
};

const useCases = [
  "Real-time shipment tracking",
  "Driver dispatch automation",
  "Inventory level alerts",
  "Route optimization queries",
  "Warehouse management",
  "Delivery ETA updates",
];

const detailedUseCases = [
  {
    icon: <MapPin size={24} strokeWidth={2} />,
    title: "Real-Time Tracking",
    description:
      "Dispatch coordinators message the bot with an order number and get instant location, ETA, driver info, and delivery notes. No more switching between apps and waiting for systems to load.",
  },
  {
    icon: <Package size={24} strokeWidth={2} />,
    title: "Inventory Automation",
    description:
      "Get instant stock levels, set up automatic reorder alerts, and track inventory across multiple warehouses — all through a simple chat message.",
  },
  {
    icon: <Zap size={24} strokeWidth={2} />,
    title: "Smart Dispatch",
    description:
      "The bot analyzes driver availability, current routes, and delivery priorities to suggest optimal dispatch assignments. Your team confirms with a single message.",
  },
];

export default function LogisticsPage() {
  return (
    <PageTransition>
      <IndustryHero
        industry="Logistics & Supply Chain"
        headline="Track, Dispatch, and Deliver Smarter"
        description="Your operations team handles hundreds of tracking queries daily. Deploy AI chatbots that connect to your TMS and WMS systems to provide instant shipment status, dispatch updates, and inventory alerts."
        icon={<Truck size={24} strokeWidth={2} />}
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
