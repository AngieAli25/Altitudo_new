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
    const formName = String(form.get("formName") ?? (email && !firstName && !phone ? "newsletter" : "booking"));
    const pageTitle = String(form.get("pageTitle") ?? "");
    const source = request.headers.get("referer") ?? "";

    const hasBooking =
      firstName || lastName || phone || fromDateTime || toDateTime || pickupPlace || dropoffPlace;
    const subject = hasBooking || formName !== "newsletter"
      ? "Nuova richiesta prenotazione - Altitudo"
      : "Nuova iscrizione newsletter - Altitudo";

    const labelMap: Record<string, string> = {
      formName: "Modulo",
      pageTitle: "Pagina",
      email: "Email",
      firstName: "Nome",
      lastName: "Cognome",
      phone: "Telefono",
      fromDateTime: "Dal (data e ora)",
      toDateTime: "Al (data e ora)",
      pickupPlace: "Luogo di ritiro",
      dropoffPlace: "Luogo di consegna",
      newsletterEmail: "Email",
      termsAccepted: "Consenso termini",
    };

    // Costruisci tabella campi dinamicamente mostrando anche eventuali extra
    const entries = Array.from(form.entries())
      .filter(([k, v]) => v && typeof v === "string" && v !== "")
      .filter(([k]) => k !== "pageTitle"); // lo mostriamo a parte

    const rows = entries
      .map(([k, v]) => {
        if (k === "formName") v = formName;
        const label = labelMap[k] || k;
        if (k === "newsletterEmail" && formName === "newsletter") {
          // normalizza campo newsletter in Email
          return `<tr><td><strong>Email</strong></td><td>${v}</td></tr>`;
        }
        return `<tr><td><strong>${label}</strong></td><td>${v}</td></tr>`;
      })
      .join("");

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">Altitudo - ${subject}</h2>
        <p style="margin:0 0 12px">
          <strong>Pagina:</strong> ${pageTitle || source} <br/>
          <strong>URL:</strong> ${source}
        </p>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;min-width:420px">${rows}</table>
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
      from: process.env.MAIL_FROM || `Altitudo • Sito <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: email || undefined,
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


