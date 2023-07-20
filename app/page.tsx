import { getChats, getUserVerification } from "./lib/actions"
//import { getServerSession } from "next-auth"
import { nanoid } from "nanoid"
import Chat from "./components/Chat"
import WelcomeNoLogged from "./components/WelcomeNoLogged"
import PaymentRequestPage from "./components/PaymentRequestPage"
import { auth } from "@/auth"

async function Home() {

  const session = await auth()
  
  if (!session || !session.user) return <WelcomeNoLogged/>
  
  const verified = await getUserVerification(session.user.email)
  const chats = await getChats(session.user.email)  
  console.log(chats)
  const id = nanoid()

  return (
    <>
      {chats.length >= 5 && !verified ? <PaymentRequestPage /> : <Chat id={id} initMessages={[]} session={session}/>}
    </>
  )
}

export default Home