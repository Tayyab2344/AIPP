import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailService';

export async function POST(req: Request) {
    try {
        const { fullName, email, organization, type, proposal } = await req.json();

        // 1. Send confirmation to applicant
        await sendEmail({
            from: `"AIPP Institutional" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Joining the AIPP Mission',
            html: `
                <div style="font-family: serif; color: #1a1f2b; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f1f1;">
                    <h1 style="font-size: 24px; border-bottom: 2px solid #1A5261; padding-bottom: 15px;">Athena Institute for Political Praxis</h1>
                    <p>Dear ${fullName},</p>
                    <p>Thank you for expressing your interest in joining our mission as a <strong>${type}</strong>.</p>
                    <p>AIPP is a growing community of thinkers and doers. Your interest in contributing to our work in political praxis and gender-responsive governance is greatly appreciated.</p>
                    <p style="font-style: italic;">"Action integrated for transformative change."</p>
                    <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 4px;">
                        <p style="font-size: 13px; color: #444; margin: 0;"><strong>What's Next?</strong></p>
                        <p style="font-size: 13px; color: #666; margin: 5px 0 0 0;">Our team periodically reviews all engagement interests. We will reach out to schedule a conversation if your skills and interests align with our current operational needs.</p>
                    </div>
                    <p style="margin-top: 40px; font-size: 14px; font-weight: bold;">In Solidarity,<br/>The AIPP Team</p>
                </div>
            `
        });

        // 2. Notify Admin
        await sendEmail({
            from: `"AIPP System" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL || 'Connect.aipp@gmail.com',
            subject: `NEW COLLABORATION: ${type} - ${fullName}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2 style="color: #1A5261;">New Engagement Proposal</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td></tr>
                        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${email}</td></tr>
                        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Organization:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${organization || 'Individual'}</td></tr>
                        <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Type:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${type}</td></tr>
                    </table>
                    <div style="margin-top: 20px; padding: 20px; border: 1px solid #eee; background: #fff;">
                        <strong>Proposal Extract:</strong>
                        <p style="white-space: pre-wrap;">${proposal}</p>
                    </div>
                </div>
            `
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Collaboration API Error:", error);
        return NextResponse.json({ error: 'Failed to process collaboration request' }, { status: 500 });
    }
}
