import Chat from "@/app/components/Chat"
import { getChatMessages } from "@/app/lib/actions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


type Props = {
    params: {
        id: string
    }
}

async function ChatPage({ params: { id } }: Props) {

    const chat = await getChatMessages(id)

    const session = await getServerSession()

    if (!session) {
        redirect("/")
    }

    return (
        <Chat initMessages={chat && chat.messages ? chat.messages : []} id={id} />
    )
}

export default ChatPage