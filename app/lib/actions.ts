import { kv } from '@vercel/kv'

export async function getChats(userEmail?: string | null) {
    if (!userEmail) {
        return []
    }

    try {
        const pipeline = kv.pipeline()
        const chats: string[] = await kv.zrange(`user:chat:${userEmail}`, 0, -1, {
            rev: true
        })

        for (const chat of chats) {
            pipeline.hgetall(chat)
        }

        const results = await pipeline.exec()

        const filteredResults = results.filter(result => result !== null)

        return filteredResults
    } catch (error) {
        return []
    }
}

export function getUserVerification(userEmail?: string | null) {
    if (!userEmail) {
        return null
    }

    return kv.get(`user:verification:${userEmail}`)
}

export function getChatMessages(chatId?: string | null) {
    if (!chatId) {
        return { messages: [] }
    }
    return kv.hgetall(`chat:${chatId}`)
}

