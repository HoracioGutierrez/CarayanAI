//import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'
import SuccessRedirect from "../components/SuccessRedirect"
//import { auth } from "@/auth"
import { getServerSession } from 'next-auth'

async function SuccessPage() {

    //const session = await auth()
    const session = await getServerSession()

    if (!session || !session.user || !session.user.email) {
        redirect("/")
    }


    return (
        <SuccessRedirect email={session.user.email}/>
    )
}

export default SuccessPage