import type { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none ${props.className ?? ""}`}
    />
  );
}
