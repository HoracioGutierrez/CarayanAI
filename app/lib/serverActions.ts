"use server"

import { kv } from "@vercel/kv"

export async function verifyUser(userEmail: any) {
    if (!userEmail) {
        return null
    }

    return kv.set(`user:verification:${userEmail}`, "true")
}