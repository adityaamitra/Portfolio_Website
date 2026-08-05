# Aditya Mitra — Personal Portfolio

A fast, dependency-free personal portfolio built with vanilla HTML, CSS, and JavaScript — designed for software engineering roles.

🌐 **Live site:** [adityamitra.vercel.app](https://adityamitra.vercel.app)

---

## Features

- **Two-column layout** — sticky sidebar with name, section navigation (scroll-spy), and social links; content scrolls on the right. Collapses to a single column on mobile with sticky section headers.
- **Light / dark theme** — respects `prefers-color-scheme`, persists the choice in `localStorage`, no flash on load.
- **Data-driven projects** — project cards render from [`data/projects.json`](data/projects.json), each with metrics, tech tags, links, and a full case study (sourced from the project READMEs) shown in an accessible modal.
- **Resume section** — inline PDF preview plus download / open-in-new-tab buttons.
- **Subtle polish** — pointer spotlight, scroll-reveal animations, keyboard-accessible modal, skip link.
- **Motion** — hero name rises letter by letter, section titles decode out of scrambled glyphs, project terminals type themselves out on scroll, the experience timeline draws itself as you read, plus card spotlights, button shine/ripple, and a spark burst on "copy email". Every one of these is disabled under `prefers-reduced-motion`.
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

## Design

- **Fonts:** Inter (UI and body) + JetBrains Mono (labels, tags)
- **Dark:** `#0b1120` background, slate text, teal `#5eead4` accent
- **Light:** `#f8fafc` background, slate text, teal `#0f766e` accent

## Contact

- Email: mitraditya23@gmail.com
- LinkedIn: [linkedin.com/in/mitraditya23](https://www.linkedin.com/in/mitraditya23/)
- GitHub: [github.com/adityaamitra](https://github.com/adityaamitra)
