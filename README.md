# Marvis Portfolio

Personal portfolio website built with Next.js 16, Tailwind CSS 4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion (motion v12)
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```


## Project Structure

```
src/
  app/
    globals.css       # Theme variables and global styles
    layout.tsx        # Root layout with fonts and metadata
    page.tsx          # Main page composing all sections
  components/
    Navbar.tsx        # Fixed navigation with mobile menu
    Hero.tsx          # Landing section with intro
    About.tsx         # About me with quick facts
    Experience.tsx    # Work experience at GHA
    Projects.tsx      # Work and personal project cards
    Skills.tsx        # Technical skills grid
    Education.tsx     # Education and certifications
    Contact.tsx       # Contact links (email, LinkedIn, GitHub)
    Footer.tsx        # Footer with social links
    ScrollReveal.tsx  # Reusable scroll animation wrapper
public/
  Marvis_Rego_Resume.pdf
```

## Deployment

Connected to Vercel. Push to `main` or `dev` to trigger a deploy. No additional configuration needed.
