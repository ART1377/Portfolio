'use server';

import { Resend } from 'resend';

import type { ContactFormValues } from '../schema';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'your-email@example.com';

export async function sendContactEmail(data: ContactFormValues) {
  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      subject: `New message from ${data.name}: ${data.subject}`,
      replyTo: data.email,
      text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: 'Failed to send email' };
  }
}
