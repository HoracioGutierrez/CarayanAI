//import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'
import SuccessRedirect from "../components/SuccessRedirect"
import { auth } from "@/auth"

async function SuccessPage() {

    const session = await auth()

    if (!session || !session.user || !session.user.email) {
        redirect("/")
    }


    return (
        <SuccessRedirect email={session.user.email}/>
    )
}

export default SuccessPage