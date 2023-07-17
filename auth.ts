import NextAuth from "next-auth/next";
import { authOptions } from "./app/lib/auth";

export const { auth } = NextAuth(authOptions);