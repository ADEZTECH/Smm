"use client";

import Link from "next/link";
import { useActionState } from "react";
import { authAction } from "@/app/actions/auth";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

const copy = {
  login: ["Log in", "Log in"],
  signup: ["Create your account", "Sign up"],
  reset: ["Reset password", "Send reset link"],
} as const;

export function AuthForm({ mode }: { mode: keyof typeof copy }) {
  const [state, action, pending] = useActionState(authAction.bind(null, mode), undefined);

  return (
    <Card className="mx-auto my-16 max-w-md">
      <h1 className="mb-4 text-2xl font-bold text-white">{copy[mode][0]}</h1>
      <form action={action} className="space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm">Email</label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>

        {mode !== "reset" && (
          <div>
            <label htmlFor="password" className="mb-1 block text-sm">Password</label>
            <Input id="password" name="password" type="password" minLength={8} autoComplete={mode === "login" ? "current-password" : "new-password"} required />
          </div>
        )}

        <p role="alert" className="text-sm text-red-400">{state?.error}</p>
        <p role="status" className="text-sm text-emerald-400">{state?.ok}</p>

        <Button className="w-full" disabled={pending}>
          {pending ? "Please wait…" : copy[mode][1]}
        </Button>
      </form>

      <p className="mt-4 text-sm text-slate-400">
        {mode === "login" ? (
          <>
            <Link href="/reset-password" className="underline">Forgot password?</Link> · <Link href="/signup" className="underline">Create account</Link>
          </>
        ) : (
          <Link href="/login" className="underline">Back to log in</Link>
        )}
      </p>
    </Card>
  );
}
