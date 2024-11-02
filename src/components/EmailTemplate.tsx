// src/components/EmailTemplate.tsx
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <h1>Message from {firstName}</h1>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone Number:</strong> {phoneNumber}</p>
    <p><strong>Message:</strong> {message}</p>
  </div>
);
