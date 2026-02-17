import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  if (!code) return NextResponse.json({ ok: false, error: "Missing code" }, { status: 400 });
  if (!clientId || !clientSecret) {
    return NextResponse.json({ ok: false, error: "Missing client credentials" }, { status: 500 });
  }
  const redirectUri = `${req.nextUrl.origin}/api/oauth/google/callback`;
  try {
    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: data }, { status: res.status });
    }
    return NextResponse.json({
      ok: true,
      note: "Copia OAUTH_REFRESH_TOKEN in .env.local e riavvia il server.",
      OAUTH_REFRESH_TOKEN: data.refresh_token,
      expires_in: data.expires_in,
      access_token_preview: data.access_token ? `${String(data.access_token).slice(0, 8)}...` : undefined,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: String(e?.message || e) }, { status: 500 });
  }
}


