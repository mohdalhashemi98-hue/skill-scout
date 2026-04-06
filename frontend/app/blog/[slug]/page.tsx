import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | SkillScout Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-primary hover:text-white transition-colors duration-200 mb-8 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm"
      >
        &larr; Back to Blog
      </Link>

      <div className="mb-8">
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted/40">
          <span>{post.author}</span>
          <span>&middot;</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="space-y-6">
        {post.content.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className="text-muted/70 text-base leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="section-divider my-12" />

      <div className="glass rounded-2xl p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">
          Ready to get started?
        </h3>
        <p className="text-sm text-muted/50 mb-4">
          Deploy a purpose-built AI chatbot for your business today.
        </p>
        <Link
          href="/#contact"
          className="glow-button inline-block text-sm px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        >
          Get Started
        </Link>
      </div>
    </article>
  );
}
