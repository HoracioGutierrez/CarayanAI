import { NextRequest, NextResponse } from "next/server";
import mercadopago from "mercadopago";
import { Currency } from "mercadopago/shared/currency";

mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN || "",
})

type CreatePreferencePayload = {
    items: {
        title: string
        unit_price: number
        quantity: number
        currency_id: Currency
    }[],
    back_urls: {
        success: string
        failure: string
        pending: string
    },
    auto_return: "approved"
}

export async function POST(req: NextRequest) {
    const json = await req.json()

    const preference: CreatePreferencePayload = {
        items: [
            {
                title: json.title,
                unit_price: json.unit_price,
                quantity: json.quantity,
                currency_id: json.currency_id,
            }
        ],
        back_urls: {
            success: process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production" 
            ? "https://carayanai-manual.vercel.app/success" 
            : "http://localhost:3000/success",
            failure: process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production" 
            ? "https://carayanai-manual.vercel.app/failure" 
            : "http://localhost:3000/failure",
            pending: process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production" 
            ? "https://carayanai-manual.vercel.app/pending" 
            : "http://localhost:3000/pending"
        },
        auto_return: "approved" as const,
    }

    const response = await mercadopago.preferences.create(preference)
    return NextResponse.json({ id: response.body.id })

}