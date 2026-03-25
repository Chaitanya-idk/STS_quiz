# ez_quiz — Walkthrough

## Files Created

| File | Purpose |
|------|---------|
| [data.js](file:///c:/Projects/STS_quiz/data.js) | 625 questions extracted from Excel (CAT 1: 326, CAT 2: 299) |
| [index.html](file:///c:/Projects/STS_quiz/index.html) | SPA shell with 5 screens |
| [index.css](file:///c:/Projects/STS_quiz/index.css) | Dark theme design system with glassmorphism |
| [app.js](file:///c:/Projects/STS_quiz/app.js) | Quiz engine, routing, state management |

## Full Flow Demo

![Full user flow recording](C:/Users/neeli/.gemini/antigravity/brain/f73cab54-d20e-4f86-a0d7-bf37be263f1d/full_flow_test_1774454618149.webp)

## Screenshots

````carousel
![Landing — Category selection with glassmorphism cards](C:/Users/neeli/.gemini/antigravity/brain/f73cab54-d20e-4f86-a0d7-bf37be263f1d/landing_page_1774454638953.png)
<!-- slide -->
![Mode Selection — Study by Topic or Sequential Order](C:/Users/neeli/.gemini/antigravity/brain/f73cab54-d20e-4f86-a0d7-bf37be263f1d/mode_selection_1774454666265.png)
<!-- slide -->
![Topic Grid — 11 topics with question counts](C:/Users/neeli/.gemini/antigravity/brain/f73cab54-d20e-4f86-a0d7-bf37be263f1d/topic_grid_1774454678008.png)
<!-- slide -->
![Quiz Interface — Question card with options and controls](C:/Users/neeli/.gemini/antigravity/brain/f73cab54-d20e-4f86-a0d7-bf37be263f1d/quiz_interface_1774454691612.png)
<!-- slide -->
![Answer Checked — Green highlight for correct answer](C:/Users/neeli/.gemini/antigravity/brain/f73cab54-d20e-4f86-a0d7-bf37be263f1d/quiz_checked_state_1774454731797.png)
````

## How to Run

```bash
npx -y serve c:\Projects\STS_quiz -l 3000
# Open http://localhost:3000
```
