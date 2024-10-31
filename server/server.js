// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a transporter for nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, number, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'amr.radwan2006@gmail.com',
        subject: `Message from ${name}`,
        html: `
            <h1>Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone Number:</strong> ${number}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Failed to send email. Please try again later.');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
