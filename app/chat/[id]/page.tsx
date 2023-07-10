"use client"


import useCarayanAI from "@/app/hooks/useCarayanAI"
import { useRef } from "react"

type Props = {
    id: string
}

function ChatPage({ id }: Props) {

    const messagesRef = useRef<HTMLTextAreaElement | null>(null)
    const { append, messages, handleInputChange, input } = useCarayanAI()

    const handleClick = async () => {
        const messages = messagesRef.current?.value || ""
        if(messages){
            const message = { content: messages, role: "user" as const, id }
            await append(message)
        }
    }

    return (
        <>
            <h2>Playground</h2>
            <section>
                {messages.map((message) => (
                    <div key={message.id}>
                        {message.content}
                    </div>
                ))}
            </section>
            <textarea ref={messagesRef} onChange={handleInputChange} value={input} className="resize-none w-full bg-slate-900 text-wite rounded p-2"></textarea>
            <button onClick={handleClick}>Enviar</button>
        </>
    )
}

export default ChatPage