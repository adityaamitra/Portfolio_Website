# Aditya Mitra — Personal Portfolio Website

A production-grade personal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for Software Engineering, DevOps, and AI Engineering roles — featuring live AI tool integrations powered by the Claude API.

🌐 **Live Site:** [adityamitra.framer.website](https://adityamitra.framer.website/) *(current)*
📄 **Resume:** [View on Google Drive](https://drive.google.com/file/d/14bQdxPWwgqRGOER3IMYZqR65xLh-51vB/view?usp=sharing)

---

## ✨ Features

- **9 fully responsive sections** — Hero, About, Skills, Projects, Experience, AI Tools, Resume, Testimonials, Blog, Contact
- **Live AI Chat Widgets** — In-page Claude-powered chatbots for all 4 custom tools (WebPath, DevPath AI, TechPath, PyPath)
- **Custom animated cursor** with smooth ring-follow effect
- **Scroll-triggered fade animations** on all content blocks
- **Resume section** with inline preview and direct download link
- **Contact form** with submission feedback
- **Active nav highlighting** as you scroll through sections
- **Fully static** — no build tools, no dependencies, no frameworks required

---

## 🗂️ Project Structure

```
portfolio/
└── index.html        # Entire site in a single file (HTML + CSS + JS)
└── README.md         # This file
```

No external dependencies beyond Google Fonts (loaded via CDN). Everything lives in one file.

---

## 🧭 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Name, role tags, availability badge, CTA buttons, and stats |
| 02 | **About** | Bio, photo, awards (Star of the Month, NCTTA Champion) |
| 03 | **Skills** | Full-Stack, Backend, Cloud/DevOps, Databases, ML/AI, Design |
| 04 | **Projects** | 6 featured projects with tech stack tags |
| 05 | **Experience** | TCS Systems Engineer role + Northeastern & Amity education |
| 06 | **AI Tools** | 4 Claude-powered tools with live in-page chat previews |
| 07 | **Resume** | Inline preview panel + PDF download and view links |
| 08 | **Testimonials** | 3 references from TCS & Amity University |
| 09 | **Blog** | 4 articles linked to the Framer blog |
| 10 | **Contact** | Email, phone, LinkedIn, GitHub links + contact form |

---

## 🤖 Claude AI Tools

The portfolio showcases 4 custom AI tools built on Claude, each with an embedded live chat widget:

| Tool | Description | Project Link |
|------|-------------|--------------|
| **WebPath** | Full-stack web development guide | [Open](https://claude.ai/project/019c9c1c-b08b-708f-82d3-0e4fb6b4f29c) |
| **DevPath AI** | DevOps mentor — CI/CD, Docker, Kubernetes, AWS | [Open](https://claude.ai/project/019c9c0f-6633-7516-ba6d-0add7b89a278) |
| **TechPath** | Tech career navigator — roadmaps & interview prep | [Open](https://claude.ai/project/019c9103-1ca5-7066-a336-494eb3a3bcc7) |
| **PyPath** | Python learning companion — basics to ML | [Open](https://claude.ai/project/019c9668-66dc-77c3-bf04-8c70009b095f) |

The chat widgets call the Anthropic `/v1/messages` API directly from the browser. Each tool has a unique system prompt defining its persona and expertise. Users can also click **"Launch Full Tool"** to open the full Claude project in a new tab.

---

## 🚀 Deployment

The site is a single static HTML file — deploy anywhere in seconds.

### Netlify (Recommended)
```bash
# Drag and drop index.html into Netlify Drop
https://app.netlify.com/drop
```

### Vercel
```bash
npm i -g vercel
vercel deploy --prod
```

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/adityaamitra/portfolio.git
git push -u origin main
# Enable Pages in repo Settings → Pages → Branch: main
```

### Local Preview
Just open `index.html` in your browser — no server needed.

```bash
open index.html       # macOS
start index.html      # Windows
xdg-open index.html   # Linux
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#080c10` | Primary background |
| `--bg2` | `#0d1318` | Section alternate background |
| `--cyan` | `#00e5d1` | Accent color, highlights, links |
| `--white` | `#f0f4f8` | Primary text |
| `--gray` | `#7a8a9a` | Secondary text |
| `--accent` | `#ff6b35` | AI chat assistant color |

**Fonts:**
- `Syne` — Display & headings (Google Fonts)
- `IBM Plex Mono` — Labels, code, metadata
- `Instrument Serif` — Body copy, testimonials, italic text

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations, `@keyframes`
- **Vanilla JavaScript** — Cursor, scroll animations, IntersectionObserver, fetch API
- **Anthropic Claude API** — Powers live chat widgets (`claude-sonnet-4-20250514`)
- **Google Fonts CDN** — Syne, IBM Plex Mono, Instrument Serif

---

## 📬 Contact

| Channel | Details |
|---------|---------|
| Email | mitraditya23@gmail.com |
| Phone | 857-234-4870 |
| LinkedIn | [linkedin.com/in/mitraditya23](https://www.linkedin.com/in/mitraditya23/) |
| GitHub | [github.com/adityaamitra](https://github.com/adityaamitra) |
| Location | Boston, MA (Open to relocation) |

---

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio — just swap out the content and make it your own.

---

*Built in 2026 · Boston, MA*