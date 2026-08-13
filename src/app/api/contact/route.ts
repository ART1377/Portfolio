import { type NextRequest, NextResponse } from 'next/server';

import { z } from 'zod';

import { sendContactEmail } from '@/features/contact/actions/send-contact-email';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const result = await sendContactEmail({
      name: validatedData.name,
      email: validatedData.email, 
      subject: validatedData.subject,
      message: validatedData.message,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error, status: 500 }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors, status: 400 }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal server error', status: 500 }, { status: 500 });
  }
};
