import type { Metadata } from "next";
import RoadmapContent from "@/components/RoadmapContent";

export const metadata: Metadata = {
  title: "Roadmap | SkillScout",
  description:
    "See what we're building next. Our public roadmap shows the features and milestones planned for SkillScout in 2026.",
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
