import Chat from "@/app/components/Chat"
import { getChatMessages, getUserVerification } from "@/app/lib/actions"
import { getMessagesCount, unverifyUser, verifyUser } from "@/app/lib/serverActions"
import { auth } from "@/auth"
import { Metadata } from "next"
import { redirect } from "next/navigation"

type Props = {
    params: {
        id: string
    }
}

export const metadata: Metadata = {
    title: "Chat Playground"
}

async function ChatPage({ params: { id } }: Props) {

    const chat = await getChatMessages(id)
    const session = await auth()
    const verified = await getUserVerification(session.user.email)
    const count = await getMessagesCount(session.user.email as string)

    let verifiedUser = true
    if (count >= 5 && !verified) {
        verifiedUser = false
    }

    return (
        <Chat verifiedUser={verifiedUser} initMessages={chat && chat.messages ? chat.messages : []} id={id} session={session} />
    )
}

export default ChatPage