import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { AgentationDev } from "@/components/agentation-dev"
import { SITE_CONFIG } from "@/siteConfig"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://foodiewagon.com"),
  title: {
    default: `${SITE_CONFIG.store?.name || "Restaurant"} | ${SITE_CONFIG.store?.tagline || "Handcrafted Fresh Food"}`,
    template: `%s | ${SITE_CONFIG.store?.name || "Restaurant"}`,
  },
  description: SITE_CONFIG.store?.description || "Handmade fresh burgers, crispy chicken, and mouth-watering sides made fresh daily.",
  keywords: [
    SITE_CONFIG.store?.name?.toLowerCase() || "restaurant",
    "food truck",
    "burgers",
    "crispy chicken",
    "street food",
    "takeaway menu",
    "halal food",
    "fresh burgers",
  ],
  authors: [{ name: SITE_CONFIG.store?.name || "Restaurant" }],
  creator: SITE_CONFIG.developer?.name || "Usman",
  publisher: SITE_CONFIG.store?.name || "Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_CONFIG.store?.name || "Restaurant"} | ${SITE_CONFIG.store?.tagline || "Handcrafted Food"}`,
    description: SITE_CONFIG.store?.description || "Handmade fresh burgers, crispy chicken, and sides.",
    siteName: SITE_CONFIG.store?.name || "Restaurant",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.store?.logo || "/graphics/tasty burger.svg",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.store?.name || "Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.store?.name || "Restaurant",
    description: SITE_CONFIG.store?.description || "Handmade fresh burgers, crispy chicken, and sides.",
    images: [SITE_CONFIG.store?.logo || "/graphics/tasty burger.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#121212",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground overflow-x-hidden`}>
        <CartProvider>
          {children}
          <CartDrawer />
          <AgentationDev />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
