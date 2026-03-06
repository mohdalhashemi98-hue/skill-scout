import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SkillScout | AI Chatbots That Access Your Systems",
  description:
    "Deploy AI chatbots on WhatsApp & Telegram that can access files, run terminal commands, and automate your business workflows.",
  keywords: [
    "AI chatbot",
    "automation",
    "WhatsApp bot",
    "Telegram bot",
    "business automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-muted antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
