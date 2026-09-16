# Welcome Turkey — Travel Companion for Tourists

> **Offline-first travel companion for tourists visiting Türkiye.** Interactive map, 5-language phrasebook with natural Turkish voice, 6-day itinerary planner, budget & tip calculator, food & allergen guide, culture quiz, offline SOS card with QR, route optimizer, travel journal, scam radar, climate normals & accessibility lab.

<p align="center">
  <a href="https://flynntaggart26.github.io/welcome-turkey/"><img src="https://img.shields.io/badge/Live-Demo-0e7490?style=for-the-badge&logo=github&logoColor=white" alt="Live"></a>
  <img src="https://img.shields.io/badge/Stack-Vanilla_JS-f59e0b?style=flat-square" alt="Stack">
  <img src="https://img.shields.io/badge/Offline-First-06b6d4?style=flat-square" alt="Offline">
  <img src="https://img.shields.io/badge/License-MIT-1e1b4b?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Map-Leaflet_+_OSM-1e1b4b?style=flat-square" alt="Map">
</p>

<p align="center">
  <b>Live:</b> <a href="https://flynntaggart26.github.io/welcome-turkey/">https://flynntaggart26.github.io/welcome-turkey/</a> · No install, no account, no tracking — open and go, even without SIM in Cappadocia.
</p>

---

## Table of Contents

