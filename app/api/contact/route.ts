import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  console.log('[contact] Received contact form submission');

  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    console.log('[contact] Parsed body:', { name, email, phone: phone || '(not provided)', message });

    if (!name || !email || !message) {
      console.error('[contact] Validation failed — missing required fields:', {
        hasName: !!name,
        hasEmail: !!email,
        hasMessage: !!message,
      });
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const from = `Contact Form <${process.env.RESEND_FROM}>`;
    const to = process.env.RESEND_TO!.split(',').map((e) => e.trim());

    console.log('[contact] Sending email via Resend...');
    console.log('[contact] From:', from);
    console.log('[contact] To:', to);
    console.log('[contact] ReplyTo:', email);
    console.log('[contact] Subject:', `New Contact Form Submission from ${name}`);

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '(not provided)'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('[contact] Resend response:', JSON.stringify(result, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Error sending email:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
