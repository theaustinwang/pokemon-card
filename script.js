// ========== Pokémon Card Data (defaults — overridden by localStorage admin data) ==========
// Each card can have multiple condition stocks: stocks = { NM: 2, LP: 1, ... }
const defaultCardData = [
    // --- Ultra Rares (Special Illustration Rares & Gold Cards) ---
    { id: 1,  name: "Eevee ex",          setName: "Prismatic Evolutions", setCode: "PRE", type: "normal",    rarity: "ultra-rare", price: 249.99, stocks: { NM: 1 },  image: "https://images.pokemontcg.io/sv8pt5/167_hires.png", description: "Special Illustration Rare — the star of Prismatic Evolutions!" },
    { id: 2,  name: "Umbreon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "dark",      rarity: "ultra-rare", price: 1299.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/161_hires.png", description: "The ultimate chase card — Moonbreon returns in stunning SIR art." },
    { id: 3,  name: "Espeon ex",         setName: "Prismatic Evolutions", setCode: "PRE", type: "psychic",   rarity: "ultra-rare", price: 399.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/155_hires.png", description: "Special Illustration Rare — radiant Espeon bathed in sunlight." },
    { id: 4,  name: "Sylveon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "fairy",     rarity: "ultra-rare", price: 499.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/156_hires.png", description: "Special Illustration Rare — enchanting Sylveon in a floral paradise." },
    { id: 5,  name: "Leafeon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "grass",     rarity: "ultra-rare", price: 349.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/144_hires.png", description: "Special Illustration Rare — Leafeon basking in a sunlit meadow." },
    { id: 6,  name: "Glaceon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "ice",       rarity: "ultra-rare", price: 329.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/150_hires.png", description: "Special Illustration Rare — Glaceon shimmering in icy wonderland." },
    { id: 7,  name: "Vaporeon ex",       setName: "Prismatic Evolutions", setCode: "PRE", type: "water",     rarity: "ultra-rare", price: 379.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/149_hires.png", description: "Special Illustration Rare — Vaporeon swimming through crystal waters." },
    { id: 8,  name: "Jolteon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "electric",  rarity: "ultra-rare", price: 289.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/153_hires.png", description: "Special Illustration Rare — Jolteon crackling with electric energy." },
    { id: 9,  name: "Flareon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "fire",      rarity: "ultra-rare", price: 299.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/146_hires.png", description: "Special Illustration Rare — Flareon blazing through volcanic terrain." },
    { id: 10, name: "Raging Bolt ex",    setName: "Prismatic Evolutions", setCode: "PRE", type: "dragon",    rarity: "ultra-rare", price: 179.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/166_hires.png", description: "Special Illustration Rare — Raging Bolt crackling with ancient fury." },

    // --- Hyper Rares (Gold Cards) ---
    { id: 11, name: "Pikachu ex",         setName: "Prismatic Evolutions", setCode: "PRE", type: "electric",  rarity: "hyper-rare",  price: 349.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/179_hires.png", description: "Hyper Rare Gold — Pikachu ex gleaming in solid gold!" },
    { id: 12, name: "Iron Leaves ex",     setName: "Prismatic Evolutions", setCode: "PRE", type: "grass",     rarity: "hyper-rare",  price: 179.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/176_hires.png", description: "Hyper Rare Gold — Iron Leaves ex radiating verdant brilliance." },
    { id: 13, name: "Walking Wake ex",    setName: "Prismatic Evolutions", setCode: "PRE", type: "water",     rarity: "hyper-rare",  price: 199.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/178_hires.png", description: "Hyper Rare Gold — Walking Wake ex surging with ancient power." },
    { id: 14, name: "Teal Mask Ogerpon ex", setName: "Prismatic Evolutions", setCode: "PRE", type: "grass",  rarity: "hyper-rare",  price: 149.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/177_hires.png", description: "Hyper Rare Gold — Teal Mask Ogerpon ex cloaked in golden leaves." },
    { id: 15, name: "Terapagos ex",       setName: "Prismatic Evolutions", setCode: "PRE", type: "normal",    rarity: "hyper-rare",  price: 229.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/180_hires.png", description: "Hyper Rare Gold — Terapagos ex shining with stellar golden light." },

    { id: 29, name: "Iron Valiant ex",   setName: "Prismatic Evolutions", setCode: "PRE", type: "psychic",   rarity: "ultra-rare", price: 179.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sv8pt5/157_hires.png", description: "Special Illustration Rare — Iron Valiant, the futuristic warrior." },
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

const CONDITION_ORDER = ['NM', 'LP', 'MP', 'HP', 'DMG'];

// ========== Condition Price Multipliers ==========
const DEFAULT_CONDITION_MULTIPLIERS = {
    'NM':  1.00,
    'LP':  0.90,
    'MP':  0.75,
    'HP':  0.55,
    'DMG': 0.35,
};

function loadConditionMultipliers() {
    try {
        const saved = localStorage.getItem('pokemart-condition-multipliers');
        if (saved) return { ...DEFAULT_CONDITION_MULTIPLIERS, ...JSON.parse(saved) };
    } catch { /* ignore */ }
    return { ...DEFAULT_CONDITION_MULTIPLIERS };
}

let conditionMultipliers = loadConditionMultipliers();

// Get price for a specific condition
function getConditionPrice(card, condition) {
    const multiplier = conditionMultipliers[condition] || 1.0;
    return card.price * multiplier;
}

// Get total stock across all conditions for a card
function getTotalStock(card) {
    if (!card.stocks || typeof card.stocks !== 'object') return 0;
    return Object.values(card.stocks).reduce((s, v) => s + (v || 0), 0);
}

// Get the best (lowest index) condition that has stock
function getBestCondition(card) {
    if (!card.stocks) return null;
    for (const cond of CONDITION_ORDER) {
        if (card.stocks[cond] && card.stocks[cond] > 0) return cond;
    }
    return null;
}

// Build a stock summary string like "NM:1 LP:2"
function getStockSummary(card) {
    if (!card.stocks || typeof card.stocks !== 'object') return '0 in stock';
    const parts = [];
    for (const cond of CONDITION_ORDER) {
        if (card.stocks[cond] && card.stocks[cond] > 0) {
            parts.push(`${cond}:${card.stocks[cond]}`);
        }
    }
    if (parts.length === 0) return '0 in stock';
    return parts.join(' ');
}

// Migrate old card data (stock + condition) to new format (stocks)
function migrateCardData(card) {
    if (card.stocks && typeof card.stocks === 'object') return; // already migrated
    const oldStock = card.stock ?? 0;
    const oldCondition = card.condition || 'NM';
    card.stocks = {};
    if (oldStock > 0) {
        card.stocks[oldCondition] = oldStock;
    }
    delete card.stock;
    delete card.condition;
}

// ========== Mystery Products ==========
const defaultMysteryData = [
    {
        id: 'mystery-pack',
        name: 'Mystery Pack',
        setName: '??? Surprise ???',
        setCode: 'MYST',
        type: 'mystery',
        rarity: 'mystery',
        price: 24.99,
        stock: 10,
        condition: 'NM',
        image: '',
        description: '1 sealed booster pack — what treasures await inside?',
        isMystery: true,
        mysteryType: 'pack',
        cardCount: 1,
    },
    {
        id: 'mystery-slab',
        name: 'Mystery PSA Slab',
        setName: '??? Graded ???',
        setCode: 'SLAB',
        type: 'mystery',
        rarity: 'ultra-rare',
        price: 99.99,
        stock: 5,
        condition: 'NM',
        image: '',
        description: '1 PSA-graded card — guaranteed rare holo or better!',
        isMystery: true,
        mysteryType: 'slab',
        cardCount: 1,
    },
];

function loadMysteryStock() {
    try {
        const saved = localStorage.getItem('pokemart-mystery-stock');
        if (saved) {
            const stocks = JSON.parse(saved);
            defaultMysteryData.forEach(m => {
                if (stocks[m.id] !== undefined) m.stock = stocks[m.id];
            });
        }
        const savedPrices = localStorage.getItem('pokemart-mystery-prices');
        if (savedPrices) {
            const prices = JSON.parse(savedPrices);
            defaultMysteryData.forEach(m => {
                if (prices[m.id] !== undefined) m.price = prices[m.id];
            });
        }
    } catch { /* ignore */ }
}

function saveMysteryStock() {
    const stocks = {};
    defaultMysteryData.forEach(m => { stocks[m.id] = m.stock; });
    localStorage.setItem('pokemart-mystery-stock', JSON.stringify(stocks));
    const prices = {};
    defaultMysteryData.forEach(m => { prices[m.id] = m.price; });
    localStorage.setItem('pokemart-mystery-prices', JSON.stringify(prices));
}

loadMysteryStock();

function drawMysteryCards(mysteryType) {
    if (mysteryType !== 'slab') return []; // Pack is a normal product, no random cards
    
    const available = cardData.filter(c => (c.stock || 0) > 0);
    if (available.length === 0) return [];
    
    // Slab: 1 PSA-graded card, guaranteed rare holo or better
    const rares = available.filter(c => c.rarity === 'rare-holo' || c.rarity === 'ultra-rare');
    const pool = rares.length > 0 ? rares : available;
    const idx = Math.floor(Math.random() * pool.length);
    const card = JSON.parse(JSON.stringify(pool[idx]));
    card.psaGrade = Math.floor(Math.random() * 4) + 7;
    return [card];
}

// Load card data from localStorage (admin overrides), fall back to defaults
function loadCardData() {
    try {
        const saved = localStorage.getItem('pokemart-cards');
        if (saved) {
            const cards = JSON.parse(saved);
            const now = Date.now();
            cards.forEach(c => { 
                if (!c.lastRestocked) c.lastRestocked = now;
                migrateCardData(c);
            });
            // Save migrated data back
            localStorage.setItem('pokemart-cards', JSON.stringify(cards));
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
let currency = loadCurrency();
let exchangeRate = loadExchangeRate();

function loadCurrency() {
    try {
        return localStorage.getItem('pokemart-currency') || 'USD';
    } catch { return 'USD'; }
}

function saveCurrency() {
    localStorage.setItem('pokemart-currency', currency);
}

function loadExchangeRate() {
    try {
        return parseFloat(localStorage.getItem('pokemart-exchange-rate')) || 0.79;
    } catch { return 0.79; }
}

function formatPrice(price) {
    if (currency === 'GBP') {
        return '£' + (price * exchangeRate).toFixed(2);
    }
    return '$' + price.toFixed(2);
}

function getCurrencySymbol() {
    return currency === 'GBP' ? '£' : '$';
}

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
    renderWishlist();
}

function renderWishlist() {
    const wishlistBtnCount = document.getElementById('wishlistBtnCount');
    const wishlistDropdownItems = document.getElementById('wishlistDropdownItems');

    if (!wishlistBtnCount || !wishlistDropdownItems) return;

    // Update badge count
    if (wishlist.length > 0) {
        wishlistBtnCount.style.display = 'flex';
        wishlistBtnCount.textContent = wishlist.length;
    } else {
        wishlistBtnCount.style.display = 'none';
    }

    const wishlistedCards = cardData.filter(c => wishlist.includes(c.id));

    if (wishlistedCards.length === 0) {
        wishlistDropdownItems.innerHTML = '<p class="wishlist-dropdown-empty">No wishlisted cards yet</p>';
        return;
    }

    wishlistDropdownItems.innerHTML = wishlistedCards.map(card => {
        const totalStock = getTotalStock(card);
        const outOfStock = totalStock <= 0;
        const stockSummary = getStockSummary(card);
        const bestCond = getBestCondition(card);
        const bestPrice = bestCond ? getConditionPrice(card, bestCond) : card.price;

        return `
        <div class="wishlist-dropdown-item">
            <img class="wishlist-dropdown-item-img" src="${card.image}" alt="${card.name}" loading="lazy"
                 onerror="this.src='data:image/svg+xml,${generatePlaceholder(card.id)}'">
            <div class="wishlist-dropdown-item-info">
                <h5>${card.name}</h5>
                <p class="set">${card.setName}</p>
                <p class="wishlist-stock-summary">${stockSummary}</p>
                <span class="price">${formatPrice(bestPrice)}</span>
            </div>
            <button class="wishlist-dropdown-remove" onclick="toggleWishlist(${card.id}); event.stopPropagation();" title="Remove">✕</button>
            <button class="wishlist-dropdown-add" onclick="addToCart(${card.id}); event.stopPropagation();" ${outOfStock ? 'disabled' : ''} title="${outOfStock ? 'Sold Out' : 'Add to cart'}">🛒</button>
        </div>`;
    }).join('');
}

// Toggle wishlist dropdown
function toggleWishlistDropdown(e) {
    e.stopPropagation();
    const wrapper = document.getElementById('wishlistDropdownWrapper');
    if (!wrapper) return;
    wrapper.classList.toggle('open');
}

// Close wishlist dropdown when clicking outside
document.addEventListener('click', (e) => {
    const wrapper = document.getElementById('wishlistDropdownWrapper');
    if (!wrapper) return;
    if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
    }
});

// Close wishlist dropdown on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const wrapper = document.getElementById('wishlistDropdownWrapper');
        if (wrapper) wrapper.classList.remove('open');
    }
});

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
    
    // Mystery products — always shown at top when no filter/search active
    let mysteryHTML = '';
    if (activeFilter === 'all' && !searchTerm) {
        mysteryHTML = defaultMysteryData.map(m => {
            const isSlab = m.mysteryType === 'slab';
            const isPack = !isSlab;
            const stock = m.stock ?? 0;
            const outOfStock = stock <= 0;
            return `
            <div class="product-card mystery-card ${isSlab ? 'slab-card' : 'pack-card'} ${outOfStock ? 'out-of-stock' : ''}" data-id="${m.id}">
                <div class="card-image-wrapper mystery-img-wrap ${isPack ? 'pack-img-wrap' : ''}">
                    ${isPack ? '<div class="pack-crimp top-crimp"></div><div class="pack-crimp bottom-crimp"></div>' : ''}
                    ${isPack ? '<div class="pack-foil"></div>' : '<div class="mystery-glow"></div>'}
                    ${isPack ? '<div class="pack-tear-strip"></div>' : ''}
                    <div class="mystery-question">?</div>
                    ${isPack 
                        ? '<div class="pack-card-count">1 PACK</div>' 
                        : `<span class="mystery-tag">PSA SLAB</span>`}
                    ${isSlab ? '<span class="psa-tag">PSA 7–10</span>' : ''}
                    ${outOfStock ? '<div class="out-of-stock-overlay"><span>Sold Out</span></div>' : ''}
                </div>
                <div class="card-info">
                    <h3>${m.name}</h3>
                    <p class="card-set">${isSlab ? '1 Graded Card' : '1 Booster Pack'}</p>
                    <p class="card-condition" style="font-size:0.75rem;color:var(--text-muted);line-height:1.4;">
                        <span class="card-stock" style="margin-left:0;">${stock} in stock</span>
                        <br>${m.description}
                    </p>
                    <div class="card-bottom">
                        <span class="card-price">${formatPrice(m.price)}</span>
                        <button class="add-to-cart-btn ${isPack ? 'pack-add-btn' : 'mystery-add-btn slab-add-btn'}" onclick="addToCart('${m.id}'); event.stopPropagation();" ${outOfStock ? 'disabled' : ''}>
                            <span>🎲</span> ${outOfStock ? 'Sold Out' : 'Add'}
                        </button>
                    </div>
                </div>
            </div>`;
        }).join('');
    }
    
    if (cards.length === 0 && !mysteryHTML) {
        productGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const bestSellerCounts = getBestSellerCounts();
    
    productGrid.innerHTML = mysteryHTML + cards.map((card, index) => {
        const typeBadgeClass = `badge-${card.type}`;
        const starCount = card.rarity === 'hyper-rare' ? '👑⭐⭐⭐' : card.rarity === 'ultra-rare' ? '⭐⭐⭐' : card.rarity === 'rare-holo' ? '⭐⭐' : '⭐';
        const totalStock = getTotalStock(card);
        const bestCondition = getBestCondition(card);
        const condColor = CONDITION_COLORS[bestCondition] || '#22c55e';
        const condLabel = CONDITION_LABELS[bestCondition] || 'Near Mint';
        const stockSummary = getStockSummary(card);
        const outOfStock = totalStock <= 0;
        const isWishlisted = wishlist.includes(card.id);
        const isNewArrival = (card.lastRestocked || 0) > oneWeekAgo;
        const isBestSeller = totalStock > 0 && (bestSellerCounts[card.id] || 0) > 0;
        const rankNum = activeFilter === 'bestseller' ? index + 1 : 0;
        const rankMedal = rankNum === 1 ? '🥇' : rankNum === 2 ? '🥈' : rankNum === 3 ? '🥉' : '';
        
        // Build condition rows with prices
        const conditionRows = card.stocks ? CONDITION_ORDER.filter(c => card.stocks[c] && card.stocks[c] > 0).map(c => {
            const condPrice = getConditionPrice(card, c);
            return `<div class="cond-row" onclick="addToCart(${card.id}, '${c}'); event.stopPropagation();" title="Add ${CONDITION_LABELS[c]} to cart">
                <span class="cond-dot" style="background:${CONDITION_COLORS[c]}"></span>
                <span class="cond-label">${c}</span>
                <span class="cond-price">${formatPrice(condPrice)}</span>
                <span class="cond-stock-badge">×${card.stocks[c]}</span>
            </div>`;
        }).join('') : '';
        
        const basePrice = getConditionPrice(card, bestCondition || 'NM');
        
        return `
            <div class="product-card ${outOfStock ? 'out-of-stock' : ''}" data-id="${card.id}">
                <div class="card-image-wrapper">
                    <span class="card-type-badge ${typeBadgeClass}">${card.type}</span>
                    <span class="rarity-badge">${starCount}</span>
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
                    <p class="card-condition-title">Condition & Price:</p>
                    <div class="cond-rows">
                        ${conditionRows}
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
function addToCart(id, condition) {
    // Handle mystery products
    if (typeof id === 'string' && id.startsWith('mystery-')) {
        const mystery = defaultMysteryData.find(m => m.id === id);
        if (!mystery) return;
        if ((mystery.stock ?? 0) <= 0) {
            showToast('❌ Sorry, this item is out of stock!');
            return;
        }
        const existing = cart.find(item => item.id === id);
        const currentInCart = existing ? existing.quantity : 0;
        if (currentInCart >= mystery.stock) {
            showToast('❌ Cannot add more — stock limit reached!');
            return;
        }
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...mystery, quantity: 1 });
        }
        saveCart();
        updateCartUI();
        showToast(`${mystery.name} added to cart!`);
        animateAddBtn(id, true, mystery);
        return;
    }
    
    const card = cardData.find(c => c.id === id);
    if (!card) {
        showToast('❌ Card not found!');
        return;
    }
    
    const totalStock = getTotalStock(card);
    if (totalStock <= 0) {
        showToast('❌ Sorry, this card is out of stock!');
        return;
    }
    
    // Determine which condition to add
    let chosenCondition = condition;
    if (!chosenCondition) {
        // Default: use the best available condition
        chosenCondition = getBestCondition(card);
    }
    
    if (!chosenCondition || !card.stocks[chosenCondition] || card.stocks[chosenCondition] <= 0) {
        showToast('❌ That condition is out of stock!');
        return;
    }
    
    // Check if we already have this card+condition combo in cart
    const cartKey = `${id}_${chosenCondition}`;
    const existing = cart.find(item => item.cartKey === cartKey);
    const currentInCart = existing ? existing.quantity : 0;
    
    if (currentInCart >= card.stocks[chosenCondition]) {
        showToast('❌ Cannot add more — stock limit reached!');
        return;
    }
    
    if (existing) {
        existing.quantity++;
    } else {
        const condPrice = getConditionPrice(card, chosenCondition);
        cart.push({ ...card, quantity: 1, cartKey, condition: chosenCondition, price: condPrice });
    }
    
    saveCart();
    saveCardData();
    updateCartUI();
    renderProducts();
    showToast(`${card.name} (${CONDITION_LABELS[chosenCondition]}) added to cart!`);
    
    // Animate button
    animateAddBtn(id, false, card, chosenCondition);
}

function animateAddBtn(id, isMystery, card, condition) {
    // For mystery products, flash the add button
    if (isMystery) {
        const btn = document.querySelector(`.product-card[data-id="${id}"] .add-to-cart-btn`);
        if (!btn) return;
        btn.classList.add('added');
        btn.innerHTML = '<span>🎲</span> Added';
        setTimeout(() => {
            btn.classList.remove('added');
            const total = card.stock ?? 0;
            if (total <= 0) {
                btn.innerHTML = '<span>🎲</span> Sold Out';
                btn.disabled = true;
            } else {
                btn.innerHTML = '<span>🎲</span> Add';
            }
        }, 1500);
        return;
    }
    
    // For regular cards, flash the condition row that was clicked
    if (condition) {
        const rows = document.querySelectorAll(`.product-card[data-id="${id}"] .cond-row`);
        rows.forEach(row => {
            if (row.querySelector('.cond-label').textContent === condition) {
                row.classList.add('cond-row-added');
                setTimeout(() => row.classList.remove('cond-row-added'), 1200);
            }
        });
    }
}

function removeFromCart(cartKey) {
    cart = cart.filter(item => (item.cartKey || item.id) !== cartKey);
    saveCart();
    updateCartUI();
}

function updateQuantity(cartKey, delta) {
    const item = cart.find(item => (item.cartKey || item.id) === cartKey);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(cartKey);
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

function setCurrency(newCurrency) {
    currency = newCurrency;
    saveCurrency();
    // Reload exchange rate from admin in case it changed
    exchangeRate = loadExchangeRate();
    updateCartUI();
    renderProducts();
    renderWishlist();
    showToast(`Currency set to ${currency === 'GBP' ? '£ Pounds' : '$ Dollars'}`);
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
    
    // Sync currency selector
    const cartCurrency = document.getElementById('cartCurrency');
    if (cartCurrency) cartCurrency.value = currency;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => {
            const isMystery = item.isMystery;
            const isSlab = item.mysteryType === 'slab';
            const idRef = isMystery ? `'${item.id}'` : item.cartKey || item.id;
            const cartIconClass = isMystery ? (isSlab ? 'mystery-cart-icon slab-cart-icon' : 'mystery-cart-icon pack-cart-icon') : '';
            const imgHTML = isMystery
                ? `<div class="cart-item-image ${cartIconClass}"><span>?</span></div>`
                : `<img src="${item.image}" alt="${item.name}" class="cart-item-image"
                     onerror="this.src='data:image/svg+xml,${generatePlaceholder(item.id)}'">`;
            const condDisplay = !isMystery && item.condition 
                ? `<span class="cart-item-cond" style="color:${CONDITION_COLORS[item.condition] || '#22c55e'}">${CONDITION_LABELS[item.condition] || item.condition}</span>`
                : '';
            return `
            <div class="cart-item">
                ${imgHTML}
                <div class="cart-item-info">
                    <h4>${item.name} ${condDisplay}</h4>
                    <p class="set">${isMystery ? (item.mysteryType === 'slab' ? '1 Graded Card' : '1 Booster Pack') : item.setName}</p>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button onclick="updateQuantity('${item.cartKey || item.id}', -1)">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.cartKey || item.id}', 1)">+</button>
                        </div>
                        <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.cartKey || item.id}')">Remove</button>
            </div>`;
        }).join('');
        
        cartFooter.style.display = 'flex';
        cartTotal.textContent = formatPrice(getCartTotal());
    }
}

// ========== Checkout ==========
function checkout() {
    if (cart.length === 0) return;
    
    const mysteryResults = [];
    const normalItems = [];
    
    cart.forEach(item => {
        if (item.isMystery) {
            // Decrement mystery product stock
            const mystery = defaultMysteryData.find(m => m.id === item.id);
            if (mystery && mystery.stock !== undefined) mystery.stock = Math.max(0, mystery.stock - item.quantity);
            saveMysteryStock();
            
            // Only the slab draws random cards; the pack is just a normal product
            if (item.mysteryType === 'slab') {
                for (let q = 0; q < item.quantity; q++) {
                    const drawn = drawMysteryCards(item.mysteryType);
                    mysteryResults.push({ mysteryName: item.name, cards: drawn });
                    drawn.forEach(dc => {
                        const card = cardData.find(c => c.id === dc.id);
                        if (card && card.stocks) {
                            const bestCond = getBestCondition(card);
                            if (bestCond && card.stocks[bestCond] !== undefined) {
                                card.stocks[bestCond] = Math.max(0, (card.stocks[bestCond] || 0) - 1);
                            }
                        }
                    });
                    drawn.forEach(dc => logPurchase(dc.id, 1));
                }
            } else {
                // Pack: just log as normal item
                normalItems.push(item);
            }
        } else {
            const card = cardData.find(c => c.id === item.id);
            if (card && card.stocks) {
                const cond = item.condition || getBestCondition(card);
                if (cond && card.stocks[cond] !== undefined) {
                    card.stocks[cond] = Math.max(0, (card.stocks[cond] || 0) - item.quantity);
                }
            }
            for (let q = 0; q < item.quantity; q++) logPurchase(item.id, 1);
            normalItems.push(item);
        }
    });
    
    saveCardData();
    closeCart();
    
    // Build modal content
    let detailsHTML = '';
    
    if (mysteryResults.length > 0) {
        detailsHTML += '<div class="mystery-reveal-section">';
        detailsHTML += '<h3 style="font-size:1.1rem;margin-bottom:16px;">🎉 Your Pulls</h3>';
        mysteryResults.forEach((result, ri) => {
            detailsHTML += `<div class="reveal-group"><h4 style="font-size:0.85rem;color:var(--text-muted);margin-bottom:10px;">🎁 ${result.mysteryName}</h4><div class="reveal-cards">`;
            result.cards.forEach(card => {
                const psa = card.psaGrade ? `<span class="psa-grade-tag">PSA ${card.psaGrade}</span>` : '';
                detailsHTML += `
                    <div class="reveal-card">
                        <img src="${card.image}" alt="${card.name}" onerror="this.style.display='none'">
                        <div class="reveal-card-info">
                            <span class="reveal-card-name">${card.name}</span>
                            <span class="reveal-card-set">${card.setName} ${psa}</span>
                        </div>
                    </div>`;
            });
            detailsHTML += '</div></div>';
        });
        detailsHTML += '</div>';
    }
    
    if (normalItems.length > 0) {
        detailsHTML += normalItems.map(item => `
            <div class="order-card">
                <span>${item.quantity}× ${item.name}</span>
                <span style="margin-left:auto;font-weight:600;">${formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('');
    }
    
    modalDetails.innerHTML = detailsHTML + `
        <div class="cart-total" style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border);">
            <span>Total Paid</span>
            <span>${formatPrice(getCartTotal())}</span>
        </div>
    `;
    
    const title = document.getElementById('checkoutTitle');
    const msg = document.getElementById('checkoutMsg');
    if (mysteryResults.length > 0) {
        if (title) title.innerHTML = '🎲 Mystery Reveal!';
        if (msg) msg.textContent = 'Here\'s what you pulled — lucky you!';
    } else {
        if (title) title.innerHTML = '🎉 Order Confirmed!';
        if (msg) msg.textContent = 'Your Pokémon cards are on the way!';
    }
    
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

// ========== Admin Login ==========
function promptAdminLogin() {
    const password = prompt('Enter admin code:');
    if (password === 'admin123') {
        sessionStorage.setItem('pokemart-admin-auth', 'true');
        showToast('🔓 Access granted! Redirecting...');
        setTimeout(() => { window.location.href = 'admin.html'; }, 800);
    } else if (password !== null) {
        showToast('❌ Incorrect code');
    }
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

// Close lottery modals on overlay click
document.getElementById('lotteryResultModal').addEventListener('click', function(e) {
    if (e.target === this) closeLotteryResult();
});
document.getElementById('buyTicketModal').addEventListener('click', function(e) {
    if (e.target === this) closeBuyTicket();
});

// ========== Top 3 Most Expensive Cards ==========
function renderTopCards() {
    const grid = document.getElementById('topCardsGrid');
    if (!grid) return;

    // Get top 3 by price (only cards with stock > 0)
    const sorted = cardData
        .filter(c => getTotalStock(c) > 0)
        .sort((a, b) => b.price - a.price)
        .slice(0, 3);

    if (sorted.length === 0) {
        grid.innerHTML = '<p class="top-cards-empty">No cards in stock yet</p>';
        return;
    }

    const medals = ['🥇', '🥈', '🥉'];

    grid.innerHTML = sorted.map((card, i) => `
        <div class="top-card">
            <span class="top-card-medal">${medals[i]}</span>
            <img src="${card.image}" alt="${card.name}" loading="lazy"
                 onerror="this.src='data:image/svg+xml,${generatePlaceholder(card.id)}'">
            <div class="top-card-info">
                <span class="top-card-name">${card.name}</span>
                <span class="top-card-price">${formatPrice(card.price)}</span>
            </div>
        </div>
    `).join('');
}

// ========== Lottery System ==========
const LOTTERY_DEFAULTS = {
    jackpotTicketPrice: 4.99,
    instantWinTicketPrice: 12.99,
    winningNumber: null, // null = no winning number set yet (admin sets this)
    jackpotPrize: "1× Mystery PSA Slab (worth $99.99)",
    instantWinPrizes: [
        "1× Mystery Pack (worth $24.99)",
        "1× Random Rare Holo Card",
        "1× Random Ultra Rare Card",
        "1× $10 Store Credit",
        "1× Free Standard Ticket",
        "1× Random Booster Pack",
    ],
};

function loadLotteryConfig() {
    try {
        const saved = localStorage.getItem('pokemart-lottery-config');
        if (saved) {
            const config = JSON.parse(saved);
            return { ...LOTTERY_DEFAULTS, ...config, instantWinPrizes: config.instantWinPrizes || LOTTERY_DEFAULTS.instantWinPrizes };
        }
    } catch { /* ignore */ }
    return { ...LOTTERY_DEFAULTS, instantWinPrizes: [...LOTTERY_DEFAULTS.instantWinPrizes] };
}

function saveLotteryConfig(config) {
    localStorage.setItem('pokemart-lottery-config', JSON.stringify(config));
}

let lotteryConfig = loadLotteryConfig();

function loadLotteryTickets() {
    try {
        const saved = localStorage.getItem('pokemart-lottery-tickets');
        return saved ? JSON.parse(saved) : [];
    } catch { return []; }
}

function saveLotteryTickets(tickets) {
    localStorage.setItem('pokemart-lottery-tickets', JSON.stringify(tickets));
}

let lotteryTickets = loadLotteryTickets();

// Count tickets per type
function getTicketCount(type) {
    return lotteryTickets.filter(t => t.type === type).length;
}

// Get winning number (from config)
function getWinningNumber() {
    return lotteryConfig.winningNumber;
}

// Check if a ticket is a winner
function isWinningTicket(ticketNumber) {
    const winNum = getWinningNumber();
    if (winNum === null || winNum === undefined) return false;
    return parseInt(ticketNumber) === parseInt(winNum);
}

// Get a random instant win prize
function getRandomInstantWinPrize() {
    const prizes = lotteryConfig.instantWinPrizes;
    if (!prizes || prizes.length === 0) return 'No prizes available';
    return prizes[Math.floor(Math.random() * prizes.length)];
}

// Render lottery section
function renderLottery() {
    const grid = document.getElementById('lotteryGrid');
    if (!grid) return;

    const standardCount = getTicketCount('standard');
    const instantCount = getTicketCount('instant');
    const winNum = getWinningNumber();
    const hasWinningNumber = winNum !== null && winNum !== undefined;

    grid.innerHTML = `
        <!-- Standard Ticket -->
        <div class="lottery-card jackpot-card">
            <div class="lottery-icon">🎟️</div>
            <h3>Standard Ticket</h3>
            <p class="lottery-subtitle">Pick a number 1–99,999.<br>Match the winning number to win the jackpot!</p>
            <div class="lottery-price">${formatPrice(lotteryConfig.jackpotTicketPrice)}</div>
            <p class="lottery-tickets-sold">${standardCount} ticket${standardCount !== 1 ? 's' : ''} sold</p>
            <div class="lottery-prize-info">
                <div class="prize-label">🏆 Jackpot Prize</div>
                <div class="prize-detail">${lotteryConfig.jackpotPrize}</div>
                ${hasWinningNumber ? `<div class="prize-label" style="margin-top:8px;">🎯 Winning Number</div><div class="prize-detail" style="font-size:1.2rem;font-family:'Courier New',monospace;letter-spacing:2px;color:#ffcc02;">#${String(winNum).padStart(5, '0')}</div>` : '<div class="prize-label" style="margin-top:8px;color:#ef4444;">⚠️ Winning number not yet set</div>'}
            </div>
            <button class="btn" onclick="openBuyTicket('standard')" ${!hasWinningNumber ? 'disabled' : ''}>
                🎫 Buy Standard Ticket
            </button>
        </div>

        <!-- Instant Win Ticket -->
        <div class="lottery-card instant-win-card">
            <div class="lottery-icon">⚡</div>
            <h3>Instant Win Ticket</h3>
            <p class="lottery-subtitle">Pick a number 1–99,999. If you miss the jackpot, you still win a prize from the pool below!</p>
            <div class="lottery-price">${formatPrice(lotteryConfig.instantWinTicketPrice)}</div>
            <p class="lottery-tickets-sold">${instantCount} ticket${instantCount !== 1 ? 's' : ''} sold</p>
            <div class="lottery-prize-info">
                <div class="prize-label">🎁 Instant Win Prize Pool</div>
                ${lotteryConfig.instantWinPrizes.map(p => `<div class="prize-detail" style="font-size:0.8rem;padding:3px 0;">• ${p}</div>`).join('')}
                <div class="prize-label" style="margin-top:8px;">🏆 Also eligible for Jackpot</div>
                <div class="prize-detail">${lotteryConfig.jackpotPrize}</div>
            </div>
            <button class="btn" onclick="openBuyTicket('instant')" ${!hasWinningNumber ? 'disabled' : ''}>
                ⚡ Buy Instant Win Ticket
            </button>
        </div>
    `;

    // Render history if there are tickets
    renderLotteryHistory();
}

function renderLotteryHistory() {
    const grid = document.getElementById('lotteryGrid');
    if (!grid) return;

    let historyEl = document.getElementById('lotteryHistory');
    if (!historyEl) {
        historyEl = document.createElement('div');
        historyEl.id = 'lotteryHistory';
        historyEl.className = 'lottery-history';
        grid.parentElement.appendChild(historyEl);
    }

    if (lotteryTickets.length === 0) {
        historyEl.innerHTML = `
            <h4>📋 Your Ticket History</h4>
            <p class="lottery-history-empty">No tickets purchased yet. Try your luck!</p>
        `;
        return;
    }

    const sorted = [...lotteryTickets].reverse(); // newest first

    historyEl.innerHTML = `
        <h4>📋 Your Ticket History (${lotteryTickets.length} total)</h4>
        <div class="lottery-history-list">
            ${sorted.map(t => {
                let resultClass = '';
                let resultText = '';
                if (t.result === 'jackpot') {
                    resultClass = 'won';
                    resultText = '🏆 JACKPOT!';
                } else if (t.result === 'consolation') {
                    resultClass = 'consolation';
                    resultText = `🎁 ${t.prize || 'Instant Win Prize'}`;
                } else if (t.result === 'lost') {
                    resultClass = 'lost';
                    resultText = 'No win';
                } else {
                    resultClass = '';
                    resultText = 'Pending draw';
                }
                return `
                <div class="lottery-history-item">
                    <span class="ticket-number">#${String(t.number).padStart(5, '0')}</span>
                    <span class="ticket-type ${t.type}">${t.type === 'instant' ? '⚡ Instant' : '🎟️ Standard'}</span>
                    <span class="ticket-result ${resultClass}">${resultText}</span>
                </div>`;
            }).join('')}
        </div>
    `;
}

// Buy ticket flow
let pendingTicketType = null;
let pendingTicketNumber = null;

function openBuyTicket(type) {
    pendingTicketType = type;
    pendingTicketNumber = Math.floor(Math.random() * 99999) + 1;

    const modal = document.getElementById('buyTicketModal');
    const title = document.getElementById('buyTicketTitle');
    const content = document.getElementById('buyTicketContent');
    const confirmBtn = document.getElementById('confirmBuyBtn');

    const price = type === 'instant' ? lotteryConfig.instantWinTicketPrice : lotteryConfig.jackpotTicketPrice;
    const typeLabel = type === 'instant' ? 'Instant Win' : 'Standard';
    const typeEmoji = type === 'instant' ? '⚡' : '🎟️';

    title.textContent = `${typeEmoji} Buy ${typeLabel} Ticket`;
    content.innerHTML = `
        <p class="buy-ticket-info">Choose your lucky number between <strong>1</strong> and <strong>99,999</strong>.</p>
        <div class="number-picker">
            <button class="random-btn" onclick="randomizeTicketNumber()" title="Random number">🎲</button>
            <input type="number" id="ticketNumberInput" min="1" max="99999" value="${pendingTicketNumber}" onchange="updatePendingNumber(this.value)">
            <button class="random-btn" onclick="randomizeTicketNumber()" title="Random number">🎲</button>
        </div>
        <p class="buy-ticket-info">Price: <strong>${formatPrice(price)}</strong> per ticket</p>
        ${type === 'instant' ? '<p class="buy-ticket-info" style="color:#a78bfa;">⚡ Guaranteed prize even if you miss the jackpot!</p>' : ''}
    `;

    confirmBtn.textContent = `Pay ${formatPrice(price)} — Buy Ticket`;
    modal.classList.add('open');
}

function closeBuyTicket() {
    document.getElementById('buyTicketModal').classList.remove('open');
    pendingTicketType = null;
    pendingTicketNumber = null;
}

function updatePendingNumber(value) {
    let num = parseInt(value);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 99999) num = 99999;
    pendingTicketNumber = num;
    document.getElementById('ticketNumberInput').value = num;
}

function randomizeTicketNumber() {
    pendingTicketNumber = Math.floor(Math.random() * 99999) + 1;
    document.getElementById('ticketNumberInput').value = pendingTicketNumber;
}

// Expose to global scope
window.openBuyTicket = openBuyTicket;
window.closeBuyTicket = closeBuyTicket;
window.updatePendingNumber = updatePendingNumber;
window.randomizeTicketNumber = randomizeTicketNumber;

function confirmBuyTicket() {
    if (!pendingTicketType || !pendingTicketNumber) return;

    const input = document.getElementById('ticketNumberInput');
    if (input) {
        const val = parseInt(input.value);
        if (isNaN(val) || val < 1 || val > 99999) {
            showToast('❌ Please enter a number between 1 and 99,999!');
            return;
        }
        pendingTicketNumber = val;
    }

    // Check if this number is already taken
    const existing = lotteryTickets.find(t => t.number === pendingTicketNumber);
    if (existing) {
        showToast('❌ That number has already been picked! Choose another.');
        return;
    }

    const ticket = {
        id: Date.now(),
        type: pendingTicketType,
        number: pendingTicketNumber,
        purchasedAt: Date.now(),
        result: null, // 'jackpot', 'consolation', 'lost'
        prize: null,
    };

    // Determine result immediately
    const winNum = getWinningNumber();
    if (winNum !== null && winNum !== undefined) {
        if (ticket.number === parseInt(winNum)) {
            ticket.result = 'jackpot';
            ticket.prize = lotteryConfig.jackpotPrize;
        } else if (pendingTicketType === 'instant') {
            ticket.result = 'consolation';
            ticket.prize = getRandomInstantWinPrize();
        } else {
            ticket.result = 'lost';
        }
    }

    lotteryTickets.push(ticket);
    saveLotteryTickets(lotteryTickets);

    closeBuyTicket();
    renderLottery();

    // Show result modal
    showLotteryResult(ticket);
}

function showLotteryResult(ticket) {
    const modal = document.getElementById('lotteryResultModal');
    const title = document.getElementById('lotteryResultTitle');
    const content = document.getElementById('lotteryResultContent');

    const numStr = String(ticket.number).padStart(5, '0');
    const winNum = getWinningNumber();
    const winNumStr = winNum !== null ? String(winNum).padStart(5, '0') : '?????';

    let resultHTML = '';
    if (ticket.result === 'jackpot') {
        title.innerHTML = '🏆 JACKPOT WINNER!';
        resultHTML = `
            <div class="lottery-spinning">
                <div class="lottery-result-number win">#${numStr}</div>
            </div>
            <p class="lottery-result-detail">🎉 Your number matches the winning number <strong>#${winNumStr}</strong>!</p>
            <p class="lottery-result-prize">🏆 ${ticket.prize}</p>
            <p class="lottery-result-detail">Congratulations! You've won the grand prize!</p>
        `;
    } else if (ticket.result === 'consolation') {
        title.innerHTML = '🎁 Instant Win!';
        resultHTML = `
            <div class="lottery-spinning">
                <div class="lottery-result-number">#${numStr}</div>
            </div>
            <p class="lottery-result-detail">The winning number is <strong>#${winNumStr}</strong> — not a match this time.</p>
            <p class="lottery-result-prize consolation">🎁 ${ticket.prize}</p>
            <p class="lottery-result-detail">But your Instant Win ticket guarantees a prize! Enjoy!</p>
        `;
    } else {
        title.innerHTML = '😔 Better Luck Next Time';
        resultHTML = `
            <div class="lottery-spinning">
                <div class="lottery-result-number">#${numStr}</div>
            </div>
            <p class="lottery-result-detail">The winning number is <strong>#${winNumStr}</strong></p>
            <p class="lottery-result-detail">Your number didn't match. Try again with another ticket!</p>
        `;
    }

    content.innerHTML = resultHTML;
    modal.classList.add('open');
}

function closeLotteryResult() {
    document.getElementById('lotteryResultModal').classList.remove('open');
}

// Expose to global scope
window.confirmBuyTicket = confirmBuyTicket;
window.closeLotteryResult = closeLotteryResult;
window.refreshLotteryConfig = refreshLotteryConfig;

// Refresh lottery config from localStorage (called when admin updates)
function refreshLotteryConfig() {
    lotteryConfig = loadLotteryConfig();
    // Re-check all pending tickets
    let changed = false;
    const winNum = getWinningNumber();
    lotteryTickets.forEach(t => {
        if (t.result === null && winNum !== null) {
            if (t.number === parseInt(winNum)) {
                t.result = 'jackpot';
                t.prize = lotteryConfig.jackpotPrize;
                changed = true;
            } else if (t.type === 'instant') {
                t.result = 'consolation';
                t.prize = getRandomInstantWinPrize();
                changed = true;
            } else {
                t.result = 'lost';
                changed = true;
            }
        }
    });
    if (changed) saveLotteryTickets(lotteryTickets);
    renderLottery();
}

// ========== Initialize ==========
renderProducts();
renderWishlist();
renderTopCards();
updateCartUI();
renderLottery();

console.log('⚡ PokéMart ready! Browse our collection of premium Pokémon cards.');
console.log('💡 Tip: Press Ctrl+K to search, Esc to close panels.');
