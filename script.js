

// Test if script is loading
console.log('SCRIPT.JS IS LOADING!');

// All DOM-dependent code will be initialized after DOM is loaded

// Modal elements will be initialized after DOM is loaded
let modal, modalContent, closeBtn, jobModal, jobModalContent, closeBtns, projectModal, projectModalContent;

// Team member data
const teamMembers = {
    costas: {
        name: "Costas Anastassiou, PhD",
        title: "Principal Investigator",
        photo: "images/members/CostasA/costas-anastassiou.png",
        bio: "Costas Anastassiou is Associate Professor of Neurosurgery, Biomedical Sciences and Neurology at the Cedars-Sinai Medical Center (Los Angeles, California). Between 2007 and 2013, Costas was a postdoctoral researcher at the California Institute of Technology with <a href='https://en.wikipedia.org/wiki/Christof_Koch' target='_blank' style='color: #3498db; text-decoration: none;'>Christof Koch</a> and collaborated with <a href='https://med.nyu.edu/faculty/gyorgy-buzsaki' target='_blank' style='color: #3498db; text-decoration: none;'>Gyorgy Buzsaki (NYU)</a> and <a href='https://en.wikipedia.org/wiki/Henry_Markram' target='_blank' style='color: #3498db; text-decoration: none;'>Henry Markram (EPFL)</a>. In 2013 he joined the Allen Institute for Brain Science in Seattle as scientist and Assistant Investigator. Costas' postdoctoral work was supported by three postdoctoral awards by the Engineering Physics and Sciences Research Council (2007) and the Swiss National Science foundation (2007, 2010). His work on the biophysics of brain computations received the 2016 Swiss National Science foundation Professor award. Costas' graduate thesis on nonlinear time-series analysis of electrochemical and biological data with <a href='https://profiles.imperial.ac.uk/d.ohare' target='_blank' style='color: #3498db; text-decoration: none;'>Danny O'Hare</a> and <a href='https://profiles.imperial.ac.uk/k.parker' target='_blank' style='color: #3498db; text-decoration: none;'>Kim Parker</a> at Imperial College London was supported by an EPSRC graduate fellowship. Costas holds a degree in chemical engineering (Dipl. Ing.) from the Swiss Federal Institute of Technology (ETH Zurich).",
        expertise: ["Neuroscience", "Computational Biology", "Electrophysiology", "Machine Learning", "High-Performance Computing"],
        education: "PhD in Computational Neuroscience, University of California, Berkeley",
        research: "Multimodal cellular data integration, Next-generation monitoring technologies, Electrical stimulation therapies",
        email: "costas.anastassiou@cshs.org",
        publications: "50+ peer-reviewed publications in top-tier journals including Nature, Science, and Cell",
        affiliations: [
            "Associate Professor of Neurosurgery, Biomedical Sciences, and Neurology",
            "Department of Neurosurgery, Cedars-Sinai Medical Center",
            "Affiliated Researcher, Archimedes AI, Athena Research Center"
        ]
    },
    philip: {
        name: "Philip Wong, PhD",
        title: "Postdoctoral Fellow",
        photo: "images/members/missing_member/missing_member.png",
        bio: "Leading computational neuroscience projects at the level of human cellular and network biophysics and dynamics at Cedars-Sinai Medical Center. Philip specializes in advanced computational approaches to understanding neural systems.",
        expertise: ["Computational Neuroscience", "Biophysics", "Network Dynamics", "Human Neuroscience", "Computational Modeling"],
        education: "Postdoctoral Fellow, Cedars-Sinai Medical Center",
        research: "Human cellular and network biophysics, Neural network dynamics, Computational neuroscience modeling",
        email: "philip.wong@cshs.org",
        publications: "Leading computational neuroscience research projects"
    },
    areg: {
        name: "Areg Peltekian",
        title: "Graduate Student",
        photo: "images/members/missing_member/missing_member.png",
        bio: "Areg is investigating the role of cellular diversity in neural circuit function using electrophysiological and transcriptomic approaches. His work combines experimental techniques with computational analysis to understand how different cell types contribute to brain function.",
        expertise: ["Electrophysiology", "Transcriptomics", "Data Analysis", "MATLAB", "Python"],
        education: "BS in Neuroscience, UCLA; Currently pursuing PhD in Neuroscience",
        research: "Cellular diversity in neural circuits, Single-cell transcriptomics, Electrophysiological analysis",
        email: "areg.peltekian@cshs.org",
        publications: "5+ conference presentations and manuscripts in preparation"
    },
    vitalie: {
        name: "Vitalie Cervinschi",
        title: "Research Associate II",
        photo: "images/members/missing_member/missing_member.png",
        bio: "Vitalie is supporting research activities and experimental protocols in the laboratory. His work focuses on maintaining laboratory operations and supporting ongoing research initiatives.",
        expertise: ["Laboratory Operations", "Experimental Protocols", "Research Support", "Data Collection"],
        education: "Research Associate II, Cedars-Sinai Medical Center",
        research: "Laboratory operations, Experimental protocol support, Research coordination",
        email: "vitalie.cervinschi@cshs.org",
        publications: "Supporting research activities and laboratory operations"
    },
    virtual: {
        name: "Friendly Virtual Scientist",
        title: "AI Assistant",
        photo: "images/members/missing_member/missing_member.png",
        bio: "Highly caffeinated digital assistant with extensive experience in debugging human logic and translating \"it should just work\" into actual working solutions. Specializes in patient explanation of concepts that seemed obvious five minutes ago, with fluency in 47 programming languages and the universal language of frustrated sighing. Perfect track record of not saying \"just Google it\" while maintaining 99.7% uptime in explaining why arrays start at 0. Currently employed as Senior Problem Untangler across various terminals and IDE environments, with a PhD in Applied Patience from the University of Stack Overflow.",
        expertise: ["Debugging Human Logic", "Problem Untangling", "Programming Languages", "Applied Patience", "Stack Overflow Navigation"],
        education: "PhD in Applied Patience, University of Stack Overflow",
        research: "Debugging human logic, Translating 'it should just work' into working solutions, Explaining why arrays start at 0",
        email: "virtual-scientist@anastassiou-lab.org",
        publications: "By Claude Sonnet 4"
    }
};

