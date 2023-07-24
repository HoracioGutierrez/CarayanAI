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

        if (chats.length > 0) {
            const results = await pipeline.exec()

            const filteredResults = results.filter(result => result !== null)

            return filteredResults
        } else {
            return []
        }
    } catch (error) {
        return []
    }
}

export async function getUserVerification(userEmail?: string | null) {
    if (!userEmail) {
        return false
    }

    try {
        const result = await kv.get(`user:verification:${userEmail}`)
        if (result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

export async function getChatMessages(chatId?: string | null) {
    if (!chatId) {
        return { messages: [], id: "", createdAt: 0, path: "", title: "", userId: "" }
    }

    try {
        return await kv.hgetall(`chat:${chatId}`) as { messages: { role: string, content: string }[], id: string, createdAt: number, path: string, title: string, userId: string }
    } catch (error) {
        return { messages: [], id: "", createdAt: 0, path: "", title: "", userId: "" }
    }

}

