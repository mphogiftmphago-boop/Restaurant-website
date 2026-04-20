# Breakfast Cafe Website

## Student Information
**Student Name**: [Mphago Mpho]  
**Student ID**: [ST10519549]  
**Course**: BIT0701/ WEDE5020  
**Institution**: [Rosebank college]  

*(Edit these details as needed)*

## Project Overview
This is a fully responsive static website for **Breakfast Cafe**, the #1 healthy breakfast restaurant. It serves as a single-page landing site featuring key sections: Hero/Home with features, About the cafe, interactive Menu (tabbed: Breakfast, Desserts, Dinner), Gallery of dishes, Team/Chefs showcase, and Contact form. Built with HTML5, CSS3, and vanilla JavaScript, it highlights mouthwatering food images, pricing, and special offers. The site is mobile-first, offline-ready, and requires no backend or setup.

Main entry: `index.html`. Additional HTML files are section variants/partials.

## Website Goals and Objectives
### Goals
- Create an attractive, user-friendly online presence for Breakfast Cafe to attract customers.
- Showcase menu items with high-quality images and pricing to drive reservations/bookings.

### Objectives
- Ensure full responsiveness across devices (desktop, tablet, mobile) with smooth navigation.
- Implement interactive features like menu tabs and hamburger menu for better UX.
- Highlight healthy, delicious breakfast options while promoting dinner/dessert variety.
- Provide easy contact/reservation paths via form and CTA buttons.

## Key Features and Functionality
| Section | Description |
|---------|-------------|
| **Header/Nav** | Sticky navigation with logo, links (Home, Menu, About, Gallery, Contact), mobile hamburger toggle (JS). |
| **Hero/Home** | Eye-catching welcome, CTA buttons (View Menu, Book Table). |
| **Features** | Cards highlighting benefits (Delicious, Healthy, Tasty). |
| **About** | Cafe story with stats (1000+ customers, 5⭐ rating). |
| **Menu** | JS-powered tabs:<br>- Breakfast (9 items, e.g., Classic Pancakes R99.99)<br>- Desserts (8 items, e.g., Fruity Desserts R90.75)<br>- Dinner (9 items, e.g., Ribeye Steak R140.85). |
| **Gallery** | Grid of 8+ food images. |
| **Team** | 4 chef profiles + special offers banner. |
| **Contact** | Address, phone (+27 072-132-0439), hours, frontend form, social links. |
| **Footer** | Copyright info. |

**Tech Stack**:
- HTML5 (semantic), CSS3 (flexbox/grid, animations, media queries), Vanilla JS (nav/tabs).
- Google Fonts (Poppins), 50+ optimized images in `/images/` (categorized folders).

**Responsive**: Desktop grids → Mobile stacked/touch-friendly.

## Timeline and Milestones
| Milestone | Description | Estimated Time |
|-----------|-------------|----------------|
| **Week 1** | Wireframes, basic HTML structure (index.html + sections). | 1 week |
| **Week 2** | CSS styling, responsive design (style.css). | 1 week |
| **Week 3** | JavaScript functionality (menu tabs, mobile nav in style.js), image integration. | 1 week |
| **Week 4** | Polish: Gallery/Contact, testing across devices, documentation (README.md). | 1 week |
| **Complete** | Fully functional site ready for deployment. | 4 weeks total |

## Quick Start
1. Open `index.html` in a browser.
```
start index.html
```
No dependencies needed!

## Project Structure
```
parts 1/
├── index.html     # Main page
├── [Section].html # Partials (Home, About, Menu, etc.)
├── style.css      # Styles
├── style.js       # Scripts
└── images/        # Food photos (Breakfast/, Desserts/, Dinner/)
```

## Customization
- Edit content/prices in HTML.
- Add menu items: Copy `.menu-item` divs in tabs.
- New images: Add to `/images/`, update src.
- Theme: Edit CSS variables.
- Extend JS: Form handling, etc.

## License
MIT License.

---

⭐ Breakfast Cafe Website complete! 🍳🥞
