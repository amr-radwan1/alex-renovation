import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { Resend } from 'resend';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    
    const resend = new Resend('re_Mo9Fzbkp_3CsnZPv24q6DDRuPSsbLjCkj'); // Replace with your actual Resend API key

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await resend.emails.send({
                from: `${formData.email}`,
                to: 'amr.radwan2006@gmail.com',
                subject: `Message from ${formData.name}`,
                html: `
                    <h1>Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Phone Number:</strong> ${formData.number}</p>
                    <p><strong>Message:</strong> ${formData.message}</p>
                `
            });
            alert('Email sent successfully!');
            // Clear form after submission
            setFormData({ name: '', email: '', number: '', message: '' }); 
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <div id='Contact' className="bg-stone-800 text-white grid justify-center mt-0 py-20 uppercase">
            <div className="justify-self-center w-11/12 md:w-10/12 lg:grid grid-cols-2 lg:w-11/12 gap-x-3 xl:w-10/12 xl:gap-3">
                <div className="space-y-10">
                    <div className="font-bold space-y-2">
                        <h3 className="text-lg md:text-xl">Alex Home Renovations</h3>
                        <h1 className="text-3xl md:text-5xl lg:text-3xl xl:text-4xl">Contact Us Now!</h1>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2 lg:gap-3">
                        <div className="default-contact-text">
                            <span className="material-icons" style={{ color: '#d84315' }}>email</span>
                            <div className="space-y-1">
                                <h4 className="font-bold text-md md:text-xl">OUR EMAIL</h4>
                                <p className="md:text-lg lowercase">info@alexrenovations.com</p>
                            </div>
                        </div>
                        <div className="default-contact-text">
                            <span className="material-icons" style={{ color: '#d84315' }}>map</span>
                            <div className="space-y-1">
                                <h4 className="font-bold text-md md:text-xl">Address</h4>
                                <p className="md:text-lg lowercase">1234, ABC, Brampton, Ontario, L6E 4X9, Canada</p>
                            </div>
                        </div>
                        <div className="default-contact-text">
                            <span className="material-icons" style={{ color: '#d84315' }}>phone</span>
                            <div className="space-y-1">
                                <h4 className="font-bold text-md md:text-xl">Phone Number</h4>
                                <p className="md:text-lg lowercase">419-999-0241</p>
                            </div>
                        </div>
                        <span className="material-icons w-64" style={{ color: '#d84315' }}>facebook</span>
                    </div>
                </div>

                <div className="bg-stone-800 Contact-Form mt-20 border border-solid border-white p-2 lg:mt-0 lg:-translate-y-1/4">
                    <form name="message-form" className="white bg-white grid gap-y-4 py-10 px-5 text-xl lg:gap-y-7" onSubmit={handleSubmit}>
                        <h1 className='text-stone-800 font-bold lg:text-3xl'>SEND A MESSAGE</h1>
                        <TextField
                            id="name"
                            name="name"
                            label="YOUR NAME"
                            variant="standard"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            id="email"
                            name="email"
                            label="EMAIL"
                            variant="standard"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            id="number"
                            name="number"
                            label="PHONE NUMBER"
                            variant="standard"
                            value={formData.number}
                            onChange={handleChange}
                        />
                        <TextField
                            id="message"
                            name="message"
                            label="ENTER YOUR MESSAGE"
                            variant="standard"
                            multiline
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                height: { xs: '60px', sm: '75px', md: '90px' },
                                width: { xs: '150px', sm: '180px', md: '220px' },
                                borderRadius: '5px',
                                backgroundColor: 'rgba(221, 44, 0, 0.8)',
                                color: 'white',
                                fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '22px' },
                                fontWeight: 700,
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.4s ease',
                                justifySelf: "center",
                                '&:hover': {
                                    backgroundColor: 'rgba(221, 44, 0, 0.6)'
                                },
                            }}
                        >
                            CONTACT US
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
