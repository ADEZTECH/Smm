"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type State = { error?: string; ok?: string } | undefined;

// INTEGRATION POINT: replace with a real auth provider. AUTH_MODE=demo is local-only and insecure.
export async function authAction(mode: "login" | "signup" | "reset", _s: State, fd: FormData): Promise<State> {
  const email = String(fd.get("email") || "").trim();
  const pw = String(fd.get("password") || "");

  if (!/^\S+@\S+\.\S+$/.test(email)) return { error: "Enter a valid email address." };
  if (process.env.AUTH_MODE !== "demo") return { error: "Authentication provider not configured. See README." };

  if (mode === "reset") return { ok: "Demo mode: no email is sent. Connect an email provider." };
  if (pw.length < 8) return { error: "Password must be at least 8 characters." };

  const admins = (process.env.ADMIN_EMAILS || "").split(",").map((s) => s.trim().toLowerCase());
  const role = admins.includes(email.toLowerCase()) ? "admin" : "customer";

  (await cookies()).set("adez_session", role, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 28800,
  });

  redirect(role === "admin" ? "/admin" : "/dashboard");
}

export async function logout() {
  (await cookies()).delete("adez_session");
  redirect("/login");
}
