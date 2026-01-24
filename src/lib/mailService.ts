import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
}

export const sendEmail = async (options: MailOptions) => {
    try {
        const info = await transporter.sendMail({
            from: options.from,
            to: options.to,
            subject: options.subject,
            html: options.html,
            replyTo: options.replyTo,
        });
        console.log('Email sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
};
