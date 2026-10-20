import { PlanCard } from "@/components/plan-card";
import { plans } from "@/lib/data";

export const metadata = { title: "Hosting plans — ADEZ NEXUS" };

export default function Hosting() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white">Hosting plans</h1>
      <p className="mb-8 text-slate-400">Shared, WordPress, reseller, VPS and cloud hosting. Prices in KES per month.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
