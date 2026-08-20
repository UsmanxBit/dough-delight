export const MENU_DATA = {
  categories: [
    { id: "burgers", label: "Burgers", icon: "burger" },
    { id: "classic-pizza", label: "Classic Pizzas", icon: "pizza" },
    { id: "special-pizza", label: "Special Crust Pizzas", icon: "pizza" },
    { id: "premium-pizza", label: "Premium Deep Dish", icon: "pizza" },
    { id: "broast", label: "Injected Broast", icon: "flame" },
    { id: "starters", label: "Starters & Wings", icon: "flame" },
    { id: "fries", label: "Fries & Dips", icon: "fries" },
    { id: "wraps", label: "Wraps & Rolls", icon: "wrap" },
    { id: "sandwiches", label: "Sandwiches", icon: "burger" },
    { id: "pasta", label: "Pastas", icon: "pasta" },
    { id: "chinese", label: "Chinese & Soups", icon: "flame" },
    { id: "salads", label: "Salads", icon: "leaf" },
    { id: "drinks", label: "Drinks & Coffee", icon: "drink" },
  ],
  items: [
    // ==================== 1. BURGERS ====================
    {
      id: "dd-crisper",
      name: "DD Crisper Burger",
      category: "burgers",
      price: 350,
      description: "Crispy chest fillet, signature chipotle dressing, melted cheese and crisp lettuce in brioche bun",
      spiceLevel: 2,
      image: "/burgers/chicken/Chrunchy-Chicken_8,50euros.webp",
      isPopular: true,
      badge: "Bestseller"
    },
    {
      id: "zinger-burger",
      name: "Zinger Burger",
      category: "burgers",
      price: 399,
      description: "Crispy fried thigh fillet, creamy garlic mayo dressing and iceberg lettuce in toasted bun",
      spiceLevel: 2,
      image: "/burgers/chicken/Crispy-Ringer_10euros.webp",
      isPopular: true
    },
    {
      id: "dynamic-burger",
      name: "Dynamic Burger",
      category: "burgers",
      price: 500,
      description: "Crispy thigh fillet topped with spicy jalapeño sauce, melted cheddar and fresh salad",
      spiceLevel: 3,
      image: "/burgers/chicken/Mexican-Cracker_11euros.webp",
      badge: "Spicy"
    },
    {
      id: "tower-burger",
      name: "Tower Burger",
      category: "burgers",
      price: 600,
      description: "Double stack: crispy chest fillet & chicken patty with fiery peri peri sauce and double cheese",
      spiceLevel: 3,
      image: "/burgers/chicken/Foodie-Bomber-13euros.webp",
      badge: "Chef's Special"
    },
    {
      id: "dd-special-burger",
      name: "DD Special Burger",
      category: "burgers",
      price: 599,
      description: "Cheese-filled handcrafted grilled patty with rich signature chipotle sauce",
      spiceLevel: 2,
      image: "/burgers/beef/Cheesy-Buffalo_10,50euros.webp",
      isPopular: true
    },
    {
      id: "jalapeno-chicken-grilled",
      name: "Jalapeño Chicken Grilled Burger",
      category: "burgers",
      price: 499,
      description: "Marinated grilled chicken fillet, sliced red onions, ripe tomatoes, black olives and jalapeño sauce",
      spiceLevel: 2,
      image: "/burgers/chicken/Loaded-Chrunchy_9euros.webp"
    },
    {
      id: "lava-burger",
      name: "Lava Burger",
      category: "burgers",
      price: 999,
      description: "Monster double combo: chicken patty & beef patty, smoky BBQ sauce, drenched in hot molten lava cheese sauce",
      spiceLevel: 3,
      image: "/burgers/beef/Angry-Bull_12euros.webp",
      badge: "Supreme"
    },
    {
      id: "dd-classic-beef-burger",
      name: "DD Classic Beef Burger",
      category: "burgers",
      price: 900,
      description: "100% prime beef patty, creamy mushroom sauce, grilled onions, tomato slice and cheddar cheese",
      spiceLevel: 1,
      image: "/burgers/beef/Smookie-Beefy-BBQ_13euros.webp",
      isPopular: true
    },
    {
      id: "smash-beef-burger",
      name: "Smash Beef Burger",
      category: "burgers",
      price: 800,
      description: "Crispy-edged smashed beef patty, double melted American cheese, diced onions and zesty salsa sauce",
      spiceLevel: 2,
      image: "/burgers/beef/Blazing-Nacho-Beef_13euros.webp"
    },
    {
      id: "patty-burger",
      name: "Patty Burger",
      category: "burgers",
      price: 300,
      description: "Classic seasoned chicken patty, creamy garlic mayo dressing and crisp lettuce",
      spiceLevel: 1,
      image: "/burgers/chicken/Flip-Chicken-Burger_6euros.webp"
    },

    // ==================== 2. CLASSIC PIZZAS (With Small / Medium / Large Sizes) ====================
    {
      id: "bonfire-pizza",
      name: "Bonfire Pizza",
      category: "classic-pizza",
      price: 950,
      variants: [
        { name: "Small", price: 600 },
        { name: "Medium", price: 950 },
        { name: "Large", price: 1350 }
      ],
      description: "Signature Bonfire smoky sauce, spiced grilled chicken, 100% mozzarella, sweet corn & jalapeños",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Bestseller"
    },
    {
      id: "chicken-fajita-pizza",
      name: "Chicken Fajita Pizza",
      category: "classic-pizza",
      price: 950,
      variants: [
        { name: "Small", price: 600 },
        { name: "Medium", price: 950 },
        { name: "Large", price: 1350 }
      ],
      description: "Italian pizza sauce, seasoned fajita chicken chunks, bell capsicum, red onions & mozzarella",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "chicken-tikka-pizza",
      name: "Chicken Tikka Pizza",
      category: "classic-pizza",
      price: 950,
      variants: [
        { name: "Small", price: 600 },
        { name: "Medium", price: 950 },
        { name: "Large", price: 1350 }
      ],
      description: "Traditional tandoori tikka spiced chicken, diced onions, fresh coriander & extra cheese",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "chicken-supreme-pizza",
      name: "Chicken Supreme Pizza",
      category: "classic-pizza",
      price: 950,
      variants: [
        { name: "Small", price: 600 },
        { name: "Medium", price: 950 },
        { name: "Large", price: 1350 }
      ],
      description: "Pizza sauce, mixed seasoned chicken, chicken sausages, sautéed mushrooms, black olives & capsicum",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg",
      badge: "Popular"
    },
    {
      id: "cheese-lover-pizza",
      name: "Cheese Lover Pizza",
      category: "classic-pizza",
      price: 950,
      variants: [
        { name: "Small", price: 600 },
        { name: "Medium", price: 950 },
        { name: "Large", price: 1350 }
      ],
      description: "Loaded double layers of premium golden stretchy mozzarella and cheddar cheese",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "veggie-lover-pizza",
      name: "Veggie Lover Pizza",
      category: "classic-pizza",
      price: 950,
      variants: [
        { name: "Small", price: 600 },
        { name: "Medium", price: 950 },
        { name: "Large", price: 1350 }
      ],
      description: "Rich herb sauce, crunchy onions, capsicum, ripe tomatoes, mushrooms, sweet corn & black olives",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "hot-and-spicy-pizza",
      name: "Hot & Spicy Pizza",
      category: "classic-pizza",
      price: 950,
      variants: [
        { name: "Small", price: 600 },
        { name: "Medium", price: 950 },
        { name: "Large", price: 1350 }
      ],
      description: "Fiery spicy sauce, fajita chicken, spicy jalapeños, diced tomatoes & chili flakes",
      spiceLevel: 3,
      image: "/graphics/tasty burger.svg",
      badge: "Spicy"
    },

    // ==================== 3. SPECIAL & STUFFED CRUST PIZZAS (Medium & Large Sizes) ====================
    {
      id: "cheesy-bites-pizza",
      name: "Cheesy Bites Pizza",
      category: "special-pizza",
      price: 1300,
      variants: [
        { name: "Medium", price: 1300 },
        { name: "Large", price: 1600 }
      ],
      description: "Pull-apart cheese stuffed bite crust, special signature sauce, grilled chicken, mozzarella & black olives",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Specialty"
    },
    {
      id: "kabab-crust-pizza",
      name: "Kabab Crust Pizza",
      category: "special-pizza",
      price: 1300,
      variants: [
        { name: "Medium", price: 1300 },
        { name: "Large", price: 1600 }
      ],
      description: "Tender chicken kabab baked into the golden crust, peri peri drizzle, fajita chicken & capsicum",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "crown-crust-pizza",
      name: "Crown Crust Pizza",
      category: "special-pizza",
      price: 1450,
      variants: [
        { name: "Medium", price: 1450 },
        { name: "Large", price: 1800 }
      ],
      description: "Regal crown stuffed crust with miniature juicy kababs, fajita chicken, special dressing & olives",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg",
      badge: "Chef's Special"
    },
    {
      id: "behari-kabab-pizza",
      name: "Behari Kabab Pizza",
      category: "special-pizza",
      price: 1400,
      variants: [
        { name: "Medium", price: 1400 },
        { name: "Large", price: 1700 }
      ],
      description: "Creamy garlic mayo base, smoky tikka chicken, sliced behari kababs, capsicum & mozzarella",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "dd-special-pizza",
      name: "DD Special Pizza",
      category: "special-pizza",
      price: 1600,
      variants: [
        { name: "Medium", price: 1600 },
        { name: "Large", price: 1900 }
      ],
      description: "Rich royal Mughlai sauce, premium roasted dry nuts, tender chicken chunks, double cheese & olives",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "lazania-pizza",
      name: "Lazania Pizza",
      category: "special-pizza",
      price: 1300,
      variants: [
        { name: "Medium", price: 1300 },
        { name: "Large", price: 1600 }
      ],
      description: "Cheesy lasagna sauce layered inside the crust, spiced chicken, onions, bell capsicum & mozzarella",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },

    // ==================== 4. PREMIUM DEEP DISH & PAN PIZZAS ====================
    {
      id: "deep-dish-pizza",
      name: "Deep Dish Pizza",
      category: "premium-pizza",
      price: 1800,
      variants: [
        { name: "Medium", price: 1800 },
        { name: "Large", price: 2200 }
      ],
      description: "Chicago-style thick buttery crust, loaded special creamy sauce, overflowing fajita chicken & cheese",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Signature"
    },
    {
      id: "deep-pan-pizza",
      name: "Deep Pan Pizza",
      category: "premium-pizza",
      price: 1600,
      variants: [
        { name: "Medium", price: 1600 },
        { name: "Large", price: 2000 }
      ],
      description: "Golden pan baked thick crust, velvety cream sauce, fajita chicken, capsicum & black olives",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "juicy-crunch-pizza",
      name: "Juicy Crunch Pizza",
      category: "premium-pizza",
      price: 1600,
      variants: [
        { name: "Medium", price: 1600 },
        { name: "Large", price: 1900 }
      ],
      description: "Creamy malai boti sauce, sliced kabab cuts, crispy patty chunks, jalapeños & extra mozzarella",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "extreme-original-pizza",
      name: "Extreme Original Pizza",
      category: "premium-pizza",
      price: 1500,
      variants: [
        { name: "Medium", price: 1500 },
        { name: "Large", price: 1900 }
      ],
      description: "Signature DD house sauce, double portion chicken, jalapeños, bell peppers & mozzarella",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "peri-peri-pizza",
      name: "Peri Peri Pizza",
      category: "premium-pizza",
      price: 1300,
      variants: [
        { name: "Medium", price: 1300 },
        { name: "Large", price: 1700 }
      ],
      description: "Zesty Peri Peri herb sauce, smoked shredded chicken, capsicum, olives and spicy glaze",
      spiceLevel: 3,
      image: "/graphics/tasty burger.svg"
    },

    // ==================== 5. INJECTED BROAST (Quarter / Half / Full) ====================
    {
      id: "injected-broast",
      name: "Injected Crispy Broast",
      category: "broast",
      price: 579,
      variants: [
        { name: "Quarter", price: 579 },
        { name: "Half", price: 1149 },
        { name: "Full", price: 2299 }
      ],
      description: "Juicy flavor-injected crispy golden chicken broast. Served with fresh dinner rolls, golden fries & signature garlic dip",
      spiceLevel: 2,
      image: "/Fried-Chicken/Chicken-Wings.webp",
      isPopular: true,
      badge: "Bestseller"
    },

    // ==================== 6. STARTERS & WINGS ====================
    {
      id: "honey-wings",
      name: "Honey Glazed Wings",
      category: "starters",
      price: 999,
      description: "8 pieces of crispy battered wings tossed in sticky sweet & spicy honey chili glaze and toasted sesame",
      spiceLevel: 1,
      image: "/Fried-Chicken/Chicken-Wings.webp",
      isPopular: true,
      badge: "Bestseller"
    },
    {
      id: "chicken-hot-shots",
      name: "Chicken Hot Shots",
      category: "starters",
      price: 450,
      description: "10 pieces of bite-sized crunchy chicken breast pops seasoned with spicy paprika and served with dip",
      spiceLevel: 2,
      image: "/Appetizers/Chilli-Cheese-Nuggets.webp"
    },
    {
      id: "chicken-cheese-sticks",
      name: "Chicken Cheese Sticks",
      category: "starters",
      price: 799,
      description: "4 pieces of golden breaded sticks filled with seasoned minced chicken and gooey melted cheese",
      spiceLevel: 1,
      image: "/Appetizers/Mozarella-Sticks.webp",
      isPopular: true
    },
    {
      id: "hot-wings",
      name: "Crispy Hot Wings",
      category: "starters",
      price: 330,
      variants: [
        { name: "6 Pcs", price: 330 },
        { name: "12 Pcs", price: 600 }
      ],
      description: "Spicy seasoned crunchy fried chicken wings served with signature garlic dipping sauce",
      spiceLevel: 2,
      image: "/Fried-Chicken/Chicken-Wings.webp"
    },
    {
      id: "chicken-nuggets",
      name: "Chicken Nuggets",
      category: "starters",
      price: 399,
      variants: [
        { name: "6 Pcs", price: 399 },
        { name: "12 Pcs", price: 649 }
      ],
      description: "Crispy golden fried chicken nuggets served with ketchup and dip sauce",
      spiceLevel: 0,
      image: "/Appetizers/Chilli-Cheese-Nuggets.webp"
    },

    // ==================== 7. FRIES & DIPS ====================
    {
      id: "pizza-fries",
      name: "Pizza Fries",
      category: "fries",
      price: 700,
      description: "Crispy fries baked under pizza sauce, grilled chicken tikka, black olives, jalapeños & melted mozzarella",
      spiceLevel: 2,
      image: "/Appetizers/Loaded-Pommes.webp",
      isPopular: true,
      badge: "Favorite"
    },
    {
      id: "loaded-fries",
      name: "Loaded Gourmet Fries",
      category: "fries",
      price: 650,
      description: "Golden fries smothered with melted cheddar cheese sauce, chicken chunks, jalapeños & herb dusting",
      spiceLevel: 2,
      image: "/Appetizers/Loaded-Pommes.webp",
      isPopular: true
    },
    {
      id: "plain-fries",
      name: "Golden Salted Fries",
      category: "fries",
      price: 250,
      variants: [
        { name: "Small", price: 250 },
        { name: "Large", price: 370 }
      ],
      description: "Crisp golden potato fries lightly seasoned with sea salt",
      spiceLevel: 0,
      image: "/Appetizers/Pommes_3,5euros.webp"
    },
    {
      id: "masala-fries",
      name: "Spicy Masala Fries",
      category: "fries",
      price: 399,
      description: "Crispy fries tossed with authentic chatpata spicy masala blend",
      spiceLevel: 2,
      image: "/Appetizers/Pommes_3,5euros.webp"
    },
    {
      id: "dip-sauce-extra",
      name: "Signature Dip Sauce",
      category: "fries",
      price: 79,
      description: "Choice of Garlic Mayo, Chipotle, BBQ, Peri Peri or Tangy Cheese Dip",
      image: "/graphics/dips.svg"
    },

    // ==================== 8. WRAPS & ROLLS ====================
    {
      id: "classic-shawarma-roll",
      name: "Classic Shawarma Roll",
      category: "wraps",
      price: 249,
      description: "Toasted pita wrap packed with spiced shredded chicken, pickles and garlic tahini dressing",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "crispy-zinger-roll",
      name: "Crispy Zinger Roll",
      category: "wraps",
      price: 349,
      description: "Golden zinger chicken strip wrapped in warm tortilla with spicy mayo and fresh iceberg",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "zinger-paratha-roll",
      name: "Zinger Paratha Roll",
      category: "wraps",
      price: 400,
      description: "Crispy paratha stuffed with crunchy zinger fillet, sliced onions and garlic dip",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "pizza-donner",
      name: "Pizza Donner",
      category: "wraps",
      price: 450,
      description: "Donner style pita wrap filled with pizza chicken, herbs, cheese and house dressing",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "behari-roll",
      name: "Behari Kabab Roll",
      category: "wraps",
      price: 549,
      description: "Smoky behari kabab, roasted onions, chatni dressing wrapped in flaky flatbread",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "tortilla-wrap",
      name: "Tortilla Wrap",
      category: "wraps",
      price: 550,
      description: "Soft Mexican tortilla wrapped around seasoned grilled chicken, sweet corn and chipotle sauce",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "loaded-shapata-roll",
      name: "Loaded Shapata Roll",
      category: "wraps",
      price: 550,
      description: "Chef's loaded special spiced roll packed with chicken chunks, cheese and secret sauce",
      spiceLevel: 3,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "pizza-shawarma",
      name: "Pizza Shawarma",
      category: "wraps",
      price: 500,
      description: "Fusion wrap combining tender shawarma meat with pizza sauce, oregano and mozzarella",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },

    // ==================== 9. SANDWICHES ====================
    {
      id: "club-sandwich",
      name: "Classic Club Sandwich",
      category: "sandwiches",
      price: 549,
      description: "Triple-decker sandwich with shredded chicken, fried egg, cheddar slice, cucumber & tomato. Served with fries",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "grilled-chicken-sandwich",
      name: "Grilled Chicken Sandwich",
      category: "sandwiches",
      price: 549,
      description: "Marinated juicy grilled chicken breast, herb mayo, crisp lettuce in toasted artisan bread",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "tikka-sandwich",
      name: "Chicken Tikka Sandwich",
      category: "sandwiches",
      price: 549,
      description: "Smoky tandoori tikka spiced chicken, mint mayo dressing, onions in toasted bread",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "mexican-sandwich",
      name: "Mexican Sandwich",
      category: "sandwiches",
      price: 699,
      description: "Spicy Mexican seasoned chicken, sliced jalapeños, salsa sauce, double cheese in toasted bread",
      spiceLevel: 3,
      image: "/graphics/tasty burger.svg",
      badge: "Spicy"
    },

    // ==================== 10. PASTAS (With Half / Full Sizes) ====================
    {
      id: "mac-and-cheese",
      name: "Creamy Mac & Cheese",
      category: "pasta",
      price: 400,
      variants: [
        { name: "Half", price: 400 },
        { name: "Full", price: 700 }
      ],
      description: "Macaroni pasta enveloped in velvety rich cheddar and mozzarella cheese sauce, baked golden",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "dd-special-pasta",
      name: "DD Special Pasta with Crispy Chicken",
      category: "pasta",
      price: 800,
      description: "Penne pasta in rich garlic parmesan cream sauce, topped with sliced golden crispy chicken breast fillet & baked cheese (Full)",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Bestseller"
    },
    {
      id: "alfredo-pasta",
      name: "Fettuccine Alfredo Pasta",
      category: "pasta",
      price: 750,
      description: "Classic Italian fettuccine tossed in rich butter garlic cream sauce with grilled herb chicken & mushrooms (Full)",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg"
    },

    // ==================== 11. CHINESE CUISINE & SOUPS (Single / Full Sizes) ====================
    {
      id: "chicken-corn-soup",
      name: "Chicken Corn Soup",
      category: "chinese",
      price: 299,
      variants: [
        { name: "Single", price: 299 },
        { name: "Family", price: 699 }
      ],
      description: "Classic thick Chinese soup with shredded chicken, sweet corn kernels and egg ribbon drops",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "hot-and-sour-soup",
      name: "Hot & Sour Soup",
      category: "chinese",
      price: 299,
      variants: [
        { name: "Single", price: 299 },
        { name: "Family", price: 699 }
      ],
      description: "Hearty traditional spicy and tangy soup with chicken, mushrooms and egg ribbons",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "chicken-fried-rice",
      name: "Chicken Fried Rice",
      category: "chinese",
      price: 749,
      description: "Wok-fried premium fragrant basmati rice tossed with shredded chicken, eggs, scallions & seasonal vegetables (Full)",
      spiceLevel: 1,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "egg-fried-rice",
      name: "Egg Fried Rice",
      category: "chinese",
      price: 649,
      description: "Wok-tossed seasoned rice with fluffy scrambled eggs, spring onions and soya glaze (Full)",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "chicken-manchurian",
      name: "Chicken Manchurian Gravy",
      category: "chinese",
      price: 649,
      description: "Crispy chicken cubes simmered in authentic sweet, savory & spicy red Manchurian gravy (Full)",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "black-pepper-chicken",
      name: "Black Pepper Chicken Gravy",
      category: "chinese",
      price: 649,
      description: "Tender sliced chicken stir-fried with crushed black peppercorns, onions & bell peppers in rich dark sauce (Full)",
      spiceLevel: 2,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "chicken-chilli-dry",
      name: "Chicken Chilli Dry",
      category: "chinese",
      price: 849,
      description: "Crisp battered chicken slices wok-tossed with green chilies, ginger slivers and aromatic soya glaze (Full)",
      spiceLevel: 3,
      image: "/graphics/tasty burger.svg",
      badge: "Chef's Special"
    },

    // ==================== 12. SALADS ====================
    {
      id: "fruit-cocktail-salad",
      name: "Fruit Cocktail Salad",
      category: "salads",
      price: 599,
      description: "Fresh medley of seasonal fruits, cocktail mix and sweet creamy dressing",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "macaroni-salad",
      name: "Creamy Macaroni Salad",
      category: "salads",
      price: 500,
      description: "Chilled elbow macaroni tossed with diced vegetables in sweet herb mayonnaise dressing",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "russian-salad",
      name: "Russian Salad",
      category: "salads",
      price: 450,
      description: "Diced potatoes, green peas, carrots, apples and pineapple in velvety dressing",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "chicken-pineapple-salad",
      name: "Chicken Pineapple Salad",
      category: "salads",
      price: 800,
      description: "Shredded roast chicken, sweet juicy pineapple chunks and iceberg tossed in light cream",
      spiceLevel: 0,
      image: "/graphics/tasty burger.svg"
    },

    // ==================== 13. DRINKS & COFFEE ====================
    {
      id: "cappuccino",
      name: "Italian Cappuccino",
      category: "drinks",
      price: 249,
      description: "Rich espresso shot with velvety steamed milk foam and cocoa dusting",
      image: "/graphics/cold drinks sprite cola fanta.svg",
      isPopular: true
    },
    {
      id: "vanilla-latte",
      name: "Vanilla Latte",
      category: "drinks",
      price: 599,
      description: "Smooth espresso blended with Madagascar vanilla syrup and steamed milk",
      image: "/graphics/cold drinks sprite cola fanta.svg"
    },
    {
      id: "special-tea",
      name: "Dough Delight Special Karak Tea",
      category: "drinks",
      price: 99,
      description: "Traditional aromatic boiled rich milk tea infused with cardamom",
      image: "/graphics/cold drinks sprite cola fanta.svg",
      isPopular: true
    },
    {
      id: "soft-drinks-size",
      name: "Chilled Soft Drinks",
      category: "drinks",
      price: 100,
      variants: [
        { name: "Regular", price: 100 },
        { name: "500ml", price: 120 },
        { name: "1 Liter", price: 170 },
        { name: "1.5 Liter", price: 220 }
      ],
      description: "Choice of Coca-Cola, Sprite, Fanta, or Diet Coke in chilled bottles/cans",
      image: "/graphics/cold drinks sprite cola fanta.svg"
    },
    {
      id: "mineral-water",
      name: "Pure Mineral Water",
      category: "drinks",
      price: 60,
      variants: [
        { name: "Small", price: 60 },
        { name: "Large", price: 120 }
      ],
      description: "Pure chilled natural mineral water",
      image: "/graphics/water.svg"
    },
    {
      id: "fresh-lime-soda",
      name: "Fresh Lime Soda",
      category: "drinks",
      price: 150,
      description: "Refreshing fizzy soda with squeezed fresh lime and mint pinch",
      image: "/graphics/cold drinks sprite cola fanta.svg"
    }
  ]
};

