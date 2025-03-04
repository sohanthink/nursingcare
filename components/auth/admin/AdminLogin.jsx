'use client'

import React from 'react'
import LoginForm from '../LoginForm'
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/authStore';

const AdminLogin = () => {
    const router = useRouter();
    const login = useAuthStore(state => state.login);

    const onSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log('Email:', email, 'Password:', password);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/auth/sign-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const contentType = response.headers.get('content-type');
            if (!response.ok) {
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Network response was not ok');
                } else {
                    const errorText = await response.text();
                    throw new Error(errorText || 'Network response was not ok');
                }
            }

            if (response.status === 404) {
                throw new Error('User Not Found');
            }

            const data = await response.json();
            login(data.user, data.token);

            router.push('/dashboard/admin');

            // Handle successful login, e.g., save token, redirect, etc.
            console.log('Login successful:', data);
        } catch (error) {
            console.error('There was a problem with the login request:', error);
            alert(`Login failed: ${error.message}`);
        }
    }

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default AdminLogin