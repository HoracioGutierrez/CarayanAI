import { getServerSession } from "next-auth"
import LoginButton from "./LoginButton"
import Link from "next/link"
import ToggleMenu from "./Toggle"

async function Header() {

    const session = await getServerSession()

    return (
        <header className="flex justify-between p-4 gap-4">
            <Link href={"/"}>
                <h1 className="text-3xl">CarayanIA</h1>
            </Link>
            <nav className="flex gap-4 items-center">
                {session ? (session && session.user && session.user.image) && <ToggleMenu src={session.user.image} userName={session.user.name}/> : <LoginButton />}
            </nav>
        </header>

    )
}

export default Header