// ==================== DEDICATED BAKERY, CAKES & DESSERTS MENU ====================
export const BAKERY_DATA = {
  categories: [
    { id: "all-sweets", label: "All Bakery Delights" },
    { id: "exclusive-cakes", label: "Exclusive Cakes (Per Pound)" },
    { id: "brownies-pastries", label: "Brownies & Pastries" },
    { id: "cupcakes-donuts", label: "Cupcakes & Donuts" },
    { id: "warm-desserts", label: "Kunafa & Warm Desserts" },
  ],
  items: [
    // --- Exclusive Cakes (Per Pound: 1 Pound / 2 Pound) ---
    {
      id: "lotus-cake",
      name: "Lotus Biscoff Celebration Cake",
      category: "exclusive-cakes",
      price: 1200,
      variants: [
        { name: "1 Pound", price: 1200 },
        { name: "2 Pound", price: 2400 }
      ],
      description: "Artisan celebration cake layered with premium Lotus Biscoff spread, biscuit crunch and butter cream",
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Bestseller"
    },
    {
      id: "cadbury-cake",
      name: "Cadbury Silk Chocolate Cake",
      category: "exclusive-cakes",
      price: 1200,
      variants: [
        { name: "1 Pound", price: 1200 },
        { name: "2 Pound", price: 2400 }
      ],
      description: "Rich velvety moist chocolate sponge smothered in Cadbury chocolate ganache",
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "kit-kat-cake",
      name: "Kit Kat Crunch Cake",
      category: "exclusive-cakes",
      price: 1200,
      variants: [
        { name: "1 Pound", price: 1200 },
        { name: "2 Pound", price: 2400 }
      ],
      description: "Chocolate layered cake surrounded with crunchy Kit Kat wafer bars and chocolate drops",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "black-forest-cake",
      name: "Classic Black Forest Cake",
      category: "exclusive-cakes",
      price: 1200,
      variants: [
        { name: "1 Pound", price: 1200 },
        { name: "2 Pound", price: 2400 }
      ],
      description: "Traditional chocolate sponge layered with fresh whipped cream, dark cherries & chocolate curls",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "pineapple-cake",
      name: "Fresh Pineapple Gateau Cake",
      category: "exclusive-cakes",
      price: 1200,
      variants: [
        { name: "1 Pound", price: 1200 },
        { name: "2 Pound", price: 2400 }
      ],
      description: "Light vanilla sponge layered with juicy pineapple chunks and vanilla whipped cream",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "carrot-cake",
      name: "Carrot & Cinnamon Spice Cake",
      category: "exclusive-cakes",
      price: 1200,
      variants: [
        { name: "1 Pound", price: 1200 },
        { name: "2 Pound", price: 2400 }
      ],
      description: "Spiced carrot sponge with walnuts, frosted with silky cream cheese icing",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "fararow-cake",
      name: "Ferrero Rocher Royal Cake",
      category: "exclusive-cakes",
      price: 1200,
      variants: [
        { name: "1 Pound", price: 1200 },
        { name: "2 Pound", price: 2400 }
      ],
      description: "Nutella hazelnut infused chocolate cake topped with golden Ferrero Rocher truffles",
      image: "/graphics/tasty burger.svg",
      badge: "Premium"
    },

    // --- Brownies & Pastries ---
    {
      id: "nutella-brownie",
      name: "Nutella Fudge Brownie",
      category: "brownies-pastries",
      price: 250,
      description: "Decadent fudgy rich chocolate brownie drizzled with warm Nutella glaze",
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Popular"
    },
    {
      id: "chocolate-brownie",
      name: "Double Chocolate Brownie",
      category: "brownies-pastries",
      price: 200,
      description: "Rich dark chocolate brownie loaded with chocolate chunks",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "plain-brownie",
      name: "Classic Fudge Brownie",
      category: "brownies-pastries",
      price: 150,
      description: "Traditional moist chocolate brownie with a shiny crinkly top",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "mud-cake-pastry",
      name: "Mississippi Mud Cake Pastry",
      category: "brownies-pastries",
      price: 250,
      description: "Dense dark chocolate mud cake pastry layered with rich ganache",
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "lotus-pastry",
      name: "Lotus Biscoff Pastry",
      category: "brownies-pastries",
      price: 250,
      description: "Layered sponge pastry infused with Lotus Biscoff butter and cookie crumbs",
      image: "/graphics/tasty burger.svg"
    },

    // --- Cupcakes & Donuts ---
    {
      id: "lotus-cupcake",
      name: "Lotus Biscoff Cupcake",
      category: "cupcakes-donuts",
      price: 150,
      description: "Fluffy vanilla sponge cupcake topped with creamy Lotus Biscoff swirl and biscuit crumble",
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "red-velvet-cupcake",
      name: "Red Velvet Cupcake",
      category: "cupcakes-donuts",
      price: 120,
      description: "Rich crimson cocoa sponge topped with silky cream cheese frosting",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "chocolate-cupcake",
      name: "Double Chocolate Cupcake",
      category: "cupcakes-donuts",
      price: 120,
      description: "Moist chocolate cupcake with whipped chocolate buttercream swirl",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "plain-cupcake",
      name: "Classic Vanilla Cupcake",
      category: "cupcakes-donuts",
      price: 100,
      description: "Golden vanilla cupcake with buttercream topping",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "oreo-stuff-donut",
      name: "Oreo Stuffed Donut",
      category: "cupcakes-donuts",
      price: 150,
      description: "Fluffy glazed donut stuffed with Oreo cream and coated with crushed cookies",
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "lotus-stuff-donut",
      name: "Lotus Biscoff Stuffed Donut",
      category: "cupcakes-donuts",
      price: 150,
      description: "Soft golden donut filled with molten Lotus spread and caramelized glaze",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "plain-donut",
      name: "Classic Sugar Glazed Donut",
      category: "cupcakes-donuts",
      price: 100,
      description: "Light and airy traditional yeast donut dipped in sweet glaze",
      image: "/graphics/tasty burger.svg"
    },

    // --- Warm Desserts, Kunafa & Specialty Cups ---
    {
      id: "kunafa-dessert",
      name: "Royal Arabic Kunafa",
      category: "warm-desserts",
      price: 450,
      description: "Golden spun pastry threads baked with sweet mozzarella cheese and scented sugar syrup",
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Signature"
    },
    {
      id: "molten-lava-cake",
      name: "Molten Chocolate Lava Cake",
      category: "warm-desserts",
      price: 300,
      description: "Warm dark chocolate sponge bursting with a rich flowing liquid chocolate core",
      image: "/graphics/tasty burger.svg",
      isPopular: true,
      badge: "Bestseller"
    },
    {
      id: "skillet-cookie",
      name: "Warm Chocolate Chip Skillet Cookie",
      category: "warm-desserts",
      price: 300,
      description: "Freshly baked cast-iron chocolate chip cookie with gooey melted chocolate",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "three-milk-cup",
      name: "Tres Leches (Three Milk) Cup",
      category: "warm-desserts",
      price: 200,
      description: "Ultra-moist sponge soaked in three milks and topped with whipped chantilly cream",
      image: "/graphics/tasty burger.svg",
      isPopular: true
    },
    {
      id: "sundae-cup",
      name: "Gourmet Fudge Sundae Cup",
      category: "warm-desserts",
      price: 250,
      description: "Layered ice cream sundae cup with chocolate fudge, caramel and roasted nuts",
      image: "/graphics/tasty burger.svg"
    },
    {
      id: "banana-bread",
      name: "Fresh Baked Banana Bread",
      category: "warm-desserts",
      price: 100,
      description: "Moist artisan banana loaf slice made with ripe bananas and cinnamon",
      image: "/graphics/tasty burger.svg"
    }
  ]
};

export default MENU_DATA;
