# Nami Dashboard

A modern and fully responsive merchant dashboard built with React, TypeScript, and Tailwind CSS.
It provides comprehensive analytics and management tools designed for businesses in the payment processing sector.

Live Demo
[View Live Demo](https://nami-dashboard1.netlify.app/)

 GitHub Repository
[View Source Code](https://github.com/rre9/nami-dashboard)

Features

Responsive Design: Optimized for desktop, tablet, and mobile devices.

Real-Time Analytics: KPI cards with trend indicators and summary metrics.

Interactive Charts: Multiple chart types built with Recharts.

Quick Actions: Access common merchant operations efficiently.

Modern Interface: Clean, minimal design with smooth transitions.

Accessibility: Fully WCAG-compliant with ARIA labeling.

TypeScript Integration: Ensures type safety and a better developer experience.

Tech Stack

Frontend: React 18, TypeScript, Vite

Styling: Tailwind CSS, Tailwind Animate

Charts: Recharts

Icons: Lucide React

Routing: Wouter

Package Manager: pnpm

Core Libraries

react – React 18 framework

react-dom – Rendering for React in browsers

wouter – Lightweight routing library

recharts – Composable charting library

lucide-react – Consistent, elegant icon toolkit

clsx – Utility for managing conditional class names

tailwind-merge – Merges Tailwind classes without conflicts

tailwindcss-animate – Animation utilities for Tailwind

Development Dependencies

vite – Fast build tool and dev server

@vitejs/plugin-react – Official Vite plugin for React

@tailwindcss/vite – Tailwind CSS integration with Vite

typescript – TypeScript compiler

prettier – Code formatter

autoprefixer – Adds vendor prefixes to CSS

postcss – CSS processing tool

Installation
Prerequisites

Node.js v18 or higher

pnpm (recommended) or npm

Setup

Clone the repository

git clone <repository-url>
cd nami-dashboard


Install dependencies

pnpm install


Start the development server

pnpm dev


Open your browser
Visit http://localhost:3000

Project Structure
nami-dashboard/
├── client/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/             # Base UI components
│   │   │   ├── Header.tsx      # Main header component
│   │   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   │   ├── KPICard.tsx     # KPI display cards
│   │   │   └── ...
│   │   ├── pages/              # Application pages
│   │   │   └── Home.tsx        # Main dashboard page
│   │   ├── lib/                # Utility functions
│   │   │   └── utils.ts
│   │   └── main.tsx            # Application entry point
│   ├── public/                 # Static assets
│   └── index.html
├── netlify.toml                # Netlify configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration

Development Commands

pnpm dev – Start the local development server

pnpm build – Build the project for production

pnpm preview – Preview the production build

pnpm check – Run TypeScript type checking

pnpm format – Format code with Prettier

Code Quality

TypeScript: Strict type checking enabled

ESLint: Code linting for consistent quality

Prettier: Automatic code formatting

Responsive Layout: Mobile-first design approach

Responsive Breakpoints

Mobile: < 640px

Tablet: 640px – 1024px

Desktop: > 1024px

Performance Optimizations

Code Splitting: Automatic optimization with Vite

Memoization: React.memo for improved performance

Lazy Loading: Dynamic imports for faster load times

Tree Shaking: Removes unused code during build

Security

Content Security Policy: Configured for production

HTTPS Enforcement: Enabled for live environments

Input Validation: Handled through TypeScript interfaces

Mock Data

The dashboard demonstrates functionality using static mock data:

KPI Metrics: Transaction volumes, approval rates, and refunds

Charts: Daily transactions, branch performance, terminal uptime

Transaction History: Recent records with amounts and statuses

Branch Analytics: Performance across different locations

Analytics Integration

Ready for integration with:

Google Analytics

Custom event tracking

Performance monitoring

Notes and Assumptions

All data used is static and for demonstration only

Fully responsive design with mobile-first principles

Lazy loading and bundling optimization for performance

WCAG 2.1 AA accessibility compliance

Supported on modern browsers (Chrome, Firefox, Safari, Edge)

Assignment Summary

Built with React 18, TypeScript, and Vite

Fully responsive across all device sizes

Includes static mock data for all dashboard components

Uses Recharts for visualizations and Tailwind CSS for styling

Deployed on Netlify

Source code hosted on GitHub

Includes complete setup instructions and documentation