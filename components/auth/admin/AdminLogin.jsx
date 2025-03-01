'use client'

import React from 'react'
import girl from "@/public/image/home/login-girl.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import LoginForm from '../LoginForm'


const AdminLogin = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch('http://localhost:3000/api/v1/auth/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Network response was not ok');
            }

            if (response.status === 404) {
                throw new Error('User Not Found');
            }

            const data = await response.json();
            // Handle successful login, e.g., save token, redirect, etc.
            console.log('Login successful:', data);
        } catch (error) {
            console.error('There was a problem with the login request:', error);
            alert(`Login failed: ${error.message}`);
        }
    }
    return (
        <LoginForm onSubmit={handleSubmit} />
    )
}

export default AdminLogin