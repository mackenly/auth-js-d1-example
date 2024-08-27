
import NextAuth from "next-auth";
import { NextAuthResult } from "next-auth";
import { D1Adapter } from "@auth/d1-adapter";
import Resend from "next-auth/providers/resend";

export const runtime = "edge";

const authResult = (): NextAuthResult => {  
    return NextAuth({
        providers: [
            Resend({
                apiKey: process.env.AUTH_RESEND_KEY,
                from: process.env.AUTH_EMAIL_FROM,
            })
        ],
        adapter: D1Adapter(process.env.db),
    })
};

export const { handlers, signIn, signOut, auth } = authResult();