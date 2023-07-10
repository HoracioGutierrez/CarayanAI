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
            <h2 className="mb-4">History</h2>
            <p>Aca podes revisar las conversaciones viejas que tuviste con Pablo. Hacele click a cualquiera : </p>
            <section>
                {chats.map((chat: any) => (
                    <div key={chat.id}>
                        <article>
                            <Link href={chat.path}>
                                {chat.title}
                            </Link>
                        </article>
                    </div>
                ))}
            </section>
        </>
    )
}
export default HistoryPage