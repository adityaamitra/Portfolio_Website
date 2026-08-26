# Aditya Mitra — Personal Portfolio

A fast, dependency-free personal portfolio built with vanilla HTML, CSS, and JavaScript — designed for software engineering roles.

🌐 **Live site:** [adityamitra.vercel.app](https://adityamitra.vercel.app)

---

## Features

- **Single-column scroll** — fixed top nav with scroll-spy and a reading-progress bar; below 860px it collapses to a slide-down menu, with a back-to-top button once you're past the hero.
- **Data-driven projects** — project cards render from [`data/projects.json`](data/projects.json), each with metrics, tech tags, links, and a full case study (sourced from the project READMEs) shown in a modal. If the fetch fails, the section falls back to a card pointing at GitHub.
- **Interactive terminal** — press `` ` `` (or the `>_` button) for a shell with `help`, `projects`, `open <n>`, `matrix`, and a table-tennis easter egg.
- **Motion** — hero name rises letter by letter, section titles decode out of scrambled glyphs, project terminals type themselves out on scroll, the experience timeline draws itself as you read, plus card spotlights, button shine/ripple, and a spark burst on "copy email". Every one of these is disabled under `prefers-reduced-motion`.
- **Accessibility** — AA contrast throughout, focus-trapped overlays with focus restore, visible focus rings, 44px touch targets, skip link.
- **SEO ready** — Open Graph tags and JSON-LD `Person` schema.
- **Fully static** — no build step, no framework, no dependencies beyond Google Fonts.

## Structure

```
portfolio/
├── index.html               # Entire site (HTML + CSS + JS)
├── data/projects.json       # Project data + case-study content
├── Aditya_Mitra_Resume.pdf  # Resume served by the site
└── README.md
```

## Sections

About · Experience · Projects · Skills · Resume · References · Contact

## Editing projects

Each entry in `data/projects.json` supports:

```jsonc
{
  "id": "slug",
  "order": 1,
  "title": "...",
  "period": "2025 — Present",
  "description": "Card blurb",
  "metrics": [{ "value": "175+", "label": "LeetCode problems" }],
  "tags": ["Python", "FastAPI"],
  "repo": "https://github.com/...",
  "demo": "https://...",            // optional
  "demoLabel": "Live demo",         // optional
  "extraLinks": [{ "href": "...", "label": "Demo video" }],
  "caseStudy": {                    // optional — enables the modal
    "intro": "...",
    "sections": [{ "heading": "...", "paragraphs": ["..."] }]
  }
}
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

(A server is needed for the `fetch` of `projects.json`; opening `index.html` directly won't load projects.)

## Deployment

Static site — deploys as-is on Vercel, Netlify, or GitHub Pages.

**Vercel Web Analytics** is wired up with the plain-HTML snippet (no package, no build step):

```html
<script defer src="/_vercel/insights/script.js"></script>
```

It's in the `<head>` of both `index.html` and `404.html`. Vercel serves that path from
the edge once Web Analytics is enabled for the project, so it 404s on `localhost` — that's
expected and harmless. Note the dashboard's Get Started panel defaults to the Next.js
instructions; switch the framework selector to **HTML** to see this one.

## Design

- **Fonts:** Space Grotesk (display) + Inter (body) + JetBrains Mono (labels, tags)
- **Palette:** `#0a0a14` background, violet `#8b5cf6` / cyan `#22d3ee` accents
- Dark only — there's no light theme at the moment.

## Contact

- Email: mitraditya23@gmail.com
- LinkedIn: [linkedin.com/in/mitraditya23](https://www.linkedin.com/in/mitraditya23/)
- GitHub: [github.com/adityaamitra](https://github.com/adityaamitra)
