"use server";
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: { name: string; email: string; message: string }) {
    try {
        const { name, email, message } = data; // Extract data from the input
        const emailData = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email], // Use the email provided by the user
            subject: 'Hello world',
            react: EmailTemplate({ firstName: name, message }), // Pass the name and message to the EmailTemplate
        });

        // Check if there was an error in sending the email
        if (emailData.error) {
            return { error: 'Failed to send email', status: 500 };
        }

        return { data: emailData, status: 200 }; // Return the email data
    } catch (error) {
        console.error('Error sending email:', error); // Log the error for debugging
        return { error: 'An unexpected error occurred', status: 500 };
    }
}
