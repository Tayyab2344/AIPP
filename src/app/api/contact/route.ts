import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailService';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { fullName, email, affiliation, natureOfInquiry, message } = data;

        await sendEmail({
            from: `"AIPP System" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL || 'Connect.aipp@gmail.com',
            subject: `New Institutional Inquiry: ${fullName}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; color: #0F172A; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #F1F5F9;">
                    <h2 style="color: #1A5261; border-bottom: 2px solid #F1F5F9; padding-bottom: 10px;">New Form Submission</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px 0; color: #64748B; font-size: 12px; text-transform: uppercase; font-bold;">Full Name</td>
                            <td style="padding: 10px 0; font-weight: bold;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #64748B; font-size: 12px; text-transform: uppercase; font-bold;">Email</td>
                            <td style="padding: 10px 0; font-weight: bold;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #64748B; font-size: 12px; text-transform: uppercase; font-bold;">Affiliation</td>
                            <td style="padding: 10px 0;">${affiliation || 'Not specified'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #64748B; font-size: 12px; text-transform: uppercase; font-bold;">Inquiry Nature</td>
                            <td style="padding: 10px 0;">${natureOfInquiry}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 30px; padding: 20px; background-color: #F8FAFC; border-radius: 4px;">
                        <p style="margin: 0; color: #64748B; font-size: 12px; text-transform: uppercase; font-bold; margin-bottom: 10px;">Message</p>
                        <p style="margin: 0; line-height: 1.6;">${message}</p>
                    </div>

                    <p style="margin-top: 40px; font-size: 11px; color: #94A3B8; text-align: center;">
                        This inquiry was submitted via the Athena Institute website.
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
