# auth-js-d1-example
Example of Auth.js D1 Adapter


## How was this made?
1. Cloudflare's Next on Pages based [Get started](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/) guide.
2. Added [Auth.js](https://authjs.dev/getting-started)
3. Added [D1 Adapter](https://authjs.dev/getting-started/adapters/d1)
4. Added [Magic Links](https://authjs.dev/getting-started/authentication/email)
5. Once everything is connect run the DB setup by visiting `/api/setup`

# Add [Secrets](https://developers.cloudflare.com/pages/functions/bindings/#secrets) for:
- AUTH_SECRET (just a random string)
- AUTH_RESEND_KEY (API key from Resend)
- AUTH_EMAIL_FROM (email address)
- AUTH_TRUST_HOST (URL of your app)

## Cloudflare scripts

Besides the `dev` script `c3` has added a few extra scripts that allow you to integrate the application with the [Cloudflare Pages](https://pages.cloudflare.com/) environment, these are:
  - `pages:build` to build the application for Pages using the [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages) CLI
  - `preview` to locally preview your Pages application using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI
  - `deploy` to deploy your Pages application using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI
  - `cf-typegen` to generate TypeScript types for the Cloudflare Workers environment
