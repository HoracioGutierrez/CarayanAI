import { getChats, getUserVerification } from "./lib/actions"
import { getServerSession } from "next-auth"
import LoginButton from "./components/LoginButton"
import ChatPage from "./chat/[id]/page"
import { nanoid } from "nanoid"
import PaymentButton from "./components/PaymentButton"

async function Home() {

  const session = await getServerSession()
  
  if (!session || !session.user) return <LoginButton />
  
  const verified = await getUserVerification(session.user.email)
  const chats = await getChats(session.user.email)
  const id = nanoid()

  return (
    <>
      {chats.length >= 5 && !verified ? <PaymentButton /> : <ChatPage id={id} />}
    </>
  )
}

export default Home