"use client"
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
    className?: string,
    text?: string
}

function LogoutButton({ className, text = "Logout" }: LogoutButtonProps) {
    return (
        <button onClick={() => signOut()} className={`${className} text-left`}>{text}</button>
    )
}
export default LogoutButton