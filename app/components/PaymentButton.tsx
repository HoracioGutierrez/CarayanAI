"use client"

import { useEffect, useState } from "react"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"

function PaymentButton() {

    const [preferenceId, setPreferenceId] = useState("")
    initMercadoPago(process.env.MERCADOPAGO_CLIENT_ID || "")

    useEffect(()=>{
        if(!preferenceId){
            handleClick()
        }
    },[])

    const createPreference = async () => {
        const response = await fetch("/api/mercadopago", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "CarayanAI",
                unit_price: 100,
                quantity: 1,
                currency_id: "ARS"
            })
        })
        const { id } = await response.json()
        return id
    }

    const handleClick = async () => {
        const id = await createPreference()
        if (id) {
            setPreferenceId(id)
        }
    }

    return (
        <>
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
        </>
    )
}

export default PaymentButton