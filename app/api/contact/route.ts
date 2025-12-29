const RESEND_ENDPOINT = "https://api.resend.com/emails";
const BRAND_NAME = "Art & Smile Dental Clinic";
const TEXT_COLOR = "#2b2b2b";
const MUTED_COLOR = "#6f6f6f";
const BORDER_COLOR = "#e5e5e5";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const logoUrl = process.env.CONTACT_LOGO_URL ?? "";

  if (!apiKey || !toEmail) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "Phone: -",
    "",
    message,
  ].join("\n");
  const messageHtml = escapeHtml(message).replace(/\r?\n/g, "<br />");
  const htmlBody = `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New contact message</title>
  </head>
  <body style="margin:0; padding:0; background-color:#ffffff; color:${TEXT_COLOR};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; background-color:#ffffff; border:1px solid ${BORDER_COLOR}; border-radius:18px; overflow:hidden;">
            <tr>
              <td align="center" style="padding:20px 24px; border-bottom:1px solid ${BORDER_COLOR};">
                ${
                  logoUrl
                    ? `<img src="${logoUrl}" alt="${BRAND_NAME}" style="display:block; max-width:200px; height:auto;" />`
                    : `<div style="font-size:18px; font-weight:700; color:${TEXT_COLOR};">${BRAND_NAME}</div>`
                }
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <h1 style="margin:0 0 12px; font-size:20px; color:${TEXT_COLOR};">New contact message</h1>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                  <tr>
                    <td style="padding:6px 0; font-weight:600; color:${TEXT_COLOR}; width:110px;">Name</td>
                    <td style="padding:6px 0; color:${TEXT_COLOR};">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; font-weight:600; color:${TEXT_COLOR};">Email</td>
                    <td style="padding:6px 0; color:${TEXT_COLOR};">${escapeHtml(email)}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; font-weight:600; color:${TEXT_COLOR};">Phone</td>
                    <td style="padding:6px 0; color:${TEXT_COLOR};">${escapeHtml(phone || "-")}</td>
                  </tr>
                </table>
                <p style="margin:16px 0 8px; font-size:14px; font-weight:600; color:${TEXT_COLOR};">Message</p>
                <div style="padding:12px 14px; border:1px solid ${BORDER_COLOR}; border-radius:12px; color:${TEXT_COLOR}; font-size:14px; line-height:1.6;">
                  ${messageHtml}
                </div>
                <p style="margin:16px 0 0; font-size:12px; color:${MUTED_COLOR};">Reply directly to respond.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New contact message from ${name}`,
      reply_to: email,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: "Unable to send message right now." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
