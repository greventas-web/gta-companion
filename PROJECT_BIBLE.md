# GTA Companion - Project Bible

## Project Overview

**Project Name:** GTA Companion  
**Version:** 0.1.0  
**Description:** The Ultimate GTA 6 Companion web application  
**Type:** Next.js 16 Full-Stack Web Application  
**Status:** In Development

This is a Next.js-based web application designed to be a comprehensive companion application for GTA 6 players. The application provides an enhanced user experience with dark theme styling and optimized performance.

---

## Tech Stack

### Core Framework & Runtime
- **Next.js** 16.2.10 - React framework with App Router, API routes, and built-in optimization
- **React** 19.2.4 - UI library for building components
- **React DOM** 19.2.4 - React rendering library for web

### Styling & Design
- **Tailwind CSS** 4.x - Utility-first CSS framework
- **PostCSS** - CSS transformation tool (configured via `postcss.config.mjs`)
- **Tailwind CSS PostCSS Plugin** (@tailwindcss/postcss) - Tailwind CSS PostCSS v4 implementation

### Language & Type Safety
- **TypeScript** 5.x - Strongly typed JavaScript
- **@types/react** 19.x - Type definitions for React
- **@types/react-dom** 19.x - Type definitions for React DOM
- **@types/node** 20.x - Type definitions for Node.js

### Development & Quality
- **ESLint** 9.x - JavaScript linting
- **eslint-config-next** 16.2.10 - Next.js-specific ESLint configuration

---

## Project Structure

```
gta-companion/
├── app/                      # Next.js App Router directory
│   ├── globals.css          # Global styles (Tailwind directives)
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component (/)
├── public/                   # Static assets (images, fonts, etc.)
├── AGENTS.md                # Custom AI agent configuration
├── CLAUDE.md                # Claude-specific instructions
├── PROJECT_BIBLE.md         # This file - project documentation
├── README.md                # Basic project setup guide
├── eslint.config.mjs        # ESLint configuration (ES Module)
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── next-env.d.ts            # Next.js type definitions (auto-generated)
└── package.json             # Project dependencies and scripts
```

---

## Getting Started

### Prerequisites
- **Node.js** 18+ (or compatible version)
- **npm** 7+, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd gta-companion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see the "GTA Companion" title page

### Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `npm run dev` | Start development server with hot reload (default port 3000) |
| `build` | `npm run build` | Build application for production |
| `start` | `npm start` | Start production server (requires `build` first) |
| `lint` | `npm run lint` | Run ESLint code quality checks |

---

## Development Guidelines

### Code Style & Conventions

#### TypeScript
- Use strict mode enabled (enforced by `tsconfig.json`)
- Always provide explicit return types for functions
- Prefer interfaces over types for component props
- Use const assertions where appropriate

#### React Components
- Use functional components with hooks (React 19 style)
- Prefer named exports for components: `export default function HomePage() { }`
- Use TypeScript for all component files (`.tsx`)
- Co-locate styles using Tailwind CSS classes

#### Tailwind CSS
- Use utility-first approach for styling
- Avoid custom CSS when Tailwind utilities suffice
- Place global styles in `app/globals.css`
- Component-specific styles go in respective `.tsx` files

#### File Naming
- Components: PascalCase (`HomePage.tsx`, `Header.tsx`)
- Utilities/helpers: camelCase (`utils.ts`, `helpers.ts`)
- Styles: Same as parent component or `styles.module.css`

### Folder Structure Conventions

**Future Expansion:**
```
app/
├── (routes)/          # Grouped routes
├── components/        # Reusable components
├── hooks/             # Custom React hooks
├── lib/               # Utilities, helpers, constants
├── services/          # API calls, external service integrations
└── types/             # Shared TypeScript types/interfaces
```

---

## Build & Deployment

### Development Build
```bash
npm run dev
```
- Runs with hot module replacement (HMR)
- Source maps enabled for debugging
- No optimizations applied

### Production Build
```bash
npm run build
```
- Optimizes bundle size
- Minifies code and assets
- Generates static pages where possible

### Start Production Server
```bash
npm start
```
- Runs optimized production build
- Requires prior `npm run build`
- Suitable for production environments

### Deployment

