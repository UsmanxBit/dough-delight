"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { SITE_CONFIG } from "@/siteConfig"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  description?: string
  category?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">, qty?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, delta: number) => void
  clearCart: () => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  totalCount: number
  totalPrice: number
  currency: string
  formatPrice: (amount: number) => string
  generateWhatsAppOrderUrl: (customerAddress?: string, customerName?: string) => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = "foodie_wagon_cart_v1"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const currency = SITE_CONFIG.store?.currency || "Rs."

  // Load cart from localStorage on client mount
  useEffect(() => {
    setIsMounted(true)
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY)
      if (saved) {
        setItems(JSON.parse(saved))
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e)
    }
  }, [])

  // Save cart changes to localStorage
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
      } catch (e) {
        console.error("Failed to save cart to localStorage", e)
      }
    }
  }, [items, isMounted])

  const addToCart = (item: Omit<CartItem, "quantity">, qty: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        )
      }
      return [...prev, { ...item, quantity: qty }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const formatPrice = (amount: number) => {
    return `${currency} ${amount.toLocaleString()}`
  }

  const generateWhatsAppOrderUrl = (customerAddress: string = "", customerName: string = "") => {
    const rawPhone = SITE_CONFIG.contact?.whatsapp || "923262550707"
    const cleanPhone = rawPhone.replace(/\D/g, "")

    if (items.length === 0) {
      return `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi! I would like to inquire about your menu.")}`
    }

    let message = `🛒 *NEW ORDER - ${SITE_CONFIG.store?.name || "Store"}*\n`
    message += `───────────────────────\n`

    items.forEach((item, index) => {
      const itemSubtotal = item.price * item.quantity
      message += `${index + 1}. *${item.name}*\n`
      message += `   Qty: ${item.quantity} × ${formatPrice(item.price)} = *${formatPrice(itemSubtotal)}*\n`
    })

    message += `───────────────────────\n`
    message += `*Total Amount:* *${formatPrice(totalPrice)}*\n\n`

    if (customerName.trim()) {
      message += `👤 *Customer Name:* ${customerName.trim()}\n`
    }
    if (customerAddress.trim()) {
      message += `📍 *Delivery Address / Note:* ${customerAddress.trim()}\n`
    }

    message += `\nPlease confirm my order and share estimated delivery time. Thanks!`

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalCount,
        totalPrice,
        currency,
        formatPrice,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
