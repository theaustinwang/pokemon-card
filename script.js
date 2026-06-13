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
        return localStorage.getItem('pokemart-currency') || 'GBP';
    } catch { return 'GBP'; }
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

// ========== In-Store Credit ==========
let storeCredit = loadStoreCredit();

function loadStoreCredit() {
    try {
        return parseFloat(localStorage.getItem('pokemart-store-credit')) || 0;
    } catch { return 0; }
}

function saveStoreCredit() {
    localStorage.setItem('pokemart-store-credit', storeCredit.toFixed(2));
}

function creditStoreBalance(amount) {
    storeCredit += amount;
    saveStoreCredit();
}

function getStoreCredit() {
    return storeCredit;
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

        // Update store credit section
        updateStoreCreditSection();
    }
}

// ========== Store Credit Section in Cart ==========
// Credit is stored in GBP. Convert for display + checkout.
function formatCreditAmount(gbpAmount) {
    if (currency === 'GBP') return '£' + gbpAmount.toFixed(2);
    const usdAmount = gbpAmount / exchangeRate;
    return '$' + usdAmount.toFixed(2);
}

function creditToCurrentCurrency(gbpAmount) {
    if (currency === 'GBP') return gbpAmount;
    return gbpAmount / exchangeRate;
}

function currentCurrencyToCredit(amount) {
    if (currency === 'GBP') return amount;
    return amount * exchangeRate;
}

function updateStoreCreditSection() {
    const storeCreditEl = document.getElementById('storeCreditSection');
    if (!storeCreditEl) return;
    
    const creditGbp = getStoreCredit();
    const creditDisplay = formatCreditAmount(creditGbp);
    const cartTotalUsd = getCartTotal();
    const cartTotalDisplay = currency === 'GBP' ? cartTotalUsd * exchangeRate : cartTotalUsd;
    const creditInCurrent = creditToCurrentCurrency(creditGbp);
    
    if (creditGbp <= 0) {
        storeCreditEl.innerHTML = '';
        return;
    }
    
    const applicable = Math.min(creditInCurrent, cartTotalDisplay);
    const afterCredit = Math.max(0, cartTotalDisplay - applicable);
    const sym = getCurrencySymbol();
    
    storeCreditEl.innerHTML = `
        <div class="store-credit-info">
            <span class="store-credit-icon">🏪</span>
            <div class="store-credit-details">
                <span class="store-credit-label">Store Credit</span>
                <span class="store-credit-amount">${creditDisplay} available</span>
            </div>
        </div>
        <div class="store-credit-preview">
            After credit: <strong>${sym}${afterCredit.toFixed(2)}</strong>
        </div>
    `;
}

