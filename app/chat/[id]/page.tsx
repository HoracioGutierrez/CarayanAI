import Chat from "@/app/components/Chat"
import { getChatMessages } from "@/app/lib/actions"
import { auth } from "@/auth"
//import { getServerSession } from "next-auth"

type Props = {
    params: {
        id: string
    }
}

async function ChatPage({ params: { id } }: Props) {

    const chat = await getChatMessages(id)

    const session = await auth()

    return (
        <Chat initMessages={chat && chat.messages ? chat.messages : []} id={id} session={session} />
    )
}

export default ChatPage