"use server"

import { kv } from "@vercel/kv"
import { revalidatePath } from "next/cache"

export async function verifyUser(userEmail: any) {
    if (!userEmail) {
        return null
    }

    return kv.set(`user:verification:${userEmail}`, "true")
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