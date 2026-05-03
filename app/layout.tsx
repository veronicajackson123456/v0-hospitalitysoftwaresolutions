import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: {
    default: "HMCTS LLC | Hotel Property Management Software — US & UK",
    template: "%s | HMCTS LLC",
  },
  description:
    "HMCTS LLC provides enterprise-grade property management software for independent hotels, boutique groups, and serviced apartments across the United States and United Kingdom. 30+ years of collective hospitality industry expertise.",
  keywords: [
    "property management system",
    "hotel management software",
    "PMS software",
    "hotel software UK",
    "hotel software US",
    "independent hotel software",
    "boutique hotel PMS",
    "channel management",
    "hospitality technology",
  ],
  metadataBase: new URL("https://www.hospitalitysoftwaresolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: "en_US",
    url: "https://www.hospitalitysoftwaresolutions.com",
    siteName: "HMCTS LLC",
    title: "HMCTS LLC | Hotel Property Management Software — US & UK",
    description:
      "Enterprise-grade property management software for independent hotels and boutique groups. Serving the US and UK markets with 30+ years of collective industry experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HMCTS LLC | Hotel Property Management Software",
    description:
      "Property management software built for independent hotels and boutique groups across the US and UK.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
