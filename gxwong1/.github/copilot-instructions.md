<!--
  Generated helper file for AI coding agents working on this repo.
  Purpose: give concise, project-specific instructions so an AI can be productive immediately.
-->

# Copilot / AI agent instructions — estatewealthmy

Quick summary
- This repository’s main application lives in `estatewealthmy/` — a Next.js app using the App Router (`src/app`).
- Primary tech: Next.js (App Router), React (client components using `"use client"`), TypeScript, Tailwind CSS, Framer Motion.
- Path alias: `@/*` -> `./src/*` (see `estatewealthmy/tsconfig.json`).

Useful commands (run from the repo root or from `estatewealthmy/`)
```bash
# install deps
cd estatewealthmy
npm install

# development server
npm run dev

# build for production
npm run build
npm run start

# lint (project uses ESLint)
npm run lint
```

Why this structure matters
- `estatewealthmy/src/app` uses Next.js App Router and server/client boundaries. Files with `"use client"` at the top are client components and may import browser-only libraries (e.g., `framer-motion`, `useState`).
- Shared UI components live under `estatewealthmy/src/components/` with two subfolders of interest:
  - `layout/` — app-level layout pieces (e.g., `Header.tsx`, `Footer.tsx`).
  - `ui/` — generic primitives (e.g., `Button.tsx`, `Card.tsx`). Follow existing props and className passthrough patterns when adding components.
- Global styles and Tailwind: `src/app/globals.css` and `tailwind.config.ts` define color tokens and font variables. Use the defined token names (e.g., `primary`, `secondary`) rather than hardcoded colors.
 - Global styles and Tailwind: `src/app/globals.css`, `src/styles/tokens.css` and `tailwind.config.ts` define color tokens and font variables. Prefer using the centralized `src/styles/tokens.css` variables for any non-Tailwind CSS and use Tailwind token names in classNames.

Conventions and patterns to follow
- Imports use the `@/` alias: e.g. `import Button from '@/components/ui/Button'` — prefer this for consistency.
- Client components are explicitly marked: retain or add `"use client"` only when the component uses browser APIs, hooks, or state.
- Animation is implemented with `framer-motion` and inline motion configs (see `src/app/page.tsx`). Reuse the same object patterns (initial/animate/transition) for consistency.
- Accessibility patterns: header uses `sr-only` labels and visible focus states. Preserve these in interactive controls.

Key files to reference when making changes
- App entry + fonts + global layout: `estatewealthmy/src/app/layout.tsx`
- Home page: `estatewealthmy/src/app/page.tsx`
- Header / Footer layout: `estatewealthmy/src/components/layout/Header.tsx`, `Footer.tsx`
- UI primitives: `estatewealthmy/src/components/ui/Button.tsx`, `Card.tsx`
 - UI primitives: `estatewealthmy/src/components/ui/Button.tsx`, `Card.tsx`, `Input.tsx` (new)
- TypeScript paths: `estatewealthmy/tsconfig.json` (alias `@/*`)
- Tailwind tokens: `estatewealthmy/tailwind.config.ts` and `estatewealthmy/src/app/globals.css`
 - Tailwind tokens: `estatewealthmy/tailwind.config.ts`, `estatewealthmy/src/app/globals.css`, and centralized CSS variables in `estatewealthmy/src/styles/tokens.css`

Notes about tokens and primitives
- `src/styles/tokens.css` contains CSS variables for colors and fonts. Import it from `src/app/globals.css` so both Tailwind and hand-written CSS share the same values.
- Use `Input` at `src/components/ui/Input.tsx` for accessible inputs with label and error UI. It follows the project's className and focus patterns.
- Project scripts & deps: `estatewealthmy/package.json`

Testing / linting / build notes
- There are no test scripts defined in `package.json`. If you add tests, prefer keeping them colocated (e.g., `__tests__` next to components) and update `package.json` with a `test` script.
- Linting: `npm run lint` is available; run it after modifying code.

What NOT to change without confirmation
- Global color tokens in `tailwind.config.ts` — many components rely on them.
- The `@/` path alias in `tsconfig.json` — changing it will break many imports unless you update every file.

Small examples (copy-paste style)
- Import a Button primitive:
  - `import Button from '@/components/ui/Button'`
- Mark a component client-side if it uses state or effects:
  - Top of file: `"use client"`

If you modify project configuration
- After dependency changes, run `npm install` and `npm run dev` locally to verify no types/build errors.

If anything here is unclear or you need more detail (tests, CI, or API/data patterns), tell me which area and I will expand the instructions or add examples.
