import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject,
      html,
    });

    // redirect al thank-you
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ ok: false, error: "Mail send failed" }, { status: 500 });
  }
}


