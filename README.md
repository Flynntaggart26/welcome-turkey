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

### ✈ Planner
- **Itinerary:** 3/5/7-day templates, interest checkboxes (history/nature/beach/food/balloon) → picks route, total € estimate
- **Budget Calculator:** travelers × days × tier (budget/mid/luxury, avg of 12 places, TRY rate note)

### ℹ Essentials
- Visa (evisa.gov.tr), money (TRY, tipping), etiquette (mosques), emergency 112/155/153, transport, best seasons
- Legal: Map ODbL, Leaflet BSD, descriptions original, MIT

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
