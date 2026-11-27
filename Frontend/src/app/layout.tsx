import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CmsBridge } from "@/framer/CmsBridge";
import { SiteTop, SiteFooter } from "@/framer/SiteChrome";
import { metaFor } from "@/framer/meta";

export const metadata: Metadata = {
  ...metaFor("/"),
  metadataBase: new URL("https://gradeon.example.com"),
  robots: "max-image-preview:large",
  icons: {
    icon: [
      { url: "https://framerusercontent.com/images/JZF7xyD3BbSLLgMa73FP0FSDRU.png", media: "(prefers-color-scheme: light)" },
      { url: "https://framerusercontent.com/images/G7lJ5jROMehuuvkCPdEbLqCMjYU.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "https://framerusercontent.com/images/0HxX6t8psjK7z3O9xxpmMFnWyFs.png",
  },
};

export const viewport: Viewport = { width: "device-width" };

const FONTS =
  "https://fonts.googleapis.com/css2?family=Young+Serif&family=Albert+Sans:ital,wght@0,300..800;1,300..800&family=Azeret+Mono:wght@400..600&display=swap";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link id="pm-fonts" rel="stylesheet" href={FONTS} />
      </head>
      <body suppressHydrationWarning>
        <div className="fr-root">
          <SiteTop />
          <CmsBridge />
          <div className="fr-page">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
