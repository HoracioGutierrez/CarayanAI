import { getServerSession } from "next-auth"
import { getChats } from "../lib/actions"
import LoginButton from "../components/LoginButton"
import Link from "next/link"
import DeleteButton from "../components/DeleteButton"

async function HistoryPage() {

    const session = await getServerSession()

    if (!session || !session.user) return <LoginButton />

    const chats = await getChats(session.user.email)


    //TODO bhay chat.createdAt (ej 1689003239994) que se puede convertir a fecha
    //TODO hay chat.messages que es un array de mensajes, se podria mostrar la cantidad de mensajes

    return (
        <>
            <h2 className="text-2xl">History</h2>
            <p>Aca podes revisar las conversaciones viejas que tuviste con Pablo. Hacele click a cualquiera : </p>
            
            <section className="flex flex-col gap-2S">
                {chats.map((chat: any) => (
                    <article key={chat.id} className="border-2 rounded-md p-2 bg-zinc-800 hover:bg-zinc-900 cursor-pointer justify-between flex">
                        <Link href={chat.path}>
                            {chat.title}
                        </Link>
                        <DeleteButton id={chat.id}/>
                    </article>
                ))}
            </section>
        </>
    )
}
export default HistoryPage