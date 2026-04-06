"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { BlogPost } from "@/lib/blog";

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".glass" });

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="glass rounded-2xl p-8 text-center max-w-md">
          <p className="text-muted/40 text-lg">No posts yet. Check back soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="glass glass-hover p-6 flex flex-col group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 bg-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-sm text-muted/50 leading-relaxed flex-1 mb-4">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-xs text-muted/30">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span>{post.readTime}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
