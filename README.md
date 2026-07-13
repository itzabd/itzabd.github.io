# Abdullah Hossien — AI/ML Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Personal portfolio and research repository for Abdullah Hossien, AI/ML Engineer and Neurotechnology Researcher. This repository contains the source code for the statically exported web application deployed at [itzabd.github.io](https://itzabd.github.io).

## Overview

The application is engineered as a statically generated Next.js Single Page Application (SPA), emphasizing performance, accessibility, and a modern design system. It serves as a central hub for academic publications, professional experience, and full-stack machine learning projects.

### System Architecture

- **Framework:** Next.js 15 (React 19) utilizing the App Router.
- **Styling Engine:** Tailwind CSS v4 running via PostCSS, extended with vanilla CSS variables for a custom glassmorphism design system.
- **Animation:** Framer Motion for hardware-accelerated viewport transitions and interactive states.
- **API Integration:** 
  - Serverless contact form submission via Web3Forms.
  - Asynchronous data fetching for live GitHub repository statistics.
- **Build Strategy:** Configured for strict static HTML export (`output: "export"`) to ensure compatibility with GitHub Pages infrastructure.

## Local Development Environment

Ensure you have Node.js (v18.17+) installed before proceeding.

```bash
# 1. Clone the repository
git clone https://github.com/itzabd/itzabd.github.io.git
cd itzabd.github.io

# 2. Install dependencies
npm install

# 3. Initialize the development server
npm run dev
```

The application will be available at `http://localhost:3000`.

## Repository Structure

```text
.
├── public/                 # Static assets and vectors
├── src/
│   ├── app/                # Application routing and global stylesheets
│   ├── components/         # Modular React components
│   └── lib/                # Static data models and shared utilities
├── next.config.mjs         # Static export configuration
└── postcss.config.mjs      # Tailwind v4 processing pipeline
```

## Deployment Protocol

This repository is configured for automated deployment to GitHub Pages. The production build generates a static `out/` directory containing optimized HTML, CSS, and JavaScript assets.

To generate a local production build for verification:

```bash
npm run build
```

## License

This source code is distributed under the [MIT License](LICENSE). 
Content, research data, and personal information remain the property of the author.
