// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Team Member Modal Functionality
const modal = document.getElementById('memberModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Team member data
const teamMembers = {
    costas: {
        name: "Costas Anastassiou, PhD",
        title: "Principal Investigator",
        photo: "costas-anastassiou-optimized.jpg",
        bio: "Large biological datasets nowadays offer impeccable, cellular resolution in the makeup of the brain. Yet, how this cellular makeup impacts neural activity in the brain, in health or disease, remains largely enigmatic. We use a multidisciplinary approach blending biology, engineering, computer science and statistics to address these questions.",
        expertise: ["Neuroscience", "Computational Biology", "Electrophysiology", "Machine Learning", "High-Performance Computing"],
        education: "PhD in Computational Neuroscience, University of California, Berkeley",
        research: "Multimodal cellular data integration, Next-generation monitoring technologies, Electrical stimulation therapies",
        email: "costas.anastassiou@cshs.org",
        publications: "50+ peer-reviewed publications in top-tier journals including Nature, Science, and Cell"
    },
    philip: {
        name: "Philip Wong",
        title: "Postdoctoral Fellow",
        photo: "https://via.placeholder.com/300x300/3498db/FFFFFF?text=PW",
        bio: "Leading computational neuroscience projects at the level of human cellular and network biophysics and dynamics at Cedars-Sinai Medical Center. Philip specializes in advanced computational approaches to understanding neural systems.",
        expertise: ["Computational Neuroscience", "Biophysics", "Network Dynamics", "Human Neuroscience", "Computational Modeling"],
        education: "Postdoctoral Fellow, Cedars-Sinai Medical Center",
        research: "Human cellular and network biophysics, Neural network dynamics, Computational neuroscience modeling",
        email: "philip.wong@cshs.org",
        publications: "Leading computational neuroscience research projects"
    },
    member2: {
        name: "Alex Rodriguez",
        title: "Graduate Student",
        photo: "https://via.placeholder.com/300x300/FF6B6B/FFFFFF?text=AR",
        bio: "Alex is investigating the role of cellular diversity in neural circuit function using electrophysiological and transcriptomic approaches. His work combines experimental techniques with computational analysis to understand how different cell types contribute to brain function.",
        expertise: ["Electrophysiology", "Transcriptomics", "Data Analysis", "MATLAB", "Python"],
        education: "BS in Neuroscience, UCLA; Currently pursuing PhD in Neuroscience",
        research: "Cellular diversity in neural circuits, Single-cell transcriptomics, Electrophysiological analysis",
        email: "alex.rodriguez@cshs.org",
        publications: "5+ conference presentations and manuscripts in preparation"
    },
    member3: {
        name: "Dr. Emily Watson",
        title: "Research Associate",
        photo: "https://via.placeholder.com/300x300/4ECDC4/FFFFFF?text=EW",
        bio: "Dr. Watson is developing novel electrical stimulation protocols for therapeutic applications in neurological disorders. Her research focuses on optimizing stimulation parameters for treating conditions like Parkinson's disease and epilepsy.",
        expertise: ["Electrical Stimulation", "Therapeutics", "Neurological Disorders", "Clinical Research", "Device Development"],
        education: "PhD in Biomedical Engineering, Johns Hopkins University",
        research: "Electrical stimulation therapies, Clinical trial design, Device optimization",
        email: "emily.watson@cshs.org",
        publications: "20+ publications in biomedical engineering and clinical neuroscience"
    }
};

// Open modal when team member is clicked
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        const memberId = member.getAttribute('data-member');
        const memberData = teamMembers[memberId];
        if (memberData) {
            showMemberModal(memberData);
        }
    });
});

