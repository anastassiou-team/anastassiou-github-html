# Anastassiou Lab Website

**Lab Website:** [anastassioulab.org](https://anastassioulab.org)

This is where we setup the website of the Anastassiou Lab at Cedars-Sinai Medical Center.

## 🌟 Features

### **Dynamic Logo Animations**
- **Top-left logo** - Cycles through black, red, and blue colors continuously
- **Footer logo** - Multi-color cycling animation for visual appeal
- **Professional appearance** - Always engaging without being distracting

### **Interactive Team Members Section**
- **Clickable team member cards** that open detailed modal windows
- **Comprehensive member profiles** including:
  - Biography and research focus
  - Official affiliations and profile links
  - Hyperlinked collaborator references
  - Professional contact information
- **Responsive design** that works on all devices

### **Modal System**
- **Team member modals** - Detailed profiles with photos and bios
- **Project modals** - Expanded research descriptions with images and focus areas
- **Job opportunity modals** - Expanded job descriptions and requirements
- **Click outside or press Escape** to close modals

### **Professional Content Sections**
1. **Hero Section** - Lab overview with white-bordered call-to-action buttons
2. **About** - Lab mission and research focus with question-driven approach
3. **Research Highlights Banner** - Visual showcase of key findings
4. **Team Members** - Interactive member profiles with modal windows
5. **Projects** - Research project showcase with 5 main areas
6. **Publications** - Recent research outputs with press coverage links
7. **Methods** - Software tools and computational methods
8. **Jobs** - Current job opportunities with modal details
9. **Contact & Location** - Lab location with embedded Google Maps

### **SEO & Discoverability**
- **Multi-page architecture** - 7 independently indexable routes for search engine discovery
- **Per-page SEO** - Unique titles, meta descriptions, canonical URLs, and Open Graph tags per page
- **Structured data** - JSON-LD schemas: ResearchOrganization (/), Person (/team), JobPosting (/jobs)
- **Google Scholar** - Citation meta tags for 20 publications on /publications
- **Sitemap & robots.txt** - Full sitemap with all 7 routes
- **Legacy URL support** - Old /#anchor URLs redirect to new routes automatically

### **Advanced Functionality**
- **Working favicon** - Custom lab logo optimized for browser tabs
- **Functional social links** - LinkedIn, X (Twitter), and GitHub all working
- **Citation system** - All GitHub citations link to actual Cell Reports papers
- **Responsive navigation** - Mobile-friendly with hamburger menu
- **Mobile-optimized publications** - Show first 6, expandable to full 20
- **Professional styling** - Modern CSS with smooth animations

## 🚀 Getting Started

### **Prerequisites**
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### **Installation**
1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website should load with all functionality working

### **Local Development Server**
For testing on mobile devices or other browsers:
```bash
python3 -m http.server 8000
```
Then access via `http://YOUR_IP:8000`

### **File Structure**
```
anastassiou-github-html/
├── index.html              # Home page (Hero + About + Research Banner)
├── team/index.html         # Team members & alumni (/team)
├── projects/index.html     # Research projects (/projects)
├── publications/index.html # Publications list (/publications)
├── methods/index.html      # Methods & code (/methods)
├── jobs/index.html         # Job opportunities (/jobs)
├── contact/index.html      # Contact & location (/contact)
├── 404.html                # Fallback redirect for old anchor URLs
├── styles.css              # CSS styles and responsive design
├── script.js               # JavaScript functionality
├── sitemap.xml             # Sitemap with all 7 routes
├── robots.txt              # Search engine crawling rules
├── animation.mp4           # Hero section animation
├── README.md               # This file
├── UPDATE_PUBLICATIONS.md  # Publication update guide
└── images/                 # Image assets
    ├── logo/               # Logo files
    │   ├── ateam_logo_ppt_v3.svg  # Current lab logo (SVG format)
    │   ├── ateam_logo_ppt_v3.png  # PNG version of current logo
    │   ├── ateam_logo_ppt_v3_greyscale.png  # Greyscale version
    │   ├── ateam_logo_ppt_v3_favicon.svg    # Favicon-optimized logo
    │   ├── ateam_logo_ppt.pptx    # Logo source file (PowerPoint)
    │   ├── ateam_logo_ppt_v2.tiff # Version 2 logo (TIFF)
    │   ├── ateam_logo_ppt_v2.png  # Version 2 logo (PNG)
    │   ├── ateam_logo_ppt_v2.pdf  # Version 2 logo (PDF)
    │   └── ateam_logo.png         # Original logo version
    ├── banner/             # Banner images
    │   ├── banner_detail.png      # Research highlights banner (ACTIVE)
    │   ├── banner_ppt.png         # Banner source image
    │   └── banner_ppt.pptx        # Banner source file (PowerPoint)
    └── members/            # Team member photos
        ├── CostasA/        # Principal Investigator
        │   ├── 29837-NS-SURG--Costas Anastassiou, PhD-Environmental 001-1280x1280.png  # Main card image
        │   └── costas-anastassiou.png                                                    # Modal image
        └── missing_member/ # Default member photos
            ├── missing_member.png
            └── missing_member.jpg
```

## 🎨 Customization

### **Updating Lab Members**

To add or modify team members, edit the `teamMembers` object in `script.js`:

```javascript
const teamMembers = {
    newmember: {
        name: "Dr. New Member",
        title: "Research Scientist",
        photo: "/images/members/NewMember/photo.jpg",
        bio: "Member biography...",
        expertise: ["Skill 1", "Skill 2"],
        education: "Education details...",
        research: "Research focus...",
        email: "email@cshs.org",
        publications: "Publication count..."
    }
    // ... other members
};
```

Then add the corresponding HTML in `team/index.html`:

```html
<div class="team-member" data-member="newmember">
    <div class="member-photo">
        <img src="/images/members/NewMember/photo.jpg" alt="Dr. New Member">
    </div>
    <div class="member-info">
        <h3>Dr. New Member</h3>
        <p class="member-title">Research Scientist</p>
        <!-- ... other info -->
    </div>
</div>
```

### **Changing Colors and Styling**

The main color scheme is defined in `styles.css`:

```css
:root {
    --primary-color: #3498db;      /* Main blue */
    --secondary-color: #667eea;    /* Gradient blue */
    --accent-color: #2c3e50;      /* Dark blue */
    --text-color: #333;            /* Main text */
    --light-bg: #f8f9fa;          /* Light backgrounds */
}
```

### **Adding New Sections**

To add a new section:

1. Add the HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add navigation link in the navbar
4. Update JavaScript if needed

### **Projects Section**

The Projects section showcases 5 main research areas:
- Growing Cells in Computers
- Brain Circuit Simulations  
- Brain Disease Modeling
- Brain Modulation Technologies
- Biophysics-informed ML & NeuroAI

### **Methods Section**

The Methods section (formerly GitHub) displays software tools and computational methods used in the lab.

### **Updating Content**

- **Research Areas**: Modify the cards in the research section
- **Publications**: Update the publication cards with real data
- **News**: Replace placeholder news with actual lab updates
- **Contact Info**: Update with real contact details

## 📱 Responsive Design

The website is fully responsive and includes:
- **Mobile-first approach** with hamburger navigation
- **Flexible grids** that adapt to screen size
- **Touch-friendly** interactive elements
- **Optimized typography** for all devices

## 🔧 Technical Details

### **Technologies Used**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - No external dependencies
- **Font Awesome** - Icons (loaded from CDN)
- **Google Fonts** - Inter font family

### **Browser Support**
- **Chrome** (latest) ✅
- **Firefox** (latest) ✅ 
- **Safari** (latest, including iOS mobile) ✅
- **Edge** (latest) ✅





## 🚀 Deployment

### **GitHub Pages**
1. Push code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Cross-Browser Testing
- **Chrome**: Open `index.html` directly or use local server
- **Firefox**: **Must use local server** (`http://localhost:8000`) for image compatibility
- **Safari**: Works with both direct file and local server
- **Edge**: Works with both direct file and local server

### **Other Hosting**
- Upload files to any web hosting service
- Ensure all files are in the same directory
- Test functionality after upload

## 🤝 Contributing

To contribute to the website:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request


