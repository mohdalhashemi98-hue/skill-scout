import PageTransition from "@/components/providers/PageTransition";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition><div className="pt-24">{children}</div></PageTransition>;
}