- [Why This Exists](#why-this-exists)
- [Demo](#demo)
- [Features](#features)
  - [Discover — 12 Destinations & Map](#-discover--12-destinations--map)
  - [Food & Allergen Guide](#-food--allergen-guide)
  - [Phrasebook — 30 Phrases, 5 Languages, Natural Voice](#-phrasebook--30-phrases-5-languages-natural-voice)
  - [Itinerary Planner & Budget](#-itinerary-planner--budget)
  - [Travel Journal](#-travel-journal)
  - [Route Optimizer (TSP)](#-route-optimizer-tsp)
  - [Scam & Price Radar](#-scam--price-radar)
  - [Culture Quiz](#-culture-quiz)
  - [SOS Card — Offline Emergency](#-sos-card--offline-emergency)
  - [Nearest to Me, Climate & Accessibility](#-nearest-climate--accessibility)
- [Design — Bosphorus Nights](#design--bosphorus-nights)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Data, Legal & Privacy](#data-legal--privacy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License & Credits](#license--credits)

---

## Why This Exists

Most tourist guides are either **online-only** (useless without a Turkish SIM) or **PDFs** (not interactive). Welcome Turkey is built for the reality on the ground: spotty data in Göreme, a bazaar with no Wi-Fi, a waiter who doesn’t speak English, a bus to catch in 20 minutes.

It is **offline-first after first load**, **vanilla JS** (no build, no framework), and **privacy-first** (everything in `localStorage`, never uploaded). All descriptions are original (1–2 sentences, no Wikipedia copy), all audio is OS voice (no MP3, no copyright), all maps are OpenStreetMap (ODbL).

Built to be forked by any student or tourism office — and to read well in a university portfolio as a **product + research + inclusive design** story.

---

## Demo

| Discover (Map + Filters + Nearest) | Food & Allergen | Phrasebook + Turkish Voice |
|---|---|---|
| 12 pins, Leaflet OSM, region filter, fly-to, nearest with geolocation | 10 dishes, allergen chips, “Show to waiter” TR+EN card | 30 phrases, 5 langs, category chips, 🔊 with voice selector |

**Try it live:** https://flynntaggart26.github.io/welcome-turkey/ → *Tap a pin → hear “Merhaba” → generate a 5-day plan → save an SOS card.*

---

## Features

### 🗺 Discover — 12 Destinations & Map

12 curated places, chosen for first-time visitors and for geographic spread:

| # | Place | Region | Best | Tip |
|---|-------|--------|------|-----|
| 1 | Istanbul | Marmara | Apr–Oct | Istanbulkart for all transit |
| 2 | Cappadocia | Central | Apr–Oct | Balloons 5am, wind-dependent |
| 3 | Antalya | Mediterranean | May–Oct | Beach + Perge in one day |
| 4 | Izmir & Ephesus | Aegean | Apr–Oct | Day trip to Ephesus |
| 5 | Pamukkale | Aegean | Apr–Oct | Sunrise before crowds |
| 6 | Ankara | Central | Year | Anıtkabir, quiet transit |
| 7 | Bodrum | Aegean | May–Sep | Book ferries early |
| 8 | Fethiye & Ölüdeniz | Med | May–Oct | Paragliding Babadağ |
| 9 | Mardin | Eastern | Mar–May/Nov | Stone hotel stay |
| 10 | Trabzon & Sumela | Black Sea | May–Sep | Tea plantations |
| 11 | Konya | Central | Year | Thursday Sema |
| 12 | Gaziantep | Eastern | Mar–May/Nov | Food tour essential |

- **Map:** Leaflet 1.9.4 (BSD 2-Clause) + OSM tiles (ODbL). No Google API, no key.
- **Cards:** Search + region filter, `Mid €/day` for 3 tiers (budget/mid/lux), tip line. Click → `map.setView()` + popup.
- **Nearest to Me:** `navigator.geolocation` + haversine to 12 points → nearest name + km + `map.fitBounds()`. No server, no tracking.
- **Climate:** Offline **MGM 1991–2020 normals** (public domain, see Data) — 12×12 monthly avg temps per place, bar chart. Not live forecast, no API.

### 🍽 Food & Allergen Guide

10 dishes with **original descriptions**, price (TRY) and allergens:

`Baklava (nuts, gluten, dairy)`, `Kebap (meat)`, `Lahmacun (gluten, meat)`, `Mantı (gluten, dairy)`, `Simit (gluten, sesame)`, `Balık Ekmek (fish, gluten)`, `Mercimek (none)`, `Künefe (nuts, dairy, gluten)`, `Çiğ Köfte (gluten)`, `Meze (nuts, dairy)`

- Filter by allergen (multi-select, `Set` logic) — dishes without selected allergens stay.
- **“Show to waiter” card:** generates `⚠️ Alerjim var: nuts, dairy — Lütfen yemeğimde ... olmasın. / I have allergy ...` TR+EN, printable via `window.print()`.

### 🗣 Phrasebook — 30 Phrases, 5 Languages, Natural Voice

- **30 phrases** across 5 categories: Greetings, Transport, Food, Emergency, Shopping

  *Greetings:* Merhaba, Teşekkürler, Lütfen, Günaydın, İyi akşamlar, Affedersiniz, Anlamadım, İngilizce biliyor musunuz?, Çok güzel!, Harika!, Güle güle …
  *Food:* Su alabilir miyim?, Vejetaryenim, Hesap lütfen, Çok lezzetli, Acısız olsun …
  *Emergency:* Yardım edin!, Hastane nerede?, Polis nerede?, Kayboldum, Otelim nerede? …

- TR → **EN / DE / RU / AR** (short functional phrases, not copyrightable).
- **🔊 Best natural voice:** `getBestVoice()` prefers `Google Natural/Premium/Neural, Yelda, Emel, Ayda, Cem, Microsoft` per language. Turkish picker **Yelda / Emel / Google Türkçe** (rate 0.88, pitch 1.0; others 0.94/1.03). Selection saved in `localStorage: welcome-tr-voice`. `▶ Dene: Merhaba` test button.
- **Conversation Mode:** Hold 🎤 → `webkitSpeechRecognition` (`tr-TR`) → offline dictionary lookup in `phrases` → speak translation in target lang with natural voice. No cloud, no MP3.

### ✈ Itinerary Planner & Budget

- **Itinerary:** 3/5/7-day templates, interest checkboxes (history/nature/beach/food/balloon) → picks route from 12 places, total `€` = sum of `budget[tier]`. `Generate plan →` renders ordered list.
- **Export:** `🖨 Print PDF` (print view) + `📅 .ics` (creates `BEGIN:VCALENDAR` with `VEVENT`s per day, `DTSTART/DTEND`, downloadable).
- **Budget:** travelers × days × tier (avg of 12 places, TRY 36/€ note).
- **Currency & Tip:** bill (TRY) + tip % (5/10/15) → `tip + total TRY (~€)` offline.

### 📸 Travel Journal

- Fields: date, place (select from 12), note (“what did you feel?”), mood (4), cost (TRY), **photo — your own only, `FileReader → dataURL`, max 900KB, preview, stored in `localStorage: welcome-journal` only, never uploaded**.
- Grid of polaroid cards (photo + date/place/mood/cost/note), delete, `↗ JSON` (`journal.json`) + `🖨 PDF` (print).

### 🧭 Route Optimizer (TSP)

- Select 2–7 places via pills → **Optimize route →** nearest-neighbor + single-pass **2-opt** over haversine distances, total km, ordered list with `→ km` per leg, `L.polyline` on Leaflet + `fitBounds()`. Original algorithm (`haversine`, `routeDist`, `optimizeRoute`), no Directions API.

### 🛡️ Scam & Price Radar

- 5 researched items: Çay, Taksi açılış, Halı, Balık ekmek, Hamam — typical vs scam price, bar (`typical/scam ×100%`), tip.
- **Check a price:** select item + enter price → `✅ Fair / ⚡ High / ⚠️ Scam` with tip. Original research, public prices, no scrape.

### 🧠 Culture Quiz

- 5-question **Do / Don’t** (shoes in mosque, bargaining, tea, tipping, dress). Instant `✅ Correct!` + explanation, score `x/5`, retry. No tracking.

### 🚨 SOS Card — Offline Emergency

- Fields: name, blood/allergies, hotel, emergency contact, embassy, insurance → `localStorage: welcome-sos` (never uploaded).
- Generates card + **QR** via `qrcodejs` (MIT) encoding `SOS Name | Blood | Hotel | Contact` (88×88, `M` correction). Show offline to staff. Data stays on device — KVKK/GDPR safe.

### 📍 Nearest, 🌦 Climate, ♿ Accessibility

- **Nearest:** as above, haversine, no server.
- **Climate:** 12×12 `climateTemps` (MGM normals, public domain) → 12 bars per place, `height = 6 + temp/30*28`, tooltip `J: 6°C`.
- **Accessibility Lab:** Floating bar `♿` — `High contrast (contrast 1.3)`, `Large text (115%)`, `Dyslexic (OpenDyslexic)`, `Reduce motion` — toggles add classes `high-contrast`/`large-text`/`dyslexic`/`no-motion`, saved in `localStorage: welcome-a11y`, respects `prefers-reduced-motion` and `aria-live`.

---

## Design — Bosphorus Nights

- **Palette:** Deep navy `#070b1a` + gold `#f59e0b` → turquoise `#06b6d4`, warm cream `#fdf8f3` is gone — now **dark glass** (`rgba(255,255,255,.05)`, `backdrop-filter: blur(10px)`), gold-turquoise gradients for active states.
- **Typography:** Fraunces 700 for headings (editorial), Inter 500/600/700 for UI. Hero title is gradient text (`#fff → #fde68a → #a5f3fc`).
- **Motif:** Subtle tile SVG pattern (`opacity .04`), radial gold/turquoise glows, 18px cards, 12px inputs, pill nav. `leaflet-tile-pane` desaturated for night.
- **Motion:** `fade` 0.32s on tab switch, `pulse` on listening mic, no motion when `prefers-reduced-motion`.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Vanilla HTML/CSS/JS, no build | Offline-first, single file per concern, fast |
| Map | Leaflet 1.9.4 (BSD) + OSM (ODbL) | No key, offline tiles cacheable |
| Speech | Web Speech API (Recognition + Synthesis) | OS voices, no MP3, no API key |
| QR | `qrcodejs` 1.0.0 (MIT) via cdnjs | Offline after cache, 88×88, `M` |
| Storage | `localStorage` (`welcome-journal`, `welcome-sos`, `welcome-a11y`, `welcome-tr-voice`) | No backend, privacy-first |
| Fonts | Fraunces, Inter via Google Fonts (OFL) | Editorial + UI |
| Icons | Emoji + CSS, no icon font | Zero deps |

---

## Project Structure

```
welcome-turkey/
├── index.html   # 8 tabs: Discover, Food, Phrasebook, Planner, Journal, Safety, Quiz, SOS, Essentials
├── style.css    # Bosphorus Nights — dark glass, gold-turquoise, responsive
├── app.js       # 500+ lines: places, phrases (30), food, quiz, map, journal, route TSP, scam, a11y, climate, speech
└── README.md    # This file
```

---

## Getting Started

```bash
git clone https://github.com/Flynntaggart26/welcome-turkey.git
cd welcome-turkey
open index.html          # or double-click
# no npm, no build
```

Live: **https://flynntaggart26.github.io/welcome-turkey/** (GitHub Pages, `main` → `/`).

---

## Data, Legal & Privacy

- **Map tiles:** © OpenStreetMap contributors (ODbL) — attribution in footer + map.
- **Leaflet:** BSD 2-Clause.
- **QR:** `qrcodejs` MIT — credited here + via CDN.
- **Descriptions & phrases:** Original, 1–2 sentences, short functional phrases — not copyrightable, no Wikipedia copy. No photos bundled — user’s own photos only.
- **Speech:** OS voices, no MP3 bundled — no music, no stock audio.
- **Climate:** MGM 1991–2020 normals, public domain, original visualization (bars, not copy).
- **Privacy:** Everything in `localStorage` on your device. SOS, journal photos, a11y prefs never leave. No analytics, no tracking, no backend. For photos with people, get consent.
- **Not affiliated** with Ministry of Culture and Tourism or any hotel — prices are estimates (TRY 36/€ note).

---

## Roadmap

- [ ] PWA + offline tile cache (Service Worker)
- [ ] Journal location auto-tag from nearest place
- [ ] More phrases (40 → 60) + Romaji for AR
- [ ] Route: 2-opt loop until convergence (currently one pass)

---

## Contributing

PRs welcome — keep it **offline-first, vanilla, no copyrighted assets**:

1. Fork → branch → PR with clear description
2. No stock photos, no scraped text, no non-MIT libs
3. Test in Chrome (Speech) + Firefox (map)

---

## License & Credits

**MIT** — fork, modify, share.

Built with ❤️ for tourists visiting Türkiye — and for a portfolio that shows **product thinking + research (TSP, SM-2 elsewhere) + inclusive design**.

*Last update: September 2026 — v1.3.1 (natural Turkish voice + 30 phrases).*
