// ========================================
// Professional Neo-Tech Minimalism - Main JavaScript
// ========================================

// ==================== Theme Management ====================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.toggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.applyTheme();
        this.toggle?.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.theme = e.matches ? 'dark' : 'light';
                this.applyTheme();
            }
        });
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateGitHubStats();
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    updateGitHubStats() {
        const statCards = document.querySelectorAll('.github-stat-card');
        const isDark = this.theme === 'dark';
        
        statCards.forEach((card, index) => {
            if (index === 0) {
                card.src = isDark
                    ? 'https://github-readme-stats.vercel.app/api?username=ajaydsudhir&show_icons=true&theme=transparent&hide_border=true&title_color=3B82F6&icon_color=EFBF66&text_color=F8FAFC&bg_color=0B0B0D'
                    : 'https://github-readme-stats.vercel.app/api?username=ajaydsudhir&show_icons=true&theme=transparent&hide_border=true&title_color=D64545&icon_color=C48F2E&text_color=1E293B&bg_color=FFFFFF';
            } else {
                card.src = isDark
                    ? 'https://github-readme-streak-stats.herokuapp.com/?user=ajaydsudhir&theme=transparent&hide_border=true&ring=3B82F6&fire=EFBF66&currStreakLabel=F8FAFC&background=0B0B0D'
                    : 'https://github-readme-streak-stats.herokuapp.com/?user=ajaydsudhir&theme=transparent&hide_border=true&ring=D64545&fire=C48F2E&currStreakLabel=1E293B&background=FFFFFF';
            }
        });
    }
}

// ==================== Navigation Management ====================
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.setupScrollEffect();
        this.setupHamburger();
        this.setupSmoothScroll();
        this.setupActiveLink();
    }

    setupScrollEffect() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                this.navbar.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !this.navbar.classList.contains('scroll-down')) {
                // Scrolling down
                this.navbar.classList.remove('scroll-up');
                this.navbar.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && this.navbar.classList.contains('scroll-down')) {
                // Scrolling up
                this.navbar.classList.remove('scroll-down');
                this.navbar.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
        });
    }

    setupHamburger() {
        this.hamburger?.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                this.hamburger?.classList.remove('active');
                this.navMenu.classList.remove('active');
            }
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                    
                    // Close mobile menu
                    this.hamburger?.classList.remove('active');
                    this.navMenu.classList.remove('active');
                }
            });
        });
    }

    setupActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -66%'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(section => observer.observe(section));
    }
}

// ==================== Particle Background ====================
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas?.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        this.connectionDistance = 150;
        this.mouse = { x: null, y: null, radius: 150 };
        
        if (this.canvas && this.ctx) {
            this.init();
        }
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Get theme colors
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const particleColor = isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(214, 69, 69, 0.6)';
        const lineColor = isDark ? 'rgba(239, 191, 102, 0.2)' : 'rgba(196, 143, 46, 0.2)';
        
        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Move particle
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 0.2;
                    particle.vy -= Math.sin(angle) * force * 0.2;
                }
            }
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particleColor;
            this.ctx.fill();
            
            // Connect particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = particle.x - this.particles[j].x;
                const dy = particle.y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = lineColor;
                    this.ctx.lineWidth = (1 - distance / this.connectionDistance) * 2;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ==================== Scroll Animations ====================
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.skill-category, .project-card, .research-card, .blog-card, .interest-item');
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// ==================== Projects Data Management ====================
class ProjectsManager {
    constructor() {
        this.projectsGrid = document.getElementById('projectsGrid');
        this.projects = [];
        this.init();
    }

    async init() {
        await this.fetchGitHubProjects();
        this.renderProjects();
    }

    async fetchGitHubProjects() {
        try {
            const response = await fetch('https://api.github.com/users/ajaydsudhir/repos?sort=updated&per_page=6');
            const repos = await response.json();
            
            this.projects = repos
                .filter(repo => !repo.fork && repo.description)
                .slice(0, 6)
                .map(repo => ({
                    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                    description: repo.description || 'No description available',
                    tech: this.extractTechStack(repo),
                    github: repo.html_url,
                    demo: repo.homepage || null,
                    image: `https://opengraph.githubassets.com/1/${repo.full_name}`
                }));
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            this.projects = this.getDefaultProjects();
        }
    }

