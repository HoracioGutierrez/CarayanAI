"use client"


import useCarayanAI from "@/app/hooks/useCarayanAI"
import { useEffect, useRef } from "react"

type Props = {
    id: string,
    initMessages: any
}

function Chat({ id, initMessages }: Props) {

    const messagesRef = useRef<HTMLTextAreaElement | null>(null)
    const { append, messages, handleInputChange, input, setMessages } = useCarayanAI()

    useEffect(() => {
        if (initMessages && initMessages.length > 0) {
            setMessages(initMessages)
        }
    }, [])

    const handleClick = async () => {
        const messages = messagesRef.current?.value || ""
        if (messages) {
            const message = { content: messages, role: "user" as const, id }
            await append(message)
        }
    }

    //TODO agregar la imagen de pablo/usuario dependiendo del rol del mensaje (message.role)
    //TODO hay una imagen en assets carayania-avatar.png
    //TODO agregar condicionalmente que el boton cancele el stream

    return (
        <>
            <h2 className="text-2xl py-4 px-2">Playground</h2>
            <div className="flex flex-col grow border-slate-600 border-2">
                <div className=" bg-slate-900 h-5/6">
                    <section className="p-6">
                        {messages.map((message, i) => (
                            <div className="p-2" key={i}>
                                {message.content}
                            </div>
                        ))}
                    </section>
                </div>
                <div className="flex h-1/6 bottom-24 w-full border-slate-600 hover:border-slate-300 border-2 rounded-md">
                    <textarea ref={messagesRef} onChange={handleInputChange} value={input} className="resize-none bg-slate-900 text-wite rounded-l-md w-5/6"></textarea>
                    <button className="bg-slate-900 rounded-r-md w-1/6" onClick={handleClick}>Enviar</button>
                </div>
            </div>

        </>
    )
}

export default Chat