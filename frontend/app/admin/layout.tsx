import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Admin Panel | SkillScout",
  robots: "noindex, nofollow",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname =
    headersList.get("x-next-url") || headersList.get("x-invoke-path") || "";

  // Allow login page without auth
  const isLoginPage = pathname.includes("/admin/login");

  if (!isLoginPage) {
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      redirect("/admin/login");
    }
  }

  // On login page, render without admin chrome
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-background">{children}</div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-white/5 bg-surface/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="text-white font-semibold">Admin Panel</span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="/admin"
              className="text-sm text-muted/70 hover:text-white transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/admin/clients"
              className="text-sm text-muted/70 hover:text-white transition-colors"
            >
              Clients
            </a>
            <a
              href="/admin/settings"
              className="text-sm text-muted/70 hover:text-white transition-colors"
            >
              Settings
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
