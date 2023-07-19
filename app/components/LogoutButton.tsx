"use client"
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
    className?: string,
    text?: string,
    closeMenu?: any
}

function LogoutButton({ className, text = "Logout", closeMenu }: LogoutButtonProps) {
    return (
        <button onClick={(e) => { closeMenu(e); signOut() }} className={`${className} text-left`}>{text}</button>
    )
}
export default LogoutButton