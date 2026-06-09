---
name: project-portfolio
description: Next.js 16 portfolio site at /Desktop/portfolio-swe — terminal/CLI aesthetic, Cloud & DevOps theme
metadata:
  type: project
---

Portfolio website built with Next.js 16 (App Router) + Tailwind CSS v4.

**Design system:**
- Palette: deep charcoal bg (#0f1117), teal accent (#00d4aa), slate text
- Fonts: JetBrains Mono (headings/code), Inter (body)
- CSS vars in globals.css control all colors (--bg-primary, --accent, --text-secondary, etc.)

**File structure:**
- `app/page.tsx` — root page, imports all section components
- `app/layout.tsx` — fonts, metadata
- `app/globals.css` — CSS variables, animations (cursor-blink, fadeInUp, card-hover)
- `app/components/` — Nav, Hero, About, Experience, Projects, Skills, Contact, Footer

**Section notes:**
- Projects.tsx has placeholder cards — user needs to fill in real project data (title, description, tags, github, demo)
- certBadges in Skills.tsx should be updated with real certifications
- Skills proficiency percentages are estimates — user should adjust

**To run:** `npm run dev` → http://localhost:3000

**Why:** Portfolio site to land Cloud/DevOps SWE full-time roles after graduation April 2026.
