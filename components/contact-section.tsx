"use client"

import { Phone, Mail, Tiktok } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"
import { EmbeddedCart } from "./embedded-cart"

export function ContactSection() {
  const storeName = SITE_CONFIG.store?.name || "Dough Delight Café"
  const phoneDisplay = SITE_CONFIG.contact?.phoneDisplay || "0304-0700123"
  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || "923040700123"
  const whatsappNumber = rawWhatsapp.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  const email = SITE_CONFIG.contact?.email || "doughdelightcafe@gmail.com"
  const tiktokUrl = SITE_CONFIG.socials?.tiktok || "https://www.tiktok.com/@dough.delight.caf"
  const tiktokHandle = "@dough.delight.caf"

  return (
    <section id="contact" className="py-20 md:py-32 bg-card relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight mb-4 uppercase">
            CONTACT US
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to place an order with {storeName}? Reach out to us directly or review your tray below!
          </p>
        </div>

        {/* Contact Cards - Dynamic Centered Grid (Phone, Email, TikTok) */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Phone / WhatsApp Card */}
          <div className="p-8 bg-secondary/60 rounded-3xl flex flex-col items-center text-center space-y-4 border-2 border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-16 h-16 bg-primary/20 text-primary border border-primary/40 rounded-2xl flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-2">Call / WhatsApp</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-black text-primary hover:text-primary/80 transition-colors inline-block min-h-[44px] flex items-center justify-center"
              >
                {phoneDisplay}
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Free Home Delivery & Takeaway</p>
          </div>

          {/* Email Card */}
          <div className="p-8 bg-secondary/60 rounded-3xl flex flex-col items-center text-center space-y-4 border-2 border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-16 h-16 bg-primary/20 text-primary border border-primary/40 rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-2">Email Inquiry</p>
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-bold text-primary hover:text-primary/80 transition-colors break-all inline-block min-h-[44px] flex items-center justify-center"
              >
                {email}
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Party orders & event inquiries</p>
          </div>

          {/* TikTok Card (Replacing Instagram Card) */}
          <div className="p-8 bg-secondary/60 rounded-3xl flex flex-col items-center text-center space-y-4 border-2 border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-16 h-16 bg-primary/20 text-primary border border-primary/40 rounded-2xl flex items-center justify-center">
              <Tiktok className="w-8 h-8" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-2">TikTok</p>
              {tiktokUrl ? (
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-bold text-primary hover:text-primary/80 transition-colors inline-block min-h-[44px] flex items-center justify-center"
                >
                  {tiktokHandle}
                </a>
              ) : (
                <span className="text-lg font-bold text-foreground">Follow Us</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">Watch our food reels & updates</p>
          </div>

        </div>

        {/* Embedded In-Page Cart / Order Review Section */}
        <EmbeddedCart />

      </div>
    </section>
  )
}