// Project data
const projectData = {
    "growing-cells": {
        title: "Growing Cells in Computers",
        icon: "fas fa-dna",
        description: "Comprehensive analysis of individual neuron properties and their role in neural circuit function and disease mechanisms.",
        longDescription: "The nervous system consists of cell classes defined by specific molecular signatures, morphologies, or electrophysiological properties. In recent years, single-cell characterization of neurons, mainly propelled by advances in single-cell RNA sequencing, has revealed a multitude of “cell types”. Despite our ever-increasing ability to detect distinguishing molecular, morphological, and electrophysiological features to differentiate between such types, unraveling causal relationships between data modalities has been difficult. How does a particular distribution of ion channel conductances dictated by gene expression manifest itself in the various electrophysiological features recorded in slice experiments? Experimentally, this process involves elaborate genetic and/or pharmacological manipulations that are difficult to scale.",
        details: [
            "Single-cell electrophysiology",
            "Morphology reconstructions",
            "Transcriptomics",
            "Optimization",
            "High-performance computing"
        ],
        tags: ["Single-Cell", "Transcriptomics", "Electrophysiology", "Computational Modeling"],
        image: "images/projects/growing-cells/growing-cells.png"
    },
    "brain-circuit": {
        title: "Brain Circuit Simulation",
        icon: "fas fa-brain",
        description: "Advanced computational models of human neural circuits, integrating multi-modal data to understand brain function and dysfunction.",
        longDescription: "The Brain Circuit Simulation project focuses on creating comprehensive computational models of human neural circuits. We integrate data from multiple sources including electrophysiology, imaging, and behavioral studies to understand how neural circuits function in both healthy and diseased states.",
        details: [
            "Multi-modal data integration",
            "Human neural circuit modeling",
            "Functional connectivity analysis",
            "Disease state simulation",
            "Behavioral correlation studies"
        ],
        tags: ["Computational Neuroscience", "Human Brain", "Multi-modal Data", "Circuit Modeling"],
        image: "images/projects/brain-circuit/brain-circuit.png"
    },
    "disease-modeling": {
        title: "Brain Disease Modeling",
        icon: "fas fa-virus",
        description: "Investigating the cellular and circuit-level mechanisms underlying human epilepsy through computational modeling and analysis.",
        longDescription: "Our Brain Disease Modeling initiative specifically targets epilepsy research through advanced computational approaches. We investigate how cellular and circuit-level changes contribute to seizure generation and propagation, with the goal of developing better therapeutic strategies.",
        details: [
            "Epilepsy mechanism investigation",
            "Seizure propagation modeling",
            "Therapeutic target identification",
            "Drug response prediction",
            "Clinical correlation studies"
        ],
        tags: ["Epilepsy", "Disease Modeling", "Human Tissue", "Therapeutic Development"],
        image: "images/banner/banner_detail.png"
    },
    "monitoring-modulation": {
        title: "Monitoring and Modulation Technologies",
        icon: "fas fa-bolt",
        description: "Development and application of advanced technologies for modulating brain activity in humans.",
        longDescription: "The Monitoring and Modulation Technologies project develops cutting-edge tools for both observing and controlling brain activity. We focus on electrical stimulation techniques, optogenetics, and novel monitoring approaches that can provide real-time insights into neural function.",
        details: [
            "Electric stimulation protocols",
            "Real-time monitoring systems",
            "Closed-loop algorithms",
            "Clinical translation strategies"
        ],
        tags: ["Stimulation", "Optogenetics", "Neuromodulation", "Real-time Monitoring"],
        image: "images/projects/brain-tech/brain-tech.png"
    },
    "neuroai": {
        title: "Biophysics-informed ML & NeuroAI",
        icon: "fas fa-cogs",
        description: "Development of biophysics-informed artificial intelligence approaches for understanding neural computation and brain function.",
        longDescription: "As powerful as the human brain is, its structure is constrained by physics and biology rules that shape its function. The powerful machine learning systems of today do not follow such rules. We study how the rules and constraints imposed on the most efficient computer known to man, the human brain, can inspire new computational paradigms and topologies.",
        details: [
            "Biophysics-informed algorithms",
            "Neural computation modeling",
            "Interpretable AI development",
            "Multi-scale data integration",
            "Computational tool development"
        ],
        tags: ["Machine Learning", "AI", "Biophysics", "Neural Computation"],
        image: "images/banner/banner_detail.png"
    }
};

