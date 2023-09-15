import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TableContainer from "@mui/material/TableContainer";
import Alert from "@mui/material/Alert";


function ContactForm() {
    const [formData, setFormData] = useState({ name: '', iemail: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://192.168.8.100:8006/api/v1/email', {
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
                {successMessage && (
                    <Alert sx={{ marginY: 3}} severity="success" color="info">
                        {successMessage}
                    </Alert>
                )}
                {errorMessage && (
                    <Alert sx={{ marginY: 3}} severity="success" color="info">
                        {errorMessage}
                    </Alert>
                )}
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        sx={{margin: 1,width: '99%'}}
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
                        sx={{margin: 1,width: '99%'}}
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.iemail}
                        onChange={(e) => setFormData({ ...formData, iemail: e.target.value })}
                        required
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        sx={{margin: 1,width: '99%'}}
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
