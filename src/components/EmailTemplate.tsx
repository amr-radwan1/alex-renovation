import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string; // Add message prop
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message, // Destructure the message prop
}) => (
  <div>
    <h1>Message from, {firstName}!</h1>
    <p>{message}</p> {/* Display the message */}
  </div>
);
