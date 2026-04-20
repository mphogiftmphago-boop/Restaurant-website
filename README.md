# Breakfast Cafe Website

## Overview

This is a fully responsive static website for **Breakfast Cafe**, the #1 healthy breakfast restaurant. Features include:

- Single-page landing site with sections: Home (Hero + Features), About, Menu (tabbed: Breakfast/Desserts/Dinner), Gallery, Team, Contact
- Mobile-first responsive design with hamburger menu
- Interactive menu tabs (JavaScript)
- Google Fonts (Poppins)
- High-quality food images for menu and gallery
- Contact form (frontend only)
- Sections for chefs/team and special offers

The main entry point is `index.html`, which contains all content. Additional HTML files (e.g., `Home.html`, `About.html`) appear to be partials or development variants of sections.

## Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom styles (`style.css`) with flexbox/grid, animations, media queries
- **Vanilla JavaScript** - (`style.js`) for mobile nav toggle and menu tab switching
- **Images** - Optimized PNG/JPG in `/images/` (breakfast, desserts, dinner categories)
- No backend or dependencies required

## Quick Start

1. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc.)
2. No installation needed – works offline!

**Windows Command:**
```
start index.html
```

## Project Structure

```
c:/Users/mphog/OneDrive/Desktop/parts 1/
├── index.html          # Main landing page (all sections)
├── Home.html           # Hero + Features section variant
├── About.html          # About section
├── Menu.html           # Menu section (tabs)
├── Contact.html        # Likely Contact section (not read, but inferred)
├── Gallery.html        # Likely Gallery section
├── style.css           # All styles (responsive, animations)
├── style.js            # Nav toggle + menu tabs JS
└── images/             # 50+ food images (pancakes, steaks, desserts, etc.)
    ├── Breakfast/
    ├── Desserts/
    └── Dinner/
```

## Features

| Section | Description |
|---------|-------------|
| **Header/Nav** | Sticky nav with logo, links (Home, Menu, About, Gallery, Contact), mobile hamburger |
| **Hero** | Welcome title, CTA buttons (View Menu, Book Table) |
| **Features** | Why choose us? (Delicious, Healthy, Tasty) cards |
| **About** | Cafe story + stats (1000+ customers, 5⭐ rating) |
| **Menu** | Tabbed categories:<br>- Breakfast (9 items, e.g., Pancakes R99.99)<br>- Desserts (8 items, e.g., Tiramisu R90.75)<br>- Dinner (9 items, e.g., Ribeye Steak R140.85) |
| **Gallery** | 8x food image grid |
| **Team** | 4 chef images + special offer banner |
| **Contact** | Address, phone (+27 072-132-0439), hours, form, social links |
| **Footer** | Copyright |

## Customization

- **Edit content**: Update text/prices in `index.html` sections
- **Add menu items**: Duplicate `<div class=\"menu-item\">` in relevant tab (`#breakfast`, `#desserts`, `#dinner`)
- **New images**: Add to `/images/` and reference in HTML
- **Colors/Styles**: Modify `style.css` (variables at top for easy theming)
- **JS Features**: Extend `style.js` for form submission, smooth scroll, etc.

## Responsive Design

- Desktop: Full grid layouts
- Tablet: Adjusted spacing
- Mobile: Stacked cards, hamburger menu, touch-friendly tabs

## Screenshots

(Preview by opening `index.html`)

## License

MIT License – Feel free to use/modify.

---

⭐ **Enjoy your visit to Breakfast Cafe!** 🍳🥞
