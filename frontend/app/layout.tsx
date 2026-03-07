import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/providers/LenisProvider";

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
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
