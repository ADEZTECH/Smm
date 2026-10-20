import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { plans } from "@/lib/data";
import { kes } from "@/lib/utils";
import { configuredProviders, makeReference } from "@/lib/integrations/payments";

export const metadata = { title: "Payments — ADEZ NEXUS" };

export default async function Payments({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan: id } = await searchParams;
  const plan = plans.find((p) => p.id === id) ?? plans[0];
  const ref = makeReference(`ORD-${plan.id}`);
  const providers = configuredProviders();
  const manual = [
    ["Bank transfer", process.env.PAYMENT_INSTRUCTIONS_BANK],
    ["M-Pesa", process.env.PAYMENT_INSTRUCTIONS_MPESA],
  ].filter((m) => m[1]);

  return (
    <div className="mx-auto max-w-2xl space-y-4 px-4 py-12">
      <h1 className="text-3xl font-bold text-white">Payment</h1>

      <Card>
        <p className="text-slate-400">Order</p>
        <p className="text-xl text-white">
          {plan.name} — {kes(plan.price)}/mo
        </p>

        <p className="mt-4 text-sm text-slate-400">Transaction reference</p>
        <div className="flex items-center gap-3">
          <code className="text-white">{ref}</code>
          <CopyButton value={ref} />
        </div>

        <p className="mt-4 text-sm text-slate-400">Amount</p>
        <div className="flex items-center gap-3">
          <code className="text-white">{plan.price}</code>
          <CopyButton value={String(plan.price)} />
        </div>

        <p className="mt-4 text-sm">
          Status: <strong className="text-amber-300">Awaiting payment</strong>. Service is activated only after the payment is confirmed.
        </p>
      </Card>

      <Card>
        <h2 className="mb-3 font-semibold text-white">Pay</h2>
        {providers.length ? (
          providers.map((p) => (
            <Button key={p.id} className="mr-2">
              Pay with {p.name}
            </Button>
          ))
        ) : (
          <p className="text-sm text-slate-400">No payment provider configured yet. Set PAYMENT_PROVIDERS and implement it in lib/integrations/payments.ts.</p>
        )}

        {manual.map(([n, t]) => (
          <div key={n} className="mt-3 text-sm">
            <p className="font-medium text-white">{n}</p>
            <p className="flex items-center gap-2">
              {t}
              <CopyButton value={String(t)} />
            </p>
          </div>
        ))}
      </Card>
    </div>
  );
}
