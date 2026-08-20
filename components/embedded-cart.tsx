"use client"

import React, { useState } from "react"
import { useCart } from "./cart-context"
import { SITE_CONFIG } from "@/siteConfig"
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash,
  Send,
  Shop,
  FastArrowRight,
  User,
  MapPin,
  Notes
} from "iconoir-react"

export function EmbeddedCart() {
  const {
    items,
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
  const [customerNotes, setCustomerNotes] = useState("")

  const handleCheckout = () => {
    const combinedNotes = [
      customerAddress ? `Address/Table: ${customerAddress}` : "",
      customerNotes ? `Notes: ${customerNotes}` : "",
    ]
      .filter(Boolean)
      .join(" | ")

    const url = generateWhatsAppOrderUrl(combinedNotes, customerName)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const scrollToMenu = () => {
    const el = document.getElementById("menuSection") || document.getElementById("menu")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 bg-card border-2 border-primary/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-primary/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tight">
              Review Your Order
            </h3>
            <p className="text-sm text-muted-foreground">
              {totalCount > 0
                ? `${totalCount} ${totalCount === 1 ? "item" : "items"} currently in your tray`
                : "Real-time instant order review"}
            </p>
          </div>
        </div>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="min-h-[44px] px-4 py-2 text-xs font-bold text-destructive hover:bg-destructive/10 border border-destructive/30 rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <Trash className="w-4 h-4" />
            <span>Clear Cart</span>
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="py-6 relative z-10">
        {items.length === 0 ? (
          /* Empty State */
          <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-20 h-20 rounded-3xl bg-secondary/80 border border-border flex items-center justify-center text-muted-foreground mb-2">
              <ShoppingBag className="w-10 h-10 stroke-1" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">Your cart is empty</h4>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mt-1">
                Add your favorite handcrafted dishes from the menu above to get your fresh order delivered or prepared!
              </p>
            </div>
            <button
              onClick={scrollToMenu}
              className="min-h-[48px] px-8 py-3.5 bg-primary text-primary-foreground font-black text-sm tracking-wider uppercase rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 flex items-center gap-2 hover:scale-105"
            >
              <span>Explore Menu Items</span>
              <FastArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Active Cart List */
          <div className="space-y-6">
            {/* Dishes List */}
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-secondary/50 border border-border/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-primary/40 transition-colors"
                >
                  {/* Item Image & Title */}
                  <div className="flex items-center gap-4 min-w-0">
                    {item.image && (
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-background/80 border border-border flex-shrink-0 flex items-center justify-center p-1.5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h5 className="text-base sm:text-lg font-black text-foreground truncate">
                        {item.name}
                      </h5>
                      <p className="text-xs sm:text-sm font-bold text-primary">
                        {formatPrice(item.price)} each
                      </p>
                    </div>
                  </div>

                  {/* Quantity & Item Subtotal Controls */}
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
                    {/* Quantity Modifiers */}
                    <div className="flex items-center bg-background border border-border rounded-xl overflow-hidden shadow-inner">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="min-w-[38px] min-h-[38px] flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 text-sm font-black text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="min-w-[38px] min-h-[38px] flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="text-base font-black text-primary min-w-[80px] text-right">
                      {formatPrice(item.price * item.quantity)}
                    </span>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="min-w-[40px] min-h-[40px] flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors rounded-lg hover:bg-destructive/10"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery & Contact Details Form */}
            <div className="p-6 bg-secondary/30 rounded-2xl border border-border space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <Shop className="w-4 h-4 text-primary" />
                <span>Delivery / Table Information (Optional)</span>
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Johnson"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Delivery Address / Table Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Block 4, House 12 or Table 5"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <Notes className="w-3.5 h-3.5 text-primary" />
                  <span>Special Instructions / Dietary Notes</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra garlic sauce, sauce on side, spicy"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                />
              </div>
            </div>

            {/* Total Summary & Checkout Action */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-bold text-muted-foreground block">
                  Total Order Amount
                </span>
                <span className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={scrollToMenu}
                  className="min-h-[48px] px-6 py-3 border border-border hover:border-primary text-foreground font-bold text-sm rounded-xl transition-all w-full sm:w-auto text-center"
                >
                  + Add More Dishes
                </button>

                <button
                  onClick={handleCheckout}
                  className="min-h-[48px] px-8 py-3.5 bg-primary text-primary-foreground font-black text-base tracking-wider rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2.5 hover:scale-105 w-full sm:w-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>ORDER VIA WHATSAPP</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
