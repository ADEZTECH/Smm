import { ReactNode } from "react";

export const Badge = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full bg-sky-400/10 px-2 py-0.5 text-xs text-sky-300">{children}</span>
);

export function DataTable({ id, title, head, rows }: { id: string; title: string; head: string[]; rows: ReactNode[][] }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              {head.map((h) => (
                <th key={h} scope="col" className="px-3 py-2 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-white/5">
                {r.map((c, j) => (
                  <td key={j} className="px-3 py-2">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
