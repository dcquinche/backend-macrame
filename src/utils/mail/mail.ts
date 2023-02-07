import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

export function sendMailSendGrid(data: sgMail.MailDataRequired) {
    const apiKey = process.env.SENDGRID_API_KEY as string;
    sgMail.setApiKey(apiKey);
    return sgMail.send(data);
}
