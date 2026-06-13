// ========== Admin JS — Card Inventory Manager ==========

// ========== Auth ==========
const ADMIN_PASSWORD = 'admin123';

function checkAuth() {
    if (sessionStorage.getItem('pokemart-admin-auth') === 'true') return true;
    document.getElementById('loginOverlay').classList.remove('hidden');
    return false;
}

function attemptLogin() {
    const input = document.getElementById('loginPassword');
    const error = document.getElementById('loginError');
    if (input.value === ADMIN_PASSWORD) {
        sessionStorage.setItem('pokemart-admin-auth', 'true');
        document.getElementById('loginOverlay').classList.add('hidden');
        error.style.display = 'none';
        input.value = '';
    } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
    }
}

// Expose to global scope
window.attemptLogin = attemptLogin;

const CONDITION_LABELS = {
    'NM': 'Near Mint', 'LP': 'Lightly Played', 'MP': 'Moderately Played',
    'HP': 'Heavily Played', 'DMG': 'Damaged',
};

const CONDITION_COLORS = {
    'NM': '#22c55e', 'LP': '#4ade80', 'MP': '#facc15', 'HP': '#f97316', 'DMG': '#ef4444',
};

const TYPE_EMOJI = {
    'fire': '🔥', 'water': '💧', 'grass': '🌿', 'electric': '⚡',
    'psychic': '🔮', 'normal': '◻️', 'fighting': '👊', 'dark': '🌑',
    'dragon': '🐉', 'fairy': '🧚', 'steel': '⚙️', 'ice': '❄️',
    'poison': '☠️', 'ground': '⛰️', 'flying': '🕊️', 'bug': '🐛',
    'rock': '🪨', 'ghost': '👻',
};

// ========== Data ==========
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

let cards = [];

const CONDITION_ORDER = ['NM', 'LP', 'MP', 'HP', 'DMG'];

function getTotalStock(card) {
    if (!card.stocks || typeof card.stocks !== 'object') return 0;
    return Object.values(card.stocks).reduce((s, v) => s + (v || 0), 0);
}

function migrateCardData(card) {
    if (card.stocks && typeof card.stocks === 'object') return;
    const oldStock = card.stock ?? 0;
    const oldCondition = card.condition || 'NM';
    card.stocks = {};
    if (oldStock > 0) {
        card.stocks[oldCondition] = oldStock;
    }
    delete card.stock;
    delete card.condition;
}

function loadCards() {
    try {
        const saved = localStorage.getItem('pokemart-cards');
        if (saved) {
            cards = JSON.parse(saved);
            const now = Date.now();
            cards.forEach(c => { 
                if (!c.lastRestocked) c.lastRestocked = now;
                migrateCardData(c);
            });
            localStorage.setItem('pokemart-cards', JSON.stringify(cards));
            return;
        }
    } catch { /* ignore */ }
    cards = JSON.parse(JSON.stringify(defaultCardData));
    const now = Date.now();
    cards.forEach(c => { c.lastRestocked = now; });
}

function saveCards() {
    localStorage.setItem('pokemart-cards', JSON.stringify(cards));
    showSaved();
    renderStats();
}

function showSaved() {
    const el = document.getElementById('tableSaveIndicator');
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2000);
}

