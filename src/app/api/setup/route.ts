import type { NextRequest } from 'next/server';
import { up } from "@auth/d1-adapter";

export async function GET(request: NextRequest) {
    try {
        await up(process.env.DB)
    } catch (e: any) {
        console.log(e.cause.message, e.message)
    }

    return new Response('Migration completed');
}