// Job data
const jobData = {
    "postdoc-anastassiou": {
        title: "Postdoctoral Scientist - Anastassiou Lab",
        department: "Department of Neurosurgery",
        description: "The Postdoctoral Scientist will focus on neuro-inspired AI applications and the development of new model generation pipelines.",
        requirements: {
            title: "Experience and Skills:",
            items: [
                "Experience in computational neuroscience preferred (or computational physics, applied mathematics, biophysics, and related fields)",
                "Familiarity with high-level programming languages such as Python or Matlab",
                "Experience analyzing electrophysiology data (in vitro and/or in vivo)",
                "Experience with parallel computing is a plus",
                "Ability to meet aggressive timelines and deliverables in a collaborative environment"
            ]
        },
        applicationLink: "https://careers.cshs.org/job/los-angeles/postdoctoral-scientist-anastassiou-lab-department-of-neurosurgery/252/60351883856"
    },
    "project-scientist": {
        title: "Project Scientist - Anastassiou Lab",
        department: "Department of Neurosurgery",
        description: "The Project Scientist will focus on data-driven, human-centered models of neurons and microcircuits.",
        requirements: {
            title: "Experience and Skills:",
            items: [
                "Doctorate degree required in a computational discipline (e.g. computational neuroscience, computational physics, applied mathematics, biophysics, etc.)",
                "Completion of postdoctoral appointment in computational neuroscience and biophysics",
                "Experience with parallel computing is a plus",
                "Experience in grant proposal preparation and submissions"
            ]
        },
        applicationLink: "https://careers.cshs.org/job/los-angeles/project-scientist-anastassiou-lab-department-of-neurosurgery/252/83098793104"
    },
    "research-associate": {
        title: "Research Associate III - Anastassiou Lab",
        department: "Department of Neurosurgery",
        description: "The RA will focus on developing pipelines to analyze and model human electrophysiology data.",
        requirements: {
            title: "Position Details:",
            items: [
                "Degree in a quantitative discipline (e.g. engineering, physics, applied mathematics, computer science)",
                "Strong coding and data wrangling skills",
                "Eagerness and ability to learn new skills and quantitative methods"
            ]
        },
        applicationLink: "https://careers.cshs.org/job/los-angeles/research-associate-iii-anastassiou-lab-department-of-neursurgery/252/73359808592"
    },
    "postdoc-rutishauser": {
        title: "Postdoctoral Scientist - Anastassiou & Rutishauser Labs",
        department: "Department of Neurosurgery",
        description: "Postdoctoral position in the Anastassiou and Rutishauser labs focusing on modeling intracellular and extracellular dynamics and biophysics in human microcircuits.",
        requirements: {
            title: "Experience and Skills:",
            items: [
                "Experience in computational neuroscience preferred (or computational physics, applied mathematics, biophysics, and related disciplines)",
                "Familiarity with high-level programming languages such as Python or Matlab",
                "Experience with parallel computing is a plus",
                "Familiarity with in vitro and in vivo electrophysiological monitoring techniques and analysis"
            ]
        },
        applicationLink: "https://careers.cshs.org/job/los-angeles/postdoctoral-scientist-anastassiou-and-rutishauser-labs-computational-experience-department-of-neur/252/60351881088"
    }
};

