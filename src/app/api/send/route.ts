import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const firstName = String(form.get("firstName") ?? "");
    const lastName = String(form.get("lastName") ?? "");
    const email = String(form.get("email") ?? form.get("newsletterEmail") ?? "");
    const phone = String(form.get("phone") ?? "");
    const fromDateTime = String(form.get("fromDateTime") ?? "");
    const toDateTime = String(form.get("toDateTime") ?? "");
    const pickupPlace = String(form.get("pickupPlace") ?? "");
    const dropoffPlace = String(form.get("dropoffPlace") ?? "");
    const source = request.headers.get("referer") ?? "";

    const hasBooking =
      firstName || lastName || phone || fromDateTime || toDateTime || pickupPlace || dropoffPlace;
    const subject = hasBooking
      ? "Nuova richiesta prenotazione - Altitudo"
      : "Nuova iscrizione newsletter - Altitudo";

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">Altitudo - ${subject}</h2>
        <p style="margin:0 0 12px"><strong>Pagina:</strong> ${source}</p>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;min-width:420px">
          ${email ? `<tr><td><strong>Email</strong></td><td>${email}</td></tr>` : ""}
          ${firstName ? `<tr><td><strong>Nome</strong></td><td>${firstName}</td></tr>` : ""}
          ${lastName ? `<tr><td><strong>Cognome</strong></td><td>${lastName}</td></tr>` : ""}
          ${phone ? `<tr><td><strong>Telefono</strong></td><td>${phone}</td></tr>` : ""}
          ${fromDateTime ? `<tr><td><strong>Dal</strong></td><td>${fromDateTime}</td></tr>` : ""}
          ${toDateTime ? `<tr><td><strong>Al</strong></td><td>${toDateTime}</td></tr>` : ""}
          ${pickupPlace ? `<tr><td><strong>Ritiro</strong></td><td>${pickupPlace}</td></tr>` : ""}
          ${dropoffPlace ? `<tr><td><strong>Consegna</strong></td><td>${dropoffPlace}</td></tr>` : ""}
        </table>
      </div>
    `;

    const host = process.env.SMTP_HOST || "";
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || "false") === "true";
    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";
    const authMode = (process.env.SMTP_AUTH || "login").toLowerCase(); // 'login' | 'oauth2'

    if (!host || !user || !pass) {
      return NextResponse.json(
        { ok: false, error: "Missing SMTP configuration (host/user/pass)" },
        { status: 500 }
      );
    }

    let transporter: nodemailer.Transporter;
    if (authMode === "oauth2") {
      const clientId = process.env.OAUTH_CLIENT_ID || "";
      const clientSecret = process.env.OAUTH_CLIENT_SECRET || "";
      const refreshToken = process.env.OAUTH_REFRESH_TOKEN || "";
      if (!clientId || !clientSecret || !refreshToken) {
        return NextResponse.json(
          { ok: false, error: "Missing OAuth2 variables (clientId/clientSecret/refreshToken)" },
          { status: 500 }
        );
      }
      transporter = nodemailer.createTransport({
        service: (host.includes("gmail") ? "gmail" : undefined) as any,
        host: host || undefined,
        port: host ? port : undefined,
        secure: host ? secure : undefined,
        auth: {
          type: "OAuth2",
          user,
          clientId,
          clientSecret,
          refreshToken,
        },
      } as any);
    } else {
      transporter =
        host.includes("gmail.com") || host === "smtp.gmail.com"
          ? nodemailer.createTransport({
              service: "gmail",
              auth: { user, pass },
            })
          : nodemailer.createTransport({
              host,
              port,
              secure,
              auth: { user, pass },
            });
    }

    // Verifica credenziali/connessione per errori chiari (es. 535 Gmail)
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject,
      html,
    });

    // redirect al thank-you
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  } catch (err: any) {
    const message =
      (err && (err.response || err.message)) ||
      "Mail send failed";
    console.error("SMTP error:", err);
    return NextResponse.json({ ok: false, error: String(message) }, { status: 500 });
  }
}


