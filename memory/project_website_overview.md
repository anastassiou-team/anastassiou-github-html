---
name: Lab Website Overview
description: Anastassiou Lab website at anastassioulab.org - structure, tech stack, sections, and how content is managed
type: project
---

The Anastassiou Lab website (anastassioulab.org) is a single-page static site hosted on GitHub Pages.

**Tech stack:** Plain HTML (`index.html`), CSS (`styles.css`), and vanilla JS (`script.js`). No build tools or frameworks. Uses Inter + Crimson Text fonts, Font Awesome icons, and Google Analytics (G-07PMZGM386).

**Sections (in order):**
1. **Home/Hero** - Welcome with lab animation video (animation.mp4)
2. **About** - Lab description + affiliations (Cedars-Sinai Neurosurgery, Neurology, Neural Science, Biomedical Sciences)
3. **Research Banner** - Full-width image from publications
4. **Team** - Grid of lab members with click-to-expand modals, plus Alumni section
5. **Projects** - 5 project cards with modals (Growing Cells, Brain Circuit Model, Disease Modeling, Monitoring/Modulation, NeuroAI)
6. **Publications** - JS-rendered from array in script.js (9 pubs, 2011-2024), links to Google Scholar
7. **Methods** - 7 GitHub repo cards (hardcoded, not API-fetched despite API code existing)
8. **Jobs** - 4 job postings with modals linking to Cedars-Sinai careers
9. **Contact** - Address (AHSP A9313, 127 S San Vicente Blvd, LA), email, phone, Google Maps embed

**How to update content:**
- **Team members**: Edit both `index.html` (HTML card) and `script.js` (teamMembers object for modal data). Photos go in `images/members/<Name>/`.
- **Publications**: Add to the `publications` array at ~line 651 in `script.js`. See `UPDATE_PUBLICATIONS.md` for instructions.
- **Projects**: Edit `projectData` object in `script.js` (~line 153).
- **Jobs**: Edit `jobData` object in `script.js` (~line 230) and the HTML cards in `index.html`.

**Current team (as of 2026-03-20):**
- PI: Costas Anastassiou (Cedars-Sinai + Caltech CMS faculty associate + Archimedes AI)
- Postdocs: Nooshin Abdollahi, Philip Wong, Shayan Farzad, Cinthia Rangel-Sandoval (co-supervised w/ Rowitch)
- Grad students: Areg Peltekian, Pavlos Poulos (co-supervised w/ Stafylakis, Archimedes AI), Dianna Hidalgo (co-supervised w/ Kreiman, Harvard)
- Undergrads: Zeynep Goktepe (Caltech), Katelyn Sadorf (Caltech)
- Research Associate: Vitalie Cervinschi
- Fun: "Friendly Virtual Scientist" AI assistant entry

**Why:** Understanding the full site structure enables quick, accurate edits without re-reading everything each time.

**How to apply:** Reference this when making any website changes. Always check both `index.html` and `script.js` since team/project/job data lives in both places.
