---
name: cs-student-portfolio
description: Use this skill whenever a computer science student (or anyone building a student-style tech portfolio) wants a personal portfolio website built, scaffolded, or deployed. Trigger on requests like "build me a portfolio site", "I need a website to show my projects", "help me make a personal site for internship applications", or any mention of a "web portfolio", "personal site", "developer portfolio", or "GitHub Pages site" for showcasing projects, skills, resume/CV, and education. Also use this when the user wants to add a new project to an existing portfolio, restyle one, or deploy one to GitHub Pages. Covers a React + TypeScript + Tailwind single-page site with an interactive project showcase, resume download, and GitHub Pages deployment setup.
---

# CS Student Web Portfolio Builder

## What this produces

A single-page personal portfolio site built with **Vite + React + TypeScript + Tailwind CSS**, deployable to **GitHub Pages**. It's aimed at a 3rd-year (or any) CS student who needs something to link in job/internship applications, resumes, and LinkedIn — not a marketing site, so keep the tone direct and substance-first: the projects and skills should do the talking, not heavy visual flourish.

Default sections (confirm with the user before deviating): **Hero/About, Experience, Projects, Skills, Education, Resume/CV download, Contact**. If the user only wants a subset, or wants extra sections (blog, certifications, hackathons), adjust freely — the section list is a sensible default, not a hard requirement.

"Interactive" here means: smooth-scroll nav with active-section highlighting, filterable/sortable project cards, a light/dark mode toggle, and subtle scroll-triggered animations — not a design goal of maximum flashiness. Favor clarity and fast load times over heavy animation libraries.

## Workflow

1. **Gather content first.** Don't scaffold before you know what's going in it. Ask for (or infer from any uploaded resume/GitHub profile):
   - Name, one-line tagline/role (e.g. "3rd-year CS student @ X University"), short bio
   - 3-6 projects: title, one-line description, tech stack tags, link (GitHub/live demo), optional screenshot
   - Skills, grouped (languages, frameworks, tools) rather than one giant tag soup
   - Education: school, degree, expected grad year, relevant coursework (optional)
   - Contact: email, GitHub, LinkedIn, and a resume/CV PDF to link for download
   - If any of this is missing, use clearly-labeled placeholder content (e.g. "Your Name", "Project One — replace with your real project") so the user can see the real layout and swap content in rather than blocking on a full interview.

2. **Scaffold the project.** See `references/setup-and-deploy.md` for exact commands (Vite + React-TS template, Tailwind install, folder layout). This user works in **VS Code's integrated terminal on Windows** — default to PowerShell-compatible command syntax: use `;` to chain commands instead of `&&` (or better, put multi-step sequences into `npm` scripts in `package.json` so the user only ever runs one `npm run ...` command regardless of shell). Never assume a Unix shell (`ls`, `rm -rf`, `~/`) unless the user says they're using WSL or a different environment.

3. **Build the components.** See `references/components.md` for the component breakdown, interactivity patterns (active-nav-on-scroll using `useScrollSpy`, scroll-reveal using `useReveal`, project filter state, dark mode via a `class` strategy in Tailwind, resume download button), and starter code for each section. Reuse this structure rather than reinventing component boundaries each time — it keeps the codebase easy for the student to keep editing after you're done.

4. **Wire up the resume download.** Put the PDF in `public/resume.pdf` (or ask the user for their actual file) and link it with a plain `<a href="/resume.pdf" download>`. Don't overengineer this with a viewer — a direct download link is what recruiters actually want.

5. **Set up GitHub Pages deployment.** See `references/setup-and-deploy.md` for the `vite.config.ts` `base` path setup, the `gh-pages` package + deploy script approach, and the GitHub Actions workflow alternative. Ask the user which they'd prefer if it's not obvious (a GitHub Actions workflow is more "set and forget" but requires a repo already pushed to GitHub; the `gh-pages` npm package is simpler for a first deploy).

6. **Hand off cleanly.** Tell the user exactly which files to edit to update their own content later (e.g. "your projects live in `src/data/projects.ts` — add a new object there and it shows up automatically"). A student portfolio gets updated every time they finish a new project, so the data should be centralized and easy to touch, not scattered across JSX.

## Key principles

- **Data-driven content, not hardcoded JSX.** Projects, skills, and education should live in typed data files (`src/data/*.ts`) that components map over. This is the single biggest thing that makes a portfolio maintainable for a student who isn't a full-time frontend dev.
- **Keep dependencies lean.** Vite + React + TypeScript + Tailwind is enough. Prefer `oxlint` for fast linting over heavy ESLint configs. Only reach for something like `framer-motion` if the user specifically wants richer animation — don't default to a heavy stack for a site that needs to load fast on a recruiter's phone.
- **Accessibility and responsiveness aren't optional.** Semantic HTML, alt text on project images, keyboard-navigable nav, and a layout that works on mobile — recruiters do look at these on phones.
- **Show, then iterate.** After scaffolding, describe what you built and ask if the content/sections/styling match what they want before doing a large amount of extra polish work.

## Reference files

- `references/setup-and-deploy.md` — Vite/React/TS/Tailwind scaffold commands (Windows/VS Code terminal syntax), project folder structure, and both GitHub Pages deployment approaches.
- `references/components.md` — Component breakdown (Navbar, Hero, Projects, Skills, Education, Resume, Contact, ThemeToggle), the data-file pattern, and starter TypeScript/React code for each.