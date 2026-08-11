# Hooman Yarahmadi — Personal Portfolio

A resume-style personal website for **Hooman Yarahmadi**, focused on Java/Spring backend engineering, banking and fintech systems, distributed consistency, concurrency, security, and production reliability.

## Live site

The site is deployed with GitHub Pages from the `main` branch:

`https://hoomandevp.github.io/personal-website/`

## Highlights

- responsive single-page portfolio and resume
- dark/light theme toggle
- print-friendly layout for **Print / Save as PDF**
- selected professional experience
- backend engineering expertise and technology stack
- featured open-source projects
- high-level banking/fintech engineering work
- LinkedIn, GitHub, and email contact links
- SEO, Open Graph, canonical URL, and Person structured data
- GitHub Actions build validation on pull requests
- automatic GitHub Pages deployment after merge to `main`

## Stack

- Next.js 13
- React 18
- TypeScript
- static export for GitHub Pages
- plain CSS design system

The legacy Mantine-based components are currently left in the repository but are no longer used by the new portfolio page. They can be removed in a follow-up cleanup once the new version is accepted.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npx --no-install next export
```

The static output is generated in `out/`.

## Deployment

`.github/workflows/nextjs.yml` builds the site on pull requests and deploys it to GitHub Pages when changes reach `main`.

## Featured projects

- [AntiVibe Spring](https://github.com/HoomanDevp/antivibe-spring)
- [Concurrent Balance Service](https://github.com/HoomanDevp/concurrent-balance-service)
- [Omnia](https://github.com/HoomanDevp/omnia)
- [Reservation System](https://github.com/HoomanDevp/reservation)

## License

MIT — see [LICENSE](LICENSE).
