This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to optimize and self-host Instrument Sans and IBM Plex Mono.

## Production metadata

Set the server environment variable `SITE_URL` to the portfolio's real public origin before running `npm run build` on your production host. Include `https://` and the actual hostname, with no path, query, or fragment. No deployment domain is assumed in source control.

When `SITE_URL` is set, it supplies the canonical URL, Open Graph URL, production Open Graph/Twitter image URLs, and sitemap homepage URL. Search indexing is enabled for production builds only; Vercel preview, development, and custom non-production environments remain `noindex` even if they inherit `SITE_URL`. Rebuild/redeploy after changing it because the homepage and SEO routes are statically generated.

Without `SITE_URL`, development and builds still work. Canonical and Open Graph page URLs are omitted, robots metadata is `noindex, follow`, and local image URLs use `http://localhost:3000` (or the `PORT` environment variable). Next.js keeps file-based image URLs local during development and may use a platform-provided origin on Vercel previews. Local image URLs are not usable by public social crawlers.

`/robots.txt` allows crawling and points to `/sitemap.xml` on the configured production origin. The sitemap includes only the public homepage. Development, preview, and builds without `SITE_URL` disallow crawling and return an empty sitemap. Both routes and page indexing metadata share the configuration in `app/lib/seo.ts`.

The 1200 × 630 previews are generated at `/opengraph-image` and `/twitter-image` using `ImageResponse` and local, licensed fonts in `assets/fonts/`. Their image metadata and alt text are managed by Next.js file conventions; no browser-side image generation or runtime font downloads are needed. `/icon.svg` is the primary favicon, with a matching `/favicon.ico` fallback.

Before release, run `npm run lint`, `npm run build`, and `git diff --check`. After deploying with `SITE_URL`, verify the canonical URL and both social-image URLs resolve on that same public origin.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
