"use client"

import LoginButton from "./LoginButton"
import Link from "next/link"
import ToggleMenu from "./Toggle"
import Image from "next/image"
import carayaniAvatar from "../assets/carayania-avatar.png"
import { useSession } from "next-auth/react"

export const dynamic = "force-dynamic"

function Header() {

    const {data:session} = useSession()

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