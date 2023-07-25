"use client"


import useCarayanAI from "@/app/hooks/useCarayanAI"
import { PaperPlaneIcon, ReloadIcon, StopIcon } from "@radix-ui/react-icons"
import { useEffect, useRef, useState } from "react"
import CreateSuggestion from "./Suggestion"
import Image from "next/image"
import avatar from "../assets/carayania-avatar.png"
import PaymentButton from "./PaymentButton"

type Props = {
    id: string,
    initMessages: any,
    session: any,
    verifiedUser: boolean
}


function Chat({ id, initMessages, session, verifiedUser }: Props) {

    const messagesRef = useRef<HTMLTextAreaElement | null>(null)
    const { append, messages, handleInputChange, input, setMessages, stop, isLoading, setInput, reload } = useCarayanAI()
    const [showRegenerate, setShowRegenerate] = useState(false)
    const [content, setContent] = useState("")

    useEffect(() => {
        if (initMessages && initMessages.length > 0) {
            setMessages(initMessages)
        }
    }, [initMessages, setMessages])

    useEffect(() => {
        if (content) {
            setInput(content)
        }
    }, [content, setInput])

    const handleSend = async () => {
        const messages = messagesRef.current?.value || ""
        if (messages) {
            const message = { content: messages, role: "user" as const, id }
            setShowRegenerate(false)
            setInput("")
            await append(message)
        }
    }

    const handleStop = () => {
        setShowRegenerate(true)
        stop()
    }

    const handleReload = () => {
        reload()
        setShowRegenerate(false)
    }

    const handleTextAreaChange = (e: any) => {
        handleInputChange(e)
    }

    return (
        <>
            <div className="flex flex-col grow gap-4">
                <div className=" bg-slate-900 grow border-slate-600 border-2 rounded relative flex flex-col">
                    {!messages.length && (
                        <div className="p-2">
                            <CreateSuggestion set={setContent} />
                        </div>
                    )}
                    <section className="flex flex-col">
                        {messages.map((message, i) => {
                            return (
                                <div className={`flex gap-4 p-4 ${message.role == "user" ? "justify-end bg-[rgba(255,255,255,0.2)]" : "justify-start"}`} key={i}>
                                    {message.role == "user" && (
                                        <>
                                            <p>{message.content}</p>
                                            <Image
                                                src={session.user.picture}
                                                alt={"user avatar"}
                                                width={40}
                                                height={40}
                                                className="w-[40px] h-[40px]"
                                            />
                                        </>
                                    )}
                                    {message.role == "assistant" && (
                                        <>
                                            <Image
                                                src={avatar}
                                                alt={"bot avatar"}
                                                width={40}
                                                height={40}
                                                className="w-[40px] h-[40px]"
                                            />
                                            <p>{message.content}</p>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                        {showRegenerate && (
                            <div className="absolute bottom-2 self-center">
                                <p>Regenerar respuesta</p>
                                <ReloadIcon onClick={handleReload} />
                            </div>
                        )}
                    </section>
                </div>
                <div className="flex w-full border-slate-600 hover:border-slate-300 border-2 rounded-md relative items-center">
                    {verifiedUser && (
                        <>
                            <textarea ref={messagesRef} onChange={handleTextAreaChange} value={input} className="resize-none h-fit overflow-hidden bg-slate-900 text-wite rounded-l-md w-full p-4 pr-8" />
                            <button className="bg-slate-900 rounded-r-md absolute right-2 z-10" onClick={isLoading ? handleStop : handleSend}>
                                {isLoading ? <StopIcon /> : <PaperPlaneIcon />}
                            </button>
                        </>
                    )}
                    {!verifiedUser && (
                        <PaymentButton/>
                    )}
                </div>
            </div>
        </>
    )
}

export default Chat