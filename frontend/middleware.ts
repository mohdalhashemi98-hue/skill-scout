import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin route protection (except login page and auth API)
  if (
    pathname.startsWith("/admin") &&
    !pathname.startsWith("/admin/login") &&
    !pathname.startsWith("/api/admin/auth")
  ) {
    const session = request.cookies.get("admin_session");
    if (!session?.value) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.svg|og-image.png).*)",
  ],
};
