"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Xmark, Phone, ShoppingBag, Instagram, Facebook, Tiktok } from "iconoir-react"
import { SITE_CONFIG } from "@/siteConfig"
import { useCart } from "./cart-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { totalCount, setIsCartOpen } = useCart()

  const storeName = SITE_CONFIG.store?.name || "Dough Delight Café"
  const storeMotto = SITE_CONFIG.store?.motto || "Where Taste Greets You!"
  const storeLogo = SITE_CONFIG.store?.logo || "/graphics/fooiewagen logo.svg"
  const phoneDisplay = SITE_CONFIG.contact?.phoneDisplay || SITE_CONFIG.contact?.whatsapp || "0304-0700123"
  const rawWhatsapp = SITE_CONFIG.contact?.whatsapp || "923040700123"
  const whatsappUrl = `https://wa.me/${rawWhatsapp.replace(/\D/g, "")}`
  const instagramUrl = SITE_CONFIG.socials?.instagram || ""
  const tiktokUrl = SITE_CONFIG.socials?.tiktok || ""
  const facebookUrl = SITE_CONFIG.socials?.facebook || ""

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            {storeLogo && (
              <img
                src={storeLogo}
                alt={storeName}
                className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            )}
            <div className="flex flex-col">
              <span className="text-primary font-black text-xl md:text-2xl tracking-wider uppercase leading-none">
                {storeName}
              </span>
              <span className="text-muted-foreground text-[10px] md:text-xs tracking-widest uppercase mt-1">
                {storeMotto}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#menuSection"
              className="text-foreground hover:text-primary transition-colors font-bold text-sm tracking-wider uppercase py-2"
            >
              Menu
            </Link>
            <Link
              href="#location"
              className="text-foreground hover:text-primary transition-colors font-bold text-sm tracking-wider uppercase py-2"
            >
              Location
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-bold text-sm tracking-wider uppercase py-2"
            >
              Contact
            </Link>
          </nav>

          {/* Top-Right Action Area: Upscaled Social Icons & Shopping Cart Trigger */}
          <div className="flex items-center gap-3">
            
            {/* Upscaled Social Icons (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary transition-all duration-200 hover:scale-110 shadow-md hover:shadow-primary/20"
                >
                  <Phone className="w-6 h-6 stroke-[2.2]" />
                </a>
              )}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary transition-all duration-200 hover:scale-110 shadow-md hover:shadow-primary/20"
                >
                  <Instagram className="w-6 h-6 stroke-[2.2]" />
                </a>
              )}
              {tiktokUrl && (
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary transition-all duration-200 hover:scale-110 shadow-md hover:shadow-primary/20"
                >
                  <Tiktok className="w-6 h-6 stroke-[2.2]" />
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary transition-all duration-200 hover:scale-110 shadow-md hover:shadow-primary/20"
                >
                  <Facebook className="w-6 h-6 stroke-[2.2]" />
                </a>
              )}
            </div>

            {/* Shopping Cart Drawer Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative min-w-[48px] min-h-[48px] px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-black flex items-center gap-2.5 hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 hover:scale-105 focus:outline-none"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="w-6 h-6 stroke-[2.2]" />
              <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">Cart</span>
              
              {/* Badge Counter */}
              {totalCount > 0 ? (
                <span className="min-w-[22px] h-[22px] px-1.5 rounded-full bg-background text-primary text-xs font-black flex items-center justify-center border-2 border-primary animate-pulse">
                  {totalCount}
                </span>
              ) : (
                <span className="text-xs opacity-75 sm:hidden">0</span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary text-foreground hover:text-primary transition-colors border border-border"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <Xmark className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              <Link
                href="#menuSection"
                className="text-foreground hover:text-primary transition-colors font-bold text-base tracking-wider uppercase py-2.5 px-3 rounded-xl hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="#location"
                className="text-foreground hover:text-primary transition-colors font-bold text-base tracking-wider uppercase py-2.5 px-3 rounded-xl hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Location
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-bold text-base tracking-wider uppercase py-2.5 px-3 rounded-xl hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Socials & Call Bar */}
              <div className="pt-3 border-t border-border/80 flex flex-col gap-3">
                {phoneDisplay && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-primary text-sm font-bold px-3 py-2.5 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>Free Delivery: {phoneDisplay}</span>
                  </a>
                )}

                {/* Upscaled Mobile Socials */}
                <div className="flex items-center gap-3 pt-2">
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary text-foreground hover:text-primary border border-border"
                      aria-label="WhatsApp"
                    >
                      <Phone className="w-6 h-6 stroke-[2]" />
                    </a>
                  )}
                  {instagramUrl && (
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary text-foreground hover:text-primary border border-border"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 stroke-[2]" />
                    </a>
                  )}
                  {tiktokUrl && (
                    <a
                      href={tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary text-foreground hover:text-primary border border-border"
                      aria-label="TikTok"
                    >
                      <Tiktok className="w-6 h-6 stroke-[2]" />
                    </a>
                  )}
                  {facebookUrl && (
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-2xl bg-secondary text-foreground hover:text-primary border border-border"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 stroke-[2]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
