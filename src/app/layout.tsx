import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FDF8F1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamdesigndwell.com"),
  title: {
    default: "Dream Design Dwell | D3 Interior Design Studio Mumbai",
    template: "%s | Dream Design Dwell",
  },
  description:
    "Dream Design Dwell (D3) — designing spaces, defining lifestyles. Luxury interior design studio in Mumbai with projects across Andheri, Khar, Bandra, Malad, Parel, Prabhadevi & Lower Parel.",
  applicationName: "Dream Design Dwell",
  authors: [{ name: "Dream Design Dwell" }],
  creator: "Dream Design Dwell",
  publisher: "Dream Design Dwell",
  keywords: [
    "Dream Design Dwell",
    "D3",
    "D3 studio",
    "interior design Mumbai",
    "interior designer Andheri",
    "interior designer Bandra",
    "interior designer Khar",
    "architecture studio Mumbai",
    "residential interiors Mumbai",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dream Design Dwell",
    title: "Dream Design Dwell | D3 Interior Design Studio",
    description:
      "Designing spaces, defining lifestyles. Mumbai interior design studio — D3.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Design Dwell | D3 Interior Design Studio",
    description:
      "Designing spaces, defining lifestyles. Mumbai interior design studio — D3.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Dream Design Dwell" />
        <meta name="application-name" content="Dream Design Dwell" />
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
