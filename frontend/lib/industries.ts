export interface IndustryData {
  name: string;
  slug: string;
  href: string;
  description: string;
  useCases: string[];
  iconName: string;
  gradient: string;
}

const industries: IndustryData[] = [
  {
    name: "Legal",
    slug: "legal",
    href: "/legal",
    description:
      "Automate document retrieval, case research, and contract analysis through simple chat commands.",
    useCases: [
      "Pull case files from document management",
      "Summarize contracts and flag risks",
      "Auto-generate compliance checklists",
    ],
    iconName: "Scale",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    name: "Real Estate",
    slug: "realestate",
    href: "/realestate",
    description:
      "Access property data, generate market reports, and manage listings from your messaging app.",
    useCases: [
      "Instant CMA reports from MLS data",
      "Schedule showings via chat",
      "Auto-update listing descriptions",
    ],
    iconName: "Home",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    href: "/healthcare",
    description:
      "Streamline patient scheduling, records lookup, and clinical workflow automation with HIPAA-compliant bots.",
    useCases: [
      "Patient record lookups (HIPAA compliant)",
      "Appointment scheduling & reminders",
      "Lab result delivery & triage",
    ],
    iconName: "Activity",
    gradient: "from-success/20 to-success/5",
  },
  {
    name: "Logistics",
    slug: "logistics",
    href: "/logistics",
    description:
      "Track shipments, manage inventory, and coordinate fleet operations through conversational AI.",
    useCases: [
      "Real-time shipment tracking via chat",
      "Inventory level alerts & reorder",
      "Driver dispatch & route optimization",
    ],
    iconName: "Truck",
    gradient: "from-warning/20 to-warning/5",
  },
  {
    name: "E-commerce",
    slug: "ecommerce",
    href: "/ecommerce",
    description:
      "Automate order tracking, inventory management, and customer support across your online storefronts.",
    useCases: [
      "Real-time order status via chat",
      "Inventory alerts & restock triggers",
      "Customer return & refund processing",
    ],
    iconName: "ShoppingCart",
    gradient: "from-primary/20 to-primary/5",
  },
];

export function getAllIndustries(): IndustryData[] {
  return industries;
}

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}
