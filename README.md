# Moses Goddey Joseph | Software Engineering Portfolio

> An evidence-led portfolio for Moses Goddey Joseph, a software engineer focused on building practical full-stack web applications.

This repository contains the source code for my personal portfolio. It presents selected projects with live links, project records, case-study modals, and direct contact options.

## Portfolio Highlights

The portfolio is designed as a clear record of real work. It includes responsive layouts, accessible interactions, keyboard-focus states, subtle project-card feedback, scroll-triggered content reveals, and reduced-motion support.

| Area | What it includes |
|---|---|
| About | Professional background, core capabilities, and technical stack |
| Projects | Full-width project records with screenshots, live links, and case studies |
| Resume | A direct link to the current résumé PDF |
| Contact | A working Formspree contact form with validation and delivery feedback |
| FAQ | Concise answers about the portfolio and project availability |

## Featured Projects

| Project | Description | Availability |
|---|---|---|
| [Chophouse Kitchen](https://chphouse.duckdns.org) | A full-stack restaurant ordering progressive web application with ordering, reservations, custom cake requests, order tracking, role-based workflows, email-OTP authentication, and tested Paystack payments. | Live |
| [ArtConnect](https://artconnect.duckdns.org) | A Laravel digital-art marketplace with artist, buyer, and administrator roles, Paystack, escrow workflows, auction bidding, Pusher messaging, and one-to-one WebRTC calls. | Live |
| [PAAUMENTOR](https://paaumentor.duckdns.org/) | A Laravel mentorship platform supporting multi-role workflows, mentorship progression, certificate governance, and Gemini-generated CBT assessments. | Live |
| Student Management System | A team-assigned internship project that Moses implemented, featuring administrator and student access, course registration, CGPA computation, result checking, and user-management workflows. | Not currently hosted |
| [Warri Wolves](https://warriwolves-nugumrug.manus.space/) | A live project presented as part of the portfolio’s additional project records. | Live |

## Technology

| Category | Tools |
|---|---|
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| UI and interaction | Radix UI, Framer Motion, Lucide React |
| Forms | Formspree, browser Fetch API |
| Tooling | pnpm, ESLint-compatible TypeScript checks, Prettier |
| Deployment | Vercel |

## Run Locally

### Requirements

Install **Node.js 22** and **pnpm** before continuing.

### Installation

```bash
git clone https://github.com/MosesGoddey/my-portfolio.git
cd my-portfolio
pnpm install --frozen-lockfile
pnpm dev
```

Vite will print the local address in the terminal. Open that exact address in your browser. It will usually be `http://localhost:3000`.

## Available Commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Runs the portfolio locally in development mode. |
| `pnpm build` | Creates the production build. |
| `pnpm preview` | Previews the built portfolio locally. |
| `pnpm check` | Runs TypeScript checks without creating files. |
| `pnpm format` | Formats the repository with Prettier. |

## Build and Deploy with Vercel

This is a static Vite portfolio and does not require a database or environment variables.

1. Import `MosesGoddey/my-portfolio` into Vercel.
2. Select the **Vite** framework preset.
3. Keep the Root Directory as `./`.
4. Use the following build settings.

| Vercel setting | Value |
|---|---|
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm build` |
| Output Directory | `dist/public` |
| Environment Variables | Leave empty |

5. Click **Deploy**. Future pushes to the `main` branch will trigger a new Vercel deployment automatically.

## Contact Form

The contact form submits directly to Formspree. The endpoint is intentionally public because it is used by the browser, and it does **not** require or expose an email password.

The form endpoint is configured in:

```text
client/src/pages/Home.tsx
```

For future protection, manage allowed domains and spam settings in the Formspree dashboard. Do not add Gmail passwords, API keys, or other private credentials to this repository.

## Update Portfolio Content

| What to change | Main file |
|---|---|
| Project content, links, résumé URL, and Formspree endpoint | `client/src/pages/Home.tsx` |
| Visual design, layout, responsive behavior, and motion | `client/src/index.css` |
| Local images used by the standalone portfolio package | `client/public/images/` |

After making changes, test locally and push your work:

```bash
git add .
git commit -m "Describe your update"
git push
```

## Résumé

[View the current résumé PDF](https://drive.google.com/file/d/1WyK5E-xI_TyaxJ49gik6QxXfhAY-sdFZ/view?usp=sharing)

## Author

**Moses Goddey Joseph**  
Software Engineer

- [GitHub](https://github.com/MosesGoddey)
- [LinkedIn](https://www.linkedin.com/in/moses-goddey-855490358/)
- [X](https://x.com/GoddeyJ7)
