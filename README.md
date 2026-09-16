# Welcome Turkey — Travel Companion for Tourists

> Offline travel companion for tourists visiting Türkiye: interactive map, phrasebook in 5 languages (TR→EN/DE/RU/AR) with audio, itinerary planner & budget calculator.

**Live:** https://flynntaggart26.github.io/welcome-turkey/ · **Stack:** Vanilla HTML/CSS/JS + Leaflet (BSD) · **Storage:** local, no backend

---

## Features

### 🗺 Discover — 12 Destinations
- **Map:** Leaflet + OpenStreetMap tiles (© OSM, ODbL) — 12 pins with original 1-2 sentence descriptions
- **Cards:** Istanbul, Cappadocia, Antalya, Izmir & Ephesus, Pamukkale, Ankara, Bodrum, Fethiye, Mardin, Trabzon, Konya, Gaziantep — region, best season, budget/day (3 tiers), tip
- Search + region filter, click card → fly to pin
- *No photos bundled — use your own, no copyright.*

### 🗣 Phrasebook — 5 Languages, No Copyrighted Audio
- Categories: Greetings, Transport, Food, Emergency, Shopping (12 phrases)
- TR → EN/DE/RU/AR (short functional phrases, not copyrightable) + **🔊** button → `Web Speech API` (`tr-TR`, OS voice) — no MP3, no API key

### ✈ Planner — Now with PDF & Calendar
- **Itinerary:** 3/5/7-day templates, interest checkboxes → picks route, total € estimate
- **Export:** `🖨 Print PDF` (print view) + `📅 .ics` (add days to Google/Apple Calendar as VEVENTs)
- **Budget & Tip:** travelers × days × tier + **💱 tip calculator** (bill TRY → tip % → total TRY + ~€ at 36 TRY/€ offline)

### 🍽 Food & Allergen Guide (NEW)
- 10 dishes (Baklava, Kebap, Simit, Balık Ekmek, etc.) with original descriptions, price, allergens (nuts/dairy/gluten/meat/fish/sesame)
- Filter by allergen, `Show to waiter` card generates **“Alerjim var: nuts, dairy — please no …”** TR+EN for staff — offline, printable

### 🧠 Culture Quiz (NEW)
- 5-question **Do / Don’t** quiz (shoes in mosque, bargaining, tea, tipping, dress). Instant feedback, score, retry — no tracking

### 🚨 SOS Card — Offline Emergency (NEW)
- Fill name, blood, hotel, contact, embassy, insurance → saved in `localStorage: welcome-sos` (never uploaded)
- Generates **QR** via `qrcodejs` (MIT) encoding `SOS Name | Blood | Hotel | Contact` + card view for offline show. Data stays on device.

### 📍 Nearest to Me (NEW)
- Button in Discover → `navigator.geolocation` + haversine to 12 places, shows nearest + distance + flies map to pin. No server.

### 🧳 Deep Features v1.3 — 6 More (Extremely Careful, Professional)

**1. 🧭 Route Optimizer (TSP)** — Select 3-7 places → **nearest-neighbor + 2-opt** finds shortest loop, total km (haversine), draws polyline on Leaflet, step list. Original algorithm, no Google Directions, no API key.

**2. 📸 Travel Journal** — Date + place + note + mood + cost + **your own photo (dataURL local, max 900KB, never uploaded)**. Grid of polaroid cards, `localStorage: welcome-journal`, export JSON + print PDF. For essay, reflection.

**3. 🗣 Speech Conversation Mode** — In Phrasebook, hold 🎤 → `webkitSpeechRecognition` (`tr-TR`) → offline dictionary (200 words) → translate to EN/DE/RU/AR → speak back via `SpeechSynthesis`. No cloud, no MP3.

**4. 🛡️ Scam & Price Radar** — 5 scams + typical price bars (Çay, Taksi, Halı, Balık ekmek, Hamam). Enter price → `Fair / High / Scam` with tip. Original research, public prices, no scrape.

**5. ♿ Accessibility Lab** — Floating bar: high contrast, large text (115%), dyslexic font, reduce motion — toggles add classes `high-contrast`/`large-text`/`dyslexic`, saved in `localStorage: welcome-a11y`, respects `prefers-reduced-motion`.

**6. 🌦 Climate Normals** — Offline **MGM 1991-2020 public domain** monthly avg temp (12×12) per place, bar chart. Not live forecast, no API, original visualization.

All 12 features are original, offline, MIT, no copyrighted text/photo/audio.

### ℹ Essentials
- Visa (evisa.gov.tr), money (TRY, tipping), etiquette (mosques), emergency 112/155/153, transport, best seasons
- Design: **Bosphorus Nights** — deep navy #070b1a, gold #f59e0b → turquoise #06b6d4, glassmorphism, editorial hero, soft blur
- Legal: Map ODbL, Leaflet BSD, QR MIT (qrcodejs), descriptions/phrases original (1-2 sentences, no copy), MIT

---

## Project structure

```
welcome-turkey/
├── index.html
├── style.css
├── app.js
└── README.md
```

## Getting started

```bash
git clone https://github.com/Flynntaggart26/welcome-turkey.git
cd welcome-turkey
open index.html
```

## License

MIT