// Show team member modal
function showMemberModal(memberData) {
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${memberData.photo}" alt="${memberData.name}" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 1rem;">
            <h2>${memberData.name}</h2>
            <p style="color: #3498db; font-weight: 600; margin-bottom: 1rem;">${memberData.title}</p>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>Biography</h3>
                <p>${memberData.bio}</p>
            </div>
            <div class="modal-section">
                <h3>Expertise</h3>
                <div style="margin-bottom: 1rem;">
                    ${memberData.expertise.map(exp => `<span style="display: inline-block; background: #e8f4fd; color: #3498db; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin: 0.2rem; font-weight: 500;">${exp}</span>`).join('')}
                </div>
            </div>
            <div class="modal-section">
                <h3>Education</h3>
                <p>${memberData.education}</p>
            </div>
            <div class="modal-section">
                <h3>Research Focus</h3>
                <p>${memberData.research}</p>
            </div>
            <div class="modal-section">
                <h3>Contact</h3>
                <p><strong>Email:</strong> <a href="mailto:${memberData.email}" style="color: #3498db;">${memberData.email}</a></p>
            </div>
            <div class="modal-section">
                <h3>Publications</h3>
                <p>${memberData.publications}</p>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.team-member, .publication-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});



// Publications and GitHub Integration
document.addEventListener('DOMContentLoaded', () => {
    loadPublications();
    loadGitHubRepositories();
});

// Publications System - Easy to Update
const publications = [
    {
        year: 2025,
        title: "NOBLE--Neural Operator with Biologically-informed Latent Embeddings to Capture Experimental Variability in Biological Neuron Models",
        authors: "L Ghafourpour, V Duruisseaux, B Tolooshams, PH Wong, CA Anastassiou, ...",
        journal: "arXiv preprint",
        doi: "arXiv:2506.04536",
        link: "https://arxiv.org/abs/2506.04536"
    },
    {
        year: 2023,
        title: "Associations between in vitro, in vivo and in silico cell classes in mouse primary visual cortex",
        authors: "Y Wei, A Nandi, X Jia, JH Siegle, D Denman, SY Lee, A Buchin, ...",
        journal: "Nature Communications",
        doi: "10.1038/s41467-023-42340-0",
        link: "https://doi.org/10.1038/s41467-023-42340-0"
    },
    {
        year: 2023,
        title: "Cell class-specific electric field entrainment of neural activity",
        authors: "SY Lee, K Kozalakis, F Baftizadeh, L Campagnola, T Jarsky, C Koch, ...",
        journal: "BioRxiv",
        doi: "10.1101/2023.02.14.528526",
        link: "https://doi.org/10.1101/2023.02.14.528526"
    },
    {
        year: 2022,
        title: "Multi-modal characterization and simulation of human epileptic circuitry",
        authors: "A Buchin, R de Frates, A Nandi, R Mann, P Chong, L Ng, J Miller, ...",
        journal: "Cell Reports",
        doi: "10.1016/j.celrep.2022.111719",
        link: "https://doi.org/10.1016/j.celrep.2022.111719"
    },
    {
        year: 2022,
        title: "Single-neuron models linking electrophysiology, morphology, and transcriptomics across cortical cell types",
        authors: "A Nandi, T Chartrand, W Van Geit, A Buchin, Z Yao, SY Lee, Y Wei, ...",
        journal: "Cell Reports",
        doi: "10.1016/j.celrep.2022.111719",
        link: "https://doi.org/10.1016/j.celrep.2022.111719"
    },
    {
        year: 2022,
        title: "Human neocortical expansion involves glutamatergic neuron diversification",
        authors: "J Berg, SA Sorensen, JT Ting, JA Miller, T Chartrand, A Buchin, ...",
        journal: "Nature",
        doi: "10.1038/s41586-021-03913-5",
        link: "https://doi.org/10.1038/s41586-021-03913-5"
    }
];

