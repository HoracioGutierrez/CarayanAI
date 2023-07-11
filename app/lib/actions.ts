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
        return [{},{},{},{},{},{}]
    }
}

export async function getUserVerification(userEmail?: string | null) {
    if (!userEmail) {
        return null
    }

    try {
        return await kv.get(`user:verification:${userEmail}`)
    } catch (error) {
        return false
    }
}

export async function getChatMessages(chatId?: string | null) {
    if (!chatId) {
        return { messages: [] }
    }

    try {
        return await kv.hgetall(`chat:${chatId}`)
    } catch (error) {
        return { messages: [] }
    }
    
}

