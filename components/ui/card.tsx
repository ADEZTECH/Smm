import type { HTMLAttributes, ReactNode } from "react";

export function Card({ children, className = "" }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={`rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-sm ${className}`}>{children}</div>;
}
