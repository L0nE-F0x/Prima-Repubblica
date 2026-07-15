# Prima Repubblica

Official landing page for **[@primarepubblica](https://www.instagram.com/primarepubblica/)** — the photographic and historical archive of the Italian First Republic (*Prima Repubblica*, 1948–1994). Live at **[primarepubblica.org](https://primarepubblica.org)**.

A single, dependency-free static page: an editorial *link-in-bio* set as a refined Italian broadsheet — a **Bodoni** masthead, **EB Garamond** text, warm ivory paper, one oxblood accent, a discreet tricolore.

## The three official channels
- **Instagram** — L'Archivio Fotografico → https://www.instagram.com/primarepubblica/
- **Substack** — I Bollettini della Repubblica → https://substack.com/@primarepubblistack
- **La Bottega** — the official shop → https://primarepubblicastore.bigcartel.com

## Structure
| File | Role |
|------|------|
| `index.html` | Markup |
| `style.css`  | All styling — CSS custom properties, mobile-first |
| `app.js`     | Dynamic Italian dateline + copyright year |
| `vintage_italy_photo.png` | Archival image asset |

## Local preview
No build step. Serve the folder with any static server, e.g.:

```bash
python -m http.server 8787
```

then open <http://localhost:8787>.

## Deployment
Continuously deployed via **Netlify** on every push to `main`. The domain is registered at GoDaddy, with DNS pointed at Netlify.