// ========== Checkout ==========
function checkout() {
    if (cart.length === 0) return;
    
    // Apply store credit (credit stored in GBP; convert for deduction)
    const cartTotalUsd = getCartTotal();
    const creditInCurrent = creditToCurrentCurrency(storeCredit);
    const cartTotalDisplay = currency === 'GBP' ? cartTotalUsd * exchangeRate : cartTotalUsd;
    let creditUsedGbp = 0;
    let creditUsedDisplay = 0;
    if (storeCredit > 0 && cartTotalDisplay > 0) {
        creditUsedDisplay = Math.min(creditInCurrent, cartTotalDisplay);
        creditUsedGbp = currentCurrencyToCredit(creditUsedDisplay);
        storeCredit -= creditUsedGbp;
        saveStoreCredit();
    }
    
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
    
    // Build payment breakdown
    const sym = getCurrencySymbol();
    let paymentBreakdown = '';
    if (creditUsedGbp > 0) {
        const remainingCredit = getStoreCredit();
        const remainingDisplay = formatCreditAmount(remainingCredit);
        paymentBreakdown = `
            <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border);">
                <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:6px;">
                    <span style="color:var(--text-muted);">Store Credit Applied</span>
                    <span style="color:#4ade80;">−${sym}${creditUsedDisplay.toFixed(2)}</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:6px;">
                    <span style="color:var(--text-muted);">Remaining Credit</span>
                    <span style="color:#22c55e;">${remainingDisplay}</span>
                </div>
            </div>
        `;
    }
    
    const remainingToPay = cartTotalDisplay - creditUsedDisplay;
    modalDetails.innerHTML = detailsHTML + paymentBreakdown + `
        <div class="cart-total" style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border);">
            <span>Total Paid</span>
            <span>${sym}${remainingToPay.toFixed(2)}</span>
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
    const lottery = document.getElementById('lottery');
    const products = document.getElementById('products');
    const productSection = document.getElementById('productSection');
    const filterBar = document.querySelector('.filter-bar');
    const noResults = document.getElementById('noResults');
    
    if (filter === 'lotto') {
        // Show lottery, hide shop entirely
        if (lottery) lottery.style.display = '';
        if (products) products.style.display = 'none';
        if (productSection) productSection.style.display = 'none';
        if (filterBar) filterBar.style.display = 'none';
        if (noResults) noResults.style.display = 'none';
        updateNavActive('lotto');
        smoothScroll('#lottery');
        mobileMenu.classList.remove('open');
        return;
    }
    // Show shop, hide lottery
    if (lottery) lottery.style.display = 'none';
    if (products) products.style.display = '';
    if (productSection) productSection.style.display = '';
    if (filterBar) filterBar.style.display = '';
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
    const navMap = { all: 'navShop,mobShop', new: 'navNew,mobNew', bestseller: 'navBest,mobBest', lotto: 'navLotto,mobLotto' };
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

// ========== Prize Image Generator ==========
function generatePrizeImage(prize) {
    const name = prize.toLowerCase();
    let theme, icon;
    
    // Graded Slabs — diamond/trophy theme
    if (name.includes('cgc 10') || name.includes('psa 10') || name.includes('bgs 10')) {
        theme = ['#fbbf24', '#b45309']; icon = '💎';
    } else if (name.includes('cgc 9.5') || name.includes('bgs 9.5')) {
        theme = ['#c084fc', '#7e22ce']; icon = '💎';
    } else if (name.includes('cgc 9') || name.includes('psa 9') || name.includes('bgs 9')) {
        theme = ['#60a5fa', '#2563eb']; icon = '💎';
    } else if (name.includes('cgc') || name.includes('psa') || name.includes('bgs')) {
        theme = ['#a78bfa', '#6d28d9']; icon = '💎';
    }
    // Elite Trainer Boxes
    else if (name.includes('etb') || name.includes('elite trainer')) {
        if (name.includes('evolving skies')) { theme = ['#8b5cf6', '#6d28d9']; icon = '📦'; }
        else if (name.includes('151')) { theme = ['#fbbf24', '#d97706']; icon = '📦'; }
        else if (name.includes('crown zenith')) { theme = ['#facc15', '#eab308']; icon = '📦'; }
        else if (name.includes('lost origin')) { theme = ['#06b6d4', '#0891b2']; icon = '📦'; }
        else if (name.includes('fusion strike')) { theme = ['#ec4899', '#db2777']; icon = '📦'; }
        else if (name.includes('paldean fates')) { theme = ['#f472b6', '#ec4899']; icon = '📦'; }
        else if (name.includes('shrouded fable')) { theme = ['#22c55e', '#16a34a']; icon = '📦'; }
        else if (name.includes('twilight masquerade')) { theme = ['#6366f1', '#4f46e5']; icon = '📦'; }
        else if (name.includes('temporal forces')) { theme = ['#0ea5e9', '#0284c7']; icon = '📦'; }
        else if (name.includes('paradox rift')) { theme = ['#ef4444', '#dc2626']; icon = '📦'; }
        else if (name.includes('obsidian flames')) { theme = ['#f97316', '#ea580c']; icon = '📦'; }
        else if (name.includes('chilling reign')) { theme = ['#14b8a6', '#0d9488']; icon = '📦'; }
        else if (name.includes('brilliant stars')) { theme = ['#fbbf24', '#f59e0b']; icon = '📦'; }
        else if (name.includes('sword & shield')) { theme = ['#a1a1aa', '#71717a']; icon = '📦'; }
        else if (name.includes('scarlet & violet')) { theme = ['#dc2626', '#991b1b']; icon = '📦'; }
        else { theme = ['#06b6d4', '#0891b2']; icon = '📦'; }
    }
    // Booster Boxes
    else if (name.includes('booster box')) {
        if (name.includes('evolving skies')) { theme = ['#8b5cf6', '#5b21b6']; icon = '🃏🃏'; }
        else if (name.includes('151')) { theme = ['#fbbf24', '#b45309']; icon = '🃏🃏'; }
        else if (name.includes('crown zenith')) { theme = ['#facc15', '#ca8a04']; icon = '🃏🃏'; }
        else if (name.includes('lost origin')) { theme = ['#06b6d4', '#0e7490']; icon = '🃏🃏'; }
        else if (name.includes('chilling reign')) { theme = ['#14b8a6', '#0f766e']; icon = '🃏🃏'; }
        else if (name.includes('fusion strike')) { theme = ['#ec4899', '#be185d']; icon = '🃏🃏'; }
        else if (name.includes('brilliant stars')) { theme = ['#f59e0b', '#b45309']; icon = '🃏🃏'; }
        else if (name.includes('silver tempest')) { theme = ['#c084fc', '#7e22ce']; icon = '🃏🃏'; }
        else if (name.includes('astral radiance')) { theme = ['#60a5fa', '#1d4ed8']; icon = '🃏🃏'; }
        else if (name.includes('darkness ablaze')) { theme = ['#dc2626', '#991b1b']; icon = '🃏🃏'; }
        else if (name.includes('vivid voltage')) { theme = ['#fbbf24', '#d97706']; icon = '🃏🃏'; }
        else if (name.includes('rebel clash')) { theme = ['#ef4444', '#b91c1c']; icon = '🃏🃏'; }
        else { theme = ['#7c3aed', '#6d28d9']; icon = '🃏🃏'; }
    }
    // Premium / Ultra Premium Collections
    else if (name.includes('upc') || name.includes('ultra premium') || name.includes('premium collection')) {
        if (name.includes('charizard')) { theme = ['#f97316', '#ea580c']; icon = '🔥'; }
        else if (name.includes('celebrations')) { theme = ['#fbbf24', '#d97706']; icon = '🎉'; }
        else if (name.includes('mew')) { theme = ['#f472b6', '#ec4899']; icon = '🌟'; }
        else if (name.includes('arceus')) { theme = ['#facc15', '#eab308']; icon = '🌟'; }
        else if (name.includes('eevee')) { theme = ['#c084fc', '#a855f7']; icon = '🦊'; }
        else if (name.includes('reshiram') || name.includes('charizard gx')) { theme = ['#dc2626', '#991b1b']; icon = '🔥'; }
        else if (name.includes('zacian')) { theme = ['#3b82f6', '#1d4ed8']; icon = '⚔️'; }
        else if (name.includes('zamazenta')) { theme = ['#dc2626', '#b91c1c']; icon = '🛡️'; }
        else if (name.includes('pikachu')) { theme = ['#fbbf24', '#d97706']; icon = '⚡'; }
        else { theme = ['#f59e0b', '#d97706']; icon = '🏆'; }
    }
    // Collector's Boxes / Special Collections
    else if (name.includes('special illustration') || name.includes('special collection') || name.includes('special case') || name.includes('special box')) {
        if (name.includes('charizard')) { theme = ['#ef4444', '#b91c1c']; icon = '🔥'; }
        else if (name.includes('pikachu')) { theme = ['#fbbf24', '#d97706']; icon = '⚡'; }
        else if (name.includes('eevee')) { theme = ['#a78bfa', '#7e22ce']; icon = '🦊'; }
        else if (name.includes('detective pikachu')) { theme = ['#fbbf24', '#b45309']; icon = '🔍'; }
        else if (name.includes('anniversary')) { theme = ['#f59e0b', '#d97706']; icon = '🎂'; }
        else { theme = ['#f59e0b', '#d97706']; icon = '🎁'; }
    }
    // Trainer's Toolkit
    else if (name.includes("trainer's toolkit")) { theme = ['#ef4444', '#dc2626']; icon = '🎒'; }
    // In-Store Credit
    else if (name.includes('in-store credit') || name.includes('store credit')) {
        if (name.includes('500')) { theme = ['#fbbf24', '#b45309']; icon = '🏪💷'; }
        else if (name.includes('200')) { theme = ['#f59e0b', '#d97706']; icon = '🏪💷'; }
        else if (name.includes('100')) { theme = ['#22c55e', '#16a34a']; icon = '🏪💷'; }
        else if (name.includes('50')) { theme = ['#3b82f6', '#2563eb']; icon = '🏪💷'; }
        else if (name.includes('25')) { theme = ['#8b5cf6', '#6d28d9']; icon = '🏪💷'; }
        else { theme = ['#14b8a6', '#0d9488']; icon = '🏪💰'; }
    }
    // Vintage Packs
    else if (name.includes('1st ed') || name.includes('base set') || name.includes('jungle') || name.includes('fossil') || name.includes('team rocket') || name.includes('gym heroes') || name.includes('neo genesis')) {
        theme = ['#d4a574', '#8b5e3c']; icon = '📜';
    }
    // Japanese Sets
    else if (name.includes('shiny star') || name.includes('vmax climax') || name.includes('tag team') || name.includes('dream league') || name.includes('remix bout') || name.includes('matchless fighters')) {
        theme = ['#dc2626', '#991b1b']; icon = '🏯';
    }
    // Booster Packs / Bundles
    else if (name.includes('booster pack') || name.includes('booster bundle')) {
        if (name.includes('evolving skies')) { theme = ['#8b5cf6', '#5b21b6']; icon = '🃏'; }
        else if (name.includes('151')) { theme = ['#fbbf24', '#b45309']; icon = '🃏'; }
        else if (name.includes('crown zenith')) { theme = ['#facc15', '#ca8a04']; icon = '🃏'; }
        else if (name.includes('lost origin')) { theme = ['#06b6d4', '#0e7490']; icon = '🃏'; }
        else if (name.includes('fusion strike')) { theme = ['#ec4899', '#be185d']; icon = '🃏'; }
        else if (name.includes('brilliant stars')) { theme = ['#f59e0b', '#b45309']; icon = '🃏'; }
        else { theme = ['#ec4899', '#db2777']; icon = '🃏'; }
    }
    // Pokémon Center ETB
    else if (name.includes('pokémon center')) {
        theme = ['#3b82f6', '#1d4ed8']; icon = '🏪';
    }
    // Prismatic Evolutions
    else if (name.includes('prismatic evolutions')) {
        theme = ['#c084fc', '#a855f7']; icon = '💎';
    }
    // Stellar Crown
    else if (name.includes('stellar crown')) {
        theme = ['#fbbf24', '#f59e0b']; icon = '👑';
    }
    // Surging Sparks
    else if (name.includes('surging sparks')) {
        theme = ['#facc15', '#eab308']; icon = '⚡';
    }
    // Paldea Evolved
    else if (name.includes('paldea evolved')) {
        theme = ['#22c55e', '#16a34a']; icon = '🌿';
    }
    // Vintage Pack (generic)
    else if (name.includes('booster pack')) { theme = ['#d4a574', '#8b5e3c']; icon = '📜'; }
    // Fallback
    else { theme = ['#7c5cfc', '#6d28d9']; icon = '🎰'; }

    const gradientId = 'g' + Math.random().toString(36).slice(2, 8);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="200" viewBox="0 0 280 200">
        <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${theme[0]};stop-opacity:0.9"/>
                <stop offset="100%" style="stop-color:${theme[1]};stop-opacity:0.95"/>
            </linearGradient>
            <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="280" height="200" rx="16" fill="url(#${gradientId})"/>
        <!-- Decorative circles -->
        <circle cx="40" cy="30" r="80" fill="rgba(255,255,255,0.06)"/>
        <circle cx="250" cy="170" r="100" fill="rgba(255,255,255,0.04)"/>
        <circle cx="260" cy="30" r="50" fill="rgba(255,255,255,0.05)"/>
        <!-- Diagonal lines pattern -->
        <line x1="0" y1="60" x2="280" y2="60" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        <line x1="0" y1="100" x2="280" y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        <line x1="0" y1="140" x2="280" y2="140" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        <!-- Main icon -->
        <text x="140" y="110" text-anchor="middle" font-size="64" filter="url(#glow)">${icon}</text>
        <!-- Bottom label -->
        <rect x="0" y="155" width="280" height="45" fill="rgba(0,0,0,0.25)" rx="0 0 16 16"/>
        <text x="140" y="183" text-anchor="middle" fill="#fff" font-family="Poppins,Arial" font-size="12" font-weight="700" letter-spacing="2">DRAW PRIZE</text>
    </svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// ========== Lottery / Draws ==========
// Each draw is its own prize with its own ticket price & winning number

const DRAW_PRIZES = [
    // Graded Slabs
    "CGC 10 Charizard VMAX", "PSA 9 Mewtwo GX", "BGS 9.5 Rayquaza V",
    "CGC 9.5 Pikachu VMAX", "PSA 10 Umbreon V", "BGS 10 Giratina VSTAR",
    "CGC 10 Lugia V", "PSA 9 Charizard V", "BGS 9 Mew VMAX",
    "PSA 10 Celebi V", "CGC 9 Snorlax VMAX", "BGS 9.5 Blaziken VMAX",
    "PSA 10 Gengar VMAX", "CGC 10 Mew VMAX", "BGS 9.5 Charizard GX",
    // Elite Trainer Boxes
    "Sword & Shield ETB", "Scarlet & Violet ETB", "Paldean Fates ETB",
    "151 ETB", "Obsidian Flames ETB", "Paradox Rift ETB",
    "Temporal Forces ETB", "Twilight Masquerade ETB", "Shrouded Fable ETB",
    "Crown Zenith ETB", "Evolving Skies ETB", "Lost Origin ETB",
    "Fusion Strike ETB", "Chilling Reign ETB", "Brilliant Stars ETB",
    "Evolving Skies ETB (Pokémon Center)", "151 ETB (Pokémon Center)",
    "Prismatic Evolutions ETB",
    // Booster Boxes
    "Evolving Skies Booster Box", "151 Booster Box", "Crown Zenith Booster Box",
    "Lost Origin Booster Box", "Fusion Strike Booster Box", "Chilling Reign Booster Box",
    "Vivid Voltage Booster Box", "Darkness Ablaze Booster Box", "Rebel Clash Booster Box",
    "Silver Tempest Booster Box", "Astral Radiance Booster Box", "Brilliant Stars Booster Box",
    "Paldea Evolved Booster Box", "Stellar Crown Booster Box", "Surging Sparks Booster Box",
    // Vintage Booster Packs
    "Jungle Booster Pack (1st Ed)", "Fossil Booster Pack (1st Ed)",
    "Team Rocket Booster Pack", "Gym Heroes Booster Pack",
    "Neo Genesis Booster Pack", "Base Set Booster Pack",
    // In-Store Credit
    "£500 In-Store Credit", "£200 In-Store Credit", "£100 In-Store Credit",
    "£50 In-Store Credit", "£25 In-Store Credit",
];

function generateDrawId() {
    return 'draw-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 7);
}

function createDefaultDraws() {
    return DRAW_PRIZES.map(name => ({
        id: generateDrawId(),
        name: name,
        ticketPrice: 3.99,
        winningNumber: Math.floor(Math.random() * 99999) + 1,
    }));
}

const LOTTERY_DEFAULTS = { draws: createDefaultDraws() };

function loadLotteryConfig() {
    try {
        const saved = localStorage.getItem('pokemart-lottery-config');
        if (saved) {
            const config = JSON.parse(saved);
            // Migrate old centralized format → per-draw format
            if (!config.draws || !Array.isArray(config.draws)) {
                const oldDrawPrizes = config.drawPrizes || [];
                config.draws = oldDrawPrizes.map(name => ({
                    id: generateDrawId(),
                    name: name,
                    ticketPrice: config.jackpotTicketPrice || 3.99,
                    winningNumber: config.winningNumber || Math.floor(Math.random() * 99999) + 1,
                }));
                delete config.jackpotTicketPrice;
                delete config.winningNumber;
                delete config.jackpotPrize;
                delete config.drawPrizes;
                delete config.instantWinPrizes;
                delete config.instantWinTicketPrice;
            }
            return config;
        }
    } catch { /* ignore */ }
    const defaults = { draws: createDefaultDraws() };
    saveLotteryConfig(defaults);
    return defaults;
}

function saveLotteryConfig(config) {
    localStorage.setItem('pokemart-lottery-config', JSON.stringify(config));
}

let lotteryConfig = loadLotteryConfig();

// Tickets stored as: { [drawId]: [ticket1, ticket2, ...], ... }
function loadLotteryTickets() {
    try {
        const saved = localStorage.getItem('pokemart-lottery-tickets');
        if (saved) {
            const data = JSON.parse(saved);
            // Migrate old flat-array format
            if (Array.isArray(data)) {
                const byDraw = {};
                data.forEach(t => {
                    if (!t.drawId) t.drawId = '__unknown__';
                    if (!byDraw[t.drawId]) byDraw[t.drawId] = [];
                    byDraw[t.drawId].push(t);
                });
                saveLotteryTickets(byDraw);
                return byDraw;
            }
            return data;
        }
    } catch { /* ignore */ }
    return {};
}

function saveLotteryTickets(ticketsByDraw) {
    localStorage.setItem('pokemart-lottery-tickets', JSON.stringify(ticketsByDraw));
}

let lotteryTicketsByDraw = loadLotteryTickets();

function getDrawTicketCount(drawId) {
    return (lotteryTicketsByDraw[drawId] || []).length;
}

// Format a lottery price
function formatLotteryPrice(usdPrice) {
    const gbp = usdPrice * exchangeRate;
    return '£' + gbp.toFixed(2);
}

// Render the draws grid
function renderLottery() {
    const grid = document.getElementById('lotteryGrid');
    if (!grid) return;

    const draws = lotteryConfig.draws || [];
    const drawCards = draws.map(d => {
        const winNum = d.winningNumber;
        const hasNum = winNum !== null && winNum !== undefined;
        const imgSrc = generatePrizeImage(d.name);
        const ticketCount = getDrawTicketCount(d.id);
        return `
        <div class="draw-card">
            <div class="draw-card-image">
                <img src="${imgSrc}" alt="${d.name}" loading="lazy">
            </div>
            <div class="draw-card-info">
                <h3>${d.name}</h3>
                <div class="draw-card-win">${hasNum ? `🎯 Winning #<span>${String(winNum).padStart(5, '0')}</span>` : '<span class="no-num">⚠️ No number set</span>'}</div>
                <div class="draw-card-tickets">${ticketCount} sold · ${formatLotteryPrice(d.ticketPrice)} each</div>
                <button class="btn draw-buy-btn" onclick="openDrawBuy('${d.id}')" ${!hasNum ? 'disabled' : ''}>🎫 Buy Tickets</button>
            </div>
        </div>`;
    }).join('');

    grid.innerHTML = drawCards;
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

    let allTickets = [];
    for (const drawId in lotteryTicketsByDraw) {
        (lotteryTicketsByDraw[drawId] || []).forEach(t => {
            allTickets.push({ ...t, drawId });
        });
    }

    if (allTickets.length === 0) {
        historyEl.innerHTML = `<h4>📋 Your Ticket History</h4><p class="lottery-history-empty">No tickets purchased yet. Try your luck!</p>`;
        return;
    }

    const sorted = allTickets.sort((a, b) => b.purchasedAt - a.purchasedAt);
    historyEl.innerHTML = `
        <h4>📋 Your Tickets (${allTickets.length})</h4>
        <div class="lottery-history-list">
            ${sorted.map(t => {
                let rc = '', rt = '';
                if (t.result === 'win') { rc = 'won'; rt = '🏆 WINNER!'; }
                else if (t.result === 'lost') { rc = 'lost'; rt = 'No win'; }
                else { rt = 'Pending'; }
                return `<div class="lottery-history-item">
                    <span class="ticket-number">#${String(t.number).padStart(5, '0')}</span>
                    <span class="ticket-draw-name">${t.prize || ''}</span>
                    <span class="ticket-result ${rc}">${rt}</span>
                </div>`;
            }).join('')}
        </div>`;
}

// ========== Buy Ticket for a Specific Draw ==========
let pendingDrawId = null;
let pendingTicketQty = 1;

function openDrawBuy(drawId) {
    pendingDrawId = drawId;
    pendingTicketQty = 1;
    const draw = (lotteryConfig.draws || []).find(d => d.id === drawId);
    if (!draw) return;

    const modal = document.getElementById('buyTicketModal');
    const title = document.getElementById('buyTicketTitle');
    const content = document.getElementById('buyTicketContent');
    const confirmBtn = document.getElementById('confirmBuyBtn');
    const price = draw.ticketPrice;

    title.textContent = '🎫 Buy Tickets — ' + draw.name;
    content.innerHTML = `
        <p class="buy-ticket-info">Numbers randomly assigned <strong>1–99,999</strong>.</p>
        <div class="qty-selector">
            <label>How many?</label>
            <select id="ticketQtySelect" onchange="updatePendingQty(this.value)">
                ${[1,2,3,5,10,20].map(n => `<option value="${n}" ${n === 1 ? 'selected' : ''}>${n}</option>`).join('')}
            </select>
        </div>
        <p class="buy-ticket-info">Price: <strong>${formatLotteryPrice(price)}</strong> each</p>
        <p class="buy-ticket-info" id="totalPriceInfo">Total: <strong>${formatLotteryPrice(price)}</strong></p>
    `;
    confirmBtn.textContent = `Pay ${formatLotteryPrice(price)} — Buy`;
    modal.classList.add('open');
}

// Legacy alias
function openBuyTicket() { /* no-op — use per-draw buttons instead */ }

function updatePendingQty(val) {
    pendingTicketQty = parseInt(val) || 1;
    const drawId = pendingDrawId;
    if (!drawId) return;
    const draw = (lotteryConfig.draws || []).find(d => d.id === drawId);
    if (!draw) return;
    const price = draw.ticketPrice;
    const totalEl = document.getElementById('totalPriceInfo');
    const confirmBtn = document.getElementById('confirmBuyBtn');
    if (totalEl) totalEl.innerHTML = `Total: <strong>${formatLotteryPrice(price * pendingTicketQty)}</strong>`;
    if (confirmBtn) confirmBtn.textContent = `Pay ${formatLotteryPrice(price * pendingTicketQty)} — Buy`;
}

function closeBuyTicket() {
    document.getElementById('buyTicketModal').classList.remove('open');
    pendingDrawId = null;
    pendingTicketQty = 1;
}

function confirmBuyTicket() {
    const drawId = pendingDrawId;
    const qty = pendingTicketQty || 1;
    if (!drawId) return;

    const draw = (lotteryConfig.draws || []).find(d => d.id === drawId);
    if (!draw) return;

    const drawTickets = lotteryTicketsByDraw[drawId] || [];
    const usedNumbers = new Set(drawTickets.map(t => t.number));
    const numbers = [];
    let totalCredit = 0;

    for (let i = 0; i < qty; i++) {
        let n, attempts = 0;
        do {
            n = Math.floor(Math.random() * 99999) + 1;
            if (++attempts > 1000) { showToast('❌ Too many tickets. Try fewer.'); return; }
        } while (usedNumbers.has(n) || numbers.includes(n));
        numbers.push(n);
        usedNumbers.add(n);
    }

    const winNum = draw.winningNumber;
    const results = [];
    numbers.forEach(n => {
        const isWin = (winNum !== null && winNum !== undefined && n === parseInt(winNum));
        const ticket = {
            id: Date.now() + Math.random(),
            drawId: drawId,
            number: n,
            purchasedAt: Date.now(),
            result: isWin ? 'win' : 'lost',
            prize: draw.name,
        };

        if (isWin) {
            const cm = draw.name.match(/£(\d+)\s*in-store\s*credit/i);
            if (cm) { creditStoreBalance(parseFloat(cm[1])); totalCredit += parseFloat(cm[1]); }
        }

        if (!lotteryTicketsByDraw[drawId]) lotteryTicketsByDraw[drawId] = [];
        lotteryTicketsByDraw[drawId].push(ticket);
        results.push(ticket);
    });

    saveLotteryTickets(lotteryTicketsByDraw);
    closeBuyTicket();
    renderLottery();

    if (totalCredit > 0) showToast(`🏪 ${formatCreditAmount(totalCredit)} store credit added!`);
    showDrawResults(draw, results);
}

function showDrawResults(draw, tickets) {
    const modal = document.getElementById('lotteryResultModal');
    const title = document.getElementById('lotteryResultTitle');
    const content = document.getElementById('lotteryResultContent');
    const winNumStr = draw.winningNumber !== null ? String(draw.winningNumber).padStart(5, '0') : '?????';
    const winner = tickets.find(t => t.result === 'win');
    const isCredit = /in-store\s*credit/i.test(draw.name);

    if (winner) {
        title.innerHTML = '🏆 YOU WON!';
        let html = `<div class="lottery-spinning"><div class="lottery-result-number win">#${String(winner.number).padStart(5, '0')}</div></div>
            <p class="lottery-result-detail">🎉 Matches <strong>#${winNumStr}</strong>!</p>
            <p class="lottery-result-prize">🏆 ${draw.name}</p>`;
        if (isCredit) html += `<p class="lottery-result-detail" style="color:#22c55e;">💰 Added to your store credit!</p>`;
        const losers = tickets.filter(t => t.result !== 'win');
        if (losers.length > 0) html += `<hr style="border-color:var(--border);margin:12px 0;"><p class="lottery-result-detail">${losers.length} other ticket${losers.length>1?'s':''} didn't win.</p>`;
        content.innerHTML = html;
    } else {
        title.innerHTML = '😔 Better Luck Next Time';
        let html = `<p class="lottery-result-detail">Draw: <strong>${draw.name}</strong></p>
            <p class="lottery-result-detail">Winning #: <strong>#${winNumStr}</strong></p>`;
        html += tickets.map(t => `<div class="lottery-spinning"><div class="lottery-result-number">#${String(t.number).padStart(5, '0')}</div></div>`).join('');
        content.innerHTML = html;
    }
    modal.classList.add('open');
}

