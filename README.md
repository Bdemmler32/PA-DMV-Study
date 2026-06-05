# 🚗 PA DMV Study — Pennsylvania Driver's License Prep

A fully offline-capable, multi-user study platform for the Pennsylvania DMV written knowledge test and road test.

## Features

- **8 Profile Slots** — Multiple users on one device, each with their own PIN and progress tracking
- **4-Digit PIN Login** — Tap-pad interface, stored locally (no accounts, no internet required)
- **Study Guide** — 7 organized modules covering the full PennDOT knowledge base
- **Road Sign Gallery** — Visual sign reference pulled from Wikimedia Commons (requires internet for images)
- **Flashcards** — 25+ cards with flip animation and Know It / Review Again tracking
- **Practice Quiz** — Timed, filterable by module, with detailed explanations
- **Mock Exam** — 18 questions, 15 correct to pass (83%) — mirrors the real PA test format
- **Progress Tracking** — Dashboard showing modules completed, quiz history, exam scores, and weak areas

## Topics Covered

1. Road Signs & Signals (shapes, colors, pavement markings, traffic signals)
2. Traffic Laws & Right-of-Way (intersections, passing, merging, pedestrians, school buses)
3. Speed Limits & Fines (PA defaults, points system, suspension thresholds)
4. Safe Driving Practices (defensive driving, weather, distractions, seat belts, sharing the road)
5. DUI / Alcohol & Drugs (BAC limits, tiers, implied consent, penalties, ARD)
6. Parking & Stopping Rules (prohibited zones, hill parking, disabled spaces)
7. Road Test Requirements (GDL stages, eligibility, what examiners test, common failures)

## Setup

### Option 1: GitHub Pages (Recommended)
1. Fork or clone this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, root (`/`)
4. Your site will be live at `https://yourusername.github.io/pa-dmv-study`

### Option 2: Local
Just open `index.html` in any modern browser. No server needed.

> ⚠️ Road sign images load from Wikimedia Commons and require an internet connection. All other content works offline.

## Data & Privacy

All data is stored in `localStorage` on the user's device. No data is sent to any server. Profiles and progress are device-specific.

## Customization

- **Add questions** — Edit `js/data.js`, the `questions` array. Follow the existing format.
- **Add modules** — Add entries to `PA_DATA.modules` in `js/data.js`
- **Add signs** — Add entries to `PA_DATA.signs` with a Wikimedia Commons image URL
- **Add flashcards** — Add `{ front, back }` entries to `PA_DATA.flashcards`

## Stack

Plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no dependencies. Works in any modern browser.

---

*Based on the PA Driver's Manual and PennDOT official guidelines. Always study the official PA Driver's Manual before your test.*
