import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // This is where you would integrate with Resend, Brevo, or another email provider.
        // For now, we'll log it and return success to keep the flow working.
        console.log(`Sending welcome email to: ${email}`);

        // Example Resend integration (commented out for now):
        /*
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Women Empowerment <onboarding@resend.dev>',
            to: email,
            subject: 'Welcome to our Community!',
            html: '<p>Thank you for subscribing to our updates.</p>',
          }),
        });
        */

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error: any) {
        console.error('Email API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
