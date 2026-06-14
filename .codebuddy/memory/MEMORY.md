# PokéMart — Project Memory

## Project Conventions
- **Commit format**: Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`, `chore:`, `docs:`)
- **Branch**: `main`
- **No build tools**: Pure vanilla HTML/CSS/JS — no npm, no bundler, no framework
- **Data persistence**: Everything via `localStorage` (see OVERVIEW.md for full key list)
- **Admin password**: `admin123` (session-based auth via `sessionStorage`)

## Key Files
- `OVERVIEW.md` — Complete project documentation; use as AI context for future sessions
- `index.html` + `script.js` + `style.css` — Storefront
- `admin.html` + `admin.js` — Admin dashboard
- `.codebuddy/skills/auto-commit/` — Git auto-commit skill

## Design Decisions
- Card images from `images.pokemontcg.io` with inline SVG placeholders on error
- Condition-based inventory (NM/LP/MP/HP/DMG) with percentage price multipliers
- Lottery uses per-draw model (each prize is its own draw with independent ticket price and winning number)
- Mystery products use animated gradient borders and custom SVG fallbacks
- Currency stored as GBP with configurable exchange rate; all card prices in USD
