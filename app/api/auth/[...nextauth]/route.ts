import NextAuth from "next-auth/next";
import { authOptions } from "./options";

const authProvider = NextAuth(authOptions)

export { authProvider as GET , authProvider as POST , authProvider as config}