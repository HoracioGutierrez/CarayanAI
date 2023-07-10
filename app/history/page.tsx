import { getServerSession } from "next-auth"
import { getChats } from "../lib/actions"
import LoginButton from "../components/LoginButton"

async function HistoryPage() {

    const session = await getServerSession()

    if (!session || !session.user) return <LoginButton />

    const chats = await getChats(session.user.email)

    return (
        <>
            <h2 className="text-3xl">History</h2>
            <section className="flex flex-col gap-2">
                {chats.map((chat: any) => (
                    <div key={chat.id}>
                        <div className="border-2 rounded-md p-2 bg-zinc-800 hover:bg-zinc-900 cursor-pointer">
                            {chat.title}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
export default HistoryPage