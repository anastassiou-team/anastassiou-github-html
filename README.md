# Anastassiou Lab Website

**Lab Website:** [anastassioulab.org](https://anastassioulab.org)

Source code for the website of the Costas A. Anastassiou Lab at Cedars-Sinai Medical Center. The site is a single-page HTML application hosted via GitHub Pages with a custom domain.

---

## How to Update Content

### Adding or Editing Team Members

Each team member requires changes in **two files**:

1. **`script.js`** — Add a member entry to the `teamMembers` object (starts at line ~12). This populates the modal that opens when a visitor clicks the member's card.

```javascript
newmember: {
    name: "Dr. New Member",
    title: "Research Scientist",
    photo: "images/members/NewMemberDir/photo.jpg",
    modalPhoto: "images/members/NewMemberDir/photo.jpg",
    bio: "Member biography...",
    expertise: ["Skill 1", "Skill 2"],
    education: "Education details...",
    research: "Research focus...",
    email: "email@csmc.edu",
    publications: "Publication count or summary"
}
```

2. **`index.html`** — Add a card in the Team section (starts at line ~289). The `data-member` attribute must match the key you used in `script.js`.

```html
<div class="team-member" data-member="newmember">
    <div class="member-photo">
        <img src="images/members/NewMemberDir/photo.jpg" alt="Dr. New Member">
    </div>
    <div class="member-info">
        <h3>Dr. New Member</h3>
        <p class="member-title">Research Scientist</p>
    </div>
</div>
```

3. **Add photo** — Create a folder under `images/members/` (e.g., `images/members/NewMemberDir/`) and place their photo there.

### Adding Publications

Edit the `publications` array in **`script.js`** (starts at line ~651). Add new entries at the **top** of the array so they appear first:

```javascript
{
    title: "Your New Paper Title",
    authors: "Author, A., et al.",
    journal: "Journal Name",
    year: "2025",
    doi: "10.1000/doi123",
    link: "https://doi.org/10.1000/doi123",
    abstract: "Brief description of the paper.",
    pressCoverage: [          // optional
        "https://example.com/news-article"
    ]
}
```

Save and push — the site will re-render the publications list automatically.

**SEO note:** When adding publications, also add a corresponding static HTML block and `citation_*` meta tags in `index.html` (see the existing entries in the Publications section and `<head>` for the pattern). This ensures search engines and Google Scholar can index the papers even without executing JavaScript.

### Updating Projects

Project cards are in `index.html` in the Projects section. Each card links to a project image under `images/projects/`. Edit the HTML directly.

### Updating Job Postings

Job postings are in `index.html` in the Jobs section. Edit or add job cards directly in the HTML. The modal content is also in `index.html`.

---

## File Structure

```
anastassiou-github-html/
├── index.html              # Main HTML file (single-page site)
├── styles.css              # All CSS styles and responsive design
├── script.js               # Team members, publications, and interactivity
├── animation.mp4           # Hero section background animation
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # Sitemap for search engines
├── CNAME                   # Custom domain config (anastassioulab.org)
├── README.md               # This file
├── UPDATE_PUBLICATIONS.md  # Quick-reference guide for adding publications
└── images/
    ├── logo/               # Lab logo (SVG, PNG, favicon variants)
    ├── banner/             # Research highlights banner
    ├── members/            # Team member photos (one folder per person)
    │   ├── CostasA/
    │   ├── ZeynepG/
    │   ├── KatelynS/
    │   ├── VitalieC/
    │   ├── AregP/
    │   ├── PavlosP/
    │   ├── CinthiaSR/
    │   ├── ShayanF/
    │   ├── PhilipW/
    │   └── missing_member/ # Default placeholder photo
    └── projects/           # Project card images
```

## SEO & Metadata

The `<head>` section of `index.html` includes:
- **Meta tags** — description, keywords, canonical URL
- **Open Graph / Twitter cards** — branded previews when the URL is shared on social media
- **JSON-LD structured data** — ResearchOrganization schema for Google Knowledge Graph
- **Google Scholar citation tags** — `citation_*` meta tags for each listed publication
- **Google Analytics** — tracking via gtag.js (ID: `G-07PMZGM386`)

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch. Pushing to `main` triggers an automatic deploy. The custom domain `anastassioulab.org` is configured via the `CNAME` file.

### Local Development

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Technologies

- HTML5, CSS3, vanilla JavaScript (no build step, no dependencies)
- Font Awesome (CDN) for icons
- Google Fonts (Inter, Crimson Text)
