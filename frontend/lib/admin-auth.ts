import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const SESSION_COOKIE = "admin_session";

export async function createSessionToken(): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET not set");
  const payload = JSON.stringify({
    ts: Date.now(),
    exp: Date.now() + 4 * 60 * 60 * 1000,
  });
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const sigBytes = new Uint8Array(sig);
  const token =
    btoa(payload) +
    "." +
    btoa(String.fromCharCode.apply(null, Array.from(sigBytes)));
  return token;
}

export async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret) return false;
    const [payloadB64, sigB64] = token.split(".");
    if (!payloadB64 || !sigB64) return false;
    const payload = atob(payloadB64);
    const parsed = JSON.parse(payload);
    if (parsed.exp < Date.now()) return false;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    const sig = Uint8Array.from(atob(sigB64), (c) => c.charCodeAt(0));
    return await crypto.subtle.verify(
      "HMAC",
      key,
      sig,
      encoder.encode(payload)
    );
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  if (!session) return false;
  return verifySessionToken(session.value);
}

export async function verifyAdminRequest(
  request: NextRequest
): Promise<boolean> {
  const cookie = request.cookies.get(SESSION_COOKIE);
  if (!cookie) return false;
  return verifySessionToken(cookie.value);
}
