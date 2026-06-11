# PA DMV Study — v03

A complete Pennsylvania driver's license exam preparation platform built as a static web app. All content sourced directly from the **Pennsylvania Driver's Manual (PUB 95)**.

---

## Live Deployment

This app is designed for **GitHub Pages** (or any static file host). No server, database, or build step required — open `index.html` and it runs.

### Deploy to GitHub Pages

1. Unzip the project folder
2. Push all contents to a GitHub repository (keep the folder structure intact)
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Your app will be live at `https://yourusername.github.io/your-repo-name/`

### Run Locally

The signs gallery fetches `assets/sign-database.json` via `fetch()`, so a local HTTP server is required — `file://` URLs will block it.

```bash
cd pa-dmv-v03
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## Features

### Multi-Profile System
- **8 profile slots** — each with a name and 4-digit PIN
- All progress saved to `localStorage` (no account or server needed)
- PIN entry supports both on-screen tap pad and keyboard (digits, Backspace, Enter)
- Profile shows best exam score and exam count in the sidebar footer

### Study Guide
- **8 modules** covering all chapters of the PA Driver's Manual
- Inline sign and diagram images throughout each section
- Click any image to open a full-size lightbox
- Progress tracked per profile (mark module complete)

| Module | Topics Covered |
|---|---|
| Licensing & Permits | GDL stages, knowledge test, vision requirements, documents |
| Traffic Signals & Lights | All signal types, lane control, pedestrian signals, railroad |
| Road Signs | All categories with images, MUTCD codes, pavement markings |
| Traffic Laws & Right-of-Way | Intersections, passing, turns, school buses, pedestrians |
| Speed & Space Management | Speed limits, points table, 4-second rule, space cushion |
| Safe Driving Practices | Defensive driving, distractions, weather, seat belts, trucks |
| DUI / Alcohol & Drugs | BAC tiers, implied consent, penalties, ARD program |
| Parking & Stopping Rules | No-parking zones, hill parking, parallel parking, disabled spaces |

### Road Sign Gallery
- All **163 signs and diagrams** from the PA Driver's Manual
- Filter by category (Regulatory, Warning, Work Zone, Guide, Service, Signals, Scenes, Diagrams)
- Click any sign card to open a detail modal with full meaning, MUTCD code, shape, color, and chapter reference
- Click the image in the modal to open a full-size zoom view

### Flashcards
- **109 cards** covering all 8 topic areas
- ~60 cards include the actual sign or diagram image on the card face
- Filter by topic category to drill one subject at a time
- Know It / Review Again sorting with retry-missed round
- Score ring summary at end of each deck

### Practice Quiz
- **100-question bank** covering all modules
- Configurable: choose question count (10 / 20 / 30 / all), module filter, and time per question (15s / 30s / 60s / unlimited)
- Sign images displayed inline for sign-identification questions
- Correct answer explanation shown after each question
- Missed questions listed with explanations in the results screen

### Mock Exam
- **18-question format** matching the real PA knowledge test
- Stratified question selection across all topic areas
- Must answer all 18 before submitting
- **Pass threshold: 15 correct (83%)** — same as PennDOT
- Progress dot map at top; click any dot to jump to that question
- Full answer breakdown with explanations after submission
- Best score and pass/fail history saved to profile

---

## Asset Library

### Counts

| Category | Signs / Graphics |
|---|---|
| Regulatory Signs | 32 |
| Warning Signs | 48 |
| Work Zone Signs | 14 |
| Guide / Highway Signs | 13 |
| Service Signs | 8 |
| Traffic Signals | 21 |
| Scene Diagrams | 8 |
| Technical Diagrams | 19 |
| **Total** | **163** |

**170 PNG files total** (some legacy auto-cropped files remain in the warning folder from earlier extraction — they are not referenced by the database and can be removed).

### Folder Structure

```
assets/
├── sign-database.json          ← Master database (163 records)
├── signs/
│   ├── regulatory/             ← reg_*.png  (32 files)
│   ├── warning/                ← warn_*.png (48 files)
│   ├── work_zone/              ← wz_*.png   (14 files)
│   ├── guide/                  ← guide_*.png (13 files)
│   ├── service/                ← svc_*.png  (8 files)
│   └── signals/                ← sig_*.png  (21 files)
├── scenes/                     ← scene_*.png (8 files)
└── diagrams/                   ← diag_*.png / pave_*.png (19 files)
```

### Naming Conventions

| Prefix | Category | Example |
|---|---|---|
| `reg_` | Regulatory | `reg_stop.png` |
| `warn_` | Warning | `warn_left_curve.png` |
| `wz_` | Work Zone | `wz_road_work_ahead.png` |
| `guide_` | Guide / Highway | `guide_interstate_shield.png` |
| `svc_` | Service | `svc_hospital.png` |
| `sig_` | Signal | `sig_red_light.png` |
| `scene_` | Scene Diagram | `scene_truck_no_zones.png` |
| `diag_` | Technical Diagram | `diag_hill_parking.png` |
| `pave_` | Pavement Marking | `pave_double_solid_yellow.png` |

### Adding or Replacing Images

All images are **400 × 400 px PNG** with white or transparent backgrounds. To replace a file, drop the new PNG into the correct subfolder using the exact same filename. The database JSON references each file by its relative path from `assets/` — as long as the filename matches, no code changes are needed.

To add a new sign, add a record to `sign-database.json` following the existing structure:

```json
{
  "id": "reg_example",
  "file": "signs/regulatory/reg_example.png",
  "name": "Example Sign",
  "shape": "Rectangle",
  "color": "Black and white",
  "meaning": "Full description from PUB 95.",
  "chapter": 2,
  "tags": ["example", "regulatory"],
  "mutcd_code": "R2-1"
}
```

---

## File Structure

```
pa-dmv-v03/
├── index.html              ← App shell, navigation structure
├── css/
│   └── styles.css          ← All styles (PennDOT blue + gold, responsive)
├── js/
│   ├── data.js             ← 8 study modules, 100 questions, source of truth
│   ├── profiles.js         ← 8-slot profile system, PIN, localStorage
│   ├── app.js              ← Main controller: screens, navigation, dashboard
│   ├── study.js            ← Study guide module reader with image lightbox
│   ├── signs.js            ← Road sign gallery, loads sign-database.json
│   ├── flashcards.js       ← 109 cards with images, category filter
│   ├── quiz.js             ← Timed practice quiz, setup screen
│   └── exam.js             ← 18-question mock exam, dot progress map
└── assets/
    ├── sign-database.json
    ├── signs/...
    ├── scenes/...
    └── diagrams/...
