import { getServerSession } from "next-auth"
import { getChats } from "../lib/actions"
import LoginButton from "../components/LoginButton"
import Link from "next/link"

async function HistoryPage() {

    const session = await getServerSession()

    if (!session || !session.user) return <LoginButton />

    const chats = await getChats(session.user.email)

    return (
        <>
            <h2 className="text-3xl">History</h2>
            <p>Aca podes revisar las conversaciones viejas que tuviste con Pablo. Hacele click a cualquiera : </p>
            <section className="flex flex-col gap-2">
                {chats.map((chat: any) => (
                    <article key={chat.id} className="border-2 rounded-md p-2 bg-zinc-800 hover:bg-zinc-900 cursor-pointer">
                        <Link href={chat.path}>
                            {chat.title}
                        </Link>
                    </article>
                ))}
            </section>
        </>
    )
}
export default HistoryPage