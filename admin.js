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
    { id: 1,  name: "Eevee ex",          setName: "Prismatic Evolutions", setCode: "PRE", type: "normal",    rarity: "ultra-rare", price: 249.99, stock: 1,  condition: "NM",  image: "https://images.pokemontcg.io/sv8pt5/167_hires.png", description: "Special Illustration Rare — the star of Prismatic Evolutions!" },
    { id: 2,  name: "Umbreon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "dark",      rarity: "ultra-rare", price: 1299.99, stock: 1, condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/161_hires.png", description: "The ultimate chase card — Moonbreon returns in stunning SIR art." },
    { id: 3,  name: "Espeon ex",         setName: "Prismatic Evolutions", setCode: "PRE", type: "psychic",   rarity: "ultra-rare", price: 399.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/155_hires.png", description: "Special Illustration Rare — radiant Espeon bathed in sunlight." },
    { id: 4,  name: "Sylveon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "fairy",     rarity: "ultra-rare", price: 499.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/156_hires.png", description: "Special Illustration Rare — enchanting Sylveon in a floral paradise." },
    { id: 5,  name: "Leafeon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "grass",     rarity: "ultra-rare", price: 349.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/144_hires.png", description: "Special Illustration Rare — Leafeon basking in a sunlit meadow." },
    { id: 6,  name: "Glaceon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "ice",       rarity: "ultra-rare", price: 329.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/150_hires.png", description: "Special Illustration Rare — Glaceon shimmering in icy wonderland." },
    { id: 7,  name: "Vaporeon ex",       setName: "Prismatic Evolutions", setCode: "PRE", type: "water",     rarity: "ultra-rare", price: 379.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/149_hires.png", description: "Special Illustration Rare — Vaporeon swimming through crystal waters." },
    { id: 8,  name: "Jolteon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "electric",  rarity: "ultra-rare", price: 289.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/153_hires.png", description: "Special Illustration Rare — Jolteon crackling with electric energy." },
    { id: 9,  name: "Flareon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "fire",      rarity: "ultra-rare", price: 299.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/146_hires.png", description: "Special Illustration Rare — Flareon blazing through volcanic terrain." },
    { id: 10, name: "Raging Bolt ex",    setName: "Prismatic Evolutions", setCode: "PRE", type: "dragon",    rarity: "ultra-rare", price: 179.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/166_hires.png", description: "Special Illustration Rare — Raging Bolt crackling with ancient fury." },

    // --- Rare Holos (ex Cards) ---
    { id: 11, name: "Eevee ex",          setName: "Prismatic Evolutions", setCode: "PRE", type: "normal",    rarity: "rare-holo",  price: 14.99,  stock: 6,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/75_hires.png", description: "Double Rare ex — Eevee ready to evolve into any form!" },
    { id: 12, name: "Espeon ex",         setName: "Prismatic Evolutions", setCode: "PRE", type: "psychic",   rarity: "rare-holo",  price: 12.99,  stock: 5,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/34_hires.png", description: "Double Rare ex — Espeon with dazzling psychic powers." },
    { id: 13, name: "Umbreon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "dark",      rarity: "rare-holo",  price: 29.99,  stock: 3,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/60_hires.png", description: "Double Rare ex — Umbreon stalking under the moonlight." },
    { id: 14, name: "Sylveon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "fairy",     rarity: "rare-holo",  price: 15.99,  stock: 4,  condition: "LP", image: "https://images.pokemontcg.io/sv8pt5/41_hires.png", description: "Double Rare ex — Sylveon weaving ribbons of charm." },
    { id: 15, name: "Leafeon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "grass",     rarity: "rare-holo",  price: 11.99,  stock: 5,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/6_hires.png", description: "Double Rare ex — Leafeon harnessing nature's power." },
    { id: 16, name: "Glaceon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "ice",       rarity: "rare-holo",  price: 13.99,  stock: 4,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/26_hires.png", description: "Double Rare ex — Glaceon freezing the battlefield solid." },
    { id: 17, name: "Vaporeon ex",       setName: "Prismatic Evolutions", setCode: "PRE", type: "water",     rarity: "rare-holo",  price: 12.99,  stock: 5,  condition: "MP", image: "https://images.pokemontcg.io/sv8pt5/23_hires.png", description: "Double Rare ex — Vaporeon surging through tidal waves." },
    { id: 18, name: "Jolteon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "electric",  rarity: "rare-holo",  price: 13.99,  stock: 4,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/30_hires.png", description: "Double Rare ex — Jolteon striking with lightning speed." },
    { id: 19, name: "Flareon ex",        setName: "Prismatic Evolutions", setCode: "PRE", type: "fire",      rarity: "rare-holo",  price: 14.99,  stock: 4,  condition: "LP", image: "https://images.pokemontcg.io/sv8pt5/14_hires.png", description: "Double Rare ex — Flareon burning bright with fiery passion." },
    { id: 20, name: "Tyranitar ex",      setName: "Prismatic Evolutions", setCode: "PRE", type: "dark",      rarity: "rare-holo",  price: 16.99,  stock: 3,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/64_hires.png", description: "Double Rare ex — Tyranitar unleashing mountain-crushing power." },

    { id: 29, name: "Iron Valiant ex",   setName: "Prismatic Evolutions", setCode: "PRE", type: "psychic",   rarity: "ultra-rare", price: 179.99,  stock: 1,  condition: "NM", image: "https://images.pokemontcg.io/sv8pt5/157_hires.png", description: "Special Illustration Rare — Iron Valiant, the futuristic warrior." },
];

let cards = [];

function loadCards() {
    try {
        const saved = localStorage.getItem('pokemart-cards');
        if (saved) {
            cards = JSON.parse(saved);
            const now = Date.now();
            cards.forEach(c => { if (!c.lastRestocked) c.lastRestocked = now; });
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
    const totalStock = cards.reduce((s, c) => s + (c.stock || 0), 0);
    const totalValue = cards.reduce((s, c) => s + (c.price || 0) * (c.stock || 0), 0);
    const outOfStock = cards.filter(c => (c.stock || 0) === 0).length;
    const condCounts = {};
    cards.forEach(c => { const cond = c.condition || 'NM'; condCounts[cond] = (condCounts[cond] || 0) + 1; });
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
        const condColor = CONDITION_COLORS[c.condition] || '#22c55e';
        const condLabel = CONDITION_LABELS[c.condition] || 'Near Mint';
        const imgSrc = c.image || '';
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
                        <input type="number" min="0" value="${c.stock || 0}" 
                               onchange="updateField(${c.id}, 'stock', this.value)">
                    </div>
                </td>
                <td>
                    <div class="field-condition">
                        <select onchange="updateField(${c.id}, 'condition', this.value)">
                            ${['NM','LP','MP','HP','DMG'].map(cond => 
                                `<option value="${cond}" ${c.condition === cond ? 'selected' : ''}>${CONDITION_LABELS[cond]}</option>`
                            ).join('')}
                        </select>
                        <span class="cond-dot" style="background:${condColor};display:inline-block;width:8px;height:8px;border-radius:50%;margin-left:8px;vertical-align:middle;"></span>
                    </div>
                </td>
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
    } else if (field === 'stock') {
        const oldStock = card.stock || 0;
        card.stock = Math.max(0, parseInt(value) || 0);
        if (oldStock === 0 && card.stock > 0) {
            card.lastRestocked = Date.now();
        }
    } else if (field === 'condition') {
        card.condition = value;
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

function resetAllCards() {
    if (!confirm('Reset ALL cards and mystery products to default values? This cannot be undone!')) return;
    cards = JSON.parse(JSON.stringify(defaultCardData));
    localStorage.removeItem('pokemart-mystery-stock');
    localStorage.removeItem('pokemart-mystery-prices');
    saveCards();
    renderTable();
    mysteryProducts = JSON.parse(JSON.stringify(defaultMysteryData));
    saveMysteryProducts();
    renderMysteryTable();
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
    cards.push({
        id: id,
        name: name,
        setName: document.getElementById('modalSetName').value.trim() || 'Custom',
        setCode: document.getElementById('modalSetCode').value.trim() || '-',
        type: document.getElementById('modalType').value,
        rarity: document.getElementById('modalRarity').value,
        price: Math.max(0, parseFloat(document.getElementById('modalPrice').value) || 0),
        stock: Math.max(0, parseInt(document.getElementById('modalStock').value) || 0),
        condition: document.getElementById('modalCondition').value,
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

// ========== Init ==========
if (!checkAuth()) {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.products').style.display = 'none';
} else {
    document.getElementById('loginOverlay').classList.add('hidden');
    loadCards();
    loadMysteryProducts();
    renderStats();
    renderTable();
    renderMysteryTable();
}
