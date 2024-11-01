import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';


export const dynamic = "force-dynamic";

export async function GET() {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['amrradwan2006@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'Amr', message: 'Thank you for signing up!' }), // Pass the message
          });
          

        if (error) {
        return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
