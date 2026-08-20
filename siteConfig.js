const SITE_CONFIG = {
  store: {
    name: "Dough Delight Café",
    motto: "Where Taste Greets You!",
    tagline: "Premium Pizzas, Gourmet Burgers, Injected Broast, Artisan Bakery & Cakes",
    description: "Experience handcrafted pizzas, signature smash burgers, injected crispy broast, fresh pastas, and artisan bakery delights in Jahanian.",
    logo: "./assets/images/logo.jpeg",
    mapImage: "./assets/images/map.png",
    mapEmbedUrl: "",
    mapAddress: "City Center, Jahanian, 58200",
    timings: "Daily: 11:00 AM - 12:00 AM",
    openingDays: "Open 7 Days a Week",
    currency: "Rs.",
    halalCertified: true,
    highlights: [
      { count: "10+", label: "Burgers" },
      { count: "18+", label: "Pizzas" },
      { count: "100%", label: "Fresh & Halal" }
    ]
  },
  contact: {
    whatsapp: "923040700123",
    phoneDisplay: "0304-0700123",
    email: "doughdelightcafe@gmail.com",
    address: "City Center, Jahanian, 58200"
  },
  socials: {
    tiktok: "https://www.tiktok.com/@dough.delight.caf",
    instagram: "",
    facebook: "https://www.facebook.com/p/Dough-Delight-cafe-61582684563771/"
  },
  developer: {
    name: "Usman",
    whatsapp: "923262550707",
    instagram: "usmanxbit",
    portfolio: ""
  }
};

if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SITE_CONFIG };
}
