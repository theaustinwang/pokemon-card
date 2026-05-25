// ========== Admin JS — Card Inventory Manager ==========

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
};

// ========== Data ==========
const defaultCardData = [
    { id: 1,  name: "Charizard",      setName: "Base Set",        setCode: "BS",  type: "fire",      rarity: "rare-holo",  price: 299.99, stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/4_hires.png",   description: "The iconic holographic Charizard from the original Base Set." },
    { id: 2,  name: "Blastoise",      setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "rare-holo",  price: 179.99, stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base1/2_hires.png",   description: "Powerful holographic Blastoise card with Hydro Pump." },
    { id: 3,  name: "Venusaur",       setName: "Base Set",        setCode: "BS",  type: "grass",     rarity: "rare-holo",  price: 149.99, stock: 4,  condition: "NM",  image: "https://images.pokemontcg.io/base1/15_hires.png",  description: "Lush Venusaur holographic card with Solar Beam attack." },
    { id: 4,  name: "Pikachu",        setName: "Base Set",        setCode: "BS",  type: "electric",  rarity: "common",     price: 24.99,  stock: 12, condition: "NM",  image: "https://images.pokemontcg.io/base1/58_hires.png",  description: "The beloved electric mouse Pokémon." },
    { id: 5,  name: "Mewtwo",         setName: "Base Set",        setCode: "BS",  type: "psychic",   rarity: "rare-holo",  price: 189.99, stock: 1,  condition: "MP",  image: "https://images.pokemontcg.io/base1/10_hires.png",  description: "Legendary psychic-type Mewtwo holographic card." },
    { id: 6,  name: "Gyarados",       setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "rare-holo",  price: 129.99, stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base1/6_hires.png",   description: "Fearsome Gyarados holographic with devastating attacks." },
    { id: 7,  name: "Raichu",         setName: "Base Set",        setCode: "BS",  type: "electric",  rarity: "rare-holo",  price: 99.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/14_hires.png",  description: "Evolved form of Pikachu." },
    { id: 8,  name: "Alakazam",       setName: "Base Set",        setCode: "BS",  type: "psychic",   rarity: "rare-holo",  price: 119.99, stock: 2,  condition: "HP",  image: "https://images.pokemontcg.io/base1/1_hires.png",   description: "Mystic Alakazam with powerful psychic abilities." },
    { id: 9,  name: "Charizard GX",   setName: "Burning Shadows",  setCode: "BUS", type: "fire",      rarity: "ultra-rare", price: 449.99, stock: 1,  condition: "NM",  image: "https://images.pokemontcg.io/sm3/150_hires.png",  description: "Rainbow Rare Charizard GX." },
    { id: 10, name: "Umbreon VMAX",   setName: "Evolving Skies",  setCode: "EVS", type: "dark",      rarity: "ultra-rare", price: 599.99, stock: 1,  condition: "NM",  image: "https://images.pokemontcg.io/swsh7/215_hires.png", description: "The legendary Moonbreon." },
    { id: 11, name: "Mew",            setName: "Fossil",          setCode: "FO",  type: "psychic",   rarity: "rare-holo",  price: 89.99,  stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base3/8_hires.png",   description: "Mysterious Mew from the Fossil expansion set." },
    { id: 12, name: "Dragonite",      setName: "Fossil",          setCode: "FO",  type: "normal",    rarity: "rare-holo",  price: 109.99, stock: 1,  condition: "MP",  image: "https://images.pokemontcg.io/base3/4_hires.png",   description: "Gentle giant Dragonite holographic from Fossil set." },
    { id: 13, name: "Ninetales",      setName: "Base Set",        setCode: "BS",  type: "fire",      rarity: "rare-holo",  price: 69.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/12_hires.png",  description: "Elegant Ninetales holographic." },
    { id: 14, name: "Zapdos",         setName: "Base Set",        setCode: "BS",  type: "electric",  rarity: "rare-holo",  price: 84.99,  stock: 2,  condition: "LP",  image: "https://images.pokemontcg.io/base1/16_hires.png",  description: "Legendary bird Zapdos." },
    { id: 15, name: "Articuno",       setName: "Fossil",          setCode: "FO",  type: "water",     rarity: "rare-holo",  price: 79.99,  stock: 2,  condition: "NM",  image: "https://images.pokemontcg.io/base3/2_hires.png",   description: "Legendary bird Articuno." },
    { id: 16, name: "Moltres",        setName: "Fossil",          setCode: "FO",  type: "fire",      rarity: "rare-holo",  price: 74.99,  stock: 3,  condition: "MP",  image: "https://images.pokemontcg.io/base3/12_hires.png",  description: "Legendary bird Moltres." },
    { id: 17, name: "Hitmonchan",     setName: "Base Set",        setCode: "BS",  type: "fighting",  rarity: "rare-holo",  price: 59.99,  stock: 4,  condition: "LP",  image: "https://images.pokemontcg.io/base1/7_hires.png",   description: "Fighting-type Hitmonchan." },
    { id: 18, name: "Machamp",        setName: "Base Set",        setCode: "BS",  type: "fighting",  rarity: "rare-holo",  price: 64.99,  stock: 2,  condition: "HP",  image: "https://images.pokemontcg.io/base1/8_hires.png",   description: "First Edition Machamp holographic card." },
    { id: 19, name: "Poliwrath",      setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "rare-holo",  price: 54.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base1/13_hires.png",  description: "Water-type Poliwrath." },
    { id: 20, name: "Clefairy",       setName: "Base Set",        setCode: "BS",  type: "normal",    rarity: "rare-holo",  price: 49.99,  stock: 5,  condition: "LP",  image: "https://images.pokemontcg.io/base1/5_hires.png",   description: "Fairy-type Clefairy holographic." },
    { id: 21, name: "Vaporeon",       setName: "Jungle",          setCode: "JU",  type: "water",     rarity: "rare-holo",  price: 44.99,  stock: 3,  condition: "NM",  image: "https://images.pokemontcg.io/base2/12_hires.png",  description: "Eeveelution Vaporeon from the Jungle set." },
    { id: 22, name: "Jolteon",        setName: "Jungle",          setCode: "JU",  type: "electric",  rarity: "rare-holo",  price: 44.99,  stock: 2,  condition: "MP",  image: "https://images.pokemontcg.io/base2/4_hires.png",   description: "Speedy Jolteon from the Jungle expansion." },
    { id: 23, name: "Flareon",        setName: "Jungle",          setCode: "JU",  type: "fire",      rarity: "rare-holo",  price: 49.99,  stock: 2,  condition: "DMG", image: "https://images.pokemontcg.io/base2/3_hires.png",   description: "Flame-tailed Flareon from the Jungle set." },
    { id: 24, name: "Squirtle",       setName: "Base Set",        setCode: "BS",  type: "water",     rarity: "common",     price: 12.99,  stock: 10, condition: "NM",  image: "https://images.pokemontcg.io/base1/63_hires.png",  description: "Classic starter Squirtle." },
    { id: 25, name: "Bulbasaur",      setName: "Base Set",        setCode: "BS",  type: "grass",     rarity: "common",     price: 14.99,  stock: 8,  condition: "NM",  image: "https://images.pokemontcg.io/base1/44_hires.png",  description: "Grass starter Bulbasaur." },
    { id: 26, name: "Charmander",     setName: "Base Set",        setCode: "BS",  type: "fire",      rarity: "common",     price: 16.99,  stock: 6,  condition: "LP",  image: "https://images.pokemontcg.io/base1/46_hires.png",  description: "Fire starter Charmander." },
    { id: 27, name: "Rayquaza VMAX",  setName: "Evolving Skies",  setCode: "EVS", type: "normal",    rarity: "ultra-rare", price: 249.99, stock: 2,  condition: "NM",  image: "https://images.pokemontcg.io/swsh7/218_hires.png", description: "Alternate art Rayquaza VMAX." },
    { id: 28, name: "Gardevoir ex",   setName: "Scarlet & Violet", setCode: "SV", type: "psychic",   rarity: "ultra-rare", price: 179.99, stock: 1,  condition: "NM",  image: "https://images.pokemontcg.io/sv1/245_hires.png",  description: "Special illustration rare Gardevoir ex." },
];

let cards = [];

function loadCards() {
    try {
        const saved = localStorage.getItem('pokemart-cards');
        if (saved) {
            cards = JSON.parse(saved);
            return;
        }
    } catch { /* ignore */ }
    cards = JSON.parse(JSON.stringify(defaultCardData));
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
        card.stock = Math.max(0, parseInt(value) || 0);
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
    if (!confirm('Reset ALL cards to default values? This cannot be undone!')) return;
    cards = JSON.parse(JSON.stringify(defaultCardData));
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

// ========== Init ==========
loadCards();
renderStats();
renderTable();
