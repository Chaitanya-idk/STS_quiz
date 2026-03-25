# ez_quiz

An interactive MCQ quiz web app with a deep dark mode aesthetic, built for STS 4006 exam preparation.

**Live:** Open `index.html` via any static server (e.g. `npx serve .`)

## Features

- **625 MCQ questions** across 2 categories and 21 topics
- **Two study modes** — Study by Topic or Sequential Order
- **Instant feedback** — Check your answer (green/red) or reveal the correct one
- **Fair scoring** — Only answers submitted via "Check" count toward your score; using "Show Answer" does not award points
- **Live score counter** — Track your score in real-time during the quiz
- **Summary dashboard** — Score ring, per-topic breakdown with progress bars
- **Smooth animations** — Page-flip transitions, hover effects, glassmorphism cards
- **Fully responsive** — Desktop and mobile friendly

## Tech Stack

| Tool | Why |
|------|-----|
| **Vanilla HTML** | Simple SPA structure with semantic sections — no framework overhead needed for a single-page quiz |
| **Vanilla CSS** | Full control over the dark mode design system, glassmorphism, keyframe animations, and responsive layout |
| **Vanilla JavaScript** | Lightweight state management, DOM manipulation, and screen routing — keeps the app zero-dependency |
| **Google Fonts (Space Grotesk + Outfit)** | Space Grotesk for bold headings/logo, Outfit for clean body text — modern, geometric pairing |
| **Python + openpyxl** | One-time script to extract Excel data into `data.js` — avoids runtime XLSX parsing in the browser |

## Project Structure

```
STS_quiz/
├── index.html          # SPA shell with all 5 screens
├── index.css           # Dark mode design system
├── app.js              # Quiz engine, routing, state
├── data.js             # Auto-generated question data (from Excel)
├── STS 4006 MCQ's.xlsx # Source data
└── README.md
```

## How to Run

```bash
npx -y serve . -l 3000
# Open http://localhost:3000
```

## Scoring Rules

1. Select an option, then click **Check** → correct answers earn 1 point
2. Clicking **Show Answer** reveals the answer but awards **no points**
3. If you use Show first, then Check — **no points** are awarded
4. Skipped questions earn no points

## Author

[@Chaitanya-idk](https://github.com/Chaitanya-idk)
