import { getServerSession } from "next-auth"
import { getChats } from "../lib/actions"
import LoginButton from "../components/LoginButton"

async function HistoryPage() {

    const session = await getServerSession()

    if (!session || !session.user) return <LoginButton />

    const chats = await getChats(session.user.email)

    return (
        <>
            <h2>History</h2>
            <section>
                {chats.map((chat: any) => (
                    <div key={chat.id}>
                        <div >
                            {chat.title}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
export default HistoryPage