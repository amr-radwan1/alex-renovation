import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
}) => (
  <div>
    <h1>Message from, {firstName}!</h1>
    <h1>Phone Number: </h1>
    <p>{message}</p> {/* Display the message */}
  </div>
);
