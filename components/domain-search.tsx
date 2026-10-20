"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { tlds } from "@/lib/data";
import { kes } from "@/lib/utils";

type R = { domain: string; available: boolean | null; note?: string };

export function DomainSearch() {
  const [name, setName] = useState("");
  const [res, setRes] = useState<R[]>([]);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function go(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setBusy(true);

    try {
      const r = await fetch(`/api/domains/check?name=${encodeURIComponent(name)}`);
      const j = await r.json();
      r.ok ? setRes(j.results) : setErr(j.error);
    } catch {
      setErr("Search failed. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={go} className="flex gap-2" role="search">
        <label htmlFor="dn" className="sr-only">Domain name</label>
        <Input id="dn" value={name} onChange={(e) => setName(e.target.value)} placeholder="yourbrand" />
        <Button disabled={busy}>
          <Search size={16} />
          {busy ? "Searching" : "Search"}
        </Button>
      </form>

      {err && <p className="mt-3 text-sm text-red-400">{err}</p>}

      {res.length > 0 && (
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-400">
              <tr>
                <th className="px-3 py-2">Domain</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {res.map((item) => (
                <tr key={item.domain} className="border-t border-white/5">
                  <td className="px-3 py-2 text-white">{item.domain}</td>
                  <td className="px-3 py-2">
                    {item.available === null ? "Unknown" : item.available ? "Available" : "Taken"}
                  </td>
                  <td className="px-3 py-2 text-slate-300">
                    {tlds.find((t) => item.domain.endsWith(t.ext)) ? kes(tlds.find((t) => item.domain.endsWith(t.ext))!.price) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
