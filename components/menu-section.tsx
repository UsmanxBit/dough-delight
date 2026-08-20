"use client"

import { useState } from "react"
import { MenuCategory } from "./menu-category"
import { MENU_DATA } from "@/menuData"
import { SITE_CONFIG } from "@/siteConfig"
import {
  PizzaSlice as BurgerIcon,
  CoffeeCup,
  Leaf,
  FireFlame as Flame,
  FastArrowRight,
  Shop
} from "iconoir-react"

// Category Icon helper to dynamically render matching icons
function getCategoryIcon(iconName?: string) {
  switch (iconName?.toLowerCase()) {
    case "flame":
    case "chicken":
      return Flame
    case "pizza":
    case "pizzas":
      return BurgerIcon
    case "leaf":
    case "veggie":
      return Leaf
    case "drink":
    case "drinks":
    case "coffee":
      return CoffeeCup
    case "burger":
    case "burgers":
    default:
      return BurgerIcon
  }
}

export function MenuSection() {
  const categories = MENU_DATA.categories || []
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "burgers")

  const allItems = MENU_DATA.items || []
  const filteredItems = activeCategory === "all"
    ? allItems
    : allItems.filter((item) => item.category === activeCategory)

  const activeCategoryObj = categories.find((c) => c.id === activeCategory)

  return (
    <section id="menuSection" className="py-20 md:py-32 bg-card relative scroll-mt-20">
      {/* Anchor alias for #menu */}
      <span id="menu" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest mb-4">
            <Shop className="w-4 h-4" />
            <span>Handcrafted Deliciousness</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight mb-4 uppercase">
            OUR FRESH MENU
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
            {SITE_CONFIG.store?.description || "Explore our handcrafted dishes made fresh with quality ingredients."}
          </p>
        </div>

        {/* Category Navigation Pills - 100% Config Driven */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-16">
          {/* All Items Option */}
          <button
            onClick={() => setActiveCategory("all")}
            className={`group min-h-[44px] flex items-center gap-2.5 px-6 py-3 rounded-2xl font-black text-sm md:text-base tracking-tight transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/40 scale-105"
                : "bg-background border-2 border-border text-foreground hover:border-primary/50 hover:scale-105"
            }`}
          >
            <span>All Dishes</span>
          </button>

          {/* Dynamic Categories */}
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.icon)
            const isActive = activeCategory === category.id
            const count = allItems.filter((i) => i.category === category.id).length

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group min-h-[44px] flex items-center gap-2.5 px-6 py-3 rounded-2xl font-black text-sm md:text-base tracking-tight transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/40 scale-105"
                    : "bg-background border-2 border-border text-foreground hover:border-primary/50 hover:scale-105"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
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
            {activeCategory === "all" ? "Full Menu Selection" : activeCategoryObj?.label || "Dishes"}
          </h3>
          <span className="text-sm font-bold text-muted-foreground">
            {filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"} available
          </span>
        </div>

        {/* Menu Items Grid */}
        <MenuCategory items={filteredItems} />

      </div>
    </section>
  )
}
