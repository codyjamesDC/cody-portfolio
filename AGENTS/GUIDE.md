# 🗺️ Portfolio Build Guide — Cody James Dela Cruz

> This guide breaks the portfolio build into discrete, verifiable steps.
> Each step should be completed and confirmed before moving to the next.

---

## ✅ Step 1 — Scaffold the Project

**Goal:** Initialize a Vite + React + TypeScript project in the repo root.

### Commands
```bash
npx create-vite@latest . --template react-ts
npm install
npm install -D oxlint
```

### What gets created
```
my-portfolio/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
└── src/
    ├── main.tsx
    ├── App.tsx
    └── App.css
```

### ✔ Verify
- `npm run dev` starts a local dev server at `http://localhost:5173`
- You see the default Vite + React splash page in the browser

---

## ✅ Step 2 — Install & Configure Tailwind CSS

**Goal:** Add Tailwind CSS v3 and PostCSS, and configure dark mode via class strategy.

### Commands
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Files to modify
- **`tailwind.config.js`** — set `content` paths and `darkMode: 'class'`
- **`src/index.css`** — add Tailwind directives and import Google Font (Inter)

### ✔ Verify
- A Tailwind utility class (e.g. `className="text-indigo-500"`) renders styled text
- No CSS errors in the browser console

---

## ✅ Step 3 — Set Up Global Design System

**Goal:** Define CSS custom properties (colors, spacing, gradients) and global typography in `index.css`.

### What gets created/modified
- **`src/index.css`** — full design tokens, scrollbar styles, base resets, animation keyframes

### Design tokens
| Token | Value | Purpose |
|---|---|---|
| `--color-bg` | `#F9FAFB` Almost White | Page background |
| `--color-bg-dark` | `#F3F4F6` Light Gray | Deeper / alt backgrounds |
| `--color-bg-card` | `#FFFFFF` Pure White | Card & surface background |
| `--color-text` | `#111827` Carbon Black | Primary text |
| `--color-text-dim` | `#4B5563` Industrial Gray | Secondary / muted text |
| `--color-text-faint` | `#9CA3AF` Muted Gray | Very faint / placeholder text |
| `--color-accent` | `#F59E0B` Amber | Links, active states, CTAs |
| `--color-accent-hover` | `#EA580C` Rust Orange | Hover state for accent elements |
| `--color-accent-dim` | `#D97706` Dark Amber | Pressed states / borders |
| `--color-border` | `rgba(245,158,11,0.25)` | Subtle amber-tinted borders |
| Font | Geist / Inter | Primary typeface |

### ✔ Verify
- Base background and font are applied across the page
- Accent color (Amber `#F59E0B`) appears on links, active nav items, and CTAs
- Hover transitions to Rust Orange (`#EA580C`)

### Dark Mode / Light Mode
The project uses Tailwind's **class-based dark mode** (`darkMode: 'class'` in `tailwind.config.js`).

| Mode | How it activates | Background | Text | Accent |
|---|---|---|---|---|
| **Light** *(default)* | No `dark` class on `<html>` | `#F9FAFB` Almost White | `#111827` Carbon Black | `#F59E0B` Amber |
| **Dark** | `dark` class on `<html>` | Invert via `dark:` utilities | Invert via `dark:` utilities | Same Amber / Rust |

The `ThemeToggle` component in `src/components/ThemeToggle.tsx` adds/removes the `dark` class on `<html>` at runtime and persists the user's preference in `localStorage`.

To add dark-mode overrides to a component:
```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  ...
</div>
```

---

## ✅ Step 4 — Create Data Files

**Goal:** Centralize all CV content in typed TypeScript data files. These are the **only files** you'll ever need to edit to update your portfolio content.

### Files to create (`src/data/`)
| File | Contents |
|---|---|
| `projects.ts` | 5 hackathon/school projects with title, description, tags, links |
| `skills.ts` | Grouped skill sets (Languages, Frameworks, Tools, Design) |
| `experience.ts` | UPLB CS Society roles + Chess Varsity |
| `education.ts` | UPLB BS CS details, honor roll, scholar status |
| `personal.ts` | Name, tagline, bio, email, GitHub, LinkedIn links |

### ✔ Verify
- TypeScript compiles without errors (`npm run build -- --noEmit`)

---

## ✅ Step 5 — Build Layout Components

**Goal:** Build the structural shell: `Navbar` and `Footer`.

### Components to create (`src/components/`)
| Component | Description |
|---|---|
| `Navbar.tsx` | Fixed top nav, smooth-scroll links, active-section highlight, dark/light toggle |
| `Footer.tsx` | Simple centered footer with name + year |
| `ThemeToggle.tsx` | Button that toggles `dark` class on `<html>` |

### ✔ Verify
- Navbar renders with all section links
- Dark/light mode toggle switches the color scheme
- Active link highlights as you scroll

---

## ✅ Step 6 — Build Hero Section

**Goal:** First thing visitors see — name, tagline, avatar, and CTAs.

### Component: `src/components/Hero.tsx`

### Content (from CV)
- **Name:** Cody James Dela Cruz
- **Tagline:** "UI/UX Lead & Full-Stack Developer · 3rd-year CS Student @ UPLB"
- **Bio:** Goal-driven CS student with strong communication, openness to feedback, and adaptability developed through leadership experiences.
- **CTAs:** View Projects (scroll), Download CV (links to `/resume.pdf`)
- **Avatar:** Placeholder image

