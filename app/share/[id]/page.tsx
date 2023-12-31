import { getAllChats, getChatMessages } from "@/app/lib/actions"
import Image from "next/image"
import avatar from "../../assets/carayania-avatar.png"
import { Metadata } from "next"

export const dynamic = 'force-dynamic'

type Props = {
    params: {
        id: string
    }
}

export const metadata: Metadata = {
    title: "Share Chat"
}

export async function generateStaticParams() {
    const cookieStore = await getAllChats()
    const paths = cookieStore.map((chat: any) => {
        return {
            params: {
                id: chat
            }
        }
    })
    return paths
}


async function ShareChatPage({ params: { id } }: Props) {

    const result = await getChatMessages(id)

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
        <>
            <h2 className="text-2xl">CarayanAI Chat</h2>
            <p className="font-thin font-xs mt-4">Este es el chat que tuviste con CarayanAI el {formatDate(result?.createdAt as number)}</p>
            <p>Podes compartir la URL de esta pagina que no se necesita estar logueado para verla!</p>
            <section className="mt-8">
                {result?.messages.map((message: any) => {
                    return (
                        <article key={message.id} className="flex flex-col gap-2">
                            <div className={`flex gap-4 p-4 ${message.role == "user" ? "justify-end bg-[rgba(255,255,255,0.2)]" : "justify-start"}`}>
                                {message.role == "user" && (
                                    <>
                                        <p>{message.content}</p>
                                        <Image
                                            src="https://api.dicebear.com/6.x/initials/svg?seed=U"
                                            alt={"user avatar"}
                                            width={40}
                                            height={40}
                                            className="w-[40px] h-[40px]"
                                        />
                                    </>
                                )}
                                {message.role == "assistant" && (
                                    <>
                                        <Image
                                            src={avatar}
                                            alt={"bot avatar"}
                                            width={40}
                                            height={40}
                                            className="w-[40px] h-[40px]"
                                        />
                                        <p>{message.content}</p>
                                    </>
                                )}
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default ShareChatPage