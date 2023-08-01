import { getUserVerification } from "./lib/actions"
import { nanoid } from "nanoid"
import Chat from "./components/Chat"
import WelcomeNoLogged from "./components/WelcomeNoLogged"
import PaymentRequestPage from "./components/PaymentRequestPage"
//import { auth } from "@/auth"
import { getMessagesCount, verifyUser } from "./lib/serverActions"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth"

async function Home() {

  //const session = await auth()
  //const { data: session } = useSession()
  const session = await getServerSession()

  if (!session || !session.user) return <WelcomeNoLogged />

  const verified = await getUserVerification(session.user.email)
  const count = await getMessagesCount(session.user.email as string)

  const id = nanoid()

  let verifiedUser = true


  if (count >= 5 && !verified) {
    verifiedUser = false
  }

  return (
    <>
      {!verifiedUser ? <PaymentRequestPage /> : <Chat verifiedUser={verifiedUser} id={id} initMessages={[]} session={session} />}
    </>
  )
}

export default Home