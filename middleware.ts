export { auth as middleware } from './auth'

export const config = {
    matcher: [
        '/api/chat',
        '/api/mercadopago',
        "/chat/:path*",
        "/mercadopago",
        "/history"
    ],
}