function loadPublications() {
    const publicationsGrid = document.getElementById('publicationsGrid');
    if (publicationsGrid) {
        publicationsGrid.innerHTML = publications.map(pub => `
            <div class="publication-card">
                <div class="pub-year">${pub.year}</div>
                <h3>${pub.title}</h3>
                <p class="pub-authors">${pub.authors}</p>
                <p class="pub-journal">${pub.journal}</p>
                <div class="pub-links">
                    <a href="${pub.link}" target="_blank" class="pub-link">
                        <i class="fas fa-external-link-alt"></i>
                        View Publication
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Function to easily add new publications
function addPublication(publication) {
    publications.unshift(publication); // Add to beginning
    loadPublications(); // Refresh display
}

// Example of how to add a new publication:
// addPublication({
//     year: 2025,
//     title: "New paper title",
//     authors: "Author, A., Anastassiou, C., et al.",
//     journal: "Journal Name",
//     doi: "10.1000/doi123",
//     link: "https://doi.org/10.1000/doi123"
// });

async function loadGitHubRepositories() {
    try {
        // Fetch repositories from GitHub API
        const response = await fetch('https://api.github.com/orgs/anastassiou-team/repos?sort=updated&per_page=8');
        const repos = await response.json();
        
        if (repos.length > 0) {
            // Display all repositories in the grid
            displayRepositories(repos);
        }
    } catch (error) {
        console.error('Error loading GitHub repositories:', error);
        // Fallback to static content if API fails
        displayFallbackContent();
    }
}



function displayRepositories(repos) {
    const reposGrid = document.getElementById('reposGrid');
    if (reposGrid) {
        reposGrid.innerHTML = repos.map(repo => `
            <div class="repo-card" onclick="window.open('${repo.html_url}', '_blank')">
                <div class="repo-name">
                    <i class="fab fa-github"></i>
                    ${repo.name}
                </div>
                <div class="repo-description">
                    ${repo.description || 'Repository for computational neuroscience research.'}
                </div>
                <div class="repo-meta">
                    <span class="repo-language">${repo.language || 'Not specified'}</span>
                </div>
                <div class="repo-topics">
                    ${repo.topics ? repo.topics.map(topic => `<span class="repo-topic">${topic}</span>`).join('') : ''}
                </div>
            </div>
        `).join('');
    }
}



function displayFallbackContent() {
    // Fallback content if GitHub API fails
    const reposGrid = document.getElementById('reposGrid');
    
    if (reposGrid) {
        reposGrid.innerHTML = `
            <div class="repo-card" onclick="window.open('https://github.com/anastassiou-team', '_blank')">
                <div class="repo-name">
                    <i class="fab fa-github"></i>
                    ES_st_morphology_orientation
                </div>
                <div class="repo-description">
                    Latest repository for computational neuroscience research and analysis.
                </div>
                <div class="repo-meta">
                    <span class="repo-language">Python</span>
                </div>
            </div>
            <div class="repo-card" onclick="window.open('https://github.com/anastassiou-team', '_blank')">
                <div class="repo-name">
                    <i class="fab fa-github"></i>
                    human_cortical_single_neuron_models
                </div>
                <div class="repo-description">
                    Models for human cortical single neuron analysis and simulation.
                </div>
                <div class="repo-meta">
                    <span class="repo-language">Python</span>
                </div>
            </div>
            <div class="repo-card" onclick="window.open('https://github.com/anastassiou-team', '_blank')">
                <div class="repo-name">
                    <i class="fab fa-github"></i>
                    celltype_brainstim_insilico
                </div>
                <div class="repo-description">
                    In silico brain stimulation analysis tools and simulations.
                </div>
                <div class="repo-meta">
                    <span class="repo-language">C</span>
                </div>
            </div>
            <div class="repo-card" onclick="window.open('https://github.com/anastassiou-team', '_blank')">
                <div class="repo-name">
                    <i class="fab fa-github"></i>
                    human-epilepsy-project
                </div>
                <div class="repo-description">
                    Computational tools for human epilepsy research and analysis.
                </div>
                <div class="repo-meta">
                    <span class="repo-language">Jupyter Notebook</span>
                </div>
            </div>
        `;
    }
}

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #3498db !important;
    }
    .nav-menu a.active::after {
        width: 100% !important;
    }
    .modal-section {
        margin-bottom: 1.5rem;
    }
    .modal-section h3 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    .modal-section p {
        color: #666;
        line-height: 1.6;
    }
`;
document.head.appendChild(style);