```

---

## Design

- **Typography:** Barlow + Barlow Condensed + DM Mono (Google Fonts)
- **Colors:** PennDOT Blue `#003087` · Gold `#FFC20E`
- **Layout:** Fixed 240px sidebar on desktop; sticky top bar + bottom navigation on mobile
- **Icons:** Font Awesome 6.5 (CDN)
- **No frameworks** — plain HTML, CSS, and vanilla JavaScript. Zero build tooling.

---

## Content Sources

| Source | Used For |
|---|---|
| Pennsylvania Driver's Manual (PUB 95, 4-21 edition) | All study content, questions, and answers |
| MUTCD 11th Edition (2023) | Sign codes in the database |
| PennDOT GDL regulations | Licensing module, exam questions |

> **Note on following distance:** PUB 95 specifies a **4-second** baseline following distance rule (not 3 seconds). This is reflected correctly throughout all study content, flashcards, and quiz questions in v03.

---

## Version History

| Version | Changes |
|---|---|
| v03 | New assets from manual artwork; 12 new signs/diagrams added; 4-second rule corrected throughout; flashcard images added; study guide image lightbox; sidebar profile moved to footer |
| v02 | Full rebuild with sidebar nav, 8-module study guide, sign gallery with MUTCD codes, 100-question bank, mock exam |
| v01 | Initial prototype |
