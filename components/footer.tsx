import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 ADEZ NEXUS</p>
        <div className="flex gap-4">
          <Link href="/hosting" className="hover:text-white">Hosting</Link>
          <Link href="/domains" className="hover:text-white">Domains</Link>
          <Link href="/payments" className="hover:text-white">Payments</Link>
        </div>
      </div>
    </footer>
  );
}
