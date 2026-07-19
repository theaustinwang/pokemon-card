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
    // --- Dragon (ex3) — Dragon-type ex Cards ---
    { id: 1,  name: "Rayquaza ex",       setName: "Dragon", setCode: "ex3", type: "dragon",  rarity: "ultra-rare", price: 499.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex3/97_hires.png",  description: "Dragon ex — the mighty Rayquaza dominates the skies with devastating power!" },
    { id: 2,  name: "Salamence ex",      setName: "Dragon", setCode: "ex3", type: "dragon",  rarity: "ultra-rare", price: 349.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex3/98_hires.png",  description: "Dragon ex — Salamence unleashes its fearsome dragon fury!" },
    { id: 3,  name: "Dragonite ex",      setName: "Dragon", setCode: "ex3", type: "dragon",  rarity: "ultra-rare", price: 299.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex3/99_hires.png",  description: "Dragon ex — Dragonite soars as the beloved dragon powerhouse!" },
    { id: 4,  name: "Flygon ex",         setName: "Dragon", setCode: "ex3", type: "dragon",  rarity: "ultra-rare", price: 199.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex3/100_hires.png", description: "Dragon ex — Flygon whips up a devastating sandstorm!" },
    { id: 5,  name: "Kingdra ex",        setName: "Dragon", setCode: "ex3", type: "dragon",  rarity: "ultra-rare", price: 179.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex3/101_hires.png", description: "Dragon ex — Kingdra rules the depths with dragon and water might!" },

    // --- Burning Shadows (sm3) — Rainbow Rare GX Cards ---
    { id: 6,  name: "Charizard-GX",      setName: "Burning Shadows", setCode: "sm3", type: "fire",     rarity: "hyper-rare",  price: 549.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sm3/150_hires.png", description: "Rainbow Rare — the iconic Burning Shadows Charizard-GX chase card!" },
    { id: 7,  name: "Gardevoir-GX",      setName: "Burning Shadows", setCode: "sm3", type: "psychic",  rarity: "hyper-rare",  price: 129.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sm3/159_hires.png", description: "Rainbow Rare — Gardevoir-GX radiates with psychic elegance!" },
    { id: 8,  name: "Marshadow-GX",      setName: "Burning Shadows", setCode: "sm3", type: "fighting", rarity: "hyper-rare",  price: 119.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sm3/156_hires.png", description: "Rainbow Rare — Marshadow-GX strikes from the shadows!" },
    { id: 9,  name: "Darkrai-GX",        setName: "Burning Shadows", setCode: "sm3", type: "dark",     rarity: "hyper-rare",  price: 89.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sm3/158_hires.png", description: "Rainbow Rare — Darkrai-GX envelops the battlefield in darkness!" },
    { id: 10, name: "Lycanroc-GX",       setName: "Burning Shadows", setCode: "sm3", type: "fighting", rarity: "ultra-rare", price: 59.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/sm3/155_hires.png", description: "Rainbow Rare — Lycanroc-GX slashes with razor-sharp claws!" },

    // --- Team Magma vs Team Aqua (ex4) — Secret Rare & ex Cards ---
    { id: 11, name: "Jirachi",           setName: "Team Magma vs Team Aqua", setCode: "ex4", type: "psychic",  rarity: "hyper-rare",  price: 249.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex4/97_hires.png", description: "Secret Rare — the mythical Jirachi in stunning full art holo!" },
    { id: 12, name: "Absol",             setName: "Team Magma vs Team Aqua", setCode: "ex4", type: "dark",     rarity: "hyper-rare",  price: 179.99, stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex4/96_hires.png", description: "Secret Rare — Absol foretells disaster in beautiful secret holo!" },
    { id: 13, name: "Sceptile ex",       setName: "Team Magma vs Team Aqua", setCode: "ex4", type: "grass",    rarity: "ultra-rare", price: 99.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex4/93_hires.png", description: "EX card — Sceptile ex commands the jungle with explosive grass power!" },
    { id: 14, name: "Raikou ex",         setName: "Team Magma vs Team Aqua", setCode: "ex4", type: "electric", rarity: "ultra-rare", price: 89.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex4/92_hires.png", description: "EX card — the legendary beast Raikou ex crackles with electric might!" },
    { id: 15, name: "Suicune ex",        setName: "Team Magma vs Team Aqua", setCode: "ex4", type: "water",    rarity: "ultra-rare", price: 79.99,  stocks: { NM: 1 }, image: "https://images.pokemontcg.io/ex4/94_hires.png", description: "EX card — the legendary beast Suicune ex surges with pure waters!" },
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
    // Fossil (base3) — Vintage Holos (all $36+, top: Gengar $212, Dragonite $177)
    "Gengar (Fossil Holo)", "Dragonite (Fossil Holo)", "Moltres (Fossil Holo)",
    "Articuno (Fossil Holo)", "Haunter (Fossil Holo)", "Raichu (Fossil Holo)",
    "Zapdos (Fossil Holo)", "Aerodactyl (Fossil Holo)", "Ditto (Fossil Holo)",
    "Hitmonlee (Fossil Holo)", "Hypno (Fossil Holo)", "Kabutops (Fossil Holo)",
    // Legend Maker (ex12) — ex, Star, Secret & Holo (all $49+, top: Regice ★ $1,250, Regirock ★ $747)
    "Regice ★ (Legend Maker)", "Regirock ★ (Legend Maker)", "Arcanine ex (Legend Maker)",
    "Registeel ★ (Legend Maker)", "Pikachu δ (Legend Maker)", "Mew (Legend Maker Holo)",
    "Flygon ex (Legend Maker)", "Banette ex (Legend Maker)", "Gengar (Legend Maker Holo)",
    "Mew ex (Legend Maker)", "Armaldo ex (Legend Maker)", "Aerodactyl (Legend Maker Holo)",
    "Walrein ex (Legend Maker)", "Wailord (Legend Maker Holo)", "Lapras (Legend Maker Holo)",
    "Dustox ex (Legend Maker)",
    // FireRed & LeafGreen (ex6) — ex, Secret & Holo (all $70+, top: Gengar ex $1,400, Charizard ex $500)
    "Gengar ex (FireRed & LeafGreen)", "Charizard ex (FireRed & LeafGreen)", "Venusaur ex (FireRed & LeafGreen)",
    "Blastoise ex (FireRed & LeafGreen)", "Moltres ex (FireRed & LeafGreen)", "Articuno ex (FireRed & LeafGreen)",
    "Gyarados ex (FireRed & LeafGreen)", "Zapdos ex (FireRed & LeafGreen)", "Snorlax (FireRed & LeafGreen Holo)",
    "Ditto (FireRed & LeafGreen Holo)", "Electrode ex (FireRed & LeafGreen)", "Clefable ex (FireRed & LeafGreen)",
    "Charmander (FireRed & LeafGreen Secret)", "Kangaskhan (FireRed & LeafGreen Holo)", "Mr. Mime ex (FireRed & LeafGreen)",
    // Unleashed (hgss2) — LEGEND, Prime & Secret (all $41+, top: Tyranitar Prime $214, Suicune & Entei LEGEND $180)
    "Tyranitar Prime (Unleashed)", "Suicune & Entei LEGEND (Unleashed)", "Raikou & Suicune LEGEND (Unleashed)",
    "Alph Lithograph (Unleashed)", "Entei & Raikou LEGEND (Unleashed)", "Steelix Prime (Unleashed)",
    "Kingdra Prime (Unleashed)", "Crobat Prime (Unleashed)", "Ursaring Prime (Unleashed)",
    "Lanturn Prime (Unleashed)",
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
        image: null,
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
                    image: null,
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
        const imgPreview = d.image
            ? `<img src="${d.image.replace(/"/g, '&quot;')}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;cursor:pointer;" onclick="this.nextElementSibling.click()" title="Click to change image">`
            : `<div style="width:40px;height:40px;border-radius:6px;background:var(--bg);border:1px dashed var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:0.7rem;color:var(--text-muted);" onclick="this.nextElementSibling.click()" title="Click to upload">🖼️</div>`;
        return `
            <tr>
                <td><span style="font-size:0.75rem;color:var(--text-muted);">${i + 1}</span></td>
                <td>
                    <div style="display:flex;align-items:center;gap:6px;">
                        ${imgPreview}
                        <input type="file" accept="image/*" style="display:none;"
                               onchange="updateDrawImage('${d.id}', this)">
                        <input type="text" placeholder="or paste URL"
                               value="${(d.image && d.image.length < 200 ? d.image : '').replace(/"/g, '&quot;')}"
                               style="width:100px;background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:6px 8px;color:var(--text);font-size:0.75rem;outline:none;"
                               onchange="updateDrawImageURL('${d.id}', this.value)">
                        ${d.image ? `<button class="delete-btn" onclick="updateDrawImageURL('${d.id}', '')" title="Remove image" style="font-size:0.75rem;padding:2px 6px;">✕</button>` : ''}
                    </div>
                </td>
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
        image: null,
    });
    saveLotteryConfig(lotteryConfig);
    renderDrawsTable();
}

function updateDrawImage(drawId, input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const draw = lotteryConfig.draws.find(d => d.id === drawId);
        if (!draw) return;
        draw.image = e.target.result;
        saveLotteryConfig(lotteryConfig);
        renderDrawsTable();
    };
    reader.readAsDataURL(file);
}

function updateDrawImageURL(drawId, url) {
    const draw = lotteryConfig.draws.find(d => d.id === drawId);
    if (!draw) return;
    draw.image = url.trim() || null;
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
window.updateDrawImage = updateDrawImage;
window.updateDrawImageURL = updateDrawImageURL;

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
