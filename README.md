# FitMaker Gym Landing Page

A responsive one-page gym/fitness landing page built with React, Vite, and Tailwind CSS.

![FitMaker Preview](./Application-Image.png)

## Overview

This project renders a marketing-style homepage for **FitMaker** with a dark theme, bold accent colors, and section-based storytelling. The app is fully componentized and optimized for mobile, tablet, and desktop breakpoints.

## Features

- Responsive fixed navbar with mobile menu toggle
- Hero section with call-to-actions, social proof, and highlight cards
- Stats strip with key business metrics
- Pricing cards with a highlighted “Most Popular” plan
- Program showcase grid with tagged categories and durations
- “Why Choose Us” feature section with icon-based benefits
- Trainer cards with specialties and experience
- Facility gallery with hover overlays
- Community block with CTA and supporting visual collage
- FAQ accordion (expand/collapse interaction)
- Footer with CTA strip, link columns, and social icons

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS + Autoprefixer

## Project Structure

```text
gym-app/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Stats.jsx
│  │  ├─ Pricing.jsx
│  │  ├─ Programs.jsx
│  │  ├─ WhyChooseUs.jsx
│  │  ├─ Trainers.jsx
│  │  ├─ Gallery.jsx
│  │  ├─ Community.jsx
│  │  ├─ FAQ.jsx
│  │  └─ Footer.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install and Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Styling Notes

- Tailwind content scan paths are configured in `tailwind.config.js`.
- Custom brand colors are defined (`gym-red`, `gym-orange`, `gym-dark`, etc.).
- Global font is **Vazirmatn** (loaded via Google Fonts in `index.html`).

## Implementation Notes

- This is a frontend-only project (no backend/API integration).
- Most buttons/links are UI placeholders and do not perform navigation/actions yet.
- Several images are loaded from Unsplash URLs, so internet access is required to view them.

## Design Attribution

- The UI design used in this project was copied from a Figma design.
- I did not create the original design; this repository is only the coded implementation.
