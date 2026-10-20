import { clsx } from "clsx";

export function buttonVariants(variant: "default" | "outline" = "default", extra?: string) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  const styles = {
    default: "bg-sky-500 text-white hover:bg-sky-400",
    outline: "border border-white/15 bg-transparent text-slate-200 hover:bg-white/5",
  };

  return clsx(base, styles[variant], extra);
}

export function Button({ children, className, variant = "default", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" }) {
  return (
    <button className={buttonVariants(variant, className)} {...props}>
      {children}
    </button>
  );
}
