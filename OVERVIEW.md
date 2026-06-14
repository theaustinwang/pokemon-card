# PokéMart — Project Overview

> **PokéMart** is a fully client-side Pokémon TCG storefront web application. Built with vanilla HTML/CSS/JS, all data persists in `localStorage` — no backend, no database, no build tools.

---

## Quick Facts

| Item | Detail |
|------|--------|
| **Stack** | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| **Font** | Google Fonts — Poppins (300–800) |
| **Image Source** | `images.pokemontcg.io` (official Pokémon TCG API CDN) |
| **Storage** | `localStorage` only (no server, no database) |
| **Deployment** | Just open `index.html` in a browser |
| **Admin Password** | `admin123` |
| **Commit Convention** | [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `style:`, etc.) |

---

## File Structure

```
pokemon card shop/
├── index.html          # Storefront (single-page app)
├── script.js           # All storefront logic (~1945 lines)
├── style.css           # All styles (~2487 lines)
├── admin.html          # Admin dashboard
├── admin.js            # Admin logic (~736 lines)
├── OVERVIEW.md         # This file — project documentation
├── README.md           # Original readme
├── .gitignore          # Excludes .codebuddy/memory/ and .codebuddy/skills/
├── images/
│   └── lotto/          # Lottery prize images (optional, uses SVG fallback)
└── .codebuddy/
    ├── skills/
    │   └── auto-commit/   # Auto-commit skill (gitignored — local only)
    └── memory/            # Cross-session AI context (gitignored — local only)
```

---

## Pages

### 1. Storefront (`index.html` + `script.js` + `style.css`)

The main customer-facing single-page app with these sections:

- **Header** — Fixed navbar with logo, nav links (Shop / New Arrivals / Draws), search box, wishlist dropdown, cart button, mobile menu
- **Hero** — Animated hero with "Most Valuable Cards" top-3 display
- **Lottery / Draws** — Per-prize draw cards; each draw has its own ticket price & winning number
- **Filter Bar** — Sticky bar with type/rarity filter chips and sort dropdown
- **Product Grid** — Responsive card grid with condition-based pricing rows
- **Newsletter** — Email signup form
- **Footer** — Links, social icons, hidden admin trigger
- **Cart Sidebar** — Slide-in panel with quantity controls, currency selector, store credit
- **Modals** — Checkout confirmation, lottery result, ticket purchase

Key features:
- **Condition-based stock**: Cards have per-condition stock (NM, LP, MP, HP, DMG) with configurable price multipliers
- **Mystery Products**: Mystery Pack ($24.99) and Mystery PSA Slab ($99.99) with animated cards
- **Wishlist**: Heart button on each card; dropdown shows wishlisted items with quick-add to cart
- **Currency**: Switch between GBP (£) and USD ($); exchange rate configured in admin
- **Store Credit**: GBP-based credit that auto-applies at checkout
- **Best Sellers**: Tracks purchases (30-day window) for ranking
- **New Arrivals**: Flags cards restocked in the last 7 days
- **Keyboard Shortcuts**: `Ctrl+K` to focus search, `Esc` to close panels

Data model for a card:
```js
{
  id: 1,
  name: "Eevee ex",
  setName: "Prismatic Evolutions",
  setCode: "PRE",
  type: "normal",        // fire, water, grass, electric, psychic, etc.
  rarity: "ultra-rare",  // common, rare-holo, ultra-rare, hyper-rare
  price: 249.99,         // USD base price (NM)
  stocks: { NM: 1, LP: 0, MP: 0, HP: 0, DMG: 0 },
  image: "https://images.pokemontcg.io/...",
  description: "...",
  lastRestocked: 1234567890000
}
```

### 2. Admin Dashboard (`admin.html` + `admin.js`)

Protected by password (`admin123`), session-based auth. Manages:

- **Inventory Table** — View/edit card price, per-condition stock. Add/delete cards. Auto-saves on change
- **Stats Row** — Total listings, total stock, inventory value, out-of-stock count, most common condition
- **Currency Settings** — Set GBP exchange rate
- **Condition Multipliers** — Set price percentages for NM/LP/MP/HP/DMG
- **Draws Management** — Per-draw: name, image upload/URL, ticket price, winning number. Add/remove draws
- **Mystery Products** — Edit stock and price for Mystery Pack and Mystery PSA Slab
- **Reset All** — Restore default cards and lottery config

