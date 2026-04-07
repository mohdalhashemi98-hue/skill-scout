export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  industry: string;
  metric?: string;
  metricLabel?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We used to spend hours digging through folders for client documents. Now our team just asks the bot and gets the file in seconds \u2014 right in WhatsApp.",
    name: "Sarah Chen",
    title: "Managing Partner",
    company: "Chen & Associates Legal",
    initials: "SC",
    industry: "Legal",
  },
  {
    quote:
      "Our agents generate CMA reports through a simple chat message. It pulls market data, formats it, and sends the PDF. Clients love the speed.",
    name: "Marcus Rivera",
    title: "Senior Agent",
    company: "Pacific Realty Group",
    initials: "MR",
    industry: "Real Estate",
  },
  {
    quote:
      "Shipment tracking queries that took 15 minutes now take 15 seconds. The bot checks our systems and responds instantly. It\u0027s transformed our ops.",
    name: "Priya Patel",
    title: "Operations Director",
    company: "SwiftShip Logistics",
    initials: "PP",
    industry: "Logistics",
  },
  {
    quote:
      "We were drowning in patient record requests. Now our front desk sends a message and the bot pulls the file in seconds \u2014 fully HIPAA-compliant. Our admin staff finally has time to actually help patients instead of digging through systems.",
    name: "Dr. Amara Osei",
    title: "Practice Manager",
    company: "Riverside Family Medicine",
    initials: "AO",
    industry: "Healthcare",
    metric: "60% less admin time",
    metricLabel: "Administrative Efficiency",
  },
  {
    quote:
      "Returns used to be our nightmare \u2014 customers waiting days for updates while we manually tracked packages across three systems. Now they message the bot, get instant status, and the refund triggers automatically. Customer satisfaction jumped overnight.",
    name: "James Okonkwo",
    title: "Head of Customer Experience",
    company: "Bloom & Co.",
    initials: "JO",
    industry: "E-commerce",
    metric: "4.8\u2605 \u2192 4.9\u2605 satisfaction",
    metricLabel: "Customer Rating",
  },
  {
    quote:
      "I used to spend my Sunday nights pulling comparable sales data for Monday listings. Now I send one message and get a formatted CMA report with market trends, price history, and recommended listing price. My weekends are mine again.",
    name: "Diana Vasquez",
    title: "Broker Associate",
    company: "Keystone Properties",
    initials: "DV",
    industry: "Real Estate",
    metric: "30min \u2192 30sec",
    metricLabel: "CMA Report Time",
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
