import { NextRequest, NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/admin-auth";
import {
  readClients,
  writeClients,
  generateApiKey,
  maskClient,
  Client,
} from "@/lib/clients";

export async function GET(request: NextRequest) {
  const isAuth = await verifyAdminRequest(request);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const clients = readClients();
  return NextResponse.json(clients.map(maskClient));
}

export async function POST(request: NextRequest) {
  const isAuth = await verifyAdminRequest(request);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, email, company, plan } = body as {
      name?: string;
      email?: string;
      company?: string;
      plan?: string;
    };

    if (!name || !email || !company || !plan) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, company, plan" },
        { status: 400 }
      );
    }

    const validPlans = ["starter", "professional", "business"];
    if (!validPlans.includes(plan)) {
      return NextResponse.json(
        { error: "Invalid plan. Must be: starter, professional, or business" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const newClient: Client = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      plan: plan as "starter" | "professional" | "business",
      apiKey: generateApiKey(),
      config: {},
      createdAt: now,
      updatedAt: now,
    };

    const clients = readClients();
    clients.push(newClient);
    writeClients(clients);

    return NextResponse.json(maskClient(newClient), { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
