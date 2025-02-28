'use client'

import React from 'react'
import girl from "@/public/image/home/login-girl.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import LoginForm from '../LoginForm'


const UserLogin = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // Handle form submission logic here
        console.log({ email, password });
    }

    return (
        <LoginForm onsubmit={handleSubmit} />
    )
}

export default UserLogin