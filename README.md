# PokéMart — Pokémon Card Shop

A fully client-side Pokémon TCG storefront web application. Built with vanilla HTML/CSS/JS. All data persists in `localStorage` — no backend, no database, no build tools.

## Quick Start

```bash
# Just open in a browser:
start index.html     # Storefront
start admin.html     # Admin (password: admin123)
```

No `npm install`, no build step.

## Features

- **Product Grid** — Pokémon cards with condition-based pricing (NM, LP, MP, HP, DMG)
- **Lottery / Draws** — Buy tickets for prize draws with random winning numbers
- **Shopping Cart** — Sidebar cart with quantity controls, currency toggle (GBP/USD)
- **Wishlist** — Save cards to a wishlist, quick-add to cart
- **Mystery Products** — Mystery Pack and Mystery PSA Slab
- **Admin Dashboard** — Manage inventory, draws, currency, condition multipliers

## Files

| File | Purpose |
|------|---------|
| `index.html` | Storefront page |
| `script.js` | Storefront logic |
| `style.css` | All styles |
| `admin.html` | Admin dashboard |
| `admin.js` | Admin logic |
| `OVERVIEW.md` | Detailed project documentation |

## Tech

- **Stack**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Storage**: `localStorage` (13 keys, see OVERVIEW.md)
- **Images**: `images.pokemontcg.io` CDN with SVG placeholders
- **Font**: Poppins via Google Fonts
