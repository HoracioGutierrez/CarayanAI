import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'
import SuccessRedirect from "../components/SuccessRedirect"

async function SuccessPage() {

    const session = await getServerSession()

    if (!session || !session.user || !session.user.email) {
        redirect("/")
    }


    return (
        <SuccessRedirect email={session.user.email}/>
    )
}

export default SuccessPage