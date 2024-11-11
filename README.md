# auth-js-d1-example
Minimal demo example of Auth.js D1 Adapter

Uses [Resend powered Magic Links](https://authjs.dev/getting-started/authentication/email) and Cloudflare D1 [Auth.js adapter](https://authjs.dev/getting-started/adapters/d1).


## How was this made?
1. Cloudflare Workers [Next.js using OpenNext](https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/)
2. Added [Auth.js](https://authjs.dev/getting-started)
3. Added [D1 Adapter](https://authjs.dev/getting-started/adapters/d1)
4. Added [Magic Links](https://authjs.dev/getting-started/authentication/email)
5. Made minimal UI using [shadcn](https://ui.shadcn.com/docs)
6. Once everything is connect run the DB setup by visiting `/api/setup`

## Add [Secrets](https://developers.cloudflare.com/pages/functions/bindings/#secrets) for:
- `AUTH_SECRET` (just a random string)
- `AUTH_RESEND_KEY` (API key from Resend)
- `AUTH_EMAIL_FROM` (email address)
- `AUTH_URL` (URL of your app)

You'll also need to replace the binding for the database in `wrangler.toml` with your own.

## Cloudflare Scripts

A few scripts will come in handy when developing and deploying to Cloudflare:
- `npm run dev` - Run the development server
- `npm run preview` - Preview the site locally using Cloudflare Workers
- `npm run deploy` - Deploy the site to Cloudflare Workers