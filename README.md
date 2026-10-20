# ADEZ NEXUS — Powering Your Digital Universe.
Next.js (App Router) · TypeScript · Tailwind · shadcn/ui-style components · Lucide.

## Run
```bash
npm install
cp .env.example .env.local
npm run dev
```

Local demo login: set `AUTH_MODE=demo` and `ADMIN_EMAILS=you@example.com` in `.env.local`. **Demo auth accepts any password and uses an unsigned cookie. Never enable it in production.** Replace it with a real provider (Auth.js, Clerk, Supabase Auth) in `app/actions/auth.ts` + `middleware.ts`.

## Integration points (all in `lib/integrations`)
- `payments.ts` — `PaymentProvider` interface. Invoices become *paid* only from a verified provider webhook. Nothing is simulated.
- `domains.ts` — `DomainRegistrar`. Until configured, searches return "registrar not connected".
- `provisioning.ts` — `Provisioner`. Throws until configured; no hosting is activated automatically.
All dashboard/admin data is demo data in `lib/data.ts`; swap for a database.

## GitHub + Vercel
```bash
git init && git add . && git commit -m "ADEZ NEXUS"
git remote add origin <repo-url> && git push -u origin main
```
Import the repo at vercel.com/new, add the env vars from `.env.example`, deploy.
To add official shadcn/ui components later: `npx shadcn@latest init`.
