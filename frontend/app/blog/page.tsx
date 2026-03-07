import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog | SkillScout",
  description:
    "Insights on AI chatbot automation, WhatsApp compliance, and building purpose-built business bots.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Blog
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Insights &{" "}
          <span className="text-gradient">Updates</span>
        </h1>
        <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
          The latest on AI automation, compliance, and building bots that
          actually work.
        </p>
      </div>

      <BlogGrid posts={posts} />
    </div>
  );
}
