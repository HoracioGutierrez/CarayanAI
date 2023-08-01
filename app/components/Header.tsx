"use client"
import LoginButton from "./LoginButton"
import Link from "next/link"
import ToggleMenu from "./Toggle"
import Image from "next/image"
import carayaniAvatar from "../assets/carayania-avatar.png"
//import { auth } from "@/auth"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/options"
import { useSession } from "next-auth/react"

export const dynamic = "force-dynamic"

// what used to be export function generateStaticParams
/* function staticParams() {
    
}

// fix "dynamic server usage" errors in dev mode by turning off static generation and forcing dynamic rendering
export const generateStaticParams = process.env.NODE_ENV === "production" ? staticParams : undefined;
export const dynamic = process.env.NODE_ENV === "production" ? 'auto' : 'force-dynamic';
 */

/* async function getData() {
    const res = await getServerSession()
    const data = await res
    //const res = await fetch("http://localhost:3000/api/custom")
    //const data = await res.json()
    console.log(data)
    return data
} */

function Header() {

    //const session = await getData()
    //const session = await auth()
    //const session = await getServerSession(authOptions)
    const {data:session} = useSession()

    //console.log(data)

    return (
        <header className="flex justify-between p-4 gap-4">
            <Link href={"/"} className="flex items-center gap-2" prefetch={false}>
                <Image src={carayaniAvatar} width={50} height={50} alt="logo" className="rounded-full" />
            </Link>
            <nav className="flex gap-4 items-center">
                {session ? (session && session.user && session.user.image) && <ToggleMenu src={session.user.image} userName={session.user.name} /> : <LoginButton />}
            </nav>
        </header>

    )
}

export default Header