"use client"

import { MapPin, Clock, Calendar, Phone, Instagram, Tiktok, Send } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"

export function LocationSection() {
  const storeName = SITE_CONFIG.store?.name || "The Foodie Wagon"
  const mapAddress = SITE_CONFIG.store?.mapAddress || SITE_CONFIG.contact?.address || "Main Food Street"
  const openingDays = SITE_CONFIG.store?.openingDays || "Mon - Sat"
  const storeTimings = SITE_CONFIG.store?.timings || "11:00 AM - 11:00 PM"
  const mapImage = SITE_CONFIG.store?.mapImage || "/map-of-ingolstadt-germany-westpark-area-street-map.jpg"
  const mapEmbedUrl = SITE_CONFIG.store?.mapEmbedUrl || ""

  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || "923262550707"
  const whatsappNumber = rawWhatsapp.replace(/\D/g, "")
  const customOrderWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to inquire about a custom/bulk order.")}`
  
  const instagramUrl = SITE_CONFIG.socials?.instagram || ""
  const tiktokUrl = SITE_CONFIG.socials?.tiktok || ""
  const whatsappGeneralUrl = `https://wa.me/${whatsappNumber}`

  return (
    <section id="location" className="py-20 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Food Truck Branding */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src="/graphics/truck.svg"
              alt="Food Truck"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain animate-truck-bounce"
              loading="lazy"
            />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight uppercase">
              LOCATION & HOURS
            </h2>
            <img
              src="/graphics/truck.svg"
              alt="Food Truck"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain transform scale-x-[-1] animate-truck-bounce"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Map Display (Dynamic Image / Iframe) */}
          <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-secondary border-2 border-border shadow-2xl group">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                title="Location Map"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={mapImage}
                  alt={`Location Map of ${storeName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/30 rounded-full animate-ping" />
                    <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/40">
                      <MapPin className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Location Details & Promo Cards */}
          <div className="space-y-6">
            
            {/* Main Location & Hours Card */}
            <div className="p-6 sm:p-8 bg-card border-2 border-border rounded-3xl space-y-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-primary/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Operating Location</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {mapAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-primary/30">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{openingDays}</h3>
                  <p className="text-base text-muted-foreground">Serving fresh hot orders on schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-primary/30">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Opening Hours</h3>
                  <p className="text-base text-muted-foreground">{storeTimings}</p>
                </div>
              </div>
            </div>

            {/* Social Promo Card: Follow Us For Discount Deals */}
            <div className="p-6 sm:p-8 bg-secondary/70 border-2 border-border rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black text-primary mb-2 tracking-tight">
                Follow Us For Discount Deals
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Stay updated with our latest offers, flash deals, and weekend special menus on our social channels.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {tiktokUrl && (
                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-4 py-2.5 rounded-xl bg-card border border-border text-foreground hover:text-primary hover:border-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Tiktok className="w-4 h-4" />
                    <span>TikTok</span>
                  </a>
                )}
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-4 py-2.5 rounded-xl bg-card border border-border text-foreground hover:text-primary hover:border-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                )}
                {whatsappGeneralUrl && (
                  <a
                    href={whatsappGeneralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:bg-primary/90 hover:scale-105 shadow-md shadow-primary/20"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>

            {/* Custom Orders & Catering Banner */}
            <div className="p-6 sm:p-8 bg-primary/10 border-2 border-primary/40 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-black text-primary mb-1">
                  Custom Orders & Catering
                </h4>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  We offer customized catering & bulk deals. For any custom order, reach out to us directly.
                </p>
              </div>

              <a
                href={customOrderWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 bg-primary text-primary-foreground font-black text-sm tracking-wider rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center gap-2 flex-shrink-0 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