**Recommended: Vercel**
- Native Next.js integration
- Automatic deploys from git
- Environment variables management
- See: [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

**Other Platforms:**
- Docker containerization
- Node.js hosting (Heroku, AWS, DigitalOcean, etc.)
- Static export (if applicable)

---

## Configuration Files

### `tsconfig.json`
TypeScript compiler configuration:
- **Target:** ES2017
- **Strict Mode:** Enabled
- **JSX:** react-jsx
- **Module Resolution:** bundler (Next.js)
- **Path Aliases:** `@/*` maps to project root

### `next.config.ts`
Next.js configuration file. Currently minimal; extend as needed for:
- Custom webpack configuration
- Environment variables
- Image optimization
- API routes configuration

### `postcss.config.mjs`
PostCSS configuration for Tailwind CSS v4 integration.

### `eslint.config.mjs`
ESLint configuration using Next.js recommended rules. Run `npm run lint` to check code quality.

---

## Architecture & Conventions

### App Router (Next.js 13+)
- Uses the `app/` directory structure
- `layout.tsx` - Root layout wrapping all pages
- `page.tsx` - Route-specific pages
- Route groups can be created with `(group)/` naming

### Type Safety
- All `.tsx` files use TypeScript
- Path aliases (`@/*`) for cleaner imports
- Type definitions auto-generated in `.next/types/`

### Styling Strategy
- Tailwind CSS for all styling
- Global styles in `app/globals.css`
- Dark theme by default (see `app/page.tsx` for styling example)

---

## Common Workflows

### Adding a New Page
1. Create a folder in `app/`: `app/about/`
2. Add `page.tsx`: 
   ```tsx
   export default function AboutPage() {
     return <main>About Page</main>;
   }
   ```
3. Access at `/about`

### Adding Reusable Components
1. Create `app/components/` directory (if not exists)
2. Create component file: `app/components/Header.tsx`
3. Import in pages or layouts:
   ```tsx
   import Header from '@/app/components/Header';
   ```

### Adding Global Styles
1. Edit `app/globals.css`
2. Use Tailwind CSS directives or custom CSS
3. Automatically applied to all pages

### Adding Environment Variables
1. Create `.env.local` file (not tracked in git)
2. Add variables: `NEXT_PUBLIC_API_URL=https://api.example.com`
3. Access in code: `process.env.NEXT_PUBLIC_API_URL`

---

## Performance & Optimization

### Built-in Next.js Features
- **Image Optimization:** Use `next/image` for optimized images
- **Code Splitting:** Automatic per-route code splitting
- **Font Optimization:** Automatic font loading with `next/font`
- **Static Generation:** Pre-renders static pages at build time

### Best Practices
- Use React 19 features (built-in JSX transform, automatic batching)
- Leverage Tailwind CSS for minimal CSS output
- Minimize third-party scripts
- Use dynamic imports for large components

---

## Debugging

### Development Tools
- **Next.js DevTools:** Built into development server
- **React DevTools:** Browser extension for React debugging
- **Chrome DevTools:** Network, performance, and console debugging

### Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Use `npm run dev -- -p 3001` or kill process on port 3000 |
| TypeScript errors | Run `npm run build` to see full error output |
| Styles not applying | Clear `.next/` folder and restart dev server |
| Module not found | Check path aliases in `tsconfig.json` |

---

## Version History & Notable Updates

### v0.1.0 (Current)
- Initial project setup with Next.js 16.2.10
- React 19.2.4 integration
- Tailwind CSS 4.x styling
- ESLint configuration
- Dark-themed home page
- Custom agent configuration files for AI assistance

---

## Important Notes & Breaking Changes

### Next.js 16 Breaking Changes
Per `AGENTS.md`: This version of Next.js has breaking changes. Always refer to the official documentation in `node_modules/next/dist/docs/` before implementing new features or updating existing code.

### TypeScript Strict Mode
Strict mode is enabled by default. All code must pass strict type checking.

---

## Resources & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [ESLint Documentation](https://eslint.org/docs)

---

## Support & Contribution

For issues or questions:
1. Check the README.md for basic setup help
2. Review `AGENTS.md` for AI agent customization
3. Consult `CLAUDE.md` for Claude-specific instructions
4. Refer to official framework documentation

---

**Last Updated:** 2026-07-03  
**Maintainer:** GTA Companion Development Team
