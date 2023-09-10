import React, { useState } from 'react';

import { Button, Container, TextField, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";

const AdminLogin = () => {
    const router = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Replace this with your actual authentication logic
        if (username === 'admin' && password === 'password') {
            // If authentication is successful, set the user as admin (you may use a state management solution)
            // Redirect to the admin dashboard or perform the necessary actions for authentication
            localStorage.setItem('admin-authenticated', true);
            router('/admin')
;            // alert('Login Successful');
        } else {
            setError('Invalid username or password');
            localStorage.removeItem('admin-authenticated');
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Admin Login
            </Typography>
            <form>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Typography variant="body2" color="error">{error}</Typography>}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default AdminLogin;
