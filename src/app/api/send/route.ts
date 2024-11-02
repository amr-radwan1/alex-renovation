import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY as string);
    try {
        const { name, email, phoneNumber, message } = await req.json();

        const emailData = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'amrradwan2006@gmail.com',
            subject: `Message from ${name}`,
            react: EmailTemplate({
                firstName: name,
                email,
                phoneNumber,
                message,
            }),
        });

        if (emailData.error) {
            console.error('Resend API Error:', emailData.error);
            return new Response(JSON.stringify({ error: emailData.error }), { status: 500 });
        }

        return new Response(JSON.stringify(emailData), { status: 200 });
    } catch (error) {
        console.error('Unexpected Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
