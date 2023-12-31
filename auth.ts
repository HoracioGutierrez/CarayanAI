/* import NextAuth, { DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module 'next-auth' {
    interface Session {
        user: {
            id: string,
            picture : string
        } & DefaultSession['user']
    }
}


export const {
    handlers: { GET, POST },
    auth,
    CSRF_experimental // will be removed in future
} = NextAuth({
    debug: true,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        })
    ]
}); */