import { DataTable, Badge } from "@/components/data-table";
import { admin as a, plans, customer as c } from "@/lib/data";
import { kes } from "@/lib/utils";

const nav = ["customers", "plans", "orders", "invoices", "domains", "tickets", "payments"];

export default function Admin() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10">
      <h1 className="text-3xl font-bold text-white">Admin dashboard</h1>
      <nav aria-label="Admin sections" className="flex flex-wrap gap-2 text-sm">
        {nav.map((h) => (
          <a key={h} href={`#${h}`} className="rounded-lg border border-white/10 px-3 py-1 capitalize hover:bg-white/5">
            {h}
          </a>
        ))}
      </nav>

      <DataTable id="customers" title="Customers" head={["Name", "Email", "Services"]} rows={a.customers} />
      <DataTable id="plans" title="Hosting plans" head={["Plan", "Price / mo"]} rows={plans.map((p) => [p.name, kes(p.price)])} />
      <DataTable id="orders" title="Orders" head={["Order", "Customer", "Item", "Status"]} rows={a.orders.map((r) => [r[0], r[1], r[2], <Badge key={r[0]}>{r[3]}</Badge>])} />
      <DataTable id="invoices" title="Invoices" head={["Invoice", "Item", "Amount", "Status"]} rows={c.invoices.map((r) => [r[0], r[1], kes(r[2] as number), <Badge key={r[0]}>{r[3]}</Badge>])} />
      <DataTable id="domains" title="Domains" head={["Domain", "Expires", "Renewal"]} rows={c.domains} />
      <DataTable id="tickets" title="Support tickets" head={["Ticket", "Customer", "Status"]} rows={a.tickets} />
      <DataTable id="payments" title="Payment statuses" head={["Reference", "Invoice", "Status"]} rows={a.payments.map((r) => [r[0], r[1], <Badge key={r[0]}>{r[2]}</Badge>])} />
    </div>
  );
}
