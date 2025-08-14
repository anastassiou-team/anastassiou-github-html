# Anastassiou Lab Website

A modern, responsive website for the Anastassiou Laboratory at Cedars-Sinai Medical Center. This website showcases the lab's research, team members, publications, and provides an interactive experience for visitors.

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

### **Professional Content Sections**
1. **Hero Section** - Lab overview with white-bordered call-to-action buttons
2. **About** - Lab mission and research focus with question-driven approach
3. **Research Highlights Banner** - Visual showcase of key findings
4. **Team Members** - Interactive member profiles with modal windows
5. **Publications** - Recent research outputs with press coverage links
6. **GitHub** - Custom repository showcase with working citation links
7. **Jobs** - Current job opportunities with direct Cedars-Sinai links
8. **Contact & Location** - Lab location with embedded Google Maps

### **Advanced Functionality**
- **Working favicon** - Custom lab logo optimized for browser tabs
- **Functional social links** - LinkedIn, X (Twitter), and GitHub all working
- **Citation system** - All GitHub citations link to actual Cell Reports papers
- **Responsive navigation** - Mobile-friendly with hamburger menu
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
├── index.html              # Main HTML file
├── styles.css              # CSS styles and responsive design
├── script.js               # JavaScript functionality
├── animation.mp4          # Hero section animation
├── README.md              # This file
├── UPDATE_PUBLICATIONS.md # Publication update guide
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
        photo: "path/to/photo.jpg",
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

Then add the corresponding HTML in `index.html`:

```html
<div class="team-member" data-member="newmember">
    <div class="member-photo">
        <img src="path/to/photo.jpg" alt="Dr. New Member">
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
- **Safari** (latest) ✅
- **Edge** (latest) ✅

### Cross-Browser Compatibility Features:
- **Vendor prefixes** for CSS transitions and transforms
- **Flexbox and Grid** with fallbacks
- **Safari-specific optimizations** for image rendering
- **Firefox compatibility** through local web server
- **Responsive design** that adapts to all screen sizes
- Mobile browsers

### **Performance Features**
- **Lazy loading** animations
- **Smooth scrolling** navigation
- **Optimized CSS** with minimal repaints
- **Efficient JavaScript** event handling

## 📝 Content Guidelines

### **Writing Style**
- Use clear, professional language
- Keep descriptions concise but informative
- Highlight key achievements and research areas
- Use consistent formatting throughout

### **Images**
- Use high-quality photos for team members
- Optimize images for web (recommended: 300x300px for profiles)
- Include alt text for accessibility
- Consider using professional headshots

### **Links**
- Update publication links to actual papers
- Add real social media links in footer
- Include links to lab resources and datasets

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

## 📞 Support

For questions or issues:
- Check the code comments for guidance
- Review browser console for JavaScript errors
- Ensure all files are properly linked
- Test on different devices and browsers

## 🔄 Updates and Maintenance

### **Regular Updates**
- **Team changes** - Update member profiles
- **New publications** - Add to publications section
- **Research updates** - Modify research area descriptions
- **News items** - Keep current with lab activities

### **Content Review**
- Review content quarterly
- Update outdated information
- Check all links are working
- Ensure mobile experience remains optimal

## 📊 Analytics and SEO

Consider adding:
- Google Analytics for visitor tracking
- Meta tags for better SEO
- Open Graph tags for social sharing
- Structured data for research organizations

---

**Built with ❤️ for the Anastassiou Lab**

## 🧹 **Recent Cleanup & Organization**

### **Files Removed (Space Saved: ~100MB+)**
- Old logo versions and duplicates
- Unused PowerPoint and PDF files
- Test images and duplicate photos
- Large TIFF files

### **Current Clean Structure**
- **Core Files:** HTML, CSS, JavaScript
- **Current Assets:** SVG logo, banner, essential images
- **Source Files:** PowerPoint logo source
- **Documentation:** README and update guides

### **Performance Improvements**
- Reduced total file size significantly
- Cleaner file organization
- Faster loading times
- Better maintainability

## 🎯 **Current Features Status**

### **✅ Fully Functional**
- Dynamic logo animations (top and footer)
- Working favicon with lab logo
- Functional citation links to Cell Reports papers
- Working social media links (LinkedIn, X, GitHub)
- Google Maps integration
- Job opportunities with direct links
- Responsive design for all devices
- Interactive team member modals

### **🚀 Ready for Deployment**
- GitHub Pages compatible
- Custom domain ready (anastassiou-lab.org)
- Mobile-optimized
- Professional appearance
- All links and functionality tested
