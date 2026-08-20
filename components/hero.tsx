"use client"

import { ArrowDown, FastArrowRight, Phone } from "iconoir-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/siteConfig"

export function Hero() {
  const storeName = SITE_CONFIG.store?.name || "Dough Delight Café"
  const storeMotto = SITE_CONFIG.store?.motto || "Where Taste Greets You!"
  const storeTagline = SITE_CONFIG.store?.tagline || "Premium Pizzas, Gourmet Burgers, Injected Broast & Pastas"
  const openingDays = SITE_CONFIG.store?.openingDays || "Open 7 Days a Week"
  const storeTimings = SITE_CONFIG.store?.timings || "11:00 AM - 12:00 AM"
  const mapAddress = SITE_CONFIG.store?.mapAddress || "City Center, Jahanian, 58200"
  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || "923040700123"
  const whatsappNumber = rawWhatsapp.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi ${storeName}, I would like to place an order!`)}`
  const phoneDisplay = SITE_CONFIG.contact?.phoneDisplay || "0304-0700123"

  const highlights = SITE_CONFIG.store?.highlights || [
    { count: "10+", label: "Burgers" },
    { count: "18+", label: "Pizzas" },
    { count: "100%", label: "Fresh & Halal" }
  ]

  // Split store name for visual typography
  const nameParts = storeName.split(" ")
  const firstWord = nameParts.slice(0, 2).join(" ") || storeName
  const remainingWords = nameParts.slice(2).join(" ")

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            
            {/* Halal Badge */}
            {SITE_CONFIG.store?.halalCertified && (
              <div className="inline-flex items-center gap-3 mb-6">
                <img
                  src="/graphics/halal logo.svg"
                  alt="100% Halal Certified"
                  className="h-14 md:h-16 w-auto drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                  loading="lazy"
                />
              </div>
            )}

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none uppercase">
              <span className="text-primary">{firstWord}</span>
              {remainingWords && (
                <>
                  <br />
                  <span className="text-foreground">{remainingWords}</span>
                </>
              )}
            </h1>

            {/* Motto / Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide mb-6 max-w-2xl mx-auto md:mx-0">
              {storeMotto}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {storeTagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              {/* Button 1: Contact Us on WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-h-[48px] flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-extrabold tracking-wider rounded-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/40 w-full sm:w-auto justify-center hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              {/* Button 2: Explore Menu */}
              <Link
                href="#menuSection"
                className="group min-h-[48px] flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-extrabold tracking-wider rounded-xl hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto justify-center hover:scale-105"
              >
                <span>EXPLORE MENU</span>
                <FastArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Floating Hours & Location Badge (Pure English & Client Info) */}
            <div className="max-w-xl mx-auto md:mx-0 mb-10 p-6 bg-primary/10 rounded-2xl border-2 border-primary/30 backdrop-blur-sm shadow-xl">
              <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
                <img
                  src="/graphics/truck.svg"
                  alt="Delivery & Dining"
                  className="h-14 w-14 md:h-16 md:w-16 object-contain flex-shrink-0 animate-truck-bounce"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="text-primary font-black text-2xl md:text-3xl mb-0.5">
                    {openingDays}
                  </p>
                  <p className="text-foreground font-bold text-base md:text-lg">
                    {mapAddress}
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Hours: {storeTimings} • Free Delivery: {phoneDisplay}
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Highlights / Stats Strip */}
            {highlights.length > 0 && (
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto md:mx-0 pt-2 border-t border-border/50">
                {highlights.map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">
                      {stat.count}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground uppercase font-bold tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Content - Hero Visual */}
          <div className="order-1 md:order-2 relative flex items-center justify-center">
            <div className="relative w-full h-[360px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/5 to-transparent rounded-full filter blur-2xl animate-pulse" />

              <img
                src="/graphics/tasty burger.svg"
                alt={storeName}
                className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(251,191,36,0.45)] animate-float"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Link href="#menuSection" aria-label="Scroll to menu">
            <ArrowDown className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  )
}
