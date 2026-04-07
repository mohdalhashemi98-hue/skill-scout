import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

export interface ClientConfig {
  whatsappAccountId?: string;
  whatsappPhoneId?: string;
  whatsappToken?: string;
  telegramBotToken?: string;
  webhookUrl?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: "starter" | "professional" | "business";
  apiKey: string;
  config: ClientConfig;
  createdAt: string;
  updatedAt: string;
}

const DATA_PATH = join(process.cwd(), "data", "clients.json");

export function readClients(): Client[] {
  if (!existsSync(DATA_PATH)) return [];
  const data = readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(data) as Client[];
}

export function writeClients(clients: Client[]): void {
  writeFileSync(DATA_PATH, JSON.stringify(clients, null, 2), "utf-8");
}

export function generateApiKey(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return (
    "sk_" +
    Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  );
}

export function maskSensitive(value: string | undefined): string | undefined {
  if (!value) return value;
  if (value.length <= 4) return "****";
  return "****" + value.slice(-4);
}

export function maskClient(client: Client): Client {
  return {
    ...client,
    apiKey: maskSensitive(client.apiKey) || "",
    config: {
      ...client.config,
      whatsappToken: maskSensitive(client.config.whatsappToken),
      telegramBotToken: maskSensitive(client.config.telegramBotToken),
    },
  };
}
