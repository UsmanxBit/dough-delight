"use client"

import { useState, useEffect } from "react"
import { Phone, MapPin, Send } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  const openingDays = SITE_CONFIG.store?.openingDays || "Mon - Sat"
  const mapAddress = SITE_CONFIG.store?.mapAddress || SITE_CONFIG.contact?.address || ""
  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || "923262550707"
  const whatsappNumber = rawWhatsapp.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I would like to place an order.")}`

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-primary border-t-4 border-amber-600 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Location / Timings Info with Truck Icon */}
          <div className="flex items-center gap-2 text-primary-foreground">
            <img
              src="/graphics/truck.svg"
              alt="Food Truck"
              className="h-8 w-8 object-contain hidden md:block"
              loading="lazy"
            />
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="font-extrabold">{openingDays}</span>
              {mapAddress && (
                <span className="hidden sm:inline font-medium opacity-90">• {mapAddress}</span>
              )}
            </div>
          </div>

          {/* Action: Order on WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] group flex items-center justify-center gap-2 px-6 py-2.5 bg-primary-foreground text-primary font-black tracking-wider text-xs sm:text-sm rounded-xl hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
          >
            <Send className="w-4 h-4 text-primary animate-pulse" />
            <span>ORDER ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  )
}