function closeLotteryResult() {
    document.getElementById('lotteryResultModal').classList.remove('open');
}

// Expose to global scope
window.openDrawBuy = openDrawBuy;
window.openBuyTicket = openDrawBuy;
window.closeBuyTicket = closeBuyTicket;
window.updatePendingQty = updatePendingQty;
window.confirmBuyTicket = confirmBuyTicket;
window.closeLotteryResult = closeLotteryResult;
window.refreshLotteryConfig = refreshLotteryConfig;
window.getStoreCredit = getStoreCredit;
window.creditStoreBalance = creditStoreBalance;

// Refresh lottery config from localStorage
function refreshLotteryConfig() {
    lotteryConfig = loadLotteryConfig();
    const draws = lotteryConfig.draws || [];
    for (const drawId in lotteryTicketsByDraw) {
        const draw = draws.find(d => d.id === drawId);
        const tickets = lotteryTicketsByDraw[drawId] || [];
        tickets.forEach(t => {
            if (t.result === null && draw) {
                const wn = draw.winningNumber;
                if (wn !== null && wn !== undefined && t.number === parseInt(wn)) {
                    t.result = 'win';
                    const cm = draw.name.match(/£(\d+)\s*in-store\s*credit/i);
                    if (cm) creditStoreBalance(parseFloat(cm[1]));
                } else { t.result = 'lost'; }
            }
        });
    }
    saveLotteryTickets(lotteryTicketsByDraw);
    renderLottery();
}

// ========== Initialize ==========
// Start in shop mode — hide lottery initially
document.getElementById('lottery').style.display = 'none';
renderProducts();
renderWishlist();
renderTopCards();
updateCartUI();
renderLottery();

console.log('⚡ PokéMart ready! Browse our collection of premium Pokémon cards.');
console.log('💡 Tip: Press Ctrl+K to search, Esc to close panels.');
