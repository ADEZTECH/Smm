import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-white">
          ADEZ <span className="text-sky-400">NEXUS</span>
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          <Link href="/hosting" className="text-slate-300 hover:text-white">Hosting</Link>
          <Link href="/domains" className="text-slate-300 hover:text-white">Domains</Link>
          <Link href="/payments" className="text-slate-300 hover:text-white">Payments</Link>
          <Link href="/login" className="text-slate-300 hover:text-white">Login</Link>
        </nav>
      </div>
    </header>
  );
}
