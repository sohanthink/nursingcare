'use client'

import React from 'react'
import girl from "@/public/image/home/login-girl.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'


const LoginForm = ({ onsubmit }) => {
    return (
        <div className="bg-primary flex h-screen">
            <div className="w-full md:w-1/2 flex flex-col justify-center p-10 space-y-3">
                <h1 className="text-white text-5xl">Login to your Panel.</h1>
                <p className="text-white text-3xl">Welcome to the System.</p>
                <form className='mt-3' onSubmit={onsubmit}>
                    <div className='mb-4'>
                        <Label className='text-white mb-2' htmlFor="email">Email</Label>
                        <Input className='text-white' type="email" id="email" placeholder="Email" required />
                    </div>
                    <div className='mb-4'>
                        <Label className='text-white mb-2' htmlFor="password">Password</Label>
                        <Input className='text-white' type="password" id="password" placeholder="Password" required />
                    </div>
                    <Button className="mt-4" type="submit" variant="outline">Button</Button>
                </form>
            </div>
            <div className="w-0 md:w-1/2 h-screen bg-red-500 flex items-center justify-center">
                <Image
                    src={girl}
                    className="w-full h-full object-cover"
                    alt="nurse image"
                />
            </div>
        </div>
    )
}

export default LoginForm