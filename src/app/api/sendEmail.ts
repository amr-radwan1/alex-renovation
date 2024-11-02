"use server";

export async function sendEmail(data: { name: string; email: string; phoneNumber: string; message: string }) {
    try {
        const response = await fetch('http://localhost:3000/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error sending email:', errorData.error);
            return { error: errorData.error, status: response.status };
        }

        const emailData = await response.json();
        return { data: emailData, status: 200 };
    } catch (error) {
        console.error('Error sending email:', error);
        return { error: 'An unexpected error occurred', status: 500 };
    }
}
