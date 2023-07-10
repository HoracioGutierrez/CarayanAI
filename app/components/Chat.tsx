"use client"


import useCarayanAI from "@/app/hooks/useCarayanAI"
import { useEffect, useRef } from "react"

type Props = {
    id: string,
    initMessages: any
}

function Chat({ id , initMessages }: Props) {

    const messagesRef = useRef<HTMLTextAreaElement | null>(null)
    const { append, messages, handleInputChange, input , setMessages } = useCarayanAI()

    useEffect(()=>{
        if (initMessages && initMessages.length > 0){
            setMessages(initMessages)
        }
    },[])

    const handleClick = async () => {
        const messages = messagesRef.current?.value || ""
        if (messages) {
            const message = { content: messages, role: "user" as const, id }
            await append(message)
        }
    }

    return (
        <>
            <h2>Playground</h2>
            <section>
                {messages.map((message,i) => (
                    <div key={i}>
                        {message.content}
                    </div>
                ))}
            </section>
            <textarea ref={messagesRef} onChange={handleInputChange} value={input} className="resize-none w-full bg-slate-900 text-wite rounded p-2"></textarea>
            <button onClick={handleClick}>Enviar</button>
        </>
    )
}

export default Chat