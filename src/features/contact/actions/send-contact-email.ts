'use server';

import { Resend } from 'resend';

import type { ContactFormValues } from '../schema';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'alirezatt705@gmail.com';

// Simple HTML escape function to prevent injection
const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function sendContactEmail(data: ContactFormValues) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br />');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Message</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f4f4f7; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f4f7; padding: 24px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" max-width="600px" cellspacing="0" cellpadding="0" border="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px 32px; text-align: center;">
                    <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:bold;">Portfolio Contact</h1>
                    <p style="margin:8px 0 0; color:#e0e0ff; font-size:14px;">New message from your website</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 32px 32px 24px;">
                    <p style="font-size:16px; color:#333333; line-height:1.5;">
                      <strong>Name:</strong> ${safeName}<br/>
                      <strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#667eea;">${safeEmail}</a><br/>
                      <strong>Subject:</strong> ${safeSubject}
                    </p>
                    <div style="margin: 24px 0 0; padding: 16px; background:#f9f9fc; border-left: 4px solid #667eea; border-radius: 4px;">
                      <p style="margin:0; color:#555555; font-size:14px; line-height:1.6;">
                        ${safeMessage}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 32px; text-align:center; background:#fafafc; border-top:1px solid #eeeeee;">
                    <p style="margin:0; color:#999999; font-size:12px;">This email was sent from your portfolio contact form.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const text = `New message from ${data.name} (${data.email})\n\nSubject: ${data.subject}\n\n${data.message}`;

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      subject: `New message from ${data.name}: ${data.subject}`,
      replyTo: data.email,
      html,
      text,
    });

    return { success: true };
  } catch {
    return { success: false, error: 'Failed to send email' };
  }
}
