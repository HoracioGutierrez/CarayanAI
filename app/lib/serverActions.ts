"use server"

import { kv } from "@vercel/kv"
import { revalidatePath } from "next/cache"

export async function verifyUser(userEmail: any) {
    if (!userEmail) {
        return null
    }

    return kv.set(`user:verification:${userEmail}`, "true")
}

export async function unverifyUser(userEmail: any) {
    if (!userEmail) {
        return null
    }
    return kv.set(`user:verification:${userEmail}`, "false")
}


export async function deleteChat(chatId: string) {
    if (!chatId) {
        return false
    }

    try {
        await kv.del(`chat:${chatId}`)
        revalidatePath('/history')
        return true
    } catch (error) {
        return false
    }
}

export async function getMessagesCount(email: string) {
    if (!email) {
        return 0
    }

    try {
        const pipeline = kv.pipeline()
        const chats: string[] = await kv.zrange(`user:chat:${email}`, 0, -1, {
            rev: true
        })

        
        for (const chat of chats) {
            pipeline.hgetall(chat)
        }

        if (chats.length > 0) {
            const results = await pipeline.exec()

            const count = results.reduce((acc, result : any) => {
                if (result !== null) {
                    return acc + result.messages.length
                } else {
                    return acc
                }
            }, 0)

            return count as number
        } else {
            return 0
        }
    } catch (error) {
        return 0
    }

}