### ✔ Verify
- Hero section is visually striking and renders correctly on mobile

---

## ✅ Step 7 — Build Experience Section

**Goal:** A vertical timeline of roles and responsibilities.

### Component: `src/components/Experience.tsx`

### Content (from CV — ordered newest first)
1. **UI/UX Lead** — UPLB CS Society *(June 2026 – Present)*
2. **External Committee Member** — UPLB CS Society *(Aug 2025 – Present)*
3. **Code Wars Head, CS Week** *(Aug 2025 – Feb 2026)*
4. **Project Committee Member** *(Jan 2025 – May 2026)*
5. **Web Design Committee Member, CS Week** *(Sep 2024 – Mar 2025)*
6. **MicroCOSSm Committee Member** *(Sep 2024 – Dec 2024)*
7. **UPLB Chess Varsity** *(Apr 2025 – July 2026)*

### ✔ Verify
- Timeline renders cleanly, mobile-friendly

---

## ✅ Step 8 — Build Projects Section

**Goal:** A filterable grid of project cards.

### Component: `src/components/Projects.tsx`

### Content (from CV)
| Project | Event | Tags |
|---|---|---|
| Medicine Supply Chain Intelligence Platform | CICS Hackathon | Python, FastAPI, forecasting |
| AI-Assisted Community Reporting Platform | Hackfest | Svelte, Flutter, FastAPI, AI |
| SMS-Based Agricultural Platform | Innovation Lab Hackathon | SMS, agri-tech |
| Integrated HCI Application | School Project | HCI, UX, prototyping |
| AI-Legal Compliance Assistant | ASES Manila Hackathon | AI, legal-tech |

### Features
- Filter by tag (All / Hackathon / School / AI / Mobile)
- Card hover effects (glassmorphism lift)

### ✔ Verify
- All 5 projects show up
- Filter buttons work correctly

---

## ✅ Step 9 — Build Skills Section

**Goal:** Grouped skill badges with icons/labels.

### Component: `src/components/Skills.tsx`

### Groups (from CV)
- **Languages** — JS, TS, Python, Dart, C, HTML, CSS
- **Frontend & Mobile** — React, Next.js, Svelte, Tailwind CSS, Flutter
- **Backend & Database** — Node.js, FastAPI, PostgreSQL, MongoDB, REST APIs
- **Tools** — Git, LLM APIs, AI Integration, Linux
- **Design** — UI/UX Design, Design Systems, Figma, Wireframing

### ✔ Verify
- All skill groups render with correct labels

---

## ✅ Step 10 — Build Education Section

**Goal:** A clean card showing university details and achievements.

### Component: `src/components/Education.tsx`

### Content (from CV)
- **University:** University of the Philippines Los Baños (UPLB)
- **Degree:** BS Computer Science
- **Period:** Aug 2024 – Jun 2028 (Expected)
- **Honors:** 3× Honor Roll (GWA > 2.0), 1× University Scholar (GWA > 1.45)

### ✔ Verify
- Education card renders with honors badges

---

## ✅ Step 11 — Build Contact Section

**Goal:** Provide ways for recruiters/collaborators to get in touch.

### Component: `src/components/Contact.tsx`

### Links (from CV)
- 📧 `codyjamesberchesdelacruz@gmail.com`
- 💼 `linkedin.com/in/codyjamesdelacruz`
- 🐙 GitHub — placeholder (`github.com/codyjamesdelacruz`)

### ✔ Verify
- All links are clickable and open correctly

---

## ✅ Step 12 — Wire Up App.tsx & Scroll Animations

**Goal:** Compose all sections into the single-page layout. Add scroll-triggered fade-in animations and scroll-spy navigation.

### Files to modify
- **`src/App.tsx`** — import and order all sections
- **`src/hooks/useReveal.ts`** — custom hook for scroll reveal animations
- **`src/hooks/useScrollSpy.ts`** — custom hook for active nav highlighting

### ✔ Verify
- All sections render in correct order
- Sections fade in as you scroll down
- No TypeScript errors

---

## ✅ Step 13 — Configure GitHub Pages Deployment

**Goal:** Set up the project so it can be deployed to GitHub Pages.

### Commands
```bash
npm install -D gh-pages
```

### Files to modify
- **`vite.config.ts`** — add `base: '/my-portfolio/'`
- **`package.json`** — add `deploy` and `predeploy` scripts

### ✔ Verify
- `npm run build` succeeds with no errors
- `dist/` folder is generated correctly

---

## ✅ Step 14 — Final Polish & Review

**Goal:** Responsive check, accessibility audit, SEO meta tags.

### Checklist
- [ ] Mobile layout looks good (375px, 768px, 1280px)
- [ ] All images have `alt` text
- [ ] `<title>` and `<meta description>` set in `index.html`
- [ ] Nav links are keyboard-navigable
- [ ] Passes fast linting check (`npm run lint` using oxlint)
- [ ] No console errors in production build

---

> **💡 Tip:** Your content lives in `src/data/`. To update your portfolio after finishing a new project, just add an entry to `src/data/projects.ts` — no other files need changing.
