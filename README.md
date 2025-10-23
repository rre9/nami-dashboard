Nami Dashboard

A modern, responsive merchant dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides comprehensive analytics and management tools for payment processing businesses.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Analytics**: KPI cards with trend indicators
- **Interactive Charts**: Multiple chart types using Recharts
- **Quick Actions**: Common merchant operations
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels
- **TypeScript**: Full type safety and better developer experience

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Tailwind Animate
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: Wouter
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Key Libraries

### Core Dependencies
- **react**: React 18 framework
- **react-dom**: React DOM rendering
- **wouter**: Minimalist routing library
- **recharts**: Composable charting library
- **lucide-react**: Beautiful & consistent icon toolkit
- **clsx**: Utility for constructing className strings
- **tailwind-merge**: Merge Tailwind CSS classes without conflicts
- **tailwindcss-animate**: Animation utilities for Tailwind

### Development Dependencies
- **vite**: Fast build tool and dev server
- **@vitejs/plugin-react**: Vite plugin for React
- **@tailwindcss/vite**: Tailwind CSS Vite plugin
- **typescript**: TypeScript compiler
- **prettier**: Code formatter
- **autoprefixer**: CSS vendor prefixing
- **postcss**: CSS processing

## Installation

## Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

##Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nami-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`


##  Project Structure

```
nami-dashboard/
├── client/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/             # Base UI components
│   │   │   ├── Header.tsx      # Main header component
│   │   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   │   ├── KPICard.tsx     # KPI display cards
│   │   │   └── ...
│   │   ├── pages/              # Page components
│   │   │   └── Home.tsx        # Main dashboard page
│   │   ├── lib/                # Utility functions
│   │   │   └── utils.ts        # Common utilities
│   │   └── main.tsx           # Application entry point
│   ├── public/                # Static assets
│   └── index.html            # HTML template
├── netlify.toml              # Netlify configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts         # Vite configuration


##Development


- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Type checking
- `pnpm format` - Format code with Prettier

##Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Responsive**: Mobile-first design approach

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Memoization**: React.memo for component optimization
- **Lazy Loading**: Dynamic imports for better performance
- **Bundle Optimization**: Tree shaking and minification

## Security

- **Content Security Policy**: Configured for production
- **HTTPS**: Enforced in production
- **Input Validation**: TypeScript interfaces for data validation

## Analytics Integration

The dashboard is ready for analytics integration:
- Google Analytics
- Custom event tracking
- Performance monitoring