export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/api/chat',
        '/api/mercadopago',
        "/chat",
        "/mercadopago",
        "/history"
    ],
}