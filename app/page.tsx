import Link from "next/link";
import { Zap, ShieldCheck, Server, Headset } from "lucide-react";
import { DomainSearch } from "@/components/domain-search";
import { PlanCard } from "@/components/plan-card";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { plans, features, testimonials, faqs } from "@/lib/data";

const icons = { Zap, ShieldCheck, Server, Headset } as const;

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4">
      <section className="flex flex-col items-center pt-16 text-center md:pt-24">
        <h1 className="text-4xl font-extrabold text-white md:text-6xl">
          Powering Your <span className="grad-text">Digital Universe.</span>
        </h1>
        <p className="mt-4 max-w-xl text-slate-400">Web hosting, domains, VPS and cloud solutions, priced in Kenyan Shillings.</p>
        <div className="mt-8 flex w-full justify-center">
          <DomainSearch />
        </div>
        <Link href="/hosting" className={buttonVariants("outline", "mt-6")}>
          View hosting plans
        </Link>
      </section>

      <section aria-labelledby="plans">
        <h2 id="plans" className="mb-6 text-2xl font-bold text-white">Hosting plans</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => <PlanCard key={p.id} p={p} />)}
        </div>
      </section>

      <section aria-labelledby="feat">
        <h2 id="feat" className="mb-6 text-2xl font-bold text-white">Why ADEZ NEXUS</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([i, t, d]) => {
            const I = icons[i as keyof typeof icons];
            return (
              <Card key={t}>
                <I className="mb-3 text-sky-400" />
                <h3 className="font-semibold text-white">{t}</h3>
                <p className="text-sm text-slate-400">{d}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="tm">
        <h2 id="tm" className="mb-6 text-2xl font-bold text-white">Customer testimonials</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <p className="text-sm">“{t.text}”</p>
              <p className="mt-3 font-medium text-white">{t.name}</p>
              <p className="text-xs text-slate-400">{t.role}</p>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq" className="max-w-3xl">
        <h2 id="faq" className="mb-6 text-2xl font-bold text-white">FAQs</h2>
        {faqs.map(([q, a]) => (
          <details key={q} className="mb-2 rounded-xl border border-white/10 p-4">
            <summary className="cursor-pointer font-medium text-white">{q}</summary>
            <p className="mt-2 text-sm text-slate-400">{a}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
