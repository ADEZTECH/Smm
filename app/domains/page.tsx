import { DomainSearch } from "@/components/domain-search";
import { DataTable } from "@/components/data-table";
import { tlds } from "@/lib/data";
import { kes } from "@/lib/utils";

export const metadata = { title: "Domain registration — ADEZ NEXUS" };

export default function Domains() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-12">
      <h1 className="text-3xl font-bold text-white">Find your domain</h1>
      <DomainSearch />
      <DataTable id="tld" title="Popular extensions (demo prices)" head={["Extension", "Price / year"]} rows={tlds.map((t) => [t.ext, kes(t.price)])} />
    </div>
  );
}
