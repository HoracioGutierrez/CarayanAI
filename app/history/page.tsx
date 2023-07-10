import { getServerSession } from "next-auth"
import { getChats } from "../lib/actions"
import LoginButton from "../components/LoginButton"
import Link from "next/link"
import { TrashIcon } from "@radix-ui/react-icons"

async function HistoryPage() {

    const session = await getServerSession()

    if (!session || !session.user) return <LoginButton />

    const chats = await getChats(session.user.email)

    //console.log(chats)
    //TODO bhay chat.createdAt (ej 1689003239994) que se puede convertir a fecha
    //TODO hay chat.messages que es un array de mensajes, se podria mostrar la cantidad de mensajes
    //TODO Hay que separar el boton de borrar en un componente aparte, y hacer que borre el chat como client component porque sino no tiene onClick
    //TODO habria que hacer un popup de confirmacion de borrado, asi ya hay de paso un popup global

    return (
        <>
            <h2 className="text-3xl">History</h2>
            <p>Aca podes revisar las conversaciones viejas que tuviste con Pablo. Hacele click a cualquiera : </p>
            <section className="flex flex-col gap-2">
                {chats.map((chat: any) => (
                    <article key={chat.id} className="border-2 rounded-md p-2 bg-zinc-800 hover:bg-zinc-900 cursor-pointer justify-between flex">
                        <Link href={chat.path}>
                            {chat.title}
                        </Link>
                        <button>
                            <TrashIcon width={25} height={20}/>
                        </button>
                    </article>
                ))}
            </section>
        </>
    )
}
export default HistoryPage