import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable || !siteUrl) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
