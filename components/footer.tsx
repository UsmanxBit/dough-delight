"use client"

import Link from "next/link"
import { Instagram, Phone, MapPin, Globe, Tiktok } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"

export function Footer() {
  const storeName = SITE_CONFIG.store?.name || "Dough Delight Café"
  const storeMotto = SITE_CONFIG.store?.motto || "Where Taste Greets You!"
  const storeLogo = SITE_CONFIG.store?.logo || "/graphics/fooiewagen logo.svg"
  const phoneDisplay = SITE_CONFIG.contact?.phoneDisplay || "0304-0700123"
  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || "923040700123"
  const clientWhatsappUrl = `https://wa.me/${rawWhatsapp.replace(/\D/g, "")}`
  const tiktokUrl = SITE_CONFIG.socials?.tiktok || "https://www.tiktok.com/@dough.delight.caf"
  const tiktokHandle = "@dough.delight.caf"
  const address = SITE_CONFIG.contact?.address || "City Center, Jahanian, 58200"

  // Developer credit details (Strictly Usman's credentials)
  const devName = SITE_CONFIG.developer?.name || "Usman"
  const devWhatsappNumber = SITE_CONFIG.developer?.whatsapp || "923262550707"
  const devWhatsappDisplay = "0326-2550707"
  const devWhatsappUrl = `https://wa.me/${devWhatsappNumber.replace(/\D/g, "")}`
  const devInstagramHandle = "@usmanxbit"
  const devInstagramUrl = "https://instagram.com/usmanxbit"
  const devPortfolioUrl = SITE_CONFIG.developer?.portfolio || "https://usmanxbit.github.io"

  return (
    <footer className="pt-12 pb-32 sm:pb-36 bg-background border-t border-border relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-start">
          
          {/* Column 1: Client Logo, Business Name, Motto */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {storeLogo && (
                <img
                  src={storeLogo}
                  alt={storeName}
                  className="h-12 md:h-14 w-auto object-contain"
                  loading="lazy"
                />
              )}
              <div>
                <h3 className="text-primary font-black text-xl tracking-wider uppercase">
                  {storeName}
                </h3>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">
                  {storeMotto}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm max-w-md mb-4 leading-relaxed">
              {SITE_CONFIG.store?.description || "Experience handcrafted pizzas, signature smash burgers, injected crispy broast, and artisan desserts in Jahanian."}
            </p>

            <div className="flex items-center gap-3">
              {SITE_CONFIG.store?.halalCertified && (
                <img
                  src="/graphics/halal logo.svg"
                  alt="100% Halal Certified"
                  className="h-10 w-auto"
                  loading="lazy"
                />
              )}
              <div className="flex items-center gap-2 text-muted-foreground">
                <img
                  src="/graphics/truck.svg"
                  alt="Free Home Delivery"
                  className="h-7 w-7 object-contain"
                  loading="lazy"
                />
                <span className="text-xs font-semibold">Free Home Delivery in Jahanian</span>
              </div>
            </div>
          </div>

          {/* Column 2: Client Contact Details (Phone & TikTok) */}
          <div className="md:pl-8 lg:pl-16">
            <h4 className="text-foreground font-black text-lg mb-4 tracking-wider uppercase">
              CONTACT & ORDER
            </h4>

            <div className="space-y-3">
              {phoneDisplay && (
                <a
                  href={clientWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{phoneDisplay} (WhatsApp / Call)</span>
                </a>
              )}

              {tiktokUrl && (
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                    <Tiktok className="w-4 h-4" />
                  </div>
                  <span>{tiktokHandle} (TikTok)</span>
                </a>
              )}

              {address && (
                <div className="min-h-[44px] flex items-start gap-3 text-muted-foreground text-sm font-medium">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Strict Developer Branding */}
        <div className="pt-8 border-t border-border flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Client Copyright & Legal Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-muted-foreground text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} {storeName}. All Rights Reserved.</p>
            <span className="hidden sm:inline">•</span>
            <Link href="/impressum" className="hover:text-primary transition-colors min-h-[36px] flex items-center">
              Legal Notice
            </Link>
            <span>•</span>
            <Link href="/datenschutz" className="hover:text-primary transition-colors min-h-[36px] flex items-center">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/agb" className="hover:text-primary transition-colors min-h-[36px] flex items-center">
              Terms & Conditions
            </Link>
          </div>

          {/* Right Side: Strict Developer Branding Credit */}
          <div className="flex flex-wrap items-center justify-center gap-4 bg-secondary/60 px-5 py-2.5 rounded-2xl border border-border/80 shadow-lg">
            <span className="text-xs font-bold text-foreground">
              Made by <span className="text-primary">{devName}</span>
            </span>

            {/* WhatsApp Link */}
            <a
              href={devWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors min-h-[36px] px-2 py-1 rounded-lg hover:bg-secondary"
              aria-label="Developer WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{devWhatsappDisplay}</span>
            </a>

            {/* Instagram Link */}
            <a
              href={devInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors min-h-[36px] px-2 py-1 rounded-lg hover:bg-secondary"
              aria-label="Developer Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-primary" />
              <span>{devInstagramHandle}</span>
            </a>

            {/* Portfolio Link */}
            {devPortfolioUrl && (
              <a
                href={devPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors min-h-[36px] px-2 py-1 rounded-lg hover:bg-secondary"
                aria-label="Developer Portfolio"
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
              </a>
            )}
          </div>

        </div>

      </div>
    </footer>
  )
}
