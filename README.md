# MAISON — Minimal Lifestyle Store

A responsive front-end shopping website built with vanilla JavaScript, HTML, and CSS. Designed with a minimalist aesthetic and focused on clean code structure and practical user experience.

## Features

- Homepage with hero banner and featured products
- Product listing page with price-based sorting
- Product detail page with image lightbox and quantity selector
- Add to Cart and Buy Now actions
- Cart page with quantity adjustment and item removal
- Checkout form with real-time order summary
- Order confirmation page
- Cart persistence across sessions via localStorage

## Tech Stack

- HTML5 / CSS3 / JavaScript (ES6+)
- localStorage for client-side state management
- No frameworks or libraries

## Architecture

- Unidirectional data flow — all operations modify a central data array, then trigger a render function to rebuild the UI
- Modular JS files per page with a shared `data.js` for global state and utilities
- CSS split into `global.css` for shared styles and per-page stylesheets

## Getting Started

1. Clone the repo
```bash
   git clone https://github.com/LuTingDin/shopping-site.git
```
2. Open `index.html` with Live Server (VS Code extension)