// ========== Render ==========
function renderStats() {
    const totalCards = cards.length;
    const totalStock = cards.reduce((s, c) => s + getTotalStock(c), 0);
    const totalValue = cards.reduce((s, c) => s + (c.price || 0) * getTotalStock(c), 0);
    const outOfStock = cards.filter(c => getTotalStock(c) === 0).length;
    const condCounts = {};
    cards.forEach(c => { 
        if (c.stocks) {
            for (const cond of CONDITION_ORDER) {
                if (c.stocks[cond] && c.stocks[cond] > 0) {
                    condCounts[cond] = (condCounts[cond] || 0) + 1;
                }
            }
        }
    });
    const topCond = Object.entries(condCounts).sort((a, b) => b[1] - a[1])[0] || ['NM', 0];

    document.getElementById('statsRow').innerHTML = `
        <div class="stat-card">
            <div class="stat-value" style="color:var(--accent-light);">${totalCards}</div>
            <div class="stat-title">Total Listings</div>
        </div>
        <div class="stat-card">
            <div class="stat-value" style="color:#4ade80;">${totalStock}</div>
            <div class="stat-title">Total Stock</div>
        </div>
        <div class="stat-card">
            <div class="stat-value" style="color:var(--secondary);">$${totalValue.toLocaleString(undefined, {minimumFractionDigits:2,maximumFractionDigits:2})}</div>
            <div class="stat-title">Inventory Value</div>
        </div>
        <div class="stat-card">
            <div class="stat-value" style="color:#ef4444;">${outOfStock}</div>
            <div class="stat-title">Out of Stock</div>
        </div>
        <div class="stat-card">
            <div class="stat-value" style="color:${CONDITION_COLORS[topCond[0]] || '#22c55e'};">${topCond[0]}</div>
            <div class="stat-title">Most Common Condition</div>
        </div>
    `;
}

