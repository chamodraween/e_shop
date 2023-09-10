import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TableContainer from "@mui/material/TableContainer";

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Email sent successfully.');
            } else {
                setErrorMessage('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setErrorMessage('Failed to send email.');
        }
    };

    return (
        <div>
            <TableContainer>
            <Typography variant="h5">Contact Us</Typography>
            {successMessage && <Typography className="success">{successMessage}</Typography>}
            {errorMessage && <Typography className="error">{errorMessage}</Typography>}
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        label="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        fullWidth
                        multiline
                        rows={4}
                    />
                </div>
                <div>
                    <Button
                        sx={{margin: 1,width: '99%'}}
                        type="submit"
                        variant="contained"
                        color="primary">
                        Submit
                    </Button>
                </div>
            </form>
            </TableContainer>
        </div>
    );
}

export default ContactForm;
