//export { auth as middleware } from './auth'
export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/api/chat',
        '/api/mercadopago',
        "/chat/:path*",
        "/mercadopago",
        "/history"
    ],
}