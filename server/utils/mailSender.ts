import nodemailer from 'nodemailer';
require('dotenv').config();

interface MailSend {
    email: string;
    title: string;
    body: string;
}

export const mailSender = async ({ email, title, body }: MailSend): Promise<any> => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from: 'chitfund || --by suraj',
            to: email,
            subject: title,
            html: body,
        });

        return info;
    } catch (error) {
        console.log("Error in nodemailer in mailSender:", error);
    }
};