    extractTechStack(repo) {
        const tech = [];
        if (repo.language) tech.push(repo.language);
        
        // Add common tech based on topics
        if (repo.topics) {
            const commonTech = ['pytorch', 'tensorflow', 'react', 'python', 'javascript', 'typescript', 'docker'];
            repo.topics.forEach(topic => {
                if (commonTech.includes(topic.toLowerCase())) {
                    tech.push(topic);
                }
            });
        }
        
        return tech.slice(0, 3);
    }

    getDefaultProjects() {
        return [
            {
                title: 'AI Research Project',
                description: 'Advanced machine learning research implementation',
                tech: ['Python', 'PyTorch', 'TensorFlow'],
                github: 'https://github.com/ajaydsudhir',
                demo: null,
                image: 'assets/projects/project-placeholder.jpg'
            }
        ];
    }

    renderProjects() {
        if (!this.projectsGrid) return;
        
        this.projectsGrid.innerHTML = this.projects.map(project => `
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='assets/projects/project-placeholder.jpg'">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            ${project.demo ? `
                                <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ==================== Research Data Management ====================
class ResearchManager {
    constructor() {
        this.researchGrid = document.getElementById('researchGrid');
        this.research = this.getResearchData();
        this.init();
    }

    init() {
        this.renderResearch();
    }

    getResearchData() {
        // Placeholder data - replace with actual research publications
        return [
            {
                title: 'Neuro-Symbolic Learning for Autonomous Systems',
                description: 'Investigating the integration of symbolic reasoning with neural networks for improved interpretability and generalization in autonomous agent systems.',
                venue: 'AI Research Conference',
                year: '2024',
                link: '#',
                image: 'assets/research/research-placeholder.jpg'
            }
        ];
    }

    renderResearch() {
        if (!this.researchGrid) return;
        
        this.researchGrid.innerHTML = this.research.map(paper => `
            <div class="research-card">
                <div class="research-image-wrapper">
                    <img src="${paper.image}" alt="${paper.title}" class="research-image" onerror="this.src='assets/research/research-placeholder.jpg'">
                </div>
                <div class="research-content">
                    <h3 class="research-title">${paper.title}</h3>
                    <p class="research-description">${paper.description}</p>
                    <div class="research-meta">
                        <span class="research-venue">${paper.venue}</span>
                        <span class="research-year">${paper.year}</span>
                    </div>
                    <a href="${paper.link}" class="research-link" target="_blank" rel="noopener noreferrer">
                        Read Paper
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// ==================== Profile Image Handler ====================
class ProfileImageHandler {
    constructor() {
        this.profileImage = document.getElementById('profileImage');
        this.init();
    }

    init() {
        if (!this.profileImage) return;
        
        // Check if custom profile image exists
        this.profileImage.onerror = () => {
            // Fallback to placeholder or default avatar
            this.profileImage.src = `https://ui-avatars.com/api/?name=Ajay+D+Sudhir&size=500&background=random&bold=true&format=svg`;
        };
    }
}

// ==================== Performance Optimization ====================
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadResources();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }

    preloadResources() {
        const criticalImages = [
            'assets/profile.jpg',
            'assets/favicon.svg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

// ==================== Initialize Application ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new NavigationManager();
    new ParticleBackground();
    new ScrollAnimations();
    new ProjectsManager();
    new ResearchManager();
    new ProfileImageHandler();
    new PerformanceOptimizer();
    
    // Add smooth reveal for hero section
    setTimeout(() => {
        document.querySelector('.hero-section')?.classList.add('revealed');
    }, 100);
});

// ==================== Service Worker Registration ====================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
            registration => console.log('ServiceWorker registered'),
            err => console.log('ServiceWorker registration failed')
        ).catch(err => console.log(err));
    });
}
