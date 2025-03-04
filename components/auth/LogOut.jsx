'use client'

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import useAuthStore from "@/store/authStore";

export default function Logout() {
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/");
    };
    return <Button onClick={handleLogout}>Logout</Button>;
}
