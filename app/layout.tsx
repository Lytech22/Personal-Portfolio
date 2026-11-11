import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Leul Yitbarek | Full-Stack Developer";
const description = "Full-stack developer based in Addis Ababa, Ethiopia. Building practical web applications with Laravel, React, TypeScript, and PostgreSQL.";
const configuredSiteUrl = process.env.SITE_URL?.trim();
const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

if (siteUrl && (
  !["http:", "https:"].includes(siteUrl.protocol) ||
  siteUrl.username || siteUrl.password || siteUrl.search || siteUrl.hash ||
  siteUrl.pathname !== "/"
)) {
  throw new Error("SITE_URL must be an absolute HTTP(S) origin with no path, credentials, query, or fragment.");
}

export const metadata: Metadata = {
  // Local URLs are for preview images only; never emit a localhost canonical.
  metadataBase: siteUrl ?? new URL(`http://localhost:${process.env.PORT || "3000"}`),
  title,
  description,
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    title,
    description,
    siteName: "Leul Yitbarek",
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: Boolean(siteUrl),
    follow: true,
    googleBot: {
      index: Boolean(siteUrl),
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
