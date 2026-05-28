# Terra & Twine | Premium Artisan Marketplace

Welcome to the repository for **Terra & Twine**, a premium, high-aesthetic responsive artisan marketplace interface. Sourced directly from local micro-economies, this interface showcases museum-grade ceramics, hand-tooled leather goods, and hand-carved woodwork.

🚀 **Live Portfolio Demonstration**: [Humam Khan Portfolio](https://humamkhan.vercel.app/)  
🔗 **LinkedIn Profile**: [Connect on LinkedIn](https://www.linkedin.com/in/humamkhan8/)

---

## 🎨 Visual Aesthetics & Layout Design

The user interface of **Terra & Twine** was engineered following modern web guidelines to achieve a highly premium, tactile feel:
- **Warm Earthen Palette**: Uses soft warm linen (`#F9F6F0`), sandstone textures (`#F0EAE1`), rich terracotta clay accent colors (`#B85D3D`), and deep charcoal forest bases (`#2C3531`).
- **Typography & Font Pairing**: Seamless preconnecting and matching of Google Fonts **Playfair Display** (high-contrast display serif for titles) with **Inter** (highly legible clean sans-serif for numbers and metadata).
- **Spacious Layouts**: Built upon fluid modern grids (up to `1360px` max-width) and standard HSL tailoring to avoid color clashes and ensure full visual balance.
- **Micro-Animations & Depths**: Features reactive favorite button heart pulses, subtle card lifts with elegant shadow elevations, hover rotation on action items, and frosted glass elements.

---

## 🎬 Technical Implementation Details: How This Project is Made

This project was built from the ground up prioritizing clean architecture, responsive performance, and strict separation of concerns:

### 1. Separation of Concerns
Originally a single, coupled index file, the project was restructured into clean standalone modules:
- **`index.html`**: Structured semantic markup employing HTML5 standard elements (`<header>`, `<main>`, `<aside>`, `<video>`, `<footer>`) to secure visual structure and native browser accessibility.
- **`index.css`**: Pure custom CSS3. Employs modern CSS layouts (CSS Flexbox for navigation horizons and CSS Grid for the macro marketplace catalog), variables (`:root`), transitions, custom scrollbars, and keyframe animations without any bloated frameworks.
- **`index.js`**: Centralized interactive application state management. Renders dynamic marketplace listing cards, binds sticky navigation transitions, handles responsive hamburger sheets, filters listings, updates the cart subtotal recursively, and dispatches notification toasts.

### 2. Full-Screen Loop Background Video
- Integrates `hero section vid.mp4` as a full-screen, autoplaying background video behind the hero banner.
- Leverages an absolute positioning layout inside a relative section container with `object-fit: cover` to prevent visual distortion across viewports.
- Applies a custom dark overlay mask (`rgba(28, 34, 32, 0.68)`) to maintain strict visual contrast, keeping the white and warm linen titles crystal clear.

### 3. Reactive Marketplace Catalog Engine
- Operates a centralized `PRODUCTS_DATA` state catalog containing premium local assets (Ceramics, Leather, Wood, and Textiles).
- Features dynamic multi-criteria filtering by:
  - Material categories (e.g. Woven Textiles filter showing the updated `Assets/tote bag.jpeg` product).
  - Maximum price slide scales.
  - Custom commission availability checkboxes.
  - Sustainably-sourced eco parameters.
  - Local artisan guild regions.
- Updates search matching and results indicators recursively in the DOM in real-time.

### 4. Interactive E-Commerce Operations
- **Artisan Shopping Bag**: Computes item counts, subtotals, carbon-neutral shipping thresholds, discount matching (supporting codes like `GUILD20` for 20% off, `ARTISAN2025` for 15% off, and `LOCALFIRST` for 10% off), and complete secure mock escrows.
- **Artisan Registry**: High-performance favorites system that stores selections and updates counters interactively.
- **Floating Social FAB Widget**: Built custom floating action buttons positioned fixed in the bottom-left corner of the viewport, enabling instant access to Humam Khan's LinkedIn profile and Portfolio demonstration.

---

## 📁 File Structure

```bash
Project 1 Responsive Artisan Marketplace Interface/
├── Assets/                               # High-resolution local image and video assets
│   ├── ceramics/                         # Hand-thrown ceramic mugs, teapots, and sand glazed sets
│   ├── leather/                          # Full-grain duffels and hand-tooled journal covers
│   ├── Hand-Carved Live Edge Serving Board.jpeg
│   ├── hero section vid.mp4              # Autoplay background hero sequence
│   └── tote bag.jpeg                     # Classic artisan textiles tote bag
├── index.html                            # Semantic structural HTML
├── index.css                             # Custom layout and glassmorphic styling sheet
├── index.js                              # Client-side dynamic state logic
└── README.md                             # Repository and architecture guide
```

---

## 🛠️ Local Development & Deployment

To run the project locally on your machine, simply clone this repository and open the HTML file:
```bash
# Clone the repository
git clone https://github.com/Humam1122/Project-1-Responsive-Artisan-Marketplace-Interface-Decodelabs-Internship-.git

# Navigate into the project folder
cd Project-1-Responsive-Artisan-Marketplace-Interface-Decodelabs-Internship-

# Open index.html in your default web browser
# (On macOS)
open index.html
# (On Windows / Command Prompt)
start index.html
```

---

## 👨‍💻 Sponsoring Guild Artisan
**Humam Khan**  
*Full Stack Web Developer & UX Architect*  
📧 Email: [humamkhan62@gmail.com](mailto:humamkhan62@gmail.com)  
💼 LinkedIn: [humamkhan8](https://www.linkedin.com/in/humamkhan8/)  
🕸️ Portfolio: [humamkhan.vercel.app](https://humamkhan.vercel.app/)  

*Terra & Twine was engineered as a sovereign digital showcase for the Decodelabs Internship.*