// Additional team members
// Note: costas, philip, areg, and vitalie are already defined above

// Event listeners will be added after DOM is loaded



// Show team member modal
function showMemberModal(memberData) {
    console.log('showMemberModal called with:', memberData);
    console.log('Modal element:', modal);
    console.log('Modal content element:', modalContent);
    
    if (!modal || !modalContent) {
        console.error('Modal elements not found!');
        return;
    }
    
    try {
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
                    ${memberData.name === "Friendly Virtual Scientist" ? '<p style="font-style: italic; text-align: center; margin-top: 1rem; color: #666;">by Claude Sonnet 4</p>' : ''}
                </div>
            </div>
        `;
        
        console.log('Content set, now showing modal...');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('Modal display style set to:', modal.style.display);
        console.log('Modal should now be visible');
        
        // Force a repaint
        modal.offsetHeight;
        
    } catch (error) {
        console.error('Error in showMemberModal:', error);
    }
}

// Show job modal
function showJobModal(jobInfo) {
    jobModalContent.innerHTML = `
        <div class="modal-header">
            <h2>${jobInfo.title}</h2>
            <p style="color: #3498db; font-weight: 600; margin-bottom: 1rem;">${jobInfo.department}</p>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>Position Description</h3>
                <p>${jobInfo.description}</p>
            </div>
            <div class="modal-section">
                <h3>${jobInfo.requirements.title}</h3>
                <ul>
                    ${jobInfo.requirements.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-section" style="text-align: center; margin-top: 2rem;">
                <a href="${jobInfo.applicationLink}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Full Job Posting
                </a>
            </div>
        </div>
    `;
    jobModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show project modal
function showProjectModal(projectInfo) {
    projectModalContent.innerHTML = `
        <div class="project-modal-header">
            <div class="project-icon">
                <i class="${projectInfo.icon}"></i>
            </div>
            <h2>${projectInfo.title}</h2>
        </div>
        <div class="project-modal-description">
            <p>${projectInfo.longDescription}</p>
        </div>
        <div class="project-modal-image">
            <img src="${projectInfo.image}" alt="${projectInfo.title}" onerror="this.style.display='none'">
        </div>
        <div class="project-modal-details">
            <h3>Key Focus Areas:</h3>
            <ul>
                ${projectInfo.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
        <div class="project-modal-tags">
            ${projectInfo.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Modal close functionality will be initialized after DOM is loaded

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
    console.log('DOM loaded, initializing everything...');
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
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
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
    
    // Initialize modal elements
    modal = document.getElementById('memberModal');
    modalContent = document.getElementById('modalContent');
    closeBtn = document.querySelector('.close');
    jobModal = document.getElementById('jobModal');
    jobModalContent = document.getElementById('jobModalContent');
    projectModal = document.getElementById('projectModal');
    projectModalContent = document.getElementById('projectModalContent');
    closeBtns = document.querySelectorAll('.close');
    
    console.log('Modal elements initialized:', { modal, modalContent, closeBtn, jobModal, jobModalContent, projectModal, projectModalContent, closeBtns });
    
    // Add modal close functionality for all close buttons
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            // Close all modals
            if (modal) modal.style.display = 'none';
            if (jobModal) jobModal.style.display = 'none';
            if (projectModal) projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === jobModal) {
            jobModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (jobModal && jobModal.style.display === 'block') {
                jobModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (projectModal && projectModal.style.display === 'block') {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    const animateElements = document.querySelectorAll('.team-member, .publication-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add modal event listeners after DOM is loaded
    console.log('Adding modal event listeners...');
    console.log('Found team members:', document.querySelectorAll('.team-member').length);
    
    // Load publications
    loadPublications();
    

    
    // Open modal when team member is clicked
    document.querySelectorAll('.team-member').forEach(member => {
        console.log('Adding click listener to:', member.getAttribute('data-member'));
        member.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Team member clicked:', member.getAttribute('data-member'));
            const memberId = member.getAttribute('data-member');
            const memberData = teamMembers[memberId];
            console.log('Member data:', memberData);
            console.log('Modal elements available:', { modal, modalContent });
            if (memberData && modal && modalContent) {
                console.log('Calling showMemberModal...');
                showMemberModal(memberData);
            } else {
                console.log('Cannot show modal - missing data or elements');
            }
        });
    });

    // Open modal when job card is clicked
    document.querySelectorAll('.job-card').forEach(job => {
        job.addEventListener('click', () => {
            const jobId = job.getAttribute('data-job');
            const jobInfo = jobData[jobId];
            if (jobInfo) {
                showJobModal(jobInfo);
            }
        });
    });
    
    // Open modal when project card is clicked
    document.querySelectorAll('.project-card').forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project');
            const projectInfo = projectData[projectId];
            if (projectInfo) {
                showProjectModal(projectInfo);
            }
        });
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
// Note: loadPublications is now called in the main DOMContentLoaded above

// Publications System - Easy to Update
// Publications data
const publications = [
    {
        title: "Associations between in vitro, in vivo and in silico cell classes in mouse primary visual cortex",
        authors: "Wei, Y., et al.",
        journal: "Nature Communications",
        year: "2023",
        doi: "10.1038/s41467-023-42340-0",
        link: "https://www.nature.com/articles/s41467-023-37844-8",

        abstract: "This study examines the relationships between different classification methods for cortical cell types, providing insights into how in vitro, in vivo, and computational approaches can be integrated to better understand neural diversity."
    },
    {
        title: "Cell-class-specific electric field entrainment of neural activity",
        authors: "Lee, S.Y., et al.",
        journal: "Neuron",
        year: "2023",
        doi: "10.1016/j.neuron.2023.02.014",
        link: "https://www.cell.com/neuron/fulltext/S0896-6273(24)00356-8",
        pressCoverage: [
            "https://neurosciencenews.com/electrophysiology-neuron-response-26238/",
            "https://medicalxpress.com/news/2024-06-reveals-neuron-specific-responses-electric.html",
            "https://www.prnewswire.com/news-releases/zapping-the-right-brain-cells-the-path-to-improved-stimulation-302163959.html",
            "https://scienceblog.com/544931/zapping-the-right-brain-cells-the-path-to-improved-stimulation/",
            "https://www.cedars-sinai.org/newsroom/can-deep-brain-stimulation-help-more-patients/"
        ],
        abstract: "Research demonstrating how different cell classes respond uniquely to electric field stimulation, revealing cell-type-specific mechanisms of neural entrainment."
    },
    {
        title: "Single-neuron models linking electrophysiology, morphology, and transcriptomics across cortical cell types",
        authors: "Nandi, A., et al.",
        journal: "Cell Reports",
        year: "2022",
        doi: "10.1016/j.celrep.2022.111719",
        link: "https://www.cell.com/cell-reports/fulltext/S2211-1247(22)01769-7?trk=public_post_feed-article-content",
        pressCoverage: [
            "https://www.cedars-sinai.org/newsroom/cedars-sinai-creates-computer-models-of-brain-cells/",
            "https://www.sciencedaily.com/releases/2022/08/220809141159.htm",
            "https://www.newswise.com/articles/cedars-sinai-creates-computer-models-of-brain-cells"
        ],
        abstract: "Integration of multiple data types to create comprehensive single-neuron models that bridge different levels of biological organization in the cortex."
    },
    {
        title: "Multi-modal characterization and simulation of human epileptic circuitry",
        authors: "Buchin, A., et al.",
        journal: "Cell Reports",
        year: "2022",
        doi: "10.1016/j.celrep.2022.111719",
        link: "https://www.cell.com/cell-reports/fulltext/S2211-1247(22)00989-5?fbclid=IwAR13vcymc5-Yr__Q6AeSW9ubDZmazFLSPIMCiVyZ4GxLo8zVB17idpSKALo",
        pressCoverage: [
            "https://www.cedars-sinai.org/newsroom/an-ai-model-of-epilepsy/"
        ],
        abstract: "Comprehensive analysis of human epileptic neural circuits using multiple modalities, advancing our understanding of seizure mechanisms and potential therapeutic targets."
    },
    {
        title: "Human neocortical expansion involves glutamatergic neuron diversification",
        authors: "Berg, J., et al.",
        journal: "Nature",
        year: "2021",
        doi: "10.1038/s41586-021-03913-5",
        link: "https://www.nature.com/articles/s41586-021-03813-8",

        abstract: "Comprehensive study of human neocortical expansion revealing glutamatergic neuron diversification, providing insights into human brain evolution and cellular diversity."
    },
    {
        title: "Local field potentials encode place cell ensemble activation during hippocampal sharp wave ripples",
        authors: "Taxidis, J., et al.",
        journal: "Neuron",
        year: "2015",
        doi: "10.1016/j.neuron.2015.09.014",
        link: "https://www.cell.com/neuron/fulltext/S0896-6273(15)00636-4?elsca1=etoc&elsca2=email&elsca3=0896-6273_20150805_87_3_&elsca4=Cell+Press",
        abstract: "Investigation of how local field potentials reflect the coordinated activity of place cells during hippocampal sharp wave ripples, linking cellular and network dynamics."
    },
    {
        title: "A biophysically detailed model of neocortical local field potentials predicts the critical role of active membrane currents",
        authors: "Reimann, M.W.*, Anastassiou, C.A.*, et al.",
        journal: "Neuron",
        year: "2013",
        doi: "10.1016/j.neuron.2013.09.014",
        link: "https://www.cell.com/neuron/fulltext/S0896-6273(13)00443-1",
        pressCoverage: [
            "https://actu.epfl.ch/news/blue-brain-and-the-allen-institute-created-virtual/"
        ],
        abstract: "Computational modeling revealing that active membrane currents are essential for generating realistic local field potential patterns in the neocortex."
    },
    {
        title: "The origin of extracellular fields and currents—EEG, ECoG, LFP and spikes",
        authors: "Buzsáki, G., et al.",
        journal: "Nature Reviews Neuroscience",
        year: "2012",
        doi: "10.1038/nrn.2012.86",
        link: "https://www.nature.com/articles/nrn3241",
        abstract: "Comprehensive review of the biophysical origins of extracellular electrical signals, providing fundamental insights into neural recording techniques."
    },
    {
        title: "Ephaptic coupling of cortical neurons",
        authors: "Anastassiou, C.A.*, Perin, R.*, et al.",
        journal: "Nature Neuroscience",
        year: "2011",
        doi: "10.1038/nn.4153",
        link: "https://www.nature.com/articles/nn.2727",
        pressCoverage: [
            "https://www.eurekalert.org:443/news-releases/922986",
            "https://medicalxpress.com/news/2011-02-neurobiologists-weak-electrical-fields-brain.html",
            "http://www.scienceagogo.com/news/20110102222950data_trunc_sys.shtml",
            "https://www.sciencedaily.com/releases/2011/02/110202132617.htm",
            "https://www.caltech.edu/about/news/neurobiologists-find-weak-electrical-fields-brain-help-neurons-fire-together-1671"
        ],
        abstract: "Demonstration of ephaptic coupling between cortical neurons, revealing a novel mechanism of neural communication through extracellular electric fields."
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
                ${pub.pressCoverage ? `
                <div class="press-coverage">
                    <span class="press-label">Press coverage:</span>
                    ${pub.pressCoverage.map((link, index) => 
                        `<a href="${link}" target="_blank" class="press-link">${index + 1}</a>${index < pub.pressCoverage.length - 1 ? ' | ' : ''}`
                    ).join('')}
                </div>
                ` : ''}
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
    
    .modal-header img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 1rem;
        object-fit: cover;
        object-position: center;
    }
`;
document.head.appendChild(style);
