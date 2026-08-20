"use client"

import React, { useState } from "react"
import { useCart } from "./cart-context"
import { SITE_CONFIG } from "@/siteConfig"
import { Xmark, Trash, ShoppingBag, Plus, Minus, Send } from "iconoir-react"

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice,
    formatPrice,
    generateWhatsAppOrderUrl,
  } = useCart()

  const [customerName, setCustomerName] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")

  if (!isCartOpen) return null

  const handleCheckout = () => {
    const url = generateWhatsAppOrderUrl(customerAddress, customerName)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-card border-l border-border shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-border flex items-center justify-between bg-card/90 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Your Order Cart</h2>
                <p className="text-xs text-muted-foreground">
                  {totalCount} {totalCount === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-secondary/80 text-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Close cart drawer"
            >
              <Xmark className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-muted-foreground border border-border">
                  <ShoppingBag className="w-10 h-10 stroke-1" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground max-w-xs mt-1">
                    Add delicious items from our menu to start your order!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false)
                    const el = document.getElementById("menuSection") || document.getElementById("menu")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="min-h-[44px] px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-border/50">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Selected Dishes
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-destructive hover:underline flex items-center gap-1 min-h-[32px] px-2"
                  >
                    <Trash className="w-3.5 h-3.5" />
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-secondary/40 border border-border rounded-xl flex items-center gap-3 hover:border-primary/40 transition-colors"
                  >
                    {/* Item Thumbnail */}
                    {item.image && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-background/50 border border-border/50 flex-shrink-0 flex items-center justify-center p-1">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-foreground truncate">{item.name}</h4>
                      <p className="text-xs font-semibold text-primary mt-0.5">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center bg-background border border-border rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="min-w-[32px] min-h-[32px] flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="min-w-[32px] min-h-[32px] flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-muted-foreground ml-auto">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="min-w-[36px] min-h-[36px] flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors ml-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Customer Details Form */}
                <div className="pt-4 border-t border-border/60 space-y-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                    Delivery / Order Details (Optional)
                  </span>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Delivery Address / Special Notes</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. House #12, Street 4, Block B (No spicy sauce)"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border bg-card/95 backdrop-blur space-y-4">
              <div className="flex items-center justify-between text-base font-bold">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="text-2xl font-black text-primary">{formatPrice(totalPrice)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full min-h-[48px] px-6 py-3.5 bg-primary text-primary-foreground font-black tracking-wide rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 text-base hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>ORDER ON WHATSAPP</span>
              </button>

              <p className="text-[11px] text-center text-muted-foreground">
                Your order will be formatted and opened directly in WhatsApp for instant confirmation.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
