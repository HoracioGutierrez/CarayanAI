"use client"
import { signIn } from "next-auth/react";

type LoginButtonProps = {
    className?: string,
    text ?: string
}

function LoginButton({ className , text = "login" }: LoginButtonProps) {
    return (
        <button onClick={() => signIn("google", { callbackUrl: "https://carayanai-manual.vercel.app/api/auth/callback/google"})} className={`${className}`}>{text}</button>
    )
}
export default LoginButton