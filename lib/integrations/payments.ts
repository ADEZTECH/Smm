export type PaymentMethod = {
  id: string;
  name: string;
  enabled: boolean;
  kind: "card" | "bank" | "mpesa";
};

export type DomainResult = {
  domain: string;
  available: boolean | null;
  note?: string;
};

export function makeReference(prefix = "REF") {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
}

export function configuredProviders() {
  const providers = (process.env.PAYMENT_PROVIDERS || "")
    .split(",")
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);

  return [
    { id: "mpesa", name: "M-Pesa", enabled: providers.includes("mpesa") },
    { id: "card", name: "Card", enabled: providers.includes("card") },
    { id: "bank", name: "Bank transfer", enabled: providers.includes("bank") },
  ].filter((p) => p.enabled);
}