function renderTable() {
    const tbody = document.getElementById('adminTableBody');
    tbody.innerHTML = cards.map(c => {
        const imgSrc = c.image || '';
        const totalStock = getTotalStock(c);
        
        // Build condition stock inputs
        const stockInputs = CONDITION_ORDER.map(cond => {
            const val = (c.stocks && c.stocks[cond]) ? c.stocks[cond] : 0;
            const condColor = CONDITION_COLORS[cond] || '#22c55e';
            return `
                <div class="cond-stock-row">
                    <span class="cond-stock-label" style="color:${condColor}">${cond}</span>
                    <input type="number" min="0" value="${val}" 
                           onchange="updateField(${c.id}, 'stock_${cond}', this.value)">
                </div>`;
        }).join('');
        
        return `
            <tr>
                <td>
                    ${imgSrc ? `<img src="${imgSrc}" class="row-img" alt="${c.name}" loading="lazy" onerror="this.style.display='none'">` : '<div class="row-img" style="display:flex;align-items:center;justify-content:center;">❓</div>'}
                </td>
                <td>
                    <div class="row-name">${c.name}</div>
                    <div class="row-set">${c.setName} (${c.setCode}) · ${TYPE_EMOJI[c.type] || ''} ${c.type}</div>
                </td>
                <td>
                    <div class="field-price">
                        <span>$</span>
                        <input type="number" step="0.01" min="0" value="${c.price}" 
                               onchange="updateField(${c.id}, 'price', this.value)">
                    </div>
                </td>
                <td>
                    <div class="field-stock">
                        ${stockInputs}
                    </div>
                </td>
                <td>${totalStock}</td>
                <td>
                    <button class="delete-btn" onclick="deleteCard(${c.id})" title="Delete">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

function updateField(id, field, value) {
    const card = cards.find(c => c.id === id);
    if (!card) return;
    
    if (field === 'price') {
        card.price = Math.max(0, parseFloat(value) || 0);
    } else if (field.startsWith('stock_')) {
        const cond = field.replace('stock_', '');
        if (!card.stocks) card.stocks = {};
        const oldStock = card.stocks[cond] || 0;
        card.stocks[cond] = Math.max(0, parseInt(value) || 0);
        if (oldStock === 0 && card.stocks[cond] > 0) {
            card.lastRestocked = Date.now();
        }
    }
    
    saveCards();
    renderTable();
}

function deleteCard(id) {
    if (!confirm('Are you sure you want to delete this card?')) return;
    cards = cards.filter(c => c.id !== id);
    saveCards();
    renderTable();
}

// ========== Add Modal ==========
function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Add New Card';
    document.getElementById('modalCardId').value = '';
    document.getElementById('modalName').value = '';
    document.getElementById('modalSetName').value = '';
    document.getElementById('modalSetCode').value = '';
    document.getElementById('modalType').value = 'fire';
    document.getElementById('modalRarity').value = 'common';
    document.getElementById('modalPrice').value = '';
    document.getElementById('modalStock').value = '';
    document.getElementById('modalCondition').value = 'NM';
    document.getElementById('modalImage').value = '';
    document.getElementById('modalDesc').value = '';
    document.getElementById('cardModal').classList.add('open');
}

function closeModal() {
    document.getElementById('cardModal').classList.remove('open');
}

function saveCard() {
    const name = document.getElementById('modalName').value.trim();
    if (!name) { alert('Card name is required!'); return; }

    const id = Date.now();
    const now = Date.now();
    const condition = document.getElementById('modalCondition').value;
    const stock = Math.max(0, parseInt(document.getElementById('modalStock').value) || 0);
    const stocks = {};
    if (stock > 0) {
        stocks[condition] = stock;
    }
    
    cards.push({
        id: id,
        name: name,
        setName: document.getElementById('modalSetName').value.trim() || 'Custom',
        setCode: document.getElementById('modalSetCode').value.trim() || '-',
        type: document.getElementById('modalType').value,
        rarity: document.getElementById('modalRarity').value,
        price: Math.max(0, parseFloat(document.getElementById('modalPrice').value) || 0),
        stocks: stocks,
        image: document.getElementById('modalImage').value.trim(),
        description: document.getElementById('modalDesc').value.trim() || 'No description.',
        lastRestocked: now,
    });

    saveCards();
    renderTable();
    closeModal();
}

// Close modal on overlay click
document.getElementById('cardModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ========== Mystery Product Management ==========
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

let mysteryProducts = [];

function loadMysteryProducts() {
    try {
        const saved = localStorage.getItem('pokemart-mystery-stock');
        if (saved) {
            const stocks = JSON.parse(saved);
            mysteryProducts = JSON.parse(JSON.stringify(defaultMysteryData));
            mysteryProducts.forEach(m => {
                if (stocks[m.id] !== undefined) m.stock = stocks[m.id];
            });
            return;
        }
    } catch { /* ignore */ }
    mysteryProducts = JSON.parse(JSON.stringify(defaultMysteryData));
}

function saveMysteryProducts() {
    const stocks = {};
    const prices = {};
    mysteryProducts.forEach(m => { 
        stocks[m.id] = m.stock;
        prices[m.id] = m.price;
    });
    localStorage.setItem('pokemart-mystery-stock', JSON.stringify(stocks));
    localStorage.setItem('pokemart-mystery-prices', JSON.stringify(prices));
    const el = document.getElementById('mysterySaveIndicator');
    if (el) {
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2000);
    }
}

function updateMysteryField(id, field, value) {
    const m = mysteryProducts.find(p => p.id === id);
    if (!m) return;
    if (field === 'price') {
        m.price = Math.max(0, parseFloat(value) || 0);
    } else if (field === 'stock') {
        m.stock = Math.max(0, parseInt(value) || 0);
    }
    saveMysteryProducts();
    renderMysteryTable();
}

function renderMysteryTable() {
    const tbody = document.getElementById('mysteryTableBody');
    if (!tbody) return;
    tbody.innerHTML = mysteryProducts.map(m => {
        const isPack = m.mysteryType === 'pack';
        const iconClass = isPack ? 'pack-icon' : 'slab-icon';
        const typeLabel = isPack ? 'Booster Pack' : 'PSA Slab';
        return `
            <tr>
                <td>
                    <div class="mystery-row-icon ${iconClass}"><span>?</span></div>
                </td>
                <td>
                    <div class="row-name">${m.name}</div>
                    <div class="row-set">${typeLabel} · ${m.cardCount} card${m.cardCount > 1 ? 's' : ''}</div>
                </td>
                <td>
                    <div class="field-price">
                        <span>$</span>
                        <input type="number" step="0.01" min="0" value="${m.price}" 
                               onchange="updateMysteryField('${m.id}', 'price', this.value)">
                    </div>
                </td>
                <td>
                    <div class="field-stock">
                        <input type="number" min="0" value="${m.stock || 0}" 
                               onchange="updateMysteryField('${m.id}', 'stock', this.value)">
                    </div>
                </td>
                <td>${typeLabel}</td>
                <td>${m.cardCount}</td>
            </tr>
        `;
    }).join('');
}

// ========== Exchange Rate ==========
function updateExchangeRate(value) {
    const rate = Math.max(0.01, parseFloat(value) || 0.79);
    localStorage.setItem('pokemart-exchange-rate', rate.toString());
    const el = document.getElementById('exchangeRateSaved');
    if (el) {
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2000);
    }
}

function loadExchangeRateUI() {
    const input = document.getElementById('exchangeRateInput');
    if (!input) return;
    try {
        const saved = localStorage.getItem('pokemart-exchange-rate');
        if (saved) input.value = saved;
    } catch { /* ignore */ }
}

// Expose to global scope
window.updateExchangeRate = updateExchangeRate;

// ========== Condition Price Multipliers ==========
function updateConditionMultiplier(cond, value) {
    const pct = Math.max(1, Math.min(100, parseInt(value) || 100));
    const input = document.getElementById('condMult' + cond);
    if (input) input.value = pct;
    
    const multipliers = loadConditionMultipliers();
    multipliers[cond] = pct / 100;
    localStorage.setItem('pokemart-condition-multipliers', JSON.stringify(multipliers));
    
    const el = document.getElementById('condMultSaved');
    if (el) {
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2000);
    }
}

function loadConditionMultipliers() {
    try {
        const saved = localStorage.getItem('pokemart-condition-multipliers');
        if (saved) return JSON.parse(saved);
    } catch { /* ignore */ }
    return { 'NM': 1.00, 'LP': 0.90, 'MP': 0.75, 'HP': 0.55, 'DMG': 0.35 };
}

function loadConditionMultipliersUI() {
    const multipliers = loadConditionMultipliers();
    CONDITION_ORDER.forEach(cond => {
        const input = document.getElementById('condMult' + cond);
        if (input) input.value = Math.round((multipliers[cond] || 1) * 100);
    });
}

// Expose to global scope
window.updateConditionMultiplier = updateConditionMultiplier;

// ========== Lottery / Draws Admin Management ==========
// Each draw is an independent prize with its own ticket price & winning number

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

const LOTTERY_DEFAULTS = {
    draws: createDefaultDraws(),
};

function loadLotteryConfig() {
    try {
        const saved = localStorage.getItem('pokemart-lottery-config');
        if (saved) {
            const config = JSON.parse(saved);
            // Migrate old format (centralized jackpot) → new format (per-draw)
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
    // First time
    const defaults = { draws: createDefaultDraws() };
    saveLotteryConfig(defaults);
    return defaults;
}

function saveLotteryConfig(config) {
    localStorage.setItem('pokemart-lottery-config', JSON.stringify(config));
    const el = document.getElementById('lotterySaveIndicator');
    if (el) {
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2000);
    }
}

let lotteryConfig = loadLotteryConfig();

function loadLotteryUI() {
    if (!lotteryConfig.draws) lotteryConfig.draws = [];
    renderDrawsTable();
}

function renderDrawsTable() {
    const tbody = document.getElementById('lotteryDrawsTableBody');
    if (!tbody) return;

    const draws = lotteryConfig.draws || [];
    tbody.innerHTML = draws.map((d, i) => {
        const wonNum = d.winningNumber !== null && d.winningNumber !== undefined ? d.winningNumber : '';
        return `
            <tr>
                <td><span style="font-size:0.75rem;color:var(--text-muted);">${i + 1}</span></td>
                <td>
                    <input type="text" value="${d.name.replace(/"/g, '&quot;')}"
                           style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:6px 10px;color:var(--text);font-size:0.82rem;outline:none;"
                           onchange="updateDrawField('${d.id}', 'name', this.value)">
                </td>
                <td>
                    <input type="number" step="0.01" min="0.01" value="${d.ticketPrice}"
                           style="width:90px;background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:6px 10px;color:var(--text);font-size:0.82rem;outline:none;text-align:right;"
                           onchange="updateDrawField('${d.id}', 'ticketPrice', this.value)">
                </td>
                <td>
                    <div style="display:flex;align-items:center;gap:6px;">
                        <input type="number" min="1" max="99999" value="${wonNum}"
                               style="width:100px;background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:6px 10px;color:var(--text);font-size:0.82rem;outline:none;font-family:'Courier New',monospace;text-align:center;"
                               onchange="updateDrawField('${d.id}', 'winningNumber', this.value)">
                        <button class="delete-btn" onclick="randomDrawNumber('${d.id}')" title="Random number" style="font-size:0.9rem;">🎲</button>
                    </div>
                </td>
                <td>
                    <button class="delete-btn" onclick="removeLotteryDraw('${d.id}')" title="Remove draw">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

function updateDrawField(drawId, field, value) {
    const draw = lotteryConfig.draws.find(d => d.id === drawId);
    if (!draw) return;

    if (field === 'name') {
        draw.name = value.trim() || draw.name;
    } else if (field === 'ticketPrice') {
        draw.ticketPrice = Math.max(0.01, parseFloat(value) || 0.01);
    } else if (field === 'winningNumber') {
        if (value === '' || isNaN(parseInt(value))) {
            draw.winningNumber = null;
        } else {
            draw.winningNumber = Math.max(1, Math.min(99999, parseInt(value)));
        }
    }

    saveLotteryConfig(lotteryConfig);
}

function randomDrawNumber(drawId) {
    const draw = lotteryConfig.draws.find(d => d.id === drawId);
    if (!draw) return;
    draw.winningNumber = Math.floor(Math.random() * 99999) + 1;
    saveLotteryConfig(lotteryConfig);
    renderDrawsTable();
}

function removeLotteryDraw(drawId) {
    if (!confirm('Remove this draw? This cannot be undone.')) return;
    lotteryConfig.draws = lotteryConfig.draws.filter(d => d.id !== drawId);
    saveLotteryConfig(lotteryConfig);
    renderDrawsTable();
}

function addLotteryDraw() {
    if (!lotteryConfig.draws) lotteryConfig.draws = [];
    lotteryConfig.draws.push({
        id: generateDrawId(),
        name: 'New Draw',
        ticketPrice: 3.99,
        winningNumber: Math.floor(Math.random() * 99999) + 1,
    });
    saveLotteryConfig(lotteryConfig);
    renderDrawsTable();
}

// Update resetAllCards to use new format
function resetAllCards() {
    if (!confirm('Reset ALL cards and draws to default values? This cannot be undone!')) return;
    cards = JSON.parse(JSON.stringify(defaultCardData));
    localStorage.removeItem('pokemart-mystery-stock');
    localStorage.removeItem('pokemart-mystery-prices');
    localStorage.removeItem('pokemart-lottery-config');
    localStorage.removeItem('pokemart-lottery-tickets');
    saveCards();
    renderTable();
    mysteryProducts = JSON.parse(JSON.stringify(defaultMysteryData));
    saveMysteryProducts();
    renderMysteryTable();
    lotteryConfig = { draws: createDefaultDraws() };
    saveLotteryConfig(lotteryConfig);
    loadLotteryUI();
}

// Expose to global scope
window.updateDrawField = updateDrawField;
window.randomDrawNumber = randomDrawNumber;
window.removeLotteryDraw = removeLotteryDraw;
window.addLotteryDraw = addLotteryDraw;

// ========== Init ==========
if (!checkAuth()) {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.products').style.display = 'none';
} else {
    document.getElementById('loginOverlay').classList.add('hidden');
    loadCards();
    loadMysteryProducts();
    loadExchangeRateUI();
    loadConditionMultipliersUI();
    loadLotteryUI();
    renderStats();
    renderTable();
    renderMysteryTable();
}
