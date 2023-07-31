import LoginButton from "./LoginButton"
import Link from "next/link"
import ToggleMenu from "./Toggle"
import Image from "next/image"
import carayaniAvatar from "../assets/carayania-avatar.png"
import { auth } from "@/auth"

export const dynamic = "force-static"



async function Header() {

    const session = await auth()

    return (
        <header className="flex justify-between p-4 gap-4">
            <Link href={"/"} className="flex items-center gap-2" prefetch={false}>
                <Image src={carayaniAvatar} width={50} height={50} alt="logo" className="rounded-full" />
            </Link>
            <nav className="flex gap-4 items-center">
                {session ? (session && session.user && session.user.picture) && <ToggleMenu src={session.user.picture} userName={session.user.name}/> : <LoginButton />}
            </nav>
        </header>

    )
}

export default Header