---

## localStorage Keys

| Key | Content | Used By |
|-----|---------|---------|
| `pokemart-cards` | Card inventory array | Both |
| `pokemart-cart` | Shopping cart items | Storefront |
| `pokemart-currency` | Selected currency (`GBP`/`USD`) | Storefront |
| `pokemart-exchange-rate` | GBP exchange rate (default `0.79`) | Both |
| `pokemart-store-credit` | Customer store credit balance | Storefront |
| `pokemart-wishlist` | Array of wishlisted card IDs | Storefront |
| `pokemart-purchases` | Purchase log for best sellers | Storefront |
| `pokemart-mystery-stock` | Mystery product stock counts | Both |
| `pokemart-mystery-prices` | Mystery product prices | Both |
| `pokemart-lottery-config` | Draw definitions | Both |
| `pokemart-lottery-tickets` | Purchased tickets by draw | Storefront |
| `pokemart-condition-multipliers` | Condition price multipliers | Both |
| `pokemart-admin-auth` | Admin session flag (`sessionStorage`) | Admin |

---

## Condition System

Each card tracks stock per condition (NM, LP, MP, HP, DMG). Prices adjust by multiplier:

| Condition | Label | Default Multiplier | Color |
|-----------|-------|-------------------|-------|
| NM | Near Mint | 1.00× (100%) | `#22c55e` |
| LP | Lightly Played | 0.90× (90%) | `#4ade80` |
| MP | Moderately Played | 0.75× (75%) | `#facc15` |
| HP | Heavily Played | 0.55× (55%) | `#f97316` |
| DMG | Damaged | 0.35× (35%) | `#ef4444` |

Multipliers are editable in the admin panel. Storefront stacks condition rows in each product card.

---

## Lottery / Draws System

Each draw is an independent prize with:
- Unique ID
- Prize name
- Image (custom upload, URL, or SVG fallback)
- Ticket price (USD)
- Winning number (1–99,999)
- Customers buy tickets with auto-assigned random numbers; matching numbers per draw win the prize

Draw data is shared between admin and storefront via `localStorage`.

---

## Design System

- **Theme**: Dark (`#0a0a1a` background) with vibrant accents
- **Primary**: Orange gradient (`#ff6b35` → `#ffcc02`)
- **Secondary**: Purple gradient (`#7c5cfc` → `#ec4899`)
- **Border**: `rgba(255,255,255,0.08)`
- **Font**: Poppins (Google Fonts)
- **Responsive**: Breakpoints at 1024px, 768px, 480px, 380px
- **Animations**: CSS keyframes for hero entrance, card hover lifts, button bumps, modal pop-ins, mystery card border gradient

---

## Auto-Commit Skill

Project skill at `.codebuddy/skills/auto-commit/` (gitignored — local only):
- Activated after code changes
- Runs `git add -A` and commits with a conventional-commit message
- Pushes to `origin main` after each successful commit
- Includes `scripts/auto_commit.py` for standalone use
- **Exclusions**: `.codebuddy/memory/` and `.codebuddy/skills/` are in `.gitignore` and will never be committed — the skill itself and AI memory stay local

---

## How to Run

```bash
# Just open any HTML file in a browser:
start index.html     # Storefront
start admin.html     # Admin (password: admin123)

# Or serve with any static server:
npx serve .
```

No dependencies, no build step, no npm install required.

---

## Development Notes

- The `defaultCardData` array in `script.js` and `admin.js` must be kept in sync — it's the seed data for first-time visitors
- Admin changes persist in `localStorage` and immediately reflect on the storefront
- Card images load from `images.pokemontcg.io` with SVG placeholder fallbacks generated inline
- Lottery prize images use custom SVGs as fallbacks when local images aren't found
- Cart uses a composite `cartKey` (`{cardId}_{condition}`) to distinguish same-card different-condition items
