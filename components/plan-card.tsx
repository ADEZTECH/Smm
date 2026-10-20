import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plan } from "@/lib/data";

export function PlanCard({ p }: { p: Plan }) {
  return (
    <Card className="h-full">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
        {p.popular && <span className="rounded-full bg-sky-400/20 px-2 py-1 text-[10px] font-medium text-sky-300">Popular</span>}
      </div>
      <p className="mb-4 text-3xl font-bold text-white">KES {p.price}</p>
      <p className="mb-4 text-sm text-slate-400">{p.desc}</p>
      <ul className="space-y-2 text-sm text-slate-300">
        {p.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-400" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={`/payments?plan=${p.id}`} className="mt-6 inline-block">
        <Button className="w-full">Choose plan</Button>
      </Link>
    </Card>
  );
}
