"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { verifyUser } from "../lib/serverActions"
import { redirect } from "next/navigation"

type Props = {
    email: string
}

function SuccessRedirect({ email }: Props) {

    const [verified, setVerified] = useState(false)

    useEffect(() => {
        if (email) {
            const verification = verifyUser(email as string)
            if (verification) {
                verification
                    .then(() => {
                        setVerified(true)
                    })
                    .catch(() => {
                        setVerified(false)
                    })
            }
        }
    }, [])

    if (verified){
        redirect("/")
    }


    return (
        <>
            <h2>Pagado!</h2>
            <p>
                El pago se proceso con exito. Vas a ser redirigido automaticamente a la sesion de chat, sino podes hacer click
                <Link href={"/"}>aca</Link>
            </p>
        </>
    )
}
export default SuccessRedirect