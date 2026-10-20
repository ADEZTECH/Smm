import { NextResponse } from "next/server";
import { getRegistrar } from "@/lib/integrations/domains";
import { tlds } from "@/lib/data";

export async function GET(req: Request) {
  const name = (new URL(req.url).searchParams.get("name") || "")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .slice(0, 63);

  if (!name) return NextResponse.json({ error: "Enter a domain name" }, { status: 400 });
  return NextResponse.json({ results: await getRegistrar().check(tlds.map((t) => name + t.ext)) });
}
