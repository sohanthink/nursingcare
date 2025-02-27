import React from 'react'
import girl from "@/public/image/home/login-girl.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input'


const UserLogin = () => {
    return (
        <div className="bg-primary flex h-screen">
            <div className="w-1/2 flex flex-col justify-center p-10">
                <h1 className="text-white">Login to your Panel</h1>
                <p className="text-secondary text-2xl">Welcome to the User page</p>
                <Input className='text-white' type="email" placeholder="Email" />
            </div>
            <div className="w-1/2 h-screen bg-red-500 flex items-center justify-center">
                <Image
                    src={girl}
                    className="w-full h-full object-cover"
                    alt="nurse image"
                />
            </div>
        </div>
    )
}

export default UserLogin