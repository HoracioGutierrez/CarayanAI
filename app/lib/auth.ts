import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    debug : true,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            /* authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            } */
            /* authorization : {
                params : {
                    redirect_uri : process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "development" 
                    ? "http://localhost:3000/api/auth/callback/google" 
                    : "https://carayanai-manual.vercel.app/api/auth/callback/google"
                }
            } */
            /* authorization: {
                params: {
                    redirect_uri: "https://carayanai-manual.vercel.app/api/auth/callback/google",
                },
                url: "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code&redirect_uri=https%3A%2F%2Fcarayanai-manual.vercel.app%2Fapi%2Fauth%2Fcallback%2Fgoogle"
            } */
        }),        
    ],
    /* callbacks : {
        async redirect({ url, baseUrl }){
            return "https://carayanai-manual.vercel.app"
        }
    } */
    /* cookies : {
        csrfToken : {
            name : "csrfToken",
            options : {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true
            }
        },
        callbackUrl : {
            name : "callbackUrl",
            options : {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true
            }
        } 
    } */
};
