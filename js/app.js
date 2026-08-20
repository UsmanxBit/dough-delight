// Global App State
let cart = [];
let activeSavoryCategory = "all";
let activeBakeryCategory = "all-sweets";
let selectedItemVariants = {}; // itemId -> selected variant index

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHero();
  renderMenuCategories();
  renderMenuItems();
  renderBakeryCategories();
  renderBakeryItems();
  initCart();
  renderLocationAndContact();
  renderFooter();
});

// Initialize Header & Mobile Toggle
function initHeader() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileNav = document.getElementById("mobileNavMenu");
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }
}

// Initialize Hero Dynamic Highlights
function initHero() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  const phoneLinks = document.querySelectorAll(".client-phone-link");
  phoneLinks.forEach(el => {
    el.href = `https://wa.me/${cfg.contact.whatsapp}`;
  });
}

// Render Fast Food Categories Tabs
function renderMenuCategories() {
  const container = document.getElementById("savoryCategoriesContainer");
  if (!container || !window.MENU_DATA) return;

  const totalCount = window.MENU_DATA.items.length;
  let html = `
    <button class="category-tab-btn ${activeSavoryCategory === 'all' ? 'active' : ''}" onclick="setSavoryCategory('all')">
      <span>All Dishes</span>
      <span class="cat-count">${totalCount}</span>
    </button>
  `;

  window.MENU_DATA.categories.forEach(cat => {
    const count = window.MENU_DATA.items.filter(i => i.category === cat.id).length;
    html += `
      <button class="category-tab-btn ${activeSavoryCategory === cat.id ? 'active' : ''}" onclick="setSavoryCategory('${cat.id}')">
        <span>${cat.label}</span>
        <span class="cat-count">${count}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

function setSavoryCategory(catId) {
  activeSavoryCategory = catId;
  renderMenuCategories();
  renderMenuItems();
}

// Render Fast Food Menu Cards
function renderMenuItems() {
  const grid = document.getElementById("savoryMenuGrid");
  if (!grid || !window.MENU_DATA) return;

  let items = window.MENU_DATA.items;
  if (activeSavoryCategory !== "all") {
    items = items.filter(i => i.category === activeSavoryCategory);
  }

  grid.innerHTML = items.map(item => createItemCardHtml(item)).join("");
}

// Render Bakery Category Tabs
function renderBakeryCategories() {
  const container = document.getElementById("bakeryCategoriesContainer");
  if (!container || !window.BAKERY_DATA) return;

  let html = "";
  window.BAKERY_DATA.categories.forEach(cat => {
    const count = cat.id === "all-sweets" 
      ? window.BAKERY_DATA.items.length 
      : window.BAKERY_DATA.items.filter(i => i.category === cat.id).length;

    html += `
      <button class="category-tab-btn ${activeBakeryCategory === cat.id ? 'active' : ''}" onclick="setBakeryCategory('${cat.id}')">
        <span>${cat.label}</span>
        <span class="cat-count">${count}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

function setBakeryCategory(catId) {
  activeBakeryCategory = catId;
  renderBakeryCategories();
  renderBakeryItems();
}

// Render Bakery Items
function renderBakeryItems() {
  const grid = document.getElementById("bakeryMenuGrid");
  if (!grid || !window.BAKERY_DATA) return;

  let items = window.BAKERY_DATA.items;
  if (activeBakeryCategory !== "all-sweets") {
    items = items.filter(i => i.category === activeBakeryCategory);
  }

  grid.innerHTML = items.map(item => createItemCardHtml(item, true)).join("");
}

// Card HTML Generator with Interactive Size Selectors
function createItemCardHtml(item, isBakery = false) {
  const selectedVariantIdx = selectedItemVariants[item.id] || 0;
  let currentPrice = item.price;
  let currentVariantName = "";

  let variantHtml = "";
  if (item.variants && item.variants.length > 0) {
    const currentVar = item.variants[selectedVariantIdx] || item.variants[0];
    currentPrice = currentVar.price;
    currentVariantName = currentVar.name;

    const pills = item.variants.map((v, idx) => `
      <button class="variant-pill-btn ${idx === selectedVariantIdx ? 'active' : ''}" 
              onclick="selectItemVariant('${item.id}', ${idx}, ${isBakery})">
        ${v.name}
      </button>
    `).join("");

    variantHtml = `
      <div class="variant-selector-wrap">
        <span class="variant-label">Choose Size / Portion:</span>
        <div class="variant-pills">${pills}</div>
      </div>
    `;
  }

  const badgeHtml = item.badge ? `<span class="card-badge">${item.badge}</span>` : "";

  return `
    <div class="menu-card" id="card-${item.id}">
      <div class="card-img-wrap">
        ${badgeHtml}
        <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.description || ''}</p>
        ${variantHtml}
        <div class="card-footer">
          <span class="card-price">Rs. ${currentPrice}</span>
          <button class="add-to-cart-btn" onclick="addToCart('${item.id}', ${isBakery})">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Select Item Variant (Size)
function selectItemVariant(itemId, variantIdx, isBakery) {
  selectedItemVariants[itemId] = variantIdx;
  if (isBakery) {
    renderBakeryItems();
  } else {
    renderMenuItems();
  }
}

// Add Item to Cart
function addToCart(itemId, isBakery = false) {
  const catalog = isBakery ? window.BAKERY_DATA.items : window.MENU_DATA.items;
  const item = catalog.find(i => i.id === itemId);
  if (!item) return;

  const selectedVariantIdx = selectedItemVariants[itemId] || 0;
  let price = item.price;
  let variantName = "";

  if (item.variants && item.variants.length > 0) {
    const v = item.variants[selectedVariantIdx] || item.variants[0];
    price = v.price;
    variantName = v.name;
  }

  const cartItemId = variantName ? `${item.id}-${variantName}` : item.id;
  const existing = cart.find(c => c.cartItemId === cartItemId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      cartItemId,
      id: item.id,
      name: item.name,
      variantName,
      price,
      quantity: 1,
      image: item.image
    });
  }

  updateCartUi();
  openCartDrawer();
}

// Update Cart Quantity
function updateQty(cartItemId, delta) {
  const item = cart.find(c => c.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.cartItemId !== cartItemId);
  }

  updateCartUi();
}

// Update Cart UI (Drawer & Embedded Tray)
function updateCartUi() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update Header Badges
  const badges = document.querySelectorAll(".cart-badge");
  badges.forEach(b => b.textContent = totalItems);

  // Update Drawer Items
  const drawerList = document.getElementById("drawerCartList");
  const drawerTotal = document.getElementById("drawerCartTotal");
  if (drawerList && drawerTotal) {
    if (cart.length === 0) {
      drawerList.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Your cart is empty.</p>`;
    } else {
      drawerList.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <span class="cart-item-name">${item.name}</span>
            ${item.variantName ? `<span class="cart-item-var">Size: ${item.variantName}</span>` : ''}
            <span style="font-weight: bold; font-size: 0.85rem; color: var(--primary);">Rs. ${item.price * item.quantity}</span>
          </div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateQty('${item.cartItemId}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQty('${item.cartItemId}', 1)">+</button>
          </div>
        </div>
      `).join("");
    }
    drawerTotal.textContent = `Rs. ${totalPrice}`;
  }

  // Update In-Page Order Tray
  const trayList = document.getElementById("trayCartList");
  const trayTotal = document.getElementById("trayCartTotal");
  if (trayList && trayTotal) {
    if (cart.length === 0) {
      trayList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem 0;">No items selected yet. Click "+ Add" on any menu item above!</p>`;
    } else {
      trayList.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <span class="cart-item-name">${item.name}</span>
            ${item.variantName ? `<span class="cart-item-var">Size: ${item.variantName}</span>` : ''}
            <span style="font-weight: bold; font-size: 0.85rem; color: var(--primary);">Rs. ${item.price * item.quantity}</span>
          </div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateQty('${item.cartItemId}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQty('${item.cartItemId}', 1)">+</button>
          </div>
        </div>
      `).join("");
    }
    trayTotal.textContent = `Rs. ${totalPrice}`;
  }
}

// Slide-Out Drawer Controls
function initCart() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  const closeBtn = document.getElementById("closeCartDrawer");
  const headerCartBtn = document.getElementById("headerCartBtn");

  if (headerCartBtn) {
    headerCartBtn.addEventListener("click", openCartDrawer);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCartDrawer);
  }
  if (overlay) {
    overlay.addEventListener("click", closeCartDrawer);
  }
}

function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay && drawer) {
    overlay.classList.add("open");
    drawer.classList.add("open");
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay && drawer) {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
  }
}

// 1-Click WhatsApp Checkout Order Routing
function submitWhatsAppOrder(source = "tray") {
  if (cart.length === 0) {
    alert("Please add items to your cart before ordering.");
    return;
  }

  const nameInput = document.getElementById(source === "drawer" ? "drawerCustName" : "trayCustName");
  const addressInput = document.getElementById(source === "drawer" ? "drawerCustAddress" : "trayCustAddress");
  const noteInput = document.getElementById(source === "drawer" ? "drawerCustNote" : "trayCustNote");

  const name = nameInput ? nameInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const note = noteInput ? noteInput.value.trim() : "";

  let message = `🛍️ *NEW ORDER - DOUGH DELIGHT CAFÉ*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  
  cart.forEach(item => {
    const varLabel = item.variantName ? ` (${item.variantName})` : '';
    message += `• ${item.quantity}x ${item.name}${varLabel} - Rs. ${item.price * item.quantity}\n`;
  });

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *Total Amount:* Rs. ${totalPrice}\n\n`;

  if (name) message += `👤 *Customer Name:* ${name}\n`;
  if (address) message += `📍 *Delivery Address:* ${address}\n`;
  if (note) message += `📝 *Special Instructions:* ${note}\n`;

  message += `\nThank you for choosing Dough Delight Café!`;

  const phone = (window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || "923040700123";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Render Location & Contact Data
function renderLocationAndContact() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  const locAddress = document.getElementById("locationAddressText");
  if (locAddress) locAddress.textContent = cfg.store.mapAddress;

  const locTimings = document.getElementById("locationTimingsText");
  if (locTimings) locTimings.textContent = cfg.store.timings;

  const locPhone = document.getElementById("locationPhoneText");
  if (locPhone) locPhone.textContent = cfg.contact.phoneDisplay;
}

// Render Footer & Developer Credits
function renderFooter() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  const devLink = document.getElementById("developerCreditLink");
  if (devLink && cfg.developer) {
    devLink.href = `https://wa.me/${cfg.developer.whatsapp}`;
    devLink.textContent = `Made by ${cfg.developer.name}`;
  }
}
