import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RELATIA_API_TOKEN =
  "XW-zkYH3VlMZbLFrpqnglFREYCW_AXUZ_Mna6AN9GdscBjn4CR59cIXosDV6g4g6";

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();

    /* ── Estrai tutti i campi dal form ── */
    const firstName = String(form.get("firstName") ?? "");
    const lastName = String(form.get("lastName") ?? "");
    const email = String(
      form.get("email") ?? form.get("newsletterEmail") ?? ""
    );
    const phone = String(form.get("phone") ?? "");
    const fromDateTime = String(form.get("fromDateTime") ?? "");
    const toDateTime = String(form.get("toDateTime") ?? "");
    const pickupPlace = String(form.get("pickupPlace") ?? "");
    const dropoffPlace = String(form.get("dropoffPlace") ?? "");
    const formName = String(
      form.get("formName") ??
        (email && !firstName && !phone ? "newsletter" : "booking")
    );
    const pageTitle = String(form.get("pageTitle") ?? "");
    const termsAccepted = String(form.get("termsAccepted") ?? "");
    const referer = request.headers.get("referer") ?? "";

    /* ── Costruisci il nome del form per l'oggetto email ── */
    const name = [firstName, lastName].filter(Boolean).join(" ");

    const subject = `Nuova richiesta dal sito Altitudo - ${pageTitle || formName}`;

    /* ── Mappa tutti i campi da mostrare nell'email ── */
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

    // Includi tutti i campi compilati (anche eventuali extra non mappati)
    const entries = Array.from(form.entries()).filter(
      ([, v]) => v && typeof v === "string" && v !== ""
    );

    const htmlRows = entries
      .map(([k, v]) => {
        const label = labelMap[k] || k;
        return `<tr><td style="padding:6px 12px;border:1px solid #ddd"><strong>${label}</strong></td><td style="padding:6px 12px;border:1px solid #ddd">${v}</td></tr>`;
      })
      .join("");

    const textRows = entries
      .map(([k, v]) => {
        const label = labelMap[k] || k;
        return `${label}: ${v}`;
      })
      .join("\n");

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">${subject}</h2>
        <p style="margin:0 0 12px">
          <strong>Pagina:</strong> ${pageTitle || formName}<br/>
          <strong>URL:</strong> ${referer}
        </p>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:420px">
          ${htmlRows}
        </table>
      </div>
    `;

    const text = `${subject}\n\nPagina: ${pageTitle || formName}\nURL: ${referer}\n\n${textRows}`;

    /* ── Configurazione SMTP (Zoho) ── */
    const host = process.env.SMTP_HOST || "smtppro.zoho.eu";
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || "false") === "true";
    const user = process.env.SMTP_USER || "info@altitudo.club";
    const pass = process.env.SMTP_PASS || "";

    if (!pass) {
      return NextResponse.json(
        { ok: false, error: "Missing SMTP_PASS environment variable" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.verify();

    /* ── 1) Invio email ── */
    const mailResult = await transporter.sendMail({
      from: `Altitudo <info@altitudo.club>`,
      to: "info@altitudo.club",
      cc: "altitudo.club@gmail.com",
      replyTo: email || undefined,
      subject,
      html,
      text,
    });

    /* ── 2) Sincronizzazione CRM Relatia (non bloccante) ── */
    const crmPayload: Record<string, string> = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      source: "Sito Altitudo",
      page_url: referer,
    };

    // Aggiungi campi opzionali solo se presenti
    if (fromDateTime) crmPayload.data_evento = fromDateTime;
    if (toDateTime) crmPayload.durata = toDateTime;
    if (pickupPlace) crmPayload.luogo_ritiro = pickupPlace;
    if (dropoffPlace) crmPayload.luogo_consegna = dropoffPlace;
    if (termsAccepted) crmPayload.consenso = termsAccepted;
    if (formName) crmPayload.tipo_evento = formName;
    if (pageTitle) crmPayload.pagina = pageTitle;

    let crmResult: { ok: boolean; status?: number; error?: string } = {
      ok: false,
    };

    try {
      const crmResponse = await fetch(
        "https://altitudo.relatiacrm.com/crm/webhook/website/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RELATIA_API_TOKEN}`,
          },
          body: JSON.stringify(crmPayload),
        }
      );

      crmResult = {
        ok: crmResponse.ok,
        status: crmResponse.status,
      };

      if (crmResponse.ok) {
        console.log("CRM Relatia: sincronizzazione riuscita", crmResult);
      } else {
        const body = await crmResponse.text();
        crmResult.error = body;
        console.error("CRM Relatia: errore", crmResult);
      }
    } catch (crmErr: any) {
      crmResult = {
        ok: false,
        error: crmErr?.message || "CRM request failed",
      };
      console.error("CRM Relatia: eccezione", crmResult);
    }

    /* ── Risposta ── */
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  } catch (err: any) {
    const message =
      (err && (err.response || err.message)) || "Mail send failed";
    console.error("SMTP error:", err);
    return NextResponse.json(
      { ok: false, error: String(message) },
      { status: 500 }
    );
  }
}
