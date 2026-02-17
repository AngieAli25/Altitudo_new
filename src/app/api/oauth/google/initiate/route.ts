import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ ok: false, error: "Missing OAUTH_CLIENT_ID" }, { status: 500 });
  }
  const origin = req.nextUrl.origin;
  const redirectUri = `${origin}/api/oauth/google/callback`;
  const scope = encodeURIComponent("https://mail.google.com/");
  const url =
    "https://accounts.google.com/o/oauth2/v2/auth" +
    `?response_type=code&client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${scope}` +
    `&access_type=offline&prompt=consent`;
  return NextResponse.redirect(url);
}


