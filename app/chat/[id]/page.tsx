import Chat from "@/app/components/Chat"
import { getChatMessages } from "@/app/lib/actions"


type Props = {
    params: {
        id: string
    }
}

async function ChatPage({ params: { id } }: Props) {

    const chat = await getChatMessages(id)

    return (
        <Chat initMessages={chat && chat.messages ? chat.messages : []} id={id} />
    )
}

export default ChatPage