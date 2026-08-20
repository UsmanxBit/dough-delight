"use client"

import { useState } from "react"
import { MenuCategory } from "./menu-category"
import { BAKERY_DATA } from "@/menuData"
import { Sparks, Star } from "iconoir-react"

export function BakerySection() {
  const categories = BAKERY_DATA.categories || []
  const [activeCategory, setActiveCategory] = useState("all-sweets")

  const allItems = BAKERY_DATA.items || []
  const filteredItems = activeCategory === "all-sweets"
    ? allItems
    : allItems.filter((item) => item.category === activeCategory)

  const activeCategoryObj = categories.find((c) => c.id === activeCategory)

  return (
    <section id="bakerySection" className="py-20 md:py-32 bg-background relative scroll-mt-20 border-t border-border/80">
      {/* Glow decorations */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest mb-4">
            <Star className="w-4 h-4" />
            <span>Artisan Bakery & Confectionery</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight mb-4 uppercase">
            BAKERY & CAKE DELIGHTS
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
            Indulge in our freshly baked celebration cakes, warm skillet cookies, gooey brownies, cupcakes, and royal kunafa.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-14">
          {categories.map((category) => {
            const isActive = activeCategory === category.id
            const count = category.id === "all-sweets"
              ? allItems.length
              : allItems.filter((i) => i.category === category.id).length

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group min-h-[44px] flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm md:text-base tracking-tight transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/40 scale-105"
                    : "bg-card border-2 border-border text-foreground hover:border-primary/50 hover:scale-105"
                }`}
              >
                <Sparks className="w-4 h-4 flex-shrink-0" />
                <span>{category.label}</span>
                {count > 0 && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-extrabold ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Active Category Title */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tight">
            {activeCategoryObj?.label || "Bakery Selection"}
          </h3>
          <span className="text-sm font-bold text-muted-foreground">
            {filteredItems.length} {filteredItems.length === 1 ? "delight" : "delights"} available
          </span>
        </div>

        {/* Bakery Items Grid */}
        <MenuCategory items={filteredItems} />

      </div>
    </section>
  )
}
