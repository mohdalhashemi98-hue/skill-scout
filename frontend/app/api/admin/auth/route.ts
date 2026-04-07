import { NextRequest, NextResponse } from "next/server";
import { createSessionToken } from "@/lib/admin-auth";

function constantTimeEqual(a: string, b: string): boolean {
  const encoder = new TextEncoder();
  const bufA = encoder.encode(a);
  const bufB = encoder.encode(b);
  if (bufA.length !== bufB.length) {
    // Still do comparison to avoid timing leak on length
    let result = 1;
    for (let i = 0; i < bufA.length; i++) {
      result |= bufA[i] ^ (bufB[i % bufB.length] || 0);
    }
    return false;
  }
  let result = 0;
  for (let i = 0; i < bufA.length; i++) {
    result |= bufA[i] ^ bufB[i];
  }
  return result === 0;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { passphrase } = body as { passphrase?: string };

    if (!passphrase) {
      return NextResponse.json(
        { error: "Passphrase required" },
        { status: 400 }
      );
    }

    const adminPassphrase = process.env.ADMIN_PASSPHRASE;
    if (!adminPassphrase) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!constantTimeEqual(passphrase, adminPassphrase)) {
      return NextResponse.json(
        { error: "Invalid passphrase" },
        { status: 401 }
      );
    }

    const token = await createSessionToken();
    const isProduction = process.env.NODE_ENV === "production";

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "strict",
      maxAge: 4 * 60 * 60, // 4 hours
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
