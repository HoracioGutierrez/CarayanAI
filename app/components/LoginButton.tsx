"use client"
import { signIn } from "next-auth/react";

type LoginButtonProps = {
    className?: string,
    text ?: string
}

function LoginButton({ className , text = "Login" }: LoginButtonProps) {
    return (
        <button onClick={() => signIn("google")} className={`${className}`}>{text}</button>
    )
}
export default LoginButton