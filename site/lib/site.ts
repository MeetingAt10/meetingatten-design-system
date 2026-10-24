/** Public origin for canonical URLs, Open Graph and the sitemap. CI sets NEXT_PUBLIC_SITE_URL for deployed builds. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
