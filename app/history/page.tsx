import { getChats } from "../lib/actions"
import LoginButton from "../components/LoginButton"
import Link from "next/link"
import DeleteButton from "../components/DeleteButton"
import ShareButton from "../components/ShareButton"
//import { auth } from "@/auth"
import { Metadata } from "next"
import { getServerSession } from "next-auth"

export const metadata: Metadata = {
    title: "History",
    description: "Aca podes revisar las conversaciones viejas que tuviste con CarayanAI",
}

async function HistoryPage() {

    // const session = await auth()
    const session = await getServerSession()

    if (!session || !session.user) return <LoginButton />

    const chats = await getChats(session.user.email)

    const formatDate = (date: number) => {

        const d = new Date(date)

        const day = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()

        const hours = d.getHours()
        const minutes = d.getMinutes()

        return `${day}/${month}/${year} ${hours}:${minutes}`
    }

    return (
        <section className="border-2 bg-slate-900 border-slate-600 rounded p-4 flex flex-col gap-8 ">
            <h2 className="text-4xl text-white mb-8 font-bold">History</h2>
            <p className="font-thin  text-lg  text-white">Aca podes revisar las conversaciones viejas que tuviste con Pablo. Hacele click a cualquiera : </p>

            <section className="flex flex-col gap-4 mt-8">
                {chats.map((chat: any) => {
                    return (
                        <article key={chat.id} className="border-2 rounded-md p-2 bg-zinc-800 hover:bg-zinc-900 cursor-pointer ">
                            <Link href={chat.path} className="w-full justify-between flex">
                                <div>
                                    <h4>{chat.title || "(sin texto)"}</h4>
                                    <p className="text-xs font-thin">{formatDate(chat.createdAt)}</p>
                                </div>
                                <div className="flex items-center">
                                    <ShareButton id={chat.id} />
                                    <DeleteButton id={chat.id} />
                                </div>
                            </Link>
                        </article>
                    )
                })}
            </section>
        </section>
    )
}
export default HistoryPage