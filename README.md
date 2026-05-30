# Breakfast Cafe Website

## Student Information
- **Student Name**: Mphago Mpho
- **Student ID**: ST10519549
- **Course**: BIT0701 / WEDE5020
- **Institution**: Rosebank College

---

## Project Overview
Breakfast Cafe is a fully responsive **static, single-page landing website** for a healthy breakfast restaurant (#1 healthy breakfast restaurant). The site is built with **HTML5, CSS3, and vanilla JavaScript** and requires **no backend** and **no setup**.

**Main entry:** `index.html`

---

## Website Objectives
- Attract customers with an attractive, mobile-friendly online presence.
- Showcase menu items with clear pricing and high-quality images.
- Provide smooth navigation and engaging user interactions (hamburger menu + menu tabs).
- Offer an easy way to contact/submit enquiries via the contact form.

---

## Features (by Section)
- **Header / Navigation**
  - Sticky navigation with logo + links (Home, Menu, About, Gallery, Contact)
  - Mobile hamburger toggle (vanilla JS)
- **Hero / Home**
  - Welcome message, CTA buttons (View Menu, Book Table)
- **Features**
  - Benefit cards: Delicious, Healthy, Tasty
- **About**
  - Cafe story + stats (e.g., 1000+ customers, 5⭐ rating)
- **Menu (Interactive Tabs)**
  - Tabbed menu built with vanilla JS:
    - **Breakfast** (9 items)
    - **Desserts** (8 items)
    - **Dinner** (9 items)
- **Gallery**
  - Responsive grid of dish images
- **Team / Chefs**
  - 4 chef profiles + special offers banner
- **Contact**
  - Address, phone, operating hours, social links
  - Frontend contact form
- **Footer**
  - Copyright and credits

---

## Tech Stack
- **HTML5**: semantic structure
- **CSS3**: flexbox/grid layouts, animations, responsive design (media queries)
- **Vanilla JavaScript**: hamburger menu + menu tab switching
- **Google Fonts**: Poppins
- **Images**: Optimized food photos stored in `/images/`

---

## Responsiveness
- **Mobile-first layout**
- Desktop grids automatically expand from stacked layouts
- Touch-friendly buttons and responsive image grids

---

## Quick Start (Offline-Ready)
1. Open **`index.html`** in your browser.
   ```
   start index.html
   ```

No dependencies, no installs, no server required.

---

## Project Structure
```
Breakfast Cafe Website/
├── index.html          # Main landing page
├── style.css           # Styles
├── style.js            # Scripts (if used separately; otherwise JS may be in index.html)
├── README.md
├── parts 1/            # Section variants / partials (if used)
│   ├── Home.html
│   ├── About.html
│   ├── Menu.html
│   ├── Gallery.html
│   ├── Contact.html
│   └── README.md (if present)
└── images/            # Food photos & assets
    ├── Breakfast/
    ├── Desserts/
    └── Dinner/
```

---

## How to Customize
- **Edit text & prices** directly in the HTML (menu items and contact details).
- **Add menu items**: duplicate a `.menu-item` block inside the relevant tab container.
- **Add images**: place new photos in `/images/` and update the `src` attributes.
- **Theme changes**: edit CSS variables in `style.css`.

---

## License
MIT License

---

⭐ Breakfast Cafe Website complete! 🍳🥞

