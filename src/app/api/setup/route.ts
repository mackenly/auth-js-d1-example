import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'
import { up } from "@auth/d1-adapter"

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    const { env } = getRequestContext()
    let migrated = false;
    if (!migrated) {
        try {
            await up(env.db)
            migrated = true
        } catch (e: any) {
            console.log(e.cause.message, e.message)
        }
    }

    return new Response('Migration completed');
}
