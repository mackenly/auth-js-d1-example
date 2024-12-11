import NextAuth from "next-auth";
import { NextAuthResult } from "next-auth";
import { D1Adapter } from "@auth/d1-adapter";
import Resend from "next-auth/providers/resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";


const authResult = async (): Promise<NextAuthResult> => {
    return NextAuth({
        providers: [
            Resend({
                apiKey: (await getCloudflareContext()).env.AUTH_RESEND_KEY,
                from: (await getCloudflareContext()).env.AUTH_EMAIL_FROM,
            })
        ],
        adapter: D1Adapter((await getCloudflareContext()).env.DB),
    })
};

export const { handlers, signIn, signOut, auth } = await authResult();