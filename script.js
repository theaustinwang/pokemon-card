// ========== Pokémon Card Data (defaults — overridden by localStorage admin data) ==========
const defaultCardData = [
    { id: 1,  name: "Charizard",      setName: "Base Set",        setCode: "BS",  type: "fire",      rarity: "rare-holo",  price: 299.99, stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/4_hires.png",   description: "The iconic holographic Charizard from the original Base Set." },
    { id: 2,  name: "Blastoise",      setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "rare-holo",  price: 179.99, stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base1/2_hires.png",   description: "Powerful holographic Blastoise card with Hydro Pump." },
    { id: 3,  name: "Venusaur",       setName: "Base Set",        setCode: "BS",  type: "grass",     rarity: "rare-holo",  price: 149.99, stock: 4,  condition: "NM",  image: "https://images.pokemontcg.io/base1/15_hires.png",  description: "Lush Venusaur holographic card with Solar Beam attack." },
    { id: 4,  name: "Pikachu",        setName: "Base Set",        setCode: "BS",  type: "electric",  rarity: "common",     price: 24.99,  stock: 12, condition: "NM",  image: "https://images.pokemontcg.io/base1/58_hires.png",  description: "The beloved electric mouse Pokémon — a must-have for any collection." },
    { id: 5,  name: "Mewtwo",         setName: "Base Set",        setCode: "BS",  type: "psychic",   rarity: "rare-holo",  price: 189.99, stock: 1,  condition: "MP",  image: "https://images.pokemontcg.io/base1/10_hires.png",  description: "Legendary psychic-type Mewtwo holographic card." },
    { id: 6,  name: "Gyarados",       setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "rare-holo",  price: 129.99, stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base1/6_hires.png",   description: "Fearsome Gyarados holographic with devastating attacks." },
    { id: 7,  name: "Raichu",         setName: "Base Set",        setCode: "BS",  type: "electric",  rarity: "rare-holo",  price: 99.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/14_hires.png",  description: "Evolved form of Pikachu — rare holographic edition." },
    { id: 8,  name: "Alakazam",       setName: "Base Set",        setCode: "BS",  type: "psychic",   rarity: "rare-holo",  price: 119.99, stock: 2,  condition: "HP",  image: "https://images.pokemontcg.io/base1/1_hires.png",   description: "Mystic Alakazam with powerful psychic abilities." },
    { id: 9,  name: "Charizard GX",   setName: "Burning Shadows",  setCode: "BUS", type: "fire",      rarity: "ultra-rare", price: 449.99, stock: 1,  condition: "NM",  image: "https://images.pokemontcg.io/sm3/150_hires.png",  description: "Rainbow Rare Charizard GX — one of the most sought-after modern cards." },
    { id: 10, name: "Umbreon VMAX",   setName: "Evolving Skies",  setCode: "EVS", type: "dark",      rarity: "ultra-rare", price: 599.99, stock: 1,  condition: "NM",  image: "https://images.pokemontcg.io/swsh7/215_hires.png", description: "The legendary Moonbreon — alternate art Umbreon VMAX." },
    { id: 11, name: "Mew",            setName: "Fossil",          setCode: "FO",  type: "psychic",   rarity: "rare-holo",  price: 89.99,  stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base3/8_hires.png",   description: "Mysterious Mew from the Fossil expansion set." },
    { id: 12, name: "Dragonite",      setName: "Fossil",          setCode: "FO",  type: "normal",    rarity: "rare-holo",  price: 109.99, stock: 1,  condition: "MP",  image: "https://images.pokemontcg.io/base3/4_hires.png",   description: "Gentle giant Dragonite holographic from Fossil set." },
    { id: 13, name: "Ninetales",      setName: "Base Set",        setCode: "BS",  type: "fire",      rarity: "rare-holo",  price: 69.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/12_hires.png",  description: "Elegant Ninetales holographic with fiery elegance." },
    { id: 14, name: "Zapdos",         setName: "Base Set",        setCode: "BS",  type: "electric",  rarity: "rare-holo",  price: 84.99,  stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base1/16_hires.png",  description: "Legendary bird Zapdos — the electric powerhouse." },
    { id: 15, name: "Articuno",       setName: "Fossil",          setCode: "FO",  type: "water",     rarity: "rare-holo",  price: 79.99,  stock: 2,  condition: "NM",  image: "https://images.pokemontcg.io/base3/2_hires.png",   description: "Legendary bird Articuno with ice-cold attacks." },
    { id: 16, name: "Moltres",        setName: "Fossil",          setCode: "FO",  type: "fire",      rarity: "rare-holo",  price: 74.99,  stock: 3,  condition: "MP",  image: "https://images.pokemontcg.io/base3/12_hires.png",  description: "Legendary bird Moltres ablaze with fire power." },
    { id: 17, name: "Hitmonchan",     setName: "Base Set",        setCode: "BS",  type: "fighting",  rarity: "rare-holo",  price: 59.99,  stock: 4,  condition: "LP",  image: "https://images.pokemontcg.io/base1/7_hires.png",   description: "Fighting-type Hitmonchan with special punch attacks." },
    { id: 18, name: "Machamp",        setName: "Base Set",        setCode: "BS",  type: "fighting",  rarity: "rare-holo",  price: 64.99,  stock: 2,  condition: "HP",  image: "https://images.pokemontcg.io/base1/8_hires.png",   description: "First Edition Machamp holographic card." },
    { id: 19, name: "Poliwrath",      setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "rare-holo",  price: 54.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/13_hires.png",  description: "Water-type Poliwrath holographic with Water Gun." },
    { id: 20, name: "Clefairy",       setName: "Base Set",        setCode: "BS",  type: "normal",    rarity: "rare-holo",  price: 49.99,  stock: 5,  condition: "LP",  image: "https://images.pokemontcg.io/base1/5_hires.png",   description: "Fairy-type Clefairy holographic with Metronome." },
    { id: 21, name: "Vaporeon",       setName: "Jungle",          setCode: "JU",  type: "water",     rarity: "rare-holo",  price: 44.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base2/12_hires.png",  description: "Eeveelution Vaporeon from the Jungle set." },
    { id: 22, name: "Jolteon",        setName: "Jungle",          setCode: "JU",  type: "electric",  rarity: "rare-holo",  price: 44.99,  stock: 2,  condition: "MP",  image: "https://images.pokemontcg.io/base2/4_hires.png",   description: "Speedy Jolteon from the Jungle expansion." },
    { id: 23, name: "Flareon",        setName: "Jungle",          setCode: "JU",  type: "fire",      rarity: "rare-holo",  price: 49.99,  stock: 2,  condition: "DMG", image: "https://images.pokemontcg.io/base2/3_hires.png",   description: "Flame-tailed Flareon from the Jungle set." },
    { id: 24, name: "Squirtle",       setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "common",     price: 12.99,  stock: 10, condition: "NM",  image: "https://images.pokemontcg.io/base1/63_hires.png",  description: "Classic starter Squirtle — perfect for new collectors." },
    { id: 25, name: "Bulbasaur",      setName: "Base Set",        setCode: "BS",  type: "grass",     rarity: "common",     price: 14.99,  stock: 8,  condition: "NM",  image: "https://images.pokemontcg.io/base1/44_hires.png",  description: "Grass starter Bulbasaur with Leech Seed." },
    { id: 26, name: "Charmander",     setName: "Base Set",        setCode: "BS",  type: "fire",      rarity: "common",     price: 16.99,  stock: 6,  condition: "LP",  image: "https://images.pokemontcg.io/base1/46_hires.png",  description: "Fire starter Charmander with Ember attack." },
    { id: 27, name: "Rayquaza VMAX",  setName: "Evolving Skies",  setCode: "EVS", type: "normal",    rarity: "ultra-rare", price: 249.99, stock: 2,  condition: "NM",  image: "https://images.pokemontcg.io/swsh7/218_hires.png", description: "Alternate art Rayquaza VMAX — a true masterpiece." },
    { id: 28, name: "Gardevoir ex",   setName: "Scarlet & Violet", setCode: "SV", type: "psychic",   rarity: "ultra-rare", price: 179.99, stock: 1,  condition: "NM",  image: "https://images.pokemontcg.io/sv1/245_hires.png",  description: "Special illustration rare Gardevoir ex." },
];

// Condition display helpers
const CONDITION_LABELS = {
    'NM':  'Near Mint',
    'LP':  'Lightly Played',
    'MP':  'Moderately Played',
    'HP':  'Heavily Played',
    'DMG': 'Damaged',
};

const CONDITION_COLORS = {
    'NM':  '#22c55e',
    'LP':  '#4ade80',
    'MP':  '#facc15',
    'HP':  '#f97316',
    'DMG': '#ef4444',
};

// Load card data from localStorage (admin overrides), fall back to defaults
function loadCardData() {
    try {
        const saved = localStorage.getItem('pokemart-cards');
        if (saved) {
            const cards = JSON.parse(saved);
            const now = Date.now();
            cards.forEach(c => { if (!c.lastRestocked) c.lastRestocked = now; });
            return cards;
        }
    } catch { /* ignore */ }
    const defaults = JSON.parse(JSON.stringify(defaultCardData));
    const now = Date.now();
    defaults.forEach(c => { c.lastRestocked = now; });
    return defaults;
}

let cardData = loadCardData();

// Save card data to localStorage (called from admin, and reconstructed here for storefront)
function saveCardData() {
    localStorage.setItem('pokemart-cards', JSON.stringify(cardData));
}

// ========== Application State ==========
let cart = loadCart();
let activeFilter = 'all';
let currentSort = 'default';
let searchTerm = '';

// ========== Cart Persistence ==========
function loadCart() {
    try {
        return JSON.parse(localStorage.getItem('pokemart-cart')) || [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem('pokemart-cart', JSON.stringify(cart));
}

// ========== Wishlist ==========
let wishlist = loadWishlist();

function loadWishlist() {
    try {
        return JSON.parse(localStorage.getItem('pokemart-wishlist')) || [];
    } catch {
        return [];
    }
}

function saveWishlist() {
    localStorage.setItem('pokemart-wishlist', JSON.stringify(wishlist));
}

function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('💔 Removed from wishlist');
    } else {
        wishlist.push(id);
        showToast('❤️ Added to wishlist!');
    }
    saveWishlist();
    renderProducts();
}

// ========== Purchase Tracking (for Best Sellers) ==========
let purchaseLog = loadPurchases();

function loadPurchases() {
    try {
        const logs = JSON.parse(localStorage.getItem('pokemart-purchases')) || [];
        // Clean entries older than 30 days
        const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
        return logs.filter(p => p.timestamp > cutoff);
    } catch {
        return [];
    }
}

function savePurchases() {
    localStorage.setItem('pokemart-purchases', JSON.stringify(purchaseLog));
}

function logPurchase(cardId, quantity) {
    purchaseLog.push({ cardId, quantity, timestamp: Date.now() });
    savePurchases();
}

function getBestSellerCounts() {
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const counts = {};
    purchaseLog.forEach(p => {
        if (p.timestamp > cutoff) {
            counts[p.cardId] = (counts[p.cardId] || 0) + p.quantity;
        }
    });
    return counts;
}

// ========== DOM References ==========
const productGrid = document.getElementById('productGrid');
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const checkoutModal = document.getElementById('checkoutModal');
const modalDetails = document.getElementById('modalDetails');
const toast = document.getElementById('toast');
const noResults = document.getElementById('noResults');

// ========== Render Products ==========
function getFilteredCards() {
    let cards = [...cardData];
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        cards = cards.filter(c => 
            c.name.toLowerCase().includes(term) ||
            c.setName.toLowerCase().includes(term) ||
            c.type.includes(term)
        );
    }
    
    if (activeFilter !== 'all') {
        if (activeFilter === 'rare') {
            cards = cards.filter(c => c.rarity === 'ultra-rare');
        } else if (activeFilter === 'holo') {
            cards = cards.filter(c => c.rarity === 'rare-holo');
        } else if (activeFilter === 'new') {
            const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
            cards = cards.filter(c => (c.lastRestocked || 0) > oneWeekAgo);
        } else if (activeFilter === 'bestseller') {
            const counts = getBestSellerCounts();
            cards = cards.filter(c => (counts[c.id] || 0) > 0);
            // Rank by purchase count (descending) — return early to skip general sort
            cards.sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));
            return cards;
        } else {
            cards = cards.filter(c => c.type === activeFilter);
        }
    }
    
    switch (currentSort) {
        case 'price-asc':
            cards.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            cards.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            cards.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            cards.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    
    return cards;
}

function renderProducts() {
    const cards = getFilteredCards();
    
    if (cards.length === 0) {
        productGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const bestSellerCounts = getBestSellerCounts();
    
    productGrid.innerHTML = cards.map((card, index) => {
        const typeBadgeClass = `badge-${card.type}`;
        const starCount = card.rarity === 'ultra-rare' ? '⭐⭐⭐' : card.rarity === 'rare-holo' ? '⭐⭐' : '⭐';
        const condition = card.condition || 'NM';
        const condColor = CONDITION_COLORS[condition] || '#22c55e';
        const condLabel = CONDITION_LABELS[condition] || 'Near Mint';
        const stock = card.stock ?? 0;
        const outOfStock = stock <= 0;
        const isWishlisted = wishlist.includes(card.id);
        const isNewArrival = (card.lastRestocked || 0) > oneWeekAgo;
        const isBestSeller = stock > 0 && (bestSellerCounts[card.id] || 0) > 0;
        const rankNum = activeFilter === 'bestseller' ? index + 1 : 0;
        const rankMedal = rankNum === 1 ? '🥇' : rankNum === 2 ? '🥈' : rankNum === 3 ? '🥉' : '';
        
        return `
            <div class="product-card ${outOfStock ? 'out-of-stock' : ''}" data-id="${card.id}">
                <div class="card-image-wrapper">
                    <span class="card-type-badge ${typeBadgeClass}">${card.type}</span>
                    <span class="rarity-badge">${starCount}</span>
                    <span class="condition-badge" style="background:${condColor}">${condition}</span>
                    ${rankNum > 0 ? `<span class="rank-badge ${rankNum <= 3 ? 'rank-podium' : ''}">${rankMedal ? rankMedal + ' #' + rankNum : '#' + rankNum}</span>` : ''}
                    ${isNewArrival ? '<span class="new-badge">NEW</span>' : ''}
                    ${isBestSeller ? '<span class="best-seller-badge">🔥 Best Seller</span>' : ''}
                    <img src="${card.image}" 
                         alt="${card.name}" 
                         loading="lazy"
                         onerror="this.src='data:image/svg+xml,${generatePlaceholder(card.id)}'">
                    ${outOfStock ? '<div class="out-of-stock-overlay"><span>Sold Out</span></div>' : ''}
                    <button class="like-btn ${isWishlisted ? 'liked' : ''}" onclick="toggleWishlist(${card.id}); event.stopPropagation();" title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">${isWishlisted ? '❤️' : '🤍'}</button>
                </div>
                <div class="card-info">
                    <h3>${card.name}</h3>
                    <p class="card-set">${card.setName} (${card.setCode})</p>
                    <p class="card-condition">
                        <span class="cond-dot" style="background:${condColor}"></span>
                        ${condLabel}
                        ${stock > 0 ? `<span class="card-stock">${stock} in stock</span>` : ''}
                    </p>
                    <div class="card-bottom">
                        <span class="card-price">$${card.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${card.id}); event.stopPropagation();" ${outOfStock ? 'disabled' : ''}>
                            <span>🛒</span> ${outOfStock ? 'Sold Out' : 'Add'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function generatePlaceholder(id) {
    const colors = ['FF6B35', '7C5CFC', '06B6D4', '22C55E', 'EF4444', 'FACC15', 'EC4899'];
    const color = colors[id % colors.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="280" viewBox="0 0 200 280">
        <rect width="200" height="280" rx="12" fill="#1a1a35"/>
        <circle cx="100" cy="100" r="60" fill="#${color}" opacity="0.3"/>
        <circle cx="100" cy="100" r="40" fill="#${color}" opacity="0.2"/>
        <text x="100" y="220" text-anchor="middle" fill="#8888aa" font-family="Arial" font-size="14">Pokémon TCG</text>
    </svg>`;
    return encodeURIComponent(svg);
}

// ========== Cart Logic ==========
function addToCart(id) {
    const card = cardData.find(c => c.id === id);
    if (!card || (card.stock ?? 0) <= 0) {
        showToast('❌ Sorry, this card is out of stock!');
        return;
    }
    
    const existing = cart.find(item => item.id === id);
    const currentInCart = existing ? existing.quantity : 0;
    
    if (currentInCart >= card.stock) {
        showToast('❌ Cannot add more — stock limit reached!');
        return;
    }
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...card, quantity: 1 });
    }
    
    saveCart();
    saveCardData();
    updateCartUI();
    renderProducts();
    showToast(`${card.name} added to cart!`);
    
    // Animate button
    const btn = document.querySelector(`.product-card[data-id="${id}"] .add-to-cart-btn`);
    if (btn) {
        btn.classList.add('added');
        btn.innerHTML = '<span>✅</span> Added';
        setTimeout(() => {
            btn.classList.remove('added');
            if ((card.stock ?? 0) <= 0) {
                btn.innerHTML = '<span>🛒</span> Sold Out';
                btn.disabled = true;
            } else {
                btn.innerHTML = '<span>🛒</span> Add';
            }
        }, 1500);
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }
    saveCart();
    updateCartUI();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.classList.add('bump');
        setTimeout(() => cartCount.classList.remove('bump'), 400);
    }
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" 
                     onerror="this.src='data:image/svg+xml,${generatePlaceholder(item.id)}'">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="set">${item.setName}</p>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
        
        cartFooter.style.display = 'flex';
        cartTotal.textContent = `$${getCartTotal().toFixed(2)}`;
    }
}

// ========== Checkout ==========
function checkout() {
    if (cart.length === 0) return;
    
    // Decrement stock
    cart.forEach(item => {
        const card = cardData.find(c => c.id === item.id);
        if (card && card.stock !== undefined) {
            card.stock = Math.max(0, card.stock - item.quantity);
        }
    });
    saveCardData();
    
    // Log purchases for best-seller tracking
    cart.forEach(item => {
        logPurchase(item.id, item.quantity);
    });
    
    closeCart();
    
    modalDetails.innerHTML = cart.map(item => `
        <div class="order-card">
            <span>${item.quantity}× ${item.name}</span>
            <span style="margin-left:auto;font-weight:600;">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('') + `
        <div class="cart-total" style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border);">
            <span>Total Paid</span>
            <span>$${getCartTotal().toFixed(2)}</span>
        </div>
    `;
    
    checkoutModal.classList.add('open');
    clearCart();
    renderProducts();
}

function closeCheckout() {
    checkoutModal.classList.remove('open');
}

// ========== Cart Sidebar ==========
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.classList.add('cart-open');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.classList.remove('cart-open');
}

// ========== Toast ==========
let toastTimeout;
function showToast(message) {
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ========== Newsletter ==========
function subscribe(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input.value) {
        showToast('🎉 Subscribed! Welcome to the community!');
        input.value = '';
    }
}

// ========== Reset ==========
function resetFilters() {
    activeFilter = 'all';
    searchTerm = '';
    currentSort = 'default';
    searchInput.value = '';
    sortSelect.value = 'default';
    updateNavActive('all');
    updateFilterChips();
    updateSectionHeader();
    renderProducts();
}

// ========== Smooth Scroll ==========
function smoothScroll(target) {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ========== Nav Filter ==========
function setNavFilter(filter) {
    activeFilter = filter;
    searchTerm = '';
    currentSort = 'default';
    searchInput.value = '';
    sortSelect.value = 'default';
    updateNavActive(filter);
    updateFilterChips();
    updateSectionHeader();
    renderProducts();
    smoothScroll('#products');
    mobileMenu.classList.remove('open');
}

function updateNavActive(filter) {
    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => link.classList.remove('active'));
    const navMap = { all: 'navShop,mobShop', new: 'navNew,mobNew', bestseller: 'navBest,mobBest' };
    const ids = (navMap[filter] || 'navShop,mobShop').split(',');
    ids.forEach(id => { const el = document.getElementById(id); if (el) el.classList.add('active'); });
}

function updateSectionHeader() {
    const title = document.querySelector('.section-header h2');
    const subtitle = document.querySelector('.section-header p');
    if (!title || !subtitle) return;
    if (activeFilter === 'new') {
        title.innerHTML = '✨ <span class="gradient-text">New Arrivals</span>';
        subtitle.textContent = 'Freshly stocked cards — added within the last 7 days';
    } else if (activeFilter === 'bestseller') {
        title.innerHTML = '🏆 <span class="gradient-text">Best Sellers</span>';
        subtitle.textContent = 'Ranked by number of sales in the last 30 days';
    } else {
        title.innerHTML = 'Our <span class="gradient-text">Collection</span>';
        subtitle.textContent = 'Each card is authenticated and graded for quality';
    }
}

// ========== Coming Soon ==========
function showComingSoon() {
    showToast('🚧 Coming soon — stay tuned!');
}

// ========== Filter Chips ==========
function updateFilterChips() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.filter === activeFilter);
    });
}

// ========== Event Listeners ==========
cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderProducts();
});

sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
});

document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        activeFilter = chip.dataset.filter;
        updateNavActive('all');
        updateFilterChips();
        updateSectionHeader();
        renderProducts();
    });
});

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Close mobile menu on scroll
window.addEventListener('scroll', () => {
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    }
});

// Smooth scroll for footer links (nav uses onclick handlers now)
document.querySelectorAll('.footer a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            smoothScroll(href);
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        closeCheckout();
        mobileMenu.classList.remove('open');
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Close checkout modal on overlay click
checkoutModal.addEventListener('click', function(e) {
    if (e.target === this) closeCheckout();
});

// ========== Initialize ==========
renderProducts();
updateCartUI();

console.log('⚡ PokéMart ready! Browse our collection of premium Pokémon cards.');
console.log('💡 Tip: Press Ctrl+K to search, Esc to close panels.');
