import { NextRequest, NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/admin-auth";
import { readClients, writeClients, maskClient } from "@/lib/clients";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAuth = await verifyAdminRequest(request);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const clients = readClients();
  const client = clients.find((c) => c.id === params.id);
  if (!client) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  return NextResponse.json(maskClient(client));
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAuth = await verifyAdminRequest(request);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const clients = readClients();
    const index = clients.findIndex((c) => c.id === params.id);
    if (index === -1) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }

    const existing = clients[index];
    const updates = body as Record<string, unknown>;

    // Update allowed fields
    if (updates.name !== undefined) existing.name = updates.name as string;
    if (updates.email !== undefined) existing.email = updates.email as string;
    if (updates.company !== undefined)
      existing.company = updates.company as string;
    if (updates.plan !== undefined) {
      const validPlans = ["starter", "professional", "business"];
      if (!validPlans.includes(updates.plan as string)) {
        return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
      }
      existing.plan = updates.plan as "starter" | "professional" | "business";
    }

    // Update config fields
    if (updates.config !== undefined) {
      const configUpdates = updates.config as Record<string, unknown>;
      existing.config = { ...existing.config };
      if (configUpdates.whatsappAccountId !== undefined)
        existing.config.whatsappAccountId =
          configUpdates.whatsappAccountId as string;
      if (configUpdates.whatsappPhoneId !== undefined)
        existing.config.whatsappPhoneId =
          configUpdates.whatsappPhoneId as string;
      if (configUpdates.whatsappToken !== undefined)
        existing.config.whatsappToken = configUpdates.whatsappToken as string;
      if (configUpdates.telegramBotToken !== undefined)
        existing.config.telegramBotToken =
          configUpdates.telegramBotToken as string;
      if (configUpdates.webhookUrl !== undefined)
        existing.config.webhookUrl = configUpdates.webhookUrl as string;
    }

    existing.updatedAt = new Date().toISOString();
    clients[index] = existing;
    writeClients(clients);

    return NextResponse.json(maskClient(existing));
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAuth = await verifyAdminRequest(request);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const clients = readClients();
  const index = clients.findIndex((c) => c.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  clients.splice(index, 1);
  writeClients(clients);

  return NextResponse.json({ success: true });
}
