import { getServerSession } from "next-auth"
import LogoutButton from "./LogoutButton"
import LoginButton from "./LoginButton"
import Image from "next/image"
import Link from "next/link"

async function Header() {

  const session = await getServerSession()

    return (
        <header className="flex justify-between p-4">
            <Link href={"/"}>
                <h1>CarayanAI</h1>
            </Link>
            <nav className="flex gap-4 items-center">
                {session && <Link href="/history">history</Link>}
                {session ? <LogoutButton/> : <LoginButton/>}
                {(session && session.user && session.user.image) && <Image src={session.user.image} alt="user image" width={35} height={35} className="rounded-full"/>}
            </nav>
        </header>
    )
}

export default Header