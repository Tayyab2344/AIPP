import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailService';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. Send Welcome Email to Subscriber
    const welcomeResult = await sendEmail({
      from: `"AIPP" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Welcome to the Athena Institute for Political Praxis',
      replyTo: 'Connect.aipp@gmail.com',
      html: `
        <div style="font-family: 'serif', 'Georgia', serif; color: #0F172A; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #F1F5F9;">
            <h1 style="color: #B19B4C; font-size: 24px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">Intellectual Network Joined</h1>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for subscribing to the <strong>Athena Institute for Political Praxis (AIPP)</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                You are now part of a community dedicated to reimagining global politics through strategic intellect and inclusive praxis. You will receive updates on our latest research, institutional insights, and upcoming strategic simulations.
            </p>
            <div style="margin: 40px 0; padding: 20px; background-color: #F8FAFC; border-left: 4px solid #B19B4C;">
                <p style="margin: 0; font-style: italic; font-size: 14px; color: #64748B;">
                    "Advancing Women's Strategic Intellect in Political Praxis"
                </p>
            </div>
            <p style="font-size: 14px; color: #64748B;">
                Regards,<br />
                The AIPP Team
            </p>
            <hr style="border: none; border-top: 1px solid #F1F5F9; margin: 30px 0;" />
            <p style="font-size: 10px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.1em; text-align: center;">
                © 2024 Athena Institute for Political Praxis
            </p>
        </div>
      `,
    });

    // 2. Send Notification to Admin
    await sendEmail({
      from: `"AIPP System" <${process.env.SMTP_USER}>`,
      to: 'Connect.aipp@gmail.com',
      subject: 'New Newsletter Subscriber: ' + email,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Subscriber Alert</h2>
            <p>A new user has joined the AIPP mailing list:</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error: any) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
