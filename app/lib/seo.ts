const configuredSiteUrl = process.env.SITE_URL?.trim();
export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

if (siteUrl && (
  !["http:", "https:"].includes(siteUrl.protocol) ||
  siteUrl.username || siteUrl.password || siteUrl.search || siteUrl.hash ||
  siteUrl.pathname !== "/"
)) {
  throw new Error("SITE_URL must be an absolute HTTP(S) origin with no path, credentials, query, or fragment.");
}

// A preview must not become indexable if it inherits the production SITE_URL.
const deploymentEnvironment = process.env.VERCEL_TARGET_ENV ?? process.env.VERCEL_ENV;
export const isIndexable = Boolean(siteUrl)
  && process.env.NODE_ENV === "production"
  && (!deploymentEnvironment || deploymentEnvironment === "production");
