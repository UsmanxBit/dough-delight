"use client"

import React, { useState } from "react"
import { FireFlame, Plus, Check } from "iconoir-react"
import { useCart } from "./cart-context"
import { SITE_CONFIG } from "@/siteConfig"

export interface ItemVariant {
  name: string
  price: number
}

export interface MenuItemData {
  id: string
  name: string
  price: number
  variants?: ItemVariant[]
  description: string
  category: string
  spiceLevel?: number
  image?: string
  badge?: string
  isPopular?: boolean
}

interface MenuCategoryProps {
  items: MenuItemData[]
}

export function MenuCategory({ items }: MenuCategoryProps) {
  const { addToCart, formatPrice } = useCart()
  const [selectedVariants, setSelectedVariants] = useState<{ [itemId: string]: ItemVariant }>({})
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({})

  const handleVariantSelect = (itemId: string, variant: ItemVariant) => {
    setSelectedVariants((prev) => ({ ...prev, [itemId]: variant }))
  }

  const handleAdd = (item: MenuItemData) => {
    const selectedVariant = selectedVariants[item.id] || item.variants?.[0]
    const effectivePrice = selectedVariant ? selectedVariant.price : item.price
    const effectiveName = selectedVariant ? `${item.name} (${selectedVariant.name})` : item.name
    const effectiveId = selectedVariant ? `${item.id}-${selectedVariant.name.toLowerCase()}` : item.id

    addToCart({
      id: effectiveId,
      name: effectiveName,
      price: effectivePrice,
      image: item.image,
      description: item.description,
      category: item.category,
    })

    setAddedIds((prev) => ({ ...prev, [effectiveId]: true }))
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [effectiveId]: false }))
    }, 1500)
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">No items available in this category currently.</p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {items.map((item) => {
        const activeVariant = selectedVariants[item.id] || item.variants?.[0]
        const currentPrice = activeVariant ? activeVariant.price : item.price
        const effectiveId = activeVariant ? `${item.id}-${activeVariant.name.toLowerCase()}` : item.id
        const isRecentlyAdded = addedIds[effectiveId]

        return (
          <div
            key={item.id}
            className="group relative bg-card/60 hover:bg-card border border-border/80 hover:border-primary/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5"
          >
            {/* Card Top: Badges & Price */}
            <div className="flex items-center justify-between mb-4 z-20">
              {item.badge ? (
                <span className="px-3 py-1 bg-accent/20 border border-accent/40 text-accent font-extrabold text-xs uppercase tracking-wider rounded-full">
                  {item.badge}
                </span>
              ) : item.isPopular ? (
                <span className="px-3 py-1 bg-primary/20 border border-primary/40 text-primary font-extrabold text-xs uppercase tracking-wider rounded-full">
                  Popular
                </span>
              ) : <div />}

              {/* Dynamic Price Tag */}
              <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full shadow-lg font-black text-lg group-hover:scale-105 transition-transform">
                {formatPrice(currentPrice)}
              </div>
            </div>

            {/* Product Image */}
            {item.image && (
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center p-2">
                {/* Halal Badge */}
                {SITE_CONFIG.store?.halalCertified && (
                  <div className="absolute bottom-2 left-2 z-20 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/graphics/halal logo.svg"
                      alt="100% Halal"
                      className="h-10 w-10 md:h-12 md:w-12 drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_25px_50px_rgba(251,191,36,0.35)] transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            {/* Product Info */}
            <div className="text-center flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border/40 flex flex-col gap-3">
                {/* Interactive Size/Portion Variants Pill Selector */}
                {item.variants && item.variants.length > 0 && (
                  <div className="flex items-center justify-center gap-2 flex-wrap mb-1">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase mr-1">
                      Size:
                    </span>
                    {item.variants.map((variant) => {
                      const isSelected = activeVariant?.name === variant.name
                      return (
                        <button
                          key={variant.name}
                          type="button"
                          onClick={() => handleVariantSelect(item.id, variant)}
                          className={`min-h-[32px] px-3 py-1 rounded-lg text-xs font-black transition-all ${
                            isSelected
                              ? "bg-primary text-primary-foreground shadow-md shadow-primary/30 scale-105"
                              : "bg-secondary text-foreground hover:border-primary/50 border border-border"
                          }`}
                        >
                          {variant.name}
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* Spice Level Indicator */}
                {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[11px] font-bold text-muted-foreground mr-1 uppercase">Spice:</span>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <FireFlame
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.spiceLevel!
                            ? "text-red-500 fill-red-500 animate-pulse"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                    isRecentlyAdded
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/30 scale-95"
                      : "bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary shadow-md hover:shadow-primary/20 hover:scale-[1.02]"
                  }`}
                  aria-label={`Add ${item.name} to cart`}
                >
                  {isRecentlyAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO CART</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>
                        ADD TO CART {activeVariant ? `(${activeVariant.name})` : ""}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
