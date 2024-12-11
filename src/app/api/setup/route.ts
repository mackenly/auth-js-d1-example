import type { NextRequest } from 'next/server';
import { up } from "@auth/d1-adapter";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(request: NextRequest) {
    try {
        await up((await getCloudflareContext()).env.DB)
    } catch (e: any) {
        console.log(e.cause.message, e.message)
    }

    return new Response('Migration completed');
}