import { DataTable, Badge } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { logout } from "../actions/auth";
import { customer as c } from "@/lib/data";
import { kes } from "@/lib/utils";

const nav = [
  ["services", "Services"],
  ["domains", "Domains"],
  ["invoices", "Invoices"],
  ["transactions", "Transactions"],
  ["tickets", "Tickets"],
  ["settings", "Settings"],
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold text-white">Customer dashboard</h1>
        <form action={logout}>
          <Button variant="outline">Log out</Button>
        </form>
      </div>

      <nav aria-label="Dashboard sections" className="flex flex-wrap gap-2 text-sm">
        {nav.map(([h, t]) => (
          <a key={h} href={`#${h}`} className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5">
            {t}
          </a>
        ))}
      </nav>

      <DataTable id="services" title="Hosting services & status" head={["ID", "Plan", "Domain", "Status"]} rows={c.services.map((r) => [r[0], r[1], r[2], <Badge key={r[0]}>{r[3]}</Badge>])} />
      <DataTable id="domains" title="Domains" head={["Domain", "Expires", "Renewal"]} rows={c.domains} />
      <DataTable id="invoices" title="Invoices" head={["Invoice", "Item", "Amount", "Status"]} rows={c.invoices.map((r) => [r[0], r[1], kes(r[2] as number), <Badge key={r[0]}>{r[3]}</Badge>])} />
      <DataTable id="transactions" title="Transactions" head={["Reference", "Invoice", "Amount", "Status"]} rows={c.transactions.map((r) => [r[0], r[1], kes(r[2] as number), <Badge key={r[0]}>{r[3]}</Badge>])} />
      <DataTable id="tickets" title="Support tickets" head={["Ticket", "Subject", "Status"]} rows={c.tickets} />

      <section id="settings">
        <h2 className="mb-3 text-lg font-semibold text-white">Account settings</h2>
        <p className="text-sm text-slate-400">Profile, password and notification forms connect to your auth/database provider.</p>
      </section>
    </div>
  );
}
