import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { BakerySection } from "@/components/bakery-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { SITE_CONFIG } from "@/siteConfig"
import { MENU_DATA, BAKERY_DATA } from "@/menuData"

export default function Home() {
  const storeName = SITE_CONFIG.store?.name || "Dough Delight Café"
  const storeDescription = SITE_CONFIG.store?.description || "Handmade fresh burgers, pizzas, broast, and bakery delights."
  const storeAddress = SITE_CONFIG.contact?.address || SITE_CONFIG.store?.mapAddress || "City Center, Jahanian"
  const phone = SITE_CONFIG.contact?.phoneDisplay || SITE_CONFIG.contact?.whatsapp || "0304-0700123"
  const currency = SITE_CONFIG.store?.currency === "Rs." ? "PKR" : "USD"

  // Structured Data for SEO (JSON-LD) - 100% Config Driven
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "#restaurant",
        "name": storeName,
        "description": storeDescription,
        "telephone": phone,
        "servesCuisine": ["Pizza", "Burger", "Fast Food", "Bakery", "Broast", "Chinese", "Desserts"],
        "priceRange": "$$",
        "image": SITE_CONFIG.store?.logo || "/logo.jpeg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": storeAddress,
        },
        "currenciesAccepted": currency,
        ...(SITE_CONFIG.store?.halalCertified ? {
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Halal Certification",
            "name": "100% Halal Certified"
          }
        } : {})
      },
      {
        "@type": "Menu",
        "@id": "#menu",
        "name": `${storeName} Menu`,
        "hasMenuSection": [
          ...(MENU_DATA.categories || []).map((cat) => ({
            "@type": "MenuSection",
            "name": cat.label,
            "hasMenuItem": (MENU_DATA.items || [])
              .filter((item) => item.category === cat.id)
              .map((item) => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.description,
                "offers": {
                  "@type": "Offer",
                  "price": item.price,
                  "priceCurrency": currency,
                }
              }))
          })),
          ...(BAKERY_DATA.categories || []).map((cat) => ({
            "@type": "MenuSection",
            "name": cat.label,
            "hasMenuItem": (BAKERY_DATA.items || [])
              .filter((item) => item.category === cat.id)
              .map((item) => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.description,
                "offers": {
                  "@type": "Offer",
                  "price": item.price,
                  "priceCurrency": currency,
                }
              }))
          }))
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <Hero />
        <MenuSection />
        <BakerySection />
        <LocationSection />
        <ContactSection />
        <Footer />
        <StickyCTA />
      </main>
    </>
  )
}
