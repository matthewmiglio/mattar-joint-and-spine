import { NextResponse } from 'next/server';

// TODO: Integrate an email service (e.g. Resend, SendGrid, Nodemailer)
// to forward submissions to the clinic's inbox.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    // Log submission for now — replace with email delivery later
    console.log('--- New Contact Form Submission ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone || '(not provided)');
    console.log('Message:', message);
    console.log('----------------------------------');

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
